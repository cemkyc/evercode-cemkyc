function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).send('Forbidden');
  }

  const token = authHeader.replace('Bearer ', '');

  if (token !== process.env.AUTH_TOKEN) {
    return res.status(403).send('Forbidden');
  }

  next();
}

module.exports = authMiddleware;