export function addResponseHeaders(req, resp, next) {
  resp.header('Access-Control-Allow-Origin', '*');
  resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
}

export function errorCatchDecorator(handler) {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
      return next();
    } catch (error) {
      return next(error);
    }
  };
}
