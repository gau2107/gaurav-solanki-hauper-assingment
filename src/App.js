import "./App.css";
import { Route, Routes } from "react-router-dom";
import Add from "./Add";
import List from "./List";
import NotFound from "./404";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/common/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
