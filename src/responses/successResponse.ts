import { APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';
import jsend from 'jsend';

const successResponse = (
	data: object | null = null,
	statusCode: number = StatusCodes.OK
): APIGatewayProxyResult => {
	return {
		statusCode: statusCode,
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(data ? jsend.success(data) : null),
	};
};

export default successResponse;
