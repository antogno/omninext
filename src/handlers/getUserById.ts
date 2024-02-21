import { GetCommand } from '@aws-sdk/lib-dynamodb';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import env from '../config/env';
import dynamoDbClient from '../database/client';
import { StatusCodes } from 'http-status-codes';

export const handler = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	const id = event.pathParameters?.id;

	if (!id) {
		return {
			statusCode: StatusCodes.BAD_REQUEST,
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ error: 'Missing ID' }),
		};
	}

	const params = {
		TableName: env.tableName,
		Key: {
			id,
		},
	};

	try {
		const { Item } = await dynamoDbClient.send(new GetCommand(params));

		if (Item) {
			const { id, name, surname, username } = Item;

			return {
				statusCode: StatusCodes.OK,
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ id, name, surname, username }),
			};
		} else {
			return {
				statusCode: StatusCodes.NOT_FOUND,
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ error: 'User not found' }),
			};
		}
	} catch (error) {
		console.error(error);

		return {
			statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ error: 'Internal server error' }),
		};
	}
};
