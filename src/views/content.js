import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const Content = () => {
  const [showSurah, setShowSurah] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  let { identifier } = useParams();
  const [showTafsir, setShowTafsir] = useState(false);
  const [tafsir, setTafsir] = useState([]);

  const handleTafsir = () => {
    setShowTafsir(!showTafsir);
  };

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${identifier}.json`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setShowSurah(result.verses);
          setTafsir(result.tafsir.id.kemenag.text);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [identifier]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    let count = 1;
    return (
      <div className="container">
        <label for="tafsir">Tafsir : </label>
        <button className="btn-tafsir" onClick={handleTafsir}>
          {showTafsir ? "On" : "Off"}
        </button>

        <NavLink className="btn" to="/">
          Back to Quran
        </NavLink>
        {showSurah.map((item) => (
          <div key={item.number_of_surah} className="card">
            <h4>
              {item.text}
              <small> ({item.number})</small>
            </h4>
            <p>{item.translation_id}</p>
            {showTafsir ? (
              <pre>
                <br />
                <span>Tafsir :</span>
                <br />
                {tafsir[count.toString()]}
                `${count++}`
              </pre>
            ) : null}
          </div>
        ))}
      </div>
    );
  }
};

export default Content;
