---
layout: default
title: Final Exam - Distributed and Parallel Computing - May 2024
---

# UNIVERSITI TEKNOLOGI PETRONAS

## FINAL EXAMINATION

### MAY 2024 SEMESTER

**COURSE:** TEB3033 - DISTRIBUTED AND PARALLEL COMPUTING
**DATE:** 13 AUGUST 2024 (TUESDAY)
**TIME:** 2:30 PM - 5:30 PM (3 HOURS)

---

### INSTRUCTIONS TO CANDIDATES

1.  Answer ALL questions in the Answer Booklet.
2.  Begin EACH answer on a new page in the Answer Booklet.
3.  Indicate clearly answers that are cancelled, if any.
4.  Where applicable, show clearly steps taken in arriving at the solutions and indicate ALL assumptions, if any.
5.  DO NOT open this Question Booklet until instructed.

**Note**
i. There are ELEVEN (11) pages in this Question Booklet including the cover page
ii. DOUBLE-SIDED Question Booklet.

---

### TEB3033

#### 1. Cloud Migration for MediHealth Corp

You are a distributed systems engineer at MediHealth Corp, a company specializing in healthcare solutions. Your company offers a range of services for such customers as healthcare providers, doctors and patients. Currently, these services are operated on-premises. Your company has decided to migrate its infrastructure to the cloud. As part of this transition, MediHealth Corp is adopting the Cloud Adoption Framework (CAF) to guide its migration strategy. Your task is to ensure seamless transition from on-prem to the cloud and determine the best cloud service models for the various components of your system.

Some of the components of the system are as follows:

- **Electronic Health Records (EHR) Management:** Manages patient medical records and related data.
- **Telemedicine Platform:** Facilitates virtual consultations between patients and healthcare providers.
- **Health Analytics:** Collects and analyzes patient data to provide insights and improve healthcare services.
- **Patient Recommendation System:** Provides personalized health recommendations to patients based on their medical history and current health data.
- **Email and Collaboration Tools:** Used by your internal team for communication and project management.

Based on the scenario, answer the following questions:

**a.** Identify the best cloud service model for the Electronic Health Record (EHR) Management, given the requirement to host on dedicated compute machines for compliance, customizability, and control over the environment. Justify your answer.
[4 marks]

**b.** Determine the most suitable cloud service model for the development and testing environments of the Patient Recommendation System. Justify your answer.
[4 marks]

**c.** Propose the most suitable cloud service model for email and collaboration tools for internal communication, given the requirement for ease of use, accessibility from anywhere, seamless integration with other tools, and minimal management overhead. Justify your answer.
[4 marks]

**d.** Describe the Cloud Adoption Framework (CAF) and determine which perspective within the CAF would be most suitable for MediHealth Corp to guide its cloud migration process.
[4 marks]

**e.** Propose a suitable cloud deployment model that enables MediHealth Corp to provide health analytics and patient recommendation services with low latency to their global customers while preserving the confidentiality and integrity of sensitive patient health records. Justify your answer.
[4 marks]

---

### TEB3033

#### 2. Parallel Computing for Image Recognition

**a.** Nayla is developing a machine learning algorithm for image recognition. The original sequential version of her program takes 1 hour to process a large dataset. After parallelizing 70% of the program, the parallel version completes the processing in 10 minutes.

**i.** Determine the speedup achieved by parallelizing Nayla's program.
[3 marks]

**ii.** After parallelizing 100% of the program, Nayla runs the same program in parallel on some number of processors, and the runs took 4 minutes. Determine the parallel speedup of the program.
[3 marks]

**iii.** Determine the parallel efficiency of the parallel program if Nayla uses 50 processors and achieves a speedup of 20 times compared to the sequential version.
[3 marks]

**iv.** Based on your answer in part (a)(iii), determine whether the parallel program is efficient or not. Justify your answer.
[3 marks]

**v.** Determine the number of processors Nayla should use to ensure her program achieves a speedup of 50 while maintaining a satisfactory level of efficiency.
[4 marks]

**b.** Explain the following parallel algorithm models and provide ONE (1) example of application for each model.

**i.** Data Parallel Model,
[2 marks]

**ii.** Master Slave Model.
[2 marks]

---

### TEB3033

#### 3. ShopEase Inc. Cloud Migration to AWS

ShopEase Inc., a rapidly growing e-commerce platform, is planning to migrate its on-premises infrastructure to Amazon Web Services (AWS) cloud. The company handles a significant amount of traffic during peak shopping seasons, particularly during holiday sales. The current infrastructure consists of:

