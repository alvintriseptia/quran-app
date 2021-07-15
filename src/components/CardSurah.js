import React from "react";

const cardSurah = (props) => {
  return (
    <div>
      <div className="card-header">
        <div className="number">
          <p>{props.number}</p>
        </div>
        <audio controls>
          <source src={props.recitation} type="audio/mp3"></source>
        </audio>
      </div>
      <div className="card-body">
        <div className="nama-surah">
          <h3>{props.name}</h3>
          <p>{props.nameTranslation}</p>
        </div>
        <div className="tentang-ayat">
          <p>{props.type}</p>
          <p>{props.totalAyat} Ayat</p>
        </div>
      </div>
    </div>
  );
};

export default cardSurah;
