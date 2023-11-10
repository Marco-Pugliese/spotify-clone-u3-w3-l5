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
      <div className="mt-5 border-top border-top-secondary w-100">
        <Link to={"/myPlaylist"} className="nav-link">
          <span className="smaller texthover">PlayList di prova</span>
        </Link>
      </div>
    </div>
  );
};
export default SideBarUp;
