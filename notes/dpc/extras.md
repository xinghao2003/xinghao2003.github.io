---
layout: default
title: Distributed and Parallel Computing Extras
---

### DPC Quiz - Module 2 Cloud Economics and Billing Questions

**Q10. If you would like proactive guidance, AWS Support has AWS Trusted Advisor \_ who are designated as that user's primary point of contact. The AWS Concierge Support \_ can provide guidance, architectural review, and continuous ongoing communication to keep you informed and prepared as you plan, deploy, and optimize your solutions**

**A:** The question appears to have confused the roles of different AWS support features. Based on the "Cloud Economics and Billing" presentation (slide 50), the roles are as follows:

- **Proactive Guidance:** A **Technical Account Manager (TAM)** is your designated primary point of contact who provides proactive guidance, architectural review, and helps you optimize your solutions.
- **Best Practices:** **AWS Trusted Advisor** is an automated tool that provides best practice recommendations.
- **Account Assistance:** The **AWS Support Concierge** team helps with billing and account-related inquiries.

---

### Module 1 Questions

**Q2. What is the pricing model that enables AWS customers to pay for resources on an as-needed basis?**

**A:** The pricing model is **Pay-as-you-go**. Customers pay only for the services they consume with no large upfront expenses (Source: Cloud Concepts Overview, Slide 6).

**Q3. Which of these is not a cloud deployment?**

**A:** The three cloud deployment models described in the slides are (Source: Cloud Concepts Overview, Slide 11):

1.  **Cloud:** Fully deployed in the cloud.
2.  **Hybrid:** Connects on-premises infrastructure to cloud resources.
3.  **On-premises (Private Cloud):** Using virtualization and resource management tools on-premises.

Any option not listed above would be the correct answer.

**Q5. Which of these is not a benefit of cloud computing over on-premises computing?**

**A:** The six main advantages of cloud computing mentioned are (Source: Cloud Concepts Overview, Slides 15-21):

1.  Trade capital expense for variable expense.
2.  Benefit from massive economies of scale.
3.  Stop guessing capacity.
4.  Increase speed and agility.
5.  Stop spending money on running and maintaining data centers.
6.  Go global in minutes.

Any option that does not align with these benefits would be the correct answer.

**Q7. Which of the following is a compute service? (Select the best answer)**

**A:** AWS offers many compute services. Key examples covered in the course include (Source: Compute, Slide 5):

- Amazon Elastic Compute Cloud (Amazon EC2)
- AWS Lambda
- AWS Elastic Beanstalk
- Amazon Elastic Container Service (Amazon ECS)
- AWS Fargate

**Q9. Economics of Scale result from**

**A:** Economies of scale result from **aggregate usage from all customers**, which allows AWS to achieve higher efficiencies and pass those savings on to customers (Source: Cloud Concepts Overview, Slide 16).

---

### Module 2 Questions

**Q2. Where can a customer go to get more details about Amazon Elastic Compute Cloud (Amazon EC2) billing activity that took the place 3 months ago?**

**A:** A customer can use **AWS Cost Explorer** to view and analyze their costs and usage. It has tools to filter data by time periods, such as the last 3 months, and group by service to see EC2-specific costs (Source: Cloud Economics and Billing, Slide 43).

**Q6. What AWS tool compares the cost of running your application in an on-premises data center to AWS?**

**A:** The concept for this comparison is **Total Cost of Ownership (TCO)**. The **AWS Pricing Calculator** is the tool used to model and estimate the costs of your solutions on AWS, which can then be used for a TCO comparison against on-premises costs (Source: Cloud Economics and Billing, Slides 17 & 20).

**Q7. As AWS grows, the cost of doing business is reduced and savings are passed back to the customer with lower pricing. What is this optimization called?**

**A:** This is called **Economies of scale**. By aggregating usage from hundreds of thousands of customers, AWS can achieve significant economies of scale and pass the benefits on to customers in the form of lower prices (Source: Cloud Economics and Billing, Slide 10).

---

### Module 4 Questions

**Q1. What is the AWS Shared Security Model?**

**A:** The AWS Shared Responsibility Model defines the security obligations of AWS and its customers.

- **AWS is responsible for "Security OF the Cloud":** This includes protecting the physical hardware, software, networking, and facilities that run AWS Cloud services.
- **The Customer is responsible for "Security IN the Cloud":** This includes managing customer data, configuring access controls (e.g., IAM), managing platform and application security, and configuring the operating system, network, and firewalls for services like Amazon EC2.
  (Source: AWS Cloud Security, Slides 5-7).

---

### DPC Test 1 Questions

**Q3. XYZ Corp has a large amount of data that they need to archive for compliance and regulatory purposes. The data is rarely accessed, but it must be stored securely and durably for a long period at the lowest possible cost. They also need to ensure that the data meets stringent regulatory requirements for security and compliance. Question: Which AWS storage service should XYZ Corp use to archive their data in a secure, durable, and cost-effective manner?**

**A:** XYZ Corp should use **Amazon S3 Glacier**. It is a data archiving service designed for security, durability, and extremely low cost, making it ideal for long-term archival of rarely accessed data (Source: Storage, Slide 46).

**Q5. ABC Inc. is developing a new application and wants to focus on coding and deploying the application without worrying about managing the underlying system. They need a platform that provides a complete development and deployment environment with tools, libraries, and frameworks. Question: Which cloud service model should ABC Inc. use to develop and deploy their application without managing the underlying system?**

