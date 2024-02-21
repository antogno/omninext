import { DynamoDBClient, DynamoDBClientConfig } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import env from '../config/env';

const clientConfig: DynamoDBClientConfig = {};

if (env.stage.development) {
	clientConfig.region = 'local';
	clientConfig.endpoint = 'http://localhost:8000';
}

const client = new DynamoDBClient(clientConfig);
const dynamoDbClient = DynamoDBDocumentClient.from(client);

export default dynamoDbClient;
