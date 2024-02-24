import { PutCommand } from '@aws-sdk/lib-dynamodb';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import env from '../config/env';
import dynamoDbClient from '../config/database';
import { StatusCodes } from 'http-status-codes';
import { v4 as uuidv4 } from 'uuid';
import errorResponse from '../responses/errorResponse';
import successResponse from '../responses/successResponse';
import failResponse from '../responses/failResponse';

export const handler = async (
	event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
	const { name, surname, username } = JSON.parse(event.body ?? '{}');

	const missingFields: { [k: string]: string } = {};

	if (!name) {
		missingFields.name = 'A name is required';
	}

	if (!surname) {
		missingFields.surname = 'A surname is required';
	}

	if (!username) {
		missingFields.username = 'A username is required';
	}

	if (Object.keys(missingFields).length !== 0) {
		return failResponse(missingFields);
	}

	const Item = {
		id: uuidv4(),
		name,
		surname,
		username,
	};

	const params = {
		TableName: env.tableName,
		Item,
	};

	try {
		await dynamoDbClient.send(new PutCommand(params));

		return successResponse(Item, StatusCodes.CREATED);
	} catch (error) {
		console.error(error);

		return errorResponse('Internal server error');
	}
};
