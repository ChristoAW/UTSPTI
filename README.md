# 7 Days Student Life Simulation — Phase 1 (JavaScript & jQuery)

This repository contains the **initial implementation** of a Tamagotchi-style life simulation game developed over a semester-long university course.

The primary focus of Phase 1 was **gameplay system design** — modeling time progression, stat decay, and complex interdependencies between player actions and outcomes.

This implementation later became the **feature benchmark** for the Phase 2 React refactor.

---

## 🏗 Project Context

- Course: PTI (Web Development)
- Team Name: BOCAN (BObo CANtik)
- Team Members:
  - 55420 — Christophorus Augusta Wangsa
  - 54004 — Marcellino Osmon
  - 55266 — Edison Sigmund
  - 53752 — Andrew Natanael Tjandra

---

## 🧩 Core Gameplay Systems

### ⏱ Time System
- 0.5 seconds real-time = 1 in-game minute  
- 12 in-game hours = 1 in-game day  
- Game starts at 05:00, Day 1, Month 1

---

### 📊 Stat System

Every in-game minute:
- Hunger, Fun, Sleep, Health decrease by **0.14%**
- If Hunger/Fun/Sleep < 10%, Health decreases an additional **0.14% per stat**
- Maximum Health decay: **0.52% per minute**

---

### 🍽 Food Effects

Each food affects multiple stats differently:

- Mie: Hunger +55, Fun +3, Health -3  
- Burger: Hunger +50, Fun +5, Health -4  
- Bakso: Hunger +45, Fun +6, Health -2  
- Chips: Hunger +20, Fun +10, Health -7  
- Salad: Hunger +35, Fun -8, Health +6  
- Pecel: Hunger +40, Fun -3, Health +5  
- Smoothies: Hunger +35, Fun -5, Health +4  
- Oatmeal: Hunger +45, Fun -5, Health +8  

Favorite food bonus:
- Fun +5

---

### 🎮 Activities

Activities affect stats every in-game hour:

- Computer: Fun +20, Hunger -5, Sleep -6.25  
- Basket: Fun +30, Hunger -10, Sleep -9.375, Health +5  
- Guitar: Fun +15, Hunger -3.75, Sleep -3.125, Health +2.5  
- Painting: Fun +15, Hunger -2.5, Sleep -2.5, Health +2.5  

Favorite activity bonus:
- Fun +5

---

### 📚 Study System

- Player selects subject and study duration
- Per hour of study:
  - Intelligence +0.5
  - Sleep -8
  - Fun -6

Favorite subject bonus:
- Intelligence +1
- Fun +2

Total Intelligence:
- Average of 4 subjects (PTI, OS, English, Calculus)

---

### 🛌 Sleep System

- Player inputs sleep duration
- Per hour of sleep:
  - Sleep +25
  - Health +10
  - Hunger -3

---

### 🚫 Action Restrictions

- If Health, Sleep, or Hunger < 10% → cannot perform fun activities
- If Health, Sleep, Hunger, or Fun < 10% → cannot study

---

## ☠️ Game Over Conditions

- Health reaches 0% → Game Over (player dies)
- Semester evaluation dates:
  - 30 June
  - 31 December

Rules:
- Intelligence < 75% → Drop Out (Game Over)
- Intelligence ≥ 75% → Semester progresses
- Graduate after passing Semester 8

---

## 📌 Notes

- This version prioritizes **feature completeness and simulation depth**
- Architectural limitations from DOM-driven logic motivated the Phase 2 refactor
