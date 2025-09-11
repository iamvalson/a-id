# A-ID Backend: FHIR-Native & AI-Powered First Aid Platform 🧠🚑

Welcome to the backend repository for **A-ID**, the AI-Powered Intelligent First Aid application. This service is the core engine that processes user requests, leverages AI for intelligent triage, integrates with FHIR for personalized health data, and provides location-based emergency services.

This backend is designed as a secure and scalable API layer built with **Node.js**, **Express**, and **TypeScript**. It utilizes **MongoDB** for specific data storage, while ensuring that no sensitive medical data is ever persisted on our servers, as this information is fetched securely and in real-time from FHIR-compliant systems via the ByteEngine Platform.

---

### 1. Architecture & Core Services 🧠

The A-ID backend is structured to be robust and efficient, focusing on three primary micro-services that correspond to the main features of the A-ID application.

#### 1.1 Triage & AI Engine
This service is the brain of the operation. It receives plain language text or voice data from the mobile app and uses ByteEngine's AI capabilities to perform a medical assessment.

* **Endpoint:** `/api/v1/triage`
* **Functionality:**
    * Ingests user-described symptoms.
    * Utilizes ByteEngine's pre-trained medical AI model to analyze the input and generate a structured JSON response with step-by-step first aid instructions.
    * Initializes a session and returns a token that is used for subsequent personalized FHIR data integration.

#### 1.2 FHIR Integration Service
This service securely handles all communication with FHIR-compliant systems through the ByteEngine platform. It ensures that personal health data is accessed and used only with explicit user consent.

* **Endpoint:** `/api/v1/patient-data`
* **Functionality:**
    * Receives a session token and patient ID.
    * Performs secure, real-time queries to ByteEngine's FHIR API for resources such as `Condition`, `MedicationRequest`, and `AllergyIntolerance`.
    * Merges this data with the AI's triage output to create a personalized, context-aware first aid plan.
    * **Crucially, no sensitive medical data is ever stored in our MongoDB instance.** This service acts as a secure pass-through.

#### 1.3 Local Emergency Services Connector
This service provides the "Lifeline" feature, connecting users to the nearest and most relevant emergency services.

* **Endpoint:** `/api/v1/emergency-services`
* **Functionality:**
    * Accepts a user's geographical coordinates (latitude, longitude).
    * Queries ByteEngine's FHIR API for `Location` and `HealthcareService` resources.
    * **Uses MongoDB to cache a list of accredited hospitals and emergency services.** This ensures faster response times for repeat queries while the primary, detailed data remains on the FHIR system. The cache is periodically updated to ensure data freshness.

---

### 2. Technology Stack 🛠️

* **Backend Framework:** **Node.js** with **Express.js**
* **Language:** **TypeScript** (for type safety and better developer experience)
* **Database:** **MongoDB** (for caching non-sensitive data like hospital locations)
* **AI/Data Platform:** ByteEngine (for FHIR and AI services)
* **ORM:** Mongoose (for interacting with MongoDB)
* **Authentication:** JWT (JSON Web Tokens) for secure API calls
* **API Documentation:** Swagger/OpenAPI
* **Containerization:** Docker (for consistent and easy deployment)

---

### 3. Getting Started: Local Development 🚀

#### Prerequisites
* **Node.js** (v14.x or higher)
* **npm** (Node Package Manager)
* **MongoDB** (Ensure you have a local instance running or a connection string to a cloud instance)
* **Docker** (optional, but recommended for consistent environments)
* **ByteEngine API Key**

#### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/iamvalson/a-id-backend.git](https://github.com/iamvalson/a-id-backend.git)
    cd a-id-backend
    ```

2.  Install NPM packages:
    ```bash
    npm install
    ```

3.  Configure environment variables:
    * Create a `.env` file in the root directory.
    * Add your ByteEngine API key and MongoDB connection string:
    ```dotenv
    BYTEENGINE_API_KEY=your_byteengine_api_key_here
    MONGO_URI=your_mongodb_connection_string
    PORT=3000
    ```

4.  Compile TypeScript to JavaScript:
    ```bash
    npm run build
    ```

5.  Run the server:
    ```bash
    npm start
    ```
    The API will now be running at `http://localhost:3000`.

---

### 4. API Documentation 📝

Once the server is running, you can access the interactive API documentation at `http://localhost:3000/docs`. This will provide a comprehensive list of all endpoints, their expected request bodies, and example responses, making it easy for frontend developers to integrate with the backend.

---

### 5. Contact 📧

For any questions or support, please open an issue in the GitHub repository or contact the project maintainers.