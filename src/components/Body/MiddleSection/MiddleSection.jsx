import React from "react";
import { useReducer, useState, useEffect } from "react";
import Navbar2 from "./Navbar2/Navbar2";
import img1 from "../../../asset/images/MiddleSection/1.jpg";
import img2 from "../../../asset/images/MiddleSection/2.jpg";
import img3 from "../../../asset/images/MiddleSection/3.jpg";
import img4 from "../../../asset/images/MiddleSection/4.jpg";
import img5 from "../../../asset/images/MiddleSection/5.jpg";
import img6 from "../../../asset/images/MiddleSection/6.jpg";
import img7 from "../../../asset/images/MiddleSection/7.jpg";
import img8 from "../../../asset/images/MiddleSection/8.jpg";
import img9 from "../../../asset/images/MiddleSection/9.jpg";
import img10 from "../../../asset/images/MiddleSection/10.jpg";
import img11 from "../../../asset/images/MiddleSection/11.jpg";
import img12 from "../../../asset/images/MiddleSection/12.jpg";
import img13 from "../../../asset/images/MiddleSection/13.jpg";




export const MiddleSection = () => {
  const InitialState = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: img1,
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: img2,
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: img3,
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: img4,
      thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: img5,
      thumbnailUrl: "https://via.placeholder.com/150/f66b97",
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: img6,
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
    },
    {
      albumId: 1,
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: img7,
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumId: 1,
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: img8,
      thumbnailUrl: "https://via.placeholder.com/150/54176f",
    },
    {
      albumId: 1,
      id: 9,
      title: "qui eius qui autem sed",
      url: img9,
      thumbnailUrl: "https://via.placeholder.com/150/51aa97",
    },
    {
      albumId: 1,
      id: 10,
      title: "beatae et provident et ut vel",
      url: img10,
      thumbnailUrl: "https://via.placeholder.com/150/810b14",
    },
    {
      albumId: 1,
      id: 11,
      title: "nihil at amet non hic quia qui",
      url: img11,
      thumbnailUrl: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      albumId: 1,
      id: 12,
      title:
        "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      url: img12,
      thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
    },
    {
      albumId: 1,
      id: 13,
      title: "repudiandae iusto deleniti rerum",
      url: img13,
      thumbnailUrl: "https://via.placeholder.com/150/197d29",
    },
    {
      albumId: 1,
      id: 14,
      title: "est necessitatibus architecto ut laborum",
      url: img8,
      thumbnailUrl: "https://via.placeholder.com/150/61a65",
    },
    {
      albumId: 1,
      id: 15,
      title: "harum dicta similique quis dolore earum ex qui",
      url: img11,
      thumbnailUrl: "https://via.placeholder.com/150/f9cee5",
    },
    {
      albumId: 1,
      id: 16,
      title:
        "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
      url: img5,
      thumbnailUrl: "https://via.placeholder.com/150/fdf73e",
    },
    {
      albumId: 1,
      id: 17,
      title: "natus doloribus necessitatibus ipsa",
      url: img9,
      thumbnailUrl: "https://via.placeholder.com/150/9c184f",
    },
  ];
  

  return (
    <div style={{ flex: "80%", background: "#212121", color: "white" }}>
      <Navbar2 />
      <div
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
      >
        {InitialState.map((value) => {
          return (
            <div style={{ marginTop: "10px" }} key={value.id}>
              <img style={{ width: "300px" }} src={value.url} alt="rasm" />
              <h3>{value.title}</h3>
              <div>{value.thumbnailUrl}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MiddleSection;
