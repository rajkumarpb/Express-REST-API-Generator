"use strict";
module.exports = {
	env: process.env.NODE_ENV || 'production',
	port: process.env.PORT || 80,
	trustProxy: process.env.TRUST_PROXY || 'yes',
	bugsnagKey: process.env.BUGSNAG_KEY || false,
	secureMode: process.env.SECURE_MODE || true,
	secret: process.env.SECRET || 'lakikihdgdfdjjjdgd67264660okjnbgtrdxswerfgytg373745ei8336%%^#%gdvdhj????jjhdghduue',
	mongoURL: process.env.MONGOLAB_URL || 'mongodb://192.168.99.100/snipe',
    logMongoURL: process.env.LOG_MONGOLAB_URL || 'mongodb://192.168.99.100/snipelogs',
    noFrontendCaching: process.env.NO_CACHE || 'no',
    frontendCacheExpiry: process.env.FRONTEND_CACHE_EXPIRY || '90',
    backendCacheExpiry: process.env.BACKEND_CACHE_EXPIRY || '90',
    rateLimit: process.env.RATE_LIMIT || '1800',
    rateLimitExpiry: process.env.RATE_LIMIT_EXPIRY || '3600000',
    redisURL: process.env.REDIS_URL || 'redis://192.168.99.100:6379/1',
    letsencryptSSLVerificationURL: process.env.LETSENCRYPT_VERIFICATION_URL || '/.well-known/acme-challenge/xvArhQBSilF4V30dGUagNAZ96ASipB0b0ex0kXn0za8',
    letsencryptSSLVerificationBody: process.env.LETSENCRYPT_VERIFICATION_BODY || 'xvArhQBSilF4V30dGUagNAZ96ASipB0b0ex0kXn0za8._v6aFbaRYWeOmSebtlD-X4Ixf5tPsyULMsXM8HjsK-Q',
    maxContentLength: process.env.MAX_CONTENT_LENGTH || '9999',
    enforceSSL: process.env.ENFORCE_SSL || 'no',
    gitOAuthToken: process.env.GIT_OAUTH_TOKEN || '8a398657a489e6362080738a18688b14b5c2bb5e',
    queueUIUsername: process.env.QUEUE_UI_USERNAME || 'admin',
    queueUIPassword: process.env.QUEUE_UI_PASSWORD || 'password123/',
    queueUIPort: process.env.QUEUE_UI_PORT || 3000,
    enforceUserIdAppIdDeveloperId: process.env.ENFORCE_USER_ID_APP_ID_DEVELOPER_ID || 'no',
    apiDBKey: process.env.API_DB_Key || 'MDg4NWM1NTA0ZTZlNTQ5MjAzNzA1ODBlOWVkNzI3MzdlNmYxZTcyMjVkOTA3N2JjYTBhZjA0YmM0N2U4NDZkNi8vLy8vLzQ1MDY=',
    SQLUsername: process.env.SQL_USERNAME || 'root',
    SQLPassword: process.env.SQL_PASSWORD || null,
    SQLDatabase: process.env.SQL_DATABASE || 'snipe',
    SQLHost: process.env.SQL_HOST || 'localhost',
    SQLPort: process.env.SQL_PORT || 3306,
    SQLDriver: process.env.SQL_DRIVER || 'mysql' //'mysql'|'sqlite'|'postgres'|'mssql'
};
