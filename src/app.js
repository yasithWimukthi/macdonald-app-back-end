const express = require("express");
const ExceptionHandler = require("./common/handlers/exception.handler");
const RouteNotFoundHandler = require("./common/handlers/route-not-found.handler");
const { knexConnection, initDatabase } = require("./database");
const cors = require("cors");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const { swaggerSpec } = require("./swagger");
const passport = require("passport");
const session = require("cookie-session");
const userRouter = require("./routers/user.router");
const portionsRouter = require("./routers/portion.router");
const ErrorHandler = require("./common/handlers/error.handler");

// Import Routers
const HealthCheckRouter = require("./routers/healthCheck.router");
const AuthRouter = require("./routers/auth.router");
const CategoryRouter = require("./routers/category.router");
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

/**
 * @swagger
 * /:
 *   get:
 *     description: Welcome to cafe-app-api v1.!
 *     responses:
 *       200:
 *         description: Returns welcome message.
 */
app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to cafe-app-api v1.",
  });
});

// Routers
app.use("/", userRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/health", HealthCheckRouter);
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/categories", CategoryRouter);
app.use("/api/v1/portion", portionsRouter);

app.use(ErrorHandler);

// Route not found handler
app.use(RouteNotFoundHandler);

// Exception handler
app.use(ExceptionHandler);

module.exports = app;
