import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Navbar() {
  const { isAuth, token, email, logoutUser } = useContext(AuthContext);
  return (
    <div>
      <Link to="/">Home</Link>
      {isAuth ? (
        <button onClick={logoutUser}>LOGOUT</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      {isAuth && (
        <div>
          <li>TOKEN : {token}</li>
          <li>{email}</li>
        </div>
      )}
    </div>
  );
}

export default Navbar;
