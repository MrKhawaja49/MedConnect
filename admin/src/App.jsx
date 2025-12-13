import React, { useContext } from "react";
import Login from "./Pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./Context/AdminContext";

const App = () => {

  const {aToken} = useContext(AdminContext)

  return aToken ? (
    <div>
      <ToastContainer/>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer/>
    </>
  );
};

export default App;
