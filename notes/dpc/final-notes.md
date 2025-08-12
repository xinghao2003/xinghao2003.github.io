---
layout: default
title: Distributed and Parallel Computing - Final Exam Notes
---

### **Key Acronyms**

- **VPC:** Virtual Private Cloud
- **EC2:** Elastic Compute Cloud
- **S3:** Simple Storage Service
- **EBS:** Elastic Block Store
- **EFS:** Elastic File System
- **RDS:** Relational Database Service
- **IAM:** Identity and Access Management
- **CDN:** Content Delivery Network
- **DNS:** Domain Name System
- **CLI:** Command Line Interface
- **SDK:** Software Development Kit
- **AMI:** Amazon Machine Image
- **AZ:** Availability Zone
- **TCO:** Total Cost of Ownership
- **CAF:** Cloud Adoption Framework
- **IaaS:** Infrastructure as a Service
- **PaaS:** Platform as a Service
- **SaaS:** Software as a Service

---

## Course Introduction & Module 1: Cloud Concepts Overview

### **Section 1: What is Cloud Computing?**

- **Definition:** The on-demand delivery of IT resources (compute, storage, databases, etc.) over the internet with **pay-as-you-go pricing**.
- **Core Idea:** It shifts the perspective from infrastructure as physical hardware to **infrastructure as software**.
- **Cloud Service Models:**
  - **Infrastructure as a Service (IaaS):** Provides access to fundamental resources like compute, networking, and storage. You manage the OS and applications. (e.g., Amazon EC2). **Highest level of control.**
  - **Platform as a Service (PaaS):** You manage your application code, while the provider manages the underlying hardware and operating system. (e.g., AWS Elastic Beanstalk).
  - **Software as a Service (SaaS):** The provider manages everything; you simply use the software. (e.g., Gmail, AWS services like Amazon Chime). **Lowest level of control.**
- **Cloud Deployment Models:**
  - **Cloud:** Fully deployed in the cloud.
  - **Hybrid:** Connects on-premises infrastructure to cloud resources.
  - **On-premises (Private Cloud):** Uses virtualization and resource management tools in a private data center, sometimes referred to as a private cloud.

### **Section 2: Six Advantages of Cloud Computing**

1.  **Trade Capital Expense for Variable Expense:** Pay for what you consume instead of investing heavily in data centers and servers upfront.
2.  **Benefit from Massive Economies of Scale:** AWS's scale allows them to achieve lower costs, which are passed on to customers as lower prices.
3.  **Stop Guessing Capacity:** Scale up or down automatically based on demand, eliminating the risk of over-provisioning (wasted money) or under-provisioning (poor user experience).
4.  **Increase Speed and Agility:** Provision new resources in minutes, not weeks or months, allowing for faster innovation and experimentation.
5.  **Stop Spending Money on Running and Maintaining Data Centers:** Offload the work of racking, stacking, and powering servers to AWS, allowing you to focus on your core business.
6.  **Go Global in Minutes:** Deploy applications in multiple AWS Regions around the world with just a few clicks to provide lower latency and a better experience for global customers.

### **Section 3 & 4: Introduction to AWS & the Cloud Adoption Framework (CAF)**

- **What is AWS?** A secure cloud platform offering a broad set of global cloud products. Services are designed to work together like building blocks.
- **Three Ways to Interact with AWS:**
  1.  **AWS Management Console:** Easy-to-use graphical web interface.
  2.  **AWS Command Line Interface (CLI):** Access services via scripts and discrete commands.
  3.  **Software Development Kits (SDKs):** Access services directly from your code (Python, Java, etc.).
- **AWS Cloud Adoption Framework (CAF):** Provides guidance and best practices to help organizations build a comprehensive approach to cloud computing.
- **Six CAF Perspectives:**
  - **Business Perspectives (Focus on Business Capabilities):**
    - **Business:** Align IT with business needs and outcomes.
    - **People:** Manage training, staffing, and organizational change.
    - **Governance:** Maximize business value and minimize business risks.
  - **Technical Perspectives (Focus on Technical Capabilities):**
    - **Platform:** Understand and architect the target state environment.
    - **Security:** Ensure the organization meets its security objectives.
    - **Operations:** Define how day-to-day business will be conducted.

---

## Module 2: Cloud Economics and Billing

### **Section 1 & 2: Fundamentals of Pricing & TCO**

