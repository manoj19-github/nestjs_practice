import { Request, Response, NextFunction } from 'express';

const globalMiddlewareOne = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('middleware hit : ', req.url);
  next();
};
export default globalMiddlewareOne;
