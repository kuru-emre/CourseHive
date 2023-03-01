import { FC } from "react";
import { StyledNavbar } from ".";
import { useAppSelector } from "../../redux";
import { Avatar } from "../Avatar";

const Navbar: FC = () => {
  const { theme } = useAppSelector((state) => state.course);

  return (
    <StyledNavbar color={theme}>
      <div className="container">
        <div className="links">
          <a href="/">Homepage</a>
          <a href="/courses">Courses</a>
          <a href="/settings">Settings</a>
          <a href="/profile">Profile</a>
        </div>
        <div className="spacer"/>
        <div className="links">
          <a href="/login">Login</a>
        </div>
        <Avatar/>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
