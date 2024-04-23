import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Tracker from "./Tracker";
import Analytics from "./Analytics";
import History from "./History";

export default function Dashboard() {
  const user = useSelector((state) => state.user.user);
  const [activeComponent, setActiveComponent] = useState("tracker");

  if (!user) {
    return <Navigate to="/login" />;
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case "tracker":
        return <Tracker />;
      case "analytics":
        return <Analytics />;
      case "history":
        return <History />;
      default:
        return <Tracker />;
    }
  };

  return (
    <div className="mt-[40px] bg-rose-500 w-[80%] mx-auto py-[30px] px-[30px]">
      <h1 className=" text-center text-[34px] font-bold text-white ">
        Dashboard
      </h1>
      <div className="text-[20px]  font-bold flex justify-between">
        <button onClick={() => setActiveComponent("tracker")}>Tracker</button>
        <button onClick={() => setActiveComponent("analytics")}>
          Analytics
        </button>
        <button onClick={() => setActiveComponent("history")}>History</button>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
}
