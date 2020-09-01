const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const session = require("express-session");
const uid = require("uid");

const users = [
  {
    id: uid(),
    username: "admin",
    password: "hunter1",
  },
  {
    id: uid(),
    username: "testuser",
    password: "testpassword",
  },
  {
    id: uid(),
    username: "hello",
    password: "world",
  },
  {
    id: uid(),
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

server.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.destroy();
  }

  res.status(200).end();
});

server.get("/sessions", (req, res) => {
  if (req.session.user) {
    return res.json({ authenticated: true });
  }

  res.json({ authenticated: false });
});

server.get("/users/my/blogs", (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).end();
  }

  next();
});

// Use default router
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
