# Production-Ready Node.js + PostgreSQL Backend on AWS

## 📌 Project Overview

This project is a **production-ready backend application** deployed on **AWS EC2**, connected to **PostgreSQL (AWS RDS)**, and managed using **PM2** and **Nginx**.

The application exposes REST APIs that fetch data from a PostgreSQL database and return responses in JSON format.

---

## 🛠️ Tech Stack

- **Backend:** Node.js (HTTP module)
- **Database:** PostgreSQL (AWS RDS)
- **Server:** AWS EC2 (Amazon Linux)
- **Process Manager:** PM2
- **Reverse Proxy:** Nginx
- **Configuration Management:** dotenv
- **Version Control:** Git

---

## 🏗️ Architecture
Browser
↓
Nginx (Port 80)
↓
Node.js App (Port 3000)
↓
PostgreSQL RDS (Port 5432)
