import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authcontext";
import { Logout } from "../../logout/logout";

type DropDownMenuProps = {
  show: boolean;
  onClose: Function;
};
const DropDownMenu = (props: DropDownMenuProps) => {

  const{setAuthenticated} = useAuth();
  const handleLogOut = async () => {
    try {
      await Logout();
      setAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  };

  if(!props.show)
  return null;
  return (
    <div id="dropdown" className="fixed inset-0" onClick={()=>props.onClose()}>
      <div
        className="fixed w-52 h-auto shadow-md flex flex-col top-16 right-14 bg-white px-2 py-2 "
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Link
          to="/myprofile"
          id="profile"
          className="w-100 hover:bg-gray-200 my-2 py-1 text-left px-1"
        >
          Profile
        </Link>
        <button
          className="w-100 hover:bg-gray-200 my-2 py-1 text-left px-1"
          onClick={() => {
            handleLogOut();
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default DropDownMenu;
