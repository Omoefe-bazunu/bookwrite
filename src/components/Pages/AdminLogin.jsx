import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../NonPages/FirebaseConfig";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Import eye icons from React Icons

export const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleLogin = async (e) => {
    e.preventDefault();
    const LogIn = document.querySelector(".LogInForm");
    const email = LogIn.email.value;
    const password = LogIn.password.value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      LogIn.reset();
      window.location.href = "/AddBooks";
    } catch (error) {
      console.log(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="LoginPage-Wrapper w-full h-full py-12 flex flex-col justify-center items-center bg-white border-t-2 border-zinc-200">
      <div className="w-5/6 h-fit flex flex-col gap-10">
        <div className="header text-2xl text-sec font-medium">Admin Login</div>
        <form
          className="LogInForm flex flex-col gap-5 justify-start my-0 mx-auto w-full"
          onSubmit={handleLogin}
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="outline-none py-3 text-primary px-5 border-b border-sec bg-tet"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              name="password"
              placeholder="Password"
              className="outline-none py-3 text-primary px-5 border-b border-sec bg-tet w-full"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-primary"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} /> // Eye icon for hidden password
              ) : (
                <AiOutlineEye size={20} /> // Eye icon for visible password
              )}
            </span>
          </div>
          <button
            type="submit"
            className="Login-Btn button bg-sec text-primary py-2 font-medium px-8 mb-24 cursor-pointer w-fit text-nowrap mt-5"
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};
