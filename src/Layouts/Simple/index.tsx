import { Outlet } from 'react-router-dom';

export const SimpleLayout = () => {
  return (
    <div>
      <p>Layout</p>
      <Outlet />
    </div>
  );
};
