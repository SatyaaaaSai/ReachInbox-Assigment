import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true });
    }
    if (token) {
      localStorage.setItem("token", `Bearer${token}`);
    }
  }, [token]);
  return <div>
    <h1>
        Welcome to the Reach Inbox App!
        {token? <p>Your token is: {token}</p> : null}
    </h1>
  </div>;
};

export default MainPage;
