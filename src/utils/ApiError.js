class ApiError extends Error {
  constructor(statusCode, statusText, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.isOperational = isOperational;
    this.name = 'API Error';
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default ApiError;
