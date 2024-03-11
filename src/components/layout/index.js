import React from "react";

const ContentsLayout = ({ children, isBg }) => {
  return (
    <section className={`layout responsive ${isBg ? "bg" : ""}`}>
      <div className="layout__inner-container">{children}</div>
    </section>
  );
};

export default ContentsLayout;
