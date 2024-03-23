import pino from "pino";
import { autoInjectable, singleton } from "tsyringe";

@autoInjectable()
@singleton()
export default class InternalLogger {

  kind: string;
  logger: pino.Logger;

  constructor(kind: string) {
    this.kind = kind;
    this.logger = pino({
      level: "info",
      transport: {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname"
        }
      }

    });
  }

  /**
   * Logs a success message to the logger. The message can be of any type.
   * It handles both simple strings and complex objects (including arrays),
   * ensuring they are logged as an array of messages. This is particularly
   * useful for maintaining consistency in the structure of logged information,
   * facilitating easier processing and querying of log data.
   *
   * @param {unknown} message - The message to log. Can be a string, an object,
   *                            or an array. The method will ensure it is treated
   *                            and logged as an array.
   */
  logSuccess(message: unknown) {
    const messageArray = typeof message === "object" ? (Array.isArray(message) ? message : [message]) : [message];
    this.logger.info({ kind: this.kind, msg: JSON.stringify(messageArray), success: true });
  }

  /**
   * Logs an error message to the logger. This method is designed to handle input
   * of any type, including strings, objects, and arrays. Regardless of the input
   * type, it ensures that the message is treated and logged as an array of messages.
   * This uniformity helps in structuring the log data consistently, making it easier
   * to process and analyze error logs. The method serializes the message or messages
   * into a JSON string to preserve their structure in the log.

   * @param {unknown} message - The error message to be logged. It accepts a diverse range
   *                            of types (string, object, or array) and ensures they are
   *                            logged as an array, enhancing the consistency and
   *                            readability of log entries.
   */
  logError(message: unknown) {

    const messageArray = typeof message === "object" ? (Array.isArray(message) ? message : [message]) : [message];
    this.logger.error({ kind: this.kind, msg: JSON.stringify(messageArray), success: true });
  }
}

export type LogErrorFunctionType = typeof InternalLogger.prototype.logError;