- **Three Fundamental Drivers of Cost:**
  1.  **Compute:** Charged per hour or per second (varies by instance type).
  2.  **Storage:** Charged typically per GB.
  3.  **Data Transfer:** Outbound data transfer is aggregated and charged. Inbound is free (with some exceptions).
- **AWS Pricing Philosophy:**
  - **Pay for what you use:** No upfront expenses.
  - **Pay less when you reserve:** Use **Reserved Instances (RIs)** to get up to a 75% discount for a 1- or 3-year commitment.
  - **Pay less by using more:** Benefit from volume-based discounts (tiered pricing).
- **AWS Free Tier:** Gain hands-on experience for 1 year for new customers. Some services have an "Always Free" tier.
- **Total Cost of Ownership (TCO):** A financial estimate to help identify the direct and indirect costs of a system. The **AWS Pricing Calculator** is used to estimate monthly costs and compare them to on-premises solutions.
  - **Hard Benefits:** Reduced spending (compute, storage), reduced hardware purchases (capex).
  - **Soft Benefits:** Increased developer productivity, improved customer satisfaction, business agility.

### **Section 3 & 4: AWS Organizations & Billing Tools**

- **AWS Organizations:** An account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage.
  - **Organizational Units (OUs):** A way to group accounts to easily manage them.
  - **Service Control Policies (SCPs):** Offer centralized control over the AWS services and API actions that each account can access. **SCPs set maximum permissions (guardrails); they do not grant permissions.**
  - **Consolidated Billing:** Get a single bill for all accounts in the organization and benefit from aggregated usage for volume discounts.
- **AWS Billing and Cost Management Tools:**
  - **Billing Dashboard:** A centralized view of your monthly spending.
  - **AWS Budgets:** Set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount.
  - **AWS Cost Explorer:** A tool that enables you to visualize, understand, and manage your AWS costs and usage over time.
  - **AWS Cost and Usage Report:** The most comprehensive set of cost and usage data available.

### **Section 5: Technical Support**

- **AWS Support Plans:**
  - **Basic:** Free. Access to Resource Center, Service Health Dashboard, and product FAQs.
  - **Developer:** For early development and testing. Includes business-hour email access to Cloud Support Associates.
  - **Business:** For production workloads. Provides 24x7 phone, email, and chat access to Cloud Support Engineers. Includes AWS Trusted Advisor checks.
  - **Enterprise:** For business-critical workloads. All Business plan features plus a designated **Technical Account Manager (TAM)**.

---

## Module 3: AWS Global Infrastructure Overview

- **Regions:** A physical geographic location in the world with multiple Availability Zones. Regions are isolated from each other.
- **Factors for Choosing a Region:**
  1.  **Data Governance/Sovereignty:** Where your data must legally reside.
  2.  **Latency:** Proximity to your end-users.
  3.  **Service Availability:** Not all services are available in all Regions.
  4.  **Cost:** Pricing can vary between Regions.
- **Availability Zones (AZs):** One or more discrete data centers with redundant power, networking, and connectivity within a Region. They are isolated from failures in other AZs. Best practice is to run applications across at least two AZs for high availability.
- **Points of Presence (Edge Locations):** A worldwide network of data centers that Amazon CloudFront uses to deliver content with lower latency. They cache content closer to end-users.

---

## Module 4: AWS Cloud Security

### **Section 1: Shared Responsibility Model**

- **AWS is responsible for "Security OF the Cloud":**
  - The physical hardware, software, networking, and facilities that run AWS services.
  - Managing the global infrastructure (Regions, AZs, Edge Locations).
- **The Customer is responsible for "Security IN the Cloud":**
  - Managing their data (including encryption).
  - Configuring security groups, network ACLs, and IAM policies.
  - Patching the guest operating system and applications on IaaS services like EC2.
  - Managing user access and credentials.

### **Section 2 & 3: IAM and Securing an AWS Account**

- **IAM (Identity and Access Management):** A global service that allows you to manage access to AWS services and resources securely. It's a no-cost feature.
- **IAM Components:**
  - **User:** A person or application that can authenticate with an AWS account.
  - **Group:** A collection of IAM users. Permissions are applied to the group, and all users in the group inherit them.
  - **Policy:** A JSON document that defines permissions (which resources can be accessed and what actions are allowed).
  - **Role:** An IAM identity with specific permissions that is intended to be assumable by a person, application, or service. Provides **temporary** security credentials.
