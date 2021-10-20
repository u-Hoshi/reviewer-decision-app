import { Outlet } from "react-router-dom";
import { DashBoardHeader } from "../../templates/DashBoardHeader";

export const GroupLayout = () => {
  return (
    <div>
      <DashBoardHeader />
      <Outlet />
    </div>
  );
};
