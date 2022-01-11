import React from "react";
import MiddleSection from "./MiddleSection/MiddleSection";
import LeftSection from "./LeftSection/LeftSection";

export const Body = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftSection />
      <MiddleSection />
    </div>
  );
};
export default Body;
