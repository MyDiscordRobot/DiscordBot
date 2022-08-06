import { error } from "./logger.js";
process.on("uncaughtException", (err) => {
  const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
  error(`Uncaught Exception: ${errorMsg}`);
  console.error(err);
  process.exit(1);
});

process.on("unhandledRejection", err => {
  error(`Unhandled rejection: ${err}`);
  console.error(err);
});