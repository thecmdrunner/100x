import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="bg-white ">
        <div className="p-20">
          <div className="flex gap-5 justify-evenly">
            <button
              className="bg-gradient-to-tr from-cyan-700 to-emerald-500 text-white px-3 py-2 rounded-full"
              onClick={() => navigate("/about/fruit/1")}
            >
              Fruit 1
            </button>
            <button
              className="bg-gradient-to-tr from-cyan-700 to-emerald-500 text-white px-3 py-2 rounded-full"
              onClick={() => navigate("/about/fruit/2")}
            >
              Fruit 2
            </button>
            <button
              className="bg-gradient-to-tr from-pink-700 to-red-500 text-white px-3 py-2 rounded-full"
              onClick={() => navigate("/about/fruit/26")}
            >
              Fruit 26
            </button>
          </div>
        </div>
        <h2 className="text-4xl text-center ">This is About Page</h2>
      </div>
    </>
  );
}

export default About;
