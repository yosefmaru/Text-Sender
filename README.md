## Architecture


**High-level, end-to-end diagram**

![High-level architectural diagram](Diagrams/ArchDiagram.png)

&nbsp;

**Frontend**

The contents and build artifacts of the website are stored in S3. Amazon CloudFront caches the frontend content from S3, presenting the application to the user via a CloudFront distribution.

**Backend**

The core of the backend infrastructure consists of Amazon DynamoDB, AWS Lambda and Amazon API Gateway. The application uses Amazon DynamoDB to store all of the data. 

![Backend diagram](Diagrams/BackendDiagram.png)
