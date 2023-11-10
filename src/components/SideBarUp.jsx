import Logo from "./Logo";
import { Link } from "react-router-dom";
import Home from "./Home";
import Library from "./Library";
import SearchInputField from "./SearchInputField";

const SideBarUp = () => {
  return (
    <div className="px-4 ">
      <Logo />
      <Link to={"/"} className="nav-link my-2">
        <Home />
      </Link>
      <Link className="nav-link my-2" to={"/myFav"}>
        <Library />
      </Link>
      <SearchInputField />
    </div>
  );
};
export default SideBarUp;
