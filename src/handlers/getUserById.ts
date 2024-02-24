import { GetCommand } from '@aws-sdk/lib-dynamodb';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import env from '../config/env';
import dynamoDbClient from '../config/database';
import { StatusCodes } from 'http-status-codes';
import errorResponse from '../responses/errorResponse';
import failResponse from '../responses/failResponse';
import successResponse from '../responses/successResponse';

export const handler = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	const id = event.pathParameters?.id;

	if (!id) {
		return failResponse({ id: 'The ID is required' });
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

			return successResponse({ id, name, surname, username });
		} else {
			return failResponse('User not found', StatusCodes.NOT_FOUND);
		}
	} catch (error) {
		console.error(error);

		return errorResponse();
	}
};
