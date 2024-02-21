const stage = {
	development: process.env.STAGE === 'dev',
	production: process.env.STAGE === 'prod',
};

const env = Object.freeze({
	stage,
	tableName: process.env.TABLE_NAME,
});

export default env;
