
import {FaUser} from "react-icons/fa"
import { useAuth } from '../../../context/authcontext';
import Auth from '../../authModel/Auth';
import { useAuthModel } from '../../authModel/context/AuthModelContext';

const AuthLinks = () => {
const {isAuthenticated} = useAuth();

const {setShowAuth} = useAuthModel();
  return (
    <div className="flex">
    {isAuthenticated ? (
      <button
        className="mx-2 text-l px-3 rounded-md  font-semibold h-7"
        onClick={()=>{
            // setNavbarVisible(true)
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

    {/* {option && (
      <ShowAuthOption
        option={option}
        optionTrigger={optionTrigger}
      ></ShowAuthOption>
    )}
    <DropDownMenu visible={navbarVisible} onClose={()=>{setNavbarVisible(false)}}/> */}
    <Auth></Auth>
  </div>
  );
  
}

export default AuthLinks