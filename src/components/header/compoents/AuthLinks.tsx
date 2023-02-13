
import { useState } from "react";
import {FaUser} from "react-icons/fa"
import { useAuth } from '../../../context/authcontext';
import Auth from '../../authModel/Auth';
import { useAuthModel } from '../../authModel/context/AuthModelContext';
import DropDownMenu from "./DropDownMenu";

const AuthLinks = () => {
const {isAuthenticated} = useAuth();
const[showDropDown,setShowDropDown] = useState<boolean>(false);


const {setShowAuth} = useAuthModel();
  return (
    <div className="flex">
    {isAuthenticated ? (
      <button
        className="mx-2 text-l px-3 rounded-md  font-semibold h-7"
        onClick={()=>{
            setShowDropDown(true);
        }}
      >
       <FaUser/>
      </button>
    ) : (
      <>
        <button
          className="mx-2 text-l px-3 rounded-md w-20 font-semibold h-7
          text-gray-500
         hover:bg-gray-300
     transition-all duration-300 
     cursor-pointer"
          onClick={() => {
           setShowAuth(true);
          }}
        >
          LogIn
        </button>
      </>
    )}

   
    <DropDownMenu show={showDropDown} onClose={()=>{setShowDropDown(false)}}/>
    <Auth></Auth>
  </div>
  );
  
}

export default AuthLinks