import React from "react";
import styles from "./Steam.module.css";

interface CustomCSSProperties extends React.CSSProperties {
  "--i"?: number; // Додайте підтримку CSS змінної
}

const Steam: React.FC = () => {
  const randomNumber = () => Math.floor(Math.random() * 21); 
  return (
    <>
      <div className={styles.vapour}>
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} style={{ "--i": randomNumber() } as CustomCSSProperties}></span>
      ))}
     
      </div>
    </>
  );
};

export default Steam;
