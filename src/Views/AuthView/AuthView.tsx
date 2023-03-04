import { useLocation } from "react-router-dom";
import Login from "../../Components/Login/Login";
import Register from "../../Components/Register/Register";
const AuthView = () =>{
    const location = useLocation();

    return(<>
    <section className="section login">
      {location.pathname === '/login' && <Login />}
      {location.pathname === '/register' && <Register />}
    </section>
    </>)
}
export default AuthView;