import React, { useEffect, useState } from "react";

function App() {
  const [dogData, setDogData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogData(data.message);
        setIsLoading(true);
      });
  }, []);

  if (!isLoading) return <p>Loading...</p>;


  return <img src={dogData} alt="A Random Dog" />;
}
export default App;
