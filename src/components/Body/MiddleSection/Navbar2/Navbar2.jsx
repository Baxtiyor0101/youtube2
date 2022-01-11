import React, { useState } from "react";

export const Navbar2 = () => {
  const [type, setType] = useState([
    "Kino",
    "Comedy",
    "Mix",
    "Cartoons",
    "Misic",
    "Football",
    "UX Tasarim",
    "Animations",
    "Best Arts",
    "Last Updates",
  ]);
  return (
    <div
      style={{
        border: "1px solid grey",
        background: "#212121",
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {type.map((value) => (
        <p
          style={{
            marginRight: "20px",
            cursor: "pointer",
            background: "grey",
            border: "1px solid grey",
            borderRadius: "30px",
            padding: "5px 12px",
          }}
        >
          {value}
        </p>
      ))}
    </div>
  );
};
export default Navbar2;