- **Best Practices for Securing a New AWS Account:**
  1.  **Stop using the root user:** Create an administrative IAM user for daily tasks.
  2.  **Enable Multi-Factor Authentication (MFA)** for the root user and all IAM users.
  3.  **Apply the principle of least privilege:** Grant only the permissions required to perform a task.
  4.  **Use AWS CloudTrail:** Tracks user activity and API calls for auditing.
  5.  **Configure a strong password policy.**
  6.  **Enable a billing report/alert.**

### **Section 4-6: Other Security Services**

- **AWS Shield:** A managed Distributed Denial of Service (DDoS) protection service. Shield Standard is free; Shield Advanced is a paid service.
- **AWS Key Management Service (KMS):** Makes it easy to create and manage cryptographic keys and control their use.
- **Amazon Cognito:** Adds user sign-up, sign-in, and access control to your web and mobile apps.
- **AWS Artifact:** A central resource for compliance-related information. Provides access to AWS's security and compliance reports.
- **AWS Config:** A service that enables you to assess, audit, and evaluate the configurations of your AWS resources.

---

## Module 5: Networking and Content Delivery

### **Section 1-4: Networking, VPC, and Security**

- **Amazon VPC (Virtual Private Cloud):** A service that lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
- **VPC Components:**
  - **Subnet:** A range of IP addresses in your VPC. Can be **public** (has a route to an Internet Gateway) or **private**.
  - **Internet Gateway (IGW):** A horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.
  - **NAT Gateway:** Enables instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances.
  - **Route Table:** A set of rules, called routes, that are used to determine where network traffic is directed.
- **VPC Security Layers (Firewalls):**
  - **Security Groups:** Act as a firewall for associated EC2 instances, controlling both inbound and outbound traffic at the **instance level**. They are **stateful** (if you allow inbound traffic, the return outbound traffic is automatically allowed). They only support `allow` rules.
  - **Network Access Control Lists (NACLs):** Act as a firewall for associated subnets, controlling both inbound and outbound traffic at the **subnet level**. They are **stateless** (return traffic must be explicitly allowed). They support both `allow` and `deny` rules, which are evaluated in number order.

| Feature        | Security Group          | Network ACL                         |
| :------------- | :---------------------- | :---------------------------------- |
| **Scope**      | Instance Level          | Subnet Level                        |
| **Rules**      | Allow rules only        | Allow and Deny rules                |
| **State**      | Stateful                | Stateless                           |
| **Evaluation** | All rules are evaluated | Rules are evaluated in number order |

- **VPC Connectivity:**
  - **VPC Peering:** Connects two VPCs privately. Not transitive.
  - **AWS Site-to-Site VPN:** Creates a secure connection between your on-premises network and your VPC over the public internet.
  - **AWS Direct Connect:** A dedicated private network connection from your premises to AWS.
  - **AWS Transit Gateway:** Acts as a central hub to connect VPCs and on-premises networks, simplifying network management.

### **Section 5 & 6: Route 53 and CloudFront**

- **Amazon Route 53:** A highly available and scalable cloud Domain Name System (DNS) web service.
  - **Functions:** Domain registration, DNS resolution, health checking of resources.
  - **Routing Policies:** Simple, Weighted, Latency, Geolocation, Failover.
- **Amazon CloudFront:** A fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds.
  - **How it works:** Caches content at **Edge Locations** closer to users to reduce latency. The source of the files is called the **Origin** (e.g., an S3 bucket or an EC2 instance).

---

## Module 6: Compute

### **Section 1-3: EC2 and Cost Optimization**

- **Amazon EC2 (Elastic Compute Cloud):** A web service that provides secure, resizable compute capacity (virtual machines) in the cloud. It's an IaaS offering.
- **EC2 Launch Components:**
  - **AMI (Amazon Machine Image):** A template that contains the software configuration (OS, application server, and applications) required to launch your instance.
  - **Instance Type:** Defines the hardware profile (CPU, memory, storage, networking capacity).
  - **Key Pair:** Used to securely connect to your instance (SSH for Linux, RDP for Windows).
  - **User Data:** A script that is automatically run when an instance is first launched.
- **EC2 Pricing Models:**
  - **On-Demand:** Pay by the hour or second with no long-term commitment. Good for spiky, unpredictable workloads.
  - **Reserved Instances (RIs):** Significant discount for a 1- or 3-year commitment. Good for steady-state workloads.
  - **Spot Instances:** Request spare EC2 computing capacity for up to 90% off the On-Demand price. Can be interrupted with a 2-minute warning. Good for fault-tolerant, time-insensitive workloads.
  - **Dedicated Hosts:** A physical EC2 server dedicated for your use. Helps with compliance and licensing.
