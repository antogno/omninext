import { APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';
import jsend from 'jsend';

const failResponse = (
	data: object | string | null = null,
	statusCode: number = StatusCodes.BAD_REQUEST
): APIGatewayProxyResult => {
	return {
		statusCode: statusCode,
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(data ? jsend.fail(data) : null),
	};
};

export default failResponse;
