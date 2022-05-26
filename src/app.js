const express = require("express");
// const ExceptionHandler = require("./common/handlers/exception.handler");
// const RouteNotFoundHandler = require("./common/handlers/route-not-found.handler");
const { knexConnection, initDatabase } = require("./database");
const cors = require("cors");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { swaggerSpec } = require("./swagger");
const passport = require('passport');
const session = require('cookie-session');
const userRoutes = require('./routes/user.route');

// // Import Routers
// const HelthCheckRouter = require("./routers/helthCheck.router");
// const AuthRouter = require("./routers/auth.router");
// const CategoryRouter = require("./routers/category.router");
// const ItemsRouter = require("./routers/items.router");

const app = express();

app.use(session({ secret: process.env.SESSION_KEY, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Init database
initDatabase(knexConnection);
// Global middlewares - auth

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to cafe-app-api v1.",
  });
});

// Routers
app.use('/', userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use("/health", HelthCheckRouter);
// app.use("/api/v1/auth", AuthRouter);
// app.use("/api/v1/categories", CategoryRouter);
// app.use("/api/v1/items", ItemsRouter);

// // Route not found handler
// app.use(RouteNotFoundHandler);

// // Exception handler
// app.use(ExceptionHandler);

module.exports = app;
