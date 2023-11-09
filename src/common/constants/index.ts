export const APP_VERSION = process.env.npm_package_version;

export const API_DEFAULT_PORT = 3000;
export const API_DEFAULT_PREFIX = '/api'; //Change the resource name

/**
 * Swagger configuration
 *
 * Change the values
 */
export const SWAGGER_TITLE = 'API';
export const SWAGGER_DESCRIPTION = 'API Description';
export const SWAGGER_PREFIX = `${API_DEFAULT_PREFIX}/docs`;
