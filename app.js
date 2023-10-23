// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    const styles = ev.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count === 0) { 
      value.style.color = "hsl(209, 61%, 16%)";
    }else {
      value.style.color = "red";
    }

    value.textContent = count;
  });



});