- A web application that serves thousands of users simultaneously.
- A MySQL database that stores user data and transaction records.
- A file storage system that handles product images and user-uploaded contents.
- An archiving historical sales data and reports that are infrequently accessed but need to be retained for regulatory purposes.

Based on the above scenario, answer the following questions:

**a.** Discuss TWO (2) reasons why ShopEase Inc. should migrate its on-premises infrastructure to AWS. Provide specific benefits for each reason.
[4 marks]

**b.** Propose the most appropriate AWS EC2 instance type for the web application and suggest the most suitable pricing model. Justify your answer.
[4 marks]

**c.** Identify which security responsibilities fall under ShopEase Inc. and which security responsibilities fall under the AWS. Provide specific examples for each.
[4 marks]

**d.** Recommend AWS storage solutions for handling product images and user-uploaded content. Discuss the benefits of your proposed solutions.
[4 marks]

**e.** Propose AWS service (s) that ShopEase Inc. could use to store and archive historical sales data and reports sales data that are infrequently accessed.
[4 marks]

---

### TEB3033

#### 4. PetroTech Bhd IAM and Security

**a.** PetroTech Bhd is a large company specializing in oil and gas exploration and production. The company has many departments such as Human Resources, Finance, IT, Maintenance, and numerous employees. Due to the sensitive nature of the business, they want to adopt secure practices to protect the company's sensitive data. You have been asked to provide solutions for the following security, identity and access management (IAM) needs.

**i.** Propose ONE (1) service to centrally manage access to multiple accounts and simplify the governance of permissions. Justify your proposed strategy.
[3 marks]

**ii.** Propose ONE (1) strategy to ensure that critical operations, such as terminating instances, are restricted organization wide. Justify your proposed strategy.
[3 marks]

**iii.** Discuss how PetroTech Bhd can implement the principle of least privilege when configuring IAM policies. Provide an example of how this principle can be applied.
[3 marks]

**iv.** Determine ONE (1) solution or service that can be used to protect against Distributed Denial of Service (DDoS) attacks on PetroTech Bhd's servers and data. Justify your choice.
[2 marks]

**b.** CommTech is a multinational technology firm that provides a cloud-based communication platform for global enterprises. The platform supports real-time messaging, video conferencing, and collaboration tools used by millions of users worldwide. To maintain a competitive edge and meet growing demand, CommTech is planning to expand its infrastructure into new regions while optimizing performance and minimizing latency for its global user base.

**i.** Explain THREE (3) factors that CommTech should consider when selecting regions for expanding its infrastructure.
[3 marks]

**ii.** Recommend ONE (1) deployment strategy that CommTech should use to ensure high availability and fault tolerance for its services. Justify your recommendation.
[3 marks]

**iii.** Recommend ONE (1) deployment strategy that CommTech should use to minimize latency for its global user base. Justify your recommendation.
[3 marks]

---

### TEB3033

#### 5. AgriSmart Solutions: IoT and Microservices

AgriSmart Solutions specializes in developing Internet of Things (IoT) solutions for smart farming, aimed at revolutionizing agricultural practices through advanced sensor technologies and data-driven insights. The AgriSmart platform integrates various sensors placed across farmlands to monitor soil moisture levels, temperature, humidity, and crop growth parameters in real-time. This data is processed and analyzed within the platform to provide farmers with actionable insights, enabling precise irrigation scheduling, optimal fertilizer application, and early detection of crop diseases or anomalies.

**a.** Compare and contrast monolithic and microservices architectures with regards to the AgriSmart platform.
[4 marks]

**b.** Identify TWO (2) features or functions of the AgriSmart platform that could benefit from serverless computing. Describe the features or functions including the trigger and the processes involved.
[4 marks]

**c.** Discuss the difference between virtual machines and containers. Provide examples related to the Agrismart platform.
[2 marks]

**d.** Propose ONE (1) containerization strategy for managing microservices within the AgriSmart platform. Justify your proposed strategy.
[3 marks]

**e.** Propose ONE (1) orchestration strategy for managing containerized microservices within the AgriSmart platform. Justify your proposed strategy.
[3 marks]

**f.** Based on your answers in part (d) and part (e), describe the detailed steps involved for the proposed containerization and orchestration strategies and draw a system architecture diagram that illustrates the strategies for the AgriSmart platform.
[4 marks]

---

**-END OF PAPER-**

---
