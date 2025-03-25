import { useNavigate } from "react-router";
import Image7 from "../assets/log.avif";
import { useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../Context/AuthContext";

const login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

      if (!response.ok) {
        console.log("invalid credentials");
        return;
      }
      const data = await response.json();
      alert("login Successfully");
      login(data.token);
      navigate("/translate");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="h-screen flex space-x-0 justify-center items-center py-8 bg-black">
      <div className="bg-[#0d0d0d] py-6 px-4 rounded-sm">
        <div className="loggedInfo">
          <p></p>
        </div>
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

export default login;
