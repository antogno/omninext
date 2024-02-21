import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import env from '../config/env';
import dynamoDbClient from '../database/client';
import { StatusCodes } from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';

export const handler = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	const { name, surname, username } = JSON.parse(event.body ?? '{}');

	if (!name || !surname || !username) {
		return {
			statusCode: StatusCodes.BAD_REQUEST,
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ error: 'Missing required fields' }),
		};
	}

	const id = uuidv4();

	const params = {
		TableName: env.tableName,
		Item: {
			id,
			name,
			surname,
			username,
		},
	};

	try {
		await dynamoDbClient.send(new PutCommand(params));

		return {
			statusCode: StatusCodes.CREATED,
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ id, name, surname, username }),
		};
	} catch (error) {
		console.error(error);

		return {
			statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ error: 'Internal server error' }),
		};
	}
};
