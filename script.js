setInterval(kurangMakan, 1000);
setInterval(jam, 1000);

function kurangMakan() {
  document.getElementById("makancoba").value += 10;
  test = document.getElementById("makan");
  style = test.getAttribute("style");
  stylenum = Number(style.replace(/[^0-9]/g, ""));
  console.log(stylenum);
  if (stylenum > 0) {
    stylenum -= 10;
  }
  style = "width: " + stylenum + "%";
  console.log(style);
  test.setAttribute("style", style);
}

function tambahMakan() {
  document.getElementById("makancoba").value += 10;
  test = document.getElementById("makan");
  style = test.getAttribute("style");
  stylenum = Number(style.replace(/[^0-9]/g, ""));
  console.log(stylenum);
  if (stylenum < 100) {
    stylenum += 10;
  }
  style = "width: " + stylenum + "%";
  console.log(style);
  test.setAttribute("style", style);
}

function jam() {
  hour = Number(document.getElementById("hour").textContent);
  minute = Number(document.getElementById("minute").textContent);
  console.log("before");
  console.log(hour + ":" + minute);
  minute += 10;
  if (minute == 60) {
    hour += 1;
    minute = 00;
  }
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
}
