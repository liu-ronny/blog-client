const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const session = require("express-session");

const users = [
  {
    username: "admin",
    password: "hunter1",
  },
  {
    username: "testuser",
    password: "testpassword",
  },
  {
    username: "hello",
    password: "world",
  },
  {
    username: "user3",
    password: "password",
  },
];

server.use(middlewares);
server.use(jsonServer.bodyParser);

const twentyFourHours = 1000 * 60 * 60 * 24;
server.use(
  session({
    secret: "supersecret",
    cookie: {
      httpOnly: true,
      maxAge: twentyFourHours,
    },
    resave: false,
    saveUninitialized: false,
    rolling: true,
  })
);

server.post("/login", (req, res) => {
  let { username, password } = req.body;
  username = username.toLowerCase();
  password = password.toLowerCase();

  let isValidUser = false;

  for (let user of users) {
    if (user.username === username && user.password === password) {
      isValidUser = true;
      break;
    }
  }

  if (isValidUser) {
    req.session.user = username;
    return res.status(200).end();
  }

  res.status(401).end();
});

server.get("/sessions", (req, res) => {
  if (req.session.user) {
    return res.json({ authenticated: true });
  }

  res.json({ authenticated: false });
});

// Use default router
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
