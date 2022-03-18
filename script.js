var jam, dayTime, momenSemesteran, pengurangan;
//JQUERY

$(document).ready(function () {
  $(".mainMenu").hide();
  $(".menuBelajar").hide();
  $(".menuMakan").hide();
  $(".menuTidur").hide();
  $(".menuFun").hide();
  $(".stats").hide();
});
$("#readyToPlay").click(function () {
  pelajaranFavorit = $("#pelajaranFavorit").val();
  makananFavorit = $("#makananFavorit").val();
  aktivitasFavorit = $("#aktivitasFavorit").val();
  nama = $("#inputNama").val();
  if (
    pelajaranFavorit != "Pilih Pelajaran Favorit" &&
    makananFavorit != "Pilih Makanan Favorit" &&
    aktivitasFavorit != "Pilih Aktivitas Favorit" &&
    nama != ""
  ) {
    $(".loginMenu").hide();
    $(".mainMenu").show();
    $(".stats").show();
    pengurangan = setInterval(kurangStatis, 500);
    jam = setInterval(waktu, 500);
    dayTime = setInterval(timeOfDay, 30000);
    momenSemesteran = setInterval(semesteran, 720000);
    $("#nama").text(nama);
    if (i == 0) {
      $(".model-img").attr("src", "gif/pria.gif");
    } else {
      $(".model-img").attr("src", "gif/wanita.gif");
    }
  }
  if (pelajaranFavorit == "Pilih Pelajaran Favorit") {
    alert("Pilih Pelajaran Favorit !");
  }
  if (makananFavorit == "Pilih Makanan Favorit") {
    alert("Pilih Makanan Favorit !");
  }
  if (aktivitasFavorit == "Pilih Aktivitas Favorit") {
    alert("Pilih Aktivitas Favorit !");
  }
  if (nama == "") {
    alert("Isi Nama Terlebih Dahulu !");
  }
  setImg();
});
$("#toggleBelajar").click(function () {
  kesehatan = Number(
    document
      .getElementById("kesehatan")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  energy = Number(
    document
      .getElementById("tidur")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  fun = Number(
    document
      .getElementById("fun")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  hunger = Number(
    document
      .getElementById("makan")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  if (kesehatan < 10) {
    alert("Kamu Sakit, jaga kesehatanmu !");
  }
  if (energy < 10) {
    alert("Kamu Ngantuk, jangan lupa tidur !");
  }
  if (fun < 10) {
    alert("Kamu Sedih, jangan lupa bermain!");
  }
  if (hunger < 10) {
    alert("Kamu Lapar, jangan lupa makan!");
  }
  if (kesehatan >= 10 && energy >= 10 && fun >= 10 && hunger >= 10) {
    $(".mainMenu").hide();
    $(".menuBelajar").show();
  }
});
$("#toggleTidur").click(function () {
  $(".mainMenu").hide();
  $(".menuTidur").show();
});
$("#toggleMakan").click(function () {
  $(".mainMenu").hide();
  $(".menuMakan").show();
});
$("#toggleFun").click(function () {
  kesehatan = Number(
    document
      .getElementById("kesehatan")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  energy = Number(
    document
      .getElementById("tidur")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  hunger = Number(
    document
      .getElementById("makan")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  if (kesehatan < 10) {
    alert("Kamu Sakit, jaga kesehatanmu !");
  }
  if (energy < 10) {
    alert("Kamu Ngantuk, jangan lupa tidur !");
  }
  if (hunger < 10) {
    alert("Kamu Lapar, jangan lupa makan!");
  }
  if (kesehatan >= 10 && energy >= 10 && hunger >= 10) {
    $(".mainMenu").hide();
    $(".menuFun").show();
  }
});
$(".back").click(function () {
  $(".menuTidur").hide();
  $(".menuBelajar").hide();
  $(".menuMakan").hide();
  $(".menuFun").hide();
  $(".mainMenu").show();
});

//JAVASCRIPT
document.onload = wii();

//test timelapse
function timelapse(lama) {
  expectedHour = Number(document.getElementById("hour").textContent) + lama;
  expectedMinute = Number(document.getElementById("minute").textContent);

  if (expectedHour > 24) expectedHour %= 24;

  clearInterval(jam);
  jam = setInterval(waktu, 1);
  clearInterval(dayTime);
  dayTime = setInterval(timeOfDay, 60);
  clearInterval(pengurangan);
  pengurangan = setInterval(kurangStatis, 10);
  clearInterval(momenSemesteran);
  momenSemesteran = setInterval(semesteran, 1440);
  cek = setInterval(function () {
    hour = Number(document.getElementById("hour").textContent);
    minute = Number(document.getElementById("minute").textContent);
    if (hour == expectedHour && minute == expectedMinute) {
      clearInterval(jam);
      jam = setInterval(waktu, 500);
      clearInterval(dayTime);
      dayTime = setInterval(timeOfDay, 30000);
      clearInterval(pengurangan);
      pengurangan = setInterval(kurangStatis, 500);
      clearInterval(momenSemesteran);
      momenSemesteran = setInterval(semesteran, 720000);
      clearInterval(cek);
    }
  }, 1);
}

//CHARACTER

//bagian pilih char
var char_img = document.querySelector(".char-img");
var images = ["male.png", "female.png"];
var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return char_img.setAttribute("src", "gambar/" + images[i]);
}

//sampe sini

//MAKAN
//bagian pilih makan
var makanan_img = document.querySelector(".makanan-img");
var makananImg = [
  "mieGoreng.png",
  "burgir.jpg",
  "bakso.png",
  "keripikKentang.png",
  "salad.png",
  "pecel.png",
  "smoothiesBowl.png",
  "oatmeal.png",
];
var makanan = 0;
function prevMakan() {
  if (makanan <= 0) makanan = makananImg.length;
  makanan--;
  return setImgMakanan();
}

function nextMakan() {
  if (makanan >= makananImg.length - 1) makanan = -1;
  makanan++;
  return setImgMakanan();
}

function setImgMakanan() {
  return makanan_img.setAttribute("src", "gambar/" + makananImg[makanan]);
}

//FUN
//bagian pilih fun
var fun_img = document.querySelector(".fun-img");
var funImg = ["komputer.gif", "basketball.gif", "gitar.gif", "melukis.gif"];
var counterFun = 0;

function prevFun() {
  if (counterFun <= 0) counterFun = funImg.length;
  counterFun--;
  return setImgFun();
}

function nextFun() {
  if (counterFun >= funImg.length - 1) counterFun = -1;
  counterFun++;
  return setImgFun();
}

function setImgFun() {
  return fun_img.setAttribute("src", "gif/" + funImg[counterFun]);
}

function tambahFun() {
  barTidur = document.getElementById("tidur").getAttribute("style");
  barTidurNum = Number(barTidur.replace(/[^.-9]/g, ""));
  barMakan = document.getElementById("makan").getAttribute("style");
  barMakanNum = Number(barMakan.replace(/[^.-9]/g, ""));
  lamaFun = Number(document.getElementById("jamFun").value);
  mainApa = counterFun;
  if (barTidurNum >= 10 && lamaFun * 6.25 <= barTidurNum) {
    console.log(mainApa);
    if (lamaFun > 0 && lamaFun <= 24) {
      timelapse(lamaFun);
      jalanFun = setInterval(function () {
        barFun = document.getElementById("fun").getAttribute("style");
        barFunNum = Number(barFun.replace(/[^.-9]/g, ""));
        barKesehatan = document
          .getElementById("kesehatan")
          .getAttribute("style");
        barKesehatanNum = Number(barKesehatan.replace(/[^.-9]/g, ""));
        barMakan = document.getElementById("makan").getAttribute("style");
        barMakanNum = Number(barMakan.replace(/[^.-9]/g, ""));
        barTidur = document.getElementById("tidur").getAttribute("style");
        barTidurNum = Number(barTidur.replace(/[^.-9]/g, ""));
        if (mainApa == 0) {
          barFunNum += 20;
          barMakanNum -= 5;
          barTidurNum -= 6.25;
        } else if (mainApa == 1) {
          barFunNum += 30;
          barMakanNum -= 10;
          barTidurNum -= 9.375;
          barKesehatanNum += 5;
        } else if (mainApa == 2) {
          barFunNum += 15;
          barMakanNum -= 3.75;
          barTidurNum -= 3.125;
          barKesehatanNum += 2.5;
        } else if (mainApa == 3) {
          barFunNum += 15;
          barMakanNum -= 2.5;
          barTidurNum -= 2.5;
          barKesehatanNum += 2.5;
        }
        //kalau favorit
        if (mainApa == aktivitasFavorit.value) {
          console.log("berhasil");
          barFunNum += 5;
        } else {
          console.log("berhasil tapi tidak favorit");
        }
        //manage overflow value
        if (barFunNum > 100) {
          barFunNum = 100;
        }
        if (barKesehatanNum > 100) {
          barKesehatanNum = 100;
        }
        if (barTidurNum < 0) {
          barTidurNum = 0;
        }
        if (barMakanNum < 0) {
          barMakanNum = 0;
        }
        barMakan = "width: " + barMakanNum + "%";
        document.getElementById("makan").setAttribute("style", barMakan);
        barFun = "width: " + barFunNum + "%";
        document.getElementById("fun").setAttribute("style", barFun);
        barKesehatan = "width: " + barKesehatanNum + "%";
        document
          .getElementById("kesehatan")
          .setAttribute("style", barKesehatan);
        barTidur = "width: " + barTidurNum + "%";
        document.getElementById("tidur").setAttribute("style", barTidur);
        lamaFun--;
        if (lamaFun == 0) {
          clearInterval(jalanFun);
        }
      }, 60);
    } else {
      alert("Mohon masukkan value lama 1-24");
    }
  } else {
    alert("Kamu kecapean, tidur dulu ya !");
  }
}

function kurangStatis() {
  barMakan = document.getElementById("makan").getAttribute("style");
  barMakanNum = Number(barMakan.replace(/[^.-9]/g, ""));
  barKesehatan = document.getElementById("kesehatan").getAttribute("style");
  barKesehatanNum = Number(barKesehatan.replace(/[^.-9]/g, ""));
  barFun = document.getElementById("fun").getAttribute("style");
  barFunNum = Number(barFun.replace(/[^.-9]/g, ""));
  barTidur = document.getElementById("tidur").getAttribute("style");
  barTidurNum = Number(barTidur.replace(/[^.-9]/g, ""));
  if (barMakanNum > 0) {
    barMakanNum -= 0.14;
  }
  if (barFunNum > 0) {
    barFunNum -= 0.14;
  }
  if (barTidurNum > 0) {
    barTidurNum -= 0.14;
  }
  if (barKesehatanNum > 0) {
    barKesehatanNum -= 0.14;
    if (barMakanNum < 10) {
      barKesehatanNum -= 0.14;
    }
    if (barFunNum < 10) {
      barKesehatanNum -= 0.14;
    }
    if (barTidurNum < 10) {
      barKesehatanNum -= 0.14;
    }
  }
  barMakan = "width: " + barMakanNum + "%";
  document.getElementById("makan").setAttribute("style", barMakan);
  barFun = "width: " + barFunNum + "%";
  document.getElementById("fun").setAttribute("style", barFun);
  barKesehatan = "width: " + barKesehatanNum + "%";
  document.getElementById("kesehatan").setAttribute("style", barKesehatan);
  barTidur = "width: " + barTidurNum + "%";
  document.getElementById("tidur").setAttribute("style", barTidur);
  kesehatanCheck();
}

function tambahMakan() {
  makanApa = makanan;
  barMakan = document.getElementById("makan").getAttribute("style");
  barMakanNum = Number(barMakan.replace(/[^.-9]/g, ""));
  barKesehatan = document.getElementById("kesehatan").getAttribute("style");
  barKesehatanNum = Number(barKesehatan.replace(/[^.-9]/g, ""));
  barFun = document.getElementById("fun").getAttribute("style");
  barFunNum = Number(barFun.replace(/[^.-9]/g, ""));
  console.log("before: " + barMakanNum, barFunNum, barKesehatanNum);
  if (barMakanNum >= 91) {
    alert("Kenyang!");
  } else {
    if (makanApa == 0) {
      console.log("berhasil");
      barMakanNum += 55;
      barFunNum += 3;
      barKesehatanNum -= 3;
    } else if (makanApa == 1) {
      console.log("berhasil");
      barMakanNum += 50;
      barFunNum += 5;
      barKesehatanNum -= 4;
    } else if (makanApa == 2) {
      console.log("berhasil");
      barMakanNum += 45;
      barFunNum += 6;
      barKesehatanNum -= 2;
    } else if (makanApa == 3) {
      console.log("berhasil");
      barMakanNum += 20;
      barFunNum += 10;
      barKesehatanNum -= 7;
    } else if (makanApa == 4) {
      console.log("berhasil");
      barMakanNum += 35;
      barFunNum -= 8;
      barKesehatanNum += 6;
      console.log(barMakanNum, barFunNum, barKesehatanNum);
    } else if (makanApa == 5) {
      console.log("berhasil");
      barMakanNum += 40;
      barFunNum -= 3;
      barKesehatanNum += 5;
      console.log(barMakanNum, barFunNum, barKesehatanNum);
    } else if (makanApa == 6) {
      console.log("berhasil");
      barMakanNum += 35;
      barFunNum -= 5;
      barKesehatanNum += 4;
      console.log(barMakanNum, barFunNum, barKesehatanNum);
    } else if (makanApa == 7) {
      console.log("berhasil");
      barMakanNum += 45;
      barFunNum -= 5;
      barKesehatanNum += 8;
      console.log(barMakanNum, barFunNum, barKesehatanNum);
    }
    //kalau favorit
    if (makanApa == makananFavorit.value) {
      console.log("berhasil");
      barFunNum += 5;
    } else {
      console.log("berhasil tapi tidak favorit");
    }
    //manage value overflow
    if (barMakanNum > 100) {
      barMakanNum = 100;
    }
    if (barKesehatanNum > 100) {
      barKesehatanNum = 100;
    }
    if (barFunNum > 100) {
      barFunNum = 100;
    }
    //masukin value ke html
    barMakan = "width: " + barMakanNum + "%";
    document.getElementById("makan").setAttribute("style", barMakan);
    barFun = "width: " + barFunNum + "%";
    document.getElementById("fun").setAttribute("style", barFun);
    barKesehatan = "width: " + barKesehatanNum + "%";
    document.getElementById("kesehatan").setAttribute("style", barKesehatan);
    kesehatanCheck();
    console.log(barMakanNum, barFunNum, barKesehatanNum);
  }
}

//BELAJAR
function tambahBelajar() {
  //perubahan bar belajar local
  barTidur = document.getElementById("tidur").getAttribute("style");
  barTidurNum = Number(barTidur.replace(/[^.-9]/g, ""));
  barFun = document.getElementById("fun").getAttribute("style");
  barFunNum = Number(barFun.replace(/[^.-9]/g, ""));
  lamaBelajar = Number(document.getElementById("jamBelajar").value);
  belajarApa = document.getElementById("belajarApa").value;
  console.log("belajarApa:" + belajarApa);
  if (belajarApa == "Ingin belajar apa ?") {
    alert("Pilih Mata Kuliah");
  } else {
    if (lamaBelajar <= 0 || lamaBelajar > 24) {
      alert("Mohon masukkan value lama 1-24");
    } else {
      if (barTidurNum >= 10 && lamaBelajar * 6.25 <= barTidurNum) {
        timelapse(lamaBelajar);
        belajar = setInterval(function () {
          barBelajar = document
            .getElementById(belajarApa)
            .getAttribute("style");
          barBelajarNum = Number(barBelajar.replace(/[^.-9]/g, ""));
          barBelajarNum += 0.5;
          barTidurNum -= 8;
          barFunNum -= 6;
          if (barBelajarNum > 100) {
            barBelajarNum = 100;
          }
          if (belajarApa == pelajaranFavorit.value && barBelajarNum < 100) {
            console.log("berhasil");
            barBelajarNum += 1;
            barFunNum += 2;
          } else if (
            belajarApa != pelajaranFavorit.value &&
            barBelajarNum < 100
          ) {
            console.log("berhasil tapi tidak favorit");
          } else {
            console.log("mentok oi");
          }
          barBelajar = "width: " + barBelajarNum + "%";
          document.getElementById(belajarApa).setAttribute("style", barBelajar);
          barTidur = "width: " + barTidurNum + "%";
          document.getElementById("tidur").setAttribute("style", barTidur);
          barFun = "width: " + barFunNum + "%";
          document.getElementById("fun").setAttribute("style", barFun);
          lamaBelajar--;
          console.log(lamaBelajar);
          console.log(barBelajarNum);
          if (lamaBelajar == 0) {
            clearInterval(belajar);
          }
        }, 60);
      } else {
        alert("Kamu Lelah!");
      }
    }
  }

  //perubahan bar belajar global
  barBelajarGlobalNum = Number(
    document
      .getElementById("belajar")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  os = Number(
    document
      .getElementById("os")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  kalkulus = Number(
    document
      .getElementById("kalkulus")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  inggris = Number(
    document
      .getElementById("inggris")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );
  pti = Number(
    document
      .getElementById("pti")
      .getAttribute("style")
      .replace(/[^.-9]/g, "")
  );

  barBelajarGlobalNum = 0.25 * (os + kalkulus + inggris + pti);
  document
    .getElementById("belajar")
    .setAttribute("style", "width: " + barBelajarGlobalNum + "%");
}

//TIDUR

function tambahTidur() {
  lamaTidur = Number(document.getElementById("jamTidur").value);
  if (lamaTidur <= 0 || lamaTidur > 24) {
    alert("Mohon masukkan value 1-24");
  } else {
    timelapse(lamaTidur);
    tidur = setInterval(function () {
      barTidur = document.getElementById("tidur").getAttribute("style");
      barTidurNum = Number(barTidur.replace(/[^.-9]/g, ""));
      barKesehatan = document.getElementById("kesehatan").getAttribute("style");
      barKesehatanNum = Number(barKesehatan.replace(/[^.-9]/g, ""));
      barMakan = document.getElementById("makan").getAttribute("style");
      barMakanNum = Number(barMakan.replace(/[^.-9]/g, ""));
      barTidurNum += 25;
      barKesehatanNum += 10;
      barMakanNum -= 3;
      if (barTidurNum > 100) {
        barTidurNum = 100;
      }
      if (barKesehatanNum > 100) {
        barKesehatanNum = 100;
      }
      barMakan = "width: " + barMakanNum + "%";
      document.getElementById("makan").setAttribute("style", barMakan);
      barTidur = "width: " + barTidurNum + "%";
      document.getElementById("tidur").setAttribute("style", barTidur);
      barKesehatan = "width: " + barKesehatanNum + "%";
      document.getElementById("kesehatan").setAttribute("style", barKesehatan);
      lamaTidur--;
      console.log(barKesehatan);
      if (lamaTidur == 0) {
        clearInterval(tidur);
      }
    }, 60);
  }
}

//WAKTU

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

//TIME OF DAY

function timeOfDay() {
  hour = Number(document.getElementById("hour").textContent);
  dayStatus = document.getElementById("timeOfDay").textContent;
  if (hour >= 0 && hour < 12) {
    dayStatus = "Morning";
    document.body.style.backgroundImage = "url('gambar/pagi.png')";
  } else if (hour >= 12 && hour < 18) {
    dayStatus = "Afternoon";
    document.body.style.backgroundImage = "url('gambar/evening.png')";
  } else {
    dayStatus = "Evening";
    document.body.style.backgroundImage = "url('gambar/night.png')";
  }
  document.getElementById("timeOfDay").innerHTML = dayStatus;
}

//GAMEOVER

function gameOver(status) {
  document.body.setAttribute("style", "background-color: black");
  if (status == "mati") {
    document.body.innerHTML =
      "<iframe width='100%' height='1080' src='https://www.youtube.com/embed/-ZGlaAxB7nI?autoplay=1&mute=0' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  } else if (status == "tidakLulus") {
    document.body.innerHTML =
      "<iframe width='100%' height='1080' src='https://www.youtube.com/embed/MS8OawQegYE?autoplay=1&mute=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  } else {
    document.body.innerHTML =
      "<iframe width='100%' height='1080' src='https://www.youtube.com/embed/O71fetlkCZo?autoplay=1&mute=0' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  }
  clearInterval(jam);
  clearInterval(dayTime);
  clearInterval(momenSemesteran);
  clearInterval(pengurangan);
  document.getElementById("wii").pause();
}

//SEMESTERAN

function semesteran() {
  tanggal = Number(document.getElementById("hari").textContent);
  bulan = Number(document.getElementById("bulan").textContent);
  if ((tanggal == 30 && bulan == 6) || (tanggal == 31 && bulan == 12)) {
    barBelajarNum = Number(
      document
        .getElementById("belajar")
        .getAttribute("style")
        .replace(/[^.-9]/g, "")
    );
    semester = Number(document.getElementById("semester").textContent);
    if (barBelajarNum >= 75 && semester < 8) {
      semester++;
      document.getElementById("semester").innerHTML = semester;
    } else if (barBelajarNum >= 75 && semester == 8) {
      gameOver("lulus");
      alert("Selamat kamu lulus !");
    } else {
      gameOver("tidakLulus");
      alert("Kamu di DO, coba lagi ya !");
    }

    barBelajarNum = 0;
    barBelajar = "width: " + barBelajarNum + "%";
    document.getElementById("belajar").setAttribute("style", barBelajar);
  }
}

function kesehatanCheck() {
  barKesehatan = document.getElementById("kesehatan").getAttribute("style");
  barKesehatanNum = Number(barKesehatan.replace(/[^--9]/g, ""));
  if (barKesehatanNum <= 0) {
    gameOver("mati");
    alert("Kamu mati :(");
    console.log("gameOver");
  } else if (barKesehatanNum > 0 && barKesehatanNum <= 20) {
    console.log("Kamu Sakit!");
  }
}

function wii() {
  document.getElementById("wii").loop = true;
  document.getElementById("wii").load();
  document.getElementById("wii").play();
}
