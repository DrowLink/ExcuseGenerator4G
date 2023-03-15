/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");

  function Random() {
    var num = Math.floor(Math.random() * 5);
    return num;
  }

  function ExcuseGenerator() {
    let who = ["The dog", "My grandma", "His turtle", "My bird", "My ninja"];
    let action = ["ate", "peed", "crushed", "broke", "destroyed"];
    let what = ["my homework", "the keys", "the car", "the bridge", "the mall"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
    return (
      who[Random()] +
      " " +
      action[Random()] +
      " " +
      what[Random()] +
      " " +
      when[Random()] +
      " "
    );
  }
  console.log(ExcuseGenerator());

  const innerHTML1 = (document.getElementById(
    "excuse"
  ).innerHTML = `${ExcuseGenerator()}`);
};

//   function ExcuseGenerator() {
//     return who[Random] + action[Random] + what[Random] + when[Random];
//   }
//   console.log(ExcuseGenerator);
//
