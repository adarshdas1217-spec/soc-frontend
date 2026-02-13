# 🔐 SOC360 + Secure File Automation Platform

Production-oriented, security-first full-stack system integrating controlled file workflows with centralized SOC monitoring, audit intelligence, and real-time alerting.

---

## 🌐 Live Applications

🔹 **SOC360 Monitoring Dashboard**  
https://soc-frontend-topaz.vercel.app/

🔹 **Secure File Automation System**  
https://file-automation-system.vercel.app/login

---

## 🔑 Demo Environment Access

This project includes restricted demo accounts for evaluation purposes.

### 🛡 SOC360 Demo Account (SOC Analyst Role)
- Email: `soc1@test.com`
- Password: `123456`

### 📁 File Automation Demo Account
- Email: `acc@dept.com`
- Password: `Acc@123`

⚠️ These credentials provide limited access and are intended strictly for demonstration in a controlled environment.

---

## 🚀 Overview

This platform simulates an enterprise-grade secure environment by combining:

- File lifecycle management with strict RBAC enforcement  
- Centralized audit logging architecture  
- Structured security log aggregation  
- Real-time SOC monitoring dashboard  

Designed to demonstrate practical implementation of authentication, authorization, detection logic, and monitoring workflows aligned with SOC best practices.

---

## 🏗️ Architecture

### Frontend – React.js
- Protected routing & session validation  
- Role-based UI segmentation  
- Secure file workflow management  
- Real-time security alert visualization  

### Backend – Node.js + Express
- JWT-based stateless authentication  
- Middleware-driven RBAC enforcement  
- Protected REST APIs  
- File workflow orchestration engine  
- Structured audit logging layer  

### Database – MongoDB
- User roles & permission mapping  
- File lifecycle metadata  
- Immutable audit trail records  
- Authentication & activity logs  

### SOC360 Monitoring Layer
- Centralized log ingestion pipeline  
- Event correlation logic  
- Threshold-based detection rules  
- Real-time alert generation (WebSockets)  
- Severity & status tracking dashboard  

---

## 🔒 Security Controls Implemented

- Principle of Least Privilege (PoLP)  
- Role-Based Access Control (RBAC)  
- JWT token validation & middleware authorization  
- Structured logging (SIEM-compatible format)  
- Audit traceability with user attribution  
- Detection rules for:
  - Brute-force attempts  
  - SQL injection patterns  
  - Reconnaissance activity  

---

## 📊 Key Capabilities

### 1️⃣ Secure File Workflow Engine
- Controlled stage-based file movement  
- Role-restricted actions  
- Complete activity traceability  

### 2️⃣ Authentication & Authorization
- Stateless JWT authentication  
- API-level role validation  
- Protected route enforcement  

### 3️⃣ Audit & Compliance Logging
- Timestamped operation tracking  
- User attribution for every action  
- Structured logs for centralized monitoring  

### 4️⃣ SOC360 Dashboard
- Aggregated security events  
- Alert classification (OPEN / IN_PROGRESS / CLOSED)  
- Severity-based monitoring  
- Authentication & API activity tracking  

---

## 🛠 Technology Stack

**Frontend**
- React.js  
- Protected Routing  
- Context API  

**Backend**
- Node.js  
- Express.js  
- JWT  
- RBAC Middleware  

**Database**
- MongoDB (Aggregation Pipelines)  

**Monitoring & Detection**
- Structured Logging  
- Event Correlation Logic  
- WebSocket Real-Time Alerts  
- ELK-style log processing architecture  

---

## 📈 Engineering Impact

This project demonstrates hands-on experience in:

- Secure REST API design  
- Authentication & authorization implementation  
- Detection rule development  
- Centralized logging architecture  
- SOC workflow simulation  
- Full-stack system security integration  

---

## 🔮 Planned Enhancements

- Splunk / Elastic SIEM integration  
- Threat scoring & anomaly detection  
- Rate limiting & API abuse prevention  
- Dockerized deployment  
- CI/CD with SAST/DAST scanning  
- Infrastructure-as-Code (Terraform)  

---

## 👨‍💻 Author

Security-focused full-stack system built to demonstrate:

- DevSecOps readiness  
- Secure backend engineering  
- SOC workflow understanding  
- Production-level system design  
