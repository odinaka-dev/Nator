import Image7 from "../assets/hand-drawn-translation-services-illustration_52683-154821.jpg";

const Signup = () => {
  return (
    <section className="h-screen flex space-x-6  justify-center items-center">
      <div>
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
            className="flex flex-col gap-4 text-[#00fdbd]"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="outline-none text-[14px] p-2 w-80 rounded-lg cursor-pointer bg-zinc-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="outline-none text-[14px] p-2 w-80 rounded-lg cursor-pointer bg-zinc-900"
            />
            <input
              type="password"
              placeholder="Your Password"
              className="outline-none text-[14px] p-2 w-full rounded-lg cursor-pointer bg-zinc-900"
            />
            <input
              type="password"
              placeholder="confir your Password"
              className="outline-none text-[14px] p-2 w-full rounded-lg cursor-pointer bg-zinc-900"
            />
            <input
              type="submit"
              value="Sign up on Nator"
              className="text-white bg-blue-800 hover:bg-blue-900 transition-colors duration-300 p-2 rounded-lg cursor-pointer"
            />
          </form>
        </div>
      </div>
      <div className="w-250 relative z-[-9999]">
        <img src={Image7} alt="" className="w-full" />
      </div>
    </section>
  );
};

export default Signup;
