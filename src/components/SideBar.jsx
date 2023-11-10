import { Container } from "react-bootstrap";

import SideBarUp from "./SideBarUp";
import SideBarDown from "./SideBarDown";

const SideBar = () => {
  return (
    <Container
      id="sideBar"
      fluid
      className="position-fixed top-0 text-white bg-black d-flex flex-column justify-content-between py-2 position-fixed"
    >
      <SideBarUp />
      <SideBarDown />
    </Container>
  );
};
export default SideBar;
