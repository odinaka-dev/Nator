import { useState } from "react";
import Image7 from "../assets/sign.avif";
import { useNavigate, Link } from "react-router";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Post request
  const CreateNewUsers = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const item = { name, password, email };
    try {
      const response = await fetch(
        "https://nator-server.onrender.com/api/v1/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(item),
        }
      );

      if (response.status === 200 || response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/login");
      } else {
        console.error("signup failed");
        alert("signup failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-black h-screen flex sm:space-x-0  justify-center items-center">
      <div className="bg-[#0d0d0d] py-6 px-4 rounded-sm">
        <h1 className="text-[#00fcdb] uppercase text-sm  text-center my-2">
          Nator
        </h1>
        <h1 className="text-2xl text-balance max-w-[100%] mx-auto font-semibold text-center mb-8">
          Create your Account
        </h1>
        <div className="form">
          <form
            action=""
            method=""
            onSubmit={CreateNewUsers}
            className="flex flex-col gap-4 text-[#00fdbd]"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="outline-none text-[14px] p-2 w-70 sm:w-80 rounded-lg cursor-pointer bg-zinc-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            {/* <input
              type="password"
              placeholder="confirm your Password"
              className="outline-none text-[14px] p-2 w-full rounded-lg cursor-pointer bg-zinc-900"
            /> */}
            <input
              type="submit"
              value="Sign up on Nator"
              onSubmit={CreateNewUsers}
              className="text-white bg-blue-800 hover:bg-blue-900 transition-colors duration-300 p-2 rounded-lg cursor-pointer"
            />
            <Link to={"/login"}>
              <p>
                Already have an account,{" "}
                <span className="text-[#0fdbcb] text-sm font-medium">
                  Login
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

export default Signup;
