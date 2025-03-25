import { LuLoaderCircle } from "react-icons/lu";

const LoadComponents = () => {
  return (
    <section className="load_components">
      <div className="h-[80vh] flex justify-center items-center text-5xl">
        <LuLoaderCircle className="animate-spin" />
      </div>
    </section>
  );
};

export default LoadComponents;
