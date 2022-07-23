const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

function nuevoError(num) {
    if(typeof(num) === 'number') {
        return num * 2;
    } else {
        throw new Error('Se requiere un numero');
    }
}

try {   
    let ejecutar = nuevoError(2);
    console.log(ejecutar)
} catch (e) {
    console.error(e);
}

logger.info("Un mensaje de info");
logger.error("Un mensaje de error");
logger.debug("Un mensaje de debug");