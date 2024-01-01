import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://coinranking1.p.rapidapi.com/coins",
          {
            headers: {
              "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
              "X-RapidAPI-Key":
                "dbebaf3cd6msha666922e88cba2cp1408e8jsna8722b0b3663",
            },
          }
        );
        setCryptos(response.data.data.coins);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="title">Cryptocurrency Dashboard</h1>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.id}>
            {crypto.name} - {crypto.symbol}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
