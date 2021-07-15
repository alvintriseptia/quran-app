import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CardSurah from "../components/CardSurah";

const Home = () => {
  const [listSurah, setSurah] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredData, setFilteredData] = useState(listSurah);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = listSurah.filter((data) => {
      return data.name.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json`
      )
      .then(
        (response) => {
          setIsLoaded(true);
          setSurah(response.data);
          setFilteredData(response.data);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="container">
          <h1>Daftar Surah</h1>
          <div className="search-bar">
            <input
              placeholder="Search Surah"
              type="text"
              onChange={(event) => handleSearch(event)}
            />
          </div>

          {filteredData.map((item) => (
            <NavLink
              key={item.number_of_surah}
              className="card"
              to={`/content/${item.number_of_surah}`}
            >
              <CardSurah
                number={item.number_of_surah}
                recitation={item.recitation}
                name={item.name}
                nameTranslation={item.name_translations.id}
                type={item.type}
                totalAyat={item.number_of_ayah}
              />
            </NavLink>
          ))}
        </div>
      </>
    );
  }
};

export default Home;