**A:** ABC Inc. should use the **Platform as a Service (PaaS)** model. PaaS provides a platform where customers can develop, run, and manage applications without the complexity of building and maintaining the underlying infrastructure (Source: Cloud Concepts Overview, Slide 10). A relevant AWS service is AWS Elastic Beanstalk.

**Q6. Which perspective of the AWS Cloud Adoption Framework focuses on the skills and processes needed to align IT strategy and goals with business strategy and goals so the organization can maximize the business value of its IT investment and minimize business risks?**

**A:** The **Governance Perspective** of the AWS Cloud Adoption Framework (CAF) focuses on aligning IT and business strategies to maximize business value and minimize risks (Source: Cloud Concepts Overview, Slide 36).

---

### DPC Past Test 2 Combined Questions

**Q3. What is the main usage/function of Amazon Lambda?**

**A:** The main function of AWS Lambda is to run code without provisioning or managing servers. It is a **serverless compute service** that executes your code in response to events and automatically manages the underlying compute resources for you (Source: Compute, Slide 61).

**Q4. What is the main usage/function of Amazon Elastic Beanstalk?**

**A:** The main function of AWS Elastic Beanstalk is to provide an easy way to **deploy and scale web applications and services**. It is a managed service that automatically handles infrastructure provisioning, deployment, load balancing, and application health monitoring (Source: Compute, Slide 70).

**Q5. Which AWS service is best suited for running containerized applications?**

**A:** **Amazon Elastic Container Service (Amazon ECS)** is a highly scalable, fast container management service best suited for running, stopping, and managing containerized applications on a cluster (Source: Compute, Slide 53).

**Q6. Which AWS service is best suited for running Kubernetes clusters?**

**A:** **Amazon Elastic Kubernetes Service (Amazon EKS)** is the best-suited service, as it is a managed service that enables you to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane (Source: Compute, Slide 57).

**Q13. What is the primary use case for Amazon S3?**

**A:** The primary use case for Amazon S3 is as a fully managed **object storage service**. Common uses include storing application assets, static web hosting, backup and disaster recovery, and serving as a data lake for analytics (Source: Storage, Slide 29).

**Q14. Which AWS storage service is designed for long-term archival storage?**

**A:** **Amazon S3 Glacier** is the AWS storage service designed specifically for secure, durable, and low-cost data archiving and long-term backup (Source: Storage, Slide 46).

**Q15. Which AWS storage service provides block-level storage for EC2 instances?**

**A:** **Amazon Elastic Block Store (Amazon EBS)** provides persistent, high-performance block-level storage volumes for use with Amazon EC2 instances (Source: Storage, Slide 8).

**Q16. What is the primary use case for Amazon EFS?**

**A:** The primary use case for **Amazon Elastic File System (Amazon EFS)** is to provide simple, scalable, and **shared file storage** that can be accessed by multiple Amazon EC2 instances concurrently. It's ideal for content management, web serving, and big data analytics (Source: Storage, Slide 38).

---

### DPC Past Test 1 Combined Questions

**Q11. This part carries 5 marks of the total test marks. You should write the full name of each abbreviation table. Each question carries a 0.5 mark.**

| No  | Abbreviation | Full Name                          |
| --- | ------------ | ---------------------------------- |
| 1   | IAM          | AWS Identity and Access Management |
| 2   | ELB          | Elastic Load Balancing             |
| 3   | EC2          | Amazon Elastic Compute Cloud       |
| 4   | VPC          | Amazon Virtual Private Cloud       |
| 5   | RDS          | Amazon Relational Database Service |
| 6   | AWS CAF      | AWS Cloud Adoption Framework       |
| 7   | Amazon S3    | Amazon Simple Storage Service      |
| 8   | EFS          | Amazon Elastic File System         |
| 9   | EBS          | Amazon Elastic Block Store         |
| 10  | ECS          | Amazon Elastic Container Service   |

**Q2. Compare the key advantages of cloud computing and traditional IT infrastructure.**

**A:**

| Feature                | Traditional IT Infrastructure                                                                                                    | Cloud Computing (AWS)                                                                                          |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Cost Structure**     | **Capital Expense (CapEx):** Requires large upfront investment in hardware and infrastructure.                                   | **Variable Expense (OpEx):** Pay-as-you-go model with no upfront costs.                                        |
| **Capacity**           | **Guesswork:** Capacity must be provisioned in advance based on peak forecasts, often leading to wasted resources or shortfalls. | **Elastic:** Scale resources up or down on demand, paying only for what is used.                               |
| **Speed & Agility**    | **Slow:** Long procurement and deployment cycles, measured in weeks or months.                                                   | **Fast:** New resources can be provisioned in minutes, enabling rapid innovation.                              |
| **Global Reach**       | **Limited & Expensive:** Building a global infrastructure is complex and costly.                                                 | **Instant:** Deploy applications in multiple AWS Regions around the world in minutes.                          |
| **Maintenance**        | **Customer Managed:** The customer is responsible for all maintenance, including power, cooling, and hardware replacements.      | **AWS Managed:** AWS manages the underlying infrastructure, allowing customers to focus on their applications. |
| **Economies of Scale** | **Limited:** Scale is limited to the individual organization's purchasing power.                                                 | **Massive:** Benefit from AWS's massive economies of scale, resulting in lower prices.                         |

(Source: Cloud Concepts Overview, Slides 8-9; Cloud Economics and Billing, Slide 16).
