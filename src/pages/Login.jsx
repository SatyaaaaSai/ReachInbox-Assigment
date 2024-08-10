import AppBar from "../components/AppBar";
import { Link } from "react-router-dom";
import { GOOGLE_URL } from "../assets/assest";

const functionGoogleClick=()=>{
  
}

const Login = () => {
  return (
    <div>
      <AppBar />
      <div className="bg-black text-white w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-[#111214] text-center space-y-10 px-16 rounded-2xl border border-[#343A40]">
          <div className="">
            <div className="text-xl font-semibold mt-6">
              Create a new account
            </div>
            <div
              className="mt-6 border-white/40 border px-20 py-2 text-sm  flex items-center text-[#CCCCCC] rounded-lg cursor-pointer"
              onClick={functionGoogleClick}
            >
              <img src={GOOGLE_URL} alt="google" className="w-4 mr-3"></img>
              Sign Up with Google
            </div>
          </div>
          <div className="">
            <Link
              to="/login" 
              className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] mx-16 mt-5 px-6 text-sm py-3 rounded-md cursor-pointer"
            >
              Create an Account
            </Link>
            <div className="my-8 mb-10 text-[#909296]">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#C1C2C5]">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
