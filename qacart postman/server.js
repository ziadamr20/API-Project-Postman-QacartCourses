const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json')); // Adjust the path based on your file structure
const middlewares = jsonServer.defaults();

server.db = router.db;

// Add json-server-auth middleware
server.use(auth);

// Use default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Use default router
server.use(router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
