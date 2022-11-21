import React, { useState, useEffect } from "react";
// import data from "../../../data";

const Stories = () => {
  // const [people] = useState(data);
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const lastIndex = people.length - 1;
  //   if (index < 0) {
  //     setIndex(lastIndex);
  //   }
  //   if (index > lastIndex) {
  //     setIndex(0);
  //   }
  // }, [index, people]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index++);
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // }, [index]);

  return (
    <div className="stories">
      <h1 className="title">Students' stories</h1>
      <div className="storiesContainer">
        <div className="arrows">
          <i className="fa-sharp fa-solid fa-angle-left"></i>
        </div>
        <div className="card">
          <div className="person">
            <img src="/images/img1.JPG" alt="agoh" />
            <h3>Agoh Chidera</h3>
            <p>
              <i>Department Computer Science - Unizik</i>
            </p>
          </div>
          <div className="quote">
            <h1>
              <i className="fa-solid fa-quote-left"></i>
              &nbsp; stories Page dsh dbvudi baudf bafducias bfaiq bfshfi sahif
              bvkf vwskd fbvuisefbvsebfw fw fu &nbsp;
              <i className="fa-solid fa-quote-right"></i>
            </h1>
          </div>
        </div>
        <div className="arrows">
          <i className="fa-sharp fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
    // <h1>hello</h1>
  );
};

export default Stories;
