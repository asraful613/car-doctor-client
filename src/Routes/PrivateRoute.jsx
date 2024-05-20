import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const location=useLocation()
  // console.log(location.pathname);
    const {user,loading}=useContext(AuthContext)
    if(loading){
      return  <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoute;