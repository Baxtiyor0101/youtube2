import React from "react";
import youtImg from "../../asset/images/Navbar/youtubeLogo.png";
import navLastIcons from "../../asset/images/Navbar/LastIcons.png";
import { Wrap } from "./styled";

const Navbar = () => {
  return (
    <Wrap>
      <img src={youtImg} alt="youtubeicon" />

      <Wrap.Form>
        <input
          style={{ width: "83%", height: "100%", outline: "none" }}
          type="text"
          placeholder="Search..."
        />
        <input
          style={{ width: "15%", height: "115%", outline: "none" }}
          type="submit"
          value="Search"
        />
      </Wrap.Form>

      <div>
        <img src={navLastIcons} alt="icons" />
      </div>
    </Wrap>
  );
};
export default Navbar;
