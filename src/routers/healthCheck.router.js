const express = require("express");
const { knexConnection } = require("../database");

const HelthCheckRouter = express.Router();

/**
 * @swagger
 * /health:
 *   get:
 *     description: Check database connection
 *     responses:
 *       200:
 *         description: Database connection is successfull
 *       500:
 *         description: Database connection is unsuccesfull
 */
HelthCheckRouter.get("/", async (req, res, next) => {
  try {
    await knexConnection.raw("SELECT 1+1 as result");
    res.json({
      module: "database",
      status: "up",
    });
  } catch (error) {
    res.status(500).json({
      module: "database",
      status: "down",
    });
  }
});

module.exports = HelthCheckRouter;
