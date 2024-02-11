import React, { useEffect, useState } from 'react';
import './jauge.css';

function Jauge({ niveau, label, animate}) {
  const [remplissage, setRemplissage] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    if (animate) {
      for (let i = 0; i < 5; i++) {
        const delay = i * 200;
        setTimeout(() => {
          setRemplissage(prev => {
            const newRemplissage = [...prev];
            newRemplissage[i] = niveau > i * 20 ? 1 : 0;
            return newRemplissage;
          });
        }, delay);
      }
    }
  }, [niveau, animate]); 

  return (
    <div className="jauge-container">
      <div className="jauge-label">{label}</div>
      <div className="jauge-bar">
        {remplissage.map((rempli, i) => (
          <div
            key={i}
            className={`jauge-rectangle ${rempli ? "filled" : ""} ${(i === 0) ? "first" : ""} ${(i === 4) ? "fin" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Jauge;


