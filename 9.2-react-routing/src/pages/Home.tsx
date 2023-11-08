import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="bg-white w-full flex items-center gap-5 py-8 flex-col grow">
        <h2 className="text-4xl w-max inline font-serif">Home Page</h2>

        <p className="w-max">
          Fun fact: the time right now is {new Date().toLocaleTimeString()}.
        </p>
      </div>
    </>
  );
}

export default Home;
