import BtnLogIn from "./BtnLogIn";
import BtnSignUp from "./BtnSignUp";

const SideBarDown = () => {
  return (
    <div className="d-flex flex-column px-3">
      <BtnSignUp />
      <BtnLogIn />
      <div className="smaller text-center text-secondary">
        Cookie Policy | Privacy
      </div>
    </div>
  );
};

export default SideBarDown;
