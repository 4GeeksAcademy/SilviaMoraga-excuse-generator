/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let textExcuse = document.getElementById("excuse");
  textExcuse.innerText = generateExcuse();
  console.dir(textExcuse);

  function generateExcuse() {
    let who = ["My dog", "My grandmother", "My fish", "My neighbor"];
    let action = ["ate", "broke", "burned", "exploded"];
    let what = ["my keys", "my notebook", "my food", "the street"];
    let when = [
      "yesterday",
      "when I was in the shower",
      "when I was sleepping",
      "this morning"
    ];

    function RandomGenerator(list) {
      return list[Math.floor(Math.random() * list.length)];
    }
    return (
      RandomGenerator(who) +
      " " +
      RandomGenerator(action) +
      " " +
      RandomGenerator(what) +
      " " +
      RandomGenerator(when)
    );
  }
};