- **Cost Optimization Pillars:** Right sizing, increasing elasticity (auto scaling), using the optimal pricing model, and optimizing storage.

### **Section 4-6: Containers, Lambda, and Beanstalk**

- **Containers:** A method of OS virtualization that lets you run an application and its dependencies in resource-isolated processes.
  - **Docker:** A software platform for building, running, and managing containers.
- **Container Orchestration on AWS:**
  - **Amazon ECS (Elastic Container Service):** A highly scalable, high-performance container orchestration service that supports Docker containers.
  - **Amazon EKS (Elastic Kubernetes Service):** A managed service that makes it easy to run Kubernetes on AWS.
  - **AWS Fargate:** A serverless compute engine for containers that works with both ECS and EKS. It removes the need to provision and manage servers.
- **AWS Lambda:** A **serverless** compute service that lets you run code without provisioning or managing servers. You pay only for the compute time you consume. Code is organized into **Lambda functions** and is triggered by events.
- **AWS Elastic Beanstalk:** A PaaS offering that is an easy-to-use service for deploying and scaling web applications and services. You simply upload your code, and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, and auto-scaling to application health monitoring.

---

## Module 7: Storage

### **Storage Types**

- **Block Storage (e.g., Amazon EBS):** Data is stored in fixed-sized blocks. Ideal for OS boot volumes and databases where you need to change small pieces of a file frequently.
- **Object Storage (e.g., Amazon S3):** Data is stored as objects, which include the data itself, metadata, and a unique ID. To change a part of an object, you must re-upload the entire object. Ideal for storing files like images, videos, and backups.
- **File Storage (e.g., Amazon EFS):** A shared file system that can be mounted by multiple servers simultaneously. Uses a hierarchical directory structure.

### **AWS Storage Services**

- **Amazon EBS (Elastic Block Store):** Provides persistent block storage volumes for use with Amazon EC2 instances.
  - **Snapshots:** Point-in-time backups of EBS volumes, stored in S3.
  - Volumes are tied to a single AZ.
- **Amazon S3 (Simple Storage Service):** An object storage service that offers industry-leading scalability, data availability, security, and performance.
  - **Buckets:** Containers for objects. Bucket names must be globally unique.
  - **Durability:** Designed for 99.999999999% (11 nines) of durability.
  - **Storage Classes:** Standard (frequent access), Standard-IA (infrequent access), One Zone-IA, Intelligent-Tiering, Glacier, Glacier Deep Archive.
- **Amazon EFS (Elastic File System):** A simple, scalable, elastic file system for Linux-based workloads for use with AWS Cloud services and on-premises resources. Can be accessed by thousands of EC2 instances concurrently.
- **Amazon S3 Glacier:** A secure, durable, and extremely low-cost storage service for data archiving and long-term backup. Retrieval times can range from minutes to hours.

---

## Module 8: Databases

### **Database Types**

- **Relational (SQL):** Data is stored in tables with a fixed schema (rows and columns). Scales vertically. (e.g., MySQL, PostgreSQL, Oracle).
- **Non-relational (NoSQL):** Data model is flexible (key-value, document, graph). Schema is dynamic. Scales horizontally. (e.g., DynamoDB).

### **AWS Database Services**

- **Amazon RDS (Relational Database Service):** A managed service that makes it easy to set up, operate, and scale a relational database in the cloud. AWS manages the OS patching, database setup, and backups.
  - **Multi-AZ Deployment:** Creates a synchronous standby replica in a different AZ for high availability and failover.
  - **Read Replicas:** Asynchronous copies of the primary instance to scale read-heavy workloads.
- **Amazon Aurora:** A MySQL and PostgreSQL-compatible relational database built for the cloud. It offers the performance and availability of high-end commercial databases at 1/10th the cost.
- **Amazon DynamoDB:** A fast and flexible NoSQL database service for any scale. It's a fully managed, serverless, key-value and document database that delivers single-digit millisecond performance.
- **Amazon Redshift:** A fast, fully managed data warehouse that makes it simple and cost-effective to analyze all your data using standard SQL and your existing Business Intelligence (BI) tools. Uses columnar storage.
