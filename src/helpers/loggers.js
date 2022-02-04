const { createLogger, format, transports } = require("winston");
const { /*colorize, splat, */ label, timestamp, combine, printf } = format;

const timezonedTime = () => {
  return new Date().toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
  });
};

const print = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

module.exports = createLogger({
  transports: [
    new transports.Console({
      level: "debug",
      format: format.combine(
        format.simple(),
        timestamp({
          format: timezonedTime,
        }),
        print
      ),
      timestamp: true,
    }),
  ],
});
