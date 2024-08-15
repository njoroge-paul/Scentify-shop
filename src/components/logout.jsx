import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    // Simulate signing out the user (e.g., clear local storage or cookies)
    localStorage.removeItem("token"); // or whatever your auth token is stored as

    // Navigate back to the login page
    navigate("/login", { replace: true });
  }

  // Call the handleLogout function when the component mounts
  handleLogout();

  return (
    <>
      <Navbar>
        <Link to="/login">Login</Link>
      </Navbar>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-5xl font-bold mb-8">You have been logged out</h1>
        <p className="text-lg text-gray-600">Click <Link to="/login" className="text-blue-500 hover:text-blue-700">here</Link> to log back in.</p>
      </div>
    </>
  );
}

export default Logout;