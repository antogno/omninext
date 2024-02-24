import { APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';
import jsend from 'jsend';

const errorResponse = (
	message: string = 'Internal server error',
	statusCode: number = StatusCodes.INTERNAL_SERVER_ERROR
): APIGatewayProxyResult => {
	return {
		statusCode: statusCode,
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(jsend.error(message)),
	};
};

export default errorResponse;
