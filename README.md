## Architecture


**End-to-end Architecture**

![High-level architectural diagram](diagrams/Text-Sender-AWS.png)

&nbsp;

**Frontend**

The contents and build artifacts of the website are stored in S3. Amazon CloudFront caches the frontend content from S3, presenting the application to the user via a distribution.

**Backend**

The core of the backend infrastructure consists of Amazon DynamoDB, AWS Lambda, Amazon API Gateway and AWS SNS. A Lambda function stores phone numbers from API Gateway POST requests in to a DynamoDB table. A DynamoDB stream triggers another Lambda function to grab an item from a Verse table and send a text message using AWS SNS.

<!-- ![Backend diagram](diagrams/Text-Sender-AWS.png) -->
