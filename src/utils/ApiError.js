class ApiError extends Error {
 constructor(
  message= 'An error occurred',
  error=[],
  stack= ""
 ){
  super(message);
  this.name = 'ApiError';
  this.error = error;
  this.stack = stack;
  this.statusCode = 500; // Default status code
  if (stack) {
   this.stack = stack;
  }
  else{
    Error.captureStackTrace(this, this.constructor);
  }
 }
}