import React from "react";

export default function CustomPagination({
  curPage,
  total,
  limit,
  setCurPage,
}) {
  const totalPages = new Array(Math.ceil(total / limit)).fill("");

  return (
    <div>
      {totalPages.map((val, key) => {
        return (
          <button
            className={`p-1 border border-black rounded-md m-1 hover:bg-slate-100 ${
              curPage === key && "bg-slate-200"
            }`}
            key={key}
            onClick={() => {
              setCurPage(key);
            }}
          >
            {key + 1}
          </button>
        );
      })}
    </div>
  );
}
