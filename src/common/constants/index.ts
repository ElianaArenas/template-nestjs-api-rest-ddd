export const APP_VERSION = process.env.npm_package_version;

//TODO: Change the values

/** 
 * API configuration
*/
export const API_DEFAULT_PORT = process.env.PORT || 3000;
export const API_DEFAULT_PREFIX = '/api'; //TODO: Change the resource name

/**
 * Swagger configuration
 */
export const SWAGGER_TITLE = 'API';
export const SWAGGER_DESCRIPTION = 'API Description';
export const SWAGGER_PREFIX = `${API_DEFAULT_PREFIX}/docs`;
