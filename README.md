# UTSPTI

Nama Kelompok: BOCAN (BObo CANtik)
Anggota:

1. 55420 - Christophorus Augusta Wangsa
2. 54004 - Marcellino Osmon
3. 55266 - Edison Sigmund
4. 53752 - Andrew Natanael Tjandra

Aturan game :

//WAKTU

- 0.5 detik real = 1 menit game (12 menit = 1 hari game)
- game dimulai pada jam 5:00 tanggal 1 bulan 1

//STATS

- Setiap 1 menit, terjadi pengurangan statis terhadap stats sebagai berikut :
  makan, fun, tidur, kesehatan berkurang 0.14%.
  namun bar kesehatan akan ditambah pengurangannya sebesar 0.14% untuk setiap stat fun/makan/tidur yang dibawah 10%.
  sehingga bar kesehatan maksimal berkurang 0.52% setiap 1 menit.
- setiap makanan memiliki penambahan stat yang berbeda:
  mie = makan (+55), fun (+3), kesehatan(-3)
  burger = makan (+50), fun (+5), kesehatan(-4)
  bakso = makan (+45), fun (+6), kesehatan(-2)
  chips = makan (+20), fun (+10), kesehatan(-7)
  salad = makan (+35), fun (-8), kesehatan(+6)
  pecel = makan (+40), fun (-3), kesehatan(+5)
  smoothies = makan (+35), fun (-5), kesehatan(+4)
  oatmeal = makan (+45), fun (-5), kesehatan(+8)
  ketika makanan merupakan favorit user maka, akan mendapatkan penambahan stat fun sebesar +5.
- setiap aktivitas juga memiliki penambahan stat yang berbeda:
  komputer = fun (+20), makan(-5), tidur(-6.25)
  basket = fun (+30), makan(-10), tidur(-9.375), kesehatan (+5)
  gitar = fun (+15), makan(-3.75), tidur(-3.125), kesehatan (+2.5)
  melukis = fun (+15), makan(-2.5), tidur(-2.5), kesehatan (+2.5)

  ketika kegiatan merupakan favorit user maka, akan mendapatkan penambahan stat fun sebesar +5.
  penambahan stat diatas dilakukan setiap 1 jam waktu berlalu saat timelapse

- belajar dilakukan dengan memilih mata kuliah yang mau dipelajar dan mengisi durasi belajar stat yang berubah adalah stat pelajaran yang dipilih tidur dan juga fun:
  setiap jam belajar:

  - bar intelligence +0,5
  - bar tidur -8
  - bar fun -6
    jika yang dipelajari adalah pelajaran favorit akan ada tambahan:
  - bar intelligence +1
  - bar fun +2
    stat intelligence total adalah 25% dari jumlah keempat mata kuliah (25% \* PTI + OS + Inggris + Kalkulus)

- Ketika user tidur, maka akan dilakukan timelapse menuju waktu yang ditentukan oleh input.
  setiap per jam tidur, maka akan ada penambahan sebesar +25 pada bar tidur , +10 pada bar kesehatan , -3 pada bar makan.

- Ketika bar/stat kesehatan, tidur, dan makan dibawah 10%, maka user tidak bisa melakukan kegiatan bermain/fun.

- ketika bar/stat kesehatan, tidur, makan, fun dibawah 10%, maka user tidak bisa belajar.

//GAMEOVER

- ketika bar kesehatan sudah mencapai 0%, maka akan terjadi game over, karena user mati. lemah

- ketika tanggal 30 bulan 6 / tanggal 31 bulan 12, akan diadakan semesteran. Jika bar intelligence dibawah 75%, maka akan terjadi game over karena user tidak lulus / Drop Out. Namun ketika lulus (intellingence diatas 75%), maka semester akan bertambah. Jika semester 8 dan user lulus, maka akan game over dengan status lulus.
