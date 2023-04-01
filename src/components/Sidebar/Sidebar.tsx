import { FC } from "react";
import { StyledSidebar } from ".";

const Sidebar: FC = () => {
  return (
    <StyledSidebar>
      <div className="sidebar">
        <a>Biology 1001</a>
        <a>Math 1001</a>
        <a>Physics 1001</a>
        <a>Arts 1001</a>
      
      </div>
    </StyledSidebar>
  );
};

export default Sidebar;
