import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [randomDog, setRandomDog] = useState("");

  const fetchDog = async () => {
    try {
      const request = await fetch("https://dog.ceo/api/breeds/image/random");
      const response = await request.json();
      setRandomDog(response.message);
    } catch (error) {
      console.log("An error occurred: " + error);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <main className="main-app">
      <div className="main-container">
        <h1>ReactRandomDOG</h1>
        <div className="card">
          <img src={randomDog} alt="Dog cover picture" />
          <p>
            Url: <span>{randomDog}</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
