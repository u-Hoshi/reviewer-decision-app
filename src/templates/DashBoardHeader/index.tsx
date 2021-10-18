import { AppBar, Toolbar } from "@material-ui/core";
import { Logo } from "../Logo";

export const DashBoardHeader = () => {
  return (
    <AppBar>
      <Toolbar>
        <div>
          <Logo />
        </div>

        
      </Toolbar>
    </AppBar>
  );
};
