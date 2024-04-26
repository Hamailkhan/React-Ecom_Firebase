import React, { useState } from "react";
import Nav from "../nav/Nav";

// export const search = (val) => {
//   let cards = document.querySelectorAll(".card");
//   let l = document.querySelectorAll(".card-title");

//   for (var i = 0; i <= l.length; i++) {
//     try {
//       const a = cards[i].querySelectorAll(".card-title")[0];

//       let value = a.innerHTML || a.innerText || a.textContent;

//       if (value.toUpperCase().indexOf(val) > -1) {
//         cards[i].style.display = "";
//       } else {
//         cards[i].style.display = "none";
//       }
//     } catch (error) {
//       console.log("error");
//     }
//   }
// };

// export const search = () => {};

const Header = () => {
  return (
    <div className="navbar bg-base-100 pl-10 pt-3 sticky top-0 left-0 z-10">
      <Nav />
    </div>
  );
};

export default Header;
