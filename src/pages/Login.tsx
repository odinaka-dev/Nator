import { useNavigate } from "react-router";
import Image7 from "../assets/log.avif";
import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { MdCheckCircle, MdOutlineError } from "react-icons/md";

const login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [errorText, setErrorText] = useState("");
  const { login } = useAuth();

  const LoginUsers = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const credentials = { email, password };
    setEmail("");
    setPassword("");

    try {
      const response = await fetch(
        "https://nator-server.onrender.com/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      const handleLog = () => {
        setisLoggedIn(true);
        navigate("/load");
        setTimeout(() => {
          navigate("/translate");
        }, 3000);
      };

      const data = await response.json();
      if (!response.ok) {
        setErrorText("incorrect email or password");
        setisLoggedIn(false);
        return;
      } else {
        login(data.token);
        // setTimeout(() => {
        //   setisLoggedIn(true);
        // }, 5000);
        // navigate("/translate");
        handleLog();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="h-screen flex space-x-0 justify-center items-center py-8 bg-black">
      <div className="bg-[#0d0d0d] py-6 px-4 rounded-sm">
        {errorText && (
          <div
            className={`loggedInfo flex space-x-2 items-center  bg-zinc-900 p-2 rounded-sm
              ${isLoggedIn ? "text-green-400" : "text-red-400"}`}
          >
            {isLoggedIn ? <MdCheckCircle /> : <MdOutlineError />}
            <p className="">{errorText}</p>
          </div>
        )}
        <h1 className="text-[#00fcdb] uppercase text-sm  text-center my-2">
          Nator
        </h1>
        <h1 className="text-2xl capitalize text-balance max-w-[100%] mx-auto font-semibold text-center mb-8">
          Login to Nator
        </h1>
        <div className="form">
          <form
            action=""
            method=""
            onSubmit={LoginUsers}
            className="flex flex-col gap-4 text-[#00fdbd]"
          >
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none text-[14px] p-2 w-70 sm:w-80 rounded-lg cursor-pointer bg-zinc-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Your Password"
              className="outline-none text-[14px] p-2 w-full rounded-lg cursor-pointer bg-zinc-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Log In to your account"
              onSubmit={LoginUsers}
              className="text-white bg-blue-800 hover:bg-blue-900 transition-colors duration-300 p-2 rounded-lg cursor-pointer"
            />
            <Link to={"/signup"}>
              <p>
                Don't have an account,{" "}
                <span className="text-[#0fdbcb] text-sm font-medium">
                  Create an account
                </span>
              </p>
            </Link>
          </form>
        </div>
      </div>
      <div className="sm:w-150 relative z-[10] hidden md:flex">
        <img src={Image7} alt="" className="w-full" />
      </div>
    </section>
  );
};

// const ErrorCheck = () => {
//   return (
//     <section className="">
//       <div className="loggedInfo flex space-x-2 items-center text-red-400 bg-zinc-900 p-2 rounded-sm">
//         <MdOutlineError />
//         <p className=""></p>
//       </div>
//     </section>
//   );
// };

export default login;
