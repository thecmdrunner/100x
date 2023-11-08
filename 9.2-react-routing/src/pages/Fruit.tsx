import { useParams } from "react-router-dom";
import Header from "../components/Header";

const fruits = {
  "1": "Apple",
  "2": "Banana",
  "3": "Cherry",
  "4": "Durian",
  "5": "Elderberry",
  "6": "Fig",
  "7": "Grape",
  "8": "Honeydew",
  "9": "Jackfruit",
  "10": "Kiwi",
  "11": "Lemon",
  "12": "Mango",
  "13": "Nectarine",
  "14": "Orange",
  "15": "Peach",
  "16": "Quince",
  "17": "Raspberry",
  "18": "Strawberry",
  "19": "Tangerine",
  "20": "Ugli fruit",
  "21": "Vanilla",
  "22": "Watermelon",
  "23": "Xigua",
  "24": "Yellow apple",
  "25": "Zucchini",
};

function Fruit() {
  const { fruitId } = useParams(); // Access the "fruitId" route parameter

  const fruit = fruitId ? fruits[fruitId as keyof typeof fruits] : null;

  return (
    <>
      <Header />
      <div className="bg-white min-h-screen ">
        <h2 className="text-4xl text-center p-20">
          {fruit ? (
            <>
              This is the page for
              <span className="font-bold px-2 underline">{fruit}</span>- with
              ID: {fruitId}
            </>
          ) : (
            <div>
              <p>[{fruitId}] Not Found! </p>

              <button
                className="bg-gradient-to-tr text-sm from-cyan-700 to-emerald-500 text-white px-3 py-2 rounded-full"
                onClick={() =>
                  alert("The secret message is: You're awesome! 💙")
                }
              >
                <span role="img" aria-label="shhh">
                  🤫
                </span>{" "}
                Show me the secret message
              </button>
            </div>
          )}
        </h2>
        <h2 className="text-2xl text-center">
          Change the URL to{" "}
          <code className="bg-neutral-300 px-2 py-1 rounded-lg">
            /about/fruit/1
          </code>
          ,{" "}
          <code className="bg-neutral-300 px-2 py-1 rounded-lg">
            /about/fruit/2
          </code>
          , etc. to see the different fruit names.
        </h2>

        <p className="p-10 text-center">
          👀 Heads up, there's a secret message when the given fruit ID doesn't
          exist!
        </p>
      </div>
    </>
  );
}

export default Fruit;
