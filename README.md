\# 🚀 Docker + AWS ECS Deployment Project



\## 📌 Overview



This project demonstrates a \*\*complete end-to-end workflow\*\* of building, containerizing, and deploying a Node.js application using Docker and AWS services.



It covers the full journey:



\* Local development

\* Docker containerization

\* Multi-container setup

\* AWS deployment (ECR + ECS + ALB)

\* CI/CD automation

\* Logging \& debugging



\---



\## 🧠 What This Project Proves



\* Ability to \*\*Dockerize real applications\*\*

\* Understanding of \*\*container lifecycle\*\*

\* Deployment using \*\*AWS ECS Fargate\*\*

\* Handling \*\*real-world debugging issues\*\*

\* Setting up \*\*CI/CD pipelines\*\*



\---



\## 🏗️ Architecture



```

User → Load Balancer → ECS (Fargate) → Docker Container → App

```



\---



\## ⚙️ Tech Stack



\* Node.js (Express)

\* Docker

\* Docker Compose

\* AWS ECS (Fargate)

\* AWS ECR

\* AWS ALB (Load Balancer)

\* AWS CloudWatch

\* GitHub Actions (CI/CD)



\---



\## 📁 Project Structure



```

.

├── server.js

├── package.json

├── Dockerfile

├── .dockerignore

├── docker-compose.yml

└── .github/workflows/deploy.yml

```



\---



\## 🔹 Step-by-Step Workflow



\### 1️⃣ Local App Setup



\* Created Node.js app using Express

\* Verified app runs locally



```bash

node server.js

```



\---



\### 2️⃣ Docker Basics



\* Learned:



&#x20; \* Image vs Container

&#x20; \* Dockerfile

&#x20; \* Port mapping



\---



\### 3️⃣ Run Containers



```bash

docker run hello-world

docker run -d -p 8080:80 nginx

```



\---



\### 4️⃣ Create Dockerfile



\* Packaged app into Docker image



\---



\### 5️⃣ Build Image



```bash

docker build -t docker-node-practice .

```



\---



\### 6️⃣ Run Container



```bash

docker run -d -p 3000:3000 docker-node-practice

```



\---



\### 7️⃣ Volumes (Live Changes)



```bash

docker run -v ${PWD}:/app docker-node-practice

```



\* Enabled real-time code updates



\---



\### 8️⃣ Docker Compose



\* Managed containers using YAML



```bash

docker compose up

```



\---



\### 9️⃣ Multi-Container Setup



\* Node.js app + MongoDB

\* Used service name for communication



\---



\### 🔟 Production Docker Image



\* Optimized using `node:18-alpine`

\* Removed dev dependencies



\---



\### 1️⃣1️⃣ Push to AWS ECR



```bash

docker tag image ECR\_URI

docker push ECR\_URI

```



\---



\### 1️⃣2️⃣ Deploy to ECS (Fargate)



\* Created cluster

\* Created task definition

\* Ran container



\---



\### 1️⃣3️⃣ Add Load Balancer



\* Used Application Load Balancer

\* Connected to ECS service



\---



\### 1️⃣4️⃣ Logging \& Debugging



\* Enabled CloudWatch logs

\* Fixed issues:



&#x20; \* Port mismatch

&#x20; \* Container crash

&#x20; \* Health check failures



\---



\### 1️⃣5️⃣ CI/CD Pipeline



Using GitHub Actions:



```yaml

Push → Build → Push to ECR → Deploy ECS

```



\---



\## 🔍 Key Learnings



\* Containers must run on `0.0.0.0`

\* `localhost` does not work between containers

\* Always check logs first (CloudWatch / Docker logs)

\* ECS requires correct port + health check

\* CI/CD removes manual deployment work



\---



\## 🚀 How to Run Locally



```bash

docker build -t app .

docker run -p 3000:3000 app

```



\---



\## 🌐 Deployment Flow



```

Local → Docker → ECR → ECS → Load Balancer → Public Access

```



\---



\## 🧪 Testing API



```bash

curl http://localhost:3000

```



\---



\## 📈 Future Improvements



\* Add RDS instead of local DB

\* Add HTTPS with domain

\* Add autoscaling

\* Add monitoring alerts



\---



\## 💼 Use Case



This project represents real-world scenarios such as:



\* Deploying production applications

\* Fixing AWS deployment issues

\* Building scalable cloud architectures



\---



\## 👨‍💻 Author



\*\*Akshay (akshaycloudops)\*\*

AWS + Docker focused cloud engineer



\---



\## ⭐ Final Note



This project is not just a demo — it reflects \*\*production-level workflow and troubleshooting skills\*\* required for real clients.



