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
---

## 🚀 Features

- REST API to fetch test case data
- PostgreSQL database integration
- Secure credentials using environment variables
- Reverse proxy using Nginx
- Process management and auto-restart using PM2
- Production-ready deployment on AWS EC2

---

## ⚙️ Setup & Installation

### 1️⃣ Launch EC2 Instance
- Amazon Linux
- Open inbound ports:
  - 22 (SSH)
  - 80 (HTTP)
  - 5432 (PostgreSQL – internal access)

---

### 2️⃣ Install Required Packages

```bash
sudo yum update -y
sudo yum install nodejs nginx -y
