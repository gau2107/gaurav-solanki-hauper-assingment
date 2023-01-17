import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditSvg from "./components/common/svg/Edit";
import DeleteSvg from "./components/common/svg/Delete";
import { applicantDataActions } from "./slices/applicant-data-slices";
import { useNavigate } from "react-router-dom";
import CustomPagination from "./components/common/CustomPagination";
import NotFound from "./404";
import FormInput from "./components/common/FormInput";
export default function List() {
  const LIMIT = 3;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.applicantData.list);
  const total = useSelector((state) => state.applicantData.total);

  const [curPage, setCurPage] = useState(0);
  const [search, setSearch] = useState("");
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    let tempArr = JSON.parse(JSON.stringify(list));
    if (search) {
      tempArr = tempArr.filter((obj) => {
        return (
          obj.firstName.includes(search) ||
          obj.lastName.includes(search) ||
          obj.mobileNo.toString().includes(search.toString()) ||
          obj.address.includes(search) ||
          obj.ifscCode.includes(search) ||
          obj.bankName.includes(search) ||
          obj.panNo.includes(search) ||
          obj.accountNo.includes(search)
        );
      });
    }
    dispatch(applicantDataActions.setTotal(tempArr.length));
    setDisplayList(tempArr.splice(curPage * LIMIT, LIMIT));
  }, [curPage, list, search]);
  const handleDelete = (index) => {
    dispatch(applicantDataActions.delete(index));
  };
  const handleEditClick = (data) => {
    dispatch(applicantDataActions.select(data));
    navigate("/");
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="mb-2 text-left m-4">
          <label htmlFor={"search"}>{"Search: "}</label>
          <input
            className="border border-black text-sm rounded-lg p-2.5 "
            value={search}
            onChange={(ev) => setSearch(ev.target.value)}
          />
        </div>
        <table className="table-auto w-full">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">#</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Mobile No.</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Address</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Bank details</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Education</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Experience</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Actions</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {displayList.map((data, key) => (
              <tr key={key}>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="font-medium text-gray-800">{key + 1}</div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">{`${data.firstName} ${data.lastName}`}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">{data.mobileNo}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className={"text-left"}>{data.address}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">
                    <p>
                      <span className="font-semibold">Bank:</span>{" "}
                      {data.bankName}
                    </p>
                    <p>
                      <span className="font-semibold">IFSC:</span>{" "}
                      {data.ifscCode}
                    </p>
                    <p>
                      <span className="font-semibold">PAN:</span> {data.panNo}
                    </p>
                    <p>
                      <span className="font-semibold">Account no:</span>{" "}
                      {data.accountNo}
                    </p>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">
                    {data.educationHistory.map((data, key) => {
                      return (
                        <div key={key}>
                          <p>
                            <span className="font-semibold">School name:</span>
                            {data.schoolName}
                          </p>
                          <p>
                            <span className="font-semibold">Passing year:</span>
                            {data.passingYear}
                          </p>
                          <p>
                            <span className="font-semibold">Marks:</span>
                            {data.marks}
                          </p>
                          <p>
                            <span className="font-semibold">Result:</span>
                            {data.result}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className={"text-left"}>
                    {data.workHistory.map((data, key) => {
                      return (
                        <div key={key}>
                          <p>
                            <span className="font-semibold">
                              Company Name:{" "}
                            </span>
                            {data.companyName}
                          </p>
                          <p>
                            <span className="font-semibold">Role</span>
                            {data.role}
                          </p>
                          <p>
                            <span className="font-semibold">Salary</span>
                            {data.salary}
                          </p>
                          <p>
                            <span className="font-semibold">Join date</span>
                            {data.joinDate}
                          </p>
                          <p>
                            <span className="font-semibold">Last day</span>
                            {data.lastDay}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div className="text-center flex">
                    <EditSvg
                      className={"pr-10"}
                      onClick={() => handleEditClick(data)}
                    />
                    <DeleteSvg onClick={() => handleDelete(key)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!displayList.length && (
          <NotFound textSize={4} msg={"Add applicants to view details"} />
        )}

        <CustomPagination
          curPage={curPage}
          total={total}
          limit={LIMIT}
          setCurPage={setCurPage}
        />
      </div>
    </div>
  );
}
