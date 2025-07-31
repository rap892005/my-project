
# E-Commerce Website Hosted on Cloud 🌐

A modern and scalable **e-commerce platform** built using **React.js** for the frontend and **Node.js/Express.js** for the backend. This application is fully hosted on **AWS Cloud**, ensuring high availability, security, and performance.

## 🚀 Features

- **User-Friendly UI**: Built with React.js for a smooth shopping experience.
- **Cloud Hosting**: Deployed using AWS services like **S3, Lambda, API Gateway**.
- **Secure Transactions**: Integrated payment gateway for safe purchases.
- **Scalable Backend**: Node.js with Express.js and **MongoDB/DynamoDB**.
- **Product Management**: Add, update, and delete products dynamically.
- **Authentication & Authorization**: Secure user login using JWT.
- **Responsive Design**: Works on desktop, tablet, and mobile.

## 🛠️ Tech Stack

### **Frontend**
- **React.js**
- **Redux (for state management)**
- **TailwindCSS / Styled Components**

### **Backend**
- **Node.js & Express.js**
- **MongoDB / DynamoDB (for data storage)**
- **JWT Authentication**

### **Cloud Services (AWS)**
- **AWS S3** – For storing images and static assets
- **AWS Lambda** – Serverless backend functions
- **AWS API Gateway** – Routing API calls securely
- **AWS DynamoDB / MongoDB** – Database for storing product and user data

## 📌 Installation Guide

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/ayushsharma-1/E-Commerce-Website-Hosted-On-Cloud.git
cd E-Commerce-Website-Hosted-On-Cloud
```

### **2️⃣ Install Dependencies**
```sh
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the **backend** directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
S3_BUCKET_NAME=your_s3_bucket_name
```

### **4️⃣ Run the Project**
```sh
# Run backend server
cd backend
npm start

# Run frontend
cd frontend
npm start
```
The app will be available at **http://localhost:3000**

## 📦 Deployment on AWS

### **Frontend Hosting**
- Deploy **React.js** app using **AWS Amplify** or **S3 + CloudFront**.

### **Backend Deployment**
- Deploy **Node.js/Express.js** with **AWS Lambda + API Gateway**.

### **Database**
- Use **AWS DynamoDB** (fully managed NoSQL) or **MongoDB Atlas**.

## 💡 Future Enhancements
- **AI-based product recommendations**
- **Real-time order tracking**
- **Multi-vendor marketplace**

## 👨‍💻 Contributors
- **Ayush Sharma** (Your Name Here)

## 📜 License
This project is licensed under the **MIT License**.

