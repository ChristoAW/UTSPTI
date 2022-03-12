function kurangMakan() {
  test = document.getElementById("makan");
  style = test.getAttribute("style");
  stylenum = Number(style.replace(/[^0-9]/g, ""));
  if (stylenum > 0) {
    stylenum -= 1;
  }
  style = "width: " + stylenum + "%";
  test.setAttribute("style", style);
}

function tambahMakan() {
  test = document.getElementById("makan");
  style = test.getAttribute("style");
  stylenum = Number(style.replace(/[^0-9]/g, ""));
  if (stylenum < 100) {
    stylenum += 10;
  }
  style = "width: " + stylenum + "%";
  test.setAttribute("style", style);
}

function tambahTidur() {
  test = document.getElementById("tidur");
  style = test.getAttribute("style");
  stylenum = Number(style.replace(/[^0-9]/g, ""));
  if (stylenum < 100) {
    stylenum += 10;
  }
  style = "width: " + stylenum + "%";
  test.setAttribute("style", style);
}

function waktu() {
  hour = Number(document.getElementById("hour").textContent);
  minute = Number(document.getElementById("minute").textContent);
  tanggal = Number(document.getElementById("hari").textContent);
  bulan = Number(document.getElementById("bulan").textContent);
  minute += 1;
  //format 24 jam
  if (minute == 60) {
    hour += 1;
    if (hour > 23) {
      hour = 0;
      tanggal += 1;
      //bulan maju kalo tanggal tertentu
      if (bulan == 2) {
        if (tanggal > 28) {
          bulan += 1;
          tanggal = 1;
        }
      } else if (
        bulan == 1 ||
        bulan == 3 ||
        bulan == 5 ||
        bulan == 7 ||
        bulan == 8 ||
        bulan == 10 ||
        bulan == 12
      ) {
        if (tanggal > 31) {
          bulan += 1;
          tanggal = 1;
        }
      } else {
        if (tanggal > 30) {
          bulan += 1;
          tanggal = 1;
        }
      }
      //ulang bulan kalo udah lebih dari 12
      if (bulan > 12) {
        bulan = 1;
      }
    }
    minute = 0;
  }
  //formatting output waktu
  if (hour < 10) {
    document.getElementById("hour").innerHTML = "0" + hour;
  } else {
    document.getElementById("hour").innerHTML = hour;
  }
  if (minute < 10) {
    document.getElementById("minute").innerHTML = "0" + minute;
  } else {
    document.getElementById("minute").innerHTML = minute;
  }
  //masukin tanggal dan bulan
  document.getElementById("hari").innerHTML = tanggal;
  document.getElementById("bulan").innerHTML = bulan;
}

function timeOfDay() {
  hour = Number(document.getElementById("hour").textContent);
  dayStatus = document.getElementById("timeOfDay").textContent;
  if (hour >= 0 && hour < 12) {
    dayStatus = "Morning";
  } else if (hour >= 12 && hour < 18) {
    dayStatus = "Afternoon";
  } else {
    dayStatus = "Evening";
  }
  document.getElementById("timeOfDay").innerHTML = dayStatus;
}
