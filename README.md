<!DOCTYPE html>
<html>
<body>

<h1>AI Product Dashboard Backend</h1>

<p>This repository contains the server-side components for an AI product's dashboard. The backend is implemented using Node.js with Express, and AI-related functionality is provided through a Python script.</p>

<h2>Setup Instructions</h2>

<h3>Prerequisites</h3>
<ol>
  <li><strong>Node.js and npm:</strong> Make sure you have Node.js and npm (Node Package Manager) installed on your system.</li>
  <li><strong>Python:</strong> Ensure you have Python installed, along with any required dependencies for the Python script.</li>
</ol>

<h3>Installation</h3>
<ol>
  <li>Clone this repository to your local machine:</li>
</ol>

<pre><code>git clone https://github.com/Ashu-14-oct/Ai_dashboard_backend.git
cd ai-product-dashboard-backend
</code></pre>

<ol start="2">
  <li>Install Node.js dependencies:</li>
</ol>

<pre><code>npm install
</code></pre>

<h2>Usage</h2>

<ol>
  <li>Start the Node.js server:</li>
</ol>

<pre><code>node server.js
</code></pre>

<p>The server will start and listen on port 3000.</p>

<ol start="2">
  <li>Access the following endpoints:</li>
</ol>

<ul>
  <li><code>/api/metrics</code>: Retrieve mock AI model metrics data.</li>
  <li><code>/api/predictions</code>: Retrieve simulated AI predictions and actual results for data visualization.</li>
</ul>

<p>Example:</p>

<ul>
  <li>To retrieve metrics data: <a href="http://localhost:3000/api/metrics">http://localhost:3000/api/metrics</a></li>
  <li>To retrieve prediction data: <a href="http://localhost:3000/api/predictions">http://localhost:3000/api/predictions</a></li>
</ul>

<h2>Design Decisions</h2>

<ul>
  <li><strong>Separation of Concerns:</strong> The project is organized into separate folders for the backend and AI-related functionality. This separation improves maintainability and allows for easier future enhancements.</li>
  <li><strong>Express Framework:</strong> Express is used to create the Node.js server, providing a simple and efficient way to handle API requests and routes.</li>
  <li><strong>Python Integration:</strong> The Python script (<code>ai_predictions.py</code>) generates mock prediction data. It is executed from the Node.js server using the <code>child_process</code> module. The generated data is stored in <code>predictions.json</code> and served through the <code>/api/predictions</code> endpoint.</li>
  <li><strong>Error Handling:</strong> Basic error handling and status codes are implemented to handle potential issues such as file read errors or API request errors.</li>
  <li><strong>README:</strong> A detailed README file is provided to guide users through project setup, usage, and design considerations.</li>
</ul>

<h2>License</h2>

<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
