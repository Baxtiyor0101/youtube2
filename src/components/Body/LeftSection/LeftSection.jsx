import React from "react";
import { useReducer, useState, useEffect } from "react";
import icon1 from "../../../asset/icons/LeftSection/1.svg";
import icon2 from "../../../asset/icons/LeftSection/2.svg";
import icon3 from "../../../asset/icons/LeftSection/3.svg";
import icon4 from "../../../asset/icons/LeftSection/4.svg";
import icon5 from "../../../asset/icons/LeftSection/5.svg";
import icon6 from "../../../asset/icons/LeftSection/6.svg";
import icon7 from "../../../asset/icons/LeftSection/7.svg";
import icon8 from "../../../asset/icons/LeftSection/8.svg";
import { Wrap } from "./styled";

export const LeftSection = () => {
  const Data = [
    {
      IcolUrl: icon8,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon2,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon3,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon4,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon5,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon6,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon7,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon1,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon2,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon3,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon4,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon5,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon6,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon7,
      title: "betddjfserfr",
    },
    {
      IcolUrl: icon1,
      title: "betddjfserfr",
    },
  ];

  return (
    <div style={{ flex: "10%", background: "#212121", color: "white" }}>
      {Data.map((value) => {
        return (
          <Wrap key={value.id}>
            <img
              style={{ marginLeft: "10px" }}
              src={value.IcolUrl}
              alt="rasm"
            />
            <p style={{ marginLeft: "20px" }}>{value.title}</p>
          </Wrap>
        );
      })}
    </div>
  );
};
export default LeftSection;
