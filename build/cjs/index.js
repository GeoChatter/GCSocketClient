"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn2, res) => function __init() {
  return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
};
var __commonJS = (cb, mod2) => function __require() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

// node_modules/@microsoft/signalr/dist/cjs/Errors.js
var require_Errors = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AggregateErrors = exports.FailedToNegotiateWithServerError = exports.FailedToStartTransportError = exports.DisabledTransportError = exports.UnsupportedTransportError = exports.AbortError = exports.TimeoutError = exports.HttpError = void 0;
    var HttpError = class extends Error {
      constructor(errorMessage, statusCode) {
        const trueProto = new.target.prototype;
        super(`${errorMessage}: Status code '${statusCode}'`);
        this.statusCode = statusCode;
        this.__proto__ = trueProto;
      }
    };
    exports.HttpError = HttpError;
    var TimeoutError = class extends Error {
      constructor(errorMessage = "A timeout occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        this.__proto__ = trueProto;
      }
    };
    exports.TimeoutError = TimeoutError;
    var AbortError = class extends Error {
      constructor(errorMessage = "An abort occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        this.__proto__ = trueProto;
      }
    };
    exports.AbortError = AbortError;
    var UnsupportedTransportError = class extends Error {
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "UnsupportedTransportError";
        this.__proto__ = trueProto;
      }
    };
    exports.UnsupportedTransportError = UnsupportedTransportError;
    var DisabledTransportError = class extends Error {
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "DisabledTransportError";
        this.__proto__ = trueProto;
      }
    };
    exports.DisabledTransportError = DisabledTransportError;
    var FailedToStartTransportError = class extends Error {
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "FailedToStartTransportError";
        this.__proto__ = trueProto;
      }
    };
    exports.FailedToStartTransportError = FailedToStartTransportError;
    var FailedToNegotiateWithServerError = class extends Error {
      constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.errorType = "FailedToNegotiateWithServerError";
        this.__proto__ = trueProto;
      }
    };
    exports.FailedToNegotiateWithServerError = FailedToNegotiateWithServerError;
    var AggregateErrors = class extends Error {
      constructor(message, innerErrors) {
        const trueProto = new.target.prototype;
        super(message);
        this.innerErrors = innerErrors;
        this.__proto__ = trueProto;
      }
    };
    exports.AggregateErrors = AggregateErrors;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HttpClient.js
var require_HttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HttpClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpClient = exports.HttpResponse = void 0;
    var HttpResponse = class {
      constructor(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
      }
    };
    exports.HttpResponse = HttpResponse;
    var HttpClient = class {
      get(url, options) {
        return this.send({
          ...options,
          method: "GET",
          url
        });
      }
      post(url, options) {
        return this.send({
          ...options,
          method: "POST",
          url
        });
      }
      delete(url, options) {
        return this.send({
          ...options,
          method: "DELETE",
          url
        });
      }
      getCookieString(url) {
        return "";
      }
    };
    exports.HttpClient = HttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/ILogger.js
var require_ILogger = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/ILogger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogLevel = void 0;
    var LogLevel;
    (function(LogLevel2) {
      LogLevel2[LogLevel2["Trace"] = 0] = "Trace";
      LogLevel2[LogLevel2["Debug"] = 1] = "Debug";
      LogLevel2[LogLevel2["Information"] = 2] = "Information";
      LogLevel2[LogLevel2["Warning"] = 3] = "Warning";
      LogLevel2[LogLevel2["Error"] = 4] = "Error";
      LogLevel2[LogLevel2["Critical"] = 5] = "Critical";
      LogLevel2[LogLevel2["None"] = 6] = "None";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Loggers.js
var require_Loggers = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Loggers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NullLogger = void 0;
    var NullLogger = class {
      constructor() {
      }
      log(_logLevel, _message) {
      }
    };
    exports.NullLogger = NullLogger;
    NullLogger.instance = new NullLogger();
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Utils.js
var require_Utils = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGlobalThis = exports.getErrorString = exports.constructUserAgent = exports.getUserAgentHeader = exports.ConsoleLogger = exports.SubjectSubscription = exports.createLogger = exports.sendMessage = exports.isArrayBuffer = exports.formatArrayBuffer = exports.getDataDetail = exports.Platform = exports.Arg = exports.VERSION = void 0;
    var ILogger_1 = require_ILogger();
    var Loggers_1 = require_Loggers();
    exports.VERSION = "6.0.8";
    var Arg = class {
      static isRequired(val, name) {
        if (val === null || val === void 0) {
          throw new Error(`The '${name}' argument is required.`);
        }
      }
      static isNotEmpty(val, name) {
        if (!val || val.match(/^\s*$/)) {
          throw new Error(`The '${name}' argument should not be empty.`);
        }
      }
      static isIn(val, values, name) {
        if (!(val in values)) {
          throw new Error(`Unknown ${name} value: ${val}.`);
        }
      }
    };
    exports.Arg = Arg;
    var Platform = class {
      static get isBrowser() {
        return typeof window === "object" && typeof window.document === "object";
      }
      static get isWebWorker() {
        return typeof self === "object" && "importScripts" in self;
      }
      static get isReactNative() {
        return typeof window === "object" && typeof window.document === "undefined";
      }
      static get isNode() {
        return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
      }
    };
    exports.Platform = Platform;
    function getDataDetail(data, includeContent) {
      let detail = "";
      if (isArrayBuffer(data)) {
        detail = `Binary data of length ${data.byteLength}`;
        if (includeContent) {
          detail += `. Content: '${formatArrayBuffer(data)}'`;
        }
      } else if (typeof data === "string") {
        detail = `String data of length ${data.length}`;
        if (includeContent) {
          detail += `. Content: '${data}'`;
        }
      }
      return detail;
    }
    exports.getDataDetail = getDataDetail;
    function formatArrayBuffer(data) {
      const view = new Uint8Array(data);
      let str = "";
      view.forEach((num) => {
        const pad = num < 16 ? "0" : "";
        str += `0x${pad}${num.toString(16)} `;
      });
      return str.substr(0, str.length - 1);
    }
    exports.formatArrayBuffer = formatArrayBuffer;
    function isArrayBuffer(val) {
      return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer || val.constructor && val.constructor.name === "ArrayBuffer");
    }
    exports.isArrayBuffer = isArrayBuffer;
    async function sendMessage(logger, transportName, httpClient, url, accessTokenFactory, content, options) {
      let headers = {};
      if (accessTokenFactory) {
        const token = await accessTokenFactory();
        if (token) {
          headers = {
            ["Authorization"]: `Bearer ${token}`
          };
        }
      }
      const [name, value] = getUserAgentHeader();
      headers[name] = value;
      logger.log(ILogger_1.LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
      const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
      const response = await httpClient.post(url, {
        content,
        headers: { ...headers, ...options.headers },
        responseType,
        timeout: options.timeout,
        withCredentials: options.withCredentials
      });
      logger.log(ILogger_1.LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
    }
    exports.sendMessage = sendMessage;
    function createLogger(logger) {
      if (logger === void 0) {
        return new ConsoleLogger(ILogger_1.LogLevel.Information);
      }
      if (logger === null) {
        return Loggers_1.NullLogger.instance;
      }
      if (logger.log !== void 0) {
        return logger;
      }
      return new ConsoleLogger(logger);
    }
    exports.createLogger = createLogger;
    var SubjectSubscription = class {
      constructor(subject, observer) {
        this._subject = subject;
        this._observer = observer;
      }
      dispose() {
        const index = this._subject.observers.indexOf(this._observer);
        if (index > -1) {
          this._subject.observers.splice(index, 1);
        }
        if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
          this._subject.cancelCallback().catch((_) => {
          });
        }
      }
    };
    exports.SubjectSubscription = SubjectSubscription;
    var ConsoleLogger = class {
      constructor(minimumLogLevel) {
        this._minLevel = minimumLogLevel;
        this.out = console;
      }
      log(logLevel, message) {
        if (logLevel >= this._minLevel) {
          const msg = `[${new Date().toISOString()}] ${ILogger_1.LogLevel[logLevel]}: ${message}`;
          switch (logLevel) {
            case ILogger_1.LogLevel.Critical:
            case ILogger_1.LogLevel.Error:
              this.out.error(msg);
              break;
            case ILogger_1.LogLevel.Warning:
              this.out.warn(msg);
              break;
            case ILogger_1.LogLevel.Information:
              this.out.info(msg);
              break;
            default:
              this.out.log(msg);
              break;
          }
        }
      }
    };
    exports.ConsoleLogger = ConsoleLogger;
    function getUserAgentHeader() {
      let userAgentHeaderName = "X-SignalR-User-Agent";
      if (Platform.isNode) {
        userAgentHeaderName = "User-Agent";
      }
      return [userAgentHeaderName, constructUserAgent(exports.VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
    }
    exports.getUserAgentHeader = getUserAgentHeader;
    function constructUserAgent(version2, os, runtime, runtimeVersion) {
      let userAgent = "Microsoft SignalR/";
      const majorAndMinor = version2.split(".");
      userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
      userAgent += ` (${version2}; `;
      if (os && os !== "") {
        userAgent += `${os}; `;
      } else {
        userAgent += "Unknown OS; ";
      }
      userAgent += `${runtime}`;
      if (runtimeVersion) {
        userAgent += `; ${runtimeVersion}`;
      } else {
        userAgent += "; Unknown Runtime Version";
      }
      userAgent += ")";
      return userAgent;
    }
    exports.constructUserAgent = constructUserAgent;
    function getOsName() {
      if (Platform.isNode) {
        switch (process.platform) {
          case "win32":
            return "Windows NT";
          case "darwin":
            return "macOS";
          case "linux":
            return "Linux";
          default:
            return process.platform;
        }
      } else {
        return "";
      }
    }
    function getRuntimeVersion() {
      if (Platform.isNode) {
        return process.versions.node;
      }
      return void 0;
    }
    function getRuntime() {
      if (Platform.isNode) {
        return "NodeJS";
      } else {
        return "Browser";
      }
    }
    function getErrorString2(e) {
      if (e.stack) {
        return e.stack;
      } else if (e.message) {
        return e.message;
      }
      return `${e}`;
    }
    exports.getErrorString = getErrorString2;
    function getGlobalThis() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      throw new Error("could not find global");
    }
    exports.getGlobalThis = getGlobalThis;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/FetchHttpClient.js
var require_FetchHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/FetchHttpClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FetchHttpClient = void 0;
    var Errors_1 = require_Errors();
    var HttpClient_1 = require_HttpClient();
    var ILogger_1 = require_ILogger();
    var Utils_1 = require_Utils();
    var FetchHttpClient = class extends HttpClient_1.HttpClient {
      constructor(logger) {
        super();
        this._logger = logger;
        if (typeof fetch === "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
          this._jar = new (requireFunc("tough-cookie")).CookieJar();
          this._fetchType = requireFunc("node-fetch");
          this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
        } else {
          this._fetchType = fetch.bind(Utils_1.getGlobalThis());
        }
        if (typeof AbortController === "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
          this._abortControllerType = requireFunc("abort-controller");
        } else {
          this._abortControllerType = AbortController;
        }
      }
      async send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          throw new Errors_1.AbortError();
        }
        if (!request.method) {
          throw new Error("No method defined.");
        }
        if (!request.url) {
          throw new Error("No url defined.");
        }
        const abortController = new this._abortControllerType();
        let error;
        if (request.abortSignal) {
          request.abortSignal.onabort = () => {
            abortController.abort();
            error = new Errors_1.AbortError();
          };
        }
        let timeoutId = null;
        if (request.timeout) {
          const msTimeout = request.timeout;
          timeoutId = setTimeout(() => {
            abortController.abort();
            this._logger.log(ILogger_1.LogLevel.Warning, `Timeout from HTTP request.`);
            error = new Errors_1.TimeoutError();
          }, msTimeout);
        }
        let response;
        try {
          response = await this._fetchType(request.url, {
            body: request.content,
            cache: "no-cache",
            credentials: request.withCredentials === true ? "include" : "same-origin",
            headers: {
              "Content-Type": "text/plain;charset=UTF-8",
              "X-Requested-With": "XMLHttpRequest",
              ...request.headers
            },
            method: request.method,
            mode: "cors",
            redirect: "follow",
            signal: abortController.signal
          });
        } catch (e) {
          if (error) {
            throw error;
          }
          this._logger.log(ILogger_1.LogLevel.Warning, `Error from HTTP request. ${e}.`);
          throw e;
        } finally {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          if (request.abortSignal) {
            request.abortSignal.onabort = null;
          }
        }
        if (!response.ok) {
          const errorMessage = await deserializeContent(response, "text");
          throw new Errors_1.HttpError(errorMessage || response.statusText, response.status);
        }
        const content = deserializeContent(response, request.responseType);
        const payload = await content;
        return new HttpClient_1.HttpResponse(response.status, response.statusText, payload);
      }
      getCookieString(url) {
        let cookies = "";
        if (Utils_1.Platform.isNode && this._jar) {
          this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
        }
        return cookies;
      }
    };
    exports.FetchHttpClient = FetchHttpClient;
    function deserializeContent(response, responseType) {
      let content;
      switch (responseType) {
        case "arraybuffer":
          content = response.arrayBuffer();
          break;
        case "text":
          content = response.text();
          break;
        case "blob":
        case "document":
        case "json":
          throw new Error(`${responseType} is not supported.`);
        default:
          content = response.text();
          break;
      }
      return content;
    }
  }
});

// node_modules/@microsoft/signalr/dist/cjs/XhrHttpClient.js
var require_XhrHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/XhrHttpClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XhrHttpClient = void 0;
    var Errors_1 = require_Errors();
    var HttpClient_1 = require_HttpClient();
    var ILogger_1 = require_ILogger();
    var XhrHttpClient = class extends HttpClient_1.HttpClient {
      constructor(logger) {
        super();
        this._logger = logger;
      }
      send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          return Promise.reject(new Errors_1.AbortError());
        }
        if (!request.method) {
          return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
          return Promise.reject(new Error("No url defined."));
        }
        return new Promise((resolve2, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(request.method, request.url, true);
          xhr.withCredentials = request.withCredentials === void 0 ? true : request.withCredentials;
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
          const headers = request.headers;
          if (headers) {
            Object.keys(headers).forEach((header) => {
              xhr.setRequestHeader(header, headers[header]);
            });
          }
          if (request.responseType) {
            xhr.responseType = request.responseType;
          }
          if (request.abortSignal) {
            request.abortSignal.onabort = () => {
              xhr.abort();
              reject(new Errors_1.AbortError());
            };
          }
          if (request.timeout) {
            xhr.timeout = request.timeout;
          }
          xhr.onload = () => {
            if (request.abortSignal) {
              request.abortSignal.onabort = null;
            }
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve2(new HttpClient_1.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
            } else {
              reject(new Errors_1.HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
            }
          };
          xhr.onerror = () => {
            this._logger.log(ILogger_1.LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
            reject(new Errors_1.HttpError(xhr.statusText, xhr.status));
          };
          xhr.ontimeout = () => {
            this._logger.log(ILogger_1.LogLevel.Warning, `Timeout from HTTP request.`);
            reject(new Errors_1.TimeoutError());
          };
          xhr.send(request.content || "");
        });
      }
    };
    exports.XhrHttpClient = XhrHttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/DefaultHttpClient.js
var require_DefaultHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/DefaultHttpClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultHttpClient = void 0;
    var Errors_1 = require_Errors();
    var FetchHttpClient_1 = require_FetchHttpClient();
    var HttpClient_1 = require_HttpClient();
    var Utils_1 = require_Utils();
    var XhrHttpClient_1 = require_XhrHttpClient();
    var DefaultHttpClient = class extends HttpClient_1.HttpClient {
      constructor(logger) {
        super();
        if (typeof fetch !== "undefined" || Utils_1.Platform.isNode) {
          this._httpClient = new FetchHttpClient_1.FetchHttpClient(logger);
        } else if (typeof XMLHttpRequest !== "undefined") {
          this._httpClient = new XhrHttpClient_1.XhrHttpClient(logger);
        } else {
          throw new Error("No usable HttpClient found.");
        }
      }
      send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          return Promise.reject(new Errors_1.AbortError());
        }
        if (!request.method) {
          return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
          return Promise.reject(new Error("No url defined."));
        }
        return this._httpClient.send(request);
      }
      getCookieString(url) {
        return this._httpClient.getCookieString(url);
      }
    };
    exports.DefaultHttpClient = DefaultHttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/TextMessageFormat.js
var require_TextMessageFormat = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/TextMessageFormat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextMessageFormat = void 0;
    var TextMessageFormat = class {
      static write(output) {
        return `${output}${TextMessageFormat.RecordSeparator}`;
      }
      static parse(input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
          throw new Error("Message is incomplete.");
        }
        const messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
      }
    };
    exports.TextMessageFormat = TextMessageFormat;
    TextMessageFormat.RecordSeparatorCode = 30;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HandshakeProtocol.js
var require_HandshakeProtocol = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HandshakeProtocol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HandshakeProtocol = void 0;
    var TextMessageFormat_1 = require_TextMessageFormat();
    var Utils_1 = require_Utils();
    var HandshakeProtocol = class {
      writeHandshakeRequest(handshakeRequest) {
        return TextMessageFormat_1.TextMessageFormat.write(JSON.stringify(handshakeRequest));
      }
      parseHandshakeResponse(data) {
        let messageData;
        let remainingData;
        if (Utils_1.isArrayBuffer(data)) {
          const binaryData = new Uint8Array(data);
          const separatorIndex = binaryData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparatorCode);
          if (separatorIndex === -1) {
            throw new Error("Message is incomplete.");
          }
          const responseLength = separatorIndex + 1;
          messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
          remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
        } else {
          const textData = data;
          const separatorIndex = textData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparator);
          if (separatorIndex === -1) {
            throw new Error("Message is incomplete.");
          }
          const responseLength = separatorIndex + 1;
          messageData = textData.substring(0, responseLength);
          remainingData = textData.length > responseLength ? textData.substring(responseLength) : null;
        }
        const messages = TextMessageFormat_1.TextMessageFormat.parse(messageData);
        const response = JSON.parse(messages[0]);
        if (response.type) {
          throw new Error("Expected a handshake response from the server.");
        }
        const responseMessage = response;
        return [remainingData, responseMessage];
      }
    };
    exports.HandshakeProtocol = HandshakeProtocol;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/IHubProtocol.js
var require_IHubProtocol = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/IHubProtocol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MessageType = void 0;
    var MessageType;
    (function(MessageType2) {
      MessageType2[MessageType2["Invocation"] = 1] = "Invocation";
      MessageType2[MessageType2["StreamItem"] = 2] = "StreamItem";
      MessageType2[MessageType2["Completion"] = 3] = "Completion";
      MessageType2[MessageType2["StreamInvocation"] = 4] = "StreamInvocation";
      MessageType2[MessageType2["CancelInvocation"] = 5] = "CancelInvocation";
      MessageType2[MessageType2["Ping"] = 6] = "Ping";
      MessageType2[MessageType2["Close"] = 7] = "Close";
    })(MessageType = exports.MessageType || (exports.MessageType = {}));
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Subject.js
var require_Subject = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Subject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Subject = void 0;
    var Utils_1 = require_Utils();
    var Subject = class {
      constructor() {
        this.observers = [];
      }
      next(item) {
        for (const observer of this.observers) {
          observer.next(item);
        }
      }
      error(err) {
        for (const observer of this.observers) {
          if (observer.error) {
            observer.error(err);
          }
        }
      }
      complete() {
        for (const observer of this.observers) {
          if (observer.complete) {
            observer.complete();
          }
        }
      }
      subscribe(observer) {
        this.observers.push(observer);
        return new Utils_1.SubjectSubscription(this, observer);
      }
    };
    exports.Subject = Subject;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HubConnection.js
var require_HubConnection = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HubConnection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HubConnection = exports.HubConnectionState = void 0;
    var HandshakeProtocol_1 = require_HandshakeProtocol();
    var IHubProtocol_1 = require_IHubProtocol();
    var ILogger_1 = require_ILogger();
    var Subject_1 = require_Subject();
    var Utils_1 = require_Utils();
    var DEFAULT_TIMEOUT_IN_MS = 30 * 1e3;
    var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1e3;
    var HubConnectionState;
    (function(HubConnectionState2) {
      HubConnectionState2["Disconnected"] = "Disconnected";
      HubConnectionState2["Connecting"] = "Connecting";
      HubConnectionState2["Connected"] = "Connected";
      HubConnectionState2["Disconnecting"] = "Disconnecting";
      HubConnectionState2["Reconnecting"] = "Reconnecting";
    })(HubConnectionState = exports.HubConnectionState || (exports.HubConnectionState = {}));
    var HubConnection = class {
      constructor(connection, logger, protocol, reconnectPolicy) {
        this._nextKeepAlive = 0;
        this._freezeEventListener = () => {
          this._logger.log(ILogger_1.LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
        };
        Utils_1.Arg.isRequired(connection, "connection");
        Utils_1.Arg.isRequired(logger, "logger");
        Utils_1.Arg.isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
        this._logger = logger;
        this._protocol = protocol;
        this.connection = connection;
        this._reconnectPolicy = reconnectPolicy;
        this._handshakeProtocol = new HandshakeProtocol_1.HandshakeProtocol();
        this.connection.onreceive = (data) => this._processIncomingData(data);
        this.connection.onclose = (error) => this._connectionClosed(error);
        this._callbacks = {};
        this._methods = {};
        this._closedCallbacks = [];
        this._reconnectingCallbacks = [];
        this._reconnectedCallbacks = [];
        this._invocationId = 0;
        this._receivedHandshakeResponse = false;
        this._connectionState = HubConnectionState.Disconnected;
        this._connectionStarted = false;
        this._cachedPingMessage = this._protocol.writeMessage({ type: IHubProtocol_1.MessageType.Ping });
      }
      static create(connection, logger, protocol, reconnectPolicy) {
        return new HubConnection(connection, logger, protocol, reconnectPolicy);
      }
      get state() {
        return this._connectionState;
      }
      get connectionId() {
        return this.connection ? this.connection.connectionId || null : null;
      }
      get baseUrl() {
        return this.connection.baseUrl || "";
      }
      set baseUrl(url) {
        if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
          throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
        }
        if (!url) {
          throw new Error("The HubConnection url must be a valid url.");
        }
        this.connection.baseUrl = url;
      }
      start() {
        this._startPromise = this._startWithStateTransitions();
        return this._startPromise;
      }
      async _startWithStateTransitions() {
        if (this._connectionState !== HubConnectionState.Disconnected) {
          return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = HubConnectionState.Connecting;
        this._logger.log(ILogger_1.LogLevel.Debug, "Starting HubConnection.");
        try {
          await this._startInternal();
          if (Utils_1.Platform.isBrowser) {
            window.document.addEventListener("freeze", this._freezeEventListener);
          }
          this._connectionState = HubConnectionState.Connected;
          this._connectionStarted = true;
          this._logger.log(ILogger_1.LogLevel.Debug, "HubConnection connected successfully.");
        } catch (e) {
          this._connectionState = HubConnectionState.Disconnected;
          this._logger.log(ILogger_1.LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);
          return Promise.reject(e);
        }
      }
      async _startInternal() {
        this._stopDuringStartError = void 0;
        this._receivedHandshakeResponse = false;
        const handshakePromise = new Promise((resolve2, reject) => {
          this._handshakeResolver = resolve2;
          this._handshakeRejecter = reject;
        });
        await this.connection.start(this._protocol.transferFormat);
        try {
          const handshakeRequest = {
            protocol: this._protocol.name,
            version: this._protocol.version
          };
          this._logger.log(ILogger_1.LogLevel.Debug, "Sending handshake request.");
          await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
          this._logger.log(ILogger_1.LogLevel.Information, `Using HubProtocol '${this._protocol.name}'.`);
          this._cleanupTimeout();
          this._resetTimeoutPeriod();
          this._resetKeepAliveInterval();
          await handshakePromise;
          if (this._stopDuringStartError) {
            throw this._stopDuringStartError;
          }
        } catch (e) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);
          this._cleanupTimeout();
          this._cleanupPingTimer();
          await this.connection.stop(e);
          throw e;
        }
      }
      async stop() {
        const startPromise = this._startPromise;
        this._stopPromise = this._stopInternal();
        await this._stopPromise;
        try {
          await startPromise;
        } catch (e) {
        }
      }
      _stopInternal(error) {
        if (this._connectionState === HubConnectionState.Disconnected) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);
          return Promise.resolve();
        }
        if (this._connectionState === HubConnectionState.Disconnecting) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
          return this._stopPromise;
        }
        this._connectionState = HubConnectionState.Disconnecting;
        this._logger.log(ILogger_1.LogLevel.Debug, "Stopping HubConnection.");
        if (this._reconnectDelayHandle) {
          this._logger.log(ILogger_1.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
          clearTimeout(this._reconnectDelayHandle);
          this._reconnectDelayHandle = void 0;
          this._completeClose();
          return Promise.resolve();
        }
        this._cleanupTimeout();
        this._cleanupPingTimer();
        this._stopDuringStartError = error || new Error("The connection was stopped before the hub handshake could complete.");
        return this.connection.stop(error);
      }
      stream(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
        let promiseQueue;
        const subject = new Subject_1.Subject();
        subject.cancelCallback = () => {
          const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
          delete this._callbacks[invocationDescriptor.invocationId];
          return promiseQueue.then(() => {
            return this._sendWithProtocol(cancelInvocation);
          });
        };
        this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
          if (error) {
            subject.error(error);
            return;
          } else if (invocationEvent) {
            if (invocationEvent.type === IHubProtocol_1.MessageType.Completion) {
              if (invocationEvent.error) {
                subject.error(new Error(invocationEvent.error));
              } else {
                subject.complete();
              }
            } else {
              subject.next(invocationEvent.item);
            }
          }
        };
        promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
          subject.error(e);
          delete this._callbacks[invocationDescriptor.invocationId];
        });
        this._launchStreams(streams, promiseQueue);
        return subject;
      }
      _sendMessage(message) {
        this._resetKeepAliveInterval();
        return this.connection.send(message);
      }
      _sendWithProtocol(message) {
        return this._sendMessage(this._protocol.writeMessage(message));
      }
      send(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
        this._launchStreams(streams, sendPromise);
        return sendPromise;
      }
      invoke(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
        const p = new Promise((resolve2, reject) => {
          this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
            if (error) {
              reject(error);
              return;
            } else if (invocationEvent) {
              if (invocationEvent.type === IHubProtocol_1.MessageType.Completion) {
                if (invocationEvent.error) {
                  reject(new Error(invocationEvent.error));
                } else {
                  resolve2(invocationEvent.result);
                }
              } else {
                reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
              }
            }
          };
          const promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
            reject(e);
            delete this._callbacks[invocationDescriptor.invocationId];
          });
          this._launchStreams(streams, promiseQueue);
        });
        return p;
      }
      on(methodName, newMethod) {
        if (!methodName || !newMethod) {
          return;
        }
        methodName = methodName.toLowerCase();
        if (!this._methods[methodName]) {
          this._methods[methodName] = [];
        }
        if (this._methods[methodName].indexOf(newMethod) !== -1) {
          return;
        }
        this._methods[methodName].push(newMethod);
      }
      off(methodName, method) {
        if (!methodName) {
          return;
        }
        methodName = methodName.toLowerCase();
        const handlers = this._methods[methodName];
        if (!handlers) {
          return;
        }
        if (method) {
          const removeIdx = handlers.indexOf(method);
          if (removeIdx !== -1) {
            handlers.splice(removeIdx, 1);
            if (handlers.length === 0) {
              delete this._methods[methodName];
            }
          }
        } else {
          delete this._methods[methodName];
        }
      }
      onclose(callback) {
        if (callback) {
          this._closedCallbacks.push(callback);
        }
      }
      onreconnecting(callback) {
        if (callback) {
          this._reconnectingCallbacks.push(callback);
        }
      }
      onreconnected(callback) {
        if (callback) {
          this._reconnectedCallbacks.push(callback);
        }
      }
      _processIncomingData(data) {
        this._cleanupTimeout();
        if (!this._receivedHandshakeResponse) {
          data = this._processHandshakeResponse(data);
          this._receivedHandshakeResponse = true;
        }
        if (data) {
          const messages = this._protocol.parseMessages(data, this._logger);
          for (const message of messages) {
            switch (message.type) {
              case IHubProtocol_1.MessageType.Invocation:
                this._invokeClientMethod(message);
                break;
              case IHubProtocol_1.MessageType.StreamItem:
              case IHubProtocol_1.MessageType.Completion: {
                const callback = this._callbacks[message.invocationId];
                if (callback) {
                  if (message.type === IHubProtocol_1.MessageType.Completion) {
                    delete this._callbacks[message.invocationId];
                  }
                  try {
                    callback(message);
                  } catch (e) {
                    this._logger.log(ILogger_1.LogLevel.Error, `Stream callback threw error: ${Utils_1.getErrorString(e)}`);
                  }
                }
                break;
              }
              case IHubProtocol_1.MessageType.Ping:
                break;
              case IHubProtocol_1.MessageType.Close: {
                this._logger.log(ILogger_1.LogLevel.Information, "Close message received from server.");
                const error = message.error ? new Error("Server returned an error on close: " + message.error) : void 0;
                if (message.allowReconnect === true) {
                  this.connection.stop(error);
                } else {
                  this._stopPromise = this._stopInternal(error);
                }
                break;
              }
              default:
                this._logger.log(ILogger_1.LogLevel.Warning, `Invalid message type: ${message.type}.`);
                break;
            }
          }
        }
        this._resetTimeoutPeriod();
      }
      _processHandshakeResponse(data) {
        let responseMessage;
        let remainingData;
        try {
          [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
        } catch (e) {
          const message = "Error parsing handshake response: " + e;
          this._logger.log(ILogger_1.LogLevel.Error, message);
          const error = new Error(message);
          this._handshakeRejecter(error);
          throw error;
        }
        if (responseMessage.error) {
          const message = "Server returned handshake error: " + responseMessage.error;
          this._logger.log(ILogger_1.LogLevel.Error, message);
          const error = new Error(message);
          this._handshakeRejecter(error);
          throw error;
        } else {
          this._logger.log(ILogger_1.LogLevel.Debug, "Server handshake complete.");
        }
        this._handshakeResolver();
        return remainingData;
      }
      _resetKeepAliveInterval() {
        if (this.connection.features.inherentKeepAlive) {
          return;
        }
        this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds;
        this._cleanupPingTimer();
      }
      _resetTimeoutPeriod() {
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
          this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
          if (this._pingServerHandle === void 0) {
            let nextPing = this._nextKeepAlive - new Date().getTime();
            if (nextPing < 0) {
              nextPing = 0;
            }
            this._pingServerHandle = setTimeout(async () => {
              if (this._connectionState === HubConnectionState.Connected) {
                try {
                  await this._sendMessage(this._cachedPingMessage);
                } catch {
                  this._cleanupPingTimer();
                }
              }
            }, nextPing);
          }
        }
      }
      serverTimeout() {
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
      }
      _invokeClientMethod(invocationMessage) {
        const methods = this._methods[invocationMessage.target.toLowerCase()];
        if (methods) {
          try {
            methods.forEach((m) => m.apply(this, invocationMessage.arguments));
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `A callback for the method ${invocationMessage.target.toLowerCase()} threw error '${e}'.`);
          }
          if (invocationMessage.invocationId) {
            const message = "Server requested a response, which is not supported in this version of the client.";
            this._logger.log(ILogger_1.LogLevel.Error, message);
            this._stopPromise = this._stopInternal(new Error(message));
          }
        } else {
          this._logger.log(ILogger_1.LogLevel.Warning, `No client method with the name '${invocationMessage.target}' found.`);
        }
      }
      _connectionClosed(error) {
        this._logger.log(ILogger_1.LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`);
        this._stopDuringStartError = this._stopDuringStartError || error || new Error("The underlying connection was closed before the hub handshake could complete.");
        if (this._handshakeResolver) {
          this._handshakeResolver();
        }
        this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
        this._cleanupTimeout();
        this._cleanupPingTimer();
        if (this._connectionState === HubConnectionState.Disconnecting) {
          this._completeClose(error);
        } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
          this._reconnect(error);
        } else if (this._connectionState === HubConnectionState.Connected) {
          this._completeClose(error);
        }
      }
      _completeClose(error) {
        if (this._connectionStarted) {
          this._connectionState = HubConnectionState.Disconnected;
          this._connectionStarted = false;
          if (Utils_1.Platform.isBrowser) {
            window.document.removeEventListener("freeze", this._freezeEventListener);
          }
          try {
            this._closedCallbacks.forEach((c) => c.apply(this, [error]));
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e}'.`);
          }
        }
      }
      async _reconnect(error) {
        const reconnectStartTime = Date.now();
        let previousReconnectAttempts = 0;
        let retryError = error !== void 0 ? error : new Error("Attempting to reconnect due to a unknown error.");
        let nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
        if (nextRetryDelay === null) {
          this._logger.log(ILogger_1.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
          this._completeClose(error);
          return;
        }
        this._connectionState = HubConnectionState.Reconnecting;
        if (error) {
          this._logger.log(ILogger_1.LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
        } else {
          this._logger.log(ILogger_1.LogLevel.Information, "Connection reconnecting.");
        }
        if (this._reconnectingCallbacks.length !== 0) {
          try {
            this._reconnectingCallbacks.forEach((c) => c.apply(this, [error]));
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e}'.`);
          }
          if (this._connectionState !== HubConnectionState.Reconnecting) {
            this._logger.log(ILogger_1.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
            return;
          }
        }
        while (nextRetryDelay !== null) {
          this._logger.log(ILogger_1.LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts} will start in ${nextRetryDelay} ms.`);
          await new Promise((resolve2) => {
            this._reconnectDelayHandle = setTimeout(resolve2, nextRetryDelay);
          });
          this._reconnectDelayHandle = void 0;
          if (this._connectionState !== HubConnectionState.Reconnecting) {
            this._logger.log(ILogger_1.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
            return;
          }
          try {
            await this._startInternal();
            this._connectionState = HubConnectionState.Connected;
            this._logger.log(ILogger_1.LogLevel.Information, "HubConnection reconnected successfully.");
            if (this._reconnectedCallbacks.length !== 0) {
              try {
                this._reconnectedCallbacks.forEach((c) => c.apply(this, [this.connection.connectionId]));
              } catch (e) {
                this._logger.log(ILogger_1.LogLevel.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
              }
            }
            return;
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);
            if (this._connectionState !== HubConnectionState.Reconnecting) {
              this._logger.log(ILogger_1.LogLevel.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
              if (this._connectionState === HubConnectionState.Disconnecting) {
                this._completeClose();
              }
              return;
            }
            retryError = e instanceof Error ? e : new Error(e.toString());
            nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
          }
        }
        this._logger.log(ILogger_1.LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
        this._completeClose();
      }
      _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
        try {
          return this._reconnectPolicy.nextRetryDelayInMilliseconds({
            elapsedMilliseconds,
            previousRetryCount,
            retryReason
          });
        } catch (e) {
          this._logger.log(ILogger_1.LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);
          return null;
        }
      }
      _cancelCallbacksWithError(error) {
        const callbacks = this._callbacks;
        this._callbacks = {};
        Object.keys(callbacks).forEach((key) => {
          const callback = callbacks[key];
          try {
            callback(null, error);
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${Utils_1.getErrorString(e)}`);
          }
        });
      }
      _cleanupPingTimer() {
        if (this._pingServerHandle) {
          clearTimeout(this._pingServerHandle);
          this._pingServerHandle = void 0;
        }
      }
      _cleanupTimeout() {
        if (this._timeoutHandle) {
          clearTimeout(this._timeoutHandle);
        }
      }
      _createInvocation(methodName, args, nonblocking, streamIds) {
        if (nonblocking) {
          if (streamIds.length !== 0) {
            return {
              arguments: args,
              streamIds,
              target: methodName,
              type: IHubProtocol_1.MessageType.Invocation
            };
          } else {
            return {
              arguments: args,
              target: methodName,
              type: IHubProtocol_1.MessageType.Invocation
            };
          }
        } else {
          const invocationId = this._invocationId;
          this._invocationId++;
          if (streamIds.length !== 0) {
            return {
              arguments: args,
              invocationId: invocationId.toString(),
              streamIds,
              target: methodName,
              type: IHubProtocol_1.MessageType.Invocation
            };
          } else {
            return {
              arguments: args,
              invocationId: invocationId.toString(),
              target: methodName,
              type: IHubProtocol_1.MessageType.Invocation
            };
          }
        }
      }
      _launchStreams(streams, promiseQueue) {
        if (streams.length === 0) {
          return;
        }
        if (!promiseQueue) {
          promiseQueue = Promise.resolve();
        }
        for (const streamId in streams) {
          streams[streamId].subscribe({
            complete: () => {
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
            },
            error: (err) => {
              let message;
              if (err instanceof Error) {
                message = err.message;
              } else if (err && err.toString) {
                message = err.toString();
              } else {
                message = "Unknown error";
              }
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
            },
            next: (item) => {
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
            }
          });
        }
      }
      _replaceStreamingParams(args) {
        const streams = [];
        const streamIds = [];
        for (let i = 0; i < args.length; i++) {
          const argument = args[i];
          if (this._isObservable(argument)) {
            const streamId = this._invocationId;
            this._invocationId++;
            streams[streamId] = argument;
            streamIds.push(streamId.toString());
            args.splice(i, 1);
          }
        }
        return [streams, streamIds];
      }
      _isObservable(arg) {
        return arg && arg.subscribe && typeof arg.subscribe === "function";
      }
      _createStreamInvocation(methodName, args, streamIds) {
        const invocationId = this._invocationId;
        this._invocationId++;
        if (streamIds.length !== 0) {
          return {
            arguments: args,
            invocationId: invocationId.toString(),
            streamIds,
            target: methodName,
            type: IHubProtocol_1.MessageType.StreamInvocation
          };
        } else {
          return {
            arguments: args,
            invocationId: invocationId.toString(),
            target: methodName,
            type: IHubProtocol_1.MessageType.StreamInvocation
          };
        }
      }
      _createCancelInvocation(id) {
        return {
          invocationId: id,
          type: IHubProtocol_1.MessageType.CancelInvocation
        };
      }
      _createStreamItemMessage(id, item) {
        return {
          invocationId: id,
          item,
          type: IHubProtocol_1.MessageType.StreamItem
        };
      }
      _createCompletionMessage(id, error, result) {
        if (error) {
          return {
            error,
            invocationId: id,
            type: IHubProtocol_1.MessageType.Completion
          };
        }
        return {
          invocationId: id,
          result,
          type: IHubProtocol_1.MessageType.Completion
        };
      }
    };
    exports.HubConnection = HubConnection;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/DefaultReconnectPolicy.js
var require_DefaultReconnectPolicy = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/DefaultReconnectPolicy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultReconnectPolicy = void 0;
    var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2e3, 1e4, 3e4, null];
    var DefaultReconnectPolicy = class {
      constructor(retryDelays) {
        this._retryDelays = retryDelays !== void 0 ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
      }
      nextRetryDelayInMilliseconds(retryContext) {
        return this._retryDelays[retryContext.previousRetryCount];
      }
    };
    exports.DefaultReconnectPolicy = DefaultReconnectPolicy;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HeaderNames.js
var require_HeaderNames = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HeaderNames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderNames = void 0;
    var HeaderNames = class {
    };
    exports.HeaderNames = HeaderNames;
    HeaderNames.Authorization = "Authorization";
    HeaderNames.Cookie = "Cookie";
  }
});

// node_modules/@microsoft/signalr/dist/cjs/ITransport.js
var require_ITransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/ITransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransferFormat = exports.HttpTransportType = void 0;
    var HttpTransportType;
    (function(HttpTransportType2) {
      HttpTransportType2[HttpTransportType2["None"] = 0] = "None";
      HttpTransportType2[HttpTransportType2["WebSockets"] = 1] = "WebSockets";
      HttpTransportType2[HttpTransportType2["ServerSentEvents"] = 2] = "ServerSentEvents";
      HttpTransportType2[HttpTransportType2["LongPolling"] = 4] = "LongPolling";
    })(HttpTransportType = exports.HttpTransportType || (exports.HttpTransportType = {}));
    var TransferFormat;
    (function(TransferFormat2) {
      TransferFormat2[TransferFormat2["Text"] = 1] = "Text";
      TransferFormat2[TransferFormat2["Binary"] = 2] = "Binary";
    })(TransferFormat = exports.TransferFormat || (exports.TransferFormat = {}));
  }
});

// node_modules/@microsoft/signalr/dist/cjs/AbortController.js
var require_AbortController = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/AbortController.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbortController = void 0;
    var AbortController2 = class {
      constructor() {
        this._isAborted = false;
        this.onabort = null;
      }
      abort() {
        if (!this._isAborted) {
          this._isAborted = true;
          if (this.onabort) {
            this.onabort();
          }
        }
      }
      get signal() {
        return this;
      }
      get aborted() {
        return this._isAborted;
      }
    };
    exports.AbortController = AbortController2;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/LongPollingTransport.js
var require_LongPollingTransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/LongPollingTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LongPollingTransport = void 0;
    var AbortController_1 = require_AbortController();
    var Errors_1 = require_Errors();
    var HeaderNames_1 = require_HeaderNames();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Utils_1 = require_Utils();
    var LongPollingTransport = class {
      constructor(httpClient, accessTokenFactory, logger, options) {
        this._httpClient = httpClient;
        this._accessTokenFactory = accessTokenFactory;
        this._logger = logger;
        this._pollAbort = new AbortController_1.AbortController();
        this._options = options;
        this._running = false;
        this.onreceive = null;
        this.onclose = null;
      }
      get pollAborted() {
        return this._pollAbort.aborted;
      }
      async connect(url, transferFormat) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isRequired(transferFormat, "transferFormat");
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._url = url;
        this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Connecting.");
        if (transferFormat === ITransport_1.TransferFormat.Binary && (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
          throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
        }
        const [name, value] = Utils_1.getUserAgentHeader();
        const headers = { [name]: value, ...this._options.headers };
        const pollOptions = {
          abortSignal: this._pollAbort.signal,
          headers,
          timeout: 1e5,
          withCredentials: this._options.withCredentials
        };
        if (transferFormat === ITransport_1.TransferFormat.Binary) {
          pollOptions.responseType = "arraybuffer";
        }
        const token = await this._getAccessToken();
        this._updateHeaderToken(pollOptions, token);
        const pollUrl = `${url}&_=${Date.now()}`;
        this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
        const response = await this._httpClient.get(pollUrl, pollOptions);
        if (response.statusCode !== 200) {
          this._logger.log(ILogger_1.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
          this._closeError = new Errors_1.HttpError(response.statusText || "", response.statusCode);
          this._running = false;
        } else {
          this._running = true;
        }
        this._receiving = this._poll(this._url, pollOptions);
      }
      async _getAccessToken() {
        if (this._accessTokenFactory) {
          return await this._accessTokenFactory();
        }
        return null;
      }
      _updateHeaderToken(request, token) {
        if (!request.headers) {
          request.headers = {};
        }
        if (token) {
          request.headers[HeaderNames_1.HeaderNames.Authorization] = `Bearer ${token}`;
          return;
        }
        if (request.headers[HeaderNames_1.HeaderNames.Authorization]) {
          delete request.headers[HeaderNames_1.HeaderNames.Authorization];
        }
      }
      async _poll(url, pollOptions) {
        try {
          while (this._running) {
            const token = await this._getAccessToken();
            this._updateHeaderToken(pollOptions, token);
            try {
              const pollUrl = `${url}&_=${Date.now()}`;
              this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
              const response = await this._httpClient.get(pollUrl, pollOptions);
              if (response.statusCode === 204) {
                this._logger.log(ILogger_1.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                this._running = false;
              } else if (response.statusCode !== 200) {
                this._logger.log(ILogger_1.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
                this._closeError = new Errors_1.HttpError(response.statusText || "", response.statusCode);
                this._running = false;
              } else {
                if (response.content) {
                  this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) data received. ${Utils_1.getDataDetail(response.content, this._options.logMessageContent)}.`);
                  if (this.onreceive) {
                    this.onreceive(response.content);
                  }
                } else {
                  this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                }
              }
            } catch (e) {
              if (!this._running) {
                this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
              } else {
                if (e instanceof Errors_1.TimeoutError) {
                  this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                } else {
                  this._closeError = e;
                  this._running = false;
                }
              }
            }
          }
        } finally {
          this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Polling complete.");
          if (!this.pollAborted) {
            this._raiseOnClose();
          }
        }
      }
      async send(data) {
        if (!this._running) {
          return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return Utils_1.sendMessage(this._logger, "LongPolling", this._httpClient, this._url, this._accessTokenFactory, data, this._options);
      }
      async stop() {
        this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Stopping polling.");
        this._running = false;
        this._pollAbort.abort();
        try {
          await this._receiving;
          this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
          const headers = {};
          const [name, value] = Utils_1.getUserAgentHeader();
          headers[name] = value;
          const deleteOptions = {
            headers: { ...headers, ...this._options.headers },
            timeout: this._options.timeout,
            withCredentials: this._options.withCredentials
          };
          const token = await this._getAccessToken();
          this._updateHeaderToken(deleteOptions, token);
          await this._httpClient.delete(this._url, deleteOptions);
          this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) DELETE request sent.");
        } finally {
          this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Stop finished.");
          this._raiseOnClose();
        }
      }
      _raiseOnClose() {
        if (this.onclose) {
          let logMessage = "(LongPolling transport) Firing onclose event.";
          if (this._closeError) {
            logMessage += " Error: " + this._closeError;
          }
          this._logger.log(ILogger_1.LogLevel.Trace, logMessage);
          this.onclose(this._closeError);
        }
      }
    };
    exports.LongPollingTransport = LongPollingTransport;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/ServerSentEventsTransport.js
var require_ServerSentEventsTransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/ServerSentEventsTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServerSentEventsTransport = void 0;
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Utils_1 = require_Utils();
    var ServerSentEventsTransport = class {
      constructor(httpClient, accessTokenFactory, logger, options) {
        this._httpClient = httpClient;
        this._accessTokenFactory = accessTokenFactory;
        this._logger = logger;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
      }
      async connect(url, transferFormat) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isRequired(transferFormat, "transferFormat");
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._logger.log(ILogger_1.LogLevel.Trace, "(SSE transport) Connecting.");
        this._url = url;
        if (this._accessTokenFactory) {
          const token = await this._accessTokenFactory();
          if (token) {
            url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
          }
        }
        return new Promise((resolve2, reject) => {
          let opened = false;
          if (transferFormat !== ITransport_1.TransferFormat.Text) {
            reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
            return;
          }
          let eventSource;
          if (Utils_1.Platform.isBrowser || Utils_1.Platform.isWebWorker) {
            eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials });
          } else {
            const cookies = this._httpClient.getCookieString(url);
            const headers = {};
            headers.Cookie = cookies;
            const [name, value] = Utils_1.getUserAgentHeader();
            headers[name] = value;
            eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials, headers: { ...headers, ...this._options.headers } });
          }
          try {
            eventSource.onmessage = (e) => {
              if (this.onreceive) {
                try {
                  this._logger.log(ILogger_1.LogLevel.Trace, `(SSE transport) data received. ${Utils_1.getDataDetail(e.data, this._options.logMessageContent)}.`);
                  this.onreceive(e.data);
                } catch (error) {
                  this._close(error);
                  return;
                }
              }
            };
            eventSource.onerror = (e) => {
              if (opened) {
                this._close();
              } else {
                reject(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
              }
            };
            eventSource.onopen = () => {
              this._logger.log(ILogger_1.LogLevel.Information, `SSE connected to ${this._url}`);
              this._eventSource = eventSource;
              opened = true;
              resolve2();
            };
          } catch (e) {
            reject(e);
            return;
          }
        });
      }
      async send(data) {
        if (!this._eventSource) {
          return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return Utils_1.sendMessage(this._logger, "SSE", this._httpClient, this._url, this._accessTokenFactory, data, this._options);
      }
      stop() {
        this._close();
        return Promise.resolve();
      }
      _close(e) {
        if (this._eventSource) {
          this._eventSource.close();
          this._eventSource = void 0;
          if (this.onclose) {
            this.onclose(e);
          }
        }
      }
    };
    exports.ServerSentEventsTransport = ServerSentEventsTransport;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/WebSocketTransport.js
var require_WebSocketTransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/WebSocketTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebSocketTransport = void 0;
    var HeaderNames_1 = require_HeaderNames();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Utils_1 = require_Utils();
    var WebSocketTransport = class {
      constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
        this._logger = logger;
        this._accessTokenFactory = accessTokenFactory;
        this._logMessageContent = logMessageContent;
        this._webSocketConstructor = webSocketConstructor;
        this._httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
        this._headers = headers;
      }
      async connect(url, transferFormat) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isRequired(transferFormat, "transferFormat");
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._logger.log(ILogger_1.LogLevel.Trace, "(WebSockets transport) Connecting.");
        if (this._accessTokenFactory) {
          const token = await this._accessTokenFactory();
          if (token) {
            url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
          }
        }
        return new Promise((resolve2, reject) => {
          url = url.replace(/^http/, "ws");
          let webSocket;
          const cookies = this._httpClient.getCookieString(url);
          let opened = false;
          if (Utils_1.Platform.isNode) {
            const headers = {};
            const [name, value] = Utils_1.getUserAgentHeader();
            headers[name] = value;
            if (cookies) {
              headers[HeaderNames_1.HeaderNames.Cookie] = `${cookies}`;
            }
            webSocket = new this._webSocketConstructor(url, void 0, {
              headers: { ...headers, ...this._headers }
            });
          }
          if (!webSocket) {
            webSocket = new this._webSocketConstructor(url);
          }
          if (transferFormat === ITransport_1.TransferFormat.Binary) {
            webSocket.binaryType = "arraybuffer";
          }
          webSocket.onopen = (_event) => {
            this._logger.log(ILogger_1.LogLevel.Information, `WebSocket connected to ${url}.`);
            this._webSocket = webSocket;
            opened = true;
            resolve2();
          };
          webSocket.onerror = (event) => {
            let error = null;
            if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
              error = event.error;
            } else {
              error = "There was an error with the transport";
            }
            this._logger.log(ILogger_1.LogLevel.Information, `(WebSockets transport) ${error}.`);
          };
          webSocket.onmessage = (message) => {
            this._logger.log(ILogger_1.LogLevel.Trace, `(WebSockets transport) data received. ${Utils_1.getDataDetail(message.data, this._logMessageContent)}.`);
            if (this.onreceive) {
              try {
                this.onreceive(message.data);
              } catch (error) {
                this._close(error);
                return;
              }
            }
          };
          webSocket.onclose = (event) => {
            if (opened) {
              this._close(event);
            } else {
              let error = null;
              if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                error = event.error;
              } else {
                error = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.";
              }
              reject(new Error(error));
            }
          };
        });
      }
      send(data) {
        if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
          this._logger.log(ILogger_1.LogLevel.Trace, `(WebSockets transport) sending data. ${Utils_1.getDataDetail(data, this._logMessageContent)}.`);
          this._webSocket.send(data);
          return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
      }
      stop() {
        if (this._webSocket) {
          this._close(void 0);
        }
        return Promise.resolve();
      }
      _close(event) {
        if (this._webSocket) {
          this._webSocket.onclose = () => {
          };
          this._webSocket.onmessage = () => {
          };
          this._webSocket.onerror = () => {
          };
          this._webSocket.close();
          this._webSocket = void 0;
        }
        this._logger.log(ILogger_1.LogLevel.Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
          if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1e3)) {
            this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
          } else if (event instanceof Error) {
            this.onclose(event);
          } else {
            this.onclose();
          }
        }
      }
      _isCloseEvent(event) {
        return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
      }
    };
    exports.WebSocketTransport = WebSocketTransport;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HttpConnection.js
var require_HttpConnection = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HttpConnection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransportSendQueue = exports.HttpConnection = void 0;
    var DefaultHttpClient_1 = require_DefaultHttpClient();
    var Errors_1 = require_Errors();
    var HeaderNames_1 = require_HeaderNames();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var LongPollingTransport_1 = require_LongPollingTransport();
    var ServerSentEventsTransport_1 = require_ServerSentEventsTransport();
    var Utils_1 = require_Utils();
    var WebSocketTransport_1 = require_WebSocketTransport();
    var MAX_REDIRECTS = 100;
    var HttpConnection = class {
      constructor(url, options = {}) {
        this._stopPromiseResolver = () => {
        };
        this.features = {};
        this._negotiateVersion = 1;
        Utils_1.Arg.isRequired(url, "url");
        this._logger = Utils_1.createLogger(options.logger);
        this.baseUrl = this._resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent === void 0 ? false : options.logMessageContent;
        if (typeof options.withCredentials === "boolean" || options.withCredentials === void 0) {
          options.withCredentials = options.withCredentials === void 0 ? true : options.withCredentials;
        } else {
          throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
        }
        options.timeout = options.timeout === void 0 ? 100 * 1e3 : options.timeout;
        let webSocketModule = null;
        let eventSourceModule = null;
        if (Utils_1.Platform.isNode && typeof require !== "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
          webSocketModule = requireFunc("ws");
          eventSourceModule = requireFunc("eventsource");
        }
        if (!Utils_1.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
          options.WebSocket = WebSocket;
        } else if (Utils_1.Platform.isNode && !options.WebSocket) {
          if (webSocketModule) {
            options.WebSocket = webSocketModule;
          }
        }
        if (!Utils_1.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
          options.EventSource = EventSource;
        } else if (Utils_1.Platform.isNode && !options.EventSource) {
          if (typeof eventSourceModule !== "undefined") {
            options.EventSource = eventSourceModule;
          }
        }
        this._httpClient = options.httpClient || new DefaultHttpClient_1.DefaultHttpClient(this._logger);
        this._connectionState = "Disconnected";
        this._connectionStarted = false;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
      }
      async start(transferFormat) {
        transferFormat = transferFormat || ITransport_1.TransferFormat.Binary;
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._logger.log(ILogger_1.LogLevel.Debug, `Starting connection with transfer format '${ITransport_1.TransferFormat[transferFormat]}'.`);
        if (this._connectionState !== "Disconnected") {
          return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = "Connecting";
        this._startInternalPromise = this._startInternal(transferFormat);
        await this._startInternalPromise;
        if (this._connectionState === "Disconnecting") {
          const message = "Failed to start the HttpConnection before stop() was called.";
          this._logger.log(ILogger_1.LogLevel.Error, message);
          await this._stopPromise;
          return Promise.reject(new Error(message));
        } else if (this._connectionState !== "Connected") {
          const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
          this._logger.log(ILogger_1.LogLevel.Error, message);
          return Promise.reject(new Error(message));
        }
        this._connectionStarted = true;
      }
      send(data) {
        if (this._connectionState !== "Connected") {
          return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }
        if (!this._sendQueue) {
          this._sendQueue = new TransportSendQueue(this.transport);
        }
        return this._sendQueue.send(data);
      }
      async stop(error) {
        if (this._connectionState === "Disconnected") {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);
          return Promise.resolve();
        }
        if (this._connectionState === "Disconnecting") {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
          return this._stopPromise;
        }
        this._connectionState = "Disconnecting";
        this._stopPromise = new Promise((resolve2) => {
          this._stopPromiseResolver = resolve2;
        });
        await this._stopInternal(error);
        await this._stopPromise;
      }
      async _stopInternal(error) {
        this._stopError = error;
        try {
          await this._startInternalPromise;
        } catch (e) {
        }
        if (this.transport) {
          try {
            await this.transport.stop();
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);
            this._stopConnection();
          }
          this.transport = void 0;
        } else {
          this._logger.log(ILogger_1.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
        }
      }
      async _startInternal(transferFormat) {
        let url = this.baseUrl;
        this._accessTokenFactory = this._options.accessTokenFactory;
        try {
          if (this._options.skipNegotiation) {
            if (this._options.transport === ITransport_1.HttpTransportType.WebSockets) {
              this.transport = this._constructTransport(ITransport_1.HttpTransportType.WebSockets);
              await this._startTransport(url, transferFormat);
            } else {
              throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
            }
          } else {
            let negotiateResponse = null;
            let redirects = 0;
            do {
              negotiateResponse = await this._getNegotiationResponse(url);
              if (this._connectionState === "Disconnecting" || this._connectionState === "Disconnected") {
                throw new Error("The connection was stopped during negotiation.");
              }
              if (negotiateResponse.error) {
                throw new Error(negotiateResponse.error);
              }
              if (negotiateResponse.ProtocolVersion) {
                throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
              }
              if (negotiateResponse.url) {
                url = negotiateResponse.url;
              }
              if (negotiateResponse.accessToken) {
                const accessToken = negotiateResponse.accessToken;
                this._accessTokenFactory = () => accessToken;
              }
              redirects++;
            } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
            if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
              throw new Error("Negotiate redirection limit exceeded.");
            }
            await this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
          }
          if (this.transport instanceof LongPollingTransport_1.LongPollingTransport) {
            this.features.inherentKeepAlive = true;
          }
          if (this._connectionState === "Connecting") {
            this._logger.log(ILogger_1.LogLevel.Debug, "The HttpConnection connected successfully.");
            this._connectionState = "Connected";
          }
        } catch (e) {
          this._logger.log(ILogger_1.LogLevel.Error, "Failed to start the connection: " + e);
          this._connectionState = "Disconnected";
          this.transport = void 0;
          this._stopPromiseResolver();
          return Promise.reject(e);
        }
      }
      async _getNegotiationResponse(url) {
        const headers = {};
        if (this._accessTokenFactory) {
          const token = await this._accessTokenFactory();
          if (token) {
            headers[HeaderNames_1.HeaderNames.Authorization] = `Bearer ${token}`;
          }
        }
        const [name, value] = Utils_1.getUserAgentHeader();
        headers[name] = value;
        const negotiateUrl = this._resolveNegotiateUrl(url);
        this._logger.log(ILogger_1.LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
        try {
          const response = await this._httpClient.post(negotiateUrl, {
            content: "",
            headers: { ...headers, ...this._options.headers },
            timeout: this._options.timeout,
            withCredentials: this._options.withCredentials
          });
          if (response.statusCode !== 200) {
            return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
          }
          const negotiateResponse = JSON.parse(response.content);
          if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
            negotiateResponse.connectionToken = negotiateResponse.connectionId;
          }
          return negotiateResponse;
        } catch (e) {
          let errorMessage = "Failed to complete negotiation with the server: " + e;
          if (e instanceof Errors_1.HttpError) {
            if (e.statusCode === 404) {
              errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
            }
          }
          this._logger.log(ILogger_1.LogLevel.Error, errorMessage);
          return Promise.reject(new Errors_1.FailedToNegotiateWithServerError(errorMessage));
        }
      }
      _createConnectUrl(url, connectionToken) {
        if (!connectionToken) {
          return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
      }
      async _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        let connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
        if (this._isITransport(requestedTransport)) {
          this._logger.log(ILogger_1.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
          this.transport = requestedTransport;
          await this._startTransport(connectUrl, requestedTransferFormat);
          this.connectionId = negotiateResponse.connectionId;
          return;
        }
        const transportExceptions = [];
        const transports = negotiateResponse.availableTransports || [];
        let negotiate = negotiateResponse;
        for (const endpoint of transports) {
          const transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat);
          if (transportOrError instanceof Error) {
            transportExceptions.push(`${endpoint.transport} failed:`);
            transportExceptions.push(transportOrError);
          } else if (this._isITransport(transportOrError)) {
            this.transport = transportOrError;
            if (!negotiate) {
              try {
                negotiate = await this._getNegotiationResponse(url);
              } catch (ex) {
                return Promise.reject(ex);
              }
              connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
            }
            try {
              await this._startTransport(connectUrl, requestedTransferFormat);
              this.connectionId = negotiate.connectionId;
              return;
            } catch (ex) {
              this._logger.log(ILogger_1.LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
              negotiate = void 0;
              transportExceptions.push(new Errors_1.FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, ITransport_1.HttpTransportType[endpoint.transport]));
              if (this._connectionState !== "Connecting") {
                const message = "Failed to select transport before stop() was called.";
                this._logger.log(ILogger_1.LogLevel.Debug, message);
                return Promise.reject(new Error(message));
              }
            }
          }
        }
        if (transportExceptions.length > 0) {
          return Promise.reject(new Errors_1.AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
        }
        return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
      }
      _constructTransport(transport) {
        switch (transport) {
          case ITransport_1.HttpTransportType.WebSockets:
            if (!this._options.WebSocket) {
              throw new Error("'WebSocket' is not supported in your environment.");
            }
            return new WebSocketTransport_1.WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
          case ITransport_1.HttpTransportType.ServerSentEvents:
            if (!this._options.EventSource) {
              throw new Error("'EventSource' is not supported in your environment.");
            }
            return new ServerSentEventsTransport_1.ServerSentEventsTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options);
          case ITransport_1.HttpTransportType.LongPolling:
            return new LongPollingTransport_1.LongPollingTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options);
          default:
            throw new Error(`Unknown transport: ${transport}.`);
        }
      }
      _startTransport(url, transferFormat) {
        this.transport.onreceive = this.onreceive;
        this.transport.onclose = (e) => this._stopConnection(e);
        return this.transport.connect(url, transferFormat);
      }
      _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat) {
        const transport = ITransport_1.HttpTransportType[endpoint.transport];
        if (transport === null || transport === void 0) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
          return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
        } else {
          if (transportMatches(requestedTransport, transport)) {
            const transferFormats = endpoint.transferFormats.map((s) => ITransport_1.TransferFormat[s]);
            if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
              if (transport === ITransport_1.HttpTransportType.WebSockets && !this._options.WebSocket || transport === ITransport_1.HttpTransportType.ServerSentEvents && !this._options.EventSource) {
                this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${ITransport_1.HttpTransportType[transport]}' because it is not supported in your environment.'`);
                return new Errors_1.UnsupportedTransportError(`'${ITransport_1.HttpTransportType[transport]}' is not supported in your environment.`, transport);
              } else {
                this._logger.log(ILogger_1.LogLevel.Debug, `Selecting transport '${ITransport_1.HttpTransportType[transport]}'.`);
                try {
                  return this._constructTransport(transport);
                } catch (ex) {
                  return ex;
                }
              }
            } else {
              this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${ITransport_1.HttpTransportType[transport]}' because it does not support the requested transfer format '${ITransport_1.TransferFormat[requestedTransferFormat]}'.`);
              return new Error(`'${ITransport_1.HttpTransportType[transport]}' does not support ${ITransport_1.TransferFormat[requestedTransferFormat]}.`);
            }
          } else {
            this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${ITransport_1.HttpTransportType[transport]}' because it was disabled by the client.`);
            return new Errors_1.DisabledTransportError(`'${ITransport_1.HttpTransportType[transport]}' is disabled by the client.`, transport);
          }
        }
      }
      _isITransport(transport) {
        return transport && typeof transport === "object" && "connect" in transport;
      }
      _stopConnection(error) {
        this._logger.log(ILogger_1.LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);
        this.transport = void 0;
        error = this._stopError || error;
        this._stopError = void 0;
        if (this._connectionState === "Disconnected") {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);
          return;
        }
        if (this._connectionState === "Connecting") {
          this._logger.log(ILogger_1.LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);
          throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
        }
        if (this._connectionState === "Disconnecting") {
          this._stopPromiseResolver();
        }
        if (error) {
          this._logger.log(ILogger_1.LogLevel.Error, `Connection disconnected with error '${error}'.`);
        } else {
          this._logger.log(ILogger_1.LogLevel.Information, "Connection disconnected.");
        }
        if (this._sendQueue) {
          this._sendQueue.stop().catch((e) => {
            this._logger.log(ILogger_1.LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
          });
          this._sendQueue = void 0;
        }
        this.connectionId = void 0;
        this._connectionState = "Disconnected";
        if (this._connectionStarted) {
          this._connectionStarted = false;
          try {
            if (this.onclose) {
              this.onclose(error);
            }
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e}'.`);
          }
        }
      }
      _resolveUrl(url) {
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
          return url;
        }
        if (!Utils_1.Platform.isBrowser) {
          throw new Error(`Cannot resolve '${url}'.`);
        }
        const aTag = window.document.createElement("a");
        aTag.href = url;
        this._logger.log(ILogger_1.LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);
        return aTag.href;
      }
      _resolveNegotiateUrl(url) {
        const index = url.indexOf("?");
        let negotiateUrl = url.substring(0, index === -1 ? url.length : index);
        if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
          negotiateUrl += "/";
        }
        negotiateUrl += "negotiate";
        negotiateUrl += index === -1 ? "" : url.substring(index);
        if (negotiateUrl.indexOf("negotiateVersion") === -1) {
          negotiateUrl += index === -1 ? "?" : "&";
          negotiateUrl += "negotiateVersion=" + this._negotiateVersion;
        }
        return negotiateUrl;
      }
    };
    exports.HttpConnection = HttpConnection;
    function transportMatches(requestedTransport, actualTransport) {
      return !requestedTransport || (actualTransport & requestedTransport) !== 0;
    }
    var TransportSendQueue = class {
      constructor(_transport) {
        this._transport = _transport;
        this._buffer = [];
        this._executing = true;
        this._sendBufferedData = new PromiseSource();
        this._transportResult = new PromiseSource();
        this._sendLoopPromise = this._sendLoop();
      }
      send(data) {
        this._bufferData(data);
        if (!this._transportResult) {
          this._transportResult = new PromiseSource();
        }
        return this._transportResult.promise;
      }
      stop() {
        this._executing = false;
        this._sendBufferedData.resolve();
        return this._sendLoopPromise;
      }
      _bufferData(data) {
        if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
          throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof data}`);
        }
        this._buffer.push(data);
        this._sendBufferedData.resolve();
      }
      async _sendLoop() {
        while (true) {
          await this._sendBufferedData.promise;
          if (!this._executing) {
            if (this._transportResult) {
              this._transportResult.reject("Connection stopped.");
            }
            break;
          }
          this._sendBufferedData = new PromiseSource();
          const transportResult = this._transportResult;
          this._transportResult = void 0;
          const data = typeof this._buffer[0] === "string" ? this._buffer.join("") : TransportSendQueue._concatBuffers(this._buffer);
          this._buffer.length = 0;
          try {
            await this._transport.send(data);
            transportResult.resolve();
          } catch (error) {
            transportResult.reject(error);
          }
        }
      }
      static _concatBuffers(arrayBuffers) {
        const totalLength = arrayBuffers.map((b) => b.byteLength).reduce((a, b) => a + b);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const item of arrayBuffers) {
          result.set(new Uint8Array(item), offset);
          offset += item.byteLength;
        }
        return result.buffer;
      }
    };
    exports.TransportSendQueue = TransportSendQueue;
    var PromiseSource = class {
      constructor() {
        this.promise = new Promise((resolve2, reject) => [this._resolver, this._rejecter] = [resolve2, reject]);
      }
      resolve() {
        this._resolver();
      }
      reject(reason) {
        this._rejecter(reason);
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/cjs/JsonHubProtocol.js
var require_JsonHubProtocol = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/JsonHubProtocol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JsonHubProtocol = void 0;
    var IHubProtocol_1 = require_IHubProtocol();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Loggers_1 = require_Loggers();
    var TextMessageFormat_1 = require_TextMessageFormat();
    var JSON_HUB_PROTOCOL_NAME = "json";
    var JsonHubProtocol = class {
      constructor() {
        this.name = JSON_HUB_PROTOCOL_NAME;
        this.version = 1;
        this.transferFormat = ITransport_1.TransferFormat.Text;
      }
      parseMessages(input, logger) {
        if (typeof input !== "string") {
          throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
          return [];
        }
        if (logger === null) {
          logger = Loggers_1.NullLogger.instance;
        }
        const messages = TextMessageFormat_1.TextMessageFormat.parse(input);
        const hubMessages = [];
        for (const message of messages) {
          const parsedMessage = JSON.parse(message);
          if (typeof parsedMessage.type !== "number") {
            throw new Error("Invalid payload.");
          }
          switch (parsedMessage.type) {
            case IHubProtocol_1.MessageType.Invocation:
              this._isInvocationMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.StreamItem:
              this._isStreamItemMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.Completion:
              this._isCompletionMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.Ping:
              break;
            case IHubProtocol_1.MessageType.Close:
              break;
            default:
              logger.log(ILogger_1.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
              continue;
          }
          hubMessages.push(parsedMessage);
        }
        return hubMessages;
      }
      writeMessage(message) {
        return TextMessageFormat_1.TextMessageFormat.write(JSON.stringify(message));
      }
      _isInvocationMessage(message) {
        this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== void 0) {
          this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
      }
      _isStreamItemMessage(message) {
        this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === void 0) {
          throw new Error("Invalid payload for StreamItem message.");
        }
      }
      _isCompletionMessage(message) {
        if (message.result && message.error) {
          throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
          this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
      }
      _assertNotEmptyString(value, errorMessage) {
        if (typeof value !== "string" || value === "") {
          throw new Error(errorMessage);
        }
      }
    };
    exports.JsonHubProtocol = JsonHubProtocol;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HubConnectionBuilder.js
var require_HubConnectionBuilder = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HubConnectionBuilder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HubConnectionBuilder = void 0;
    var DefaultReconnectPolicy_1 = require_DefaultReconnectPolicy();
    var HttpConnection_1 = require_HttpConnection();
    var HubConnection_1 = require_HubConnection();
    var ILogger_1 = require_ILogger();
    var JsonHubProtocol_1 = require_JsonHubProtocol();
    var Loggers_1 = require_Loggers();
    var Utils_1 = require_Utils();
    var LogLevelNameMapping = {
      trace: ILogger_1.LogLevel.Trace,
      debug: ILogger_1.LogLevel.Debug,
      info: ILogger_1.LogLevel.Information,
      information: ILogger_1.LogLevel.Information,
      warn: ILogger_1.LogLevel.Warning,
      warning: ILogger_1.LogLevel.Warning,
      error: ILogger_1.LogLevel.Error,
      critical: ILogger_1.LogLevel.Critical,
      none: ILogger_1.LogLevel.None
    };
    function parseLogLevel(name) {
      const mapping = LogLevelNameMapping[name.toLowerCase()];
      if (typeof mapping !== "undefined") {
        return mapping;
      } else {
        throw new Error(`Unknown log level: ${name}`);
      }
    }
    var HubConnectionBuilder2 = class {
      configureLogging(logging) {
        Utils_1.Arg.isRequired(logging, "logging");
        if (isLogger(logging)) {
          this.logger = logging;
        } else if (typeof logging === "string") {
          const logLevel = parseLogLevel(logging);
          this.logger = new Utils_1.ConsoleLogger(logLevel);
        } else {
          this.logger = new Utils_1.ConsoleLogger(logging);
        }
        return this;
      }
      withUrl(url, transportTypeOrOptions) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isNotEmpty(url, "url");
        this.url = url;
        if (typeof transportTypeOrOptions === "object") {
          this.httpConnectionOptions = { ...this.httpConnectionOptions, ...transportTypeOrOptions };
        } else {
          this.httpConnectionOptions = {
            ...this.httpConnectionOptions,
            transport: transportTypeOrOptions
          };
        }
        return this;
      }
      withHubProtocol(protocol) {
        Utils_1.Arg.isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
      }
      withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
          throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
          this.reconnectPolicy = new DefaultReconnectPolicy_1.DefaultReconnectPolicy();
        } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
          this.reconnectPolicy = new DefaultReconnectPolicy_1.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
        } else {
          this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
      }
      build() {
        const httpConnectionOptions = this.httpConnectionOptions || {};
        if (httpConnectionOptions.logger === void 0) {
          httpConnectionOptions.logger = this.logger;
        }
        if (!this.url) {
          throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        const connection = new HttpConnection_1.HttpConnection(this.url, httpConnectionOptions);
        return HubConnection_1.HubConnection.create(connection, this.logger || Loggers_1.NullLogger.instance, this.protocol || new JsonHubProtocol_1.JsonHubProtocol(), this.reconnectPolicy);
      }
    };
    exports.HubConnectionBuilder = HubConnectionBuilder2;
    function isLogger(logger) {
      return logger.log !== void 0;
    }
  }
});

// node_modules/@microsoft/signalr/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VERSION = exports.Subject = exports.JsonHubProtocol = exports.NullLogger = exports.TransferFormat = exports.HttpTransportType = exports.LogLevel = exports.MessageType = exports.HubConnectionBuilder = exports.HubConnectionState = exports.HubConnection = exports.DefaultHttpClient = exports.HttpResponse = exports.HttpClient = exports.TimeoutError = exports.HttpError = exports.AbortError = void 0;
    var Errors_1 = require_Errors();
    Object.defineProperty(exports, "AbortError", { enumerable: true, get: function() {
      return Errors_1.AbortError;
    } });
    Object.defineProperty(exports, "HttpError", { enumerable: true, get: function() {
      return Errors_1.HttpError;
    } });
    Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function() {
      return Errors_1.TimeoutError;
    } });
    var HttpClient_1 = require_HttpClient();
    Object.defineProperty(exports, "HttpClient", { enumerable: true, get: function() {
      return HttpClient_1.HttpClient;
    } });
    Object.defineProperty(exports, "HttpResponse", { enumerable: true, get: function() {
      return HttpClient_1.HttpResponse;
    } });
    var DefaultHttpClient_1 = require_DefaultHttpClient();
    Object.defineProperty(exports, "DefaultHttpClient", { enumerable: true, get: function() {
      return DefaultHttpClient_1.DefaultHttpClient;
    } });
    var HubConnection_1 = require_HubConnection();
    Object.defineProperty(exports, "HubConnection", { enumerable: true, get: function() {
      return HubConnection_1.HubConnection;
    } });
    Object.defineProperty(exports, "HubConnectionState", { enumerable: true, get: function() {
      return HubConnection_1.HubConnectionState;
    } });
    var HubConnectionBuilder_1 = require_HubConnectionBuilder();
    Object.defineProperty(exports, "HubConnectionBuilder", { enumerable: true, get: function() {
      return HubConnectionBuilder_1.HubConnectionBuilder;
    } });
    var IHubProtocol_1 = require_IHubProtocol();
    Object.defineProperty(exports, "MessageType", { enumerable: true, get: function() {
      return IHubProtocol_1.MessageType;
    } });
    var ILogger_1 = require_ILogger();
    Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function() {
      return ILogger_1.LogLevel;
    } });
    var ITransport_1 = require_ITransport();
    Object.defineProperty(exports, "HttpTransportType", { enumerable: true, get: function() {
      return ITransport_1.HttpTransportType;
    } });
    Object.defineProperty(exports, "TransferFormat", { enumerable: true, get: function() {
      return ITransport_1.TransferFormat;
    } });
    var Loggers_1 = require_Loggers();
    Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function() {
      return Loggers_1.NullLogger;
    } });
    var JsonHubProtocol_1 = require_JsonHubProtocol();
    Object.defineProperty(exports, "JsonHubProtocol", { enumerable: true, get: function() {
      return JsonHubProtocol_1.JsonHubProtocol;
    } });
    var Subject_1 = require_Subject();
    Object.defineProperty(exports, "Subject", { enumerable: true, get: function() {
      return Subject_1.Subject;
    } });
    var Utils_1 = require_Utils();
    Object.defineProperty(exports, "VERSION", { enumerable: true, get: function() {
      return Utils_1.VERSION;
    } });
  }
});

// node_modules/assertion-error/index.js
var require_assertion_error = __commonJS({
  "node_modules/assertion-error/index.js"(exports, module2) {
    function exclude() {
      var excludes = [].slice.call(arguments);
      function excludeProps(res, obj) {
        Object.keys(obj).forEach(function(key) {
          if (!~excludes.indexOf(key))
            res[key] = obj[key];
        });
      }
      return function extendExclude() {
        var args = [].slice.call(arguments), i = 0, res = {};
        for (; i < args.length; i++) {
          excludeProps(res, args[i]);
        }
        return res;
      };
    }
    module2.exports = AssertionError2;
    function AssertionError2(message, _props, ssf) {
      var extend = exclude("name", "message", "stack", "constructor", "toJSON"), props = extend(_props || {});
      this.message = message || "Unspecified AssertionError";
      this.showDiff = false;
      for (var key in props) {
        this[key] = props[key];
      }
      ssf = ssf || AssertionError2;
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ssf);
      } else {
        try {
          throw new Error();
        } catch (e) {
          this.stack = e.stack;
        }
      }
    }
    AssertionError2.prototype = Object.create(Error.prototype);
    AssertionError2.prototype.name = "AssertionError";
    AssertionError2.prototype.constructor = AssertionError2;
    AssertionError2.prototype.toJSON = function(stack) {
      var extend = exclude("constructor", "toJSON", "stack"), props = extend({ name: this.name }, this);
      if (false !== stack && this.stack) {
        props.stack = this.stack;
      }
      return props;
    };
  }
});

// node_modules/pathval/index.js
var require_pathval = __commonJS({
  "node_modules/pathval/index.js"(exports, module2) {
    "use strict";
    function hasProperty(obj, name) {
      if (typeof obj === "undefined" || obj === null) {
        return false;
      }
      return name in Object(obj);
    }
    function parsePath(path2) {
      var str = path2.replace(/([^\\])\[/g, "$1.[");
      var parts = str.match(/(\\\.|[^.]+?)+/g);
      return parts.map(function mapMatches(value) {
        if (value === "constructor" || value === "__proto__" || value === "prototype") {
          return {};
        }
        var regexp = /^\[(\d+)\]$/;
        var mArr = regexp.exec(value);
        var parsed = null;
        if (mArr) {
          parsed = { i: parseFloat(mArr[1]) };
        } else {
          parsed = { p: value.replace(/\\([.[\]])/g, "$1") };
        }
        return parsed;
      });
    }
    function internalGetPathValue(obj, parsed, pathDepth) {
      var temporaryValue = obj;
      var res = null;
      pathDepth = typeof pathDepth === "undefined" ? parsed.length : pathDepth;
      for (var i = 0; i < pathDepth; i++) {
        var part = parsed[i];
        if (temporaryValue) {
          if (typeof part.p === "undefined") {
            temporaryValue = temporaryValue[part.i];
          } else {
            temporaryValue = temporaryValue[part.p];
          }
          if (i === pathDepth - 1) {
            res = temporaryValue;
          }
        }
      }
      return res;
    }
    function internalSetPathValue(obj, val, parsed) {
      var tempObj = obj;
      var pathDepth = parsed.length;
      var part = null;
      for (var i = 0; i < pathDepth; i++) {
        var propName = null;
        var propVal = null;
        part = parsed[i];
        if (i === pathDepth - 1) {
          propName = typeof part.p === "undefined" ? part.i : part.p;
          tempObj[propName] = val;
        } else if (typeof part.p !== "undefined" && tempObj[part.p]) {
          tempObj = tempObj[part.p];
        } else if (typeof part.i !== "undefined" && tempObj[part.i]) {
          tempObj = tempObj[part.i];
        } else {
          var next = parsed[i + 1];
          propName = typeof part.p === "undefined" ? part.i : part.p;
          propVal = typeof next.p === "undefined" ? [] : {};
          tempObj[propName] = propVal;
          tempObj = tempObj[propName];
        }
      }
    }
    function getPathInfo(obj, path2) {
      var parsed = parsePath(path2);
      var last = parsed[parsed.length - 1];
      var info = {
        parent: parsed.length > 1 ? internalGetPathValue(obj, parsed, parsed.length - 1) : obj,
        name: last.p || last.i,
        value: internalGetPathValue(obj, parsed)
      };
      info.exists = hasProperty(info.parent, info.name);
      return info;
    }
    function getPathValue(obj, path2) {
      var info = getPathInfo(obj, path2);
      return info.value;
    }
    function setPathValue(obj, path2, val) {
      var parsed = parsePath(path2);
      internalSetPathValue(obj, val, parsed);
      return obj;
    }
    module2.exports = {
      hasProperty,
      getPathInfo,
      getPathValue,
      setPathValue
    };
  }
});

// node_modules/chai/lib/chai/utils/flag.js
var require_flag = __commonJS({
  "node_modules/chai/lib/chai/utils/flag.js"(exports, module2) {
    module2.exports = function flag(obj, key, value) {
      var flags = obj.__flags || (obj.__flags = /* @__PURE__ */ Object.create(null));
      if (arguments.length === 3) {
        flags[key] = value;
      } else {
        return flags[key];
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/test.js
var require_test = __commonJS({
  "node_modules/chai/lib/chai/utils/test.js"(exports, module2) {
    var flag = require_flag();
    module2.exports = function test3(obj, args) {
      var negate = flag(obj, "negate"), expr = args[0];
      return negate ? !expr : expr;
    };
  }
});

// node_modules/type-detect/type-detect.js
var require_type_detect = __commonJS({
  "node_modules/type-detect/type-detect.js"(exports, module2) {
    (function(global4, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? module2.exports = factory() : typeof define === "function" && define.amd ? define(factory) : global4.typeDetect = factory();
    })(exports, function() {
      "use strict";
      var promiseExists = typeof Promise === "function";
      var globalObject2 = typeof self === "object" ? self : global;
      var symbolExists = typeof Symbol !== "undefined";
      var mapExists = typeof Map !== "undefined";
      var setExists = typeof Set !== "undefined";
      var weakMapExists = typeof WeakMap !== "undefined";
      var weakSetExists = typeof WeakSet !== "undefined";
      var dataViewExists = typeof DataView !== "undefined";
      var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
      var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
      var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
      var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
      var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
      var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
      var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
      var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
      var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
      var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
      var toStringLeftSliceLength = 8;
      var toStringRightSliceLength = -1;
      function typeDetect2(obj) {
        var typeofObj = typeof obj;
        if (typeofObj !== "object") {
          return typeofObj;
        }
        if (obj === null) {
          return "null";
        }
        if (obj === globalObject2) {
          return "global";
        }
        if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
          return "Array";
        }
        if (typeof window === "object" && window !== null) {
          if (typeof window.location === "object" && obj === window.location) {
            return "Location";
          }
          if (typeof window.document === "object" && obj === window.document) {
            return "Document";
          }
          if (typeof window.navigator === "object") {
            if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
              return "MimeTypeArray";
            }
            if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
              return "PluginArray";
            }
          }
          if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
            if (obj.tagName === "BLOCKQUOTE") {
              return "HTMLQuoteElement";
            }
            if (obj.tagName === "TD") {
              return "HTMLTableDataCellElement";
            }
            if (obj.tagName === "TH") {
              return "HTMLTableHeaderCellElement";
            }
          }
        }
        var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
        if (typeof stringTag === "string") {
          return stringTag;
        }
        var objPrototype = Object.getPrototypeOf(obj);
        if (objPrototype === RegExp.prototype) {
          return "RegExp";
        }
        if (objPrototype === Date.prototype) {
          return "Date";
        }
        if (promiseExists && objPrototype === Promise.prototype) {
          return "Promise";
        }
        if (setExists && objPrototype === Set.prototype) {
          return "Set";
        }
        if (mapExists && objPrototype === Map.prototype) {
          return "Map";
        }
        if (weakSetExists && objPrototype === WeakSet.prototype) {
          return "WeakSet";
        }
        if (weakMapExists && objPrototype === WeakMap.prototype) {
          return "WeakMap";
        }
        if (dataViewExists && objPrototype === DataView.prototype) {
          return "DataView";
        }
        if (mapExists && objPrototype === mapIteratorPrototype) {
          return "Map Iterator";
        }
        if (setExists && objPrototype === setIteratorPrototype) {
          return "Set Iterator";
        }
        if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
          return "Array Iterator";
        }
        if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
          return "String Iterator";
        }
        if (objPrototype === null) {
          return "Object";
        }
        return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
      }
      return typeDetect2;
    });
  }
});

// node_modules/chai/lib/chai/utils/expectTypes.js
var require_expectTypes = __commonJS({
  "node_modules/chai/lib/chai/utils/expectTypes.js"(exports, module2) {
    var AssertionError2 = require_assertion_error();
    var flag = require_flag();
    var type2 = require_type_detect();
    module2.exports = function expectTypes(obj, types) {
      var flagMsg = flag(obj, "message");
      var ssfi = flag(obj, "ssfi");
      flagMsg = flagMsg ? flagMsg + ": " : "";
      obj = flag(obj, "object");
      types = types.map(function(t) {
        return t.toLowerCase();
      });
      types.sort();
      var str = types.map(function(t, index) {
        var art = ~["a", "e", "i", "o", "u"].indexOf(t.charAt(0)) ? "an" : "a";
        var or = types.length > 1 && index === types.length - 1 ? "or " : "";
        return or + art + " " + t;
      }).join(", ");
      var objType = type2(obj).toLowerCase();
      if (!types.some(function(expected) {
        return objType === expected;
      })) {
        throw new AssertionError2(
          flagMsg + "object tested must be " + str + ", but " + objType + " given",
          void 0,
          ssfi
        );
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/getActual.js
var require_getActual = __commonJS({
  "node_modules/chai/lib/chai/utils/getActual.js"(exports, module2) {
    module2.exports = function getActual(obj, args) {
      return args.length > 4 ? args[4] : obj._obj;
    };
  }
});

// node_modules/get-func-name/index.js
var require_get_func_name = __commonJS({
  "node_modules/get-func-name/index.js"(exports, module2) {
    "use strict";
    var toString4 = Function.prototype.toString;
    var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
    function getFuncName(aFunc) {
      if (typeof aFunc !== "function") {
        return null;
      }
      var name = "";
      if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
        var match = toString4.call(aFunc).match(functionNameMatch);
        if (match) {
          name = match[1];
        }
      } else {
        name = aFunc.name;
      }
      return name;
    }
    module2.exports = getFuncName;
  }
});

// node_modules/loupe/loupe.js
var require_loupe = __commonJS({
  "node_modules/loupe/loupe.js"(exports, module2) {
    (function(global4, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global4 = typeof globalThis !== "undefined" ? globalThis : global4 || self, factory(global4.loupe = {}));
    })(exports, function(exports2) {
      "use strict";
      function _typeof2(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof2 = function(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof2 = function(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof2(obj);
      }
      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
      }
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      function _unsupportedIterableToArray2(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray2(o, minLen);
        var n2 = Object.prototype.toString.call(o).slice(8, -1);
        if (n2 === "Object" && o.constructor)
          n2 = o.constructor.name;
        if (n2 === "Map" || n2 === "Set")
          return Array.from(o);
        if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
          return _arrayLikeToArray2(o, minLen);
      }
      function _arrayLikeToArray2(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var ansiColors = {
        bold: ["1", "22"],
        dim: ["2", "22"],
        italic: ["3", "23"],
        underline: ["4", "24"],
        inverse: ["7", "27"],
        hidden: ["8", "28"],
        strike: ["9", "29"],
        black: ["30", "39"],
        red: ["31", "39"],
        green: ["32", "39"],
        yellow: ["33", "39"],
        blue: ["34", "39"],
        magenta: ["35", "39"],
        cyan: ["36", "39"],
        white: ["37", "39"],
        brightblack: ["30;1", "39"],
        brightred: ["31;1", "39"],
        brightgreen: ["32;1", "39"],
        brightyellow: ["33;1", "39"],
        brightblue: ["34;1", "39"],
        brightmagenta: ["35;1", "39"],
        brightcyan: ["36;1", "39"],
        brightwhite: ["37;1", "39"],
        grey: ["90", "39"]
      };
      var styles = {
        special: "cyan",
        number: "yellow",
        bigint: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        symbol: "green",
        date: "magenta",
        regexp: "red"
      };
      var truncator = "\u2026";
      function colorise(value, styleType) {
        var color = ansiColors[styles[styleType]] || ansiColors[styleType];
        if (!color) {
          return String(value);
        }
        return "\x1B[".concat(color[0], "m").concat(String(value), "\x1B[").concat(color[1], "m");
      }
      function normaliseOptions() {
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$showHidden = _ref.showHidden, showHidden = _ref$showHidden === void 0 ? false : _ref$showHidden, _ref$depth = _ref.depth, depth = _ref$depth === void 0 ? 2 : _ref$depth, _ref$colors = _ref.colors, colors = _ref$colors === void 0 ? false : _ref$colors, _ref$customInspect = _ref.customInspect, customInspect = _ref$customInspect === void 0 ? true : _ref$customInspect, _ref$showProxy = _ref.showProxy, showProxy = _ref$showProxy === void 0 ? false : _ref$showProxy, _ref$maxArrayLength = _ref.maxArrayLength, maxArrayLength = _ref$maxArrayLength === void 0 ? Infinity : _ref$maxArrayLength, _ref$breakLength = _ref.breakLength, breakLength = _ref$breakLength === void 0 ? Infinity : _ref$breakLength, _ref$seen = _ref.seen, seen = _ref$seen === void 0 ? [] : _ref$seen, _ref$truncate = _ref.truncate, truncate2 = _ref$truncate === void 0 ? Infinity : _ref$truncate, _ref$stylize = _ref.stylize, stylize = _ref$stylize === void 0 ? String : _ref$stylize;
        var options = {
          showHidden: Boolean(showHidden),
          depth: Number(depth),
          colors: Boolean(colors),
          customInspect: Boolean(customInspect),
          showProxy: Boolean(showProxy),
          maxArrayLength: Number(maxArrayLength),
          breakLength: Number(breakLength),
          truncate: Number(truncate2),
          seen,
          stylize
        };
        if (options.colors) {
          options.stylize = colorise;
        }
        return options;
      }
      function truncate(string2, length) {
        var tail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : truncator;
        string2 = String(string2);
        var tailLength = tail.length;
        var stringLength = string2.length;
        if (tailLength > length && stringLength > tailLength) {
          return tail;
        }
        if (stringLength > length && stringLength > tailLength) {
          return "".concat(string2.slice(0, length - tailLength)).concat(tail);
        }
        return string2;
      }
      function inspectList(list, options, inspectItem) {
        var separator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ", ";
        inspectItem = inspectItem || options.inspect;
        var size = list.length;
        if (size === 0)
          return "";
        var originalLength = options.truncate;
        var output = "";
        var peek = "";
        var truncated = "";
        for (var i = 0; i < size; i += 1) {
          var last = i + 1 === list.length;
          var secondToLast = i + 2 === list.length;
          truncated = "".concat(truncator, "(").concat(list.length - i, ")");
          var value = list[i];
          options.truncate = originalLength - output.length - (last ? 0 : separator.length);
          var string2 = peek || inspectItem(value, options) + (last ? "" : separator);
          var nextLength = output.length + string2.length;
          var truncatedLength = nextLength + truncated.length;
          if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
            break;
          }
          if (!last && !secondToLast && truncatedLength > originalLength) {
            break;
          }
          peek = last ? "" : inspectItem(list[i + 1], options) + (secondToLast ? "" : separator);
          if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
            break;
          }
          output += string2;
          if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
            truncated = "".concat(truncator, "(").concat(list.length - i - 1, ")");
            break;
          }
          truncated = "";
        }
        return "".concat(output).concat(truncated);
      }
      function quoteComplexKey(key) {
        if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
          return key;
        }
        return JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      }
      function inspectProperty(_ref2, options) {
        var _ref3 = _slicedToArray(_ref2, 2), key = _ref3[0], value = _ref3[1];
        options.truncate -= 2;
        if (typeof key === "string") {
          key = quoteComplexKey(key);
        } else if (typeof key !== "number") {
          key = "[".concat(options.inspect(key, options), "]");
        }
        options.truncate -= key.length;
        value = options.inspect(value, options);
        return "".concat(key, ": ").concat(value);
      }
      function inspectArray(array2, options) {
        var nonIndexProperties = Object.keys(array2).slice(array2.length);
        if (!array2.length && !nonIndexProperties.length)
          return "[]";
        options.truncate -= 4;
        var listContents = inspectList(array2, options);
        options.truncate -= listContents.length;
        var propertyContents = "";
        if (nonIndexProperties.length) {
          propertyContents = inspectList(nonIndexProperties.map(function(key) {
            return [key, array2[key]];
          }), options, inspectProperty);
        }
        return "[ ".concat(listContents).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
      }
      var toString4 = Function.prototype.toString;
      var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
      function getFuncName(aFunc) {
        if (typeof aFunc !== "function") {
          return null;
        }
        var name = "";
        if (typeof Function.prototype.name === "undefined" && typeof aFunc.name === "undefined") {
          var match = toString4.call(aFunc).match(functionNameMatch);
          if (match) {
            name = match[1];
          }
        } else {
          name = aFunc.name;
        }
        return name;
      }
      var getFuncName_1 = getFuncName;
      var getArrayName = function getArrayName2(array2) {
        if (typeof Buffer === "function" && array2 instanceof Buffer) {
          return "Buffer";
        }
        if (array2[Symbol.toStringTag]) {
          return array2[Symbol.toStringTag];
        }
        return getFuncName_1(array2.constructor);
      };
      function inspectTypedArray(array2, options) {
        var name = getArrayName(array2);
        options.truncate -= name.length + 4;
        var nonIndexProperties = Object.keys(array2).slice(array2.length);
        if (!array2.length && !nonIndexProperties.length)
          return "".concat(name, "[]");
        var output = "";
        for (var i = 0; i < array2.length; i++) {
          var string2 = "".concat(options.stylize(truncate(array2[i], options.truncate), "number")).concat(i === array2.length - 1 ? "" : ", ");
          options.truncate -= string2.length;
          if (array2[i] !== array2.length && options.truncate <= 3) {
            output += "".concat(truncator, "(").concat(array2.length - array2[i] + 1, ")");
            break;
          }
          output += string2;
        }
        var propertyContents = "";
        if (nonIndexProperties.length) {
          propertyContents = inspectList(nonIndexProperties.map(function(key) {
            return [key, array2[key]];
          }), options, inspectProperty);
        }
        return "".concat(name, "[ ").concat(output).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
      }
      function inspectDate(dateObject, options) {
        var split = dateObject.toJSON().split("T");
        var date = split[0];
        return options.stylize("".concat(date, "T").concat(truncate(split[1], options.truncate - date.length - 1)), "date");
      }
      function inspectFunction(func, options) {
        var name = getFuncName_1(func);
        if (!name) {
          return options.stylize("[Function]", "special");
        }
        return options.stylize("[Function ".concat(truncate(name, options.truncate - 11), "]"), "special");
      }
      function inspectMapEntry(_ref, options) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        options.truncate -= 4;
        key = options.inspect(key, options);
        options.truncate -= key.length;
        value = options.inspect(value, options);
        return "".concat(key, " => ").concat(value);
      }
      function mapToEntries(map2) {
        var entries = [];
        map2.forEach(function(value, key) {
          entries.push([key, value]);
        });
        return entries;
      }
      function inspectMap(map2, options) {
        var size = map2.size - 1;
        if (size <= 0) {
          return "Map{}";
        }
        options.truncate -= 7;
        return "Map{ ".concat(inspectList(mapToEntries(map2), options, inspectMapEntry), " }");
      }
      var isNaN2 = Number.isNaN || function(i) {
        return i !== i;
      };
      function inspectNumber(number, options) {
        if (isNaN2(number)) {
          return options.stylize("NaN", "number");
        }
        if (number === Infinity) {
          return options.stylize("Infinity", "number");
        }
        if (number === -Infinity) {
          return options.stylize("-Infinity", "number");
        }
        if (number === 0) {
          return options.stylize(1 / number === Infinity ? "+0" : "-0", "number");
        }
        return options.stylize(truncate(number, options.truncate), "number");
      }
      function inspectBigInt(number, options) {
        var nums = truncate(number.toString(), options.truncate - 1);
        if (nums !== truncator)
          nums += "n";
        return options.stylize(nums, "bigint");
      }
      function inspectRegExp(value, options) {
        var flags = value.toString().split("/")[2];
        var sourceLength = options.truncate - (2 + flags.length);
        var source = value.source;
        return options.stylize("/".concat(truncate(source, sourceLength), "/").concat(flags), "regexp");
      }
      function arrayFromSet(set2) {
        var values = [];
        set2.forEach(function(value) {
          values.push(value);
        });
        return values;
      }
      function inspectSet(set2, options) {
        if (set2.size === 0)
          return "Set{}";
        options.truncate -= 7;
        return "Set{ ".concat(inspectList(arrayFromSet(set2), options), " }");
      }
      var stringEscapeChars = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g");
      var escapeCharacters = {
        "\b": "\\b",
        "	": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        "'": "\\'",
        "\\": "\\\\"
      };
      var hex = 16;
      var unicodeLength = 4;
      function escape(char) {
        return escapeCharacters[char] || "\\u".concat("0000".concat(char.charCodeAt(0).toString(hex)).slice(-unicodeLength));
      }
      function inspectString(string2, options) {
        if (stringEscapeChars.test(string2)) {
          string2 = string2.replace(stringEscapeChars, escape);
        }
        return options.stylize("'".concat(truncate(string2, options.truncate - 2), "'"), "string");
      }
      function inspectSymbol(value) {
        if ("description" in Symbol.prototype) {
          return value.description ? "Symbol(".concat(value.description, ")") : "Symbol()";
        }
        return value.toString();
      }
      var getPromiseValue = function getPromiseValue2() {
        return "Promise{\u2026}";
      };
      try {
        var _process$binding = process.binding("util"), getPromiseDetails = _process$binding.getPromiseDetails, kPending = _process$binding.kPending, kRejected = _process$binding.kRejected;
        if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
          getPromiseValue = function getPromiseValue2(value, options) {
            var _getPromiseDetails = getPromiseDetails(value), _getPromiseDetails2 = _slicedToArray(_getPromiseDetails, 2), state = _getPromiseDetails2[0], innerValue = _getPromiseDetails2[1];
            if (state === kPending) {
              return "Promise{<pending>}";
            }
            return "Promise".concat(state === kRejected ? "!" : "", "{").concat(options.inspect(innerValue, options), "}");
          };
        }
      } catch (notNode) {
      }
      var inspectPromise = getPromiseValue;
      function inspectObject(object2, options) {
        var properties = Object.getOwnPropertyNames(object2);
        var symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object2) : [];
        if (properties.length === 0 && symbols.length === 0) {
          return "{}";
        }
        options.truncate -= 4;
        options.seen = options.seen || [];
        if (options.seen.indexOf(object2) >= 0) {
          return "[Circular]";
        }
        options.seen.push(object2);
        var propertyContents = inspectList(properties.map(function(key) {
          return [key, object2[key]];
        }), options, inspectProperty);
        var symbolContents = inspectList(symbols.map(function(key) {
          return [key, object2[key]];
        }), options, inspectProperty);
        options.seen.pop();
        var sep2 = "";
        if (propertyContents && symbolContents) {
          sep2 = ", ";
        }
        return "{ ".concat(propertyContents).concat(sep2).concat(symbolContents, " }");
      }
      var toStringTag = typeof Symbol !== "undefined" && Symbol.toStringTag ? Symbol.toStringTag : false;
      function inspectClass(value, options) {
        var name = "";
        if (toStringTag && toStringTag in value) {
          name = value[toStringTag];
        }
        name = name || getFuncName_1(value.constructor);
        if (!name || name === "_class") {
          name = "<Anonymous Class>";
        }
        options.truncate -= name.length;
        return "".concat(name).concat(inspectObject(value, options));
      }
      function inspectArguments(args, options) {
        if (args.length === 0)
          return "Arguments[]";
        options.truncate -= 13;
        return "Arguments[ ".concat(inspectList(args, options), " ]");
      }
      var errorKeys = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
      function inspectObject$1(error, options) {
        var properties = Object.getOwnPropertyNames(error).filter(function(key) {
          return errorKeys.indexOf(key) === -1;
        });
        var name = error.name;
        options.truncate -= name.length;
        var message = "";
        if (typeof error.message === "string") {
          message = truncate(error.message, options.truncate);
        } else {
          properties.unshift("message");
        }
        message = message ? ": ".concat(message) : "";
        options.truncate -= message.length + 5;
        var propertyContents = inspectList(properties.map(function(key) {
          return [key, error[key]];
        }), options, inspectProperty);
        return "".concat(name).concat(message).concat(propertyContents ? " { ".concat(propertyContents, " }") : "");
      }
      function inspectAttribute(_ref, options) {
        var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
        options.truncate -= 3;
        if (!value) {
          return "".concat(options.stylize(key, "yellow"));
        }
        return "".concat(options.stylize(key, "yellow"), "=").concat(options.stylize('"'.concat(value, '"'), "string"));
      }
      function inspectHTMLCollection(collection, options) {
        return inspectList(collection, options, inspectHTML, "\n");
      }
      function inspectHTML(element, options) {
        var properties = element.getAttributeNames();
        var name = element.tagName.toLowerCase();
        var head = options.stylize("<".concat(name), "special");
        var headClose = options.stylize(">", "special");
        var tail = options.stylize("</".concat(name, ">"), "special");
        options.truncate -= name.length * 2 + 5;
        var propertyContents = "";
        if (properties.length > 0) {
          propertyContents += " ";
          propertyContents += inspectList(properties.map(function(key) {
            return [key, element.getAttribute(key)];
          }), options, inspectAttribute, " ");
        }
        options.truncate -= propertyContents.length;
        var truncate2 = options.truncate;
        var children = inspectHTMLCollection(element.children, options);
        if (children && children.length > truncate2) {
          children = "".concat(truncator, "(").concat(element.children.length, ")");
        }
        return "".concat(head).concat(propertyContents).concat(headClose).concat(children).concat(tail);
      }
      var symbolsSupported = typeof Symbol === "function" && typeof Symbol.for === "function";
      var chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect";
      var nodeInspect = false;
      try {
        var nodeUtil = require("util");
        nodeInspect = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
      } catch (noNodeInspect) {
        nodeInspect = false;
      }
      var constructorMap = /* @__PURE__ */ new WeakMap();
      var stringTagMap = {};
      var baseTypesMap = {
        undefined: function undefined$1(value, options) {
          return options.stylize("undefined", "undefined");
        },
        null: function _null(value, options) {
          return options.stylize(null, "null");
        },
        boolean: function boolean(value, options) {
          return options.stylize(value, "boolean");
        },
        Boolean: function Boolean2(value, options) {
          return options.stylize(value, "boolean");
        },
        number: inspectNumber,
        Number: inspectNumber,
        bigint: inspectBigInt,
        BigInt: inspectBigInt,
        string: inspectString,
        String: inspectString,
        function: inspectFunction,
        Function: inspectFunction,
        symbol: inspectSymbol,
        Symbol: inspectSymbol,
        Array: inspectArray,
        Date: inspectDate,
        Map: inspectMap,
        Set: inspectSet,
        RegExp: inspectRegExp,
        Promise: inspectPromise,
        WeakSet: function WeakSet2(value, options) {
          return options.stylize("WeakSet{\u2026}", "special");
        },
        WeakMap: function WeakMap2(value, options) {
          return options.stylize("WeakMap{\u2026}", "special");
        },
        Arguments: inspectArguments,
        Int8Array: inspectTypedArray,
        Uint8Array: inspectTypedArray,
        Uint8ClampedArray: inspectTypedArray,
        Int16Array: inspectTypedArray,
        Uint16Array: inspectTypedArray,
        Int32Array: inspectTypedArray,
        Uint32Array: inspectTypedArray,
        Float32Array: inspectTypedArray,
        Float64Array: inspectTypedArray,
        Generator: function Generator() {
          return "";
        },
        DataView: function DataView2() {
          return "";
        },
        ArrayBuffer: function ArrayBuffer2() {
          return "";
        },
        Error: inspectObject$1,
        HTMLCollection: inspectHTMLCollection,
        NodeList: inspectHTMLCollection
      };
      var inspectCustom = function inspectCustom2(value, options, type2) {
        if (chaiInspect in value && typeof value[chaiInspect] === "function") {
          return value[chaiInspect](options);
        }
        if (nodeInspect && nodeInspect in value && typeof value[nodeInspect] === "function") {
          return value[nodeInspect](options.depth, options);
        }
        if ("inspect" in value && typeof value.inspect === "function") {
          return value.inspect(options.depth, options);
        }
        if ("constructor" in value && constructorMap.has(value.constructor)) {
          return constructorMap.get(value.constructor)(value, options);
        }
        if (stringTagMap[type2]) {
          return stringTagMap[type2](value, options);
        }
        return "";
      };
      var toString$1 = Object.prototype.toString;
      function inspect(value, options) {
        options = normaliseOptions(options);
        options.inspect = inspect;
        var _options = options, customInspect = _options.customInspect;
        var type2 = value === null ? "null" : _typeof2(value);
        if (type2 === "object") {
          type2 = toString$1.call(value).slice(8, -1);
        }
        if (baseTypesMap[type2]) {
          return baseTypesMap[type2](value, options);
        }
        if (customInspect && value) {
          var output = inspectCustom(value, options, type2);
          if (output) {
            if (typeof output === "string")
              return output;
            return inspect(output, options);
          }
        }
        var proto = value ? Object.getPrototypeOf(value) : false;
        if (proto === Object.prototype || proto === null) {
          return inspectObject(value, options);
        }
        if (value && typeof HTMLElement === "function" && value instanceof HTMLElement) {
          return inspectHTML(value, options);
        }
        if ("constructor" in value) {
          if (value.constructor !== Object) {
            return inspectClass(value, options);
          }
          return inspectObject(value, options);
        }
        if (value === Object(value)) {
          return inspectObject(value, options);
        }
        return options.stylize(String(value), type2);
      }
      function registerConstructor(constructor, inspector) {
        if (constructorMap.has(constructor)) {
          return false;
        }
        constructorMap.add(constructor, inspector);
        return true;
      }
      function registerStringTag(stringTag, inspector) {
        if (stringTag in stringTagMap) {
          return false;
        }
        stringTagMap[stringTag] = inspector;
        return true;
      }
      var custom2 = chaiInspect;
      exports2.custom = custom2;
      exports2.default = inspect;
      exports2.inspect = inspect;
      exports2.registerConstructor = registerConstructor;
      exports2.registerStringTag = registerStringTag;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/chai/lib/chai/config.js
var require_config = __commonJS({
  "node_modules/chai/lib/chai/config.js"(exports, module2) {
    module2.exports = {
      includeStack: false,
      showDiff: true,
      truncateThreshold: 40,
      useProxy: true,
      proxyExcludedKeys: ["then", "catch", "inspect", "toJSON"]
    };
  }
});

// node_modules/chai/lib/chai/utils/inspect.js
var require_inspect = __commonJS({
  "node_modules/chai/lib/chai/utils/inspect.js"(exports, module2) {
    var getName = require_get_func_name();
    var loupe = require_loupe();
    var config2 = require_config();
    module2.exports = inspect;
    function inspect(obj, showHidden, depth, colors) {
      var options = {
        colors,
        depth: typeof depth === "undefined" ? 2 : depth,
        showHidden,
        truncate: config2.truncateThreshold ? config2.truncateThreshold : Infinity
      };
      return loupe.inspect(obj, options);
    }
  }
});

// node_modules/chai/lib/chai/utils/objDisplay.js
var require_objDisplay = __commonJS({
  "node_modules/chai/lib/chai/utils/objDisplay.js"(exports, module2) {
    var inspect = require_inspect();
    var config2 = require_config();
    module2.exports = function objDisplay(obj) {
      var str = inspect(obj), type2 = Object.prototype.toString.call(obj);
      if (config2.truncateThreshold && str.length >= config2.truncateThreshold) {
        if (type2 === "[object Function]") {
          return !obj.name || obj.name === "" ? "[Function]" : "[Function: " + obj.name + "]";
        } else if (type2 === "[object Array]") {
          return "[ Array(" + obj.length + ") ]";
        } else if (type2 === "[object Object]") {
          var keys2 = Object.keys(obj), kstr = keys2.length > 2 ? keys2.splice(0, 2).join(", ") + ", ..." : keys2.join(", ");
          return "{ Object (" + kstr + ") }";
        } else {
          return str;
        }
      } else {
        return str;
      }
    };
  }
});

// node_modules/chai/lib/chai/utils/getMessage.js
var require_getMessage = __commonJS({
  "node_modules/chai/lib/chai/utils/getMessage.js"(exports, module2) {
    var flag = require_flag();
    var getActual = require_getActual();
    var objDisplay = require_objDisplay();
    module2.exports = function getMessage(obj, args) {
      var negate = flag(obj, "negate"), val = flag(obj, "object"), expected = args[3], actual = getActual(obj, args), msg = negate ? args[2] : args[1], flagMsg = flag(obj, "message");
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      msg = msg.replace(/#\{this\}/g, function() {
        return objDisplay(val);
      }).replace(/#\{act\}/g, function() {
        return objDisplay(actual);
      }).replace(/#\{exp\}/g, function() {
        return objDisplay(expected);
      });
      return flagMsg ? flagMsg + ": " + msg : msg;
    };
  }
});

// node_modules/chai/lib/chai/utils/transferFlags.js
var require_transferFlags = __commonJS({
  "node_modules/chai/lib/chai/utils/transferFlags.js"(exports, module2) {
    module2.exports = function transferFlags(assertion, object2, includeAll) {
      var flags = assertion.__flags || (assertion.__flags = /* @__PURE__ */ Object.create(null));
      if (!object2.__flags) {
        object2.__flags = /* @__PURE__ */ Object.create(null);
      }
      includeAll = arguments.length === 3 ? includeAll : true;
      for (var flag in flags) {
        if (includeAll || flag !== "object" && flag !== "ssfi" && flag !== "lockSsfi" && flag != "message") {
          object2.__flags[flag] = flags[flag];
        }
      }
    };
  }
});

// node_modules/deep-eql/index.js
var require_deep_eql = __commonJS({
  "node_modules/deep-eql/index.js"(exports, module2) {
    "use strict";
    var type2 = require_type_detect();
    function FakeMap() {
      this._key = "chai/deep-eql__" + Math.random() + Date.now();
    }
    FakeMap.prototype = {
      get: function getMap(key) {
        return key[this._key];
      },
      set: function setMap(key, value) {
        if (Object.isExtensible(key)) {
          Object.defineProperty(key, this._key, {
            value,
            configurable: true
          });
        }
      }
    };
    var MemoizeMap = typeof WeakMap === "function" ? WeakMap : FakeMap;
    function memoizeCompare(leftHandOperand, rightHandOperand, memoizeMap) {
      if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
        return null;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        var result = leftHandMap.get(rightHandOperand);
        if (typeof result === "boolean") {
          return result;
        }
      }
      return null;
    }
    function memoizeSet(leftHandOperand, rightHandOperand, memoizeMap, result) {
      if (!memoizeMap || isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
        return;
      }
      var leftHandMap = memoizeMap.get(leftHandOperand);
      if (leftHandMap) {
        leftHandMap.set(rightHandOperand, result);
      } else {
        leftHandMap = new MemoizeMap();
        leftHandMap.set(rightHandOperand, result);
        memoizeMap.set(leftHandOperand, leftHandMap);
      }
    }
    module2.exports = deepEqual;
    module2.exports.MemoizeMap = MemoizeMap;
    function deepEqual(leftHandOperand, rightHandOperand, options) {
      if (options && options.comparator) {
        return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
      }
      var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
      if (simpleResult !== null) {
        return simpleResult;
      }
      return extensiveDeepEqual(leftHandOperand, rightHandOperand, options);
    }
    function simpleEqual(leftHandOperand, rightHandOperand) {
      if (leftHandOperand === rightHandOperand) {
        return leftHandOperand !== 0 || 1 / leftHandOperand === 1 / rightHandOperand;
      }
      if (leftHandOperand !== leftHandOperand && rightHandOperand !== rightHandOperand) {
        return true;
      }
      if (isPrimitive(leftHandOperand) || isPrimitive(rightHandOperand)) {
        return false;
      }
      return null;
    }
    function extensiveDeepEqual(leftHandOperand, rightHandOperand, options) {
      options = options || {};
      options.memoize = options.memoize === false ? false : options.memoize || new MemoizeMap();
      var comparator2 = options && options.comparator;
      var memoizeResultLeft = memoizeCompare(leftHandOperand, rightHandOperand, options.memoize);
      if (memoizeResultLeft !== null) {
        return memoizeResultLeft;
      }
      var memoizeResultRight = memoizeCompare(rightHandOperand, leftHandOperand, options.memoize);
      if (memoizeResultRight !== null) {
        return memoizeResultRight;
      }
      if (comparator2) {
        var comparatorResult = comparator2(leftHandOperand, rightHandOperand);
        if (comparatorResult === false || comparatorResult === true) {
          memoizeSet(leftHandOperand, rightHandOperand, options.memoize, comparatorResult);
          return comparatorResult;
        }
        var simpleResult = simpleEqual(leftHandOperand, rightHandOperand);
        if (simpleResult !== null) {
          return simpleResult;
        }
      }
      var leftHandType = type2(leftHandOperand);
      if (leftHandType !== type2(rightHandOperand)) {
        memoizeSet(leftHandOperand, rightHandOperand, options.memoize, false);
        return false;
      }
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, true);
      var result = extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options);
      memoizeSet(leftHandOperand, rightHandOperand, options.memoize, result);
      return result;
    }
    function extensiveDeepEqualByType(leftHandOperand, rightHandOperand, leftHandType, options) {
      switch (leftHandType) {
        case "String":
        case "Number":
        case "Boolean":
        case "Date":
          return deepEqual(leftHandOperand.valueOf(), rightHandOperand.valueOf());
        case "Promise":
        case "Symbol":
        case "function":
        case "WeakMap":
        case "WeakSet":
        case "Error":
          return leftHandOperand === rightHandOperand;
        case "Arguments":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "Array":
          return iterableEqual(leftHandOperand, rightHandOperand, options);
        case "RegExp":
          return regexpEqual(leftHandOperand, rightHandOperand);
        case "Generator":
          return generatorEqual(leftHandOperand, rightHandOperand, options);
        case "DataView":
          return iterableEqual(new Uint8Array(leftHandOperand.buffer), new Uint8Array(rightHandOperand.buffer), options);
        case "ArrayBuffer":
          return iterableEqual(new Uint8Array(leftHandOperand), new Uint8Array(rightHandOperand), options);
        case "Set":
          return entriesEqual(leftHandOperand, rightHandOperand, options);
        case "Map":
          return entriesEqual(leftHandOperand, rightHandOperand, options);
        default:
          return objectEqual(leftHandOperand, rightHandOperand, options);
      }
    }
    function regexpEqual(leftHandOperand, rightHandOperand) {
      return leftHandOperand.toString() === rightHandOperand.toString();
    }
    function entriesEqual(leftHandOperand, rightHandOperand, options) {
      if (leftHandOperand.size !== rightHandOperand.size) {
        return false;
      }
      if (leftHandOperand.size === 0) {
        return true;
      }
      var leftHandItems = [];
      var rightHandItems = [];
      leftHandOperand.forEach(function gatherEntries(key, value) {
        leftHandItems.push([key, value]);
      });
      rightHandOperand.forEach(function gatherEntries(key, value) {
        rightHandItems.push([key, value]);
      });
      return iterableEqual(leftHandItems.sort(), rightHandItems.sort(), options);
    }
    function iterableEqual(leftHandOperand, rightHandOperand, options) {
      var length = leftHandOperand.length;
      if (length !== rightHandOperand.length) {
        return false;
      }
      if (length === 0) {
        return true;
      }
      var index = -1;
      while (++index < length) {
        if (deepEqual(leftHandOperand[index], rightHandOperand[index], options) === false) {
          return false;
        }
      }
      return true;
    }
    function generatorEqual(leftHandOperand, rightHandOperand, options) {
      return iterableEqual(getGeneratorEntries(leftHandOperand), getGeneratorEntries(rightHandOperand), options);
    }
    function hasIteratorFunction(target) {
      return typeof Symbol !== "undefined" && typeof target === "object" && typeof Symbol.iterator !== "undefined" && typeof target[Symbol.iterator] === "function";
    }
    function getIteratorEntries(target) {
      if (hasIteratorFunction(target)) {
        try {
          return getGeneratorEntries(target[Symbol.iterator]());
        } catch (iteratorError) {
          return [];
        }
      }
      return [];
    }
    function getGeneratorEntries(generator) {
      var generatorResult = generator.next();
      var accumulator = [generatorResult.value];
      while (generatorResult.done === false) {
        generatorResult = generator.next();
        accumulator.push(generatorResult.value);
      }
      return accumulator;
    }
    function getEnumerableKeys(target) {
      var keys2 = [];
      for (var key in target) {
        keys2.push(key);
      }
      return keys2;
    }
    function keysEqual(leftHandOperand, rightHandOperand, keys2, options) {
      var length = keys2.length;
      if (length === 0) {
        return true;
      }
      for (var i = 0; i < length; i += 1) {
        if (deepEqual(leftHandOperand[keys2[i]], rightHandOperand[keys2[i]], options) === false) {
          return false;
        }
      }
      return true;
    }
    function objectEqual(leftHandOperand, rightHandOperand, options) {
      var leftHandKeys = getEnumerableKeys(leftHandOperand);
      var rightHandKeys = getEnumerableKeys(rightHandOperand);
      if (leftHandKeys.length && leftHandKeys.length === rightHandKeys.length) {
        leftHandKeys.sort();
        rightHandKeys.sort();
        if (iterableEqual(leftHandKeys, rightHandKeys) === false) {
          return false;
        }
        return keysEqual(leftHandOperand, rightHandOperand, leftHandKeys, options);
      }
      var leftHandEntries = getIteratorEntries(leftHandOperand);
      var rightHandEntries = getIteratorEntries(rightHandOperand);
      if (leftHandEntries.length && leftHandEntries.length === rightHandEntries.length) {
        leftHandEntries.sort();
        rightHandEntries.sort();
        return iterableEqual(leftHandEntries, rightHandEntries, options);
      }
      if (leftHandKeys.length === 0 && leftHandEntries.length === 0 && rightHandKeys.length === 0 && rightHandEntries.length === 0) {
        return true;
      }
      return false;
    }
    function isPrimitive(value) {
      return value === null || typeof value !== "object";
    }
  }
});

// node_modules/chai/lib/chai/utils/isProxyEnabled.js
var require_isProxyEnabled = __commonJS({
  "node_modules/chai/lib/chai/utils/isProxyEnabled.js"(exports, module2) {
    var config2 = require_config();
    module2.exports = function isProxyEnabled() {
      return config2.useProxy && typeof Proxy !== "undefined" && typeof Reflect !== "undefined";
    };
  }
});

// node_modules/chai/lib/chai/utils/addProperty.js
var require_addProperty = __commonJS({
  "node_modules/chai/lib/chai/utils/addProperty.js"(exports, module2) {
    var chai3 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module2.exports = function addProperty(ctx, name, getter) {
      getter = getter === void 0 ? function() {
      } : getter;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function propertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", propertyGetter);
            }
            var result = getter.call(this);
            if (result !== void 0)
              return result;
            var newAssertion = new chai3.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/addLengthGuard.js
var require_addLengthGuard = __commonJS({
  "node_modules/chai/lib/chai/utils/addLengthGuard.js"(exports, module2) {
    var fnLengthDesc = Object.getOwnPropertyDescriptor(function() {
    }, "length");
    module2.exports = function addLengthGuard(fn2, assertionName, isChainable) {
      if (!fnLengthDesc.configurable)
        return fn2;
      Object.defineProperty(fn2, "length", {
        get: function() {
          if (isChainable) {
            throw Error("Invalid Chai property: " + assertionName + '.length. Due to a compatibility issue, "length" cannot directly follow "' + assertionName + '". Use "' + assertionName + '.lengthOf" instead.');
          }
          throw Error("Invalid Chai property: " + assertionName + '.length. See docs for proper usage of "' + assertionName + '".');
        }
      });
      return fn2;
    };
  }
});

// node_modules/chai/lib/chai/utils/getProperties.js
var require_getProperties = __commonJS({
  "node_modules/chai/lib/chai/utils/getProperties.js"(exports, module2) {
    module2.exports = function getProperties(object2) {
      var result = Object.getOwnPropertyNames(object2);
      function addProperty(property) {
        if (result.indexOf(property) === -1) {
          result.push(property);
        }
      }
      var proto = Object.getPrototypeOf(object2);
      while (proto !== null) {
        Object.getOwnPropertyNames(proto).forEach(addProperty);
        proto = Object.getPrototypeOf(proto);
      }
      return result;
    };
  }
});

// node_modules/chai/lib/chai/utils/proxify.js
var require_proxify = __commonJS({
  "node_modules/chai/lib/chai/utils/proxify.js"(exports, module2) {
    var config2 = require_config();
    var flag = require_flag();
    var getProperties = require_getProperties();
    var isProxyEnabled = require_isProxyEnabled();
    var builtins = ["__flags", "__methods", "_obj", "assert"];
    module2.exports = function proxify(obj, nonChainableMethodName) {
      if (!isProxyEnabled())
        return obj;
      return new Proxy(obj, {
        get: function proxyGetter(target, property) {
          if (typeof property === "string" && config2.proxyExcludedKeys.indexOf(property) === -1 && !Reflect.has(target, property)) {
            if (nonChainableMethodName) {
              throw Error("Invalid Chai property: " + nonChainableMethodName + "." + property + '. See docs for proper usage of "' + nonChainableMethodName + '".');
            }
            var suggestion = null;
            var suggestionDistance = 4;
            getProperties(target).forEach(function(prop) {
              if (!Object.prototype.hasOwnProperty(prop) && builtins.indexOf(prop) === -1) {
                var dist = stringDistanceCapped(
                  property,
                  prop,
                  suggestionDistance
                );
                if (dist < suggestionDistance) {
                  suggestion = prop;
                  suggestionDistance = dist;
                }
              }
            });
            if (suggestion !== null) {
              throw Error("Invalid Chai property: " + property + '. Did you mean "' + suggestion + '"?');
            } else {
              throw Error("Invalid Chai property: " + property);
            }
          }
          if (builtins.indexOf(property) === -1 && !flag(target, "lockSsfi")) {
            flag(target, "ssfi", proxyGetter);
          }
          return Reflect.get(target, property);
        }
      });
    };
    function stringDistanceCapped(strA, strB, cap) {
      if (Math.abs(strA.length - strB.length) >= cap) {
        return cap;
      }
      var memo = [];
      for (var i = 0; i <= strA.length; i++) {
        memo[i] = Array(strB.length + 1).fill(0);
        memo[i][0] = i;
      }
      for (var j = 0; j < strB.length; j++) {
        memo[0][j] = j;
      }
      for (var i = 1; i <= strA.length; i++) {
        var ch = strA.charCodeAt(i - 1);
        for (var j = 1; j <= strB.length; j++) {
          if (Math.abs(i - j) >= cap) {
            memo[i][j] = cap;
            continue;
          }
          memo[i][j] = Math.min(
            memo[i - 1][j] + 1,
            memo[i][j - 1] + 1,
            memo[i - 1][j - 1] + (ch === strB.charCodeAt(j - 1) ? 0 : 1)
          );
        }
      }
      return memo[strA.length][strB.length];
    }
  }
});

// node_modules/chai/lib/chai/utils/addMethod.js
var require_addMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/addMethod.js"(exports, module2) {
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module2.exports = function addMethod(ctx, name, method) {
      var methodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", methodWrapper);
        }
        var result = method.apply(this, arguments);
        if (result !== void 0)
          return result;
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(methodWrapper, name, false);
      ctx[name] = proxify(methodWrapper, name);
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteProperty.js
var require_overwriteProperty = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteProperty.js"(exports, module2) {
    var chai3 = require_chai();
    var flag = require_flag();
    var isProxyEnabled = require_isProxyEnabled();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteProperty(ctx, name, getter) {
      var _get = Object.getOwnPropertyDescriptor(ctx, name), _super = function() {
      };
      if (_get && "function" === typeof _get.get)
        _super = _get.get;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function overwritingPropertyGetter() {
            if (!isProxyEnabled() && !flag(this, "lockSsfi")) {
              flag(this, "ssfi", overwritingPropertyGetter);
            }
            var origLockSsfi = flag(this, "lockSsfi");
            flag(this, "lockSsfi", true);
            var result = getter(_super).call(this);
            flag(this, "lockSsfi", origLockSsfi);
            if (result !== void 0) {
              return result;
            }
            var newAssertion = new chai3.Assertion();
            transferFlags(this, newAssertion);
            return newAssertion;
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteMethod.js
var require_overwriteMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteMethod.js"(exports, module2) {
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteMethod(ctx, name, method) {
      var _method = ctx[name], _super = function() {
        throw new Error(name + " is not a function");
      };
      if (_method && "function" === typeof _method)
        _super = _method;
      var overwritingMethodWrapper = function() {
        if (!flag(this, "lockSsfi")) {
          flag(this, "ssfi", overwritingMethodWrapper);
        }
        var origLockSsfi = flag(this, "lockSsfi");
        flag(this, "lockSsfi", true);
        var result = method(_super).apply(this, arguments);
        flag(this, "lockSsfi", origLockSsfi);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      addLengthGuard(overwritingMethodWrapper, name, false);
      ctx[name] = proxify(overwritingMethodWrapper, name);
    };
  }
});

// node_modules/chai/lib/chai/utils/addChainableMethod.js
var require_addChainableMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/addChainableMethod.js"(exports, module2) {
    var addLengthGuard = require_addLengthGuard();
    var chai3 = require_chai();
    var flag = require_flag();
    var proxify = require_proxify();
    var transferFlags = require_transferFlags();
    var canSetPrototype = typeof Object.setPrototypeOf === "function";
    var testFn = function() {
    };
    var excludeNames = Object.getOwnPropertyNames(testFn).filter(function(name) {
      var propDesc = Object.getOwnPropertyDescriptor(testFn, name);
      if (typeof propDesc !== "object")
        return true;
      return !propDesc.configurable;
    });
    var call2 = Function.prototype.call;
    var apply = Function.prototype.apply;
    module2.exports = function addChainableMethod(ctx, name, method, chainingBehavior) {
      if (typeof chainingBehavior !== "function") {
        chainingBehavior = function() {
        };
      }
      var chainableBehavior = {
        method,
        chainingBehavior
      };
      if (!ctx.__methods) {
        ctx.__methods = {};
      }
      ctx.__methods[name] = chainableBehavior;
      Object.defineProperty(
        ctx,
        name,
        {
          get: function chainableMethodGetter() {
            chainableBehavior.chainingBehavior.call(this);
            var chainableMethodWrapper = function() {
              if (!flag(this, "lockSsfi")) {
                flag(this, "ssfi", chainableMethodWrapper);
              }
              var result = chainableBehavior.method.apply(this, arguments);
              if (result !== void 0) {
                return result;
              }
              var newAssertion = new chai3.Assertion();
              transferFlags(this, newAssertion);
              return newAssertion;
            };
            addLengthGuard(chainableMethodWrapper, name, true);
            if (canSetPrototype) {
              var prototype = Object.create(this);
              prototype.call = call2;
              prototype.apply = apply;
              Object.setPrototypeOf(chainableMethodWrapper, prototype);
            } else {
              var asserterNames = Object.getOwnPropertyNames(ctx);
              asserterNames.forEach(function(asserterName) {
                if (excludeNames.indexOf(asserterName) !== -1) {
                  return;
                }
                var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                Object.defineProperty(chainableMethodWrapper, asserterName, pd);
              });
            }
            transferFlags(this, chainableMethodWrapper);
            return proxify(chainableMethodWrapper);
          },
          configurable: true
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/utils/overwriteChainableMethod.js
var require_overwriteChainableMethod = __commonJS({
  "node_modules/chai/lib/chai/utils/overwriteChainableMethod.js"(exports, module2) {
    var chai3 = require_chai();
    var transferFlags = require_transferFlags();
    module2.exports = function overwriteChainableMethod(ctx, name, method, chainingBehavior) {
      var chainableBehavior = ctx.__methods[name];
      var _chainingBehavior = chainableBehavior.chainingBehavior;
      chainableBehavior.chainingBehavior = function overwritingChainableMethodGetter() {
        var result = chainingBehavior(_chainingBehavior).call(this);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
      var _method = chainableBehavior.method;
      chainableBehavior.method = function overwritingChainableMethodWrapper() {
        var result = method(_method).apply(this, arguments);
        if (result !== void 0) {
          return result;
        }
        var newAssertion = new chai3.Assertion();
        transferFlags(this, newAssertion);
        return newAssertion;
      };
    };
  }
});

// node_modules/chai/lib/chai/utils/compareByInspect.js
var require_compareByInspect = __commonJS({
  "node_modules/chai/lib/chai/utils/compareByInspect.js"(exports, module2) {
    var inspect = require_inspect();
    module2.exports = function compareByInspect(a, b) {
      return inspect(a) < inspect(b) ? -1 : 1;
    };
  }
});

// node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js
var require_getOwnEnumerablePropertySymbols = __commonJS({
  "node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js"(exports, module2) {
    module2.exports = function getOwnEnumerablePropertySymbols(obj) {
      if (typeof Object.getOwnPropertySymbols !== "function")
        return [];
      return Object.getOwnPropertySymbols(obj).filter(function(sym) {
        return Object.getOwnPropertyDescriptor(obj, sym).enumerable;
      });
    };
  }
});

// node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js
var require_getOwnEnumerableProperties = __commonJS({
  "node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js"(exports, module2) {
    var getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    module2.exports = function getOwnEnumerableProperties(obj) {
      return Object.keys(obj).concat(getOwnEnumerablePropertySymbols(obj));
    };
  }
});

// node_modules/check-error/index.js
var require_check_error = __commonJS({
  "node_modules/check-error/index.js"(exports, module2) {
    "use strict";
    function compatibleInstance(thrown, errorLike) {
      return errorLike instanceof Error && thrown === errorLike;
    }
    function compatibleConstructor(thrown, errorLike) {
      if (errorLike instanceof Error) {
        return thrown.constructor === errorLike.constructor || thrown instanceof errorLike.constructor;
      } else if (errorLike.prototype instanceof Error || errorLike === Error) {
        return thrown.constructor === errorLike || thrown instanceof errorLike;
      }
      return false;
    }
    function compatibleMessage(thrown, errMatcher) {
      var comparisonString = typeof thrown === "string" ? thrown : thrown.message;
      if (errMatcher instanceof RegExp) {
        return errMatcher.test(comparisonString);
      } else if (typeof errMatcher === "string") {
        return comparisonString.indexOf(errMatcher) !== -1;
      }
      return false;
    }
    var functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\(\/]+)/;
    function getFunctionName(constructorFn) {
      var name = "";
      if (typeof constructorFn.name === "undefined") {
        var match = String(constructorFn).match(functionNameMatch);
        if (match) {
          name = match[1];
        }
      } else {
        name = constructorFn.name;
      }
      return name;
    }
    function getConstructorName2(errorLike) {
      var constructorName = errorLike;
      if (errorLike instanceof Error) {
        constructorName = getFunctionName(errorLike.constructor);
      } else if (typeof errorLike === "function") {
        constructorName = getFunctionName(errorLike).trim() || getFunctionName(new errorLike());
      }
      return constructorName;
    }
    function getMessage(errorLike) {
      var msg = "";
      if (errorLike && errorLike.message) {
        msg = errorLike.message;
      } else if (typeof errorLike === "string") {
        msg = errorLike;
      }
      return msg;
    }
    module2.exports = {
      compatibleInstance,
      compatibleConstructor,
      compatibleMessage,
      getMessage,
      getConstructorName: getConstructorName2
    };
  }
});

// node_modules/chai/lib/chai/utils/isNaN.js
var require_isNaN = __commonJS({
  "node_modules/chai/lib/chai/utils/isNaN.js"(exports, module2) {
    function isNaN2(value) {
      return value !== value;
    }
    module2.exports = Number.isNaN || isNaN2;
  }
});

// node_modules/chai/lib/chai/utils/getOperator.js
var require_getOperator = __commonJS({
  "node_modules/chai/lib/chai/utils/getOperator.js"(exports, module2) {
    var type2 = require_type_detect();
    var flag = require_flag();
    function isObjectType(obj) {
      var objectType2 = type2(obj);
      var objectTypes = ["Array", "Object", "function"];
      return objectTypes.indexOf(objectType2) !== -1;
    }
    module2.exports = function getOperator(obj, args) {
      var operator = flag(obj, "operator");
      var negate = flag(obj, "negate");
      var expected = args[3];
      var msg = negate ? args[2] : args[1];
      if (operator) {
        return operator;
      }
      if (typeof msg === "function")
        msg = msg();
      msg = msg || "";
      if (!msg) {
        return void 0;
      }
      if (/\shave\s/.test(msg)) {
        return void 0;
      }
      var isObject3 = isObjectType(expected);
      if (/\snot\s/.test(msg)) {
        return isObject3 ? "notDeepStrictEqual" : "notStrictEqual";
      }
      return isObject3 ? "deepStrictEqual" : "strictEqual";
    };
  }
});

// node_modules/chai/lib/chai/utils/index.js
var require_utils = __commonJS({
  "node_modules/chai/lib/chai/utils/index.js"(exports) {
    var pathval = require_pathval();
    exports.test = require_test();
    exports.type = require_type_detect();
    exports.expectTypes = require_expectTypes();
    exports.getMessage = require_getMessage();
    exports.getActual = require_getActual();
    exports.inspect = require_inspect();
    exports.objDisplay = require_objDisplay();
    exports.flag = require_flag();
    exports.transferFlags = require_transferFlags();
    exports.eql = require_deep_eql();
    exports.getPathInfo = pathval.getPathInfo;
    exports.hasProperty = pathval.hasProperty;
    exports.getName = require_get_func_name();
    exports.addProperty = require_addProperty();
    exports.addMethod = require_addMethod();
    exports.overwriteProperty = require_overwriteProperty();
    exports.overwriteMethod = require_overwriteMethod();
    exports.addChainableMethod = require_addChainableMethod();
    exports.overwriteChainableMethod = require_overwriteChainableMethod();
    exports.compareByInspect = require_compareByInspect();
    exports.getOwnEnumerablePropertySymbols = require_getOwnEnumerablePropertySymbols();
    exports.getOwnEnumerableProperties = require_getOwnEnumerableProperties();
    exports.checkError = require_check_error();
    exports.proxify = require_proxify();
    exports.addLengthGuard = require_addLengthGuard();
    exports.isProxyEnabled = require_isProxyEnabled();
    exports.isNaN = require_isNaN();
    exports.getOperator = require_getOperator();
  }
});

// node_modules/chai/lib/chai/assertion.js
var require_assertion = __commonJS({
  "node_modules/chai/lib/chai/assertion.js"(exports, module2) {
    var config2 = require_config();
    module2.exports = function(_chai, util5) {
      var AssertionError2 = _chai.AssertionError, flag = util5.flag;
      _chai.Assertion = Assertion2;
      function Assertion2(obj, msg, ssfi, lockSsfi) {
        flag(this, "ssfi", ssfi || Assertion2);
        flag(this, "lockSsfi", lockSsfi);
        flag(this, "object", obj);
        flag(this, "message", msg);
        return util5.proxify(this);
      }
      Object.defineProperty(Assertion2, "includeStack", {
        get: function() {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          return config2.includeStack;
        },
        set: function(value) {
          console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead.");
          config2.includeStack = value;
        }
      });
      Object.defineProperty(Assertion2, "showDiff", {
        get: function() {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          return config2.showDiff;
        },
        set: function(value) {
          console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead.");
          config2.showDiff = value;
        }
      });
      Assertion2.addProperty = function(name, fn2) {
        util5.addProperty(this.prototype, name, fn2);
      };
      Assertion2.addMethod = function(name, fn2) {
        util5.addMethod(this.prototype, name, fn2);
      };
      Assertion2.addChainableMethod = function(name, fn2, chainingBehavior) {
        util5.addChainableMethod(this.prototype, name, fn2, chainingBehavior);
      };
      Assertion2.overwriteProperty = function(name, fn2) {
        util5.overwriteProperty(this.prototype, name, fn2);
      };
      Assertion2.overwriteMethod = function(name, fn2) {
        util5.overwriteMethod(this.prototype, name, fn2);
      };
      Assertion2.overwriteChainableMethod = function(name, fn2, chainingBehavior) {
        util5.overwriteChainableMethod(this.prototype, name, fn2, chainingBehavior);
      };
      Assertion2.prototype.assert = function(expr, msg, negateMsg, expected, _actual, showDiff) {
        var ok = util5.test(this, arguments);
        if (false !== showDiff)
          showDiff = true;
        if (void 0 === expected && void 0 === _actual)
          showDiff = false;
        if (true !== config2.showDiff)
          showDiff = false;
        if (!ok) {
          msg = util5.getMessage(this, arguments);
          var actual = util5.getActual(this, arguments);
          var assertionErrorObjectProperties = {
            actual,
            expected,
            showDiff
          };
          var operator = util5.getOperator(this, arguments);
          if (operator) {
            assertionErrorObjectProperties.operator = operator;
          }
          throw new AssertionError2(
            msg,
            assertionErrorObjectProperties,
            config2.includeStack ? this.assert : flag(this, "ssfi")
          );
        }
      };
      Object.defineProperty(
        Assertion2.prototype,
        "_obj",
        {
          get: function() {
            return flag(this, "object");
          },
          set: function(val) {
            flag(this, "object", val);
          }
        }
      );
    };
  }
});

// node_modules/chai/lib/chai/core/assertions.js
var require_assertions = __commonJS({
  "node_modules/chai/lib/chai/core/assertions.js"(exports, module2) {
    module2.exports = function(chai3, _) {
      var Assertion2 = chai3.Assertion, AssertionError2 = chai3.AssertionError, flag = _.flag;
      [
        "to",
        "be",
        "been",
        "is",
        "and",
        "has",
        "have",
        "with",
        "that",
        "which",
        "at",
        "of",
        "same",
        "but",
        "does",
        "still",
        "also"
      ].forEach(function(chain) {
        Assertion2.addProperty(chain);
      });
      Assertion2.addProperty("not", function() {
        flag(this, "negate", true);
      });
      Assertion2.addProperty("deep", function() {
        flag(this, "deep", true);
      });
      Assertion2.addProperty("nested", function() {
        flag(this, "nested", true);
      });
      Assertion2.addProperty("own", function() {
        flag(this, "own", true);
      });
      Assertion2.addProperty("ordered", function() {
        flag(this, "ordered", true);
      });
      Assertion2.addProperty("any", function() {
        flag(this, "any", true);
        flag(this, "all", false);
      });
      Assertion2.addProperty("all", function() {
        flag(this, "all", true);
        flag(this, "any", false);
      });
      function an(type2, msg) {
        if (msg)
          flag(this, "message", msg);
        type2 = type2.toLowerCase();
        var obj = flag(this, "object"), article = ~["a", "e", "i", "o", "u"].indexOf(type2.charAt(0)) ? "an " : "a ";
        this.assert(
          type2 === _.type(obj).toLowerCase(),
          "expected #{this} to be " + article + type2,
          "expected #{this} not to be " + article + type2
        );
      }
      Assertion2.addChainableMethod("an", an);
      Assertion2.addChainableMethod("a", an);
      function SameValueZero(a, b) {
        return _.isNaN(a) && _.isNaN(b) || a === b;
      }
      function includeChainingBehavior() {
        flag(this, "contains", true);
      }
      function include(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), negate = flag(this, "negate"), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), descriptor = isDeep ? "deep " : "";
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var included = false;
        switch (objType) {
          case "string":
            included = obj.indexOf(val) !== -1;
            break;
          case "weakset":
            if (isDeep) {
              throw new AssertionError2(
                flagMsg + "unable to use .deep.include with WeakSet",
                void 0,
                ssfi
              );
            }
            included = obj.has(val);
            break;
          case "map":
            var isEql = isDeep ? _.eql : SameValueZero;
            obj.forEach(function(item) {
              included = included || isEql(item, val);
            });
            break;
          case "set":
            if (isDeep) {
              obj.forEach(function(item) {
                included = included || _.eql(item, val);
              });
            } else {
              included = obj.has(val);
            }
            break;
          case "array":
            if (isDeep) {
              included = obj.some(function(item) {
                return _.eql(item, val);
              });
            } else {
              included = obj.indexOf(val) !== -1;
            }
            break;
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + "the given combination of arguments (" + objType + " and " + _.type(val).toLowerCase() + ") is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a " + _.type(val).toLowerCase(),
                void 0,
                ssfi
              );
            }
            var props = Object.keys(val), firstErr = null, numErrs = 0;
            props.forEach(function(prop) {
              var propAssertion = new Assertion2(obj);
              _.transferFlags(this, propAssertion, true);
              flag(propAssertion, "lockSsfi", true);
              if (!negate || props.length === 1) {
                propAssertion.property(prop, val[prop]);
                return;
              }
              try {
                propAssertion.property(prop, val[prop]);
              } catch (err) {
                if (!_.checkError.compatibleConstructor(err, AssertionError2)) {
                  throw err;
                }
                if (firstErr === null)
                  firstErr = err;
                numErrs++;
              }
            }, this);
            if (negate && props.length > 1 && numErrs === props.length) {
              throw firstErr;
            }
            return;
        }
        this.assert(
          included,
          "expected #{this} to " + descriptor + "include " + _.inspect(val),
          "expected #{this} to not " + descriptor + "include " + _.inspect(val)
        );
      }
      Assertion2.addChainableMethod("include", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contain", include, includeChainingBehavior);
      Assertion2.addChainableMethod("contains", include, includeChainingBehavior);
      Assertion2.addChainableMethod("includes", include, includeChainingBehavior);
      Assertion2.addProperty("ok", function() {
        this.assert(
          flag(this, "object"),
          "expected #{this} to be truthy",
          "expected #{this} to be falsy"
        );
      });
      Assertion2.addProperty("true", function() {
        this.assert(
          true === flag(this, "object"),
          "expected #{this} to be true",
          "expected #{this} to be false",
          flag(this, "negate") ? false : true
        );
      });
      Assertion2.addProperty("false", function() {
        this.assert(
          false === flag(this, "object"),
          "expected #{this} to be false",
          "expected #{this} to be true",
          flag(this, "negate") ? true : false
        );
      });
      Assertion2.addProperty("null", function() {
        this.assert(
          null === flag(this, "object"),
          "expected #{this} to be null",
          "expected #{this} not to be null"
        );
      });
      Assertion2.addProperty("undefined", function() {
        this.assert(
          void 0 === flag(this, "object"),
          "expected #{this} to be undefined",
          "expected #{this} not to be undefined"
        );
      });
      Assertion2.addProperty("NaN", function() {
        this.assert(
          _.isNaN(flag(this, "object")),
          "expected #{this} to be NaN",
          "expected #{this} not to be NaN"
        );
      });
      function assertExist() {
        var val = flag(this, "object");
        this.assert(
          val !== null && val !== void 0,
          "expected #{this} to exist",
          "expected #{this} to not exist"
        );
      }
      Assertion2.addProperty("exist", assertExist);
      Assertion2.addProperty("exists", assertExist);
      Assertion2.addProperty("empty", function() {
        var val = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), itemsCount;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        switch (_.type(val).toLowerCase()) {
          case "array":
          case "string":
            itemsCount = val.length;
            break;
          case "map":
          case "set":
            itemsCount = val.size;
            break;
          case "weakmap":
          case "weakset":
            throw new AssertionError2(
              flagMsg + ".empty was passed a weak collection",
              void 0,
              ssfi
            );
          case "function":
            var msg = flagMsg + ".empty was passed a function " + _.getName(val);
            throw new AssertionError2(msg.trim(), void 0, ssfi);
          default:
            if (val !== Object(val)) {
              throw new AssertionError2(
                flagMsg + ".empty was passed non-string primitive " + _.inspect(val),
                void 0,
                ssfi
              );
            }
            itemsCount = Object.keys(val).length;
        }
        this.assert(
          0 === itemsCount,
          "expected #{this} to be empty",
          "expected #{this} not to be empty"
        );
      });
      function checkArguments() {
        var obj = flag(this, "object"), type2 = _.type(obj);
        this.assert(
          "Arguments" === type2,
          "expected #{this} to be arguments but got " + type2,
          "expected #{this} to not be arguments"
        );
      }
      Assertion2.addProperty("arguments", checkArguments);
      Assertion2.addProperty("Arguments", checkArguments);
      function assertEqual(val, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        if (flag(this, "deep")) {
          var prevLockSsfi = flag(this, "lockSsfi");
          flag(this, "lockSsfi", true);
          this.eql(val);
          flag(this, "lockSsfi", prevLockSsfi);
        } else {
          this.assert(
            val === obj,
            "expected #{this} to equal #{exp}",
            "expected #{this} to not equal #{exp}",
            val,
            this._obj,
            true
          );
        }
      }
      Assertion2.addMethod("equal", assertEqual);
      Assertion2.addMethod("equals", assertEqual);
      Assertion2.addMethod("eq", assertEqual);
      function assertEql(obj, msg) {
        if (msg)
          flag(this, "message", msg);
        this.assert(
          _.eql(obj, flag(this, "object")),
          "expected #{this} to deeply equal #{exp}",
          "expected #{this} to not deeply equal #{exp}",
          obj,
          this._obj,
          true
        );
      }
      Assertion2.addMethod("eql", assertEql);
      Assertion2.addMethod("eqls", assertEql);
      function assertAbove(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to above must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to above must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount > n2,
            "expected #{this} to have a " + descriptor + " above #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " above #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj > n2,
            "expected #{this} to be above #{exp}",
            "expected #{this} to be at most #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("above", assertAbove);
      Assertion2.addMethod("gt", assertAbove);
      Assertion2.addMethod("greaterThan", assertAbove);
      function assertLeast(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to least must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to least must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= n2,
            "expected #{this} to have a " + descriptor + " at least #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " below #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj >= n2,
            "expected #{this} to be at least #{exp}",
            "expected #{this} to be below #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("least", assertLeast);
      Assertion2.addMethod("gte", assertLeast);
      Assertion2.addMethod("greaterThanOrEqual", assertLeast);
      function assertBelow(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to below must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to below must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount < n2,
            "expected #{this} to have a " + descriptor + " below #{exp} but got #{act}",
            "expected #{this} to not have a " + descriptor + " below #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj < n2,
            "expected #{this} to be below #{exp}",
            "expected #{this} to be at least #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("below", assertBelow);
      Assertion2.addMethod("lt", assertBelow);
      Assertion2.addMethod("lessThan", assertBelow);
      function assertMost(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), nType = _.type(n2).toLowerCase(), errorMessage, shouldThrow = true;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && nType !== "date")) {
          errorMessage = msgPrefix + "the argument to most must be a date";
        } else if (nType !== "number" && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the argument to most must be a number";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount <= n2,
            "expected #{this} to have a " + descriptor + " at most #{exp} but got #{act}",
            "expected #{this} to have a " + descriptor + " above #{exp}",
            n2,
            itemsCount
          );
        } else {
          this.assert(
            obj <= n2,
            "expected #{this} to be at most #{exp}",
            "expected #{this} to be above #{exp}",
            n2
          );
        }
      }
      Assertion2.addMethod("most", assertMost);
      Assertion2.addMethod("lte", assertMost);
      Assertion2.addMethod("lessThanOrEqual", assertMost);
      Assertion2.addMethod("within", function(start, finish, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), doLength = flag(this, "doLength"), flagMsg = flag(this, "message"), msgPrefix = flagMsg ? flagMsg + ": " : "", ssfi = flag(this, "ssfi"), objType = _.type(obj).toLowerCase(), startType = _.type(start).toLowerCase(), finishType = _.type(finish).toLowerCase(), errorMessage, shouldThrow = true, range = startType === "date" && finishType === "date" ? start.toISOString() + ".." + finish.toISOString() : start + ".." + finish;
        if (doLength && objType !== "map" && objType !== "set") {
          new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
        }
        if (!doLength && (objType === "date" && (startType !== "date" || finishType !== "date"))) {
          errorMessage = msgPrefix + "the arguments to within must be dates";
        } else if ((startType !== "number" || finishType !== "number") && (doLength || objType === "number")) {
          errorMessage = msgPrefix + "the arguments to within must be numbers";
        } else if (!doLength && (objType !== "date" && objType !== "number")) {
          var printObj = objType === "string" ? "'" + obj + "'" : obj;
          errorMessage = msgPrefix + "expected " + printObj + " to be a number or a date";
        } else {
          shouldThrow = false;
        }
        if (shouldThrow) {
          throw new AssertionError2(errorMessage, void 0, ssfi);
        }
        if (doLength) {
          var descriptor = "length", itemsCount;
          if (objType === "map" || objType === "set") {
            descriptor = "size";
            itemsCount = obj.size;
          } else {
            itemsCount = obj.length;
          }
          this.assert(
            itemsCount >= start && itemsCount <= finish,
            "expected #{this} to have a " + descriptor + " within " + range,
            "expected #{this} to not have a " + descriptor + " within " + range
          );
        } else {
          this.assert(
            obj >= start && obj <= finish,
            "expected #{this} to be within " + range,
            "expected #{this} to not be within " + range
          );
        }
      });
      function assertInstanceOf(constructor, msg) {
        if (msg)
          flag(this, "message", msg);
        var target = flag(this, "object");
        var ssfi = flag(this, "ssfi");
        var flagMsg = flag(this, "message");
        try {
          var isInstanceOf = target instanceof constructor;
        } catch (err) {
          if (err instanceof TypeError) {
            flagMsg = flagMsg ? flagMsg + ": " : "";
            throw new AssertionError2(
              flagMsg + "The instanceof assertion needs a constructor but " + _.type(constructor) + " was given.",
              void 0,
              ssfi
            );
          }
          throw err;
        }
        var name = _.getName(constructor);
        if (name === null) {
          name = "an unnamed constructor";
        }
        this.assert(
          isInstanceOf,
          "expected #{this} to be an instance of " + name,
          "expected #{this} to not be an instance of " + name
        );
      }
      ;
      Assertion2.addMethod("instanceof", assertInstanceOf);
      Assertion2.addMethod("instanceOf", assertInstanceOf);
      function assertProperty(name, val, msg) {
        if (msg)
          flag(this, "message", msg);
        var isNested = flag(this, "nested"), isOwn = flag(this, "own"), flagMsg = flag(this, "message"), obj = flag(this, "object"), ssfi = flag(this, "ssfi"), nameType = typeof name;
        flagMsg = flagMsg ? flagMsg + ": " : "";
        if (isNested) {
          if (nameType !== "string") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string when using nested syntax",
              void 0,
              ssfi
            );
          }
        } else {
          if (nameType !== "string" && nameType !== "number" && nameType !== "symbol") {
            throw new AssertionError2(
              flagMsg + "the argument to property must be a string, number, or symbol",
              void 0,
              ssfi
            );
          }
        }
        if (isNested && isOwn) {
          throw new AssertionError2(
            flagMsg + 'The "nested" and "own" flags cannot be combined.',
            void 0,
            ssfi
          );
        }
        if (obj === null || obj === void 0) {
          throw new AssertionError2(
            flagMsg + "Target cannot be null or undefined.",
            void 0,
            ssfi
          );
        }
        var isDeep = flag(this, "deep"), negate = flag(this, "negate"), pathInfo = isNested ? _.getPathInfo(obj, name) : null, value = isNested ? pathInfo.value : obj[name];
        var descriptor = "";
        if (isDeep)
          descriptor += "deep ";
        if (isOwn)
          descriptor += "own ";
        if (isNested)
          descriptor += "nested ";
        descriptor += "property ";
        var hasProperty;
        if (isOwn)
          hasProperty = Object.prototype.hasOwnProperty.call(obj, name);
        else if (isNested)
          hasProperty = pathInfo.exists;
        else
          hasProperty = _.hasProperty(obj, name);
        if (!negate || arguments.length === 1) {
          this.assert(
            hasProperty,
            "expected #{this} to have " + descriptor + _.inspect(name),
            "expected #{this} to not have " + descriptor + _.inspect(name)
          );
        }
        if (arguments.length > 1) {
          this.assert(
            hasProperty && (isDeep ? _.eql(val, value) : val === value),
            "expected #{this} to have " + descriptor + _.inspect(name) + " of #{exp}, but got #{act}",
            "expected #{this} to not have " + descriptor + _.inspect(name) + " of #{act}",
            val,
            value
          );
        }
        flag(this, "object", value);
      }
      Assertion2.addMethod("property", assertProperty);
      function assertOwnProperty(name, value, msg) {
        flag(this, "own", true);
        assertProperty.apply(this, arguments);
      }
      Assertion2.addMethod("ownProperty", assertOwnProperty);
      Assertion2.addMethod("haveOwnProperty", assertOwnProperty);
      function assertOwnPropertyDescriptor(name, descriptor, msg) {
        if (typeof descriptor === "string") {
          msg = descriptor;
          descriptor = null;
        }
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
        if (actualDescriptor && descriptor) {
          this.assert(
            _.eql(descriptor, actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to match " + _.inspect(descriptor) + ", got " + _.inspect(actualDescriptor),
            "expected the own property descriptor for " + _.inspect(name) + " on #{this} to not match " + _.inspect(descriptor),
            descriptor,
            actualDescriptor,
            true
          );
        } else {
          this.assert(
            actualDescriptor,
            "expected #{this} to have an own property descriptor for " + _.inspect(name),
            "expected #{this} to not have an own property descriptor for " + _.inspect(name)
          );
        }
        flag(this, "object", actualDescriptor);
      }
      Assertion2.addMethod("ownPropertyDescriptor", assertOwnPropertyDescriptor);
      Assertion2.addMethod("haveOwnPropertyDescriptor", assertOwnPropertyDescriptor);
      function assertLengthChain() {
        flag(this, "doLength", true);
      }
      function assertLength(n2, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), objType = _.type(obj).toLowerCase(), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), descriptor = "length", itemsCount;
        switch (objType) {
          case "map":
          case "set":
            descriptor = "size";
            itemsCount = obj.size;
            break;
          default:
            new Assertion2(obj, flagMsg, ssfi, true).to.have.property("length");
            itemsCount = obj.length;
        }
        this.assert(
          itemsCount == n2,
          "expected #{this} to have a " + descriptor + " of #{exp} but got #{act}",
          "expected #{this} to not have a " + descriptor + " of #{act}",
          n2,
          itemsCount
        );
      }
      Assertion2.addChainableMethod("length", assertLength, assertLengthChain);
      Assertion2.addChainableMethod("lengthOf", assertLength, assertLengthChain);
      function assertMatch(re, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        this.assert(
          re.exec(obj),
          "expected #{this} to match " + re,
          "expected #{this} not to match " + re
        );
      }
      Assertion2.addMethod("match", assertMatch);
      Assertion2.addMethod("matches", assertMatch);
      Assertion2.addMethod("string", function(str, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("string");
        this.assert(
          ~obj.indexOf(str),
          "expected #{this} to contain " + _.inspect(str),
          "expected #{this} to not contain " + _.inspect(str)
        );
      });
      function assertKeys(keys2) {
        var obj = flag(this, "object"), objType = _.type(obj), keysType = _.type(keys2), ssfi = flag(this, "ssfi"), isDeep = flag(this, "deep"), str, deepStr = "", actual, ok = true, flagMsg = flag(this, "message");
        flagMsg = flagMsg ? flagMsg + ": " : "";
        var mixedArgsMsg = flagMsg + "when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments";
        if (objType === "Map" || objType === "Set") {
          deepStr = isDeep ? "deeply " : "";
          actual = [];
          obj.forEach(function(val, key) {
            actual.push(key);
          });
          if (keysType !== "Array") {
            keys2 = Array.prototype.slice.call(arguments);
          }
        } else {
          actual = _.getOwnEnumerableProperties(obj);
          switch (keysType) {
            case "Array":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              break;
            case "Object":
              if (arguments.length > 1) {
                throw new AssertionError2(mixedArgsMsg, void 0, ssfi);
              }
              keys2 = Object.keys(keys2);
              break;
            default:
              keys2 = Array.prototype.slice.call(arguments);
          }
          keys2 = keys2.map(function(val) {
            return typeof val === "symbol" ? val : String(val);
          });
        }
        if (!keys2.length) {
          throw new AssertionError2(flagMsg + "keys required", void 0, ssfi);
        }
        var len = keys2.length, any = flag(this, "any"), all = flag(this, "all"), expected = keys2;
        if (!any && !all) {
          all = true;
        }
        if (any) {
          ok = expected.some(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
        }
        if (all) {
          ok = expected.every(function(expectedKey) {
            return actual.some(function(actualKey) {
              if (isDeep) {
                return _.eql(expectedKey, actualKey);
              } else {
                return expectedKey === actualKey;
              }
            });
          });
          if (!flag(this, "contains")) {
            ok = ok && keys2.length == actual.length;
          }
        }
        if (len > 1) {
          keys2 = keys2.map(function(key) {
            return _.inspect(key);
          });
          var last = keys2.pop();
          if (all) {
            str = keys2.join(", ") + ", and " + last;
          }
          if (any) {
            str = keys2.join(", ") + ", or " + last;
          }
        } else {
          str = _.inspect(keys2[0]);
        }
        str = (len > 1 ? "keys " : "key ") + str;
        str = (flag(this, "contains") ? "contain " : "have ") + str;
        this.assert(
          ok,
          "expected #{this} to " + deepStr + str,
          "expected #{this} to not " + deepStr + str,
          expected.slice(0).sort(_.compareByInspect),
          actual.sort(_.compareByInspect),
          true
        );
      }
      Assertion2.addMethod("keys", assertKeys);
      Assertion2.addMethod("key", assertKeys);
      function assertThrows(errorLike, errMsgMatcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), ssfi = flag(this, "ssfi"), flagMsg = flag(this, "message"), negate = flag(this, "negate") || false;
        new Assertion2(obj, flagMsg, ssfi, true).is.a("function");
        if (errorLike instanceof RegExp || typeof errorLike === "string") {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var caughtErr;
        try {
          obj();
        } catch (err) {
          caughtErr = err;
        }
        var everyArgIsUndefined = errorLike === void 0 && errMsgMatcher === void 0;
        var everyArgIsDefined = Boolean(errorLike && errMsgMatcher);
        var errorLikeFail = false;
        var errMsgMatcherFail = false;
        if (everyArgIsUndefined || !everyArgIsUndefined && !negate) {
          var errorLikeString = "an error";
          if (errorLike instanceof Error) {
            errorLikeString = "#{exp}";
          } else if (errorLike) {
            errorLikeString = _.checkError.getConstructorName(errorLike);
          }
          this.assert(
            caughtErr,
            "expected #{this} to throw " + errorLikeString,
            "expected #{this} to not throw an error but #{act} was thrown",
            errorLike && errorLike.toString(),
            caughtErr instanceof Error ? caughtErr.toString() : typeof caughtErr === "string" ? caughtErr : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        if (errorLike && caughtErr) {
          if (errorLike instanceof Error) {
            var isCompatibleInstance = _.checkError.compatibleInstance(caughtErr, errorLike);
            if (isCompatibleInstance === negate) {
              if (everyArgIsDefined && negate) {
                errorLikeFail = true;
              } else {
                this.assert(
                  negate,
                  "expected #{this} to throw #{exp} but #{act} was thrown",
                  "expected #{this} to not throw #{exp}" + (caughtErr && !negate ? " but #{act} was thrown" : ""),
                  errorLike.toString(),
                  caughtErr.toString()
                );
              }
            }
          }
          var isCompatibleConstructor = _.checkError.compatibleConstructor(caughtErr, errorLike);
          if (isCompatibleConstructor === negate) {
            if (everyArgIsDefined && negate) {
              errorLikeFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw #{exp} but #{act} was thrown",
                "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
                errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
                caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
              );
            }
          }
        }
        if (caughtErr && errMsgMatcher !== void 0 && errMsgMatcher !== null) {
          var placeholder = "including";
          if (errMsgMatcher instanceof RegExp) {
            placeholder = "matching";
          }
          var isCompatibleMessage = _.checkError.compatibleMessage(caughtErr, errMsgMatcher);
          if (isCompatibleMessage === negate) {
            if (everyArgIsDefined && negate) {
              errMsgMatcherFail = true;
            } else {
              this.assert(
                negate,
                "expected #{this} to throw error " + placeholder + " #{exp} but got #{act}",
                "expected #{this} to throw error not " + placeholder + " #{exp}",
                errMsgMatcher,
                _.checkError.getMessage(caughtErr)
              );
            }
          }
        }
        if (errorLikeFail && errMsgMatcherFail) {
          this.assert(
            negate,
            "expected #{this} to throw #{exp} but #{act} was thrown",
            "expected #{this} to not throw #{exp}" + (caughtErr ? " but #{act} was thrown" : ""),
            errorLike instanceof Error ? errorLike.toString() : errorLike && _.checkError.getConstructorName(errorLike),
            caughtErr instanceof Error ? caughtErr.toString() : caughtErr && _.checkError.getConstructorName(caughtErr)
          );
        }
        flag(this, "object", caughtErr);
      }
      ;
      Assertion2.addMethod("throw", assertThrows);
      Assertion2.addMethod("throws", assertThrows);
      Assertion2.addMethod("Throw", assertThrows);
      function respondTo(method, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), itself = flag(this, "itself"), context = "function" === typeof obj && !itself ? obj.prototype[method] : obj[method];
        this.assert(
          "function" === typeof context,
          "expected #{this} to respond to " + _.inspect(method),
          "expected #{this} to not respond to " + _.inspect(method)
        );
      }
      Assertion2.addMethod("respondTo", respondTo);
      Assertion2.addMethod("respondsTo", respondTo);
      Assertion2.addProperty("itself", function() {
        flag(this, "itself", true);
      });
      function satisfy(matcher, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object");
        var result = matcher(obj);
        this.assert(
          result,
          "expected #{this} to satisfy " + _.objDisplay(matcher),
          "expected #{this} to not satisfy" + _.objDisplay(matcher),
          flag(this, "negate") ? false : true,
          result
        );
      }
      Assertion2.addMethod("satisfy", satisfy);
      Assertion2.addMethod("satisfies", satisfy);
      function closeTo(expected, delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).is.a("number");
        if (typeof expected !== "number" || typeof delta !== "number") {
          flagMsg = flagMsg ? flagMsg + ": " : "";
          var deltaMessage = delta === void 0 ? ", and a delta is required" : "";
          throw new AssertionError2(
            flagMsg + "the arguments to closeTo or approximately must be numbers" + deltaMessage,
            void 0,
            ssfi
          );
        }
        this.assert(
          Math.abs(obj - expected) <= delta,
          "expected #{this} to be close to " + expected + " +/- " + delta,
          "expected #{this} not to be close to " + expected + " +/- " + delta
        );
      }
      Assertion2.addMethod("closeTo", closeTo);
      Assertion2.addMethod("approximately", closeTo);
      function isSubsetOf(subset, superset, cmp, contains, ordered) {
        if (!contains) {
          if (subset.length !== superset.length)
            return false;
          superset = superset.slice();
        }
        return subset.every(function(elem, idx) {
          if (ordered)
            return cmp ? cmp(elem, superset[idx]) : elem === superset[idx];
          if (!cmp) {
            var matchIdx = superset.indexOf(elem);
            if (matchIdx === -1)
              return false;
            if (!contains)
              superset.splice(matchIdx, 1);
            return true;
          }
          return superset.some(function(elem2, matchIdx2) {
            if (!cmp(elem, elem2))
              return false;
            if (!contains)
              superset.splice(matchIdx2, 1);
            return true;
          });
        });
      }
      Assertion2.addMethod("members", function(subset, msg) {
        if (msg)
          flag(this, "message", msg);
        var obj = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(obj, flagMsg, ssfi, true).to.be.an("array");
        new Assertion2(subset, flagMsg, ssfi, true).to.be.an("array");
        var contains = flag(this, "contains");
        var ordered = flag(this, "ordered");
        var subject, failMsg, failNegateMsg;
        if (contains) {
          subject = ordered ? "an ordered superset" : "a superset";
          failMsg = "expected #{this} to be " + subject + " of #{exp}";
          failNegateMsg = "expected #{this} to not be " + subject + " of #{exp}";
        } else {
          subject = ordered ? "ordered members" : "members";
          failMsg = "expected #{this} to have the same " + subject + " as #{exp}";
          failNegateMsg = "expected #{this} to not have the same " + subject + " as #{exp}";
        }
        var cmp = flag(this, "deep") ? _.eql : void 0;
        this.assert(
          isSubsetOf(subset, obj, cmp, contains, ordered),
          failMsg,
          failNegateMsg,
          subset,
          obj,
          true
        );
      });
      function oneOf(list, msg) {
        if (msg)
          flag(this, "message", msg);
        var expected = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi"), contains = flag(this, "contains"), isDeep = flag(this, "deep");
        new Assertion2(list, flagMsg, ssfi, true).to.be.an("array");
        if (contains) {
          this.assert(
            list.some(function(possibility) {
              return expected.indexOf(possibility) > -1;
            }),
            "expected #{this} to contain one of #{exp}",
            "expected #{this} to not contain one of #{exp}",
            list,
            expected
          );
        } else {
          if (isDeep) {
            this.assert(
              list.some(function(possibility) {
                return _.eql(expected, possibility);
              }),
              "expected #{this} to deeply equal one of #{exp}",
              "expected #{this} to deeply equal one of #{exp}",
              list,
              expected
            );
          } else {
            this.assert(
              list.indexOf(expected) > -1,
              "expected #{this} to be one of #{exp}",
              "expected #{this} to not be one of #{exp}",
              list,
              expected
            );
          }
        }
      }
      Assertion2.addMethod("oneOf", oneOf);
      function assertChanges(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "change");
        flag(this, "realDelta", final !== initial);
        this.assert(
          initial !== final,
          "expected " + msgObj + " to change",
          "expected " + msgObj + " to not change"
        );
      }
      Assertion2.addMethod("change", assertChanges);
      Assertion2.addMethod("changes", assertChanges);
      function assertIncreases(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "increase");
        flag(this, "realDelta", final - initial);
        this.assert(
          final - initial > 0,
          "expected " + msgObj + " to increase",
          "expected " + msgObj + " to not increase"
        );
      }
      Assertion2.addMethod("increase", assertIncreases);
      Assertion2.addMethod("increases", assertIncreases);
      function assertDecreases(subject, prop, msg) {
        if (msg)
          flag(this, "message", msg);
        var fn2 = flag(this, "object"), flagMsg = flag(this, "message"), ssfi = flag(this, "ssfi");
        new Assertion2(fn2, flagMsg, ssfi, true).is.a("function");
        var initial;
        if (!prop) {
          new Assertion2(subject, flagMsg, ssfi, true).is.a("function");
          initial = subject();
        } else {
          new Assertion2(subject, flagMsg, ssfi, true).to.have.property(prop);
          initial = subject[prop];
        }
        new Assertion2(initial, flagMsg, ssfi, true).is.a("number");
        fn2();
        var final = prop === void 0 || prop === null ? subject() : subject[prop];
        var msgObj = prop === void 0 || prop === null ? initial : "." + prop;
        flag(this, "deltaMsgObj", msgObj);
        flag(this, "initialDeltaValue", initial);
        flag(this, "finalDeltaValue", final);
        flag(this, "deltaBehavior", "decrease");
        flag(this, "realDelta", initial - final);
        this.assert(
          final - initial < 0,
          "expected " + msgObj + " to decrease",
          "expected " + msgObj + " to not decrease"
        );
      }
      Assertion2.addMethod("decrease", assertDecreases);
      Assertion2.addMethod("decreases", assertDecreases);
      function assertDelta(delta, msg) {
        if (msg)
          flag(this, "message", msg);
        var msgObj = flag(this, "deltaMsgObj");
        var initial = flag(this, "initialDeltaValue");
        var final = flag(this, "finalDeltaValue");
        var behavior = flag(this, "deltaBehavior");
        var realDelta = flag(this, "realDelta");
        var expression;
        if (behavior === "change") {
          expression = Math.abs(final - initial) === Math.abs(delta);
        } else {
          expression = realDelta === Math.abs(delta);
        }
        this.assert(
          expression,
          "expected " + msgObj + " to " + behavior + " by " + delta,
          "expected " + msgObj + " to not " + behavior + " by " + delta
        );
      }
      Assertion2.addMethod("by", assertDelta);
      Assertion2.addProperty("extensible", function() {
        var obj = flag(this, "object");
        var isExtensible = obj === Object(obj) && Object.isExtensible(obj);
        this.assert(
          isExtensible,
          "expected #{this} to be extensible",
          "expected #{this} to not be extensible"
        );
      });
      Assertion2.addProperty("sealed", function() {
        var obj = flag(this, "object");
        var isSealed = obj === Object(obj) ? Object.isSealed(obj) : true;
        this.assert(
          isSealed,
          "expected #{this} to be sealed",
          "expected #{this} to not be sealed"
        );
      });
      Assertion2.addProperty("frozen", function() {
        var obj = flag(this, "object");
        var isFrozen = obj === Object(obj) ? Object.isFrozen(obj) : true;
        this.assert(
          isFrozen,
          "expected #{this} to be frozen",
          "expected #{this} to not be frozen"
        );
      });
      Assertion2.addProperty("finite", function(msg) {
        var obj = flag(this, "object");
        this.assert(
          typeof obj === "number" && isFinite(obj),
          "expected #{this} to be a finite number",
          "expected #{this} to not be a finite number"
        );
      });
    };
  }
});

// node_modules/chai/lib/chai/interface/expect.js
var require_expect = __commonJS({
  "node_modules/chai/lib/chai/interface/expect.js"(exports, module2) {
    module2.exports = function(chai3, util5) {
      chai3.expect = function(val, message) {
        return new chai3.Assertion(val, message);
      };
      chai3.expect.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "expect.fail()";
        throw new chai3.AssertionError(message, {
          actual,
          expected,
          operator
        }, chai3.expect.fail);
      };
    };
  }
});

// node_modules/chai/lib/chai/interface/should.js
var require_should = __commonJS({
  "node_modules/chai/lib/chai/interface/should.js"(exports, module2) {
    module2.exports = function(chai3, util5) {
      var Assertion2 = chai3.Assertion;
      function loadShould() {
        function shouldGetter() {
          if (this instanceof String || this instanceof Number || this instanceof Boolean || typeof Symbol === "function" && this instanceof Symbol || typeof BigInt === "function" && this instanceof BigInt) {
            return new Assertion2(this.valueOf(), null, shouldGetter);
          }
          return new Assertion2(this, null, shouldGetter);
        }
        function shouldSetter(value) {
          Object.defineProperty(this, "should", {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        }
        Object.defineProperty(Object.prototype, "should", {
          set: shouldSetter,
          get: shouldGetter,
          configurable: true
        });
        var should2 = {};
        should2.fail = function(actual, expected, message, operator) {
          if (arguments.length < 2) {
            message = actual;
            actual = void 0;
          }
          message = message || "should.fail()";
          throw new chai3.AssertionError(message, {
            actual,
            expected,
            operator
          }, should2.fail);
        };
        should2.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.equal(val2);
        };
        should2.Throw = function(fn2, errt, errs, msg) {
          new Assertion2(fn2, msg).to.Throw(errt, errs);
        };
        should2.exist = function(val, msg) {
          new Assertion2(val, msg).to.exist;
        };
        should2.not = {};
        should2.not.equal = function(val1, val2, msg) {
          new Assertion2(val1, msg).to.not.equal(val2);
        };
        should2.not.Throw = function(fn2, errt, errs, msg) {
          new Assertion2(fn2, msg).to.not.Throw(errt, errs);
        };
        should2.not.exist = function(val, msg) {
          new Assertion2(val, msg).to.not.exist;
        };
        should2["throw"] = should2["Throw"];
        should2.not["throw"] = should2.not["Throw"];
        return should2;
      }
      ;
      chai3.should = loadShould;
      chai3.Should = loadShould;
    };
  }
});

// node_modules/chai/lib/chai/interface/assert.js
var require_assert = __commonJS({
  "node_modules/chai/lib/chai/interface/assert.js"(exports, module2) {
    module2.exports = function(chai3, util5) {
      var Assertion2 = chai3.Assertion, flag = util5.flag;
      var assert2 = chai3.assert = function(express, errmsg) {
        var test3 = new Assertion2(null, null, chai3.assert, true);
        test3.assert(
          express,
          errmsg,
          "[ negation message unavailable ]"
        );
      };
      assert2.fail = function(actual, expected, message, operator) {
        if (arguments.length < 2) {
          message = actual;
          actual = void 0;
        }
        message = message || "assert.fail()";
        throw new chai3.AssertionError(message, {
          actual,
          expected,
          operator
        }, assert2.fail);
      };
      assert2.isOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isOk, true).is.ok;
      };
      assert2.isNotOk = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotOk, true).is.not.ok;
      };
      assert2.equal = function(act, exp, msg) {
        var test3 = new Assertion2(act, msg, assert2.equal, true);
        test3.assert(
          exp == flag(test3, "object"),
          "expected #{this} to equal #{exp}",
          "expected #{this} to not equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.notEqual = function(act, exp, msg) {
        var test3 = new Assertion2(act, msg, assert2.notEqual, true);
        test3.assert(
          exp != flag(test3, "object"),
          "expected #{this} to not equal #{exp}",
          "expected #{this} to equal #{act}",
          exp,
          act,
          true
        );
      };
      assert2.strictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.strictEqual, true).to.equal(exp);
      };
      assert2.notStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notStrictEqual, true).to.not.equal(exp);
      };
      assert2.deepEqual = assert2.deepStrictEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.deepEqual, true).to.eql(exp);
      };
      assert2.notDeepEqual = function(act, exp, msg) {
        new Assertion2(act, msg, assert2.notDeepEqual, true).to.not.eql(exp);
      };
      assert2.isAbove = function(val, abv, msg) {
        new Assertion2(val, msg, assert2.isAbove, true).to.be.above(abv);
      };
      assert2.isAtLeast = function(val, atlst, msg) {
        new Assertion2(val, msg, assert2.isAtLeast, true).to.be.least(atlst);
      };
      assert2.isBelow = function(val, blw, msg) {
        new Assertion2(val, msg, assert2.isBelow, true).to.be.below(blw);
      };
      assert2.isAtMost = function(val, atmst, msg) {
        new Assertion2(val, msg, assert2.isAtMost, true).to.be.most(atmst);
      };
      assert2.isTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isTrue, true).is["true"];
      };
      assert2.isNotTrue = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotTrue, true).to.not.equal(true);
      };
      assert2.isFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isFalse, true).is["false"];
      };
      assert2.isNotFalse = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFalse, true).to.not.equal(false);
      };
      assert2.isNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNull, true).to.equal(null);
      };
      assert2.isNotNull = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNull, true).to.not.equal(null);
      };
      assert2.isNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNaN, true).to.be.NaN;
      };
      assert2.isNotNaN = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNaN, true).not.to.be.NaN;
      };
      assert2.exists = function(val, msg) {
        new Assertion2(val, msg, assert2.exists, true).to.exist;
      };
      assert2.notExists = function(val, msg) {
        new Assertion2(val, msg, assert2.notExists, true).to.not.exist;
      };
      assert2.isUndefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isUndefined, true).to.equal(void 0);
      };
      assert2.isDefined = function(val, msg) {
        new Assertion2(val, msg, assert2.isDefined, true).to.not.equal(void 0);
      };
      assert2.isFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isFunction, true).to.be.a("function");
      };
      assert2.isNotFunction = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotFunction, true).to.not.be.a("function");
      };
      assert2.isObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isObject, true).to.be.a("object");
      };
      assert2.isNotObject = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotObject, true).to.not.be.a("object");
      };
      assert2.isArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isArray, true).to.be.an("array");
      };
      assert2.isNotArray = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotArray, true).to.not.be.an("array");
      };
      assert2.isString = function(val, msg) {
        new Assertion2(val, msg, assert2.isString, true).to.be.a("string");
      };
      assert2.isNotString = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotString, true).to.not.be.a("string");
      };
      assert2.isNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNumber, true).to.be.a("number");
      };
      assert2.isNotNumber = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotNumber, true).to.not.be.a("number");
      };
      assert2.isFinite = function(val, msg) {
        new Assertion2(val, msg, assert2.isFinite, true).to.be.finite;
      };
      assert2.isBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isBoolean, true).to.be.a("boolean");
      };
      assert2.isNotBoolean = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotBoolean, true).to.not.be.a("boolean");
      };
      assert2.typeOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.typeOf, true).to.be.a(type2);
      };
      assert2.notTypeOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.notTypeOf, true).to.not.be.a(type2);
      };
      assert2.instanceOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.instanceOf, true).to.be.instanceOf(type2);
      };
      assert2.notInstanceOf = function(val, type2, msg) {
        new Assertion2(val, msg, assert2.notInstanceOf, true).to.not.be.instanceOf(type2);
      };
      assert2.include = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.include, true).include(inc);
      };
      assert2.notInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notInclude, true).not.include(inc);
      };
      assert2.deepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepInclude, true).deep.include(inc);
      };
      assert2.notDeepInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepInclude, true).not.deep.include(inc);
      };
      assert2.nestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.nestedInclude, true).nested.include(inc);
      };
      assert2.notNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notNestedInclude, true).not.nested.include(inc);
      };
      assert2.deepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepNestedInclude, true).deep.nested.include(inc);
      };
      assert2.notDeepNestedInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepNestedInclude, true).not.deep.nested.include(inc);
      };
      assert2.ownInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.ownInclude, true).own.include(inc);
      };
      assert2.notOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notOwnInclude, true).not.own.include(inc);
      };
      assert2.deepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.deepOwnInclude, true).deep.own.include(inc);
      };
      assert2.notDeepOwnInclude = function(exp, inc, msg) {
        new Assertion2(exp, msg, assert2.notDeepOwnInclude, true).not.deep.own.include(inc);
      };
      assert2.match = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.match, true).to.match(re);
      };
      assert2.notMatch = function(exp, re, msg) {
        new Assertion2(exp, msg, assert2.notMatch, true).to.not.match(re);
      };
      assert2.property = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.property, true).to.have.property(prop);
      };
      assert2.notProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notProperty, true).to.not.have.property(prop);
      };
      assert2.propertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.propertyVal, true).to.have.property(prop, val);
      };
      assert2.notPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notPropertyVal, true).to.not.have.property(prop, val);
      };
      assert2.deepPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.deepPropertyVal, true).to.have.deep.property(prop, val);
      };
      assert2.notDeepPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepPropertyVal, true).to.not.have.deep.property(prop, val);
      };
      assert2.ownProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.ownProperty, true).to.have.own.property(prop);
      };
      assert2.notOwnProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notOwnProperty, true).to.not.have.own.property(prop);
      };
      assert2.ownPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.ownPropertyVal, true).to.have.own.property(prop, value);
      };
      assert2.notOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.notOwnPropertyVal, true).to.not.have.own.property(prop, value);
      };
      assert2.deepOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.deepOwnPropertyVal, true).to.have.deep.own.property(prop, value);
      };
      assert2.notDeepOwnPropertyVal = function(obj, prop, value, msg) {
        new Assertion2(obj, msg, assert2.notDeepOwnPropertyVal, true).to.not.have.deep.own.property(prop, value);
      };
      assert2.nestedProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.nestedProperty, true).to.have.nested.property(prop);
      };
      assert2.notNestedProperty = function(obj, prop, msg) {
        new Assertion2(obj, msg, assert2.notNestedProperty, true).to.not.have.nested.property(prop);
      };
      assert2.nestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.nestedPropertyVal, true).to.have.nested.property(prop, val);
      };
      assert2.notNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notNestedPropertyVal, true).to.not.have.nested.property(prop, val);
      };
      assert2.deepNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.deepNestedPropertyVal, true).to.have.deep.nested.property(prop, val);
      };
      assert2.notDeepNestedPropertyVal = function(obj, prop, val, msg) {
        new Assertion2(obj, msg, assert2.notDeepNestedPropertyVal, true).to.not.have.deep.nested.property(prop, val);
      };
      assert2.lengthOf = function(exp, len, msg) {
        new Assertion2(exp, msg, assert2.lengthOf, true).to.have.lengthOf(len);
      };
      assert2.hasAnyKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAnyKeys, true).to.have.any.keys(keys2);
      };
      assert2.hasAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAllKeys, true).to.have.all.keys(keys2);
      };
      assert2.containsAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.containsAllKeys, true).to.contain.all.keys(keys2);
      };
      assert2.doesNotHaveAnyKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyKeys, true).to.not.have.any.keys(keys2);
      };
      assert2.doesNotHaveAllKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllKeys, true).to.not.have.all.keys(keys2);
      };
      assert2.hasAnyDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAnyDeepKeys, true).to.have.any.deep.keys(keys2);
      };
      assert2.hasAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.hasAllDeepKeys, true).to.have.all.deep.keys(keys2);
      };
      assert2.containsAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.containsAllDeepKeys, true).to.contain.all.deep.keys(keys2);
      };
      assert2.doesNotHaveAnyDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAnyDeepKeys, true).to.not.have.any.deep.keys(keys2);
      };
      assert2.doesNotHaveAllDeepKeys = function(obj, keys2, msg) {
        new Assertion2(obj, msg, assert2.doesNotHaveAllDeepKeys, true).to.not.have.all.deep.keys(keys2);
      };
      assert2.throws = function(fn2, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        var assertErr = new Assertion2(fn2, msg, assert2.throws, true).to.throw(errorLike, errMsgMatcher);
        return flag(assertErr, "object");
      };
      assert2.doesNotThrow = function(fn2, errorLike, errMsgMatcher, msg) {
        if ("string" === typeof errorLike || errorLike instanceof RegExp) {
          errMsgMatcher = errorLike;
          errorLike = null;
        }
        new Assertion2(fn2, msg, assert2.doesNotThrow, true).to.not.throw(errorLike, errMsgMatcher);
      };
      assert2.operator = function(val, operator, val2, msg) {
        var ok;
        switch (operator) {
          case "==":
            ok = val == val2;
            break;
          case "===":
            ok = val === val2;
            break;
          case ">":
            ok = val > val2;
            break;
          case ">=":
            ok = val >= val2;
            break;
          case "<":
            ok = val < val2;
            break;
          case "<=":
            ok = val <= val2;
            break;
          case "!=":
            ok = val != val2;
            break;
          case "!==":
            ok = val !== val2;
            break;
          default:
            msg = msg ? msg + ": " : msg;
            throw new chai3.AssertionError(
              msg + 'Invalid operator "' + operator + '"',
              void 0,
              assert2.operator
            );
        }
        var test3 = new Assertion2(ok, msg, assert2.operator, true);
        test3.assert(
          true === flag(test3, "object"),
          "expected " + util5.inspect(val) + " to be " + operator + " " + util5.inspect(val2),
          "expected " + util5.inspect(val) + " to not be " + operator + " " + util5.inspect(val2)
        );
      };
      assert2.closeTo = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.closeTo, true).to.be.closeTo(exp, delta);
      };
      assert2.approximately = function(act, exp, delta, msg) {
        new Assertion2(act, msg, assert2.approximately, true).to.be.approximately(exp, delta);
      };
      assert2.sameMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.sameMembers, true).to.have.same.members(set2);
      };
      assert2.notSameMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.notSameMembers, true).to.not.have.same.members(set2);
      };
      assert2.sameDeepMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.sameDeepMembers, true).to.have.same.deep.members(set2);
      };
      assert2.notSameDeepMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepMembers, true).to.not.have.same.deep.members(set2);
      };
      assert2.sameOrderedMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.sameOrderedMembers, true).to.have.same.ordered.members(set2);
      };
      assert2.notSameOrderedMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.notSameOrderedMembers, true).to.not.have.same.ordered.members(set2);
      };
      assert2.sameDeepOrderedMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.sameDeepOrderedMembers, true).to.have.same.deep.ordered.members(set2);
      };
      assert2.notSameDeepOrderedMembers = function(set1, set2, msg) {
        new Assertion2(set1, msg, assert2.notSameDeepOrderedMembers, true).to.not.have.same.deep.ordered.members(set2);
      };
      assert2.includeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeMembers, true).to.include.members(subset);
      };
      assert2.notIncludeMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeMembers, true).to.not.include.members(subset);
      };
      assert2.includeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepMembers, true).to.include.deep.members(subset);
      };
      assert2.notIncludeDeepMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepMembers, true).to.not.include.deep.members(subset);
      };
      assert2.includeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeOrderedMembers, true).to.include.ordered.members(subset);
      };
      assert2.notIncludeOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeOrderedMembers, true).to.not.include.ordered.members(subset);
      };
      assert2.includeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.includeDeepOrderedMembers, true).to.include.deep.ordered.members(subset);
      };
      assert2.notIncludeDeepOrderedMembers = function(superset, subset, msg) {
        new Assertion2(superset, msg, assert2.notIncludeDeepOrderedMembers, true).to.not.include.deep.ordered.members(subset);
      };
      assert2.oneOf = function(inList, list, msg) {
        new Assertion2(inList, msg, assert2.oneOf, true).to.be.oneOf(list);
      };
      assert2.changes = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changes, true).to.change(obj, prop);
      };
      assert2.changesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changesBy, true).to.change(obj, prop).by(delta);
      };
      assert2.doesNotChange = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotChange, true).to.not.change(obj, prop);
      };
      assert2.changesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.changesButNotBy, true).to.change(obj, prop).but.not.by(delta);
      };
      assert2.increases = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.increases, true).to.increase(obj, prop);
      };
      assert2.increasesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.increasesBy, true).to.increase(obj, prop).by(delta);
      };
      assert2.doesNotIncrease = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotIncrease, true).to.not.increase(obj, prop);
      };
      assert2.increasesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.increasesButNotBy, true).to.increase(obj, prop).but.not.by(delta);
      };
      assert2.decreases = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.decreases, true).to.decrease(obj, prop);
      };
      assert2.decreasesBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.decreasesBy, true).to.decrease(obj, prop).by(delta);
      };
      assert2.doesNotDecrease = function(fn2, obj, prop, msg) {
        if (arguments.length === 3 && typeof obj === "function") {
          msg = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotDecrease, true).to.not.decrease(obj, prop);
      };
      assert2.doesNotDecreaseBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        return new Assertion2(fn2, msg, assert2.doesNotDecreaseBy, true).to.not.decrease(obj, prop).by(delta);
      };
      assert2.decreasesButNotBy = function(fn2, obj, prop, delta, msg) {
        if (arguments.length === 4 && typeof obj === "function") {
          var tmpMsg = delta;
          delta = prop;
          msg = tmpMsg;
        } else if (arguments.length === 3) {
          delta = prop;
          prop = null;
        }
        new Assertion2(fn2, msg, assert2.decreasesButNotBy, true).to.decrease(obj, prop).but.not.by(delta);
      };
      assert2.ifError = function(val) {
        if (val) {
          throw val;
        }
      };
      assert2.isExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isExtensible, true).to.be.extensible;
      };
      assert2.isNotExtensible = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotExtensible, true).to.not.be.extensible;
      };
      assert2.isSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isSealed, true).to.be.sealed;
      };
      assert2.isNotSealed = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotSealed, true).to.not.be.sealed;
      };
      assert2.isFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isFrozen, true).to.be.frozen;
      };
      assert2.isNotFrozen = function(obj, msg) {
        new Assertion2(obj, msg, assert2.isNotFrozen, true).to.not.be.frozen;
      };
      assert2.isEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isEmpty, true).to.be.empty;
      };
      assert2.isNotEmpty = function(val, msg) {
        new Assertion2(val, msg, assert2.isNotEmpty, true).to.not.be.empty;
      };
      (function alias(name, as) {
        assert2[as] = assert2[name];
        return alias;
      })("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")("isEmpty", "empty")("isNotEmpty", "notEmpty");
    };
  }
});

// node_modules/chai/lib/chai.js
var require_chai = __commonJS({
  "node_modules/chai/lib/chai.js"(exports) {
    var used = [];
    exports.version = "4.3.3";
    exports.AssertionError = require_assertion_error();
    var util5 = require_utils();
    exports.use = function(fn2) {
      if (!~used.indexOf(fn2)) {
        fn2(exports, util5);
        used.push(fn2);
      }
      return exports;
    };
    exports.util = util5;
    var config2 = require_config();
    exports.config = config2;
    var assertion = require_assertion();
    exports.use(assertion);
    var core2 = require_assertions();
    exports.use(core2);
    var expect2 = require_expect();
    exports.use(expect2);
    var should2 = require_should();
    exports.use(should2);
    var assert2 = require_assert();
    exports.use(assert2);
  }
});

// node_modules/chai/index.js
var require_chai2 = __commonJS({
  "node_modules/chai/index.js"(exports, module2) {
    module2.exports = require_chai();
  }
});

// node_modules/vitest/dist/vendor-_commonjsHelpers.4da45ef5.mjs
var commonjsGlobal;
var init_vendor_commonjsHelpers_4da45ef5 = __esm({
  "node_modules/vitest/dist/vendor-_commonjsHelpers.4da45ef5.mjs"() {
    commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  }
});

// node_modules/vitest/dist/chunk-magic-string.efe26975.mjs
var chunk_magic_string_efe26975_exports = {};
__export(chunk_magic_string_efe26975_exports, {
  Bundle: () => Bundle,
  SourceMap: () => SourceMap,
  default: () => MagicString
});
function encode(decoded) {
  var sourceFileIndex = 0;
  var sourceCodeLine = 0;
  var sourceCodeColumn = 0;
  var nameIndex = 0;
  var mappings = "";
  for (var i = 0; i < decoded.length; i++) {
    var line = decoded[i];
    if (i > 0)
      mappings += ";";
    if (line.length === 0)
      continue;
    var generatedCodeColumn = 0;
    var lineMappings = [];
    for (var _i = 0, line_1 = line; _i < line_1.length; _i++) {
      var segment = line_1[_i];
      var segmentMappings = encodeInteger(segment[0] - generatedCodeColumn);
      generatedCodeColumn = segment[0];
      if (segment.length > 1) {
        segmentMappings += encodeInteger(segment[1] - sourceFileIndex) + encodeInteger(segment[2] - sourceCodeLine) + encodeInteger(segment[3] - sourceCodeColumn);
        sourceFileIndex = segment[1];
        sourceCodeLine = segment[2];
        sourceCodeColumn = segment[3];
      }
      if (segment.length === 5) {
        segmentMappings += encodeInteger(segment[4] - nameIndex);
        nameIndex = segment[4];
      }
      lineMappings.push(segmentMappings);
    }
    mappings += lineMappings.join(",");
  }
  return mappings;
}
function encodeInteger(num) {
  var result = "";
  num = num < 0 ? -num << 1 | 1 : num << 1;
  do {
    var clamped = num & 31;
    num >>>= 5;
    if (num > 0) {
      clamped |= 32;
    }
    result += chars[clamped];
  } while (num > 0);
  return result;
}
function guessIndent(code) {
  const lines = code.split("\n");
  const tabbed = lines.filter((line) => /^\t+/.test(line));
  const spaced = lines.filter((line) => /^ {2,}/.test(line));
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  const min = spaced.reduce((previous, current) => {
    const numSpaces = /^ +/.exec(current)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from, to) {
  const fromParts = from.split(/[/\\]/);
  const toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    let i = fromParts.length;
    while (i--)
      fromParts[i] = "..";
  }
  return fromParts.concat(toParts).join("/");
}
function isObject2(thing) {
  return toString2.call(thing) === "[object Object]";
}
function getLocator(source) {
  const originalLines = source.split("\n");
  const lineOffsets = [];
  for (let i = 0, pos = 0; i < originalLines.length; i++) {
    lineOffsets.push(pos);
    pos += originalLines[i].length + 1;
  }
  return function locate(index) {
    let i = 0;
    let j = lineOffsets.length;
    while (i < j) {
      const m = i + j >> 1;
      if (index < lineOffsets[m]) {
        j = m;
      } else {
        i = m + 1;
      }
    }
    const line = i - 1;
    const column = index - lineOffsets[line];
    return { line, column };
  };
}
var chars, BitSet, Chunk, btoa, SourceMap, toString2, Mappings, n, warned, MagicString, hasOwnProp, Bundle;
var init_chunk_magic_string_efe26975 = __esm({
  "node_modules/vitest/dist/chunk-magic-string.efe26975.mjs"() {
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    BitSet = class {
      constructor(arg) {
        this.bits = arg instanceof BitSet ? arg.bits.slice() : [];
      }
      add(n2) {
        this.bits[n2 >> 5] |= 1 << (n2 & 31);
      }
      has(n2) {
        return !!(this.bits[n2 >> 5] & 1 << (n2 & 31));
      }
    };
    Chunk = class {
      constructor(start, end, content) {
        this.start = start;
        this.end = end;
        this.original = content;
        this.intro = "";
        this.outro = "";
        this.content = content;
        this.storeName = false;
        this.edited = false;
        Object.defineProperties(this, {
          previous: { writable: true, value: null },
          next: { writable: true, value: null }
        });
      }
      appendLeft(content) {
        this.outro += content;
      }
      appendRight(content) {
        this.intro = this.intro + content;
      }
      clone() {
        const chunk = new Chunk(this.start, this.end, this.original);
        chunk.intro = this.intro;
        chunk.outro = this.outro;
        chunk.content = this.content;
        chunk.storeName = this.storeName;
        chunk.edited = this.edited;
        return chunk;
      }
      contains(index) {
        return this.start < index && index < this.end;
      }
      eachNext(fn2) {
        let chunk = this;
        while (chunk) {
          fn2(chunk);
          chunk = chunk.next;
        }
      }
      eachPrevious(fn2) {
        let chunk = this;
        while (chunk) {
          fn2(chunk);
          chunk = chunk.previous;
        }
      }
      edit(content, storeName, contentOnly) {
        this.content = content;
        if (!contentOnly) {
          this.intro = "";
          this.outro = "";
        }
        this.storeName = storeName;
        this.edited = true;
        return this;
      }
      prependLeft(content) {
        this.outro = content + this.outro;
      }
      prependRight(content) {
        this.intro = content + this.intro;
      }
      split(index) {
        const sliceIndex = index - this.start;
        const originalBefore = this.original.slice(0, sliceIndex);
        const originalAfter = this.original.slice(sliceIndex);
        this.original = originalBefore;
        const newChunk = new Chunk(index, this.end, originalAfter);
        newChunk.outro = this.outro;
        this.outro = "";
        this.end = index;
        if (this.edited) {
          newChunk.edit("", false);
          this.content = "";
        } else {
          this.content = originalBefore;
        }
        newChunk.next = this.next;
        if (newChunk.next)
          newChunk.next.previous = newChunk;
        newChunk.previous = this;
        this.next = newChunk;
        return newChunk;
      }
      toString() {
        return this.intro + this.content + this.outro;
      }
      trimEnd(rx) {
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            this.split(this.start + trimmed.length).edit("", void 0, true);
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.intro = this.intro.replace(rx, "");
          if (this.intro.length)
            return true;
        }
      }
      trimStart(rx) {
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        const trimmed = this.content.replace(rx, "");
        if (trimmed.length) {
          if (trimmed !== this.content) {
            this.split(this.end - trimmed.length);
            this.edit("", void 0, true);
          }
          return true;
        } else {
          this.edit("", void 0, true);
          this.outro = this.outro.replace(rx, "");
          if (this.outro.length)
            return true;
        }
      }
    };
    btoa = () => {
      throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
    };
    if (typeof window !== "undefined" && typeof window.btoa === "function") {
      btoa = (str) => window.btoa(unescape(encodeURIComponent(str)));
    } else if (typeof Buffer === "function") {
      btoa = (str) => Buffer.from(str, "utf-8").toString("base64");
    }
    SourceMap = class {
      constructor(properties) {
        this.version = 3;
        this.file = properties.file;
        this.sources = properties.sources;
        this.sourcesContent = properties.sourcesContent;
        this.names = properties.names;
        this.mappings = encode(properties.mappings);
      }
      toString() {
        return JSON.stringify(this);
      }
      toUrl() {
        return "data:application/json;charset=utf-8;base64," + btoa(this.toString());
      }
    };
    toString2 = Object.prototype.toString;
    Mappings = class {
      constructor(hires) {
        this.hires = hires;
        this.generatedCodeLine = 0;
        this.generatedCodeColumn = 0;
        this.raw = [];
        this.rawSegments = this.raw[this.generatedCodeLine] = [];
        this.pending = null;
      }
      addEdit(sourceIndex, content, loc, nameIndex) {
        if (content.length) {
          const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
          if (nameIndex >= 0) {
            segment.push(nameIndex);
          }
          this.rawSegments.push(segment);
        } else if (this.pending) {
          this.rawSegments.push(this.pending);
        }
        this.advance(content);
        this.pending = null;
      }
      addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
        let originalCharIndex = chunk.start;
        let first = true;
        while (originalCharIndex < chunk.end) {
          if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
            this.rawSegments.push([this.generatedCodeColumn, sourceIndex, loc.line, loc.column]);
          }
          if (original[originalCharIndex] === "\n") {
            loc.line += 1;
            loc.column = 0;
            this.generatedCodeLine += 1;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
            this.generatedCodeColumn = 0;
            first = true;
          } else {
            loc.column += 1;
            this.generatedCodeColumn += 1;
            first = false;
          }
          originalCharIndex += 1;
        }
        this.pending = null;
      }
      advance(str) {
        if (!str)
          return;
        const lines = str.split("\n");
        if (lines.length > 1) {
          for (let i = 0; i < lines.length - 1; i++) {
            this.generatedCodeLine++;
            this.raw[this.generatedCodeLine] = this.rawSegments = [];
          }
          this.generatedCodeColumn = 0;
        }
        this.generatedCodeColumn += lines[lines.length - 1].length;
      }
    };
    n = "\n";
    warned = {
      insertLeft: false,
      insertRight: false,
      storeName: false
    };
    MagicString = class {
      constructor(string2, options = {}) {
        const chunk = new Chunk(0, string2.length, string2);
        Object.defineProperties(this, {
          original: { writable: true, value: string2 },
          outro: { writable: true, value: "" },
          intro: { writable: true, value: "" },
          firstChunk: { writable: true, value: chunk },
          lastChunk: { writable: true, value: chunk },
          lastSearchedChunk: { writable: true, value: chunk },
          byStart: { writable: true, value: {} },
          byEnd: { writable: true, value: {} },
          filename: { writable: true, value: options.filename },
          indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
          sourcemapLocations: { writable: true, value: new BitSet() },
          storedNames: { writable: true, value: {} },
          indentStr: { writable: true, value: guessIndent(string2) }
        });
        this.byStart[0] = chunk;
        this.byEnd[string2.length] = chunk;
      }
      addSourcemapLocation(char) {
        this.sourcemapLocations.add(char);
      }
      append(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.outro += content;
        return this;
      }
      appendLeft(index, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index);
        const chunk = this.byEnd[index];
        if (chunk) {
          chunk.appendLeft(content);
        } else {
          this.intro += content;
        }
        return this;
      }
      appendRight(index, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index);
        const chunk = this.byStart[index];
        if (chunk) {
          chunk.appendRight(content);
        } else {
          this.outro += content;
        }
        return this;
      }
      clone() {
        const cloned = new MagicString(this.original, { filename: this.filename });
        let originalChunk = this.firstChunk;
        let clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
        while (originalChunk) {
          cloned.byStart[clonedChunk.start] = clonedChunk;
          cloned.byEnd[clonedChunk.end] = clonedChunk;
          const nextOriginalChunk = originalChunk.next;
          const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
          if (nextClonedChunk) {
            clonedChunk.next = nextClonedChunk;
            nextClonedChunk.previous = clonedChunk;
            clonedChunk = nextClonedChunk;
          }
          originalChunk = nextOriginalChunk;
        }
        cloned.lastChunk = clonedChunk;
        if (this.indentExclusionRanges) {
          cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
        }
        cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
        cloned.intro = this.intro;
        cloned.outro = this.outro;
        return cloned;
      }
      generateDecodedMap(options) {
        options = options || {};
        const sourceIndex = 0;
        const names = Object.keys(this.storedNames);
        const mappings = new Mappings(options.hires);
        const locate = getLocator(this.original);
        if (this.intro) {
          mappings.advance(this.intro);
        }
        this.firstChunk.eachNext((chunk) => {
          const loc = locate(chunk.start);
          if (chunk.intro.length)
            mappings.advance(chunk.intro);
          if (chunk.edited) {
            mappings.addEdit(
              sourceIndex,
              chunk.content,
              loc,
              chunk.storeName ? names.indexOf(chunk.original) : -1
            );
          } else {
            mappings.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
          }
          if (chunk.outro.length)
            mappings.advance(chunk.outro);
        });
        return {
          file: options.file ? options.file.split(/[/\\]/).pop() : null,
          sources: [options.source ? getRelativePath(options.file || "", options.source) : null],
          sourcesContent: options.includeContent ? [this.original] : [null],
          names,
          mappings: mappings.raw
        };
      }
      generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
      }
      getIndentString() {
        return this.indentStr === null ? "	" : this.indentStr;
      }
      indent(indentStr, options) {
        const pattern = /^[^\r\n]/gm;
        if (isObject2(indentStr)) {
          options = indentStr;
          indentStr = void 0;
        }
        indentStr = indentStr !== void 0 ? indentStr : this.indentStr || "	";
        if (indentStr === "")
          return this;
        options = options || {};
        const isExcluded = {};
        if (options.exclude) {
          const exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
          exclusions.forEach((exclusion) => {
            for (let i = exclusion[0]; i < exclusion[1]; i += 1) {
              isExcluded[i] = true;
            }
          });
        }
        let shouldIndentNextCharacter = options.indentStart !== false;
        const replacer = (match) => {
          if (shouldIndentNextCharacter)
            return `${indentStr}${match}`;
          shouldIndentNextCharacter = true;
          return match;
        };
        this.intro = this.intro.replace(pattern, replacer);
        let charIndex = 0;
        let chunk = this.firstChunk;
        while (chunk) {
          const end = chunk.end;
          if (chunk.edited) {
            if (!isExcluded[charIndex]) {
              chunk.content = chunk.content.replace(pattern, replacer);
              if (chunk.content.length) {
                shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
              }
            }
          } else {
            charIndex = chunk.start;
            while (charIndex < end) {
              if (!isExcluded[charIndex]) {
                const char = this.original[charIndex];
                if (char === "\n") {
                  shouldIndentNextCharacter = true;
                } else if (char !== "\r" && shouldIndentNextCharacter) {
                  shouldIndentNextCharacter = false;
                  if (charIndex === chunk.start) {
                    chunk.prependRight(indentStr);
                  } else {
                    this._splitChunk(chunk, charIndex);
                    chunk = chunk.next;
                    chunk.prependRight(indentStr);
                  }
                }
              }
              charIndex += 1;
            }
          }
          charIndex = chunk.end;
          chunk = chunk.next;
        }
        this.outro = this.outro.replace(pattern, replacer);
        return this;
      }
      insert() {
        throw new Error(
          "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
        );
      }
      insertLeft(index, content) {
        if (!warned.insertLeft) {
          console.warn(
            "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
          );
          warned.insertLeft = true;
        }
        return this.appendLeft(index, content);
      }
      insertRight(index, content) {
        if (!warned.insertRight) {
          console.warn(
            "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
          );
          warned.insertRight = true;
        }
        return this.prependRight(index, content);
      }
      move(start, end, index) {
        if (index >= start && index <= end)
          throw new Error("Cannot move a selection inside itself");
        this._split(start);
        this._split(end);
        this._split(index);
        const first = this.byStart[start];
        const last = this.byEnd[end];
        const oldLeft = first.previous;
        const oldRight = last.next;
        const newRight = this.byStart[index];
        if (!newRight && last === this.lastChunk)
          return this;
        const newLeft = newRight ? newRight.previous : this.lastChunk;
        if (oldLeft)
          oldLeft.next = oldRight;
        if (oldRight)
          oldRight.previous = oldLeft;
        if (newLeft)
          newLeft.next = first;
        if (newRight)
          newRight.previous = last;
        if (!first.previous)
          this.firstChunk = last.next;
        if (!last.next) {
          this.lastChunk = first.previous;
          this.lastChunk.next = null;
        }
        first.previous = newLeft;
        last.next = newRight || null;
        if (!newLeft)
          this.firstChunk = first;
        if (!newRight)
          this.lastChunk = last;
        return this;
      }
      overwrite(start, end, content, options) {
        if (typeof content !== "string")
          throw new TypeError("replacement content must be a string");
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (end > this.original.length)
          throw new Error("end is out of bounds");
        if (start === end)
          throw new Error(
            "Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead"
          );
        this._split(start);
        this._split(end);
        if (options === true) {
          if (!warned.storeName) {
            console.warn(
              "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
            );
            warned.storeName = true;
          }
          options = { storeName: true };
        }
        const storeName = options !== void 0 ? options.storeName : false;
        const contentOnly = options !== void 0 ? options.contentOnly : false;
        if (storeName) {
          const original = this.original.slice(start, end);
          Object.defineProperty(this.storedNames, original, {
            writable: true,
            value: true,
            enumerable: true
          });
        }
        const first = this.byStart[start];
        const last = this.byEnd[end];
        if (first) {
          let chunk = first;
          while (chunk !== last) {
            if (chunk.next !== this.byStart[chunk.end]) {
              throw new Error("Cannot overwrite across a split point");
            }
            chunk = chunk.next;
            chunk.edit("", false);
          }
          first.edit(content, storeName, contentOnly);
        } else {
          const newChunk = new Chunk(start, end, "").edit(content, storeName);
          last.next = newChunk;
          newChunk.previous = last;
        }
        return this;
      }
      prepend(content) {
        if (typeof content !== "string")
          throw new TypeError("outro content must be a string");
        this.intro = content + this.intro;
        return this;
      }
      prependLeft(index, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index);
        const chunk = this.byEnd[index];
        if (chunk) {
          chunk.prependLeft(content);
        } else {
          this.intro = content + this.intro;
        }
        return this;
      }
      prependRight(index, content) {
        if (typeof content !== "string")
          throw new TypeError("inserted content must be a string");
        this._split(index);
        const chunk = this.byStart[index];
        if (chunk) {
          chunk.prependRight(content);
        } else {
          this.outro = content + this.outro;
        }
        return this;
      }
      remove(start, end) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        if (start === end)
          return this;
        if (start < 0 || end > this.original.length)
          throw new Error("Character is out of bounds");
        if (start > end)
          throw new Error("end must be greater than start");
        this._split(start);
        this._split(end);
        let chunk = this.byStart[start];
        while (chunk) {
          chunk.intro = "";
          chunk.outro = "";
          chunk.edit("");
          chunk = end > chunk.end ? this.byStart[chunk.end] : null;
        }
        return this;
      }
      lastChar() {
        if (this.outro.length)
          return this.outro[this.outro.length - 1];
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length)
            return chunk.outro[chunk.outro.length - 1];
          if (chunk.content.length)
            return chunk.content[chunk.content.length - 1];
          if (chunk.intro.length)
            return chunk.intro[chunk.intro.length - 1];
        } while (chunk = chunk.previous);
        if (this.intro.length)
          return this.intro[this.intro.length - 1];
        return "";
      }
      lastLine() {
        let lineIndex = this.outro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.outro.substr(lineIndex + 1);
        let lineStr = this.outro;
        let chunk = this.lastChunk;
        do {
          if (chunk.outro.length > 0) {
            lineIndex = chunk.outro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.outro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.outro + lineStr;
          }
          if (chunk.content.length > 0) {
            lineIndex = chunk.content.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.content.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.content + lineStr;
          }
          if (chunk.intro.length > 0) {
            lineIndex = chunk.intro.lastIndexOf(n);
            if (lineIndex !== -1)
              return chunk.intro.substr(lineIndex + 1) + lineStr;
            lineStr = chunk.intro + lineStr;
          }
        } while (chunk = chunk.previous);
        lineIndex = this.intro.lastIndexOf(n);
        if (lineIndex !== -1)
          return this.intro.substr(lineIndex + 1) + lineStr;
        return this.intro + lineStr;
      }
      slice(start = 0, end = this.original.length) {
        while (start < 0)
          start += this.original.length;
        while (end < 0)
          end += this.original.length;
        let result = "";
        let chunk = this.firstChunk;
        while (chunk && (chunk.start > start || chunk.end <= start)) {
          if (chunk.start < end && chunk.end >= end) {
            return result;
          }
          chunk = chunk.next;
        }
        if (chunk && chunk.edited && chunk.start !== start)
          throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);
        const startChunk = chunk;
        while (chunk) {
          if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
            result += chunk.intro;
          }
          const containsEnd = chunk.start < end && chunk.end >= end;
          if (containsEnd && chunk.edited && chunk.end !== end)
            throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);
          const sliceStart = startChunk === chunk ? start - chunk.start : 0;
          const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
          result += chunk.content.slice(sliceStart, sliceEnd);
          if (chunk.outro && (!containsEnd || chunk.end === end)) {
            result += chunk.outro;
          }
          if (containsEnd) {
            break;
          }
          chunk = chunk.next;
        }
        return result;
      }
      snip(start, end) {
        const clone = this.clone();
        clone.remove(0, start);
        clone.remove(end, clone.original.length);
        return clone;
      }
      _split(index) {
        if (this.byStart[index] || this.byEnd[index])
          return;
        let chunk = this.lastSearchedChunk;
        const searchForward = index > chunk.end;
        while (chunk) {
          if (chunk.contains(index))
            return this._splitChunk(chunk, index);
          chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
        }
      }
      _splitChunk(chunk, index) {
        if (chunk.edited && chunk.content.length) {
          const loc = getLocator(this.original)(index);
          throw new Error(
            `Cannot split a chunk that has already been edited (${loc.line}:${loc.column} \u2013 "${chunk.original}")`
          );
        }
        const newChunk = chunk.split(index);
        this.byEnd[index] = chunk;
        this.byStart[index] = newChunk;
        this.byEnd[newChunk.end] = newChunk;
        if (chunk === this.lastChunk)
          this.lastChunk = newChunk;
        this.lastSearchedChunk = chunk;
        return true;
      }
      toString() {
        let str = this.intro;
        let chunk = this.firstChunk;
        while (chunk) {
          str += chunk.toString();
          chunk = chunk.next;
        }
        return str + this.outro;
      }
      isEmpty() {
        let chunk = this.firstChunk;
        do {
          if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim())
            return false;
        } while (chunk = chunk.next);
        return true;
      }
      length() {
        let chunk = this.firstChunk;
        let length = 0;
        do {
          length += chunk.intro.length + chunk.content.length + chunk.outro.length;
        } while (chunk = chunk.next);
        return length;
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
      }
      trimEndAborted(charType) {
        const rx = new RegExp((charType || "\\s") + "+$");
        this.outro = this.outro.replace(rx, "");
        if (this.outro.length)
          return true;
        let chunk = this.lastChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimEnd(rx);
          if (chunk.end !== end) {
            if (this.lastChunk === chunk) {
              this.lastChunk = chunk.next;
            }
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.previous;
        } while (chunk);
        return false;
      }
      trimEnd(charType) {
        this.trimEndAborted(charType);
        return this;
      }
      trimStartAborted(charType) {
        const rx = new RegExp("^" + (charType || "\\s") + "+");
        this.intro = this.intro.replace(rx, "");
        if (this.intro.length)
          return true;
        let chunk = this.firstChunk;
        do {
          const end = chunk.end;
          const aborted = chunk.trimStart(rx);
          if (chunk.end !== end) {
            if (chunk === this.lastChunk)
              this.lastChunk = chunk.next;
            this.byEnd[chunk.end] = chunk;
            this.byStart[chunk.next.start] = chunk.next;
            this.byEnd[chunk.next.end] = chunk.next;
          }
          if (aborted)
            return true;
          chunk = chunk.next;
        } while (chunk);
        return false;
      }
      trimStart(charType) {
        this.trimStartAborted(charType);
        return this;
      }
      hasChanged() {
        return this.original !== this.toString();
      }
      replace(searchValue, replacement) {
        function getReplacement(match, str) {
          if (typeof replacement === "string") {
            return replacement.replace(/\$(\$|&|\d+)/g, (_, i) => {
              if (i === "$")
                return "$";
              if (i === "&")
                return match[0];
              const num = +i;
              if (num < match.length)
                return match[+i];
              return `$${i}`;
            });
          } else {
            return replacement(...match, match.index, str, match.groups);
          }
        }
        function matchAll(re, str) {
          let match;
          const matches = [];
          while (match = re.exec(str)) {
            matches.push(match);
          }
          return matches;
        }
        if (typeof searchValue !== "string" && searchValue.global) {
          const matches = matchAll(searchValue, this.original);
          matches.forEach((match) => {
            if (match.index != null)
              this.overwrite(
                match.index,
                match.index + match[0].length,
                getReplacement(match, this.original)
              );
          });
        } else {
          const match = this.original.match(searchValue);
          if (match && match.index != null)
            this.overwrite(
              match.index,
              match.index + match[0].length,
              getReplacement(match, this.original)
            );
        }
        return this;
      }
    };
    hasOwnProp = Object.prototype.hasOwnProperty;
    Bundle = class {
      constructor(options = {}) {
        this.intro = options.intro || "";
        this.separator = options.separator !== void 0 ? options.separator : "\n";
        this.sources = [];
        this.uniqueSources = [];
        this.uniqueSourceIndexByFilename = {};
      }
      addSource(source) {
        if (source instanceof MagicString) {
          return this.addSource({
            content: source,
            filename: source.filename,
            separator: this.separator
          });
        }
        if (!isObject2(source) || !source.content) {
          throw new Error(
            "bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`"
          );
        }
        ["filename", "indentExclusionRanges", "separator"].forEach((option) => {
          if (!hasOwnProp.call(source, option))
            source[option] = source.content[option];
        });
        if (source.separator === void 0) {
          source.separator = this.separator;
        }
        if (source.filename) {
          if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
            this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
            this.uniqueSources.push({ filename: source.filename, content: source.content.original });
          } else {
            const uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
            if (source.content.original !== uniqueSource.content) {
              throw new Error(`Illegal source: same filename (${source.filename}), different contents`);
            }
          }
        }
        this.sources.push(source);
        return this;
      }
      append(str, options) {
        this.addSource({
          content: new MagicString(str),
          separator: options && options.separator || ""
        });
        return this;
      }
      clone() {
        const bundle = new Bundle({
          intro: this.intro,
          separator: this.separator
        });
        this.sources.forEach((source) => {
          bundle.addSource({
            filename: source.filename,
            content: source.content.clone(),
            separator: source.separator
          });
        });
        return bundle;
      }
      generateDecodedMap(options = {}) {
        const names = [];
        this.sources.forEach((source) => {
          Object.keys(source.content.storedNames).forEach((name) => {
            if (!~names.indexOf(name))
              names.push(name);
          });
        });
        const mappings = new Mappings(options.hires);
        if (this.intro) {
          mappings.advance(this.intro);
        }
        this.sources.forEach((source, i) => {
          if (i > 0) {
            mappings.advance(this.separator);
          }
          const sourceIndex = source.filename ? this.uniqueSourceIndexByFilename[source.filename] : -1;
          const magicString = source.content;
          const locate = getLocator(magicString.original);
          if (magicString.intro) {
            mappings.advance(magicString.intro);
          }
          magicString.firstChunk.eachNext((chunk) => {
            const loc = locate(chunk.start);
            if (chunk.intro.length)
              mappings.advance(chunk.intro);
            if (source.filename) {
              if (chunk.edited) {
                mappings.addEdit(
                  sourceIndex,
                  chunk.content,
                  loc,
                  chunk.storeName ? names.indexOf(chunk.original) : -1
                );
              } else {
                mappings.addUneditedChunk(
                  sourceIndex,
                  chunk,
                  magicString.original,
                  loc,
                  magicString.sourcemapLocations
                );
              }
            } else {
              mappings.advance(chunk.content);
            }
            if (chunk.outro.length)
              mappings.advance(chunk.outro);
          });
          if (magicString.outro) {
            mappings.advance(magicString.outro);
          }
        });
        return {
          file: options.file ? options.file.split(/[/\\]/).pop() : null,
          sources: this.uniqueSources.map((source) => {
            return options.file ? getRelativePath(options.file, source.filename) : source.filename;
          }),
          sourcesContent: this.uniqueSources.map((source) => {
            return options.includeContent ? source.content : null;
          }),
          names,
          mappings: mappings.raw
        };
      }
      generateMap(options) {
        return new SourceMap(this.generateDecodedMap(options));
      }
      getIndentString() {
        const indentStringCounts = {};
        this.sources.forEach((source) => {
          const indentStr = source.content.indentStr;
          if (indentStr === null)
            return;
          if (!indentStringCounts[indentStr])
            indentStringCounts[indentStr] = 0;
          indentStringCounts[indentStr] += 1;
        });
        return Object.keys(indentStringCounts).sort((a, b) => {
          return indentStringCounts[a] - indentStringCounts[b];
        })[0] || "	";
      }
      indent(indentStr) {
        if (!arguments.length) {
          indentStr = this.getIndentString();
        }
        if (indentStr === "")
          return this;
        let trailingNewline = !this.intro || this.intro.slice(-1) === "\n";
        this.sources.forEach((source, i) => {
          const separator = source.separator !== void 0 ? source.separator : this.separator;
          const indentStart = trailingNewline || i > 0 && /\r?\n$/.test(separator);
          source.content.indent(indentStr, {
            exclude: source.indentExclusionRanges,
            indentStart
          });
          trailingNewline = source.content.lastChar() === "\n";
        });
        if (this.intro) {
          this.intro = indentStr + this.intro.replace(/^[^\n]/gm, (match, index) => {
            return index > 0 ? indentStr + match : match;
          });
        }
        return this;
      }
      prepend(str) {
        this.intro = str + this.intro;
        return this;
      }
      toString() {
        const body = this.sources.map((source, i) => {
          const separator = source.separator !== void 0 ? source.separator : this.separator;
          const str = (i > 0 ? separator : "") + source.content.toString();
          return str;
        }).join("");
        return this.intro + body;
      }
      isEmpty() {
        if (this.intro.length && this.intro.trim())
          return false;
        if (this.sources.some((source) => !source.content.isEmpty()))
          return false;
        return true;
      }
      length() {
        return this.sources.reduce(
          (length, source) => length + source.content.length(),
          this.intro.length
        );
      }
      trimLines() {
        return this.trim("[\\r\\n]");
      }
      trim(charType) {
        return this.trimStart(charType).trimEnd(charType);
      }
      trimStart(charType) {
        const rx = new RegExp("^" + (charType || "\\s") + "+");
        this.intro = this.intro.replace(rx, "");
        if (!this.intro) {
          let source;
          let i = 0;
          do {
            source = this.sources[i++];
            if (!source) {
              break;
            }
          } while (!source.content.trimStartAborted(charType));
        }
        return this;
      }
      trimEnd(charType) {
        const rx = new RegExp((charType || "\\s") + "+$");
        let source;
        let i = this.sources.length - 1;
        do {
          source = this.sources[i--];
          if (!source) {
            this.intro = this.intro.replace(rx, "");
            break;
          }
        } while (!source.content.trimEndAborted(charType));
        return this;
      }
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Color: () => Color,
  Flag: () => Flag,
  GCSocketClient: () => GCSocketClient,
  Guess: () => Guess,
  MapGameEndResult: () => MapGameEndResult,
  MapGameSettings: () => MapGameSettings,
  MapOptions: () => MapOptions,
  MapRoundResult: () => MapRoundResult,
  MapRoundSettings: () => MapRoundSettings,
  MockConnectionBuilder: () => MockConnectionBuilder,
  PlayerBase: () => PlayerBase,
  SendingBase: () => SendingBase,
  z: () => mod
});
module.exports = __toCommonJS(src_exports);
var signalR = __toESM(require_cjs());

// node_modules/zod/lib/index.mjs
var util;
(function(util5) {
  util5.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util5.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util5.assertNever = assertNever;
  util5.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util5.getValidEnumValues = (obj) => {
    const validKeys = util5.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util5.objectValues(filtered);
  };
  util5.objectValues = (obj) => {
    return util5.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util5.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object2) => {
    const keys2 = [];
    for (const key in object2) {
      if (Object.prototype.hasOwnProperty.call(object2, key)) {
        keys2.push(key);
      }
    }
    return keys2;
  };
  util5.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util5.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array2, separator = " | ") {
    return array2.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util5.joinValues = joinValues;
})(util || (util = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class extends Error {
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  get errors() {
    return this.issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
        fieldErrors[sub.path[0]].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};
var defaultErrorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be greater than ${issue.inclusive ? `or equal to ` : ``}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be greater than ${issue.inclusive ? `or equal to ` : ``}${new Date(issue.minimum)}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be less than ${issue.inclusive ? `or equal to ` : ``}${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be smaller than ${issue.inclusive ? `or equal to ` : ``}${new Date(issue.maximum)}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var overrideErrorMap = defaultErrorMap;
function setErrorMap(map2) {
  overrideErrorMap = map2;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path: path2, errorMaps, issueData } = params;
  const fullPath = [...path2, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map2 of maps) {
    errorMessage = map2(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: issueData.message || errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      ctx.schemaErrorMap,
      getErrorMap(),
      defaultErrorMap
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      syncPairs.push({
        key: await pair.key,
        value: await pair.value
      });
    }
    return ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (typeof value.value !== "undefined" || pair.alwaysSet) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== void 0 && x instanceof Promise;
var jsonStringifyReplacer = (_, value) => {
  if (typeof value === "bigint") {
    return value.toString();
  }
  return value;
};
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message === null || message === void 0 ? void 0 : message.message;
})(errorUtil || (errorUtil = {}));
var ParseInputLazyPath = class {
  constructor(parent, value, path2, key) {
    this.parent = parent;
    this.data = value;
    this._path = path2;
    this._key = key;
  }
  get path() {
    return this._path.concat(this._key);
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    const error = new ZodError(ctx.common.issues);
    return { success: false, error };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap, invalid_type_error, required_error, description } = params;
  if (errorMap && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid" or "required" in conjunction with custom error map.`);
  }
  if (errorMap)
    return { errorMap, description };
  const customMap = (iss, ctx) => {
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    if (typeof ctx.data === "undefined") {
      return { message: required_error !== null && required_error !== void 0 ? required_error : ctx.defaultError };
    }
    return { message: invalid_type_error !== null && invalid_type_error !== void 0 ? invalid_type_error : ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  constructor(def) {
    this.spa = this.safeParseAsync;
    this.superRefine = this._refinement;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.default = this.default.bind(this);
    this.describe = this.describe.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    var _a2;
    const ctx = {
      common: {
        issues: [],
        async: (_a2 = params === null || params === void 0 ? void 0 : params.async) !== null && _a2 !== void 0 ? _a2 : false,
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params === null || params === void 0 ? void 0 : params.errorMap,
        async: true
      },
      path: (params === null || params === void 0 ? void 0 : params.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: [], parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  optional() {
    return ZodOptional.create(this);
  }
  nullable() {
    return ZodNullable.create(this);
  }
  nullish() {
    return this.optional().nullable();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this);
  }
  or(option) {
    return ZodUnion.create([this, option]);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming);
  }
  transform(transform) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(void 0)
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var uuidRegex = /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var ZodString = class extends ZodType {
  constructor() {
    super(...arguments);
    this._regex = (regex, validation, message) => this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
    this.nonempty = (message) => this.min(1, errorUtil.errToObj(message));
    this.trim = () => new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(
        ctx2,
        {
          code: ZodIssueCode.invalid_type,
          expected: ZodParsedType.string,
          received: ctx2.parsedType
        }
      );
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch (_a2) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _addCheck(check) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this.min(len, message).max(len, message);
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / Math.pow(10, decCount);
}
var ZodNumber = class extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int");
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.bigint,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    ...processCreateParams(params)
  });
};
var ZodDate = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all(ctx.data.map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = ctx.data.map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return this.min(len, message).max(len, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
    };
  };
})(objectUtil || (objectUtil = {}));
var AugmentFactory = (def) => (augmentation) => {
  return new ZodObject({
    ...def,
    shape: () => ({
      ...def.shape(),
      ...augmentation
    })
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return ZodArray.create(deepPartialify(schema.element));
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = AugmentFactory(this._def);
    this.extend = AugmentFactory(this._def);
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys2 = util.objectKeys(shape);
    return this._cached = { shape, keys: keys2 };
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    for (const key in ctx.data) {
      if (!shapeKeys.includes(key)) {
        extraKeys.push(key);
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip")
        ;
      else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          syncPairs.push({
            key,
            value: await pair.value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          var _a2, _b, _c, _d;
          const defaultError = (_c = (_b = (_a2 = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a2, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: (_d = errorUtil.errToObj(message).message) !== null && _d !== void 0 ? _d : defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  merge(merging) {
    const merged = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  catchall(index) {
    return new ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    util.objectKeys(mask).map((key) => {
      if (this.shape[key])
        shape[key] = this.shape[key];
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    util.objectKeys(this.shape).map((key) => {
      if (util.objectKeys(mask).indexOf(key) === -1) {
        shape[key] = this.shape[key];
      }
    });
    return new ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    if (mask) {
      util.objectKeys(this.shape).map((key) => {
        if (util.objectKeys(mask).indexOf(key) === -1) {
          newShape[key] = this.shape[key];
        } else {
          newShape[key] = this.shape[key].optional();
        }
      });
      return new ZodObject({
        ...this._def,
        shape: () => newShape
      });
    } else {
      for (const key in this.shape) {
        const fieldSchema = this.shape[key];
        newShape[key] = fieldSchema.optional();
      }
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required() {
    const newShape = {};
    for (const key in this.shape) {
      const fieldSchema = this.shape[key];
      let newField = fieldSchema;
      while (newField instanceof ZodOptional) {
        newField = newField._def.innerType;
      }
      newShape[key] = newField;
    }
    return new ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var ZodDiscriminatedUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.options.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: this.validDiscriminatorValues,
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get validDiscriminatorValues() {
    return Array.from(this.options.keys());
  }
  get options() {
    return this._def.options;
  }
  static create(discriminator, types, params) {
    const options = /* @__PURE__ */ new Map();
    try {
      types.forEach((type2) => {
        const discriminatorValue = type2.shape[discriminator].value;
        options.set(discriminatorValue, type2);
      });
    } catch (e) {
      throw new Error("The discriminator value could not be extracted from all the provided schemas");
    }
    if (options.size !== types.length) {
      throw new Error("Some of the discriminator values are not unique");
    }
    return new ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        type: "array"
      });
      status.dirty();
    }
    const items = ctx.data.map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key))
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          defaultErrorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          ctx.schemaErrorMap,
          getErrorMap(),
          defaultErrorMap
        ].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn2 = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      return OK(async (...args) => {
        const error = new ZodError([]);
        const parsedArgs = await this._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await fn2(...parsedArgs);
        const parsedReturns = await this._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      return OK((...args) => {
        const parsedArgs = this._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = fn2(...parsedArgs.data);
        const parsedReturns = this._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
};
ZodFunction.create = (args, returns, params) => {
  return new ZodFunction({
    args: args ? args.rest(ZodUnknown.create()) : ZodTuple.create([]).rest(ZodUnknown.create()),
    returns: returns || ZodUnknown.create(),
    typeName: ZodFirstPartyTypeKind.ZodFunction,
    ...processCreateParams(params)
  });
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (this._def.values.indexOf(input.data) === -1) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (nativeEnumValues.indexOf(input.data) === -1) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data);
      if (ctx.common.async) {
        return Promise.resolve(processed).then((processed2) => {
          return this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
        });
      } else {
        return this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
      }
    }
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return base;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return base;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({ status: status.value, value: result }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type2, params) => {
  return new ZodOptional({
    innerType: type2,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type2, params) => {
  return new ZodNullable({
    innerType: type2,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type2, params) => {
  return new ZodOptional({
    innerType: type2,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var custom = (check, params = {}, fatal) => {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      if (!check(data)) {
        const p = typeof params === "function" ? params(data) : params;
        const p2 = typeof p === "string" ? { message: p } : p;
        ctx.addIssue({ code: "custom", ...p2, fatal });
      }
    });
  return ZodAny.create();
};
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params, true);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var mod = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getParsedType,
  ZodParsedType,
  makeIssue,
  EMPTY_PATH,
  addIssueToContext,
  ParseStatus,
  INVALID,
  DIRTY,
  OK,
  isAborted,
  isDirty,
  isValid,
  isAsync,
  jsonStringifyReplacer,
  ZodType,
  ZodString,
  ZodNumber,
  ZodBigInt,
  ZodBoolean,
  ZodDate,
  ZodUndefined,
  ZodNull,
  ZodAny,
  ZodUnknown,
  ZodNever,
  ZodVoid,
  ZodArray,
  get objectUtil() {
    return objectUtil;
  },
  ZodObject,
  ZodUnion,
  ZodDiscriminatedUnion,
  ZodIntersection,
  ZodTuple,
  ZodRecord,
  ZodMap,
  ZodSet,
  ZodFunction,
  ZodLazy,
  ZodLiteral,
  ZodEnum,
  ZodNativeEnum,
  ZodPromise,
  ZodEffects,
  ZodTransformer: ZodEffects,
  ZodOptional,
  ZodNullable,
  ZodDefault,
  ZodNaN,
  BRAND,
  ZodBranded,
  custom,
  Schema: ZodType,
  ZodSchema: ZodType,
  late,
  get ZodFirstPartyTypeKind() {
    return ZodFirstPartyTypeKind;
  },
  any: anyType,
  array: arrayType,
  bigint: bigIntType,
  boolean: booleanType,
  date: dateType,
  discriminatedUnion: discriminatedUnionType,
  effect: effectsType,
  "enum": enumType,
  "function": functionType,
  "instanceof": instanceOfType,
  intersection: intersectionType,
  lazy: lazyType,
  literal: literalType,
  map: mapType,
  nan: nanType,
  nativeEnum: nativeEnumType,
  never: neverType,
  "null": nullType,
  nullable: nullableType,
  number: numberType,
  object: objectType,
  oboolean,
  onumber,
  optional: optionalType,
  ostring,
  preprocess: preprocessType,
  promise: promiseType,
  record: recordType,
  set: setType,
  strictObject: strictObjectType,
  string: stringType,
  transformer: effectsType,
  tuple: tupleType,
  "undefined": undefinedType,
  union: unionType,
  unknown: unknownType,
  "void": voidType,
  ZodIssueCode,
  quotelessJson,
  ZodError,
  defaultErrorMap,
  setErrorMap,
  getErrorMap
});

// node_modules/vitest/dist/chunk-runtime-chain.98d42d89.mjs
var import_util = __toESM(require("util"), 1);

// node_modules/vitest/dist/chunk-mock-date.bc81a3ac.mjs
var import_path = __toESM(require("path"), 1);
var import_tty = __toESM(require("tty"), 1);
var picocolors = { exports: {} };
var tty = import_tty.default;
var isColorSupported = !("NO_COLOR" in process.env || process.argv.includes("--no-color")) && ("FORCE_COLOR" in process.env || process.argv.includes("--color") || process.platform === "win32" || tty.isatty(1) && process.env.TERM !== "dumb" || "CI" in process.env);
var formatter = (open, close, replace = open) => (input) => {
  let string2 = "" + input;
  let index = string2.indexOf(close, open.length);
  return ~index ? open + replaceClose(string2, close, replace, index) + close : open + string2 + close;
};
var replaceClose = (string2, close, replace, index) => {
  let start = string2.substring(0, index) + replace;
  let end = string2.substring(index + close.length);
  let nextIndex = end.indexOf(close);
  return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
var createColors = (enabled = isColorSupported) => ({
  isColorSupported: enabled,
  reset: enabled ? (s) => `\x1B[0m${s}\x1B[0m` : String,
  bold: enabled ? formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m") : String,
  dim: enabled ? formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m") : String,
  italic: enabled ? formatter("\x1B[3m", "\x1B[23m") : String,
  underline: enabled ? formatter("\x1B[4m", "\x1B[24m") : String,
  inverse: enabled ? formatter("\x1B[7m", "\x1B[27m") : String,
  hidden: enabled ? formatter("\x1B[8m", "\x1B[28m") : String,
  strikethrough: enabled ? formatter("\x1B[9m", "\x1B[29m") : String,
  black: enabled ? formatter("\x1B[30m", "\x1B[39m") : String,
  red: enabled ? formatter("\x1B[31m", "\x1B[39m") : String,
  green: enabled ? formatter("\x1B[32m", "\x1B[39m") : String,
  yellow: enabled ? formatter("\x1B[33m", "\x1B[39m") : String,
  blue: enabled ? formatter("\x1B[34m", "\x1B[39m") : String,
  magenta: enabled ? formatter("\x1B[35m", "\x1B[39m") : String,
  cyan: enabled ? formatter("\x1B[36m", "\x1B[39m") : String,
  white: enabled ? formatter("\x1B[37m", "\x1B[39m") : String,
  gray: enabled ? formatter("\x1B[90m", "\x1B[39m") : String,
  bgBlack: enabled ? formatter("\x1B[40m", "\x1B[49m") : String,
  bgRed: enabled ? formatter("\x1B[41m", "\x1B[49m") : String,
  bgGreen: enabled ? formatter("\x1B[42m", "\x1B[49m") : String,
  bgYellow: enabled ? formatter("\x1B[43m", "\x1B[49m") : String,
  bgBlue: enabled ? formatter("\x1B[44m", "\x1B[49m") : String,
  bgMagenta: enabled ? formatter("\x1B[45m", "\x1B[49m") : String,
  bgCyan: enabled ? formatter("\x1B[46m", "\x1B[49m") : String,
  bgWhite: enabled ? formatter("\x1B[47m", "\x1B[49m") : String
});
picocolors.exports = createColors();
picocolors.exports.createColors = createColors;
function normalizeWindowsPath(input = "") {
  if (!input.includes("\\")) {
    return input;
  }
  return input.replace(/\\/g, "/");
}
var _UNC_REGEX = /^[/][/]/;
var _UNC_DRIVE_REGEX = /^[/][/]([.]{1,2}[/])?([a-zA-Z]):[/]/;
var _IS_ABSOLUTE_RE = /^\/|^\\|^[a-zA-Z]:[/\\]/;
var sep = "/";
var delimiter = ":";
var normalize = function(path2) {
  if (path2.length === 0) {
    return ".";
  }
  path2 = normalizeWindowsPath(path2);
  const isUNCPath = path2.match(_UNC_REGEX);
  const hasUNCDrive = isUNCPath && path2.match(_UNC_DRIVE_REGEX);
  const isPathAbsolute = isAbsolute(path2);
  const trailingSeparator = path2[path2.length - 1] === "/";
  path2 = normalizeString(path2, !isPathAbsolute);
  if (path2.length === 0) {
    if (isPathAbsolute) {
      return "/";
    }
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) {
    path2 += "/";
  }
  if (isUNCPath) {
    if (hasUNCDrive) {
      return `//./${path2}`;
    }
    return `//${path2}`;
  }
  return isPathAbsolute && !isAbsolute(path2) ? `/${path2}` : path2;
};
var join = function(...args) {
  if (args.length === 0) {
    return ".";
  }
  let joined;
  for (let i = 0; i < args.length; ++i) {
    const arg = args[i];
    if (arg.length > 0) {
      if (joined === void 0) {
        joined = arg;
      } else {
        joined += `/${arg}`;
      }
    }
  }
  if (joined === void 0) {
    return ".";
  }
  return normalize(joined);
};
var resolve = function(...args) {
  args = args.map((arg) => normalizeWindowsPath(arg));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path2 = i >= 0 ? args[i] : process.cwd();
    if (path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path2);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path2, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let i = 0; i <= path2.length; ++i) {
    if (i < path2.length) {
      char = path2[i];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === i - 1 || dots === 1)
        ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path2.slice(lastSlash + 1, i)}`;
        } else {
          res = path2.slice(lastSlash + 1, i);
        }
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
var toNamespacedPath = function(p) {
  return normalizeWindowsPath(p);
};
var extname = function(p) {
  return import_path.default.posix.extname(normalizeWindowsPath(p));
};
var relative = function(from, to) {
  return import_path.default.posix.relative(normalizeWindowsPath(from), normalizeWindowsPath(to));
};
var dirname = function(p) {
  return import_path.default.posix.dirname(normalizeWindowsPath(p));
};
var format = function(p) {
  return normalizeWindowsPath(import_path.default.posix.format(p));
};
var basename = function(p, ext) {
  return import_path.default.posix.basename(normalizeWindowsPath(p), ext);
};
var parse = function(p) {
  return import_path.default.posix.parse(normalizeWindowsPath(p));
};
var _path = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  sep,
  delimiter,
  normalize,
  join,
  resolve,
  normalizeString,
  isAbsolute,
  toNamespacedPath,
  extname,
  relative,
  dirname,
  format,
  basename,
  parse
});
({
  ..._path
});
var RealDate = Date;
var now = null;
var MockDate = class extends RealDate {
  constructor(y, m, d2, h, M, s, ms) {
    super();
    let date;
    switch (arguments.length) {
      case 0:
        if (now !== null)
          date = new RealDate(now.valueOf());
        else
          date = new RealDate();
        break;
      case 1:
        date = new RealDate(y);
        break;
      default:
        d2 = typeof d2 === "undefined" ? 1 : d2;
        h = h || 0;
        M = M || 0;
        s = s || 0;
        ms = ms || 0;
        date = new RealDate(y, m, d2, h, M, s, ms);
        break;
    }
    return date;
  }
};
MockDate.UTC = RealDate.UTC;
MockDate.now = function() {
  return new MockDate().valueOf();
};
MockDate.parse = function(dateString) {
  return RealDate.parse(dateString);
};
MockDate.toString = function() {
  return RealDate.toString();
};
function mockDate(date) {
  const dateObj = new RealDate(date.valueOf());
  if (isNaN(dateObj.getTime()))
    throw new TypeError(`mockdate: The time set is an invalid date: ${date}`);
  globalThis.Date = MockDate;
  now = dateObj.valueOf();
}
function resetDate() {
  globalThis.Date = RealDate;
}
function notNullish(v2) {
  return v2 != null;
}
function slash(str) {
  return str.replace(/\\/g, "/");
}
var noop = () => {
};
function isObject(item) {
  return item != null && typeof item === "object" && !Array.isArray(item);
}
function assertTypes(value, name, types) {
  const receivedType = typeof value;
  const pass = types.includes(receivedType);
  if (!pass)
    throw new TypeError(`${name} value must be ${types.join(" or ")}, received "${receivedType}"`);
}
function getNames(task) {
  const names = [task.name];
  let current = task;
  while ((current == null ? void 0 : current.suite) || (current == null ? void 0 : current.file)) {
    current = current.suite || current.file;
    if (current == null ? void 0 : current.name)
      names.unshift(current.name);
  }
  return names;
}
var _a;
var isNode = typeof process < "u" && typeof process.stdout < "u" && !((_a = process.versions) == null ? void 0 : _a.deno) && !globalThis.window;
var isWindows = isNode && process.platform === "win32";
function resetModules(modules, resetMocks = false) {
  const skipPaths = [
    /\/vitest\/dist\//,
    /vitest-virtual-\w+\/dist/,
    /@vitest\/dist/,
    ...!resetMocks ? [/^mock:/] : []
  ];
  modules.forEach((_, path2) => {
    if (skipPaths.some((re) => re.test(path2)))
      return;
    modules.delete(path2);
  });
}
function getFullName(task) {
  return getNames(task).join(picocolors.exports.dim(" > "));
}
function getCallLastIndex(code) {
  let charIndex = -1;
  let inString = null;
  let startedBracers = 0;
  let endedBracers = 0;
  let beforeChar = null;
  while (charIndex <= code.length) {
    beforeChar = code[charIndex];
    charIndex++;
    const char = code[charIndex];
    const isCharString = char === '"' || char === "'" || char === "`";
    if (isCharString && beforeChar !== "\\") {
      if (inString === char)
        inString = null;
      else if (!inString)
        inString = char;
    }
    if (!inString) {
      if (char === "(")
        startedBracers++;
      if (char === ")")
        endedBracers++;
    }
    if (startedBracers && endedBracers && startedBracers === endedBracers)
      return charIndex;
  }
  return null;
}

// node_modules/chai/index.mjs
var import_index = __toESM(require_chai2(), 1);
var expect = import_index.default.expect;
var version = import_index.default.version;
var Assertion = import_index.default.Assertion;
var AssertionError = import_index.default.AssertionError;
var util2 = import_index.default.util;
var config = import_index.default.config;
var use = import_index.default.use;
var should = import_index.default.should;
var assert = import_index.default.assert;
var core = import_index.default.core;

// node_modules/vitest/dist/chunk-runtime-chain.98d42d89.mjs
init_vendor_commonjsHelpers_4da45ef5();

// node_modules/vitest/dist/chunk-utils-global.fa20c2f6.mjs
function getWorkerState() {
  return globalThis.__vitest_worker__;
}

// node_modules/vitest/dist/chunk-utils-timers.b48455ed.mjs
var {
  setTimeout: safeSetTimeout,
  setInterval: safeSetInterval,
  clearInterval: safeClearInterval,
  clearTimeout: safeClearTimeout
} = globalThis;
function withSafeTimers(fn2) {
  const currentSetTimeout = globalThis.setTimeout;
  const currentSetInterval = globalThis.setInterval;
  const currentClearInterval = globalThis.clearInterval;
  const currentClearTimeout = globalThis.clearTimeout;
  try {
    globalThis.setTimeout = safeSetTimeout;
    globalThis.setInterval = safeSetInterval;
    globalThis.clearInterval = safeClearInterval;
    globalThis.clearTimeout = safeClearTimeout;
    const result = fn2();
    return result;
  } finally {
    globalThis.setTimeout = currentSetTimeout;
    globalThis.setInterval = currentSetInterval;
    globalThis.clearInterval = currentClearInterval;
    globalThis.clearTimeout = currentClearTimeout;
  }
}

// node_modules/vitest/dist/chunk-runtime-rpc.b50ab560.mjs
var rpc = () => {
  const { rpc: rpc2 } = getWorkerState();
  return new Proxy(rpc2, {
    get(target, p, handler) {
      const sendCall = Reflect.get(target, p, handler);
      const safeSendCall = (...args) => withSafeTimers(() => sendCall(...args));
      safeSendCall.asEvent = sendCall.asEvent;
      return safeSendCall;
    }
  });
};

// node_modules/vitest/dist/chunk-runtime-chain.98d42d89.mjs
var import_fs = __toESM(require("fs"), 1);

// node_modules/vitest/dist/chunk-utils-source-map.94107ee8.mjs
var build = {};
var ansiStyles$1 = { exports: {} };
(function(module2) {
  const ANSI_BACKGROUND_OFFSET2 = 10;
  const wrapAnsi2562 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
  const wrapAnsi16m2 = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
  function assembleStyles2() {
    const codes = /* @__PURE__ */ new Map();
    const styles = {
      modifier: {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        overline: [53, 55],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29]
      },
      color: {
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        blackBright: [90, 39],
        redBright: [91, 39],
        greenBright: [92, 39],
        yellowBright: [93, 39],
        blueBright: [94, 39],
        magentaBright: [95, 39],
        cyanBright: [96, 39],
        whiteBright: [97, 39]
      },
      bgColor: {
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgBlackBright: [100, 49],
        bgRedBright: [101, 49],
        bgGreenBright: [102, 49],
        bgYellowBright: [103, 49],
        bgBlueBright: [104, 49],
        bgMagentaBright: [105, 49],
        bgCyanBright: [106, 49],
        bgWhiteBright: [107, 49]
      }
    };
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)) {
      for (const [styleName, style] of Object.entries(group)) {
        styles[styleName] = {
          open: `\x1B[${style[0]}m`,
          close: `\x1B[${style[1]}m`
        };
        group[styleName] = styles[styleName];
        codes.set(style[0], style[1]);
      }
      Object.defineProperty(styles, groupName, {
        value: group,
        enumerable: false
      });
    }
    Object.defineProperty(styles, "codes", {
      value: codes,
      enumerable: false
    });
    styles.color.close = "\x1B[39m";
    styles.bgColor.close = "\x1B[49m";
    styles.color.ansi256 = wrapAnsi2562();
    styles.color.ansi16m = wrapAnsi16m2();
    styles.bgColor.ansi256 = wrapAnsi2562(ANSI_BACKGROUND_OFFSET2);
    styles.bgColor.ansi16m = wrapAnsi16m2(ANSI_BACKGROUND_OFFSET2);
    Object.defineProperties(styles, {
      rgbToAnsi256: {
        value: (red, green, blue) => {
          if (red === green && green === blue) {
            if (red < 8) {
              return 16;
            }
            if (red > 248) {
              return 231;
            }
            return Math.round((red - 8) / 247 * 24) + 232;
          }
          return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
        },
        enumerable: false
      },
      hexToRgb: {
        value: (hex) => {
          const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
          if (!matches) {
            return [0, 0, 0];
          }
          let { colorString } = matches.groups;
          if (colorString.length === 3) {
            colorString = colorString.split("").map((character) => character + character).join("");
          }
          const integer = Number.parseInt(colorString, 16);
          return [
            integer >> 16 & 255,
            integer >> 8 & 255,
            integer & 255
          ];
        },
        enumerable: false
      },
      hexToAnsi256: {
        value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
        enumerable: false
      }
    });
    return styles;
  }
  Object.defineProperty(module2, "exports", {
    enumerable: true,
    get: assembleStyles2
  });
})(ansiStyles$1);
var collections = {};
Object.defineProperty(collections, "__esModule", {
  value: true
});
collections.printIteratorEntries = printIteratorEntries;
collections.printIteratorValues = printIteratorValues;
collections.printListItems = printListItems;
collections.printObjectProperties = printObjectProperties;
var getKeysOfEnumerableProperties = (object2, compareKeys) => {
  const keys2 = Object.keys(object2).sort(compareKeys);
  if (Object.getOwnPropertySymbols) {
    Object.getOwnPropertySymbols(object2).forEach((symbol) => {
      if (Object.getOwnPropertyDescriptor(object2, symbol).enumerable) {
        keys2.push(symbol);
      }
    });
  }
  return keys2;
};
function printIteratorEntries(iterator, config2, indentation, depth, refs, printer2, separator = ": ") {
  let result = "";
  let current = iterator.next();
  if (!current.done) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    while (!current.done) {
      const name = printer2(
        current.value[0],
        config2,
        indentationNext,
        depth,
        refs
      );
      const value = printer2(
        current.value[1],
        config2,
        indentationNext,
        depth,
        refs
      );
      result += indentationNext + name + separator + value;
      current = iterator.next();
      if (!current.done) {
        result += "," + config2.spacingInner;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
function printIteratorValues(iterator, config2, indentation, depth, refs, printer2) {
  let result = "";
  let current = iterator.next();
  if (!current.done) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    while (!current.done) {
      result += indentationNext + printer2(current.value, config2, indentationNext, depth, refs);
      current = iterator.next();
      if (!current.done) {
        result += "," + config2.spacingInner;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
function printListItems(list, config2, indentation, depth, refs, printer2) {
  let result = "";
  if (list.length) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    for (let i = 0; i < list.length; i++) {
      result += indentationNext;
      if (i in list) {
        result += printer2(list[i], config2, indentationNext, depth, refs);
      }
      if (i < list.length - 1) {
        result += "," + config2.spacingInner;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
function printObjectProperties(val, config2, indentation, depth, refs, printer2) {
  let result = "";
  const keys2 = getKeysOfEnumerableProperties(val, config2.compareKeys);
  if (keys2.length) {
    result += config2.spacingOuter;
    const indentationNext = indentation + config2.indent;
    for (let i = 0; i < keys2.length; i++) {
      const key = keys2[i];
      const name = printer2(key, config2, indentationNext, depth, refs);
      const value = printer2(val[key], config2, indentationNext, depth, refs);
      result += indentationNext + name + ": " + value;
      if (i < keys2.length - 1) {
        result += "," + config2.spacingInner;
      } else if (!config2.min) {
        result += ",";
      }
    }
    result += config2.spacingOuter + indentation;
  }
  return result;
}
var AsymmetricMatcher$1 = {};
Object.defineProperty(AsymmetricMatcher$1, "__esModule", {
  value: true
});
AsymmetricMatcher$1.test = AsymmetricMatcher$1.serialize = AsymmetricMatcher$1.default = void 0;
var _collections$3 = collections;
var global$1 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  } else if (typeof global$1 !== "undefined") {
    return global$1;
  } else if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
}();
var Symbol$2 = global$1["jest-symbol-do-not-touch"] || global$1.Symbol;
var asymmetricMatcher = typeof Symbol$2 === "function" && Symbol$2.for ? Symbol$2.for("jest.asymmetricMatcher") : 1267621;
var SPACE$2 = " ";
var serialize$6 = (val, config2, indentation, depth, refs, printer2) => {
  const stringedValue = val.toString();
  if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
    if (++depth > config2.maxDepth) {
      return "[" + stringedValue + "]";
    }
    return stringedValue + SPACE$2 + "[" + (0, _collections$3.printListItems)(
      val.sample,
      config2,
      indentation,
      depth,
      refs,
      printer2
    ) + "]";
  }
  if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
    if (++depth > config2.maxDepth) {
      return "[" + stringedValue + "]";
    }
    return stringedValue + SPACE$2 + "{" + (0, _collections$3.printObjectProperties)(
      val.sample,
      config2,
      indentation,
      depth,
      refs,
      printer2
    ) + "}";
  }
  if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") {
    return stringedValue + SPACE$2 + printer2(val.sample, config2, indentation, depth, refs);
  }
  if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") {
    return stringedValue + SPACE$2 + printer2(val.sample, config2, indentation, depth, refs);
  }
  return val.toAsymmetricMatcher();
};
AsymmetricMatcher$1.serialize = serialize$6;
var test$6 = (val) => val && val.$$typeof === asymmetricMatcher;
AsymmetricMatcher$1.test = test$6;
var plugin$6 = {
  serialize: serialize$6,
  test: test$6
};
var _default$7 = plugin$6;
AsymmetricMatcher$1.default = _default$7;
var ConvertAnsi = {};
var ansiRegex$1 = ({ onlyFirst = false } = {}) => {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
};
Object.defineProperty(ConvertAnsi, "__esModule", {
  value: true
});
ConvertAnsi.test = ConvertAnsi.serialize = ConvertAnsi.default = void 0;
var _ansiRegex = _interopRequireDefault$2(ansiRegex$1);
var _ansiStyles$1 = _interopRequireDefault$2(ansiStyles$1.exports);
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var toHumanReadableAnsi = (text) => text.replace((0, _ansiRegex.default)(), (match) => {
  switch (match) {
    case _ansiStyles$1.default.red.close:
    case _ansiStyles$1.default.green.close:
    case _ansiStyles$1.default.cyan.close:
    case _ansiStyles$1.default.gray.close:
    case _ansiStyles$1.default.white.close:
    case _ansiStyles$1.default.yellow.close:
    case _ansiStyles$1.default.bgRed.close:
    case _ansiStyles$1.default.bgGreen.close:
    case _ansiStyles$1.default.bgYellow.close:
    case _ansiStyles$1.default.inverse.close:
    case _ansiStyles$1.default.dim.close:
    case _ansiStyles$1.default.bold.close:
    case _ansiStyles$1.default.reset.open:
    case _ansiStyles$1.default.reset.close:
      return "</>";
    case _ansiStyles$1.default.red.open:
      return "<red>";
    case _ansiStyles$1.default.green.open:
      return "<green>";
    case _ansiStyles$1.default.cyan.open:
      return "<cyan>";
    case _ansiStyles$1.default.gray.open:
      return "<gray>";
    case _ansiStyles$1.default.white.open:
      return "<white>";
    case _ansiStyles$1.default.yellow.open:
      return "<yellow>";
    case _ansiStyles$1.default.bgRed.open:
      return "<bgRed>";
    case _ansiStyles$1.default.bgGreen.open:
      return "<bgGreen>";
    case _ansiStyles$1.default.bgYellow.open:
      return "<bgYellow>";
    case _ansiStyles$1.default.inverse.open:
      return "<inverse>";
    case _ansiStyles$1.default.dim.open:
      return "<dim>";
    case _ansiStyles$1.default.bold.open:
      return "<bold>";
    default:
      return "";
  }
});
var test$5 = (val) => typeof val === "string" && !!val.match((0, _ansiRegex.default)());
ConvertAnsi.test = test$5;
var serialize$5 = (val, config2, indentation, depth, refs, printer2) => printer2(toHumanReadableAnsi(val), config2, indentation, depth, refs);
ConvertAnsi.serialize = serialize$5;
var plugin$5 = {
  serialize: serialize$5,
  test: test$5
};
var _default$6 = plugin$5;
ConvertAnsi.default = _default$6;
var DOMCollection$1 = {};
Object.defineProperty(DOMCollection$1, "__esModule", {
  value: true
});
DOMCollection$1.test = DOMCollection$1.serialize = DOMCollection$1.default = void 0;
var _collections$2 = collections;
var SPACE$1 = " ";
var OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"];
var ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
var testName = (name) => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
var test$4 = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
DOMCollection$1.test = test$4;
var isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap";
var serialize$4 = (collection, config2, indentation, depth, refs, printer2) => {
  const name = collection.constructor.name;
  if (++depth > config2.maxDepth) {
    return "[" + name + "]";
  }
  return (config2.min ? "" : name + SPACE$1) + (OBJECT_NAMES.indexOf(name) !== -1 ? "{" + (0, _collections$2.printObjectProperties)(
    isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => {
      props[attribute.name] = attribute.value;
      return props;
    }, {}) : { ...collection },
    config2,
    indentation,
    depth,
    refs,
    printer2
  ) + "}" : "[" + (0, _collections$2.printListItems)(
    Array.from(collection),
    config2,
    indentation,
    depth,
    refs,
    printer2
  ) + "]");
};
DOMCollection$1.serialize = serialize$4;
var plugin$4 = {
  serialize: serialize$4,
  test: test$4
};
var _default$5 = plugin$4;
DOMCollection$1.default = _default$5;
var DOMElement$1 = {};
var markup = {};
var escapeHTML$1 = {};
Object.defineProperty(escapeHTML$1, "__esModule", {
  value: true
});
escapeHTML$1.default = escapeHTML;
function escapeHTML(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
Object.defineProperty(markup, "__esModule", {
  value: true
});
markup.printText = markup.printProps = markup.printElementAsLeaf = markup.printElement = markup.printComment = markup.printChildren = void 0;
var _escapeHTML = _interopRequireDefault$1(escapeHTML$1);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var printProps = (keys2, props, config2, indentation, depth, refs, printer2) => {
  const indentationNext = indentation + config2.indent;
  const colors = config2.colors;
  return keys2.map((key) => {
    const value = props[key];
    let printed = printer2(value, config2, indentationNext, depth, refs);
    if (typeof value !== "string") {
      if (printed.indexOf("\n") !== -1) {
        printed = config2.spacingOuter + indentationNext + printed + config2.spacingOuter + indentation;
      }
      printed = "{" + printed + "}";
    }
    return config2.spacingInner + indentation + colors.prop.open + key + colors.prop.close + "=" + colors.value.open + printed + colors.value.close;
  }).join("");
};
markup.printProps = printProps;
var printChildren = (children, config2, indentation, depth, refs, printer2) => children.map(
  (child) => config2.spacingOuter + indentation + (typeof child === "string" ? printText(child, config2) : printer2(child, config2, indentation, depth, refs))
).join("");
markup.printChildren = printChildren;
var printText = (text, config2) => {
  const contentColor = config2.colors.content;
  return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
};
markup.printText = printText;
var printComment = (comment, config2) => {
  const commentColor = config2.colors.comment;
  return commentColor.open + "<!--" + (0, _escapeHTML.default)(comment) + "-->" + commentColor.close;
};
markup.printComment = printComment;
var printElement = (type2, printedProps, printedChildren, config2, indentation) => {
  const tagColor = config2.colors.tag;
  return tagColor.open + "<" + type2 + (printedProps && tagColor.close + printedProps + config2.spacingOuter + indentation + tagColor.open) + (printedChildren ? ">" + tagColor.close + printedChildren + config2.spacingOuter + indentation + tagColor.open + "</" + type2 : (printedProps && !config2.min ? "" : " ") + "/") + ">" + tagColor.close;
};
markup.printElement = printElement;
var printElementAsLeaf = (type2, config2) => {
  const tagColor = config2.colors.tag;
  return tagColor.open + "<" + type2 + tagColor.close + " \u2026" + tagColor.open + " />" + tagColor.close;
};
markup.printElementAsLeaf = printElementAsLeaf;
Object.defineProperty(DOMElement$1, "__esModule", {
  value: true
});
DOMElement$1.test = DOMElement$1.serialize = DOMElement$1.default = void 0;
var _markup$2 = markup;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
var FRAGMENT_NODE = 11;
var ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
var testHasAttribute = (val) => {
  try {
    return typeof val.hasAttribute === "function" && val.hasAttribute("is");
  } catch {
    return false;
  }
};
var testNode = (val) => {
  const constructorName = val.constructor.name;
  const { nodeType, tagName } = val;
  const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
  return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
};
var test$3 = (val) => {
  var _val$constructor;
  return (val === null || val === void 0 ? void 0 : (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode(val);
};
DOMElement$1.test = test$3;
function nodeIsText(node) {
  return node.nodeType === TEXT_NODE;
}
function nodeIsComment(node) {
  return node.nodeType === COMMENT_NODE;
}
function nodeIsFragment(node) {
  return node.nodeType === FRAGMENT_NODE;
}
var serialize$3 = (node, config2, indentation, depth, refs, printer2) => {
  if (nodeIsText(node)) {
    return (0, _markup$2.printText)(node.data, config2);
  }
  if (nodeIsComment(node)) {
    return (0, _markup$2.printComment)(node.data, config2);
  }
  const type2 = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
  if (++depth > config2.maxDepth) {
    return (0, _markup$2.printElementAsLeaf)(type2, config2);
  }
  return (0, _markup$2.printElement)(
    type2,
    (0, _markup$2.printProps)(
      nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr) => attr.name).sort(),
      nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => {
        props[attribute.name] = attribute.value;
        return props;
      }, {}),
      config2,
      indentation + config2.indent,
      depth,
      refs,
      printer2
    ),
    (0, _markup$2.printChildren)(
      Array.prototype.slice.call(node.childNodes || node.children),
      config2,
      indentation + config2.indent,
      depth,
      refs,
      printer2
    ),
    config2,
    indentation
  );
};
DOMElement$1.serialize = serialize$3;
var plugin$3 = {
  serialize: serialize$3,
  test: test$3
};
var _default$4 = plugin$3;
DOMElement$1.default = _default$4;
var Immutable$1 = {};
Object.defineProperty(Immutable$1, "__esModule", {
  value: true
});
Immutable$1.test = Immutable$1.serialize = Immutable$1.default = void 0;
var _collections$1 = collections;
var IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
var IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
var IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
var IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
var IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
var IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@";
var IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
var IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
var IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
var getImmutableName = (name) => "Immutable." + name;
var printAsLeaf = (name) => "[" + name + "]";
var SPACE = " ";
var LAZY = "\u2026";
var printImmutableEntries = (val, config2, indentation, depth, refs, printer2, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : getImmutableName(type2) + SPACE + "{" + (0, _collections$1.printIteratorEntries)(
  val.entries(),
  config2,
  indentation,
  depth,
  refs,
  printer2
) + "}";
function getRecordEntries(val) {
  let i = 0;
  return {
    next() {
      if (i < val._keys.length) {
        const key = val._keys[i++];
        return {
          done: false,
          value: [key, val.get(key)]
        };
      }
      return {
        done: true,
        value: void 0
      };
    }
  };
}
var printImmutableRecord = (val, config2, indentation, depth, refs, printer2) => {
  const name = getImmutableName(val._name || "Record");
  return ++depth > config2.maxDepth ? printAsLeaf(name) : name + SPACE + "{" + (0, _collections$1.printIteratorEntries)(
    getRecordEntries(val),
    config2,
    indentation,
    depth,
    refs,
    printer2
  ) + "}";
};
var printImmutableSeq = (val, config2, indentation, depth, refs, printer2) => {
  const name = getImmutableName("Seq");
  if (++depth > config2.maxDepth) {
    return printAsLeaf(name);
  }
  if (val[IS_KEYED_SENTINEL]) {
    return name + SPACE + "{" + (val._iter || val._object ? (0, _collections$1.printIteratorEntries)(
      val.entries(),
      config2,
      indentation,
      depth,
      refs,
      printer2
    ) : LAZY) + "}";
  }
  return name + SPACE + "[" + (val._iter || val._array || val._collection || val._iterable ? (0, _collections$1.printIteratorValues)(
    val.values(),
    config2,
    indentation,
    depth,
    refs,
    printer2
  ) : LAZY) + "]";
};
var printImmutableValues = (val, config2, indentation, depth, refs, printer2, type2) => ++depth > config2.maxDepth ? printAsLeaf(getImmutableName(type2)) : getImmutableName(type2) + SPACE + "[" + (0, _collections$1.printIteratorValues)(
  val.values(),
  config2,
  indentation,
  depth,
  refs,
  printer2
) + "]";
var serialize$2 = (val, config2, indentation, depth, refs, printer2) => {
  if (val[IS_MAP_SENTINEL]) {
    return printImmutableEntries(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer2,
      val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map"
    );
  }
  if (val[IS_LIST_SENTINEL]) {
    return printImmutableValues(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer2,
      "List"
    );
  }
  if (val[IS_SET_SENTINEL]) {
    return printImmutableValues(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer2,
      val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set"
    );
  }
  if (val[IS_STACK_SENTINEL]) {
    return printImmutableValues(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer2,
      "Stack"
    );
  }
  if (val[IS_SEQ_SENTINEL]) {
    return printImmutableSeq(val, config2, indentation, depth, refs, printer2);
  }
  return printImmutableRecord(val, config2, indentation, depth, refs, printer2);
};
Immutable$1.serialize = serialize$2;
var test$2 = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
Immutable$1.test = test$2;
var plugin$2 = {
  serialize: serialize$2,
  test: test$2
};
var _default$3 = plugin$2;
Immutable$1.default = _default$3;
var ReactElement$1 = {};
var reactIs = { exports: {} };
var reactIs_production_min = {};
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min)
    return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = 60103, c = 60106, d2 = 60107, e = 60108, f2 = 60114, g2 = 60109, h = 60110, k = 60112, l = 60113, m = 60120, n2 = 60115, p = 60116, q = 60121, r = 60122, u2 = 60117, v2 = 60129, w = 60131;
  if ("function" === typeof Symbol && Symbol.for) {
    var x = Symbol.for;
    b = x("react.element");
    c = x("react.portal");
    d2 = x("react.fragment");
    e = x("react.strict_mode");
    f2 = x("react.profiler");
    g2 = x("react.provider");
    h = x("react.context");
    k = x("react.forward_ref");
    l = x("react.suspense");
    m = x("react.suspense_list");
    n2 = x("react.memo");
    p = x("react.lazy");
    q = x("react.block");
    r = x("react.server.block");
    u2 = x("react.fundamental");
    v2 = x("react.debug_trace_mode");
    w = x("react.legacy_hidden");
  }
  function y(a) {
    if ("object" === typeof a && null !== a) {
      var t = a.$$typeof;
      switch (t) {
        case b:
          switch (a = a.type, a) {
            case d2:
            case f2:
            case e:
            case l:
            case m:
              return a;
            default:
              switch (a = a && a.$$typeof, a) {
                case h:
                case k:
                case p:
                case n2:
                case g2:
                  return a;
                default:
                  return t;
              }
          }
        case c:
          return t;
      }
    }
  }
  var z = g2, A = b, B = k, C = d2, D = p, E = n2, F = c, G = f2, H = e, I2 = l;
  reactIs_production_min.ContextConsumer = h;
  reactIs_production_min.ContextProvider = z;
  reactIs_production_min.Element = A;
  reactIs_production_min.ForwardRef = B;
  reactIs_production_min.Fragment = C;
  reactIs_production_min.Lazy = D;
  reactIs_production_min.Memo = E;
  reactIs_production_min.Portal = F;
  reactIs_production_min.Profiler = G;
  reactIs_production_min.StrictMode = H;
  reactIs_production_min.Suspense = I2;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a) {
    return y(a) === h;
  };
  reactIs_production_min.isContextProvider = function(a) {
    return y(a) === g2;
  };
  reactIs_production_min.isElement = function(a) {
    return "object" === typeof a && null !== a && a.$$typeof === b;
  };
  reactIs_production_min.isForwardRef = function(a) {
    return y(a) === k;
  };
  reactIs_production_min.isFragment = function(a) {
    return y(a) === d2;
  };
  reactIs_production_min.isLazy = function(a) {
    return y(a) === p;
  };
  reactIs_production_min.isMemo = function(a) {
    return y(a) === n2;
  };
  reactIs_production_min.isPortal = function(a) {
    return y(a) === c;
  };
  reactIs_production_min.isProfiler = function(a) {
    return y(a) === f2;
  };
  reactIs_production_min.isStrictMode = function(a) {
    return y(a) === e;
  };
  reactIs_production_min.isSuspense = function(a) {
    return y(a) === l;
  };
  reactIs_production_min.isValidElementType = function(a) {
    return "string" === typeof a || "function" === typeof a || a === d2 || a === f2 || a === v2 || a === e || a === l || a === m || a === w || "object" === typeof a && null !== a && (a.$$typeof === p || a.$$typeof === n2 || a.$$typeof === g2 || a.$$typeof === h || a.$$typeof === k || a.$$typeof === u2 || a.$$typeof === q || a[0] === r) ? true : false;
  };
  reactIs_production_min.typeOf = y;
  return reactIs_production_min;
}
var reactIs_development = {};
var hasRequiredReactIs_development;
function requireReactIs_development() {
  if (hasRequiredReactIs_development)
    return reactIs_development;
  hasRequiredReactIs_development = 1;
  if (process.env.NODE_ENV !== "production") {
    (function() {
      var REACT_ELEMENT_TYPE = 60103;
      var REACT_PORTAL_TYPE = 60106;
      var REACT_FRAGMENT_TYPE = 60107;
      var REACT_STRICT_MODE_TYPE = 60108;
      var REACT_PROFILER_TYPE = 60114;
      var REACT_PROVIDER_TYPE = 60109;
      var REACT_CONTEXT_TYPE = 60110;
      var REACT_FORWARD_REF_TYPE = 60112;
      var REACT_SUSPENSE_TYPE = 60113;
      var REACT_SUSPENSE_LIST_TYPE = 60120;
      var REACT_MEMO_TYPE = 60115;
      var REACT_LAZY_TYPE = 60116;
      var REACT_BLOCK_TYPE = 60121;
      var REACT_SERVER_BLOCK_TYPE = 60122;
      var REACT_FUNDAMENTAL_TYPE = 60117;
      var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
      var REACT_LEGACY_HIDDEN_TYPE = 60131;
      if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        symbolFor("react.scope");
        symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
      }
      var enableScopeAPI = false;
      function isValidElementType(type2) {
        if (typeof type2 === "string" || typeof type2 === "function") {
          return true;
        }
        if (type2 === REACT_FRAGMENT_TYPE || type2 === REACT_PROFILER_TYPE || type2 === REACT_DEBUG_TRACING_MODE_TYPE || type2 === REACT_STRICT_MODE_TYPE || type2 === REACT_SUSPENSE_TYPE || type2 === REACT_SUSPENSE_LIST_TYPE || type2 === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
          return true;
        }
        if (typeof type2 === "object" && type2 !== null) {
          if (type2.$$typeof === REACT_LAZY_TYPE || type2.$$typeof === REACT_MEMO_TYPE || type2.$$typeof === REACT_PROVIDER_TYPE || type2.$$typeof === REACT_CONTEXT_TYPE || type2.$$typeof === REACT_FORWARD_REF_TYPE || type2.$$typeof === REACT_FUNDAMENTAL_TYPE || type2.$$typeof === REACT_BLOCK_TYPE || type2[0] === REACT_SERVER_BLOCK_TYPE) {
            return true;
          }
        }
        return false;
      }
      function typeOf3(object2) {
        if (typeof object2 === "object" && object2 !== null) {
          var $$typeof = object2.$$typeof;
          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type2 = object2.type;
              switch (type2) {
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                case REACT_SUSPENSE_LIST_TYPE:
                  return type2;
                default:
                  var $$typeofType = type2 && type2.$$typeof;
                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_LAZY_TYPE:
                    case REACT_MEMO_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;
                    default:
                      return $$typeof;
                  }
              }
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }
        return void 0;
      }
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false;
      var hasWarnedAboutDeprecatedIsConcurrentMode = false;
      function isAsyncMode(object2) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isConcurrentMode(object2) {
        {
          if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true;
            console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
          }
        }
        return false;
      }
      function isContextConsumer(object2) {
        return typeOf3(object2) === REACT_CONTEXT_TYPE;
      }
      function isContextProvider(object2) {
        return typeOf3(object2) === REACT_PROVIDER_TYPE;
      }
      function isElement(object2) {
        return typeof object2 === "object" && object2 !== null && object2.$$typeof === REACT_ELEMENT_TYPE;
      }
      function isForwardRef(object2) {
        return typeOf3(object2) === REACT_FORWARD_REF_TYPE;
      }
      function isFragment(object2) {
        return typeOf3(object2) === REACT_FRAGMENT_TYPE;
      }
      function isLazy(object2) {
        return typeOf3(object2) === REACT_LAZY_TYPE;
      }
      function isMemo(object2) {
        return typeOf3(object2) === REACT_MEMO_TYPE;
      }
      function isPortal(object2) {
        return typeOf3(object2) === REACT_PORTAL_TYPE;
      }
      function isProfiler(object2) {
        return typeOf3(object2) === REACT_PROFILER_TYPE;
      }
      function isStrictMode(object2) {
        return typeOf3(object2) === REACT_STRICT_MODE_TYPE;
      }
      function isSuspense(object2) {
        return typeOf3(object2) === REACT_SUSPENSE_TYPE;
      }
      reactIs_development.ContextConsumer = ContextConsumer;
      reactIs_development.ContextProvider = ContextProvider;
      reactIs_development.Element = Element;
      reactIs_development.ForwardRef = ForwardRef;
      reactIs_development.Fragment = Fragment;
      reactIs_development.Lazy = Lazy;
      reactIs_development.Memo = Memo;
      reactIs_development.Portal = Portal;
      reactIs_development.Profiler = Profiler;
      reactIs_development.StrictMode = StrictMode;
      reactIs_development.Suspense = Suspense;
      reactIs_development.isAsyncMode = isAsyncMode;
      reactIs_development.isConcurrentMode = isConcurrentMode;
      reactIs_development.isContextConsumer = isContextConsumer;
      reactIs_development.isContextProvider = isContextProvider;
      reactIs_development.isElement = isElement;
      reactIs_development.isForwardRef = isForwardRef;
      reactIs_development.isFragment = isFragment;
      reactIs_development.isLazy = isLazy;
      reactIs_development.isMemo = isMemo;
      reactIs_development.isPortal = isPortal;
      reactIs_development.isProfiler = isProfiler;
      reactIs_development.isStrictMode = isStrictMode;
      reactIs_development.isSuspense = isSuspense;
      reactIs_development.isValidElementType = isValidElementType;
      reactIs_development.typeOf = typeOf3;
    })();
  }
  return reactIs_development;
}
(function(module2) {
  if (process.env.NODE_ENV === "production") {
    module2.exports = requireReactIs_production_min();
  } else {
    module2.exports = requireReactIs_development();
  }
})(reactIs);
Object.defineProperty(ReactElement$1, "__esModule", {
  value: true
});
ReactElement$1.test = ReactElement$1.serialize = ReactElement$1.default = void 0;
var ReactIs = _interopRequireWildcard(reactIs.exports);
var _markup$1 = markup;
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function")
    return null;
  var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
  var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
  return (_getRequireWildcardCache = function(nodeInterop2) {
    return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
var getChildren = (arg, children = []) => {
  if (Array.isArray(arg)) {
    arg.forEach((item) => {
      getChildren(item, children);
    });
  } else if (arg != null && arg !== false) {
    children.push(arg);
  }
  return children;
};
var getType = (element) => {
  const type2 = element.type;
  if (typeof type2 === "string") {
    return type2;
  }
  if (typeof type2 === "function") {
    return type2.displayName || type2.name || "Unknown";
  }
  if (ReactIs.isFragment(element)) {
    return "React.Fragment";
  }
  if (ReactIs.isSuspense(element)) {
    return "React.Suspense";
  }
  if (typeof type2 === "object" && type2 !== null) {
    if (ReactIs.isContextProvider(element)) {
      return "Context.Provider";
    }
    if (ReactIs.isContextConsumer(element)) {
      return "Context.Consumer";
    }
    if (ReactIs.isForwardRef(element)) {
      if (type2.displayName) {
        return type2.displayName;
      }
      const functionName3 = type2.render.displayName || type2.render.name || "";
      return functionName3 !== "" ? "ForwardRef(" + functionName3 + ")" : "ForwardRef";
    }
    if (ReactIs.isMemo(element)) {
      const functionName3 = type2.displayName || type2.type.displayName || type2.type.name || "";
      return functionName3 !== "" ? "Memo(" + functionName3 + ")" : "Memo";
    }
  }
  return "UNDEFINED";
};
var getPropKeys$1 = (element) => {
  const { props } = element;
  return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
};
var serialize$1 = (element, config2, indentation, depth, refs, printer2) => ++depth > config2.maxDepth ? (0, _markup$1.printElementAsLeaf)(getType(element), config2) : (0, _markup$1.printElement)(
  getType(element),
  (0, _markup$1.printProps)(
    getPropKeys$1(element),
    element.props,
    config2,
    indentation + config2.indent,
    depth,
    refs,
    printer2
  ),
  (0, _markup$1.printChildren)(
    getChildren(element.props.children),
    config2,
    indentation + config2.indent,
    depth,
    refs,
    printer2
  ),
  config2,
  indentation
);
ReactElement$1.serialize = serialize$1;
var test$1 = (val) => val != null && ReactIs.isElement(val);
ReactElement$1.test = test$1;
var plugin$1 = {
  serialize: serialize$1,
  test: test$1
};
var _default$2 = plugin$1;
ReactElement$1.default = _default$2;
var ReactTestComponent$1 = {};
Object.defineProperty(ReactTestComponent$1, "__esModule", {
  value: true
});
ReactTestComponent$1.test = ReactTestComponent$1.serialize = ReactTestComponent$1.default = void 0;
var _markup = markup;
var global2 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  } else if (typeof global2 !== "undefined") {
    return global2;
  } else if (typeof self !== "undefined") {
    return self;
  } else if (typeof window !== "undefined") {
    return window;
  } else {
    return Function("return this")();
  }
}();
var Symbol$1 = global2["jest-symbol-do-not-touch"] || global2.Symbol;
var testSymbol = typeof Symbol$1 === "function" && Symbol$1.for ? Symbol$1.for("react.test.json") : 245830487;
var getPropKeys = (object2) => {
  const { props } = object2;
  return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
};
var serialize = (object2, config2, indentation, depth, refs, printer2) => ++depth > config2.maxDepth ? (0, _markup.printElementAsLeaf)(object2.type, config2) : (0, _markup.printElement)(
  object2.type,
  object2.props ? (0, _markup.printProps)(
    getPropKeys(object2),
    object2.props,
    config2,
    indentation + config2.indent,
    depth,
    refs,
    printer2
  ) : "",
  object2.children ? (0, _markup.printChildren)(
    object2.children,
    config2,
    indentation + config2.indent,
    depth,
    refs,
    printer2
  ) : "",
  config2,
  indentation
);
ReactTestComponent$1.serialize = serialize;
var test = (val) => val && val.$$typeof === testSymbol;
ReactTestComponent$1.test = test;
var plugin = {
  serialize,
  test
};
var _default$1 = plugin;
ReactTestComponent$1.default = _default$1;
Object.defineProperty(build, "__esModule", {
  value: true
});
build.default = build.DEFAULT_OPTIONS = void 0;
var format_1 = build.format = format2;
var plugins_1 = build.plugins = void 0;
var _ansiStyles = _interopRequireDefault(ansiStyles$1.exports);
var _collections = collections;
var _AsymmetricMatcher = _interopRequireDefault(
  AsymmetricMatcher$1
);
var _ConvertAnsi = _interopRequireDefault(ConvertAnsi);
var _DOMCollection = _interopRequireDefault(DOMCollection$1);
var _DOMElement = _interopRequireDefault(DOMElement$1);
var _Immutable = _interopRequireDefault(Immutable$1);
var _ReactElement = _interopRequireDefault(ReactElement$1);
var _ReactTestComponent = _interopRequireDefault(
  ReactTestComponent$1
);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var toString = Object.prototype.toString;
var toISOString = Date.prototype.toISOString;
var errorToString = Error.prototype.toString;
var regExpToString = RegExp.prototype.toString;
var getConstructorName = (val) => typeof val.constructor === "function" && val.constructor.name || "Object";
var isWindow = (val) => typeof window !== "undefined" && val === window;
var SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
var NEWLINE_REGEXP = /\n/gi;
var PrettyFormatPluginError = class extends Error {
  constructor(message, stack) {
    super(message);
    this.stack = stack;
    this.name = this.constructor.name;
  }
};
function isToStringedArrayType(toStringed) {
  return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
}
function printNumber(val) {
  return Object.is(val, -0) ? "-0" : String(val);
}
function printBigInt(val) {
  return String(`${val}n`);
}
function printFunction(val, printFunctionName2) {
  if (!printFunctionName2) {
    return "[Function]";
  }
  return "[Function " + (val.name || "anonymous") + "]";
}
function printSymbol(val) {
  return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
}
function printError(val) {
  return "[" + errorToString.call(val) + "]";
}
function printBasicValue(val, printFunctionName2, escapeRegex2, escapeString) {
  if (val === true || val === false) {
    return "" + val;
  }
  if (val === void 0) {
    return "undefined";
  }
  if (val === null) {
    return "null";
  }
  const typeOf3 = typeof val;
  if (typeOf3 === "number") {
    return printNumber(val);
  }
  if (typeOf3 === "bigint") {
    return printBigInt(val);
  }
  if (typeOf3 === "string") {
    if (escapeString) {
      return '"' + val.replace(/"|\\/g, "\\$&") + '"';
    }
    return '"' + val + '"';
  }
  if (typeOf3 === "function") {
    return printFunction(val, printFunctionName2);
  }
  if (typeOf3 === "symbol") {
    return printSymbol(val);
  }
  const toStringed = toString.call(val);
  if (toStringed === "[object WeakMap]") {
    return "WeakMap {}";
  }
  if (toStringed === "[object WeakSet]") {
    return "WeakSet {}";
  }
  if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") {
    return printFunction(val, printFunctionName2);
  }
  if (toStringed === "[object Symbol]") {
    return printSymbol(val);
  }
  if (toStringed === "[object Date]") {
    return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
  }
  if (toStringed === "[object Error]") {
    return printError(val);
  }
  if (toStringed === "[object RegExp]") {
    if (escapeRegex2) {
      return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    return regExpToString.call(val);
  }
  if (val instanceof Error) {
    return printError(val);
  }
  return null;
}
function printComplexValue(val, config2, indentation, depth, refs, hasCalledToJSON) {
  if (refs.indexOf(val) !== -1) {
    return "[Circular]";
  }
  refs = refs.slice();
  refs.push(val);
  const hitMaxDepth = ++depth > config2.maxDepth;
  const min = config2.min;
  if (config2.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) {
    return printer(val.toJSON(), config2, indentation, depth, refs, true);
  }
  const toStringed = toString.call(val);
  if (toStringed === "[object Arguments]") {
    return hitMaxDepth ? "[Arguments]" : (min ? "" : "Arguments ") + "[" + (0, _collections.printListItems)(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer
    ) + "]";
  }
  if (isToStringedArrayType(toStringed)) {
    return hitMaxDepth ? "[" + val.constructor.name + "]" : (min ? "" : !config2.printBasicPrototype && val.constructor.name === "Array" ? "" : val.constructor.name + " ") + "[" + (0, _collections.printListItems)(
      val,
      config2,
      indentation,
      depth,
      refs,
      printer
    ) + "]";
  }
  if (toStringed === "[object Map]") {
    return hitMaxDepth ? "[Map]" : "Map {" + (0, _collections.printIteratorEntries)(
      val.entries(),
      config2,
      indentation,
      depth,
      refs,
      printer,
      " => "
    ) + "}";
  }
  if (toStringed === "[object Set]") {
    return hitMaxDepth ? "[Set]" : "Set {" + (0, _collections.printIteratorValues)(
      val.values(),
      config2,
      indentation,
      depth,
      refs,
      printer
    ) + "}";
  }
  return hitMaxDepth || isWindow(val) ? "[" + getConstructorName(val) + "]" : (min ? "" : !config2.printBasicPrototype && getConstructorName(val) === "Object" ? "" : getConstructorName(val) + " ") + "{" + (0, _collections.printObjectProperties)(
    val,
    config2,
    indentation,
    depth,
    refs,
    printer
  ) + "}";
}
function isNewPlugin(plugin3) {
  return plugin3.serialize != null;
}
function printPlugin(plugin3, val, config2, indentation, depth, refs) {
  let printed;
  try {
    printed = isNewPlugin(plugin3) ? plugin3.serialize(val, config2, indentation, depth, refs, printer) : plugin3.print(
      val,
      (valChild) => printer(valChild, config2, indentation, depth, refs),
      (str) => {
        const indentationNext = indentation + config2.indent;
        return indentationNext + str.replace(NEWLINE_REGEXP, "\n" + indentationNext);
      },
      {
        edgeSpacing: config2.spacingOuter,
        min: config2.min,
        spacing: config2.spacingInner
      },
      config2.colors
    );
  } catch (error) {
    throw new PrettyFormatPluginError(error.message, error.stack);
  }
  if (typeof printed !== "string") {
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`
    );
  }
  return printed;
}
function findPlugin(plugins2, val) {
  for (let p = 0; p < plugins2.length; p++) {
    try {
      if (plugins2[p].test(val)) {
        return plugins2[p];
      }
    } catch (error) {
      throw new PrettyFormatPluginError(error.message, error.stack);
    }
  }
  return null;
}
function printer(val, config2, indentation, depth, refs, hasCalledToJSON) {
  const plugin3 = findPlugin(config2.plugins, val);
  if (plugin3 !== null) {
    return printPlugin(plugin3, val, config2, indentation, depth, refs);
  }
  const basicResult = printBasicValue(
    val,
    config2.printFunctionName,
    config2.escapeRegex,
    config2.escapeString
  );
  if (basicResult !== null) {
    return basicResult;
  }
  return printComplexValue(
    val,
    config2,
    indentation,
    depth,
    refs,
    hasCalledToJSON
  );
}
var DEFAULT_THEME = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
};
var DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
var DEFAULT_OPTIONS = {
  callToJSON: true,
  compareKeys: void 0,
  escapeRegex: false,
  escapeString: true,
  highlight: false,
  indent: 2,
  maxDepth: Infinity,
  min: false,
  plugins: [],
  printBasicPrototype: true,
  printFunctionName: true,
  theme: DEFAULT_THEME
};
build.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
function validateOptions(options) {
  Object.keys(options).forEach((key) => {
    if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
      throw new Error(`pretty-format: Unknown option "${key}".`);
    }
  });
  if (options.min && options.indent !== void 0 && options.indent !== 0) {
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  }
  if (options.theme !== void 0) {
    if (options.theme === null) {
      throw new Error('pretty-format: Option "theme" must not be null.');
    }
    if (typeof options.theme !== "object") {
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`
      );
    }
  }
}
var getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
  const value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key];
  const color = value && _ansiStyles.default[value];
  if (color && typeof color.close === "string" && typeof color.open === "string") {
    colors[key] = color;
  } else {
    throw new Error(
      `pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`
    );
  }
  return colors;
}, /* @__PURE__ */ Object.create(null));
var getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => {
  colors[key] = {
    close: "",
    open: ""
  };
  return colors;
}, /* @__PURE__ */ Object.create(null));
var getPrintFunctionName = (options) => options && options.printFunctionName !== void 0 ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
var getEscapeRegex = (options) => options && options.escapeRegex !== void 0 ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
var getEscapeString = (options) => options && options.escapeString !== void 0 ? options.escapeString : DEFAULT_OPTIONS.escapeString;
var getConfig = (options) => {
  var _options$printBasicPr;
  return {
    callToJSON: options && options.callToJSON !== void 0 ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
    colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
    compareKeys: options && typeof options.compareKeys === "function" ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
    escapeRegex: getEscapeRegex(options),
    escapeString: getEscapeString(options),
    indent: options && options.min ? "" : createIndent(
      options && options.indent !== void 0 ? options.indent : DEFAULT_OPTIONS.indent
    ),
    maxDepth: options && options.maxDepth !== void 0 ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
    min: options && options.min !== void 0 ? options.min : DEFAULT_OPTIONS.min,
    plugins: options && options.plugins !== void 0 ? options.plugins : DEFAULT_OPTIONS.plugins,
    printBasicPrototype: (_options$printBasicPr = options === null || options === void 0 ? void 0 : options.printBasicPrototype) !== null && _options$printBasicPr !== void 0 ? _options$printBasicPr : true,
    printFunctionName: getPrintFunctionName(options),
    spacingInner: options && options.min ? " " : "\n",
    spacingOuter: options && options.min ? "" : "\n"
  };
};
function createIndent(indent) {
  return new Array(indent + 1).join(" ");
}
function format2(val, options) {
  if (options) {
    validateOptions(options);
    if (options.plugins) {
      const plugin3 = findPlugin(options.plugins, val);
      if (plugin3 !== null) {
        return printPlugin(plugin3, val, getConfig(options), "", 0, []);
      }
    }
  }
  const basicResult = printBasicValue(
    val,
    getPrintFunctionName(options),
    getEscapeRegex(options),
    getEscapeString(options)
  );
  if (basicResult !== null) {
    return basicResult;
  }
  return printComplexValue(val, getConfig(options), "", 0, []);
}
var plugins = {
  AsymmetricMatcher: _AsymmetricMatcher.default,
  ConvertAnsi: _ConvertAnsi.default,
  DOMCollection: _DOMCollection.default,
  DOMElement: _DOMElement.default,
  Immutable: _Immutable.default,
  ReactElement: _ReactElement.default,
  ReactTestComponent: _ReactTestComponent.default
};
plugins_1 = build.plugins = plugins;
var _default = format2;
build.default = _default;
var sourceMapGenerator = {};
var base64Vlq = {};
var base64$1 = {};
var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
base64$1.encode = function(number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};
base64$1.decode = function(charCode) {
  var bigA = 65;
  var bigZ = 90;
  var littleA = 97;
  var littleZ = 122;
  var zero = 48;
  var nine = 57;
  var plus = 43;
  var slash2 = 47;
  var littleOffset = 26;
  var numberOffset = 52;
  if (bigA <= charCode && charCode <= bigZ) {
    return charCode - bigA;
  }
  if (littleA <= charCode && charCode <= littleZ) {
    return charCode - littleA + littleOffset;
  }
  if (zero <= charCode && charCode <= nine) {
    return charCode - zero + numberOffset;
  }
  if (charCode == plus) {
    return 62;
  }
  if (charCode == slash2) {
    return 63;
  }
  return -1;
};
var base64 = base64$1;
var VLQ_BASE_SHIFT = 5;
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
var VLQ_BASE_MASK = VLQ_BASE - 1;
var VLQ_CONTINUATION_BIT = VLQ_BASE;
function toVLQSigned(aValue) {
  return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
}
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative ? -shifted : shifted;
}
base64Vlq.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;
  var vlq = toVLQSigned(aValue);
  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);
  return encoded;
};
base64Vlq.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;
  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }
    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }
    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);
  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};
var util$5 = {};
(function(exports) {
  function getArg(aArgs, aName, aDefaultValue) {
    if (aName in aArgs) {
      return aArgs[aName];
    } else if (arguments.length === 3) {
      return aDefaultValue;
    } else {
      throw new Error('"' + aName + '" is a required argument.');
    }
  }
  exports.getArg = getArg;
  var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
  var dataUrlRegexp = /^data:.+\,.+$/;
  function urlParse(aUrl) {
    var match = aUrl.match(urlRegexp);
    if (!match) {
      return null;
    }
    return {
      scheme: match[1],
      auth: match[2],
      host: match[3],
      port: match[4],
      path: match[5]
    };
  }
  exports.urlParse = urlParse;
  function urlGenerate(aParsedUrl) {
    var url = "";
    if (aParsedUrl.scheme) {
      url += aParsedUrl.scheme + ":";
    }
    url += "//";
    if (aParsedUrl.auth) {
      url += aParsedUrl.auth + "@";
    }
    if (aParsedUrl.host) {
      url += aParsedUrl.host;
    }
    if (aParsedUrl.port) {
      url += ":" + aParsedUrl.port;
    }
    if (aParsedUrl.path) {
      url += aParsedUrl.path;
    }
    return url;
  }
  exports.urlGenerate = urlGenerate;
  var MAX_CACHED_INPUTS = 32;
  function lruMemoize(f2) {
    var cache = [];
    return function(input) {
      for (var i = 0; i < cache.length; i++) {
        if (cache[i].input === input) {
          var temp = cache[0];
          cache[0] = cache[i];
          cache[i] = temp;
          return cache[0].result;
        }
      }
      var result = f2(input);
      cache.unshift({
        input,
        result
      });
      if (cache.length > MAX_CACHED_INPUTS) {
        cache.pop();
      }
      return result;
    };
  }
  var normalize2 = lruMemoize(function normalize3(aPath) {
    var path2 = aPath;
    var url = urlParse(aPath);
    if (url) {
      if (!url.path) {
        return aPath;
      }
      path2 = url.path;
    }
    var isAbsolute2 = exports.isAbsolute(path2);
    var parts = [];
    var start = 0;
    var i = 0;
    while (true) {
      start = i;
      i = path2.indexOf("/", start);
      if (i === -1) {
        parts.push(path2.slice(start));
        break;
      } else {
        parts.push(path2.slice(start, i));
        while (i < path2.length && path2[i] === "/") {
          i++;
        }
      }
    }
    for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
      part = parts[i];
      if (part === ".") {
        parts.splice(i, 1);
      } else if (part === "..") {
        up++;
      } else if (up > 0) {
        if (part === "") {
          parts.splice(i + 1, up);
          up = 0;
        } else {
          parts.splice(i, 2);
          up--;
        }
      }
    }
    path2 = parts.join("/");
    if (path2 === "") {
      path2 = isAbsolute2 ? "/" : ".";
    }
    if (url) {
      url.path = path2;
      return urlGenerate(url);
    }
    return path2;
  });
  exports.normalize = normalize2;
  function join3(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    if (aPath === "") {
      aPath = ".";
    }
    var aPathUrl = urlParse(aPath);
    var aRootUrl = urlParse(aRoot);
    if (aRootUrl) {
      aRoot = aRootUrl.path || "/";
    }
    if (aPathUrl && !aPathUrl.scheme) {
      if (aRootUrl) {
        aPathUrl.scheme = aRootUrl.scheme;
      }
      return urlGenerate(aPathUrl);
    }
    if (aPathUrl || aPath.match(dataUrlRegexp)) {
      return aPath;
    }
    if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
      aRootUrl.host = aPath;
      return urlGenerate(aRootUrl);
    }
    var joined = aPath.charAt(0) === "/" ? aPath : normalize2(aRoot.replace(/\/+$/, "") + "/" + aPath);
    if (aRootUrl) {
      aRootUrl.path = joined;
      return urlGenerate(aRootUrl);
    }
    return joined;
  }
  exports.join = join3;
  exports.isAbsolute = function(aPath) {
    return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
  };
  function relative2(aRoot, aPath) {
    if (aRoot === "") {
      aRoot = ".";
    }
    aRoot = aRoot.replace(/\/$/, "");
    var level = 0;
    while (aPath.indexOf(aRoot + "/") !== 0) {
      var index = aRoot.lastIndexOf("/");
      if (index < 0) {
        return aPath;
      }
      aRoot = aRoot.slice(0, index);
      if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
        return aPath;
      }
      ++level;
    }
    return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
  }
  exports.relative = relative2;
  var supportsNullProto = function() {
    var obj = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in obj);
  }();
  function identity(s) {
    return s;
  }
  function toSetString(aStr) {
    if (isProtoString(aStr)) {
      return "$" + aStr;
    }
    return aStr;
  }
  exports.toSetString = supportsNullProto ? identity : toSetString;
  function fromSetString(aStr) {
    if (isProtoString(aStr)) {
      return aStr.slice(1);
    }
    return aStr;
  }
  exports.fromSetString = supportsNullProto ? identity : fromSetString;
  function isProtoString(s) {
    if (!s) {
      return false;
    }
    var length = s.length;
    if (length < 9) {
      return false;
    }
    if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
      return false;
    }
    for (var i = length - 10; i >= 0; i--) {
      if (s.charCodeAt(i) !== 36) {
        return false;
      }
    }
    return true;
  }
  function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
    var cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByOriginalPositions = compareByOriginalPositions;
  function compareByOriginalPositionsNoSource(mappingA, mappingB, onlyCompareOriginal) {
    var cmp;
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0 || onlyCompareOriginal) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByOriginalPositionsNoSource = compareByOriginalPositionsNoSource;
  function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
  function compareByGeneratedPositionsDeflatedNoLine(mappingA, mappingB, onlyCompareGenerated) {
    var cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0 || onlyCompareGenerated) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsDeflatedNoLine = compareByGeneratedPositionsDeflatedNoLine;
  function strcmp(aStr1, aStr2) {
    if (aStr1 === aStr2) {
      return 0;
    }
    if (aStr1 === null) {
      return 1;
    }
    if (aStr2 === null) {
      return -1;
    }
    if (aStr1 > aStr2) {
      return 1;
    }
    return -1;
  }
  function compareByGeneratedPositionsInflated(mappingA, mappingB) {
    var cmp = mappingA.generatedLine - mappingB.generatedLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.generatedColumn - mappingB.generatedColumn;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = strcmp(mappingA.source, mappingB.source);
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalLine - mappingB.originalLine;
    if (cmp !== 0) {
      return cmp;
    }
    cmp = mappingA.originalColumn - mappingB.originalColumn;
    if (cmp !== 0) {
      return cmp;
    }
    return strcmp(mappingA.name, mappingB.name);
  }
  exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
  function parseSourceMapInput(str) {
    return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
  }
  exports.parseSourceMapInput = parseSourceMapInput;
  function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
    sourceURL = sourceURL || "";
    if (sourceRoot) {
      if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
        sourceRoot += "/";
      }
      sourceURL = sourceRoot + sourceURL;
    }
    if (sourceMapURL) {
      var parsed = urlParse(sourceMapURL);
      if (!parsed) {
        throw new Error("sourceMapURL could not be parsed");
      }
      if (parsed.path) {
        var index = parsed.path.lastIndexOf("/");
        if (index >= 0) {
          parsed.path = parsed.path.substring(0, index + 1);
        }
      }
      sourceURL = join3(urlGenerate(parsed), sourceURL);
    }
    return normalize2(sourceURL);
  }
  exports.computeSourceURL = computeSourceURL;
})(util$5);
var arraySet = {};
var util$4 = util$5;
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";
function ArraySet$2() {
  this._array = [];
  this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
}
ArraySet$2.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set2 = new ArraySet$2();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set2.add(aArray[i], aAllowDuplicates);
  }
  return set2;
};
ArraySet$2.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
ArraySet$2.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util$4.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};
ArraySet$2.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util$4.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};
ArraySet$2.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
      return idx;
    }
  } else {
    var sStr = util$4.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }
  throw new Error('"' + aStr + '" is not in the set.');
};
ArraySet$2.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error("No element indexed by " + aIdx);
};
ArraySet$2.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};
arraySet.ArraySet = ArraySet$2;
var mappingList = {};
var util$3 = util$5;
function generatedPositionAfter(mappingA, mappingB) {
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA || util$3.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}
function MappingList$1() {
  this._array = [];
  this._sorted = true;
  this._last = { generatedLine: -1, generatedColumn: 0 };
}
MappingList$1.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
  this._array.forEach(aCallback, aThisArg);
};
MappingList$1.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};
MappingList$1.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util$3.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};
mappingList.MappingList = MappingList$1;
var base64VLQ$1 = base64Vlq;
var util$2 = util$5;
var ArraySet$1 = arraySet.ArraySet;
var MappingList = mappingList.MappingList;
function SourceMapGenerator$1(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util$2.getArg(aArgs, "file", null);
  this._sourceRoot = util$2.getArg(aArgs, "sourceRoot", null);
  this._skipValidation = util$2.getArg(aArgs, "skipValidation", false);
  this._sources = new ArraySet$1();
  this._names = new ArraySet$1();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}
SourceMapGenerator$1.prototype._version = 3;
SourceMapGenerator$1.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
  var sourceRoot = aSourceMapConsumer.sourceRoot;
  var generator = new SourceMapGenerator$1({
    file: aSourceMapConsumer.file,
    sourceRoot
  });
  aSourceMapConsumer.eachMapping(function(mapping) {
    var newMapping = {
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn
      }
    };
    if (mapping.source != null) {
      newMapping.source = mapping.source;
      if (sourceRoot != null) {
        newMapping.source = util$2.relative(sourceRoot, newMapping.source);
      }
      newMapping.original = {
        line: mapping.originalLine,
        column: mapping.originalColumn
      };
      if (mapping.name != null) {
        newMapping.name = mapping.name;
      }
    }
    generator.addMapping(newMapping);
  });
  aSourceMapConsumer.sources.forEach(function(sourceFile) {
    var sourceRelative = sourceFile;
    if (sourceRoot !== null) {
      sourceRelative = util$2.relative(sourceRoot, sourceFile);
    }
    if (!generator._sources.has(sourceRelative)) {
      generator._sources.add(sourceRelative);
    }
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);
    if (content != null) {
      generator.setSourceContent(sourceFile, content);
    }
  });
  return generator;
};
SourceMapGenerator$1.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
  var generated = util$2.getArg(aArgs, "generated");
  var original = util$2.getArg(aArgs, "original", null);
  var source = util$2.getArg(aArgs, "source", null);
  var name = util$2.getArg(aArgs, "name", null);
  if (!this._skipValidation) {
    this._validateMapping(generated, original, source, name);
  }
  if (source != null) {
    source = String(source);
    if (!this._sources.has(source)) {
      this._sources.add(source);
    }
  }
  if (name != null) {
    name = String(name);
    if (!this._names.has(name)) {
      this._names.add(name);
    }
  }
  this._mappings.add({
    generatedLine: generated.line,
    generatedColumn: generated.column,
    originalLine: original != null && original.line,
    originalColumn: original != null && original.column,
    source,
    name
  });
};
SourceMapGenerator$1.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
  var source = aSourceFile;
  if (this._sourceRoot != null) {
    source = util$2.relative(this._sourceRoot, source);
  }
  if (aSourceContent != null) {
    if (!this._sourcesContents) {
      this._sourcesContents = /* @__PURE__ */ Object.create(null);
    }
    this._sourcesContents[util$2.toSetString(source)] = aSourceContent;
  } else if (this._sourcesContents) {
    delete this._sourcesContents[util$2.toSetString(source)];
    if (Object.keys(this._sourcesContents).length === 0) {
      this._sourcesContents = null;
    }
  }
};
SourceMapGenerator$1.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
  var sourceFile = aSourceFile;
  if (aSourceFile == null) {
    if (aSourceMapConsumer.file == null) {
      throw new Error(
        `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
      );
    }
    sourceFile = aSourceMapConsumer.file;
  }
  var sourceRoot = this._sourceRoot;
  if (sourceRoot != null) {
    sourceFile = util$2.relative(sourceRoot, sourceFile);
  }
  var newSources = new ArraySet$1();
  var newNames = new ArraySet$1();
  this._mappings.unsortedForEach(function(mapping) {
    if (mapping.source === sourceFile && mapping.originalLine != null) {
      var original = aSourceMapConsumer.originalPositionFor({
        line: mapping.originalLine,
        column: mapping.originalColumn
      });
      if (original.source != null) {
        mapping.source = original.source;
        if (aSourceMapPath != null) {
          mapping.source = util$2.join(aSourceMapPath, mapping.source);
        }
        if (sourceRoot != null) {
          mapping.source = util$2.relative(sourceRoot, mapping.source);
        }
        mapping.originalLine = original.line;
        mapping.originalColumn = original.column;
        if (original.name != null) {
          mapping.name = original.name;
        }
      }
    }
    var source = mapping.source;
    if (source != null && !newSources.has(source)) {
      newSources.add(source);
    }
    var name = mapping.name;
    if (name != null && !newNames.has(name)) {
      newNames.add(name);
    }
  }, this);
  this._sources = newSources;
  this._names = newNames;
  aSourceMapConsumer.sources.forEach(function(sourceFile2) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
    if (content != null) {
      if (aSourceMapPath != null) {
        sourceFile2 = util$2.join(aSourceMapPath, sourceFile2);
      }
      if (sourceRoot != null) {
        sourceFile2 = util$2.relative(sourceRoot, sourceFile2);
      }
      this.setSourceContent(sourceFile2, content);
    }
  }, this);
};
SourceMapGenerator$1.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
  if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
    throw new Error(
      "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
    );
  }
  if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
    return;
  } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
    return;
  } else {
    throw new Error("Invalid mapping: " + JSON.stringify({
      generated: aGenerated,
      source: aSource,
      original: aOriginal,
      name: aName
    }));
  }
};
SourceMapGenerator$1.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
  var previousGeneratedColumn = 0;
  var previousGeneratedLine = 1;
  var previousOriginalColumn = 0;
  var previousOriginalLine = 0;
  var previousName = 0;
  var previousSource = 0;
  var result = "";
  var next;
  var mapping;
  var nameIdx;
  var sourceIdx;
  var mappings = this._mappings.toArray();
  for (var i = 0, len = mappings.length; i < len; i++) {
    mapping = mappings[i];
    next = "";
    if (mapping.generatedLine !== previousGeneratedLine) {
      previousGeneratedColumn = 0;
      while (mapping.generatedLine !== previousGeneratedLine) {
        next += ";";
        previousGeneratedLine++;
      }
    } else {
      if (i > 0) {
        if (!util$2.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
          continue;
        }
        next += ",";
      }
    }
    next += base64VLQ$1.encode(mapping.generatedColumn - previousGeneratedColumn);
    previousGeneratedColumn = mapping.generatedColumn;
    if (mapping.source != null) {
      sourceIdx = this._sources.indexOf(mapping.source);
      next += base64VLQ$1.encode(sourceIdx - previousSource);
      previousSource = sourceIdx;
      next += base64VLQ$1.encode(mapping.originalLine - 1 - previousOriginalLine);
      previousOriginalLine = mapping.originalLine - 1;
      next += base64VLQ$1.encode(mapping.originalColumn - previousOriginalColumn);
      previousOriginalColumn = mapping.originalColumn;
      if (mapping.name != null) {
        nameIdx = this._names.indexOf(mapping.name);
        next += base64VLQ$1.encode(nameIdx - previousName);
        previousName = nameIdx;
      }
    }
    result += next;
  }
  return result;
};
SourceMapGenerator$1.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
  return aSources.map(function(source) {
    if (!this._sourcesContents) {
      return null;
    }
    if (aSourceRoot != null) {
      source = util$2.relative(aSourceRoot, source);
    }
    var key = util$2.toSetString(source);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
  }, this);
};
SourceMapGenerator$1.prototype.toJSON = function SourceMapGenerator_toJSON() {
  var map2 = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  if (this._file != null) {
    map2.file = this._file;
  }
  if (this._sourceRoot != null) {
    map2.sourceRoot = this._sourceRoot;
  }
  if (this._sourcesContents) {
    map2.sourcesContent = this._generateSourcesContent(map2.sources, map2.sourceRoot);
  }
  return map2;
};
SourceMapGenerator$1.prototype.toString = function SourceMapGenerator_toString() {
  return JSON.stringify(this.toJSON());
};
sourceMapGenerator.SourceMapGenerator = SourceMapGenerator$1;
var sourceMapConsumer = {};
var binarySearch$1 = {};
(function(exports) {
  exports.GREATEST_LOWER_BOUND = 1;
  exports.LEAST_UPPER_BOUND = 2;
  function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
    var mid = Math.floor((aHigh - aLow) / 2) + aLow;
    var cmp = aCompare(aNeedle, aHaystack[mid], true);
    if (cmp === 0) {
      return mid;
    } else if (cmp > 0) {
      if (aHigh - mid > 1) {
        return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return aHigh < aHaystack.length ? aHigh : -1;
      } else {
        return mid;
      }
    } else {
      if (mid - aLow > 1) {
        return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
      }
      if (aBias == exports.LEAST_UPPER_BOUND) {
        return mid;
      } else {
        return aLow < 0 ? -1 : aLow;
      }
    }
  }
  exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
    if (aHaystack.length === 0) {
      return -1;
    }
    var index = recursiveSearch(
      -1,
      aHaystack.length,
      aNeedle,
      aHaystack,
      aCompare,
      aBias || exports.GREATEST_LOWER_BOUND
    );
    if (index < 0) {
      return -1;
    }
    while (index - 1 >= 0) {
      if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
        break;
      }
      --index;
    }
    return index;
  };
})(binarySearch$1);
var quickSort$1 = {};
function SortTemplate(comparator2) {
  function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
  }
  function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
  }
  function doQuickSort(ary, comparator3, p, r) {
    if (p < r) {
      var pivotIndex = randomIntInRange(p, r);
      var i = p - 1;
      swap(ary, pivotIndex, r);
      var pivot = ary[r];
      for (var j = p; j < r; j++) {
        if (comparator3(ary[j], pivot, false) <= 0) {
          i += 1;
          swap(ary, i, j);
        }
      }
      swap(ary, i + 1, j);
      var q = i + 1;
      doQuickSort(ary, comparator3, p, q - 1);
      doQuickSort(ary, comparator3, q + 1, r);
    }
  }
  return doQuickSort;
}
function cloneSort(comparator2) {
  let template = SortTemplate.toString();
  let templateFn = new Function(`return ${template}`)();
  return templateFn(comparator2);
}
var sortCache = /* @__PURE__ */ new WeakMap();
quickSort$1.quickSort = function(ary, comparator2, start = 0) {
  let doQuickSort = sortCache.get(comparator2);
  if (doQuickSort === void 0) {
    doQuickSort = cloneSort(comparator2);
    sortCache.set(comparator2, doQuickSort);
  }
  doQuickSort(ary, comparator2, start, ary.length - 1);
};
var util$1 = util$5;
var binarySearch = binarySearch$1;
var ArraySet = arraySet.ArraySet;
var base64VLQ = base64Vlq;
var quickSort = quickSort$1.quickSort;
function SourceMapConsumer$1(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = util$1.parseSourceMapInput(aSourceMap);
  }
  return sourceMap.sections != null ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}
SourceMapConsumer$1.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
};
SourceMapConsumer$1.prototype._version = 3;
SourceMapConsumer$1.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer$1.prototype, "_generatedMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__generatedMappings;
  }
});
SourceMapConsumer$1.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer$1.prototype, "_originalMappings", {
  configurable: true,
  enumerable: true,
  get: function() {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }
    return this.__originalMappings;
  }
});
SourceMapConsumer$1.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
  var c = aStr.charAt(index);
  return c === ";" || c === ",";
};
SourceMapConsumer$1.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  throw new Error("Subclasses must implement _parseMappings");
};
SourceMapConsumer$1.GENERATED_ORDER = 1;
SourceMapConsumer$1.ORIGINAL_ORDER = 2;
SourceMapConsumer$1.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer$1.LEAST_UPPER_BOUND = 2;
SourceMapConsumer$1.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
  var context = aContext || null;
  var order = aOrder || SourceMapConsumer$1.GENERATED_ORDER;
  var mappings;
  switch (order) {
    case SourceMapConsumer$1.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer$1.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
  }
  var sourceRoot = this.sourceRoot;
  var boundCallback = aCallback.bind(context);
  var names = this._names;
  var sources = this._sources;
  var sourceMapURL = this._sourceMapURL;
  for (var i = 0, n2 = mappings.length; i < n2; i++) {
    var mapping = mappings[i];
    var source = mapping.source === null ? null : sources.at(mapping.source);
    source = util$1.computeSourceURL(sourceRoot, source, sourceMapURL);
    boundCallback({
      source,
      generatedLine: mapping.generatedLine,
      generatedColumn: mapping.generatedColumn,
      originalLine: mapping.originalLine,
      originalColumn: mapping.originalColumn,
      name: mapping.name === null ? null : names.at(mapping.name)
    });
  }
};
SourceMapConsumer$1.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
  var line = util$1.getArg(aArgs, "line");
  var needle = {
    source: util$1.getArg(aArgs, "source"),
    originalLine: line,
    originalColumn: util$1.getArg(aArgs, "column", 0)
  };
  needle.source = this._findSourceIndex(needle.source);
  if (needle.source < 0) {
    return [];
  }
  var mappings = [];
  var index = this._findMapping(
    needle,
    this._originalMappings,
    "originalLine",
    "originalColumn",
    util$1.compareByOriginalPositions,
    binarySearch.LEAST_UPPER_BOUND
  );
  if (index >= 0) {
    var mapping = this._originalMappings[index];
    if (aArgs.column === void 0) {
      var originalLine = mapping.originalLine;
      while (mapping && mapping.originalLine === originalLine) {
        mappings.push({
          line: util$1.getArg(mapping, "generatedLine", null),
          column: util$1.getArg(mapping, "generatedColumn", null),
          lastColumn: util$1.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index];
      }
    } else {
      var originalColumn = mapping.originalColumn;
      while (mapping && mapping.originalLine === line && mapping.originalColumn == originalColumn) {
        mappings.push({
          line: util$1.getArg(mapping, "generatedLine", null),
          column: util$1.getArg(mapping, "generatedColumn", null),
          lastColumn: util$1.getArg(mapping, "lastGeneratedColumn", null)
        });
        mapping = this._originalMappings[++index];
      }
    }
  }
  return mappings;
};
sourceMapConsumer.SourceMapConsumer = SourceMapConsumer$1;
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = util$1.parseSourceMapInput(aSourceMap);
  }
  var version2 = util$1.getArg(sourceMap, "version");
  var sources = util$1.getArg(sourceMap, "sources");
  var names = util$1.getArg(sourceMap, "names", []);
  var sourceRoot = util$1.getArg(sourceMap, "sourceRoot", null);
  var sourcesContent = util$1.getArg(sourceMap, "sourcesContent", null);
  var mappings = util$1.getArg(sourceMap, "mappings");
  var file = util$1.getArg(sourceMap, "file", null);
  if (version2 != this._version) {
    throw new Error("Unsupported version: " + version2);
  }
  if (sourceRoot) {
    sourceRoot = util$1.normalize(sourceRoot);
  }
  sources = sources.map(String).map(util$1.normalize).map(function(source) {
    return sourceRoot && util$1.isAbsolute(sourceRoot) && util$1.isAbsolute(source) ? util$1.relative(sourceRoot, source) : source;
  });
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);
  this._absoluteSources = this._sources.toArray().map(function(s) {
    return util$1.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });
  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}
BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer$1.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer$1;
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util$1.relative(this.sourceRoot, relativeSource);
  }
  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }
  return -1;
};
BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
  var smc = Object.create(BasicSourceMapConsumer.prototype);
  var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
  var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
  smc.sourceRoot = aSourceMap._sourceRoot;
  smc.sourcesContent = aSourceMap._generateSourcesContent(
    smc._sources.toArray(),
    smc.sourceRoot
  );
  smc.file = aSourceMap._file;
  smc._sourceMapURL = aSourceMapURL;
  smc._absoluteSources = smc._sources.toArray().map(function(s) {
    return util$1.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
  });
  var generatedMappings = aSourceMap._mappings.toArray().slice();
  var destGeneratedMappings = smc.__generatedMappings = [];
  var destOriginalMappings = smc.__originalMappings = [];
  for (var i = 0, length = generatedMappings.length; i < length; i++) {
    var srcMapping = generatedMappings[i];
    var destMapping = new Mapping();
    destMapping.generatedLine = srcMapping.generatedLine;
    destMapping.generatedColumn = srcMapping.generatedColumn;
    if (srcMapping.source) {
      destMapping.source = sources.indexOf(srcMapping.source);
      destMapping.originalLine = srcMapping.originalLine;
      destMapping.originalColumn = srcMapping.originalColumn;
      if (srcMapping.name) {
        destMapping.name = names.indexOf(srcMapping.name);
      }
      destOriginalMappings.push(destMapping);
    }
    destGeneratedMappings.push(destMapping);
  }
  quickSort(smc.__originalMappings, util$1.compareByOriginalPositions);
  return smc;
};
BasicSourceMapConsumer.prototype._version = 3;
Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
  get: function() {
    return this._absoluteSources.slice();
  }
});
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}
var compareGenerated = util$1.compareByGeneratedPositionsDeflatedNoLine;
function sortGenerated(array2, start) {
  let l = array2.length;
  let n2 = array2.length - start;
  if (n2 <= 1) {
    return;
  } else if (n2 == 2) {
    let a = array2[start];
    let b = array2[start + 1];
    if (compareGenerated(a, b) > 0) {
      array2[start] = b;
      array2[start + 1] = a;
    }
  } else if (n2 < 20) {
    for (let i = start; i < l; i++) {
      for (let j = i; j > start; j--) {
        let a = array2[j - 1];
        let b = array2[j];
        if (compareGenerated(a, b) <= 0) {
          break;
        }
        array2[j - 1] = b;
        array2[j] = a;
      }
    }
  } else {
    quickSort(array2, compareGenerated, start);
  }
}
BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings2(aStr, aSourceRoot) {
  var generatedLine = 1;
  var previousGeneratedColumn = 0;
  var previousOriginalLine = 0;
  var previousOriginalColumn = 0;
  var previousSource = 0;
  var previousName = 0;
  var length = aStr.length;
  var index = 0;
  var temp = {};
  var originalMappings = [];
  var generatedMappings = [];
  var mapping, segment, end, value;
  let subarrayStart = 0;
  while (index < length) {
    if (aStr.charAt(index) === ";") {
      generatedLine++;
      index++;
      previousGeneratedColumn = 0;
      sortGenerated(generatedMappings, subarrayStart);
      subarrayStart = generatedMappings.length;
    } else if (aStr.charAt(index) === ",") {
      index++;
    } else {
      mapping = new Mapping();
      mapping.generatedLine = generatedLine;
      for (end = index; end < length; end++) {
        if (this._charIsMappingSeparator(aStr, end)) {
          break;
        }
      }
      aStr.slice(index, end);
      segment = [];
      while (index < end) {
        base64VLQ.decode(aStr, index, temp);
        value = temp.value;
        index = temp.rest;
        segment.push(value);
      }
      if (segment.length === 2) {
        throw new Error("Found a source, but no line and column");
      }
      if (segment.length === 3) {
        throw new Error("Found a source and line, but no column");
      }
      mapping.generatedColumn = previousGeneratedColumn + segment[0];
      previousGeneratedColumn = mapping.generatedColumn;
      if (segment.length > 1) {
        mapping.source = previousSource + segment[1];
        previousSource += segment[1];
        mapping.originalLine = previousOriginalLine + segment[2];
        previousOriginalLine = mapping.originalLine;
        mapping.originalLine += 1;
        mapping.originalColumn = previousOriginalColumn + segment[3];
        previousOriginalColumn = mapping.originalColumn;
        if (segment.length > 4) {
          mapping.name = previousName + segment[4];
          previousName += segment[4];
        }
      }
      generatedMappings.push(mapping);
      if (typeof mapping.originalLine === "number") {
        let currentSource = mapping.source;
        while (originalMappings.length <= currentSource) {
          originalMappings.push(null);
        }
        if (originalMappings[currentSource] === null) {
          originalMappings[currentSource] = [];
        }
        originalMappings[currentSource].push(mapping);
      }
    }
  }
  sortGenerated(generatedMappings, subarrayStart);
  this.__generatedMappings = generatedMappings;
  for (var i = 0; i < originalMappings.length; i++) {
    if (originalMappings[i] != null) {
      quickSort(originalMappings[i], util$1.compareByOriginalPositionsNoSource);
    }
  }
  this.__originalMappings = [].concat(...originalMappings);
};
BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
  if (aNeedle[aLineName] <= 0) {
    throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
  }
  if (aNeedle[aColumnName] < 0) {
    throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
  }
  return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
};
BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
  for (var index = 0; index < this._generatedMappings.length; ++index) {
    var mapping = this._generatedMappings[index];
    if (index + 1 < this._generatedMappings.length) {
      var nextMapping = this._generatedMappings[index + 1];
      if (mapping.generatedLine === nextMapping.generatedLine) {
        mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
        continue;
      }
    }
    mapping.lastGeneratedColumn = Infinity;
  }
};
BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util$1.getArg(aArgs, "line"),
    generatedColumn: util$1.getArg(aArgs, "column")
  };
  var index = this._findMapping(
    needle,
    this._generatedMappings,
    "generatedLine",
    "generatedColumn",
    util$1.compareByGeneratedPositionsDeflated,
    util$1.getArg(aArgs, "bias", SourceMapConsumer$1.GREATEST_LOWER_BOUND)
  );
  if (index >= 0) {
    var mapping = this._generatedMappings[index];
    if (mapping.generatedLine === needle.generatedLine) {
      var source = util$1.getArg(mapping, "source", null);
      if (source !== null) {
        source = this._sources.at(source);
        source = util$1.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
      }
      var name = util$1.getArg(mapping, "name", null);
      if (name !== null) {
        name = this._names.at(name);
      }
      return {
        source,
        line: util$1.getArg(mapping, "originalLine", null),
        column: util$1.getArg(mapping, "originalColumn", null),
        name
      };
    }
  }
  return {
    source: null,
    line: null,
    column: null,
    name: null
  };
};
BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
  if (!this.sourcesContent) {
    return false;
  }
  return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
    return sc == null;
  });
};
BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  if (!this.sourcesContent) {
    return null;
  }
  var index = this._findSourceIndex(aSource);
  if (index >= 0) {
    return this.sourcesContent[index];
  }
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util$1.relative(this.sourceRoot, relativeSource);
  }
  var url;
  if (this.sourceRoot != null && (url = util$1.urlParse(this.sourceRoot))) {
    var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
    if (url.scheme == "file" && this._sources.has(fileUriAbsPath)) {
      return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
    }
    if ((!url.path || url.path == "/") && this._sources.has("/" + relativeSource)) {
      return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + relativeSource + '" is not in the SourceMap.');
  }
};
BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
  var source = util$1.getArg(aArgs, "source");
  source = this._findSourceIndex(source);
  if (source < 0) {
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }
  var needle = {
    source,
    originalLine: util$1.getArg(aArgs, "line"),
    originalColumn: util$1.getArg(aArgs, "column")
  };
  var index = this._findMapping(
    needle,
    this._originalMappings,
    "originalLine",
    "originalColumn",
    util$1.compareByOriginalPositions,
    util$1.getArg(aArgs, "bias", SourceMapConsumer$1.GREATEST_LOWER_BOUND)
  );
  if (index >= 0) {
    var mapping = this._originalMappings[index];
    if (mapping.source === needle.source) {
      return {
        line: util$1.getArg(mapping, "generatedLine", null),
        column: util$1.getArg(mapping, "generatedColumn", null),
        lastColumn: util$1.getArg(mapping, "lastGeneratedColumn", null)
      };
    }
  }
  return {
    line: null,
    column: null,
    lastColumn: null
  };
};
sourceMapConsumer.BasicSourceMapConsumer = BasicSourceMapConsumer;
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === "string") {
    sourceMap = util$1.parseSourceMapInput(aSourceMap);
  }
  var version2 = util$1.getArg(sourceMap, "version");
  var sections = util$1.getArg(sourceMap, "sections");
  if (version2 != this._version) {
    throw new Error("Unsupported version: " + version2);
  }
  this._sources = new ArraySet();
  this._names = new ArraySet();
  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function(s) {
    if (s.url) {
      throw new Error("Support for url field in sections not implemented.");
    }
    var offset = util$1.getArg(s, "offset");
    var offsetLine = util$1.getArg(offset, "line");
    var offsetColumn = util$1.getArg(offset, "column");
    if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
      throw new Error("Section offsets must be ordered and non-overlapping.");
    }
    lastOffset = offset;
    return {
      generatedOffset: {
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer$1(util$1.getArg(s, "map"), aSourceMapURL)
    };
  });
}
IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer$1.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer$1;
IndexedSourceMapConsumer.prototype._version = 3;
Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
  get: function() {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});
IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
  var needle = {
    generatedLine: util$1.getArg(aArgs, "line"),
    generatedColumn: util$1.getArg(aArgs, "column")
  };
  var sectionIndex = binarySearch.search(
    needle,
    this._sections,
    function(needle2, section2) {
      var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
      if (cmp) {
        return cmp;
      }
      return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
    }
  );
  var section = this._sections[sectionIndex];
  if (!section) {
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }
  return section.consumer.originalPositionFor({
    line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
    column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
    bias: aArgs.bias
  });
};
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
  return this._sections.every(function(s) {
    return s.consumer.hasContentsOfAllSources();
  });
};
IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var content = section.consumer.sourceContentFor(aSource, true);
    if (content) {
      return content;
    }
  }
  if (nullOnMissing) {
    return null;
  } else {
    throw new Error('"' + aSource + '" is not in the SourceMap.');
  }
};
IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    if (section.consumer._findSourceIndex(util$1.getArg(aArgs, "source")) === -1) {
      continue;
    }
    var generatedPosition = section.consumer.generatedPositionFor(aArgs);
    if (generatedPosition) {
      var ret = {
        line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
        column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
      };
      return ret;
    }
  }
  return {
    line: null,
    column: null
  };
};
IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
  this.__generatedMappings = [];
  this.__originalMappings = [];
  for (var i = 0; i < this._sections.length; i++) {
    var section = this._sections[i];
    var sectionMappings = section.consumer._generatedMappings;
    for (var j = 0; j < sectionMappings.length; j++) {
      var mapping = sectionMappings[j];
      var source = section.consumer._sources.at(mapping.source);
      source = util$1.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
      this._sources.add(source);
      source = this._sources.indexOf(source);
      var name = null;
      if (mapping.name) {
        name = section.consumer._names.at(mapping.name);
        this._names.add(name);
        name = this._names.indexOf(name);
      }
      var adjustedMapping = {
        source,
        generatedLine: mapping.generatedLine + (section.generatedOffset.generatedLine - 1),
        generatedColumn: mapping.generatedColumn + (section.generatedOffset.generatedLine === mapping.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name
      };
      this.__generatedMappings.push(adjustedMapping);
      if (typeof adjustedMapping.originalLine === "number") {
        this.__originalMappings.push(adjustedMapping);
      }
    }
  }
  quickSort(this.__generatedMappings, util$1.compareByGeneratedPositionsDeflated);
  quickSort(this.__originalMappings, util$1.compareByOriginalPositions);
};
sourceMapConsumer.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
var SourceMapGenerator = sourceMapGenerator.SourceMapGenerator;
var util3 = util$5;
var REGEX_NEWLINE = /(\r?\n)/;
var NEWLINE_CODE = 10;
var isSourceNode = "$$$isSourceNode$$$";
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null)
    this.add(aChunks);
}
SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
  var node = new SourceNode();
  var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
  var remainingLinesIndex = 0;
  var shiftNextLine = function() {
    var lineContents = getNextLine();
    var newLine = getNextLine() || "";
    return lineContents + newLine;
    function getNextLine() {
      return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
    }
  };
  var lastGeneratedLine = 1, lastGeneratedColumn = 0;
  var lastMapping = null;
  aSourceMapConsumer.eachMapping(function(mapping) {
    if (lastMapping !== null) {
      if (lastGeneratedLine < mapping.generatedLine) {
        addMappingWithCode(lastMapping, shiftNextLine());
        lastGeneratedLine++;
        lastGeneratedColumn = 0;
      } else {
        var nextLine = remainingLines[remainingLinesIndex] || "";
        var code = nextLine.substr(0, mapping.generatedColumn - lastGeneratedColumn);
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn - lastGeneratedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
        addMappingWithCode(lastMapping, code);
        lastMapping = mapping;
        return;
      }
    }
    while (lastGeneratedLine < mapping.generatedLine) {
      node.add(shiftNextLine());
      lastGeneratedLine++;
    }
    if (lastGeneratedColumn < mapping.generatedColumn) {
      var nextLine = remainingLines[remainingLinesIndex] || "";
      node.add(nextLine.substr(0, mapping.generatedColumn));
      remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
      lastGeneratedColumn = mapping.generatedColumn;
    }
    lastMapping = mapping;
  }, this);
  if (remainingLinesIndex < remainingLines.length) {
    if (lastMapping) {
      addMappingWithCode(lastMapping, shiftNextLine());
    }
    node.add(remainingLines.splice(remainingLinesIndex).join(""));
  }
  aSourceMapConsumer.sources.forEach(function(sourceFile) {
    var content = aSourceMapConsumer.sourceContentFor(sourceFile);
    if (content != null) {
      if (aRelativePath != null) {
        sourceFile = util3.join(aRelativePath, sourceFile);
      }
      node.setSourceContent(sourceFile, content);
    }
  });
  return node;
  function addMappingWithCode(mapping, code) {
    if (mapping === null || mapping.source === void 0) {
      node.add(code);
    } else {
      var source = aRelativePath ? util3.join(aRelativePath, mapping.source) : mapping.source;
      node.add(new SourceNode(
        mapping.originalLine,
        mapping.originalColumn,
        source,
        code,
        mapping.name
      ));
    }
  }
};
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function(chunk) {
      this.add(chunk);
    }, this);
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  } else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length - 1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  } else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    } else {
      if (chunk !== "") {
        aFn(chunk, {
          source: this.source,
          line: this.line,
          column: this.column,
          name: this.name
        });
      }
    }
  }
};
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len - 1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  } else if (typeof lastChild === "string") {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  } else {
    this.children.push("".replace(aPattern, aReplacement));
  }
  return this;
};
SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
  this.sourceContents[util3.toSetString(aSourceFile)] = aSourceContent;
};
SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
  for (var i = 0, len = this.children.length; i < len; i++) {
    if (this.children[i][isSourceNode]) {
      this.children[i].walkSourceContents(aFn);
    }
  }
  var sources = Object.keys(this.sourceContents);
  for (var i = 0, len = sources.length; i < len; i++) {
    aFn(util3.fromSetString(sources[i]), this.sourceContents[sources[i]]);
  }
};
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function(chunk) {
    str += chunk;
  });
  return str;
};
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map2 = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function(chunk, original) {
    generated.code += chunk;
    if (original.source !== null && original.line !== null && original.column !== null) {
      if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
        map2.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map2.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map2.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function(sourceFile, sourceContent) {
    map2.setSourceContent(sourceFile, sourceContent);
  });
  return { code: generated.code, map: map2 };
};
var SourceMapConsumer = sourceMapConsumer.SourceMapConsumer;
var lineSplitRE = /\r?\n/;
function getOriginalPos(map2, { line, column }) {
  return new Promise((resolve2) => {
    if (!map2)
      return resolve2(null);
    const consumer = new SourceMapConsumer(map2);
    const pos = consumer.originalPositionFor({ line, column });
    if (pos.line != null && pos.column != null)
      resolve2(pos);
    else
      resolve2(null);
  });
}
var stackIgnorePatterns = [
  "node:internal",
  "/vitest/dist/",
  "/node_modules/chai/",
  "/node_modules/tinypool/",
  "/node_modules/tinyspy/"
];
function extractLocation(urlLike) {
  if (!urlLike.includes(":"))
    return [urlLike];
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/[()]/g, ""));
  if (!parts)
    return [urlLike];
  return [parts[1], parts[2] || void 0, parts[3] || void 0];
}
function parseStacktrace(e, full = false) {
  if (e.stacks)
    return e.stacks;
  const stackStr = e.stack || e.stackStr || "";
  const stackFrames = stackStr.split("\n").map((raw) => {
    let line = raw.trim();
    if (line.includes("(eval "))
      line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
    let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
    const location = sanitizedLine.match(/ (\(.+\)$)/);
    sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
    const [url, lineNumber, columnNumber] = extractLocation(location ? location[1] : sanitizedLine);
    let method = location && sanitizedLine || "";
    let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
    if (!file || !lineNumber || !columnNumber)
      return null;
    if (method.startsWith("async "))
      method = method.slice(6);
    if (file.startsWith("file://"))
      file = file.slice(7);
    if (!full && stackIgnorePatterns.some((p) => file && file.includes(p)))
      return null;
    return {
      method,
      file: slash(file),
      line: parseInt(lineNumber),
      column: parseInt(columnNumber)
    };
  }).filter(notNullish);
  e.stacks = stackFrames;
  return stackFrames;
}
function posToNumber(source, pos) {
  if (typeof pos === "number")
    return pos;
  const lines = source.split(lineSplitRE);
  const { line, column } = pos;
  let start = 0;
  if (line > lines.length)
    return source.length;
  for (let i = 0; i < line - 1; i++)
    start += lines[i].length + 1;
  return start + column;
}
function numberToPos(source, offset) {
  if (typeof offset !== "number")
    return offset;
  if (offset > source.length) {
    throw new Error(`offset is longer than source length! offset ${offset} > length ${source.length}`);
  }
  const lines = source.split(lineSplitRE);
  let counted = 0;
  let line = 0;
  let column = 0;
  for (; line < lines.length; line++) {
    const lineLength = lines[line].length + 1;
    if (counted + lineLength >= offset) {
      column = offset - counted + 1;
      break;
    }
    counted += lineLength;
  }
  return { line: line + 1, column };
}
function Diff() {
}
Diff.prototype = {
  diff: function diff(oldString, newString) {
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var callback = options.callback;
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    this.options = options;
    var self2 = this;
    function done(value) {
      if (callback) {
        setTimeout(function() {
          callback(void 0, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    }
    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length, oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;
    if (options.maxEditLength) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }
    var bestPath = [{
      newPos: -1,
      components: []
    }];
    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    }
    function execEditLength() {
      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
        var basePath = void 0;
        var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1], _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
        if (addPath) {
          bestPath[diagonalPath - 1] = void 0;
        }
        var canAdd = addPath && addPath.newPos + 1 < newLen, canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
        if (!canAdd && !canRemove) {
          bestPath[diagonalPath] = void 0;
          continue;
        }
        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
          basePath = clonePath(removePath);
          self2.pushComponent(basePath.components, void 0, true);
        } else {
          basePath = addPath;
          basePath.newPos++;
          self2.pushComponent(basePath.components, true, void 0);
        }
        _oldPos = self2.extractCommon(basePath, newString, oldString, diagonalPath);
        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
          return done(buildValues(self2, basePath.components, newString, oldString, self2.useLongestToken));
        } else {
          bestPath[diagonalPath] = basePath;
        }
      }
      editLength++;
    }
    if (callback) {
      (function exec() {
        setTimeout(function() {
          if (editLength > maxEditLength) {
            return callback();
          }
          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength) {
        var ret = execEditLength();
        if (ret) {
          return ret;
        }
      }
    }
  },
  pushComponent: function pushComponent(components, added, removed) {
    var last = components[components.length - 1];
    if (last && last.added === added && last.removed === removed) {
      components[components.length - 1] = {
        count: last.count + 1,
        added,
        removed
      };
    } else {
      components.push({
        count: 1,
        added,
        removed
      });
    }
  },
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath, commonCount = 0;
    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }
    if (commonCount) {
      basePath.components.push({
        count: commonCount
      });
    }
    basePath.newPos = newPos;
    return oldPos;
  },
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },
  removeEmpty: function removeEmpty(array2) {
    var ret = [];
    for (var i = 0; i < array2.length; i++) {
      if (array2[i]) {
        ret.push(array2[i]);
      }
    }
    return ret;
  },
  castInput: function castInput(value) {
    return value;
  },
  tokenize: function tokenize(value) {
    return value.split("");
  },
  join: function join2(chars2) {
    return chars2.join("");
  }
};
function buildValues(diff3, components, newString, oldString, useLongestToken) {
  var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];
    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function(value2, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value2.length ? oldValue : value2;
        });
        component.value = diff3.join(value);
      } else {
        component.value = diff3.join(newString.slice(newPos, newPos + component.count));
      }
      newPos += component.count;
      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff3.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count;
      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  }
  var lastComponent = components[componentLen - 1];
  if (componentLen > 1 && typeof lastComponent.value === "string" && (lastComponent.added || lastComponent.removed) && diff3.equals("", lastComponent.value)) {
    components[componentLen - 2].value += lastComponent.value;
    components.pop();
  }
  return components;
}
function clonePath(path2) {
  return {
    newPos: path2.newPos,
    components: path2.components.slice(0)
  };
}
var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new Diff();
wordDiff.equals = function(left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }
  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};
wordDiff.tokenize = function(value) {
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/);
  for (var i = 0; i < tokens.length - 1; i++) {
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }
  return tokens;
};
var lineDiff = new Diff();
lineDiff.tokenize = function(value) {
  var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  }
  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];
    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }
      retLines.push(line);
    }
  }
  return retLines;
};
function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}
var sentenceDiff = new Diff();
sentenceDiff.tokenize = function(value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var cssDiff = new Diff();
cssDiff.tokenize = function(value) {
  return value.split(/([{}:;,]|\s+)/);
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter))
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n2 = Object.prototype.toString.call(o).slice(8, -1);
  if (n2 === "Object" && o.constructor)
    n2 = o.constructor.name;
  if (n2 === "Map" || n2 === "Set")
    return Array.from(o);
  if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new Diff();
jsonDiff.useLongestToken = true;
jsonDiff.tokenize = lineDiff.tokenize;
jsonDiff.castInput = function(value) {
  var _this$options = this.options, undefinedReplacement = _this$options.undefinedReplacement, _this$options$stringi = _this$options.stringifyReplacer, stringifyReplacer = _this$options$stringi === void 0 ? function(k, v2) {
    return typeof v2 === "undefined" ? undefinedReplacement : v2;
  } : _this$options$stringi;
  return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
};
jsonDiff.equals = function(left, right) {
  return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
};
function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];
  if (replacer) {
    obj = replacer(key, obj);
  }
  var i;
  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }
  var canonicalizedObj;
  if ("[object Array]" === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);
    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }
    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }
  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }
  if (_typeof(obj) === "object" && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);
    var sortedKeys = [], _key;
    for (_key in obj) {
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }
    sortedKeys.sort();
    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }
    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }
  return canonicalizedObj;
}
var arrayDiff = new Diff();
arrayDiff.tokenize = function(value) {
  return value.slice();
};
arrayDiff.join = arrayDiff.removeEmpty = function(value) {
  return value;
};
function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  if (!options) {
    options = {};
  }
  if (typeof options.context === "undefined") {
    options.context = 4;
  }
  var diff3 = diffLines(oldStr, newStr, options);
  if (!diff3) {
    return;
  }
  diff3.push({
    value: "",
    lines: []
  });
  function contextLines(lines) {
    return lines.map(function(entry) {
      return " " + entry;
    });
  }
  var hunks = [];
  var oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
  var _loop = function _loop2(i2) {
    var current = diff3[i2], lines = current.lines || current.value.replace(/\n$/, "").split("\n");
    current.lines = lines;
    if (current.added || current.removed) {
      var _curRange;
      if (!oldRangeStart) {
        var prev = diff3[i2 - 1];
        oldRangeStart = oldLine;
        newRangeStart = newLine;
        if (prev) {
          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
          oldRangeStart -= curRange.length;
          newRangeStart -= curRange.length;
        }
      }
      (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function(entry) {
        return (current.added ? "+" : "-") + entry;
      })));
      if (current.added) {
        newLine += lines.length;
      } else {
        oldLine += lines.length;
      }
    } else {
      if (oldRangeStart) {
        if (lines.length <= options.context * 2 && i2 < diff3.length - 2) {
          var _curRange2;
          (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
        } else {
          var _curRange3;
          var contextSize = Math.min(lines.length, options.context);
          (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));
          var hunk = {
            oldStart: oldRangeStart,
            oldLines: oldLine - oldRangeStart + contextSize,
            newStart: newRangeStart,
            newLines: newLine - newRangeStart + contextSize,
            lines: curRange
          };
          if (i2 >= diff3.length - 2 && lines.length <= options.context) {
            var oldEOFNewline = /\n$/.test(oldStr);
            var newEOFNewline = /\n$/.test(newStr);
            var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;
            if (!oldEOFNewline && noNlBeforeAdds && oldStr.length > 0) {
              curRange.splice(hunk.oldLines, 0, "\\ No newline at end of file");
            }
            if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
              curRange.push("\\ No newline at end of file");
            }
          }
          hunks.push(hunk);
          oldRangeStart = 0;
          newRangeStart = 0;
          curRange = [];
        }
      }
      oldLine += lines.length;
      newLine += lines.length;
    }
  };
  for (var i = 0; i < diff3.length; i++) {
    _loop(i);
  }
  return {
    oldFileName,
    newFileName,
    oldHeader,
    newHeader,
    hunks
  };
}
function formatPatch(diff3) {
  var ret = [];
  if (diff3.oldFileName == diff3.newFileName) {
    ret.push("Index: " + diff3.oldFileName);
  }
  ret.push("===================================================================");
  ret.push("--- " + diff3.oldFileName + (typeof diff3.oldHeader === "undefined" ? "" : "	" + diff3.oldHeader));
  ret.push("+++ " + diff3.newFileName + (typeof diff3.newHeader === "undefined" ? "" : "	" + diff3.newHeader));
  for (var i = 0; i < diff3.hunks.length; i++) {
    var hunk = diff3.hunks[i];
    if (hunk.oldLines === 0) {
      hunk.oldStart -= 1;
    }
    if (hunk.newLines === 0) {
      hunk.newStart -= 1;
    }
    ret.push("@@ -" + hunk.oldStart + "," + hunk.oldLines + " +" + hunk.newStart + "," + hunk.newLines + " @@");
    ret.push.apply(ret, hunk.lines);
  }
  return ret.join("\n") + "\n";
}
function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  return formatPatch(structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options));
}
function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
}
function isFullwidthCodePoint(codePoint) {
  if (!Number.isInteger(codePoint)) {
    return false;
  }
  return codePoint >= 4352 && (codePoint <= 4447 || codePoint === 9001 || codePoint === 9002 || 11904 <= codePoint && codePoint <= 12871 && codePoint !== 12351 || 12880 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65131 || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 262141);
}
var ANSI_BACKGROUND_OFFSET = 10;
var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
function assembleStyles() {
  const codes = /* @__PURE__ */ new Map();
  const styles = {
    modifier: {
      reset: [0, 0],
      bold: [1, 22],
      dim: [2, 22],
      italic: [3, 23],
      underline: [4, 24],
      overline: [53, 55],
      inverse: [7, 27],
      hidden: [8, 28],
      strikethrough: [9, 29]
    },
    color: {
      black: [30, 39],
      red: [31, 39],
      green: [32, 39],
      yellow: [33, 39],
      blue: [34, 39],
      magenta: [35, 39],
      cyan: [36, 39],
      white: [37, 39],
      blackBright: [90, 39],
      redBright: [91, 39],
      greenBright: [92, 39],
      yellowBright: [93, 39],
      blueBright: [94, 39],
      magentaBright: [95, 39],
      cyanBright: [96, 39],
      whiteBright: [97, 39]
    },
    bgColor: {
      bgBlack: [40, 49],
      bgRed: [41, 49],
      bgGreen: [42, 49],
      bgYellow: [43, 49],
      bgBlue: [44, 49],
      bgMagenta: [45, 49],
      bgCyan: [46, 49],
      bgWhite: [47, 49],
      bgBlackBright: [100, 49],
      bgRedBright: [101, 49],
      bgGreenBright: [102, 49],
      bgYellowBright: [103, 49],
      bgBlueBright: [104, 49],
      bgMagentaBright: [105, 49],
      bgCyanBright: [106, 49],
      bgWhiteBright: [107, 49]
    }
  };
  styles.color.gray = styles.color.blackBright;
  styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
  styles.color.grey = styles.color.blackBright;
  styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\x1B[${style[0]}m`,
        close: `\x1B[${style[1]}m`
      };
      group[styleName] = styles[styleName];
      codes.set(style[0], style[1]);
    }
    Object.defineProperty(styles, groupName, {
      value: group,
      enumerable: false
    });
  }
  Object.defineProperty(styles, "codes", {
    value: codes,
    enumerable: false
  });
  styles.color.close = "\x1B[39m";
  styles.bgColor.close = "\x1B[49m";
  styles.color.ansi = wrapAnsi16();
  styles.color.ansi256 = wrapAnsi256();
  styles.color.ansi16m = wrapAnsi16m();
  styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
  styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
  Object.defineProperties(styles, {
    rgbToAnsi256: {
      value: (red, green, blue) => {
        if (red === green && green === blue) {
          if (red < 8) {
            return 16;
          }
          if (red > 248) {
            return 231;
          }
          return Math.round((red - 8) / 247 * 24) + 232;
        }
        return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
      },
      enumerable: false
    },
    hexToRgb: {
      value: (hex) => {
        const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
        if (!matches) {
          return [0, 0, 0];
        }
        let { colorString } = matches.groups;
        if (colorString.length === 3) {
          colorString = colorString.split("").map((character) => character + character).join("");
        }
        const integer = Number.parseInt(colorString, 16);
        return [
          integer >> 16 & 255,
          integer >> 8 & 255,
          integer & 255
        ];
      },
      enumerable: false
    },
    hexToAnsi256: {
      value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
      enumerable: false
    },
    ansi256ToAnsi: {
      value: (code) => {
        if (code < 8) {
          return 30 + code;
        }
        if (code < 16) {
          return 90 + (code - 8);
        }
        let red;
        let green;
        let blue;
        if (code >= 232) {
          red = ((code - 232) * 10 + 8) / 255;
          green = red;
          blue = red;
        } else {
          code -= 16;
          const remainder = code % 36;
          red = Math.floor(code / 36) / 5;
          green = Math.floor(remainder / 6) / 5;
          blue = remainder % 6 / 5;
        }
        const value = Math.max(red, green, blue) * 2;
        if (value === 0) {
          return 30;
        }
        let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
        if (value === 2) {
          result += 60;
        }
        return result;
      },
      enumerable: false
    },
    rgbToAnsi: {
      value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
      enumerable: false
    },
    hexToAnsi: {
      value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
      enumerable: false
    }
  });
  return styles;
}
var ansiStyles = assembleStyles();
var astralRegex = /^[\uD800-\uDBFF][\uDC00-\uDFFF]$/;
var ESCAPES = [
  "\x1B",
  "\x9B"
];
var wrapAnsi = (code) => `${ESCAPES[0]}[${code}m`;
var checkAnsi = (ansiCodes, isEscapes, endAnsiCode) => {
  let output = [];
  ansiCodes = [...ansiCodes];
  for (let ansiCode of ansiCodes) {
    const ansiCodeOrigin = ansiCode;
    if (ansiCode.includes(";")) {
      ansiCode = ansiCode.split(";")[0][0] + "0";
    }
    const item = ansiStyles.codes.get(Number.parseInt(ansiCode, 10));
    if (item) {
      const indexEscape = ansiCodes.indexOf(item.toString());
      if (indexEscape === -1) {
        output.push(wrapAnsi(isEscapes ? item : ansiCodeOrigin));
      } else {
        ansiCodes.splice(indexEscape, 1);
      }
    } else if (isEscapes) {
      output.push(wrapAnsi(0));
      break;
    } else {
      output.push(wrapAnsi(ansiCodeOrigin));
    }
  }
  if (isEscapes) {
    output = output.filter((element, index) => output.indexOf(element) === index);
    if (endAnsiCode !== void 0) {
      const fistEscapeCode = wrapAnsi(ansiStyles.codes.get(Number.parseInt(endAnsiCode, 10)));
      output = output.reduce((current, next) => next === fistEscapeCode ? [next, ...current] : [...current, next], []);
    }
  }
  return output.join("");
};
function sliceAnsi(string2, begin, end) {
  const characters = [...string2];
  const ansiCodes = [];
  let stringEnd = typeof end === "number" ? end : characters.length;
  let isInsideEscape = false;
  let ansiCode;
  let visible = 0;
  let output = "";
  for (const [index, character] of characters.entries()) {
    let leftEscape = false;
    if (ESCAPES.includes(character)) {
      const code = /\d[^m]*/.exec(string2.slice(index, index + 18));
      ansiCode = code && code.length > 0 ? code[0] : void 0;
      if (visible < stringEnd) {
        isInsideEscape = true;
        if (ansiCode !== void 0) {
          ansiCodes.push(ansiCode);
        }
      }
    } else if (isInsideEscape && character === "m") {
      isInsideEscape = false;
      leftEscape = true;
    }
    if (!isInsideEscape && !leftEscape) {
      visible++;
    }
    if (!astralRegex.test(character) && isFullwidthCodePoint(character.codePointAt())) {
      visible++;
      if (typeof end !== "number") {
        stringEnd++;
      }
    }
    if (visible > begin && visible <= stringEnd) {
      output += character;
    } else if (visible === begin && !isInsideEscape && ansiCode !== void 0) {
      output = checkAnsi(ansiCodes);
    } else if (visible >= stringEnd) {
      output += checkAnsi(ansiCodes, true, ansiCode);
      break;
    }
  }
  return output;
}
function ansiRegex({ onlyFirst = false } = {}) {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}
function stripAnsi(string2) {
  if (typeof string2 !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string2}\``);
  }
  return string2.replace(ansiRegex(), "");
}
var eastasianwidth = { exports: {} };
(function(module2) {
  var eaw = {};
  {
    module2.exports = eaw;
  }
  eaw.eastAsianWidth = function(character) {
    var x = character.charCodeAt(0);
    var y = character.length == 2 ? character.charCodeAt(1) : 0;
    var codePoint = x;
    if (55296 <= x && x <= 56319 && (56320 <= y && y <= 57343)) {
      x &= 1023;
      y &= 1023;
      codePoint = x << 10 | y;
      codePoint += 65536;
    }
    if (12288 == codePoint || 65281 <= codePoint && codePoint <= 65376 || 65504 <= codePoint && codePoint <= 65510) {
      return "F";
    }
    if (8361 == codePoint || 65377 <= codePoint && codePoint <= 65470 || 65474 <= codePoint && codePoint <= 65479 || 65482 <= codePoint && codePoint <= 65487 || 65490 <= codePoint && codePoint <= 65495 || 65498 <= codePoint && codePoint <= 65500 || 65512 <= codePoint && codePoint <= 65518) {
      return "H";
    }
    if (4352 <= codePoint && codePoint <= 4447 || 4515 <= codePoint && codePoint <= 4519 || 4602 <= codePoint && codePoint <= 4607 || 9001 <= codePoint && codePoint <= 9002 || 11904 <= codePoint && codePoint <= 11929 || 11931 <= codePoint && codePoint <= 12019 || 12032 <= codePoint && codePoint <= 12245 || 12272 <= codePoint && codePoint <= 12283 || 12289 <= codePoint && codePoint <= 12350 || 12353 <= codePoint && codePoint <= 12438 || 12441 <= codePoint && codePoint <= 12543 || 12549 <= codePoint && codePoint <= 12589 || 12593 <= codePoint && codePoint <= 12686 || 12688 <= codePoint && codePoint <= 12730 || 12736 <= codePoint && codePoint <= 12771 || 12784 <= codePoint && codePoint <= 12830 || 12832 <= codePoint && codePoint <= 12871 || 12880 <= codePoint && codePoint <= 13054 || 13056 <= codePoint && codePoint <= 19903 || 19968 <= codePoint && codePoint <= 42124 || 42128 <= codePoint && codePoint <= 42182 || 43360 <= codePoint && codePoint <= 43388 || 44032 <= codePoint && codePoint <= 55203 || 55216 <= codePoint && codePoint <= 55238 || 55243 <= codePoint && codePoint <= 55291 || 63744 <= codePoint && codePoint <= 64255 || 65040 <= codePoint && codePoint <= 65049 || 65072 <= codePoint && codePoint <= 65106 || 65108 <= codePoint && codePoint <= 65126 || 65128 <= codePoint && codePoint <= 65131 || 110592 <= codePoint && codePoint <= 110593 || 127488 <= codePoint && codePoint <= 127490 || 127504 <= codePoint && codePoint <= 127546 || 127552 <= codePoint && codePoint <= 127560 || 127568 <= codePoint && codePoint <= 127569 || 131072 <= codePoint && codePoint <= 194367 || 177984 <= codePoint && codePoint <= 196605 || 196608 <= codePoint && codePoint <= 262141) {
      return "W";
    }
    if (32 <= codePoint && codePoint <= 126 || 162 <= codePoint && codePoint <= 163 || 165 <= codePoint && codePoint <= 166 || 172 == codePoint || 175 == codePoint || 10214 <= codePoint && codePoint <= 10221 || 10629 <= codePoint && codePoint <= 10630) {
      return "Na";
    }
    if (161 == codePoint || 164 == codePoint || 167 <= codePoint && codePoint <= 168 || 170 == codePoint || 173 <= codePoint && codePoint <= 174 || 176 <= codePoint && codePoint <= 180 || 182 <= codePoint && codePoint <= 186 || 188 <= codePoint && codePoint <= 191 || 198 == codePoint || 208 == codePoint || 215 <= codePoint && codePoint <= 216 || 222 <= codePoint && codePoint <= 225 || 230 == codePoint || 232 <= codePoint && codePoint <= 234 || 236 <= codePoint && codePoint <= 237 || 240 == codePoint || 242 <= codePoint && codePoint <= 243 || 247 <= codePoint && codePoint <= 250 || 252 == codePoint || 254 == codePoint || 257 == codePoint || 273 == codePoint || 275 == codePoint || 283 == codePoint || 294 <= codePoint && codePoint <= 295 || 299 == codePoint || 305 <= codePoint && codePoint <= 307 || 312 == codePoint || 319 <= codePoint && codePoint <= 322 || 324 == codePoint || 328 <= codePoint && codePoint <= 331 || 333 == codePoint || 338 <= codePoint && codePoint <= 339 || 358 <= codePoint && codePoint <= 359 || 363 == codePoint || 462 == codePoint || 464 == codePoint || 466 == codePoint || 468 == codePoint || 470 == codePoint || 472 == codePoint || 474 == codePoint || 476 == codePoint || 593 == codePoint || 609 == codePoint || 708 == codePoint || 711 == codePoint || 713 <= codePoint && codePoint <= 715 || 717 == codePoint || 720 == codePoint || 728 <= codePoint && codePoint <= 731 || 733 == codePoint || 735 == codePoint || 768 <= codePoint && codePoint <= 879 || 913 <= codePoint && codePoint <= 929 || 931 <= codePoint && codePoint <= 937 || 945 <= codePoint && codePoint <= 961 || 963 <= codePoint && codePoint <= 969 || 1025 == codePoint || 1040 <= codePoint && codePoint <= 1103 || 1105 == codePoint || 8208 == codePoint || 8211 <= codePoint && codePoint <= 8214 || 8216 <= codePoint && codePoint <= 8217 || 8220 <= codePoint && codePoint <= 8221 || 8224 <= codePoint && codePoint <= 8226 || 8228 <= codePoint && codePoint <= 8231 || 8240 == codePoint || 8242 <= codePoint && codePoint <= 8243 || 8245 == codePoint || 8251 == codePoint || 8254 == codePoint || 8308 == codePoint || 8319 == codePoint || 8321 <= codePoint && codePoint <= 8324 || 8364 == codePoint || 8451 == codePoint || 8453 == codePoint || 8457 == codePoint || 8467 == codePoint || 8470 == codePoint || 8481 <= codePoint && codePoint <= 8482 || 8486 == codePoint || 8491 == codePoint || 8531 <= codePoint && codePoint <= 8532 || 8539 <= codePoint && codePoint <= 8542 || 8544 <= codePoint && codePoint <= 8555 || 8560 <= codePoint && codePoint <= 8569 || 8585 == codePoint || 8592 <= codePoint && codePoint <= 8601 || 8632 <= codePoint && codePoint <= 8633 || 8658 == codePoint || 8660 == codePoint || 8679 == codePoint || 8704 == codePoint || 8706 <= codePoint && codePoint <= 8707 || 8711 <= codePoint && codePoint <= 8712 || 8715 == codePoint || 8719 == codePoint || 8721 == codePoint || 8725 == codePoint || 8730 == codePoint || 8733 <= codePoint && codePoint <= 8736 || 8739 == codePoint || 8741 == codePoint || 8743 <= codePoint && codePoint <= 8748 || 8750 == codePoint || 8756 <= codePoint && codePoint <= 8759 || 8764 <= codePoint && codePoint <= 8765 || 8776 == codePoint || 8780 == codePoint || 8786 == codePoint || 8800 <= codePoint && codePoint <= 8801 || 8804 <= codePoint && codePoint <= 8807 || 8810 <= codePoint && codePoint <= 8811 || 8814 <= codePoint && codePoint <= 8815 || 8834 <= codePoint && codePoint <= 8835 || 8838 <= codePoint && codePoint <= 8839 || 8853 == codePoint || 8857 == codePoint || 8869 == codePoint || 8895 == codePoint || 8978 == codePoint || 9312 <= codePoint && codePoint <= 9449 || 9451 <= codePoint && codePoint <= 9547 || 9552 <= codePoint && codePoint <= 9587 || 9600 <= codePoint && codePoint <= 9615 || 9618 <= codePoint && codePoint <= 9621 || 9632 <= codePoint && codePoint <= 9633 || 9635 <= codePoint && codePoint <= 9641 || 9650 <= codePoint && codePoint <= 9651 || 9654 <= codePoint && codePoint <= 9655 || 9660 <= codePoint && codePoint <= 9661 || 9664 <= codePoint && codePoint <= 9665 || 9670 <= codePoint && codePoint <= 9672 || 9675 == codePoint || 9678 <= codePoint && codePoint <= 9681 || 9698 <= codePoint && codePoint <= 9701 || 9711 == codePoint || 9733 <= codePoint && codePoint <= 9734 || 9737 == codePoint || 9742 <= codePoint && codePoint <= 9743 || 9748 <= codePoint && codePoint <= 9749 || 9756 == codePoint || 9758 == codePoint || 9792 == codePoint || 9794 == codePoint || 9824 <= codePoint && codePoint <= 9825 || 9827 <= codePoint && codePoint <= 9829 || 9831 <= codePoint && codePoint <= 9834 || 9836 <= codePoint && codePoint <= 9837 || 9839 == codePoint || 9886 <= codePoint && codePoint <= 9887 || 9918 <= codePoint && codePoint <= 9919 || 9924 <= codePoint && codePoint <= 9933 || 9935 <= codePoint && codePoint <= 9953 || 9955 == codePoint || 9960 <= codePoint && codePoint <= 9983 || 10045 == codePoint || 10071 == codePoint || 10102 <= codePoint && codePoint <= 10111 || 11093 <= codePoint && codePoint <= 11097 || 12872 <= codePoint && codePoint <= 12879 || 57344 <= codePoint && codePoint <= 63743 || 65024 <= codePoint && codePoint <= 65039 || 65533 == codePoint || 127232 <= codePoint && codePoint <= 127242 || 127248 <= codePoint && codePoint <= 127277 || 127280 <= codePoint && codePoint <= 127337 || 127344 <= codePoint && codePoint <= 127386 || 917760 <= codePoint && codePoint <= 917999 || 983040 <= codePoint && codePoint <= 1048573 || 1048576 <= codePoint && codePoint <= 1114109) {
      return "A";
    }
    return "N";
  };
  eaw.characterLength = function(character) {
    var code = this.eastAsianWidth(character);
    if (code == "F" || code == "W" || code == "A") {
      return 2;
    } else {
      return 1;
    }
  };
  function stringToArray(string2) {
    return string2.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
  }
  eaw.length = function(string2) {
    var characters = stringToArray(string2);
    var len = 0;
    for (var i = 0; i < characters.length; i++) {
      len = len + this.characterLength(characters[i]);
    }
    return len;
  };
  eaw.slice = function(text, start, end) {
    textLen = eaw.length(text);
    start = start ? start : 0;
    end = end ? end : 1;
    if (start < 0) {
      start = textLen + start;
    }
    if (end < 0) {
      end = textLen + end;
    }
    var result = "";
    var eawLen = 0;
    var chars2 = stringToArray(text);
    for (var i = 0; i < chars2.length; i++) {
      var char = chars2[i];
      var charLen = eaw.length(char);
      if (eawLen >= start - (charLen == 2 ? 1 : 0)) {
        if (eawLen + charLen <= end) {
          result += char;
        } else {
          break;
        }
      }
      eawLen += charLen;
    }
    return result;
  };
})(eastasianwidth);
var eastAsianWidth = eastasianwidth.exports;
var emojiRegex = function() {
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};
function stringWidth(string2, options = {}) {
  if (typeof string2 !== "string" || string2.length === 0) {
    return 0;
  }
  options = {
    ambiguousIsNarrow: true,
    ...options
  };
  string2 = stripAnsi(string2);
  if (string2.length === 0) {
    return 0;
  }
  string2 = string2.replace(emojiRegex(), "  ");
  const ambiguousCharacterWidth = options.ambiguousIsNarrow ? 1 : 2;
  let width = 0;
  for (const character of string2) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879) {
      continue;
    }
    const code = eastAsianWidth.eastAsianWidth(character);
    switch (code) {
      case "F":
      case "W":
        width += 2;
        break;
      case "A":
        width += ambiguousCharacterWidth;
        break;
      default:
        width += 1;
    }
  }
  return width;
}
function getIndexOfNearestSpace(string2, wantedIndex, shouldSearchRight) {
  if (string2.charAt(wantedIndex) === " ") {
    return wantedIndex;
  }
  for (let index = 1; index <= 3; index++) {
    if (shouldSearchRight) {
      if (string2.charAt(wantedIndex + index) === " ") {
        return wantedIndex + index;
      }
    } else if (string2.charAt(wantedIndex - index) === " ") {
      return wantedIndex - index;
    }
  }
  return wantedIndex;
}
function cliTruncate(text, columns, options) {
  options = {
    position: "end",
    preferTruncationOnSpace: false,
    truncationCharacter: "\u2026",
    ...options
  };
  const { position, space, preferTruncationOnSpace } = options;
  let { truncationCharacter } = options;
  if (typeof text !== "string") {
    throw new TypeError(`Expected \`input\` to be a string, got ${typeof text}`);
  }
  if (typeof columns !== "number") {
    throw new TypeError(`Expected \`columns\` to be a number, got ${typeof columns}`);
  }
  if (columns < 1) {
    return "";
  }
  if (columns === 1) {
    return truncationCharacter;
  }
  const length = stringWidth(text);
  if (length <= columns) {
    return text;
  }
  if (position === "start") {
    if (preferTruncationOnSpace) {
      const nearestSpace = getIndexOfNearestSpace(text, length - columns + 1, true);
      return truncationCharacter + sliceAnsi(text, nearestSpace, length).trim();
    }
    if (space === true) {
      truncationCharacter += " ";
    }
    return truncationCharacter + sliceAnsi(text, length - columns + stringWidth(truncationCharacter), length);
  }
  if (position === "middle") {
    if (space === true) {
      truncationCharacter = ` ${truncationCharacter} `;
    }
    const half = Math.floor(columns / 2);
    if (preferTruncationOnSpace) {
      const spaceNearFirstBreakPoint = getIndexOfNearestSpace(text, half);
      const spaceNearSecondBreakPoint = getIndexOfNearestSpace(text, length - (columns - half) + 1, true);
      return sliceAnsi(text, 0, spaceNearFirstBreakPoint) + truncationCharacter + sliceAnsi(text, spaceNearSecondBreakPoint, length).trim();
    }
    return sliceAnsi(text, 0, half) + truncationCharacter + sliceAnsi(text, length - (columns - half) + stringWidth(truncationCharacter), length);
  }
  if (position === "end") {
    if (preferTruncationOnSpace) {
      const nearestSpace = getIndexOfNearestSpace(text, columns - 1);
      return sliceAnsi(text, 0, nearestSpace) + truncationCharacter;
    }
    if (space === true) {
      truncationCharacter = ` ${truncationCharacter}`;
    }
    return sliceAnsi(text, 0, columns - stringWidth(truncationCharacter)) + truncationCharacter;
  }
  throw new Error(`Expected \`options.position\` to be either \`start\`, \`middle\` or \`end\`, got ${position}`);
}
function formatLine(line, outputTruncateLength) {
  var _a2;
  return cliTruncate(line, (outputTruncateLength ?? (((_a2 = process.stdout) == null ? void 0 : _a2.columns) || 80)) - 4);
}
function unifiedDiff(actual, expected, options = {}) {
  if (actual === expected)
    return "";
  const { outputTruncateLength, outputDiffLines, showLegend = true } = options;
  const indent = "  ";
  const diffLimit = outputDiffLines || 15;
  const counts = {
    "+": 0,
    "-": 0
  };
  let previousState = null;
  let previousCount = 0;
  function preprocess(line) {
    if (!line || line.match(/\\ No newline/))
      return;
    const char = line[0];
    if ("-+".includes(char)) {
      if (previousState !== char) {
        previousState = char;
        previousCount = 0;
      }
      previousCount++;
      counts[char]++;
      if (previousCount === diffLimit)
        return picocolors.exports.dim(`${char} ...`);
      else if (previousCount > diffLimit)
        return;
    }
    return line;
  }
  const msg = createPatch("string", expected, actual);
  const lines = msg.split("\n").slice(5).map(preprocess).filter(Boolean);
  const isCompact = counts["+"] === 1 && counts["-"] === 1 && lines.length === 2;
  let formatted = lines.map((line) => {
    line = line.replace(/\\"/g, '"');
    if (line[0] === "-") {
      line = formatLine(line.slice(1), outputTruncateLength);
      if (isCompact)
        return picocolors.exports.green(line);
      return picocolors.exports.green(`- ${formatLine(line, outputTruncateLength)}`);
    }
    if (line[0] === "+") {
      line = formatLine(line.slice(1), outputTruncateLength);
      if (isCompact)
        return picocolors.exports.red(line);
      return picocolors.exports.red(`+ ${formatLine(line, outputTruncateLength)}`);
    }
    if (line.match(/@@/))
      return "--";
    return ` ${line}`;
  });
  if (showLegend) {
    if (isCompact) {
      formatted = [
        `${picocolors.exports.green("- Expected")}   ${formatted[0]}`,
        `${picocolors.exports.red("+ Received")}   ${formatted[1]}`
      ];
    } else {
      if (formatted[0].includes('"'))
        formatted[0] = formatted[0].replace('"', "");
      const last = formatted.length - 1;
      if (formatted[last].endsWith('"'))
        formatted[last] = formatted[last].slice(0, formatted[last].length - 1);
      formatted.unshift(picocolors.exports.green(`- Expected  - ${counts["-"]}`), picocolors.exports.red(`+ Received  + ${counts["+"]}`), "");
    }
  }
  return formatted.map((i) => indent + i).join("\n");
}
var EXPECTED_COLOR = picocolors.exports.green;
var RECEIVED_COLOR = picocolors.exports.red;
var INVERTED_COLOR = picocolors.exports.inverse;
var BOLD_WEIGHT = picocolors.exports.bold;
var DIM_COLOR = picocolors.exports.dim;
var {
  AsymmetricMatcher,
  DOMCollection,
  DOMElement,
  Immutable,
  ReactElement,
  ReactTestComponent
} = plugins_1;
var PLUGINS = [
  ReactTestComponent,
  ReactElement,
  DOMElement,
  DOMCollection,
  Immutable,
  AsymmetricMatcher
];
function matcherHint(matcherName, received = "received", expected = "expected", options = {}) {
  const {
    comment = "",
    expectedColor = EXPECTED_COLOR,
    isDirectExpectCall = false,
    isNot = false,
    promise = "",
    receivedColor = RECEIVED_COLOR,
    secondArgument = "",
    secondArgumentColor = EXPECTED_COLOR
  } = options;
  let hint = "";
  let dimString = "expect";
  if (!isDirectExpectCall && received !== "") {
    hint += DIM_COLOR(`${dimString}(`) + receivedColor(received);
    dimString = ")";
  }
  if (promise !== "") {
    hint += DIM_COLOR(`${dimString}.`) + promise;
    dimString = "";
  }
  if (isNot) {
    hint += `${DIM_COLOR(`${dimString}.`)}not`;
    dimString = "";
  }
  if (matcherName.includes(".")) {
    dimString += matcherName;
  } else {
    hint += DIM_COLOR(`${dimString}.`) + matcherName;
    dimString = "";
  }
  if (expected === "") {
    dimString += "()";
  } else {
    hint += DIM_COLOR(`${dimString}(`) + expectedColor(expected);
    if (secondArgument)
      hint += DIM_COLOR(", ") + secondArgumentColor(secondArgument);
    dimString = ")";
  }
  if (comment !== "")
    dimString += ` // ${comment}`;
  if (dimString !== "")
    hint += DIM_COLOR(dimString);
  return hint;
}
var SPACE_SYMBOL = "\xB7";
var replaceTrailingSpaces = (text) => text.replace(/\s+$/gm, (spaces) => SPACE_SYMBOL.repeat(spaces.length));
function stringify(object2, maxDepth = 10, options) {
  const MAX_LENGTH = 1e4;
  let result;
  try {
    result = format_1(object2, {
      maxDepth,
      plugins: PLUGINS,
      ...options
    });
  } catch {
    result = format_1(object2, {
      callToJSON: false,
      maxDepth,
      plugins: PLUGINS,
      ...options
    });
  }
  return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object2, Math.floor(maxDepth / 2)) : result;
}
var printReceived = (object2) => RECEIVED_COLOR(replaceTrailingSpaces(stringify(object2)));
var printExpected = (value) => EXPECTED_COLOR(replaceTrailingSpaces(stringify(value)));
function diff2(a, b, options) {
  return unifiedDiff(stringify(b), stringify(a));
}
var matcherUtils = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  EXPECTED_COLOR,
  RECEIVED_COLOR,
  INVERTED_COLOR,
  BOLD_WEIGHT,
  DIM_COLOR,
  matcherHint,
  stringify,
  printReceived,
  printExpected,
  diff: diff2
});

// node_modules/tinyspy/dist/index.js
function d(t, e) {
  if (!t)
    throw new Error(e);
}
function u(t, e) {
  return typeof e === t;
}
function f(t, e, i) {
  Object.defineProperty(t, e, i);
}
var g = /* @__PURE__ */ new Set();
function S(t) {
  d(u("function", t) || u("undefined", t), "cannot spy on a non-function value");
  let e = function(...o) {
    if (e.called = true, e.callCount++, e.calls.push(o), e.next) {
      let [s, l] = e.next;
      if (e.results.push(e.next), e.next = null, s === "ok")
        return l;
      throw l;
    }
    let r, n2 = "ok";
    if (e.impl)
      try {
        r = e.impl.apply(this, o), n2 = "ok";
      } catch (s) {
        throw r = s, n2 = "error", e.results.push([n2, s]), s;
      }
    let c = [n2, r];
    if (r && u("object", r) && u("function", r.then)) {
      let s = r.then((l) => c[1] = l).catch((l) => {
        throw c[0] = "error", c[1] = l, l;
      });
      Object.assign(s, r), r = s;
    }
    return e.results.push(c), r;
  };
  f(e, "_isMockFunction", { get: () => true }), f(e, "length", { value: t ? t.length : 0 }), f(e, "returns", {
    get() {
      return this.results.map(([, o]) => o);
    }
  }), f(e, "name", { value: t && t.name || "spy" });
  let i = () => {
    e.called = false, e.callCount = 0, e.results = [], e.calls = [];
  };
  return i(), e.impl = t, e.reset = i, e.nextError = (o) => (e.next = ["error", o], e), e.nextResult = (o) => (e.next = ["ok", o], e), e;
}
var v = (t, e) => Object.getOwnPropertyDescriptor(t, e);
function I(t, e, i) {
  d(!u("undefined", t), "spyOn could not find an object to spy upon"), d(u("object", t) || u("function", t), "cannot spyOn on a primitive value");
  let o = () => {
    if (typeof e != "object")
      return [e, "value"];
    if ("getter" in e && "setter" in e)
      throw new Error("cannot spy on both getter and setter");
    if ("getter" in e)
      return [e.getter, "get"];
    if ("setter" in e)
      return [e.setter, "set"];
    throw new Error("specify getter or setter to spy on");
  }, [r, n2] = o(), c = v(t, r), s = Object.getPrototypeOf(t), l = s && v(s, r), a = c || l;
  d(a || r in t, `${String(r)} does not exist`);
  let T = false;
  n2 === "value" && a && !a.value && a.get && (n2 = "get", T = true, i = a.get());
  let y;
  a ? y = a[n2] : n2 !== "value" ? y = () => t[r] : y = t[r], i || (i = y);
  let p = S(i), A = (m) => {
    let { value: w, ...h } = a || {
      configurable: true,
      writable: true
    };
    n2 !== "value" && delete h.writable, h[n2] = m, f(t, r, h);
  }, k = () => A(y);
  return p.restore = k, p.getOriginal = () => T ? y() : y, p.willCall = (m) => (p.impl = m, p), A(T ? () => p : p), g.add(p), p;
}

// node_modules/vitest/dist/spy.mjs
var spies = /* @__PURE__ */ new Set();
function isMockFunction(fn2) {
  return typeof fn2 === "function" && "_isMockFunction" in fn2 && fn2._isMockFunction;
}
function spyOn(obj, method, accessType) {
  const dictionary = {
    get: "getter",
    set: "setter"
  };
  const objMethod = accessType ? { [dictionary[accessType]]: method } : method;
  const stub = I(obj, objMethod);
  return enhanceSpy(stub);
}
var callOrder = 0;
function enhanceSpy(spy) {
  const stub = spy;
  let implementation;
  let instances = [];
  let invocations = [];
  const mockContext = {
    get calls() {
      return stub.calls;
    },
    get instances() {
      return instances;
    },
    get invocationCallOrder() {
      return invocations;
    },
    get results() {
      return stub.results.map(([callType, value]) => {
        const type2 = callType === "error" ? "throw" : "return";
        return { type: type2, value };
      });
    },
    get lastCall() {
      return stub.calls[stub.calls.length - 1];
    }
  };
  let onceImplementations = [];
  let name = stub.name;
  stub.getMockName = () => name || "vi.fn()";
  stub.mockName = (n2) => {
    name = n2;
    return stub;
  };
  stub.mockClear = () => {
    stub.reset();
    instances = [];
    invocations = [];
    return stub;
  };
  stub.mockReset = () => {
    stub.mockClear();
    implementation = () => void 0;
    onceImplementations = [];
    return stub;
  };
  stub.mockRestore = () => {
    stub.mockReset();
    implementation = void 0;
    return stub;
  };
  stub.getMockImplementation = () => implementation;
  stub.mockImplementation = (fn2) => {
    implementation = fn2;
    return stub;
  };
  stub.mockImplementationOnce = (fn2) => {
    onceImplementations.push(fn2);
    return stub;
  };
  stub.mockReturnThis = () => stub.mockImplementation(function() {
    return this;
  });
  stub.mockReturnValue = (val) => stub.mockImplementation(() => val);
  stub.mockReturnValueOnce = (val) => stub.mockImplementationOnce(() => val);
  stub.mockResolvedValue = (val) => stub.mockImplementation(() => Promise.resolve(val));
  stub.mockResolvedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.resolve(val));
  stub.mockRejectedValue = (val) => stub.mockImplementation(() => Promise.reject(val));
  stub.mockRejectedValueOnce = (val) => stub.mockImplementationOnce(() => Promise.reject(val));
  Object.defineProperty(stub, "mock", {
    get: () => mockContext
  });
  stub.willCall(function(...args) {
    instances.push(this);
    invocations.push(++callOrder);
    const impl = onceImplementations.shift() || implementation || stub.getOriginal() || (() => {
    });
    return impl.apply(this, args);
  });
  spies.add(stub);
  return stub;
}
function fn(implementation) {
  return enhanceSpy(I({ fn: implementation || (() => {
  }) }, "fn"));
}

// node_modules/vitest/dist/chunk-runtime-chain.98d42d89.mjs
function createChainable(keys2, fn2) {
  function create(context) {
    const chain2 = function(...args) {
      return fn2.apply(context, args);
    };
    Object.assign(chain2, fn2);
    chain2.withContext = () => chain2.bind(context);
    for (const key of keys2) {
      Object.defineProperty(chain2, key, {
        get() {
          return create({ ...context, [key]: true });
        }
      });
    }
    return chain2;
  }
  const chain = create({});
  chain.fn = fn2;
  return chain;
}
function commonjsRequire(path2) {
  throw new Error('Could not dynamically require "' + path2 + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var chaiSubset = { exports: {} };
(function(module2, exports) {
  (function() {
    (function(chaiSubset2) {
      if (typeof commonjsRequire === "function" && true && true) {
        return module2.exports = chaiSubset2;
      } else {
        return chai.use(chaiSubset2);
      }
    })(function(chai3, utils) {
      var Assertion2 = chai3.Assertion;
      var assertionPrototype = Assertion2.prototype;
      Assertion2.addMethod("containSubset", function(expected) {
        var actual = utils.flag(this, "object");
        var showDiff = chai3.config.showDiff;
        assertionPrototype.assert.call(
          this,
          compare(expected, actual),
          "expected #{act} to contain subset #{exp}",
          "expected #{act} to not contain subset #{exp}",
          expected,
          actual,
          showDiff
        );
      });
      chai3.assert.containSubset = function(val, exp, msg) {
        new chai3.Assertion(val, msg).to.be.containSubset(exp);
      };
      function compare(expected, actual) {
        if (expected === actual) {
          return true;
        }
        if (typeof actual !== typeof expected) {
          return false;
        }
        if (typeof expected !== "object" || expected === null) {
          return expected === actual;
        }
        if (!!expected && !actual) {
          return false;
        }
        if (Array.isArray(expected)) {
          if (typeof actual.length !== "number") {
            return false;
          }
          var aa = Array.prototype.slice.call(actual);
          return expected.every(function(exp) {
            return aa.some(function(act) {
              return compare(exp, act);
            });
          });
        }
        if (expected instanceof Date) {
          if (actual instanceof Date) {
            return expected.getTime() === actual.getTime();
          } else {
            return false;
          }
        }
        return Object.keys(expected).every(function(key) {
          var eo = expected[key];
          var ao = actual[key];
          if (typeof eo === "object" && eo !== null && ao !== null) {
            return compare(eo, ao);
          }
          if (typeof eo === "function") {
            return eo(ao);
          }
          return ao === eo;
        });
      }
    });
  }).call(commonjsGlobal);
})(chaiSubset);
var Subset = chaiSubset.exports;
function equals2(a, b, customTesters, strictCheck) {
  customTesters = customTesters || [];
  return eq(a, b, [], [], customTesters, strictCheck ? hasKey : hasDefinedKey);
}
function isAsymmetric(obj) {
  return !!obj && isA("Function", obj.asymmetricMatch);
}
function asymmetricMatch(a, b) {
  const asymmetricA = isAsymmetric(a);
  const asymmetricB = isAsymmetric(b);
  if (asymmetricA && asymmetricB)
    return void 0;
  if (asymmetricA)
    return a.asymmetricMatch(b);
  if (asymmetricB)
    return b.asymmetricMatch(a);
}
function eq(a, b, aStack, bStack, customTesters, hasKey2) {
  let result = true;
  const asymmetricResult = asymmetricMatch(a, b);
  if (asymmetricResult !== void 0)
    return asymmetricResult;
  for (let i = 0; i < customTesters.length; i++) {
    const customTesterResult = customTesters[i](a, b);
    if (customTesterResult !== void 0)
      return customTesterResult;
  }
  if (a instanceof Error && b instanceof Error)
    return a.message === b.message;
  if (Object.is(a, b))
    return true;
  if (a === null || b === null)
    return a === b;
  const className2 = Object.prototype.toString.call(a);
  if (className2 !== Object.prototype.toString.call(b))
    return false;
  switch (className2) {
    case "[object Boolean]":
    case "[object String]":
    case "[object Number]":
      if (typeof a !== typeof b) {
        return false;
      } else if (typeof a !== "object" && typeof b !== "object") {
        return Object.is(a, b);
      } else {
        return Object.is(a.valueOf(), b.valueOf());
      }
    case "[object Date]":
      return +a === +b;
    case "[object RegExp]":
      return a.source === b.source && a.flags === b.flags;
  }
  if (typeof a !== "object" || typeof b !== "object")
    return false;
  if (isDomNode(a) && isDomNode(b))
    return a.isEqualNode(b);
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b;
    else if (bStack[length] === b)
      return false;
  }
  aStack.push(a);
  bStack.push(b);
  if (className2 === "[object Array]" && a.length !== b.length)
    return false;
  const aKeys = keys(a, hasKey2);
  let key;
  let size = aKeys.length;
  if (keys(b, hasKey2).length !== size)
    return false;
  while (size--) {
    key = aKeys[size];
    result = hasKey2(b, key) && eq(a[key], b[key], aStack, bStack, customTesters, hasKey2);
    if (!result)
      return false;
  }
  aStack.pop();
  bStack.pop();
  return result;
}
function keys(obj, hasKey2) {
  const keys2 = [];
  for (const key in obj) {
    if (hasKey2(obj, key))
      keys2.push(key);
  }
  return keys2.concat(Object.getOwnPropertySymbols(obj).filter((symbol) => Object.getOwnPropertyDescriptor(obj, symbol).enumerable));
}
function hasDefinedKey(obj, key) {
  return hasKey(obj, key) && obj[key] !== void 0;
}
function hasKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function isA(typeName, value) {
  return Object.prototype.toString.apply(value) === `[object ${typeName}]`;
}
function isDomNode(obj) {
  return obj !== null && typeof obj === "object" && typeof obj.nodeType === "number" && typeof obj.nodeName === "string" && typeof obj.isEqualNode === "function";
}
var IS_KEYED_SENTINEL2 = "@@__IMMUTABLE_KEYED__@@";
var IS_SET_SENTINEL2 = "@@__IMMUTABLE_SET__@@";
var IS_ORDERED_SENTINEL2 = "@@__IMMUTABLE_ORDERED__@@";
function isImmutableUnorderedKeyed(maybeKeyed) {
  return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL2] && !maybeKeyed[IS_ORDERED_SENTINEL2]);
}
function isImmutableUnorderedSet(maybeSet) {
  return !!(maybeSet && maybeSet[IS_SET_SENTINEL2] && !maybeSet[IS_ORDERED_SENTINEL2]);
}
var IteratorSymbol = Symbol.iterator;
var hasIterator = (object2) => !!(object2 != null && object2[IteratorSymbol]);
var iterableEquality = (a, b, aStack = [], bStack = []) => {
  if (typeof a !== "object" || typeof b !== "object" || Array.isArray(a) || Array.isArray(b) || !hasIterator(a) || !hasIterator(b))
    return void 0;
  if (a.constructor !== b.constructor)
    return false;
  let length = aStack.length;
  while (length--) {
    if (aStack[length] === a)
      return bStack[length] === b;
  }
  aStack.push(a);
  bStack.push(b);
  const iterableEqualityWithStack = (a2, b2) => iterableEquality(a2, b2, [...aStack], [...bStack]);
  if (a.size !== void 0) {
    if (a.size !== b.size) {
      return false;
    } else if (isA("Set", a) || isImmutableUnorderedSet(a)) {
      let allFound = true;
      for (const aValue of a) {
        if (!b.has(aValue)) {
          let has2 = false;
          for (const bValue of b) {
            const isEqual = equals2(aValue, bValue, [iterableEqualityWithStack]);
            if (isEqual === true)
              has2 = true;
          }
          if (has2 === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    } else if (isA("Map", a) || isImmutableUnorderedKeyed(a)) {
      let allFound = true;
      for (const aEntry of a) {
        if (!b.has(aEntry[0]) || !equals2(aEntry[1], b.get(aEntry[0]), [iterableEqualityWithStack])) {
          let has2 = false;
          for (const bEntry of b) {
            const matchedKey = equals2(aEntry[0], bEntry[0], [
              iterableEqualityWithStack
            ]);
            let matchedValue = false;
            if (matchedKey === true) {
              matchedValue = equals2(aEntry[1], bEntry[1], [
                iterableEqualityWithStack
              ]);
            }
            if (matchedValue === true)
              has2 = true;
          }
          if (has2 === false) {
            allFound = false;
            break;
          }
        }
      }
      aStack.pop();
      bStack.pop();
      return allFound;
    }
  }
  const bIterator = b[IteratorSymbol]();
  for (const aValue of a) {
    const nextB = bIterator.next();
    if (nextB.done || !equals2(aValue, nextB.value, [iterableEqualityWithStack]))
      return false;
  }
  if (!bIterator.next().done)
    return false;
  aStack.pop();
  bStack.pop();
  return true;
};
var hasPropertyInObject = (object2, key) => {
  const shouldTerminate = !object2 || typeof object2 !== "object" || object2 === Object.prototype;
  if (shouldTerminate)
    return false;
  return Object.prototype.hasOwnProperty.call(object2, key) || hasPropertyInObject(Object.getPrototypeOf(object2), key);
};
var isObjectWithKeys = (a) => isObject(a) && !(a instanceof Error) && !Array.isArray(a) && !(a instanceof Date);
var subsetEquality = (object2, subset) => {
  const subsetEqualityWithContext = (seenReferences = /* @__PURE__ */ new WeakMap()) => (object22, subset2) => {
    if (!isObjectWithKeys(subset2))
      return void 0;
    return Object.keys(subset2).every((key) => {
      if (isObjectWithKeys(subset2[key])) {
        if (seenReferences.has(subset2[key]))
          return equals2(object22[key], subset2[key], [iterableEquality]);
        seenReferences.set(subset2[key], true);
      }
      const result = object22 != null && hasPropertyInObject(object22, key) && equals2(object22[key], subset2[key], [
        iterableEquality,
        subsetEqualityWithContext(seenReferences)
      ]);
      seenReferences.delete(subset2[key]);
      return result;
    });
  };
  return subsetEqualityWithContext()(object2, subset);
};
var typeEquality = (a, b) => {
  if (a == null || b == null || a.constructor === b.constructor)
    return void 0;
  return false;
};
var arrayBufferEquality = (a, b) => {
  if (!(a instanceof ArrayBuffer) || !(b instanceof ArrayBuffer))
    return void 0;
  const dataViewA = new DataView(a);
  const dataViewB = new DataView(b);
  if (dataViewA.byteLength !== dataViewB.byteLength)
    return false;
  for (let i = 0; i < dataViewA.byteLength; i++) {
    if (dataViewA.getUint8(i) !== dataViewB.getUint8(i))
      return false;
  }
  return true;
};
var sparseArrayEquality = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b))
    return void 0;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  return equals2(a, b, [iterableEquality, typeEquality], true) && equals2(aKeys, bKeys);
};
var generateToBeMessage = (deepEqualityName, expected = "#{this}", actual = "#{exp}") => {
  const toBeMessage = `expected ${expected} to be ${actual} // Object.is equality`;
  if (["toStrictEqual", "toEqual"].includes(deepEqualityName))
    return `${toBeMessage}

If it should pass with deep equality, replace "toBe" with "${deepEqualityName}"

Expected: ${expected}
Received: serializes to the same string
`;
  return toBeMessage;
};
var naturalCompare$1 = { exports: {} };
var naturalCompare = function(a, b) {
  var i, codeA, codeB = 1, posA = 0, posB = 0, alphabet = String.alphabet;
  function getCode(str, pos, code) {
    if (code) {
      for (i = pos; code = getCode(str, i), code < 76 && code > 65; )
        ++i;
      return +str.slice(pos - 1, i);
    }
    code = alphabet && alphabet.indexOf(str.charAt(pos));
    return code > -1 ? code + 76 : (code = str.charCodeAt(pos) || 0, code < 45 || code > 127) ? code : code < 46 ? 65 : code < 48 ? code - 1 : code < 58 ? code + 18 : code < 65 ? code - 11 : code < 91 ? code + 11 : code < 97 ? code - 37 : code < 123 ? code + 5 : code - 63;
  }
  if ((a += "") != (b += ""))
    for (; codeB; ) {
      codeA = getCode(a, posA++);
      codeB = getCode(b, posB++);
      if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
        codeA = getCode(a, posA, posA);
        codeB = getCode(b, posB, posA = i);
        posB = i;
      }
      if (codeA != codeB)
        return codeA < codeB ? -1 : 1;
    }
  return 0;
};
try {
  naturalCompare$1.exports = naturalCompare;
} catch (e) {
  String.naturalCompare = naturalCompare;
}
var serialize$12 = (val, config2, indentation, depth, refs, printer2) => {
  const name = val.getMockName();
  const nameString = name === "vi.fn()" ? "" : ` ${name}`;
  let callsString = "";
  if (val.mock.calls.length !== 0) {
    const indentationNext = indentation + config2.indent;
    callsString = ` {${config2.spacingOuter}${indentationNext}"calls": ${printer2(val.mock.calls, config2, indentationNext, depth, refs)}${config2.min ? ", " : ","}${config2.spacingOuter}${indentationNext}"results": ${printer2(val.mock.results, config2, indentationNext, depth, refs)}${config2.min ? "" : ","}${config2.spacingOuter}${indentation}}`;
  }
  return `[MockFunction${nameString}]${callsString}`;
};
var test$12 = (val) => val && !!val._isMockFunction;
var plugin2 = { serialize: serialize$12, test: test$12 };
var {
  DOMCollection: DOMCollection2,
  DOMElement: DOMElement2,
  Immutable: Immutable2,
  ReactElement: ReactElement2,
  ReactTestComponent: ReactTestComponent2,
  AsymmetricMatcher: AsymmetricMatcher$12
} = plugins_1;
var PLUGINS2 = [
  ReactTestComponent2,
  ReactElement2,
  DOMElement2,
  DOMCollection2,
  Immutable2,
  AsymmetricMatcher$12,
  plugin2
];
var addSerializer = (plugin3) => {
  PLUGINS2 = [plugin3].concat(PLUGINS2);
};
var getSerializers = () => PLUGINS2;
var SNAPSHOT_VERSION = "1";
var writeSnapshotVersion = () => `// Vitest Snapshot v${SNAPSHOT_VERSION}`;
var testNameToKey = (testName2, count) => `${testName2} ${count}`;
var keyToTestName = (key) => {
  if (!/ \d+$/.test(key))
    throw new Error("Snapshot keys must end with a number.");
  return key.replace(/ \d+$/, "");
};
var getSnapshotData = (snapshotPath, update) => {
  const data = /* @__PURE__ */ Object.create(null);
  let snapshotContents = "";
  let dirty = false;
  if (import_fs.default.existsSync(snapshotPath)) {
    try {
      snapshotContents = import_fs.default.readFileSync(snapshotPath, "utf8");
      const populate = new Function("exports", snapshotContents);
      populate(data);
    } catch {
    }
  }
  const isInvalid = snapshotContents;
  if ((update === "all" || update === "new") && isInvalid)
    dirty = true;
  return { data, dirty };
};
var addExtraLineBreaks = (string2) => string2.includes("\n") ? `
${string2}
` : string2;
var removeExtraLineBreaks = (string2) => string2.length > 2 && string2.startsWith("\n") && string2.endsWith("\n") ? string2.slice(1, -1) : string2;
var escapeRegex = true;
var printFunctionName = false;
function serialize2(val, indent = 2, formatOverrides = {}) {
  return normalizeNewlines(format_1(val, {
    escapeRegex,
    indent,
    plugins: getSerializers(),
    printFunctionName,
    ...formatOverrides
  }));
}
function escapeBacktickString(str) {
  return str.replace(/`|\\|\${/g, "\\$&");
}
function printBacktickString(str) {
  return `\`${escapeBacktickString(str)}\``;
}
function ensureDirectoryExists(filePath) {
  try {
    import_fs.default.mkdirSync(join(dirname(filePath)), { recursive: true });
  } catch {
  }
}
function normalizeNewlines(string2) {
  return string2.replace(/\r\n|\r/g, "\n");
}
async function saveSnapshotFile(snapshotData, snapshotPath) {
  var _a2, _b;
  const snapshots = Object.keys(snapshotData).sort(naturalCompare$1.exports).map((key) => `exports[${printBacktickString(key)}] = ${printBacktickString(normalizeNewlines(snapshotData[key]))};`);
  const content = `${writeSnapshotVersion()}

${snapshots.join("\n\n")}
`;
  const skipWriting = import_fs.default.existsSync(snapshotPath) && await ((_a2 = import_fs.default) == null ? void 0 : _a2.promises.readFile(snapshotPath, "utf8")) === content;
  if (skipWriting)
    return;
  ensureDirectoryExists(snapshotPath);
  await ((_b = import_fs.default) == null ? void 0 : _b.promises.writeFile(snapshotPath, content, "utf-8"));
}
function prepareExpected(expected) {
  function findStartIndent() {
    var _a2, _b;
    const matchObject = /^( +)}\s+$/m.exec(expected || "");
    const objectIndent = (_a2 = matchObject == null ? void 0 : matchObject[1]) == null ? void 0 : _a2.length;
    if (objectIndent)
      return objectIndent;
    const matchText = /^\n( +)"/.exec(expected || "");
    return ((_b = matchText == null ? void 0 : matchText[1]) == null ? void 0 : _b.length) || 0;
  }
  const startIndent = findStartIndent();
  let expectedTrimmed = expected == null ? void 0 : expected.trim();
  if (startIndent) {
    expectedTrimmed = expectedTrimmed == null ? void 0 : expectedTrimmed.replace(new RegExp(`^${" ".repeat(startIndent)}`, "gm"), "").replace(/ +}$/, "}");
  }
  return expectedTrimmed;
}
function deepMergeArray(target = [], source = []) {
  const mergedOutput = Array.from(target);
  source.forEach((sourceElement, index) => {
    const targetElement = mergedOutput[index];
    if (Array.isArray(target[index])) {
      mergedOutput[index] = deepMergeArray(target[index], sourceElement);
    } else if (isObject(targetElement)) {
      mergedOutput[index] = deepMergeSnapshot(target[index], sourceElement);
    } else {
      mergedOutput[index] = sourceElement;
    }
  });
  return mergedOutput;
}
function deepMergeSnapshot(target, source) {
  if (isObject(target) && isObject(source)) {
    const mergedOutput = { ...target };
    Object.keys(source).forEach((key) => {
      if (isObject(source[key]) && !source[key].$$typeof) {
        if (!(key in target))
          Object.assign(mergedOutput, { [key]: source[key] });
        else
          mergedOutput[key] = deepMergeSnapshot(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        mergedOutput[key] = deepMergeArray(target[key], source[key]);
      } else {
        Object.assign(mergedOutput, { [key]: source[key] });
      }
    });
    return mergedOutput;
  } else if (Array.isArray(target) && Array.isArray(source)) {
    return deepMergeArray(target, source);
  }
  return target;
}
async function saveInlineSnapshots(snapshots) {
  const MagicString2 = (await Promise.resolve().then(() => (init_chunk_magic_string_efe26975(), chunk_magic_string_efe26975_exports))).default;
  const files = new Set(snapshots.map((i) => i.file));
  await Promise.all(Array.from(files).map(async (file) => {
    const map2 = await rpc().getSourceMap(file);
    const snaps = snapshots.filter((i) => i.file === file);
    const code = await import_fs.promises.readFile(file, "utf8");
    const s = new MagicString2(code);
    for (const snap of snaps) {
      const pos = await getOriginalPos(map2, snap);
      const index = posToNumber(code, pos);
      replaceInlineSnap(code, s, index, snap.snapshot);
    }
    const transformed = s.toString();
    if (transformed !== code)
      await import_fs.promises.writeFile(file, transformed, "utf-8");
  }));
}
var startObjectRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*({)/m;
function replaceObjectSnap(code, s, index, newSnap) {
  code = code.slice(index);
  const startMatch = startObjectRegex.exec(code);
  if (!startMatch)
    return false;
  code = code.slice(startMatch.index);
  const charIndex = getCallLastIndex(code);
  if (charIndex === null)
    return false;
  s.appendLeft(index + startMatch.index + charIndex, `, ${prepareSnapString(newSnap, code, index)}`);
  return true;
}
function prepareSnapString(snap, source, index) {
  const lineIndex = numberToPos(source, index).line;
  const line = source.split(lineSplitRE)[lineIndex - 1];
  const indent = line.match(/^\s*/)[0] || "";
  const indentNext = indent.includes("	") ? `${indent}	` : `${indent}  `;
  const lines = snap.trim().replace(/\\/g, "\\\\").split(/\n/g);
  const isOneline = lines.length <= 1;
  const quote = isOneline ? "'" : "`";
  if (isOneline)
    return `'${lines.join("\n").replace(/'/g, "\\'")}'`;
  else
    return `${quote}
${lines.map((i) => i ? indentNext + i : "").join("\n").replace(/`/g, "\\`").replace(/\${/g, "\\${")}
${indent}${quote}`;
}
var startRegex = /(?:toMatchInlineSnapshot|toThrowErrorMatchingInlineSnapshot)\s*\(\s*[\w_$]*(['"`\)])/m;
function replaceInlineSnap(code, s, index, newSnap) {
  const startMatch = startRegex.exec(code.slice(index));
  if (!startMatch)
    return replaceObjectSnap(code, s, index, newSnap);
  const quote = startMatch[1];
  const startIndex = index + startMatch.index + startMatch[0].length;
  const snapString = prepareSnapString(newSnap, code, index);
  if (quote === ")") {
    s.appendRight(startIndex - 1, snapString);
    return true;
  }
  const quoteEndRE = new RegExp(`(?:^|[^\\\\])${quote}`);
  const endMatch = quoteEndRE.exec(code.slice(startIndex));
  if (!endMatch)
    return false;
  const endIndex = startIndex + endMatch.index + endMatch[0].length;
  s.overwrite(startIndex - 1, endIndex, snapString);
  return true;
}
var INDENTATION_REGEX = /^([^\S\n]*)\S/m;
function stripSnapshotIndentation(inlineSnapshot) {
  const match = inlineSnapshot.match(INDENTATION_REGEX);
  if (!match || !match[1]) {
    return inlineSnapshot;
  }
  const indentation = match[1];
  const lines = inlineSnapshot.split(/\n/g);
  if (lines.length <= 2) {
    return inlineSnapshot;
  }
  if (lines[0].trim() !== "" || lines[lines.length - 1].trim() !== "") {
    return inlineSnapshot;
  }
  for (let i = 1; i < lines.length - 1; i++) {
    if (lines[i] !== "") {
      if (lines[i].indexOf(indentation) !== 0) {
        return inlineSnapshot;
      }
      lines[i] = lines[i].substring(indentation.length);
    }
  }
  lines[lines.length - 1] = "";
  inlineSnapshot = lines.join("\n");
  return inlineSnapshot;
}
var SnapshotState = class {
  constructor(testFilePath, snapshotPath, options) {
    this.testFilePath = testFilePath;
    this.snapshotPath = snapshotPath;
    const { data, dirty } = getSnapshotData(this.snapshotPath, options.updateSnapshot);
    this._initialData = data;
    this._snapshotData = data;
    this._dirty = dirty;
    this._inlineSnapshots = [];
    this._uncheckedKeys = new Set(Object.keys(this._snapshotData));
    this._counters = /* @__PURE__ */ new Map();
    this.expand = options.expand || false;
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this._updateSnapshot = options.updateSnapshot;
    this.updated = 0;
    this._snapshotFormat = {
      printBasicPrototype: false,
      ...options.snapshotFormat
    };
  }
  markSnapshotsAsCheckedForTest(testName2) {
    this._uncheckedKeys.forEach((uncheckedKey) => {
      if (keyToTestName(uncheckedKey) === testName2)
        this._uncheckedKeys.delete(uncheckedKey);
    });
  }
  _inferInlineSnapshotStack(stacks) {
    const promiseIndex = stacks.findIndex((i) => i.method.match(/__VITEST_(RESOLVES|REJECTS)__/));
    if (promiseIndex !== -1)
      return stacks[promiseIndex + 3];
    const stackIndex = stacks.findIndex((i) => i.method.includes("__VITEST_INLINE_SNAPSHOT__"));
    return stackIndex !== -1 ? stacks[stackIndex + 2] : null;
  }
  _addSnapshot(key, receivedSerialized, options) {
    this._dirty = true;
    if (options.isInline) {
      const error = options.error || new Error("Unknown error");
      const stacks = parseStacktrace(error, true);
      stacks.forEach((i) => i.file = slash(i.file));
      const stack = this._inferInlineSnapshotStack(stacks);
      if (!stack) {
        throw new Error(`Vitest: Couldn't infer stack frame for inline snapshot.
${JSON.stringify(stacks)}`);
      }
      stack.column--;
      this._inlineSnapshots.push({
        snapshot: receivedSerialized,
        ...stack
      });
    } else {
      this._snapshotData[key] = receivedSerialized;
    }
  }
  clear() {
    this._snapshotData = this._initialData;
    this._counters = /* @__PURE__ */ new Map();
    this.added = 0;
    this.matched = 0;
    this.unmatched = 0;
    this.updated = 0;
    this._dirty = false;
  }
  async save() {
    const hasExternalSnapshots = Object.keys(this._snapshotData).length;
    const hasInlineSnapshots = this._inlineSnapshots.length;
    const isEmpty = !hasExternalSnapshots && !hasInlineSnapshots;
    const status = {
      deleted: false,
      saved: false
    };
    if ((this._dirty || this._uncheckedKeys.size) && !isEmpty) {
      if (hasExternalSnapshots)
        await saveSnapshotFile(this._snapshotData, this.snapshotPath);
      if (hasInlineSnapshots)
        await saveInlineSnapshots(this._inlineSnapshots);
      status.saved = true;
    } else if (!hasExternalSnapshots && import_fs.default.existsSync(this.snapshotPath)) {
      if (this._updateSnapshot === "all")
        import_fs.default.unlinkSync(this.snapshotPath);
      status.deleted = true;
    }
    return status;
  }
  getUncheckedCount() {
    return this._uncheckedKeys.size || 0;
  }
  getUncheckedKeys() {
    return Array.from(this._uncheckedKeys);
  }
  removeUncheckedKeys() {
    if (this._updateSnapshot === "all" && this._uncheckedKeys.size) {
      this._dirty = true;
      this._uncheckedKeys.forEach((key) => delete this._snapshotData[key]);
      this._uncheckedKeys.clear();
    }
  }
  match({
    testName: testName2,
    received,
    key,
    inlineSnapshot,
    isInline,
    error
  }) {
    this._counters.set(testName2, (this._counters.get(testName2) || 0) + 1);
    const count = Number(this._counters.get(testName2));
    if (!key)
      key = testNameToKey(testName2, count);
    if (!(isInline && this._snapshotData[key] !== void 0))
      this._uncheckedKeys.delete(key);
    const receivedSerialized = addExtraLineBreaks(serialize2(received, void 0, this._snapshotFormat));
    const expected = isInline ? inlineSnapshot : this._snapshotData[key];
    const expectedTrimmed = prepareExpected(expected);
    const pass = expectedTrimmed === prepareExpected(receivedSerialized);
    const hasSnapshot = expected !== void 0;
    const snapshotIsPersisted = isInline || import_fs.default.existsSync(this.snapshotPath);
    if (pass && !isInline) {
      this._snapshotData[key] = receivedSerialized;
    }
    if (hasSnapshot && this._updateSnapshot === "all" || (!hasSnapshot || !snapshotIsPersisted) && (this._updateSnapshot === "new" || this._updateSnapshot === "all")) {
      if (this._updateSnapshot === "all") {
        if (!pass) {
          if (hasSnapshot)
            this.updated++;
          else
            this.added++;
          this._addSnapshot(key, receivedSerialized, { error, isInline });
        } else {
          this.matched++;
        }
      } else {
        this._addSnapshot(key, receivedSerialized, { error, isInline });
        this.added++;
      }
      return {
        actual: "",
        count,
        expected: "",
        key,
        pass: true
      };
    } else {
      if (!pass) {
        this.unmatched++;
        return {
          actual: removeExtraLineBreaks(receivedSerialized),
          count,
          expected: expectedTrimmed !== void 0 ? removeExtraLineBreaks(expectedTrimmed) : void 0,
          key,
          pass: false
        };
      } else {
        this.matched++;
        return {
          actual: "",
          count,
          expected: "",
          key,
          pass: true
        };
      }
    }
  }
  async pack() {
    const snapshot = {
      filepath: this.testFilePath,
      added: 0,
      fileDeleted: false,
      matched: 0,
      unchecked: 0,
      uncheckedKeys: [],
      unmatched: 0,
      updated: 0
    };
    const uncheckedCount = this.getUncheckedCount();
    const uncheckedKeys = this.getUncheckedKeys();
    if (uncheckedCount)
      this.removeUncheckedKeys();
    const status = await this.save();
    snapshot.fileDeleted = status.deleted;
    snapshot.added = this.added;
    snapshot.matched = this.matched;
    snapshot.unmatched = this.unmatched;
    snapshot.updated = this.updated;
    snapshot.unchecked = !status.deleted ? uncheckedCount : 0;
    snapshot.uncheckedKeys = Array.from(uncheckedKeys);
    return snapshot;
  }
};
var SnapshotClient = class {
  constructor() {
    this.snapshotStateMap = /* @__PURE__ */ new Map();
  }
  async setTest(test3) {
    var _a2;
    this.test = test3;
    if (((_a2 = this.snapshotState) == null ? void 0 : _a2.testFilePath) !== this.test.file.filepath) {
      this.saveCurrent();
      const filePath = this.test.file.filepath;
      if (!this.getSnapshotState(test3)) {
        this.snapshotStateMap.set(filePath, new SnapshotState(filePath, await rpc().resolveSnapshotPath(filePath), getWorkerState().config.snapshotOptions));
      }
      this.snapshotState = this.getSnapshotState(test3);
    }
  }
  getSnapshotState(test3) {
    return this.snapshotStateMap.get(test3.file.filepath);
  }
  clearTest() {
    this.test = void 0;
  }
  skipTestSnapshots(test3) {
    var _a2;
    (_a2 = this.snapshotState) == null ? void 0 : _a2.markSnapshotsAsCheckedForTest(test3.name);
  }
  assert(options) {
    const {
      test: test3 = this.test,
      message,
      isInline = false,
      properties,
      inlineSnapshot,
      error,
      errorMessage
    } = options;
    let { received } = options;
    if (!test3)
      throw new Error("Snapshot cannot be used outside of test");
    if (typeof properties === "object") {
      if (typeof received !== "object" || !received)
        throw new Error("Received value must be an object when the matcher has properties");
      try {
        const pass2 = equals2(received, properties, [iterableEquality, subsetEquality]);
        if (!pass2)
          expect(received).equals(properties);
        else
          received = deepMergeSnapshot(received, properties);
      } catch (err) {
        err.message = errorMessage || "Snapshot mismatched";
        throw err;
      }
    }
    const testName2 = [
      ...getNames(test3).slice(1),
      ...message ? [message] : []
    ].join(" > ");
    const snapshotState = this.getSnapshotState(test3);
    const { actual, expected, key, pass } = snapshotState.match({
      testName: testName2,
      received,
      isInline,
      error,
      inlineSnapshot
    });
    if (!pass) {
      try {
        expect(actual.trim()).equals(expected ? expected.trim() : "");
      } catch (error2) {
        error2.message = errorMessage || `Snapshot \`${key || "unknown"}\` mismatched`;
        throw error2;
      }
    }
  }
  async saveCurrent() {
    if (!this.snapshotState)
      return;
    const result = await this.snapshotState.pack();
    await rpc().snapshotSaved(result);
    this.snapshotState = void 0;
  }
  clear() {
    this.snapshotStateMap.clear();
  }
};
var _client;
function getSnapshotClient() {
  if (!_client)
    _client = new SnapshotClient();
  return _client;
}
var getErrorMessage = (err) => {
  if (err instanceof Error)
    return err.message;
  return err;
};
var getErrorString = (expected, promise) => {
  if (typeof expected !== "function") {
    if (!promise)
      throw new Error(`expected must be a function, received ${typeof expected}`);
    return getErrorMessage(expected);
  }
  try {
    expected();
  } catch (e) {
    return getErrorMessage(e);
  }
  throw new Error("snapshot function didn't threw");
};
var SnapshotPlugin = (chai3, utils) => {
  for (const key of ["matchSnapshot", "toMatchSnapshot"]) {
    utils.addMethod(chai3.Assertion.prototype, key, function(properties, message) {
      const expected = utils.flag(this, "object");
      const test3 = utils.flag(this, "vitest-test");
      if (typeof properties === "string" && typeof message === "undefined") {
        message = properties;
        properties = void 0;
      }
      const errorMessage = utils.flag(this, "message");
      getSnapshotClient().assert({
        received: expected,
        test: test3,
        message,
        isInline: false,
        properties,
        errorMessage
      });
    });
  }
  utils.addMethod(chai3.Assertion.prototype, "toMatchInlineSnapshot", function __VITEST_INLINE_SNAPSHOT__(properties, inlineSnapshot, message) {
    const expected = utils.flag(this, "object");
    const error = utils.flag(this, "error");
    const test3 = utils.flag(this, "vitest-test");
    if (typeof properties === "string") {
      message = inlineSnapshot;
      inlineSnapshot = properties;
      properties = void 0;
    }
    if (inlineSnapshot)
      inlineSnapshot = stripSnapshotIndentation(inlineSnapshot);
    const errorMessage = utils.flag(this, "message");
    getSnapshotClient().assert({
      received: expected,
      test: test3,
      message,
      isInline: true,
      properties,
      inlineSnapshot,
      error,
      errorMessage
    });
  });
  utils.addMethod(chai3.Assertion.prototype, "toThrowErrorMatchingSnapshot", function(message) {
    const expected = utils.flag(this, "object");
    const test3 = utils.flag(this, "vitest-test");
    const promise = utils.flag(this, "promise");
    const errorMessage = utils.flag(this, "message");
    getSnapshotClient().assert({
      received: getErrorString(expected, promise),
      test: test3,
      message,
      errorMessage
    });
  });
  utils.addMethod(chai3.Assertion.prototype, "toThrowErrorMatchingInlineSnapshot", function __VITEST_INLINE_SNAPSHOT__(inlineSnapshot, message) {
    const expected = utils.flag(this, "object");
    const error = utils.flag(this, "error");
    const test3 = utils.flag(this, "vitest-test");
    const promise = utils.flag(this, "promise");
    const errorMessage = utils.flag(this, "message");
    getSnapshotClient().assert({
      received: getErrorString(expected, promise),
      test: test3,
      message,
      inlineSnapshot,
      isInline: true,
      error,
      errorMessage
    });
  });
};
var GLOBAL_EXPECT = Symbol.for("expect-global");
var MATCHERS_OBJECT = Symbol.for("matchers-object");
if (!Object.prototype.hasOwnProperty.call(globalThis, MATCHERS_OBJECT)) {
  Object.defineProperty(globalThis, MATCHERS_OBJECT, {
    value: /* @__PURE__ */ new WeakMap()
  });
}
var getState = (expect2) => globalThis[MATCHERS_OBJECT].get(expect2);
var setState = (state, expect2) => {
  const map2 = globalThis[MATCHERS_OBJECT];
  const current = map2.get(expect2) || {};
  Object.assign(current, state);
  map2.set(expect2, current);
};
var JestChaiExpect = (chai3, utils) => {
  function def(name, fn2) {
    const addMethod = (n2) => {
      utils.addMethod(chai3.Assertion.prototype, n2, fn2);
    };
    if (Array.isArray(name))
      name.forEach((n2) => addMethod(n2));
    else
      addMethod(name);
  }
  ["throw", "throws", "Throw"].forEach((m) => {
    utils.overwriteMethod(chai3.Assertion.prototype, m, (_super) => {
      return function(...args) {
        const promise = utils.flag(this, "promise");
        const object2 = utils.flag(this, "object");
        const isNot = utils.flag(this, "negate");
        if (promise === "rejects") {
          utils.flag(this, "object", () => {
            throw object2;
          });
        } else if (promise === "resolves" && typeof object2 !== "function") {
          if (!isNot) {
            const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
            const error = {
              showDiff: false
            };
            throw new AssertionError(message, error, utils.flag(this, "ssfi"));
          } else {
            return;
          }
        }
        _super.apply(this, args);
      };
    });
  });
  def("withTest", function(test3) {
    utils.flag(this, "vitest-test", test3);
    return this;
  });
  def("toEqual", function(expected) {
    const actual = utils.flag(this, "object");
    const equal = equals2(actual, expected, [iterableEquality]);
    return this.assert(equal, "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", expected, actual);
  });
  def("toStrictEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const equal = equals2(obj, expected, [
      iterableEquality,
      typeEquality,
      sparseArrayEquality,
      arrayBufferEquality
    ], true);
    return this.assert(equal, "expected #{this} to strictly equal #{exp}", "expected #{this} to not strictly equal #{exp}", expected, obj);
  });
  def("toBe", function(expected) {
    const actual = this._obj;
    const pass = Object.is(actual, expected);
    let deepEqualityName = "";
    if (!pass) {
      const toStrictEqualPass = equals2(actual, expected, [
        iterableEquality,
        typeEquality,
        sparseArrayEquality,
        arrayBufferEquality
      ], true);
      if (toStrictEqualPass) {
        deepEqualityName = "toStrictEqual";
      } else {
        const toEqualPass = equals2(actual, expected, [iterableEquality]);
        if (toEqualPass)
          deepEqualityName = "toEqual";
      }
    }
    return this.assert(pass, generateToBeMessage(deepEqualityName), "expected #{this} not to be #{exp} // Object.is equality", expected, actual);
  });
  def("toMatchObject", function(expected) {
    const actual = this._obj;
    return this.assert(equals2(actual, expected, [iterableEquality, subsetEquality]), "expected #{this} to match object #{exp}", "expected #{this} to not match object #{exp}", expected, actual);
  });
  def("toMatch", function(expected) {
    if (typeof expected === "string")
      return this.include(expected);
    else
      return this.match(expected);
  });
  def("toContain", function(item) {
    return this.contain(item);
  });
  def("toContainEqual", function(expected) {
    const obj = utils.flag(this, "object");
    const index = Array.from(obj).findIndex((item) => {
      return equals2(item, expected);
    });
    this.assert(index !== -1, "expected #{this} to deep equally contain #{exp}", "expected #{this} to not deep equally contain #{exp}", expected);
  });
  def("toBeTruthy", function() {
    const obj = utils.flag(this, "object");
    this.assert(Boolean(obj), "expected #{this} to be truthy", "expected #{this} to not be truthy", obj);
  });
  def("toBeFalsy", function() {
    const obj = utils.flag(this, "object");
    this.assert(!obj, "expected #{this} to be falsy", "expected #{this} to not be falsy", obj);
  });
  def("toBeGreaterThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(actual > expected, `expected ${actual} to be greater than ${expected}`, `expected ${actual} to be not greater than ${expected}`, actual, expected);
  });
  def("toBeGreaterThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(actual >= expected, `expected ${actual} to be greater than or equal to ${expected}`, `expected ${actual} to be not greater than or equal to ${expected}`, actual, expected);
  });
  def("toBeLessThan", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(actual < expected, `expected ${actual} to be less than ${expected}`, `expected ${actual} to be not less than ${expected}`, actual, expected);
  });
  def("toBeLessThanOrEqual", function(expected) {
    const actual = this._obj;
    assertTypes(actual, "actual", ["number", "bigint"]);
    assertTypes(expected, "expected", ["number", "bigint"]);
    return this.assert(actual <= expected, `expected ${actual} to be less than or equal to ${expected}`, `expected ${actual} to be not less than or equal to ${expected}`, actual, expected);
  });
  def("toBeNaN", function() {
    return this.be.NaN;
  });
  def("toBeUndefined", function() {
    return this.be.undefined;
  });
  def("toBeNull", function() {
    return this.be.null;
  });
  def("toBeDefined", function() {
    const negate = utils.flag(this, "negate");
    utils.flag(this, "negate", false);
    if (negate)
      return this.be.undefined;
    return this.not.be.undefined;
  });
  def("toBeTypeOf", function(expected) {
    const actual = typeof this._obj;
    const equal = expected === actual;
    return this.assert(equal, "expected #{this} to be type of #{exp}", "expected #{this} not to be type of #{exp}", expected, actual);
  });
  def("toBeInstanceOf", function(obj) {
    return this.instanceOf(obj);
  });
  def("toHaveLength", function(length) {
    return this.have.length(length);
  });
  def("toHaveProperty", function(...args) {
    if (Array.isArray(args[0]))
      args[0] = args[0].map((key) => key.replace(/([.[\]])/g, "\\$1")).join(".");
    const actual = this._obj;
    const [propertyName, expected] = args;
    let pass = false;
    if (Object.prototype.hasOwnProperty.call(actual, propertyName)) {
      pass = true;
    } else {
      const { value, exists } = utils.getPathInfo(actual, propertyName);
      pass = exists && (args.length === 1 || equals2(expected, value));
    }
    return this.assert(pass, "expected #{this} to have property #{exp}", "expected #{this} to not have property #{exp}", expected, actual);
  });
  def("toBeCloseTo", function(received, precision = 2) {
    const expected = this._obj;
    let pass = false;
    let expectedDiff = 0;
    let receivedDiff = 0;
    if (received === Infinity && expected === Infinity) {
      pass = true;
    } else if (received === -Infinity && expected === -Infinity) {
      pass = true;
    } else {
      expectedDiff = 10 ** -precision / 2;
      receivedDiff = Math.abs(expected - received);
      pass = receivedDiff < expectedDiff;
    }
    return this.assert(pass, `expected #{this} to be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`, `expected #{this} to not be close to #{exp}, received difference is ${receivedDiff}, but expected ${expectedDiff}`, received, expected);
  });
  const assertIsMock = (assertion) => {
    if (!isMockFunction(assertion._obj))
      throw new TypeError(`${utils.inspect(assertion._obj)} is not a spy or a call to a spy!`);
  };
  const getSpy = (assertion) => {
    assertIsMock(assertion);
    return assertion._obj;
  };
  const ordinalOf = (i) => {
    const j = i % 10;
    const k = i % 100;
    if (j === 1 && k !== 11)
      return `${i}st`;
    if (j === 2 && k !== 12)
      return `${i}nd`;
    if (j === 3 && k !== 13)
      return `${i}rd`;
    return `${i}th`;
  };
  const formatCalls = (spy, msg, actualCall) => {
    msg += picocolors.exports.gray(`

Received: 
${spy.mock.calls.map((callArg, i) => {
      let methodCall = picocolors.exports.bold(`    ${ordinalOf(i + 1)} ${spy.getMockName()} call:

`);
      if (actualCall)
        methodCall += unifiedDiff(stringify(callArg), stringify(actualCall), { showLegend: false });
      else
        methodCall += stringify(callArg).split("\n").map((line) => `    ${line}`).join("\n");
      methodCall += "\n";
      return methodCall;
    }).join("\n")}`);
    msg += picocolors.exports.gray(`

Number of calls: ${picocolors.exports.bold(spy.mock.calls.length)}
`);
    return msg;
  };
  def(["toHaveBeenCalledTimes", "toBeCalledTimes"], function(number) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(callCount === number, `expected "${spyName}" to be called #{exp} times`, `expected "${spyName}" to not be called #{exp} times`, number, callCount);
  });
  def("toHaveBeenCalledOnce", function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const callCount = spy.mock.calls.length;
    return this.assert(callCount === 1, `expected "${spyName}" to be called once`, `expected "${spyName}" to not be called once`, 1, callCount);
  });
  def(["toHaveBeenCalled", "toBeCalled"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const called = spy.mock.calls.length > 0;
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(this, [
      called,
      `expected "${spyName}" to be called at least once`,
      `expected "${spyName}" to not be called at all`,
      true,
      called
    ]);
    if (called && isNot)
      msg += formatCalls(spy, msg);
    if (called && isNot || !called && !isNot) {
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveBeenCalledWith", "toBeCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.calls.some((callArg) => equals2(callArg, args, [iterableEquality]));
    const isNot = utils.flag(this, "negate");
    let msg = utils.getMessage(this, [
      pass,
      `expected "${spyName}" to be called with arguments: #{exp}`,
      `expected "${spyName}" to not be called with arguments: #{exp}`,
      args
    ]);
    if (pass && isNot || !pass && !isNot) {
      msg += formatCalls(spy, msg, args);
      const err = new Error(msg);
      err.name = "AssertionError";
      throw err;
    }
  });
  def(["toHaveBeenNthCalledWith", "nthCalledWith"], function(times, ...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const nthCall = spy.mock.calls[times - 1];
    this.assert(equals2(nthCall, args, [iterableEquality]), `expected ${ordinalOf(times)} "${spyName}" call to have been called with #{exp}`, `expected ${ordinalOf(times)} "${spyName}" call to not have been called with #{exp}`, args, nthCall);
  });
  def(["toHaveBeenLastCalledWith", "lastCalledWith"], function(...args) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const lastCall = spy.mock.calls[spy.calls.length - 1];
    this.assert(equals2(lastCall, args, [iterableEquality]), `expected last "${spyName}" call to have been called with #{exp}`, `expected last "${spyName}" call to not have been called with #{exp}`, args, lastCall);
  });
  def(["toThrow", "toThrowError"], function(expected) {
    if (typeof expected === "string" || typeof expected === "undefined" || expected instanceof RegExp)
      return this.throws(expected);
    const obj = this._obj;
    const promise = utils.flag(this, "promise");
    const isNot = utils.flag(this, "negate");
    let thrown = null;
    if (promise === "rejects") {
      thrown = obj;
    } else if (promise === "resolves" && typeof obj !== "function") {
      if (!isNot) {
        const message = utils.flag(this, "message") || "expected promise to throw an error, but it didn't";
        const error = {
          showDiff: false
        };
        throw new AssertionError(message, error, utils.flag(this, "ssfi"));
      } else {
        return;
      }
    } else {
      try {
        obj();
      } catch (err) {
        thrown = err;
      }
    }
    if (typeof expected === "function") {
      const name = expected.name || expected.prototype.constructor.name;
      return this.assert(thrown && thrown instanceof expected, `expected error to be instance of ${name}`, `expected error not to be instance of ${name}`, expected, thrown);
    }
    if (expected instanceof Error) {
      return this.assert(thrown && expected.message === thrown.message, `expected error to have message: ${expected.message}`, `expected error not to have message: ${expected.message}`, expected.message, thrown && thrown.message);
    }
    if (typeof expected.asymmetricMatch === "function") {
      const matcher = expected;
      return this.assert(thrown && matcher.asymmetricMatch(thrown), "expected error to match asymmetric matcher", "expected error not to match asymmetric matcher", matcher.toString(), thrown);
    }
    throw new Error(`"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof expected}"`);
  });
  def(["toHaveReturned", "toReturn"], function() {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const calledAndNotThrew = spy.mock.calls.length > 0 && !spy.mock.results.some(({ type: type2 }) => type2 === "throw");
    this.assert(calledAndNotThrew, `expected "${spyName}" to be successfully called at least once`, `expected "${spyName}" to not be successfully called`, calledAndNotThrew, !calledAndNotThrew);
  });
  def(["toHaveReturnedTimes", "toReturnTimes"], function(times) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const successfulReturns = spy.mock.results.reduce((success, { type: type2 }) => type2 === "throw" ? success : ++success, 0);
    this.assert(successfulReturns === times, `expected "${spyName}" to be successfully called ${times} times`, `expected "${spyName}" to not be successfully called ${times} times`, `expected number of returns: ${times}`, `received number of returns: ${successfulReturns}`);
  });
  def(["toHaveReturnedWith", "toReturnWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const pass = spy.mock.results.some(({ type: type2, value: result }) => type2 === "return" && equals2(value, result));
    this.assert(pass, `expected "${spyName}" to be successfully called with #{exp}`, `expected "${spyName}" to not be successfully called with #{exp}`, value);
  });
  def(["toHaveLastReturnedWith", "lastReturnedWith"], function(value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const { value: lastResult } = spy.mock.results[spy.returns.length - 1];
    const pass = equals2(lastResult, value);
    this.assert(pass, `expected last "${spyName}" call to return #{exp}`, `expected last "${spyName}" call to not return #{exp}`, value, lastResult);
  });
  def(["toHaveNthReturnedWith", "nthReturnedWith"], function(nthCall, value) {
    const spy = getSpy(this);
    const spyName = spy.getMockName();
    const isNot = utils.flag(this, "negate");
    const { type: callType, value: callResult } = spy.mock.results[nthCall - 1];
    const ordinalCall = `${ordinalOf(nthCall)} call`;
    if (!isNot && callType === "throw")
      chai3.assert.fail(`expected ${ordinalCall} to return #{exp}, but instead it threw an error`);
    const nthCallReturn = equals2(callResult, value);
    this.assert(nthCallReturn, `expected ${ordinalCall} "${spyName}" call to return #{exp}`, `expected ${ordinalCall} "${spyName}" call to not return #{exp}`, value, callResult);
  });
  def("toSatisfy", function(matcher, message) {
    return this.be.satisfy(matcher, message);
  });
  utils.addProperty(chai3.Assertion.prototype, "resolves", function __VITEST_RESOLVES__() {
    utils.flag(this, "promise", "resolves");
    utils.flag(this, "error", new Error("resolves"));
    const obj = utils.flag(this, "object");
    if (typeof (obj == null ? void 0 : obj.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .resolves, not '${typeof obj}'.`);
    const proxy = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai3.Assertion ? proxy : result;
        return async (...args) => {
          return obj.then((value) => {
            utils.flag(this, "object", value);
            return result.call(this, ...args);
          }, (err) => {
            throw new Error(`promise rejected "${toString3(err)}" instead of resolving`);
          });
        };
      }
    });
    return proxy;
  });
  utils.addProperty(chai3.Assertion.prototype, "rejects", function __VITEST_REJECTS__() {
    utils.flag(this, "promise", "rejects");
    utils.flag(this, "error", new Error("rejects"));
    const obj = utils.flag(this, "object");
    const wrapper = typeof obj === "function" ? obj() : obj;
    if (typeof (wrapper == null ? void 0 : wrapper.then) !== "function")
      throw new TypeError(`You must provide a Promise to expect() when using .rejects, not '${typeof wrapper}'.`);
    const proxy = new Proxy(this, {
      get: (target, key, receiver) => {
        const result = Reflect.get(target, key, receiver);
        if (typeof result !== "function")
          return result instanceof chai3.Assertion ? proxy : result;
        return async (...args) => {
          return wrapper.then((value) => {
            throw new Error(`promise resolved "${toString3(value)}" instead of rejecting`);
          }, (err) => {
            utils.flag(this, "object", err);
            return result.call(this, ...args);
          });
        };
      }
    });
    return proxy;
  });
  utils.addMethod(chai3.expect, "addSnapshotSerializer", addSerializer);
};
function toString3(value) {
  try {
    return `${value}`;
  } catch (_error) {
    return "unknown";
  }
}
var AsymmetricMatcher2 = class {
  constructor(sample, inverse = false) {
    this.sample = sample;
    this.inverse = inverse;
    this.$$typeof = Symbol.for("jest.asymmetricMatcher");
  }
  getMatcherContext(expect2) {
    return {
      ...getState(expect2 || globalThis[GLOBAL_EXPECT]),
      equals: equals2,
      isNot: this.inverse,
      utils: matcherUtils
    };
  }
};
var StringContaining = class extends AsymmetricMatcher2 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample))
      throw new Error("Expected is not a string");
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && other.includes(this.sample);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "string";
  }
};
var Anything = class extends AsymmetricMatcher2 {
  asymmetricMatch(other) {
    return other != null;
  }
  toString() {
    return "Anything";
  }
  toAsymmetricMatcher() {
    return "Anything";
  }
};
var ObjectContaining = class extends AsymmetricMatcher2 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  getPrototype(obj) {
    if (Object.getPrototypeOf)
      return Object.getPrototypeOf(obj);
    if (obj.constructor.prototype === obj)
      return null;
    return obj.constructor.prototype;
  }
  hasProperty(obj, property) {
    if (!obj)
      return false;
    if (Object.prototype.hasOwnProperty.call(obj, property))
      return true;
    return this.hasProperty(this.getPrototype(obj), property);
  }
  asymmetricMatch(other) {
    if (typeof this.sample !== "object") {
      throw new TypeError(`You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`);
    }
    let result = true;
    for (const property in this.sample) {
      if (!this.hasProperty(other, property) || !equals2(this.sample[property], other[property])) {
        result = false;
        break;
      }
    }
    return this.inverse ? !result : result;
  }
  toString() {
    return `Object${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "object";
  }
};
var ArrayContaining = class extends AsymmetricMatcher2 {
  constructor(sample, inverse = false) {
    super(sample, inverse);
  }
  asymmetricMatch(other) {
    if (!Array.isArray(this.sample)) {
      throw new TypeError(`You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`);
    }
    const result = this.sample.length === 0 || Array.isArray(other) && this.sample.every((item) => other.some((another) => equals2(item, another)));
    return this.inverse ? !result : result;
  }
  toString() {
    return `Array${this.inverse ? "Not" : ""}Containing`;
  }
  getExpectedType() {
    return "array";
  }
};
var Any = class extends AsymmetricMatcher2 {
  constructor(sample) {
    if (typeof sample === "undefined") {
      throw new TypeError("any() expects to be passed a constructor function. Please pass one or use anything() to match any object.");
    }
    super(sample);
  }
  fnNameFor(func) {
    if (func.name)
      return func.name;
    const functionToString = Function.prototype.toString;
    const matches = functionToString.call(func).match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
    return matches ? matches[1] : "<anonymous>";
  }
  asymmetricMatch(other) {
    if (this.sample === String)
      return typeof other == "string" || other instanceof String;
    if (this.sample === Number)
      return typeof other == "number" || other instanceof Number;
    if (this.sample === Function)
      return typeof other == "function" || other instanceof Function;
    if (this.sample === Boolean)
      return typeof other == "boolean" || other instanceof Boolean;
    if (this.sample === BigInt)
      return typeof other == "bigint" || other instanceof BigInt;
    if (this.sample === Symbol)
      return typeof other == "symbol" || other instanceof Symbol;
    if (this.sample === Object)
      return typeof other == "object";
    return other instanceof this.sample;
  }
  toString() {
    return "Any";
  }
  getExpectedType() {
    if (this.sample === String)
      return "string";
    if (this.sample === Number)
      return "number";
    if (this.sample === Function)
      return "function";
    if (this.sample === Object)
      return "object";
    if (this.sample === Boolean)
      return "boolean";
    return this.fnNameFor(this.sample);
  }
  toAsymmetricMatcher() {
    return `Any<${this.fnNameFor(this.sample)}>`;
  }
};
var StringMatching = class extends AsymmetricMatcher2 {
  constructor(sample, inverse = false) {
    if (!isA("String", sample) && !isA("RegExp", sample))
      throw new Error("Expected is not a String or a RegExp");
    super(new RegExp(sample), inverse);
  }
  asymmetricMatch(other) {
    const result = isA("String", other) && this.sample.test(other);
    return this.inverse ? !result : result;
  }
  toString() {
    return `String${this.inverse ? "Not" : ""}Matching`;
  }
  getExpectedType() {
    return "string";
  }
};
var JestAsymmetricMatchers = (chai3, utils) => {
  utils.addMethod(chai3.expect, "anything", () => new Anything());
  utils.addMethod(chai3.expect, "any", (expected) => new Any(expected));
  utils.addMethod(chai3.expect, "stringContaining", (expected) => new StringContaining(expected));
  utils.addMethod(chai3.expect, "objectContaining", (expected) => new ObjectContaining(expected));
  utils.addMethod(chai3.expect, "arrayContaining", (expected) => new ArrayContaining(expected));
  utils.addMethod(chai3.expect, "stringMatching", (expected) => new StringMatching(expected));
  chai3.expect.not = {
    stringContaining: (expected) => new StringContaining(expected, true),
    objectContaining: (expected) => new ObjectContaining(expected, true),
    arrayContaining: (expected) => new ArrayContaining(expected, true),
    stringMatching: (expected) => new StringMatching(expected, true)
  };
};
var isAsyncFunction = (fn2) => typeof fn2 === "function" && fn2[Symbol.toStringTag] === "AsyncFunction";
var getMatcherState = (assertion, expect2) => {
  const obj = assertion._obj;
  const isNot = util2.flag(assertion, "negate");
  const promise = util2.flag(assertion, "promise") || "";
  const jestUtils = {
    ...matcherUtils,
    iterableEquality,
    subsetEquality
  };
  const matcherState = {
    ...getState(expect2),
    isNot,
    utils: jestUtils,
    promise,
    equals: equals2,
    suppressedErrors: [],
    snapshotState: getSnapshotClient().snapshotState
  };
  return {
    state: matcherState,
    isNot,
    obj
  };
};
var JestExtendError = class extends Error {
  constructor(message, actual, expected) {
    super(message);
    this.actual = actual;
    this.expected = expected;
  }
};
function JestExtendPlugin(expect2, matchers) {
  return (c, utils) => {
    Object.entries(matchers).forEach(([expectAssertionName, expectAssertion]) => {
      function expectSyncWrapper(...args) {
        const { state, isNot, obj } = getMatcherState(this, expect2);
        const { pass, message, actual, expected } = expectAssertion.call(state, obj, ...args);
        if (pass && isNot || !pass && !isNot)
          throw new JestExtendError(message(), actual, expected);
      }
      async function expectAsyncWrapper(...args) {
        const { state, isNot, obj } = getMatcherState(this, expect2);
        const { pass, message, actual, expected } = await expectAssertion.call(state, obj, ...args);
        if (pass && isNot || !pass && !isNot)
          throw new JestExtendError(message(), actual, expected);
      }
      const expectAssertionWrapper = isAsyncFunction(expectAssertion) ? expectAsyncWrapper : expectSyncWrapper;
      utils.addMethod(c.Assertion.prototype, expectAssertionName, expectAssertionWrapper);
      class CustomMatcher extends AsymmetricMatcher2 {
        constructor(inverse = false, ...sample) {
          super(sample, inverse);
        }
        asymmetricMatch(other) {
          const { pass } = expectAssertion.call(this.getMatcherContext(expect2), other, ...this.sample);
          return this.inverse ? !pass : pass;
        }
        toString() {
          return `${this.inverse ? "not." : ""}${expectAssertionName}`;
        }
        getExpectedType() {
          return "any";
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(", ")}>`;
        }
      }
      Object.defineProperty(expect2, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(false, ...sample),
        writable: true
      });
      Object.defineProperty(expect2.not, expectAssertionName, {
        configurable: true,
        enumerable: true,
        value: (...sample) => new CustomMatcher(true, ...sample),
        writable: true
      });
    });
  };
}
var JestExtend = (chai3, utils) => {
  utils.addMethod(chai3.expect, "extend", (expect2, expects) => {
    chai3.use(JestExtendPlugin(expect2, expects));
  });
};
use(JestExtend);
use(JestChaiExpect);
use(Subset);
use(SnapshotPlugin);
use(JestAsymmetricMatchers);
function createExpect(test3) {
  var _a2;
  const expect2 = (value, message) => {
    const { assertionCalls } = getState(expect2);
    setState({ assertionCalls: assertionCalls + 1 }, expect2);
    const assert2 = expect(value, message);
    if (test3)
      return assert2.withTest(test3);
    else
      return assert2;
  };
  Object.assign(expect2, expect);
  expect2.getState = () => getState(expect2);
  expect2.setState = (state) => setState(state, expect2);
  setState({
    assertionCalls: 0,
    isExpectingAssertions: false,
    isExpectingAssertionsError: null,
    expectedAssertionsNumber: null,
    expectedAssertionsNumberErrorGen: null,
    testPath: (_a2 = test3 == null ? void 0 : test3.suite.file) == null ? void 0 : _a2.filepath,
    currentTestName: test3 ? getFullName(test3) : void 0
  }, expect2);
  expect2.extend = (matchers) => expect.extend(expect2, matchers);
  function assertions(expected) {
    const errorGen = () => new Error(`expected number of assertions to be ${expected}, but got ${expect2.getState().assertionCalls}`);
    if (Error.captureStackTrace)
      Error.captureStackTrace(errorGen(), assertions);
    expect2.setState({
      expectedAssertionsNumber: expected,
      expectedAssertionsNumberErrorGen: errorGen
    });
  }
  function hasAssertions() {
    const error = new Error("expected any number of assertion, but got none");
    if (Error.captureStackTrace)
      Error.captureStackTrace(error, hasAssertions);
    expect2.setState({
      isExpectingAssertions: true,
      isExpectingAssertionsError: error
    });
  }
  util2.addMethod(expect2, "assertions", assertions);
  util2.addMethod(expect2, "hasAssertions", hasAssertions);
  return expect2;
}
var globalExpect = createExpect();
Object.defineProperty(globalThis, GLOBAL_EXPECT, {
  value: globalExpect,
  writable: true,
  configurable: true
});
var collectorContext = {
  tasks: [],
  currentSuite: null
};
function collectTask(task) {
  var _a2;
  (_a2 = collectorContext.currentSuite) == null ? void 0 : _a2.tasks.push(task);
}
async function runWithSuite(suite2, fn2) {
  const prev = collectorContext.currentSuite;
  collectorContext.currentSuite = suite2;
  await fn2();
  collectorContext.currentSuite = prev;
}
function getDefaultTestTimeout() {
  return getWorkerState().config.testTimeout;
}
function withTimeout(fn2, timeout = getDefaultTestTimeout(), isHook = false) {
  if (timeout <= 0 || timeout === Infinity)
    return fn2;
  return (...args) => {
    return Promise.race([fn2(...args), new Promise((resolve2, reject) => {
      var _a2;
      const timer = safeSetTimeout(() => {
        safeClearTimeout(timer);
        reject(new Error(makeTimeoutMsg(isHook, timeout)));
      }, timeout);
      (_a2 = timer.unref) == null ? void 0 : _a2.call(timer);
    })]);
  };
}
function createTestContext(test3) {
  const context = function() {
    throw new Error("done() callback is deprecated, use promise instead");
  };
  context.meta = test3;
  let _expect;
  Object.defineProperty(context, "expect", {
    get() {
      if (!_expect)
        _expect = createExpect(test3);
      return _expect;
    }
  });
  Object.defineProperty(context, "_local", {
    get() {
      return _expect != null;
    }
  });
  return context;
}
function makeTimeoutMsg(isHook, timeout) {
  return `${isHook ? "Hook" : "Test"} timed out in ${timeout}ms.
If this is a long-running test, pass a timeout value as the last argument or configure it globally with "${isHook ? "hookTimeout" : "testTimeout"}".`;
}
var fnMap = /* @__PURE__ */ new WeakMap();
var hooksMap = /* @__PURE__ */ new WeakMap();
function setFn(key, fn2) {
  fnMap.set(key, fn2);
}
function setHooks(key, hooks) {
  hooksMap.set(key, hooks);
}
function getHooks(key) {
  return hooksMap.get(key);
}
var suite = createSuite();
var test2 = createTest(function(name, fn2, timeout) {
  getCurrentSuite().test.fn.call(this, name, fn2, timeout);
});
function formatTitle(template, items, idx) {
  if (template.includes("%#")) {
    template = template.replace(/%%/g, "__vitest_escaped_%__").replace(/%#/g, `${idx}`).replace(/__vitest_escaped_%__/g, "%%");
  }
  const count = template.split("%").length - 1;
  let formatted = import_util.default.format(template, ...items.slice(0, count));
  if (isObject(items[0])) {
    formatted = formatted.replace(/\$([$\w_]+)/g, (_, key) => {
      return items[0][key];
    });
  }
  return formatted;
}
var workerState = getWorkerState();
var defaultSuite = workerState.config.sequence.shuffle ? suite.shuffle("") : suite("");
function getCurrentSuite() {
  return collectorContext.currentSuite || defaultSuite;
}
function createSuiteHooks() {
  return {
    beforeAll: [],
    afterAll: [],
    beforeEach: [],
    afterEach: []
  };
}
function createSuiteCollector(name, factory = () => {
}, mode, concurrent, shuffle) {
  const tasks = [];
  const factoryQueue = [];
  let suite2;
  initSuite();
  const test22 = createTest(function(name2, fn2 = noop, timeout) {
    const mode2 = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    const test3 = {
      id: "",
      type: "test",
      name: name2,
      mode: mode2,
      suite: void 0,
      fails: this.fails
    };
    if (this.concurrent || concurrent)
      test3.concurrent = true;
    if (shuffle)
      test3.shuffle = true;
    const context = createTestContext(test3);
    Object.defineProperty(test3, "context", {
      value: context,
      enumerable: false
    });
    setFn(test3, withTimeout(() => fn2(context), timeout));
    tasks.push(test3);
  });
  const collector = {
    type: "collector",
    name,
    mode,
    test: test22,
    tasks,
    collect,
    clear,
    on: addHook
  };
  function addHook(name2, ...fn2) {
    getHooks(suite2)[name2].push(...fn2);
  }
  function initSuite() {
    suite2 = {
      id: "",
      type: "suite",
      name,
      mode,
      shuffle,
      tasks: []
    };
    setHooks(suite2, createSuiteHooks());
  }
  function clear() {
    tasks.length = 0;
    factoryQueue.length = 0;
    initSuite();
  }
  async function collect(file) {
    factoryQueue.length = 0;
    if (factory)
      await runWithSuite(collector, () => factory(test22));
    const allChildren = [];
    for (const i of [...factoryQueue, ...tasks])
      allChildren.push(i.type === "collector" ? await i.collect(file) : i);
    suite2.file = file;
    suite2.tasks = allChildren;
    allChildren.forEach((task) => {
      task.suite = suite2;
      if (file)
        task.file = file;
    });
    return suite2;
  }
  collectTask(collector);
  return collector;
}
function createSuite() {
  function suiteFn(name, factory) {
    const mode = this.only ? "only" : this.skip ? "skip" : this.todo ? "todo" : "run";
    return createSuiteCollector(name, factory, mode, this.concurrent, this.shuffle);
  }
  suiteFn.each = function(cases) {
    const suite2 = this.withContext();
    return (name, fn2) => {
      cases.forEach((i, idx) => {
        const items = Array.isArray(i) ? i : [i];
        suite2(formatTitle(name, items, idx), () => fn2(...items));
      });
    };
  };
  suiteFn.skipIf = (condition) => condition ? suite.skip : suite;
  suiteFn.runIf = (condition) => condition ? suite : suite.skip;
  return createChainable(["concurrent", "shuffle", "skip", "only", "todo"], suiteFn);
}
function createTest(fn2) {
  const testFn = fn2;
  testFn.each = function(cases) {
    const test22 = this.withContext();
    return (name, fn22, timeout) => {
      cases.forEach((i, idx) => {
        const items = Array.isArray(i) ? i : [i];
        test22(formatTitle(name, items, idx), () => fn22(...items), timeout);
      });
    };
  };
  testFn.skipIf = (condition) => condition ? test2.skip : test2;
  testFn.runIf = (condition) => condition ? test2 : test2.skip;
  return createChainable(["concurrent", "skip", "only", "todo", "fails"], testFn);
}

// node_modules/vitest/dist/chunk-runtime-hooks.453f8858.mjs
init_vendor_commonjsHelpers_4da45ef5();
var import_util2 = __toESM(require("util"), 1);
var globalObject$1;
if (typeof commonjsGlobal !== "undefined") {
  globalObject$1 = commonjsGlobal;
} else if (typeof window !== "undefined") {
  globalObject$1 = window;
} else {
  globalObject$1 = self;
}
var global3 = globalObject$1;
var call = Function.call;
var copyPrototype$6 = function copyPrototypeMethods(prototype) {
  return Object.getOwnPropertyNames(prototype).reduce(function(result, name) {
    if (name !== "size" && name !== "caller" && name !== "callee" && name !== "arguments" && typeof prototype[name] === "function") {
      result[name] = call.bind(prototype[name]);
    }
    return result;
  }, /* @__PURE__ */ Object.create(null));
};
var copyPrototype$5 = copyPrototype$6;
var array = copyPrototype$5(Array.prototype);
var every$1 = array.every;
function hasCallsLeft(callMap, spy) {
  if (callMap[spy.id] === void 0) {
    callMap[spy.id] = 0;
  }
  return callMap[spy.id] < spy.callCount;
}
function checkAdjacentCalls(callMap, spy, index, spies2) {
  var calledBeforeNext = true;
  if (index !== spies2.length - 1) {
    calledBeforeNext = spy.calledBefore(spies2[index + 1]);
  }
  if (hasCallsLeft(callMap, spy) && calledBeforeNext) {
    callMap[spy.id] += 1;
    return true;
  }
  return false;
}
function calledInOrder(spies2) {
  var callMap = {};
  var _spies = arguments.length > 1 ? arguments : spies2;
  return every$1(_spies, checkAdjacentCalls.bind(null, callMap));
}
var calledInOrder_1 = calledInOrder;
var functionName$1 = function functionName(func) {
  if (!func) {
    return "";
  }
  try {
    return func.displayName || func.name || (String(func).match(/function ([^\s(]+)/) || [])[1];
  } catch (e) {
    return "";
  }
};
var functionName2 = functionName$1;
function className(value) {
  return value.constructor && value.constructor.name || typeof value.constructor === "function" && functionName2(value.constructor) || null;
}
var className_1 = className;
var deprecated = {};
(function(exports) {
  exports.wrap = function(func, msg) {
    var wrapped = function() {
      exports.printWarning(msg);
      return func.apply(this, arguments);
    };
    if (func.prototype) {
      wrapped.prototype = func.prototype;
    }
    return wrapped;
  };
  exports.defaultMsg = function(packageName, funcName) {
    return packageName + "." + funcName + " is deprecated and will be removed from the public API in a future version of " + packageName + ".";
  };
  exports.printWarning = function(msg) {
    if (typeof process === "object" && process.emitWarning) {
      process.emitWarning(msg);
    } else if (console.info) {
      console.info(msg);
    } else {
      console.log(msg);
    }
  };
})(deprecated);
var every = function every2(obj, fn2) {
  var pass = true;
  try {
    obj.forEach(function() {
      if (!fn2.apply(this, arguments)) {
        throw new Error();
      }
    });
  } catch (e) {
    pass = false;
  }
  return pass;
};
var sort = array.sort;
var slice = array.slice;
function comparator(a, b) {
  var aCall = a.getCall(0);
  var bCall = b.getCall(0);
  var aId = aCall && aCall.callId || -1;
  var bId = bCall && bCall.callId || -1;
  return aId < bId ? -1 : 1;
}
function orderByFirstCall(spies2) {
  return sort(slice(spies2), comparator);
}
var orderByFirstCall_1 = orderByFirstCall;
var copyPrototype$4 = copyPrototype$6;
var _function = copyPrototype$4(Function.prototype);
var copyPrototype$3 = copyPrototype$6;
var map = copyPrototype$3(Map.prototype);
var copyPrototype$2 = copyPrototype$6;
var object = copyPrototype$2(Object.prototype);
var copyPrototype$1 = copyPrototype$6;
var set = copyPrototype$1(Set.prototype);
var copyPrototype = copyPrototype$6;
var string = copyPrototype(String.prototype);
var prototypes = {
  array,
  function: _function,
  map,
  object,
  set,
  string
};
var typeDetect = { exports: {} };
(function(module2, exports) {
  (function(global4, factory) {
    module2.exports = factory();
  })(commonjsGlobal, function() {
    var promiseExists = typeof Promise === "function";
    var globalObject2 = typeof self === "object" ? self : commonjsGlobal;
    var symbolExists = typeof Symbol !== "undefined";
    var mapExists = typeof Map !== "undefined";
    var setExists = typeof Set !== "undefined";
    var weakMapExists = typeof WeakMap !== "undefined";
    var weakSetExists = typeof WeakSet !== "undefined";
    var dataViewExists = typeof DataView !== "undefined";
    var symbolIteratorExists = symbolExists && typeof Symbol.iterator !== "undefined";
    var symbolToStringTagExists = symbolExists && typeof Symbol.toStringTag !== "undefined";
    var setEntriesExists = setExists && typeof Set.prototype.entries === "function";
    var mapEntriesExists = mapExists && typeof Map.prototype.entries === "function";
    var setIteratorPrototype = setEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Set()).entries());
    var mapIteratorPrototype = mapEntriesExists && Object.getPrototypeOf((/* @__PURE__ */ new Map()).entries());
    var arrayIteratorExists = symbolIteratorExists && typeof Array.prototype[Symbol.iterator] === "function";
    var arrayIteratorPrototype = arrayIteratorExists && Object.getPrototypeOf([][Symbol.iterator]());
    var stringIteratorExists = symbolIteratorExists && typeof String.prototype[Symbol.iterator] === "function";
    var stringIteratorPrototype = stringIteratorExists && Object.getPrototypeOf(""[Symbol.iterator]());
    var toStringLeftSliceLength = 8;
    var toStringRightSliceLength = -1;
    function typeDetect2(obj) {
      var typeofObj = typeof obj;
      if (typeofObj !== "object") {
        return typeofObj;
      }
      if (obj === null) {
        return "null";
      }
      if (obj === globalObject2) {
        return "global";
      }
      if (Array.isArray(obj) && (symbolToStringTagExists === false || !(Symbol.toStringTag in obj))) {
        return "Array";
      }
      if (typeof window === "object" && window !== null) {
        if (typeof window.location === "object" && obj === window.location) {
          return "Location";
        }
        if (typeof window.document === "object" && obj === window.document) {
          return "Document";
        }
        if (typeof window.navigator === "object") {
          if (typeof window.navigator.mimeTypes === "object" && obj === window.navigator.mimeTypes) {
            return "MimeTypeArray";
          }
          if (typeof window.navigator.plugins === "object" && obj === window.navigator.plugins) {
            return "PluginArray";
          }
        }
        if ((typeof window.HTMLElement === "function" || typeof window.HTMLElement === "object") && obj instanceof window.HTMLElement) {
          if (obj.tagName === "BLOCKQUOTE") {
            return "HTMLQuoteElement";
          }
          if (obj.tagName === "TD") {
            return "HTMLTableDataCellElement";
          }
          if (obj.tagName === "TH") {
            return "HTMLTableHeaderCellElement";
          }
        }
      }
      var stringTag = symbolToStringTagExists && obj[Symbol.toStringTag];
      if (typeof stringTag === "string") {
        return stringTag;
      }
      var objPrototype = Object.getPrototypeOf(obj);
      if (objPrototype === RegExp.prototype) {
        return "RegExp";
      }
      if (objPrototype === Date.prototype) {
        return "Date";
      }
      if (promiseExists && objPrototype === Promise.prototype) {
        return "Promise";
      }
      if (setExists && objPrototype === Set.prototype) {
        return "Set";
      }
      if (mapExists && objPrototype === Map.prototype) {
        return "Map";
      }
      if (weakSetExists && objPrototype === WeakSet.prototype) {
        return "WeakSet";
      }
      if (weakMapExists && objPrototype === WeakMap.prototype) {
        return "WeakMap";
      }
      if (dataViewExists && objPrototype === DataView.prototype) {
        return "DataView";
      }
      if (mapExists && objPrototype === mapIteratorPrototype) {
        return "Map Iterator";
      }
      if (setExists && objPrototype === setIteratorPrototype) {
        return "Set Iterator";
      }
      if (arrayIteratorExists && objPrototype === arrayIteratorPrototype) {
        return "Array Iterator";
      }
      if (stringIteratorExists && objPrototype === stringIteratorPrototype) {
        return "String Iterator";
      }
      if (objPrototype === null) {
        return "Object";
      }
      return Object.prototype.toString.call(obj).slice(toStringLeftSliceLength, toStringRightSliceLength);
    }
    return typeDetect2;
  });
})(typeDetect);
var type = typeDetect.exports;
var typeOf = function typeOf2(value) {
  return type(value).toLowerCase();
};
function valueToString(value) {
  if (value && value.toString) {
    return value.toString();
  }
  return String(value);
}
var valueToString_1 = valueToString;
var lib = {
  global: global3,
  calledInOrder: calledInOrder_1,
  className: className_1,
  deprecated,
  every,
  functionName: functionName$1,
  orderByFirstCall: orderByFirstCall_1,
  prototypes,
  typeOf,
  valueToString: valueToString_1
};
var globalObject = lib.global;
function withGlobal(_global) {
  const userAgent = _global.navigator && _global.navigator.userAgent;
  const isRunningInIE = userAgent && userAgent.indexOf("MSIE ") > -1;
  const maxTimeout = Math.pow(2, 31) - 1;
  const idCounterStart = 1e12;
  const NOOP = function() {
    return void 0;
  };
  const NOOP_ARRAY = function() {
    return [];
  };
  const timeoutResult = _global.setTimeout(NOOP, 0);
  const addTimerReturnsObject = typeof timeoutResult === "object";
  const hrtimePresent = _global.process && typeof _global.process.hrtime === "function";
  const hrtimeBigintPresent = hrtimePresent && typeof _global.process.hrtime.bigint === "function";
  const nextTickPresent = _global.process && typeof _global.process.nextTick === "function";
  const utilPromisify = _global.process && import_util2.default.promisify;
  const performancePresent = _global.performance && typeof _global.performance.now === "function";
  const hasPerformancePrototype = _global.Performance && (typeof _global.Performance).match(/^(function|object)$/);
  const hasPerformanceConstructorPrototype = _global.performance && _global.performance.constructor && _global.performance.constructor.prototype;
  const queueMicrotaskPresent = _global.hasOwnProperty("queueMicrotask");
  const requestAnimationFramePresent = _global.requestAnimationFrame && typeof _global.requestAnimationFrame === "function";
  const cancelAnimationFramePresent = _global.cancelAnimationFrame && typeof _global.cancelAnimationFrame === "function";
  const requestIdleCallbackPresent = _global.requestIdleCallback && typeof _global.requestIdleCallback === "function";
  const cancelIdleCallbackPresent = _global.cancelIdleCallback && typeof _global.cancelIdleCallback === "function";
  const setImmediatePresent = _global.setImmediate && typeof _global.setImmediate === "function";
  if (isRunningInIE) {
    _global.setTimeout = _global.setTimeout;
    _global.clearTimeout = _global.clearTimeout;
    _global.setInterval = _global.setInterval;
    _global.clearInterval = _global.clearInterval;
    _global.Date = _global.Date;
  }
  if (setImmediatePresent) {
    _global.setImmediate = _global.setImmediate;
    _global.clearImmediate = _global.clearImmediate;
  }
  _global.clearTimeout(timeoutResult);
  const NativeDate = _global.Date;
  let uniqueTimerId = idCounterStart;
  function isNumberFinite(num) {
    if (Number.isFinite) {
      return Number.isFinite(num);
    }
    return isFinite(num);
  }
  let isNearInfiniteLimit = false;
  function checkIsNearInfiniteLimit(clock, i) {
    if (clock.loopLimit && i === clock.loopLimit - 1) {
      isNearInfiniteLimit = true;
    }
  }
  function resetIsNearInfiniteLimit() {
    isNearInfiniteLimit = false;
  }
  function parseTime(str) {
    if (!str) {
      return 0;
    }
    const strings = str.split(":");
    const l = strings.length;
    let i = l;
    let ms = 0;
    let parsed;
    if (l > 3 || !/^(\d\d:){0,2}\d\d?$/.test(str)) {
      throw new Error(
        "tick only understands numbers, 'm:s' and 'h:m:s'. Each part must be two digits"
      );
    }
    while (i--) {
      parsed = parseInt(strings[i], 10);
      if (parsed >= 60) {
        throw new Error(`Invalid time ${str}`);
      }
      ms += parsed * Math.pow(60, l - i - 1);
    }
    return ms * 1e3;
  }
  function nanoRemainder(msFloat) {
    const modulo = 1e6;
    const remainder = msFloat * 1e6 % modulo;
    const positiveRemainder = remainder < 0 ? remainder + modulo : remainder;
    return Math.floor(positiveRemainder);
  }
  function getEpoch(epoch) {
    if (!epoch) {
      return 0;
    }
    if (typeof epoch.getTime === "function") {
      return epoch.getTime();
    }
    if (typeof epoch === "number") {
      return epoch;
    }
    throw new TypeError("now should be milliseconds since UNIX epoch");
  }
  function inRange(from, to, timer) {
    return timer && timer.callAt >= from && timer.callAt <= to;
  }
  function getInfiniteLoopError(clock, job) {
    const infiniteLoopError = new Error(
      `Aborting after running ${clock.loopLimit} timers, assuming an infinite loop!`
    );
    if (!job.error) {
      return infiniteLoopError;
    }
    const computedTargetPattern = /target\.*[<|(|[].*?[>|\]|)]\s*/;
    let clockMethodPattern = new RegExp(
      String(Object.keys(clock).join("|"))
    );
    if (addTimerReturnsObject) {
      clockMethodPattern = new RegExp(
        `\\s+at (Object\\.)?(?:${Object.keys(clock).join("|")})\\s+`
      );
    }
    let matchedLineIndex = -1;
    job.error.stack.split("\n").some(function(line, i) {
      const matchedComputedTarget = line.match(computedTargetPattern);
      if (matchedComputedTarget) {
        matchedLineIndex = i;
        return true;
      }
      const matchedClockMethod = line.match(clockMethodPattern);
      if (matchedClockMethod) {
        matchedLineIndex = i;
        return false;
      }
      return matchedLineIndex >= 0;
    });
    const stack = `${infiniteLoopError}
${job.type || "Microtask"} - ${job.func.name || "anonymous"}
${job.error.stack.split("\n").slice(matchedLineIndex + 1).join("\n")}`;
    try {
      Object.defineProperty(infiniteLoopError, "stack", {
        value: stack
      });
    } catch (e) {
    }
    return infiniteLoopError;
  }
  function mirrorDateProperties(target, source) {
    let prop;
    for (prop in source) {
      if (source.hasOwnProperty(prop)) {
        target[prop] = source[prop];
      }
    }
    if (source.now) {
      target.now = function now2() {
        return target.clock.now;
      };
    } else {
      delete target.now;
    }
    if (source.toSource) {
      target.toSource = function toSource() {
        return source.toSource();
      };
    } else {
      delete target.toSource;
    }
    target.toString = function toString4() {
      return source.toString();
    };
    target.prototype = source.prototype;
    target.parse = source.parse;
    target.UTC = source.UTC;
    target.prototype.toUTCString = source.prototype.toUTCString;
    target.isFake = true;
    return target;
  }
  function createDate() {
    function ClockDate(year, month, date, hour, minute, second, ms) {
      if (!(this instanceof ClockDate)) {
        return new NativeDate(ClockDate.clock.now).toString();
      }
      switch (arguments.length) {
        case 0:
          return new NativeDate(ClockDate.clock.now);
        case 1:
          return new NativeDate(year);
        case 2:
          return new NativeDate(year, month);
        case 3:
          return new NativeDate(year, month, date);
        case 4:
          return new NativeDate(year, month, date, hour);
        case 5:
          return new NativeDate(year, month, date, hour, minute);
        case 6:
          return new NativeDate(
            year,
            month,
            date,
            hour,
            minute,
            second
          );
        default:
          return new NativeDate(
            year,
            month,
            date,
            hour,
            minute,
            second,
            ms
          );
      }
    }
    return mirrorDateProperties(ClockDate, NativeDate);
  }
  function enqueueJob(clock, job) {
    if (!clock.jobs) {
      clock.jobs = [];
    }
    clock.jobs.push(job);
  }
  function runJobs(clock) {
    if (!clock.jobs) {
      return;
    }
    for (let i = 0; i < clock.jobs.length; i++) {
      const job = clock.jobs[i];
      job.func.apply(null, job.args);
      checkIsNearInfiniteLimit(clock, i);
      if (clock.loopLimit && i > clock.loopLimit) {
        throw getInfiniteLoopError(clock, job);
      }
    }
    resetIsNearInfiniteLimit();
    clock.jobs = [];
  }
  function addTimer(clock, timer) {
    if (timer.func === void 0) {
      throw new Error("Callback must be provided to timer calls");
    }
    if (addTimerReturnsObject) {
      if (typeof timer.func !== "function") {
        throw new TypeError(
          `[ERR_INVALID_CALLBACK]: Callback must be a function. Received ${timer.func} of type ${typeof timer.func}`
        );
      }
    }
    if (isNearInfiniteLimit) {
      timer.error = new Error();
    }
    timer.type = timer.immediate ? "Immediate" : "Timeout";
    if (timer.hasOwnProperty("delay")) {
      if (typeof timer.delay !== "number") {
        timer.delay = parseInt(timer.delay, 10);
      }
      if (!isNumberFinite(timer.delay)) {
        timer.delay = 0;
      }
      timer.delay = timer.delay > maxTimeout ? 1 : timer.delay;
      timer.delay = Math.max(0, timer.delay);
    }
    if (timer.hasOwnProperty("interval")) {
      timer.type = "Interval";
      timer.interval = timer.interval > maxTimeout ? 1 : timer.interval;
    }
    if (timer.hasOwnProperty("animation")) {
      timer.type = "AnimationFrame";
      timer.animation = true;
    }
    if (timer.hasOwnProperty("idleCallback")) {
      timer.type = "IdleCallback";
      timer.idleCallback = true;
    }
    if (!clock.timers) {
      clock.timers = {};
    }
    timer.id = uniqueTimerId++;
    timer.createdAt = clock.now;
    timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
    clock.timers[timer.id] = timer;
    if (addTimerReturnsObject) {
      const res = {
        refed: true,
        ref: function() {
          this.refed = true;
          return res;
        },
        unref: function() {
          this.refed = false;
          return res;
        },
        hasRef: function() {
          return this.refed;
        },
        refresh: function() {
          timer.callAt = clock.now + (parseInt(timer.delay) || (clock.duringTick ? 1 : 0));
          clock.timers[timer.id] = timer;
          return res;
        },
        [Symbol.toPrimitive]: function() {
          return timer.id;
        }
      };
      return res;
    }
    return timer.id;
  }
  function compareTimers(a, b) {
    if (a.callAt < b.callAt) {
      return -1;
    }
    if (a.callAt > b.callAt) {
      return 1;
    }
    if (a.immediate && !b.immediate) {
      return -1;
    }
    if (!a.immediate && b.immediate) {
      return 1;
    }
    if (a.createdAt < b.createdAt) {
      return -1;
    }
    if (a.createdAt > b.createdAt) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
  }
  function firstTimerInRange(clock, from, to) {
    const timers2 = clock.timers;
    let timer = null;
    let id, isInRange;
    for (id in timers2) {
      if (timers2.hasOwnProperty(id)) {
        isInRange = inRange(from, to, timers2[id]);
        if (isInRange && (!timer || compareTimers(timer, timers2[id]) === 1)) {
          timer = timers2[id];
        }
      }
    }
    return timer;
  }
  function firstTimer(clock) {
    const timers2 = clock.timers;
    let timer = null;
    let id;
    for (id in timers2) {
      if (timers2.hasOwnProperty(id)) {
        if (!timer || compareTimers(timer, timers2[id]) === 1) {
          timer = timers2[id];
        }
      }
    }
    return timer;
  }
  function lastTimer(clock) {
    const timers2 = clock.timers;
    let timer = null;
    let id;
    for (id in timers2) {
      if (timers2.hasOwnProperty(id)) {
        if (!timer || compareTimers(timer, timers2[id]) === -1) {
          timer = timers2[id];
        }
      }
    }
    return timer;
  }
  function callTimer(clock, timer) {
    if (typeof timer.interval === "number") {
      clock.timers[timer.id].callAt += timer.interval;
    } else {
      delete clock.timers[timer.id];
    }
    if (typeof timer.func === "function") {
      timer.func.apply(null, timer.args);
    } else {
      const eval2 = eval;
      (function() {
        eval2(timer.func);
      })();
    }
  }
  function getClearHandler(ttype) {
    if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
      return `cancel${ttype}`;
    }
    return `clear${ttype}`;
  }
  function getScheduleHandler(ttype) {
    if (ttype === "IdleCallback" || ttype === "AnimationFrame") {
      return `request${ttype}`;
    }
    return `set${ttype}`;
  }
  function createWarnOnce() {
    let calls = 0;
    return function(msg) {
      !calls++ && console.warn(msg);
    };
  }
  const warnOnce = createWarnOnce();
  function clearTimer(clock, timerId, ttype) {
    if (!timerId) {
      return;
    }
    if (!clock.timers) {
      clock.timers = {};
    }
    const id = Number(timerId);
    if (Number.isNaN(id) || id < idCounterStart) {
      const handlerName = getClearHandler(ttype);
      if (clock.shouldClearNativeTimers === true) {
        const nativeHandler = clock[`_${handlerName}`];
        return typeof nativeHandler === "function" ? nativeHandler(timerId) : void 0;
      }
      warnOnce(
        `FakeTimers: ${handlerName} was invoked to clear a native timer instead of one created by this library.
To automatically clean-up native timers, use \`shouldClearNativeTimers\`.`
      );
    }
    if (clock.timers.hasOwnProperty(id)) {
      const timer = clock.timers[id];
      if (timer.type === ttype || timer.type === "Timeout" && ttype === "Interval" || timer.type === "Interval" && ttype === "Timeout") {
        delete clock.timers[id];
      } else {
        const clear = getClearHandler(ttype);
        const schedule = getScheduleHandler(timer.type);
        throw new Error(
          `Cannot clear timer: timer created with ${schedule}() but cleared with ${clear}()`
        );
      }
    }
  }
  function uninstall(clock, config2) {
    let method, i, l;
    const installedHrTime = "_hrtime";
    const installedNextTick = "_nextTick";
    for (i = 0, l = clock.methods.length; i < l; i++) {
      method = clock.methods[i];
      if (method === "hrtime" && _global.process) {
        _global.process.hrtime = clock[installedHrTime];
      } else if (method === "nextTick" && _global.process) {
        _global.process.nextTick = clock[installedNextTick];
      } else if (method === "performance") {
        const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
          clock,
          `_${method}`
        );
        if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
          Object.defineProperty(
            _global,
            method,
            originalPerfDescriptor
          );
        } else if (originalPerfDescriptor.configurable) {
          _global[method] = clock[`_${method}`];
        }
      } else {
        if (_global[method] && _global[method].hadOwnProperty) {
          _global[method] = clock[`_${method}`];
        } else {
          try {
            delete _global[method];
          } catch (ignore) {
          }
        }
      }
    }
    if (config2.shouldAdvanceTime === true) {
      _global.clearInterval(clock.attachedInterval);
    }
    clock.methods = [];
    if (!clock.timers) {
      return [];
    }
    return Object.keys(clock.timers).map(function mapper(key) {
      return clock.timers[key];
    });
  }
  function hijackMethod(target, method, clock) {
    clock[method].hadOwnProperty = Object.prototype.hasOwnProperty.call(
      target,
      method
    );
    clock[`_${method}`] = target[method];
    if (method === "Date") {
      const date = mirrorDateProperties(clock[method], target[method]);
      target[method] = date;
    } else if (method === "performance") {
      const originalPerfDescriptor = Object.getOwnPropertyDescriptor(
        target,
        method
      );
      if (originalPerfDescriptor && originalPerfDescriptor.get && !originalPerfDescriptor.set) {
        Object.defineProperty(
          clock,
          `_${method}`,
          originalPerfDescriptor
        );
        const perfDescriptor = Object.getOwnPropertyDescriptor(
          clock,
          method
        );
        Object.defineProperty(target, method, perfDescriptor);
      } else {
        target[method] = clock[method];
      }
    } else {
      target[method] = function() {
        return clock[method].apply(clock, arguments);
      };
      Object.defineProperties(
        target[method],
        Object.getOwnPropertyDescriptors(clock[method])
      );
    }
    target[method].clock = clock;
  }
  function doIntervalTick(clock, advanceTimeDelta) {
    clock.tick(advanceTimeDelta);
  }
  const timers = {
    setTimeout: _global.setTimeout,
    clearTimeout: _global.clearTimeout,
    setInterval: _global.setInterval,
    clearInterval: _global.clearInterval,
    Date: _global.Date
  };
  if (setImmediatePresent) {
    timers.setImmediate = _global.setImmediate;
    timers.clearImmediate = _global.clearImmediate;
  }
  if (hrtimePresent) {
    timers.hrtime = _global.process.hrtime;
  }
  if (nextTickPresent) {
    timers.nextTick = _global.process.nextTick;
  }
  if (performancePresent) {
    timers.performance = _global.performance;
  }
  if (requestAnimationFramePresent) {
    timers.requestAnimationFrame = _global.requestAnimationFrame;
  }
  if (queueMicrotaskPresent) {
    timers.queueMicrotask = true;
  }
  if (cancelAnimationFramePresent) {
    timers.cancelAnimationFrame = _global.cancelAnimationFrame;
  }
  if (requestIdleCallbackPresent) {
    timers.requestIdleCallback = _global.requestIdleCallback;
  }
  if (cancelIdleCallbackPresent) {
    timers.cancelIdleCallback = _global.cancelIdleCallback;
  }
  const originalSetTimeout = _global.setImmediate || _global.setTimeout;
  function createClock(start, loopLimit) {
    start = Math.floor(getEpoch(start));
    loopLimit = loopLimit || 1e3;
    let nanos = 0;
    const adjustedSystemTime = [0, 0];
    if (NativeDate === void 0) {
      throw new Error(
        "The global scope doesn't have a `Date` object (see https://github.com/sinonjs/sinon/issues/1852#issuecomment-419622780)"
      );
    }
    const clock = {
      now: start,
      Date: createDate(),
      loopLimit
    };
    clock.Date.clock = clock;
    function getTimeToNextFrame() {
      return 16 - (clock.now - start) % 16;
    }
    function hrtime(prev) {
      const millisSinceStart = clock.now - adjustedSystemTime[0] - start;
      const secsSinceStart = Math.floor(millisSinceStart / 1e3);
      const remainderInNanos = (millisSinceStart - secsSinceStart * 1e3) * 1e6 + nanos - adjustedSystemTime[1];
      if (Array.isArray(prev)) {
        if (prev[1] > 1e9) {
          throw new TypeError(
            "Number of nanoseconds can't exceed a billion"
          );
        }
        const oldSecs = prev[0];
        let nanoDiff = remainderInNanos - prev[1];
        let secDiff = secsSinceStart - oldSecs;
        if (nanoDiff < 0) {
          nanoDiff += 1e9;
          secDiff -= 1;
        }
        return [secDiff, nanoDiff];
      }
      return [secsSinceStart, remainderInNanos];
    }
    if (hrtimeBigintPresent) {
      hrtime.bigint = function() {
        const parts = hrtime();
        return BigInt(parts[0]) * BigInt(1e9) + BigInt(parts[1]);
      };
    }
    clock.requestIdleCallback = function requestIdleCallback(func, timeout) {
      let timeToNextIdlePeriod = 0;
      if (clock.countTimers() > 0) {
        timeToNextIdlePeriod = 50;
      }
      const result = addTimer(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 2),
        delay: typeof timeout === "undefined" ? timeToNextIdlePeriod : Math.min(timeout, timeToNextIdlePeriod),
        idleCallback: true
      });
      return Number(result);
    };
    clock.cancelIdleCallback = function cancelIdleCallback(timerId) {
      return clearTimer(clock, timerId, "IdleCallback");
    };
    clock.setTimeout = function setTimeout2(func, timeout) {
      return addTimer(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 2),
        delay: timeout
      });
    };
    if (typeof _global.Promise !== "undefined" && utilPromisify) {
      clock.setTimeout[utilPromisify.custom] = function promisifiedSetTimeout(timeout, arg) {
        return new _global.Promise(function setTimeoutExecutor(resolve2) {
          addTimer(clock, {
            func: resolve2,
            args: [arg],
            delay: timeout
          });
        });
      };
    }
    clock.clearTimeout = function clearTimeout2(timerId) {
      return clearTimer(clock, timerId, "Timeout");
    };
    clock.nextTick = function nextTick(func) {
      return enqueueJob(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 1),
        error: isNearInfiniteLimit ? new Error() : null
      });
    };
    clock.queueMicrotask = function queueMicrotask(func) {
      return clock.nextTick(func);
    };
    clock.setInterval = function setInterval(func, timeout) {
      timeout = parseInt(timeout, 10);
      return addTimer(clock, {
        func,
        args: Array.prototype.slice.call(arguments, 2),
        delay: timeout,
        interval: timeout
      });
    };
    clock.clearInterval = function clearInterval(timerId) {
      return clearTimer(clock, timerId, "Interval");
    };
    if (setImmediatePresent) {
      clock.setImmediate = function setImmediate(func) {
        return addTimer(clock, {
          func,
          args: Array.prototype.slice.call(arguments, 1),
          immediate: true
        });
      };
      if (typeof _global.Promise !== "undefined" && utilPromisify) {
        clock.setImmediate[utilPromisify.custom] = function promisifiedSetImmediate(arg) {
          return new _global.Promise(function setImmediateExecutor(resolve2) {
            addTimer(clock, {
              func: resolve2,
              args: [arg],
              immediate: true
            });
          });
        };
      }
      clock.clearImmediate = function clearImmediate(timerId) {
        return clearTimer(clock, timerId, "Immediate");
      };
    }
    clock.countTimers = function countTimers() {
      return Object.keys(clock.timers || {}).length + (clock.jobs || []).length;
    };
    clock.requestAnimationFrame = function requestAnimationFrame(func) {
      const result = addTimer(clock, {
        func,
        delay: getTimeToNextFrame(),
        args: [clock.now + getTimeToNextFrame()],
        animation: true
      });
      return Number(result);
    };
    clock.cancelAnimationFrame = function cancelAnimationFrame(timerId) {
      return clearTimer(clock, timerId, "AnimationFrame");
    };
    clock.runMicrotasks = function runMicrotasks() {
      runJobs(clock);
    };
    function doTick(tickValue, isAsync2, resolve2, reject) {
      const msFloat = typeof tickValue === "number" ? tickValue : parseTime(tickValue);
      const ms = Math.floor(msFloat);
      const remainder = nanoRemainder(msFloat);
      let nanosTotal = nanos + remainder;
      let tickTo = clock.now + ms;
      if (msFloat < 0) {
        throw new TypeError("Negative ticks are not supported");
      }
      if (nanosTotal >= 1e6) {
        tickTo += 1;
        nanosTotal -= 1e6;
      }
      nanos = nanosTotal;
      let tickFrom = clock.now;
      let previous = clock.now;
      let timer, firstException, oldNow, nextPromiseTick, compensationCheck, postTimerCall;
      clock.duringTick = true;
      oldNow = clock.now;
      runJobs(clock);
      if (oldNow !== clock.now) {
        tickFrom += clock.now - oldNow;
        tickTo += clock.now - oldNow;
      }
      function doTickInner() {
        timer = firstTimerInRange(clock, tickFrom, tickTo);
        while (timer && tickFrom <= tickTo) {
          if (clock.timers[timer.id]) {
            tickFrom = timer.callAt;
            clock.now = timer.callAt;
            oldNow = clock.now;
            try {
              runJobs(clock);
              callTimer(clock, timer);
            } catch (e) {
              firstException = firstException || e;
            }
            if (isAsync2) {
              originalSetTimeout(nextPromiseTick);
              return;
            }
            compensationCheck();
          }
          postTimerCall();
        }
        oldNow = clock.now;
        runJobs(clock);
        if (oldNow !== clock.now) {
          tickFrom += clock.now - oldNow;
          tickTo += clock.now - oldNow;
        }
        clock.duringTick = false;
        timer = firstTimerInRange(clock, tickFrom, tickTo);
        if (timer) {
          try {
            clock.tick(tickTo - clock.now);
          } catch (e) {
            firstException = firstException || e;
          }
        } else {
          clock.now = tickTo;
          nanos = nanosTotal;
        }
        if (firstException) {
          throw firstException;
        }
        if (isAsync2) {
          resolve2(clock.now);
        } else {
          return clock.now;
        }
      }
      nextPromiseTick = isAsync2 && function() {
        try {
          compensationCheck();
          postTimerCall();
          doTickInner();
        } catch (e) {
          reject(e);
        }
      };
      compensationCheck = function() {
        if (oldNow !== clock.now) {
          tickFrom += clock.now - oldNow;
          tickTo += clock.now - oldNow;
          previous += clock.now - oldNow;
        }
      };
      postTimerCall = function() {
        timer = firstTimerInRange(clock, previous, tickTo);
        previous = tickFrom;
      };
      return doTickInner();
    }
    clock.tick = function tick(tickValue) {
      return doTick(tickValue, false);
    };
    if (typeof _global.Promise !== "undefined") {
      clock.tickAsync = function tickAsync(tickValue) {
        return new _global.Promise(function(resolve2, reject) {
          originalSetTimeout(function() {
            try {
              doTick(tickValue, true, resolve2, reject);
            } catch (e) {
              reject(e);
            }
          });
        });
      };
    }
    clock.next = function next() {
      runJobs(clock);
      const timer = firstTimer(clock);
      if (!timer) {
        return clock.now;
      }
      clock.duringTick = true;
      try {
        clock.now = timer.callAt;
        callTimer(clock, timer);
        runJobs(clock);
        return clock.now;
      } finally {
        clock.duringTick = false;
      }
    };
    if (typeof _global.Promise !== "undefined") {
      clock.nextAsync = function nextAsync() {
        return new _global.Promise(function(resolve2, reject) {
          originalSetTimeout(function() {
            try {
              const timer = firstTimer(clock);
              if (!timer) {
                resolve2(clock.now);
                return;
              }
              let err;
              clock.duringTick = true;
              clock.now = timer.callAt;
              try {
                callTimer(clock, timer);
              } catch (e) {
                err = e;
              }
              clock.duringTick = false;
              originalSetTimeout(function() {
                if (err) {
                  reject(err);
                } else {
                  resolve2(clock.now);
                }
              });
            } catch (e) {
              reject(e);
            }
          });
        });
      };
    }
    clock.runAll = function runAll() {
      let numTimers, i;
      runJobs(clock);
      for (i = 0; i < clock.loopLimit; i++) {
        if (!clock.timers) {
          resetIsNearInfiniteLimit();
          return clock.now;
        }
        numTimers = Object.keys(clock.timers).length;
        if (numTimers === 0) {
          resetIsNearInfiniteLimit();
          return clock.now;
        }
        clock.next();
        checkIsNearInfiniteLimit(clock, i);
      }
      const excessJob = firstTimer(clock);
      throw getInfiniteLoopError(clock, excessJob);
    };
    clock.runToFrame = function runToFrame() {
      return clock.tick(getTimeToNextFrame());
    };
    if (typeof _global.Promise !== "undefined") {
      clock.runAllAsync = function runAllAsync() {
        return new _global.Promise(function(resolve2, reject) {
          let i = 0;
          function doRun() {
            originalSetTimeout(function() {
              try {
                let numTimers;
                if (i < clock.loopLimit) {
                  if (!clock.timers) {
                    resetIsNearInfiniteLimit();
                    resolve2(clock.now);
                    return;
                  }
                  numTimers = Object.keys(clock.timers).length;
                  if (numTimers === 0) {
                    resetIsNearInfiniteLimit();
                    resolve2(clock.now);
                    return;
                  }
                  clock.next();
                  i++;
                  doRun();
                  checkIsNearInfiniteLimit(clock, i);
                  return;
                }
                const excessJob = firstTimer(clock);
                reject(getInfiniteLoopError(clock, excessJob));
              } catch (e) {
                reject(e);
              }
            });
          }
          doRun();
        });
      };
    }
    clock.runToLast = function runToLast() {
      const timer = lastTimer(clock);
      if (!timer) {
        runJobs(clock);
        return clock.now;
      }
      return clock.tick(timer.callAt - clock.now);
    };
    if (typeof _global.Promise !== "undefined") {
      clock.runToLastAsync = function runToLastAsync() {
        return new _global.Promise(function(resolve2, reject) {
          originalSetTimeout(function() {
            try {
              const timer = lastTimer(clock);
              if (!timer) {
                resolve2(clock.now);
              }
              resolve2(clock.tickAsync(timer.callAt));
            } catch (e) {
              reject(e);
            }
          });
        });
      };
    }
    clock.reset = function reset() {
      nanos = 0;
      clock.timers = {};
      clock.jobs = [];
      clock.now = start;
    };
    clock.setSystemTime = function setSystemTime(systemTime) {
      const newNow = getEpoch(systemTime);
      const difference = newNow - clock.now;
      let id, timer;
      adjustedSystemTime[0] = adjustedSystemTime[0] + difference;
      adjustedSystemTime[1] = adjustedSystemTime[1] + nanos;
      clock.now = newNow;
      nanos = 0;
      for (id in clock.timers) {
        if (clock.timers.hasOwnProperty(id)) {
          timer = clock.timers[id];
          timer.createdAt += difference;
          timer.callAt += difference;
        }
      }
    };
    if (performancePresent) {
      clock.performance = /* @__PURE__ */ Object.create(null);
      clock.performance.now = function FakeTimersNow() {
        const hrt = hrtime();
        const millis = hrt[0] * 1e3 + hrt[1] / 1e6;
        return millis;
      };
    }
    if (hrtimePresent) {
      clock.hrtime = hrtime;
    }
    return clock;
  }
  function install(config2) {
    if (arguments.length > 1 || config2 instanceof Date || Array.isArray(config2) || typeof config2 === "number") {
      throw new TypeError(
        `FakeTimers.install called with ${String(
          config2
        )} install requires an object parameter`
      );
    }
    if (_global.Date.isFake === true) {
      throw new TypeError(
        "Can't install fake timers twice on the same global object."
      );
    }
    config2 = typeof config2 !== "undefined" ? config2 : {};
    config2.shouldAdvanceTime = config2.shouldAdvanceTime || false;
    config2.advanceTimeDelta = config2.advanceTimeDelta || 20;
    config2.shouldClearNativeTimers = config2.shouldClearNativeTimers || false;
    if (config2.target) {
      throw new TypeError(
        "config.target is no longer supported. Use `withGlobal(target)` instead."
      );
    }
    let i, l;
    const clock = createClock(config2.now, config2.loopLimit);
    clock.shouldClearNativeTimers = config2.shouldClearNativeTimers;
    clock.uninstall = function() {
      return uninstall(clock, config2);
    };
    clock.methods = config2.toFake || [];
    if (clock.methods.length === 0) {
      clock.methods = Object.keys(timers).filter(function(key) {
        return key !== "nextTick" && key !== "queueMicrotask";
      });
    }
    if (config2.shouldAdvanceTime === true) {
      const intervalTick = doIntervalTick.bind(
        null,
        clock,
        config2.advanceTimeDelta
      );
      const intervalId = _global.setInterval(
        intervalTick,
        config2.advanceTimeDelta
      );
      clock.attachedInterval = intervalId;
    }
    if (clock.methods.includes("performance")) {
      const proto = (() => {
        if (hasPerformancePrototype) {
          return _global.Performance.prototype;
        }
        if (hasPerformanceConstructorPrototype) {
          return _global.performance.constructor.prototype;
        }
      })();
      if (proto) {
        Object.getOwnPropertyNames(proto).forEach(function(name) {
          if (name !== "now") {
            clock.performance[name] = name.indexOf("getEntries") === 0 ? NOOP_ARRAY : NOOP;
          }
        });
      } else if ((config2.toFake || []).includes("performance")) {
        throw new ReferenceError(
          "non-existent performance object cannot be faked"
        );
      }
    }
    for (i = 0, l = clock.methods.length; i < l; i++) {
      const nameOfMethodToReplace = clock.methods[i];
      if (nameOfMethodToReplace === "hrtime") {
        if (_global.process && typeof _global.process.hrtime === "function") {
          hijackMethod(_global.process, nameOfMethodToReplace, clock);
        }
      } else if (nameOfMethodToReplace === "nextTick") {
        if (_global.process && typeof _global.process.nextTick === "function") {
          hijackMethod(_global.process, nameOfMethodToReplace, clock);
        }
      } else {
        hijackMethod(_global, nameOfMethodToReplace, clock);
      }
    }
    return clock;
  }
  return {
    timers,
    createClock,
    install,
    withGlobal
  };
}
var defaultImplementation = withGlobal(globalObject);
defaultImplementation.timers;
defaultImplementation.createClock;
defaultImplementation.install;
var withGlobal_1 = withGlobal;
var FakeTimers = class {
  constructor({
    global: global4,
    config: config2
  }) {
    this._now = RealDate.now;
    this._userConfig = config2;
    this._fakingDate = false;
    this._fakingTime = false;
    this._fakeTimers = withGlobal_1(global4);
  }
  clearAllTimers() {
    if (this._fakingTime)
      this._clock.reset();
  }
  dispose() {
    this.useRealTimers();
  }
  runAllTimers() {
    if (this._checkFakeTimers())
      this._clock.runAll();
  }
  runOnlyPendingTimers() {
    if (this._checkFakeTimers())
      this._clock.runToLast();
  }
  advanceTimersToNextTimer(steps = 1) {
    if (this._checkFakeTimers()) {
      for (let i = steps; i > 0; i--) {
        this._clock.next();
        this._clock.tick(0);
        if (this._clock.countTimers() === 0)
          break;
      }
    }
  }
  advanceTimersByTime(msToRun) {
    if (this._checkFakeTimers())
      this._clock.tick(msToRun);
  }
  runAllTicks() {
    if (this._checkFakeTimers()) {
      this._clock.runMicrotasks();
    }
  }
  useRealTimers() {
    if (this._fakingDate) {
      resetDate();
      this._fakingDate = false;
    }
    if (this._fakingTime) {
      this._clock.uninstall();
      this._fakingTime = false;
    }
  }
  useFakeTimers() {
    if (this._fakingDate) {
      throw new Error('"setSystemTime" was called already and date was mocked. Reset timers using `vi.useRealTimers()` if you want to use fake timers again.');
    }
    if (!this._fakingTime) {
      const toFake = Object.keys(this._fakeTimers.timers);
      this._clock = this._fakeTimers.install({
        now: Date.now(),
        toFake,
        ...this._userConfig
      });
      this._fakingTime = true;
    }
  }
  reset() {
    if (this._checkFakeTimers()) {
      const { now: now2 } = this._clock;
      this._clock.reset();
      this._clock.setSystemTime(now2);
    }
  }
  setSystemTime(now2) {
    if (this._fakingTime) {
      this._clock.setSystemTime(now2);
    } else {
      mockDate(now2 ?? this.getRealSystemTime());
      this._fakingDate = true;
    }
  }
  getRealSystemTime() {
    return this._now();
  }
  getTimerCount() {
    if (this._checkFakeTimers())
      return this._clock.countTimers();
    return 0;
  }
  configure(config2) {
    this._userConfig = config2;
  }
  _checkFakeTimers() {
    if (!this._fakingTime) {
      throw new Error('Timers are not mocked. Try calling "vi.useFakeTimers()" first.');
    }
    return this._fakingTime;
  }
};
var VitestUtils = class {
  constructor() {
    this.spyOn = spyOn;
    this.fn = fn;
    this._mocker = typeof __vitest_mocker__ !== "undefined" ? __vitest_mocker__ : null;
    this._mockedDate = null;
    if (!this._mocker) {
      const errorMsg = 'Vitest was initialized with native Node instead of Vite Node.\n\nOne of the following is possible:\n- "vitest" is imported outside of your tests (in that case, use "vitest/node" or import.meta.vitest)\n- "vitest" is imported inside "globalSetup" (use "setupFiles", because "globalSetup" runs in a different context)\n- Your dependency inside "node_modules" imports "vitest" directly (in that case, inline that dependency, using "deps.inline" config)\n- Otherwise, it might be a Vitest bug. Please report it to https://github.com/vitest-dev/vitest/issues\n';
      throw new Error(errorMsg);
    }
    const workerState2 = getWorkerState();
    this._timers = new FakeTimers({
      global: globalThis,
      config: workerState2.config.fakeTimers
    });
  }
  useFakeTimers(config2) {
    if (config2) {
      this._timers.configure(config2);
    } else {
      const workerState2 = getWorkerState();
      this._timers.configure(workerState2.config.fakeTimers);
    }
    this._timers.useFakeTimers();
    return this;
  }
  useRealTimers() {
    this._timers.useRealTimers();
    this._mockedDate = null;
    return this;
  }
  runOnlyPendingTimers() {
    this._timers.runOnlyPendingTimers();
    return this;
  }
  runAllTimers() {
    this._timers.runAllTimers();
    return this;
  }
  runAllTicks() {
    this._timers.runAllTicks();
    return this;
  }
  advanceTimersByTime(ms) {
    this._timers.advanceTimersByTime(ms);
    return this;
  }
  advanceTimersToNextTimer() {
    this._timers.advanceTimersToNextTimer();
    return this;
  }
  getTimerCount() {
    return this._timers.getTimerCount();
  }
  setSystemTime(time) {
    const date = time instanceof Date ? time : new Date(time);
    this._mockedDate = date;
    this._timers.setSystemTime(date);
    return this;
  }
  getMockedSystemTime() {
    return this._mockedDate;
  }
  getRealSystemTime() {
    return this._timers.getRealSystemTime();
  }
  clearAllTimers() {
    this._timers.clearAllTimers();
    return this;
  }
  getImporter() {
    const err = new Error("mock");
    const [, , importer] = parseStacktrace(err, true);
    return importer.file;
  }
  mock(path2, factory) {
    this._mocker.queueMock(path2, this.getImporter(), factory);
  }
  unmock(path2) {
    this._mocker.queueUnmock(path2, this.getImporter());
  }
  doMock(path2, factory) {
    this._mocker.queueMock(path2, this.getImporter(), factory);
  }
  doUnmock(path2) {
    this._mocker.queueUnmock(path2, this.getImporter());
  }
  async importActual(path2) {
    return this._mocker.importActual(path2, this.getImporter());
  }
  async importMock(path2) {
    return this._mocker.importMock(path2, this.getImporter());
  }
  mocked(item, _options = {}) {
    return item;
  }
  isMockFunction(fn2) {
    return isMockFunction(fn2);
  }
  clearAllMocks() {
    spies.forEach((spy) => spy.mockClear());
    return this;
  }
  resetAllMocks() {
    spies.forEach((spy) => spy.mockReset());
    return this;
  }
  restoreAllMocks() {
    spies.forEach((spy) => spy.mockRestore());
    return this;
  }
  stubGlobal(name, value) {
    if (globalThis.window) {
      globalThis.window[name] = value;
    } else {
      globalThis[name] = value;
    }
    return this;
  }
  resetModules() {
    const state = getWorkerState();
    resetModules(state.moduleCache);
    return this;
  }
  async dynamicImportSettled() {
    const state = getWorkerState();
    const promises2 = [];
    for (const mod2 of state.moduleCache.values()) {
      if (mod2.promise)
        promises2.push(mod2.promise);
    }
    await Promise.allSettled(promises2);
    await new Promise((resolve2) => safeSetTimeout(resolve2, 1)).then(() => Promise.resolve());
  }
};
var vitest = new VitestUtils();
var vi = vitest;

// node_modules/vitest/dist/index.mjs
init_vendor_commonjsHelpers_4da45ef5();

// src/mock/fakeGameEndResults.ts
var fakeGameEndResults_default = [{ "displayName": "Cinnamonique", "userName": "cinnamonique", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/828eed05-e03d-4880-8a8d-de70a3d0f742-profile_image-300x300.png", "playerFlagName": "Unknown", "playerFlag": "unknown", "wasRandom": false, "score": 22028, "distance": 877.2225426901051, "timeTaken": 192132, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "blushykate", "userName": "blushykate", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/77966a2c-8871-42e4-a75c-ab4efe2238b2-profile_image-300x300.png", "playerFlagName": "Greenland", "playerFlag": "gl", "wasRandom": false, "score": 21507.33, "distance": 1154.8294920129265, "timeTaken": 342776, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "pigeon0427", "userName": "pigeon0427", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 20567.33, "distance": 1260.1117104468244, "timeTaken": 197929, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "man_of_bananas", "userName": "man_of_bananas", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/3a62161a-3d67-42dd-bf47-0bf217662013-profile_image-300x300.png", "playerFlagName": "Alberta", "playerFlag": "ca-alberta", "wasRandom": false, "score": 19866.17, "distance": 1799.1663750055902, "timeTaken": 268736, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Hoschi3000", "userName": "hoschi3000", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 19853.67, "distance": 1742.6815677466202, "timeTaken": 190549, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "lysosome17", "userName": "lysosome17", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png", "playerFlagName": "T\xFCrkiye", "playerFlag": "tr", "wasRandom": false, "score": 19692.33, "distance": 2065.89844387906, "timeTaken": 449220, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "mirandafreshfood", "userName": "mirandafreshfood", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png", "playerFlagName": "Croatia", "playerFlag": "hr", "wasRandom": false, "score": 19603.17, "distance": 2235.900763220113, "timeTaken": 363077, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "valgue_", "userName": "valgue_", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png", "playerFlagName": "France", "playerFlag": "fr", "wasRandom": false, "score": 19254.17, "distance": 1888.0051810322757, "timeTaken": 297049, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Rakef", "userName": "Rakef", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_oMF3hlvQOsgQeRCmH7KUxrsmLSWh7aHcrKRNT-Q=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 18731.5, "distance": 3305.0608257014446, "timeTaken": 384343, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Petery", "userName": "GeoPeter (YT)", "profilePicUrl": "pin/b8902ff7945cc5eec911fe15b6937b5b.png", "playerFlagName": "Latvia", "playerFlag": "lv", "wasRandom": false, "score": 18248.5, "distance": 2767.5345392723107, "timeTaken": 960401, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "mollegah", "userName": "mollegah", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/78e7ec62-6158-414c-8842-b19929d5475a-profile_image-300x300.png", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 17532, "distance": 6777.5411756164885, "timeTaken": 336933, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Sraucel", "userName": "sraucel", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/504c85f8-cd50-48e1-b86a-55277aa48a95-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 17287.16, "distance": 4983.325235149516, "timeTaken": 440027, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "JohnnyC", "userName": "JohnnyC", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1MD_SE_Qy031tKJe8Wmly4JgcLiqtwush9NgF0=s96-c", "playerFlagName": "Portugal", "playerFlag": "pt", "wasRandom": false, "score": 17243.83, "distance": 3131.7448548326265, "timeTaken": 259701, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Stavboy", "userName": "Stavboy", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2svJChmHqBTSNNuMAQAjeO_f1RIXbb-EALPcr2=s96-c", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 17054.83, "distance": 3585.578090957517, "timeTaken": 361077, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Donald", "userName": "Donald", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_YsXgymBK5FocyGQEMvbtUsIOnVFHf8hFnmbfB=s96-c", "playerFlagName": "North Carolina", "playerFlag": "usnc", "wasRandom": false, "score": 17048.66, "distance": 6999.58894646637, "timeTaken": 330278, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "forrozeiro602", "userName": "forrozeiro602", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png", "playerFlagName": "Greece", "playerFlag": "gr", "wasRandom": false, "score": 16354.33, "distance": 3349.2728267097236, "timeTaken": 450680, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Akseli", "userName": "Akseli", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-1f7DCXja5NCwIAmqPCNwNq_qFx2BI5WoWaosV=s96-c", "playerFlagName": "Finland", "playerFlag": "fi", "wasRandom": false, "score": 16278.5, "distance": 7068.307641608214, "timeTaken": 395182, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "brunooo_ooo", "userName": "brunooo_ooo", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/2e45c27f-5e96-4989-beef-5c3e453867e6-profile_image-300x300.png", "playerFlagName": "Portugal", "playerFlag": "pt", "wasRandom": false, "score": 15920.16, "distance": 3860.755118882282, "timeTaken": 416076, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "AstroCMB", "userName": "astrocmb", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png", "playerFlagName": "Ireland", "playerFlag": "ie", "wasRandom": false, "score": 15911.99, "distance": 4133.698355718264, "timeTaken": 428964, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "joachim472", "userName": "joachim472", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png", "playerFlagName": "Marshall Islands", "playerFlag": "mh", "wasRandom": false, "score": 15842.34, "distance": 4324.856973711455, "timeTaken": 292546, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Arthur Parssinen", "userName": "Arthur Parssinen", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu16QSG4TCEJlVSpzxdWONFL0LJ_kUfHxoGhX08X=s96-c", "playerFlagName": "Finland", "playerFlag": "fi", "wasRandom": false, "score": 15470.34, "distance": 4795.701513377983, "timeTaken": 457322, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "mofred", "userName": "mofred", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/mofred-profile_image-bf0e42f63f6b28ea-300x300.jpeg", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 15337.5, "distance": 7183.029708506526, "timeTaken": 344521, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "nwreck", "userName": "nwreck", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png", "playerFlagName": "Togo", "playerFlag": "tg", "wasRandom": false, "score": 15159.66, "distance": 5849.6936272221465, "timeTaken": 443264, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "ssooozzz", "userName": "ssooozzz", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/373f8725-1e5c-4967-9b05-d8bdc2d3e024-profile_image-300x300.png", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 14781, "distance": 4326.625333192403, "timeTaken": 506559, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Epic_Cheese_Cat", "userName": "Epic_Cheese_Cat", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-oNrLgIqktSeupbz3m8XJpVD43T4eUCMHFT-d7SQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 14722, "distance": 6950.727107508317, "timeTaken": 463126, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Deniz Kiki", "userName": "Deniz Kiki", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8fxJqNk2f9xuBIiDos4kRHwVUvLGl3quC4Ai150w=s96-c", "playerFlagName": "Bulgaria", "playerFlag": "bg", "wasRandom": false, "score": 14559.17, "distance": 7296.826715372987, "timeTaken": 415721, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Llamalas", "userName": "Llamalas", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_KS7aIf1TNJVMNyPteIhJW7ZdmhZR8ZsIDuQuI=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 14502.17, "distance": 13985.748434088891, "timeTaken": 226577, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Borislav Lukanov", "userName": "Borislav Lukanov", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu86bKb77_ruQNNx10VNMYml8KezWfSjTlngKeuYdQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 14448.5, "distance": 4984.99458812334, "timeTaken": 460651, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "jess795", "userName": "jess795", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png", "playerFlagName": "New Brunswick", "playerFlag": "ca-new-brunswick", "wasRandom": false, "score": 14085.34, "distance": 7932.891334077041, "timeTaken": 342710, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "SHIAH SHIAH", "userName": "SHIAH SHIAH", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-fWJWdDKNAErPvLRRICDdt85ekwpbWX4SsbbkE=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 13967.5, "distance": 6399.562711695083, "timeTaken": 427728, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "indigo__carmine", "userName": "indigo__carmine", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/a7939de4-b3f0-45ac-889d-2bf24827057e-profile_image-300x300.png", "playerFlagName": "Slovakia", "playerFlag": "sk", "wasRandom": false, "score": 13665.5, "distance": 6867.260135762368, "timeTaken": 414499, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Jason Lovett", "userName": "Jason Lovett", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2cCESKk8yuItJJhqxoq-X8kwR1ebZSpQtqpsGV=s96-c", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 13291, "distance": 4942.905940323304, "timeTaken": 290928, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Yuergenos", "userName": "yuergenos", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/29343774-087f-4458-9e6f-e61396e8b2ca-profile_image-300x300.png", "playerFlagName": "Yukon", "playerFlag": "ca-yukon", "wasRandom": false, "score": 13284, "distance": 16420.98212765593, "timeTaken": 254806, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "YanitedRitchie", "userName": "yanitedritchie", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/37c6e030-94d6-44d2-ac77-761423f8f8a6-profile_image-300x300.png", "playerFlagName": "Sri Lanka", "playerFlag": "lk", "wasRandom": false, "score": 13184.66, "distance": 8622.765930277454, "timeTaken": 436795, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "eskilate!", "userName": "eskilate!", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-vBrNZyNBwRfu0i9jgdMI5ZGeCo1Ko-751Yhq_2A=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 13155.5, "distance": 7358.1401704357395, "timeTaken": 418841, "streak": 2, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Kryen 112", "userName": "Kryen 112", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2gRxHgbzFh02dnoYJA_GW6UCeroVSvW0CFcWlg=s96-c", "playerFlagName": "Netherlands", "playerFlag": "nl", "wasRandom": false, "score": 12965.67, "distance": 12266.972088234883, "timeTaken": 452806, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Socrates", "userName": "Socrates", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9iTPFc6fKHi8dlGICpdPO4yXXXYw04YkOjrqTtjQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 12947.5, "distance": 6771.633292387641, "timeTaken": 247021, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Missy Meyer", "userName": "Missy Meyer", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9TEqA7WEw3UQH1nbLRcO4AqSRGl5mRisA2P1efXaY=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 12788.17, "distance": 9131.402715037224, "timeTaken": 390304, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Sandy P", "userName": "Sandy P", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8FnRQqWfdcDMmKonhYVGK5VMe_YcJk4w8rYoJj=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 12664.83, "distance": 14983.283411804405, "timeTaken": 400324, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "jim12__", "userName": "jim12__", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/7b44669d-29d9-4e09-bf3c-ca928ad94f06-profile_image-300x300.png", "playerFlagName": "Egypt", "playerFlag": "eg", "wasRandom": false, "score": 12643.5, "distance": 6451.76377732052, "timeTaken": 408200, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Mason Martinez", "userName": "Mason Martinez", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9t2jzkv6R0K9mYxHiioVKfAo1jqaBH9d1oEIIH=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 12624.33, "distance": 15128.698069280701, "timeTaken": 384538, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "MiniGolfPhenom", "userName": "MiniGolfPhenom", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2Up0eAJpbSzlxrGC4pmQkmLO72Fr0SzJpojGDU=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 12557.82, "distance": 7389.050510242712, "timeTaken": 409749, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Enrix", "userName": "Enrix", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-C4fjilqdsAeM1kiRGxPOBH3E8S7barXGt38_c=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 12456, "distance": 9226.79152090565, "timeTaken": 191778, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Wyatt Wilson", "userName": "Wyatt Wilson", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu960quHcKE9_OLQdwcgy7KDOWWBkSt7j4eKqlwd=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 12150.17, "distance": 6305.430588265376, "timeTaken": 267222, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "NexusView", "userName": "nexusview", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/450cf5f5-bea8-4d44-94b5-89ba0704a411-profile_image-300x300.png", "playerFlagName": "Denmark", "playerFlag": "dk", "wasRandom": false, "score": 12087.5, "distance": 926.8687373037426, "timeTaken": 105179, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "DelCarlo", "userName": "delcarlo", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png", "playerFlagName": "USA", "playerFlag": "us", "wasRandom": false, "score": 11952, "distance": 6587.792925375624, "timeTaken": 331933, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "benofchess", "userName": "benofchess", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png", "playerFlagName": "Canada", "playerFlag": "ca", "wasRandom": false, "score": 11909.83, "distance": 15477.654580834966, "timeTaken": 282802, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "svlxprd", "userName": "svlxprd", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/802f9dc1-1f0f-4804-b505-4f2f3954fb97-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 11892, "distance": 956.3857545387127, "timeTaken": 387323, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "K\xFCgul Stan", "userName": "K\xFCgul Stan", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-zArLjq9BPzDl47MUQAjA-nas2iLth-DtB13Cxpw=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 11790.67, "distance": 1056.1288509587964, "timeTaken": 261369, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "artification", "userName": "artification", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 11747.17, "distance": 6981.784737664651, "timeTaken": 321017, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Sayan Singha", "userName": "Sayan Singha", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3hyakAolGYgnIU6sgyAsM8ldTyanAkjqsc1-nb=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 11654, "distance": 8390.615677965698, "timeTaken": 430643, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Jonathan Post", "userName": "Jonathan Post", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0E8EMOTPn07qof2mGpQN4MwTjLcE7dnKkqsvQX=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 11570.66, "distance": 5774.350814253757, "timeTaken": 289775, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Daniil Bejan", "userName": "Daniil Bejan", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu27vJU6bCnz-NDpjnJYgDf19HYyv_JCMnxW55M=s96-c", "playerFlagName": "Moldova", "playerFlag": "md", "wasRandom": false, "score": 11443, "distance": 10435.830173138838, "timeTaken": 400836, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Non Aligned", "userName": "Non Aligned", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_3TJwFPnPW0UqdH8Yb2wbp-7_va7Gx6CynOFtmtg=s96-c", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 11141.68, "distance": 7778.480079006789, "timeTaken": 454602, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Moses1979", "userName": "Moses1979", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_27ed7jBURyGPcVoZ7CskY2vs8suGHPe0gHqrP=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 11135.68, "distance": 17260.198501410676, "timeTaken": 467013, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "wudilka", "userName": "wudilka", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 11125.33, "distance": 17654.342514849577, "timeTaken": 320677, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Ivo Abreu", "userName": "Ivo Abreu", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu81cvLZZeh4XK3_b2pr9mNvRhOgnlFj076uWh4=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 11111.34, "distance": 7727.864179193627, "timeTaken": 415846, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Hei Chan", "userName": "Hei Chan", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0y_Jmt2KPlUuQv_x_Yr1XJKY_SO9_Rm4vSetoE=s96-c", "playerFlagName": "Hong Kong", "playerFlag": "hk", "wasRandom": false, "score": 10929.5, "distance": 8134.26839222712, "timeTaken": 208270, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "wissensdigger", "userName": "wissensdigger", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 10647.51, "distance": 9322.413817383242, "timeTaken": 602877, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Dividenden Nerd", "userName": "Dividenden Nerd", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_XZSa6yx5nk_z7nYhVHoew5L23yz6Kp62xlvyH=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 10645.84, "distance": 7005.003496416226, "timeTaken": 292118, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "absorbedrex2901", "userName": "absorbedrex2901", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 10456.67, "distance": 7133.405216385553, "timeTaken": 377287, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Sebastian Schmitt", "userName": "Sebastian Schmitt", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0SZp6vYGWPQIdr7dR91paRwkpn7AI5jWpgGpYS=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 10318.5, "distance": 12991.135209951288, "timeTaken": 294125, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "primemillennial", "userName": "primemillennial", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/8d4565b4-03c3-42c3-9b7f-8f6878b70eb0-profile_image-300x300.png", "playerFlagName": "USA", "playerFlag": "us", "wasRandom": false, "score": 10241.66, "distance": 9540.044046284136, "timeTaken": 548747, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Vyacheslav", "userName": "Vyacheslav", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_OtUckiDtKWwXUrw_kHt0zJxzwWdEoT5hZDu176Q=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 9886, "distance": 14345.013348205548, "timeTaken": 435489, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "flaze", "userName": "flaze", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-t7ycysugGzo3skatu-stIlbZ0Yug5o_UxCNb8pw=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 9876.83, "distance": 14219.62674877741, "timeTaken": 444803, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "ImPotassium_", "userName": "impotassium_", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/f5de9825-f46c-4ccf-8b24-b463fcda4e55-profile_image-300x300.png", "playerFlagName": "Seychelles", "playerFlag": "sc", "wasRandom": false, "score": 9696.5, "distance": 16726.279914490904, "timeTaken": 386348, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Gladias", "userName": "Gladias", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_YCXpUg1ugU3wg1hLjsEZv_RbWQaNS5UVgD6WG=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 9603.17, "distance": 17506.623395496175, "timeTaken": 349204, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Bla\u017E Nepu\u017Elan", "userName": "Bla\u017E Nepu\u017Elan", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1ZCmZKTXgUlCIhZlWxHSYQxc2f-2ZUY5ojizyn=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 9540.83, "distance": 9862.649419518928, "timeTaken": 503861, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Isaac Tompkin", "userName": "Isaac Tompkin", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu14nH879q10rTyGe2x6jLUAckrprFBQvc62Zpc=s96-c", "playerFlagName": "Andorra", "playerFlag": "ad", "wasRandom": false, "score": 9533.67, "distance": 11347.888961902489, "timeTaken": 626813, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Lawrence Chen", "userName": "Lawrence Chen", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9BZzvUMpXA_gSHVKW-3h8oVbMrgKFHgZVl6HbVKQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 9528.16, "distance": 17904.733386207914, "timeTaken": 532620, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "No Name", "userName": "No Name", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu25V1bhS9zbqJWRFviUM5oJACiPkNppL0eZXiVH=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 9394.16, "distance": 19694.02833694183, "timeTaken": 341627, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "mixmissed123", "userName": "mixmissed123", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png", "playerFlagName": "Norway", "playerFlag": "no", "wasRandom": false, "score": 9309.99, "distance": 11028.28276100864, "timeTaken": 316382, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "IndyDeedy", "userName": "indydeedy", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png", "playerFlagName": "New Zealand", "playerFlag": "nz", "wasRandom": false, "score": 9267.33, "distance": 11368.041001079248, "timeTaken": 556415, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Archer Watson", "userName": "Archer Watson", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu840ndFbV0xOllIkEBKdlVZPqSgZjEEjdWQp6-G6w=s96-c", "playerFlagName": "Kiribati", "playerFlag": "ki", "wasRandom": false, "score": 9253, "distance": 6478.318559602943, "timeTaken": 270813, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Nico Zoeschg", "userName": "Nico Zoeschg", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3ziQn22-884WM-pR3NP4Xve3kb110vQsd_5Ffs=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 9204.5, "distance": 3549.386687089949, "timeTaken": 221972, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "William Bolding", "userName": "William Bolding", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_zfVuyr8urGtvjzuvU99pxMOmSYv0ZafkEtohZlQ=s96-c", "playerFlagName": "USA", "playerFlag": "us", "wasRandom": false, "score": 9087.5, "distance": 16686.955894296338, "timeTaken": 222153, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Jack Hughes", "userName": "Jack Hughes", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8csHubpVo2TOqpjR3bEhF5U0mj6J13CItq4AOyug=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 9002.83, "distance": 20917.563558232563, "timeTaken": 421009, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Jeroen ter Steeg", "userName": "Jeroen ter Steeg", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu86jKCrpVWGr_yhMm17RBEYdbJAh0D7FWagquCT8g=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 8937.67, "distance": 16554.894509806294, "timeTaken": 432504, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "m_room", "userName": "m_room", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_rWHJmP0lDaw70Y097qhN1aqe8dOaaZj1p0TRH=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 8915.83, "distance": 16823.901750283556, "timeTaken": 334706, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "dsapikas", "userName": "dsapikas", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/75305d54-c7cc-40d1-bb9c-91fbe85943c7-profile_image-300x300.png", "playerFlagName": "Greece", "playerFlag": "gr", "wasRandom": false, "score": 8893.33, "distance": 6524.213899354515, "timeTaken": 221549, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "GuyOnMoose", "userName": "GuyOnMoose", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1YHiOycTpAUK7h4gCQlKrT1AymSP2OugBMU6jt=s96-c", "playerFlagName": "Canada", "playerFlag": "ca", "wasRandom": false, "score": 8866.67, "distance": 11140.377323578254, "timeTaken": 349043, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Carsten Marks", "userName": "Carsten Marks", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3rzltQDmSIdXU7nyCZUkZOJXq7U2WAiq1HP060=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 8822.5, "distance": 13773.101591546843, "timeTaken": 357819, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "elinaishere", "userName": "elinaishere", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png", "playerFlagName": "Latvia", "playerFlag": "lv", "wasRandom": false, "score": 8572.51, "distance": 9829.72005517715, "timeTaken": 487698, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "kisieliux", "userName": "kisieliux", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png", "playerFlagName": "Lithuania", "playerFlag": "lt", "wasRandom": false, "score": 8340.83, "distance": 13854.895135783936, "timeTaken": 316809, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Mihail Constantin", "userName": "Mihail Constantin", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3c_6Q1CkDJza-CWmOrjF2R8hlqKLtOJSSJ20nj=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 8265, "distance": 393.88413462907624, "timeTaken": 188122, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "V\xEDt Hou\u0161ka", "userName": "V\xEDt Hou\u0161ka", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8vPkNE2rSg7AoW_pan7zCoi9wh9dxjUsDrxzyaEA=s96-c", "playerFlagName": "Czech Republic", "playerFlag": "cz", "wasRandom": false, "score": 8248.33, "distance": 11859.19647728258, "timeTaken": 407292, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "sidc28", "userName": "sidc28", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png", "playerFlagName": "India", "playerFlag": "in", "wasRandom": false, "score": 8072.17, "distance": 3403.613584949939, "timeTaken": 219645, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "KSF0 Building", "userName": "KSF0 Building", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1P4ySaa-Pslbrys7Ek0r4tOJzl2XHqvkECnsQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 8051.5, "distance": 500.18958983690607, "timeTaken": 155355, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "UnWing", "userName": "UnWing", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_faWhhii8V4j6vai-N__NfPq7O26DTnXljhHh9CQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7962.5, "distance": 17665.55951441501, "timeTaken": 510247, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Taylor Wyatt", "userName": "Taylor Wyatt", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_VN0U5QBHyEuz2pz2Qz788x7sr_JdRuJ4EyNBg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7786.67, "distance": 6463.256267585255, "timeTaken": 185985, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "xrmich", "userName": "xrmich", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png", "playerFlagName": "Spain", "playerFlag": "es", "wasRandom": false, "score": 7514.17, "distance": 19500.35294298448, "timeTaken": 334283, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Mats Niska", "userName": "Mats Niska", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-N8_4JAmafV6evAW7vC8j8vmv1Bajj9QjyuEh-sA=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7489.16, "distance": 3813.2224849561185, "timeTaken": 186411, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Guybruh", "userName": "guybruh", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png", "playerFlagName": "Portugal", "playerFlag": "pt", "wasRandom": false, "score": 7468.5, "distance": 4503.6367714093085, "timeTaken": 224729, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "samuraicapt", "userName": "samuraicapt", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/dc6f5504-96a6-4a2e-a9af-4287c1d93c44-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7444.16, "distance": 12483.721258726571, "timeTaken": 283679, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Gonzague Valli\xE8re", "userName": "Gonzague Valli\xE8re", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0adoiQJuTcXzJTjHK-6Bc9SSYvNAPVD-z40ucjYQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7417.49, "distance": 3441.5777693389828, "timeTaken": 210867, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Ugiv", "userName": "Ugiv", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_9NRZMkWcLX-0hJYStI-I4Uui_ld0wiU-41gON=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7410, "distance": 13764.01131166876, "timeTaken": 397240, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Antique Insider", "userName": "Antique Insider", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu14MrL6OJS3S6BngfSm4t6ajKh39pEL4698H_N0=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7322.83, "distance": 19130.769420796794, "timeTaken": 507460, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Bongooose", "userName": "Bongooose", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2zw-_XFx3DhDhXrAjFaKwij5A5PjWm4eSTuJ5g=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7308.34, "distance": 13705.831925409795, "timeTaken": 360741, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Trippel", "userName": "Trippel", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_fZds3xx4eR3_9UW6wMnnFsWaax7gep8nXhZC9=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7282.51, "distance": 3786.121557169742, "timeTaken": 217397, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "QuiteAButterfly", "userName": "quiteabutterfly", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7040, "distance": 16589.22958253067, "timeTaken": 345576, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Jan Raczkowski", "userName": "Jan Raczkowski", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu14BowlQVHrX439dnHwQdzC23VU6jRVXY-iYBky=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7016.67, "distance": 21489.398656377096, "timeTaken": 312226, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "bk_123456", "userName": "bk_123456", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 6918, "distance": 11822.057201024223, "timeTaken": 257337, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Carsyn E", "userName": "", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu82c_fQgJVcIkhlhUjV8WYCYO2JMVs2biXvdKnY=s96-c", "playerFlagName": "Croatia", "playerFlag": "hr", "wasRandom": false, "score": 6845.83, "distance": 22174.630362340693, "timeTaken": 626588, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Nika", "userName": "Nika", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2VRQwYdDNKi41EfzYQltA-F4cJbEAUTq5NdBV2fg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 6740.5, "distance": 4639.730880057806, "timeTaken": 139281, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "martin_terziev", "userName": "martin_terziev", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/55ef2f42-feda-4796-a489-5aef662e1ff1-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 6629.67, "distance": 1499.4189411398038, "timeTaken": 135826, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Hoper Time", "userName": "Hoper Time", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_JHeounTE5ihgcbl0mqGcEIZ52SYIKT1wHDcd9nw=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 6517.5, "distance": 15282.566238333957, "timeTaken": 181053, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Dutch Countryball", "userName": "Dutch Countryball", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0QB6AJkk9Zi-ViPNx6t5nm-944hArhy907RoBB=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 6338.5, "distance": 14365.558394826025, "timeTaken": 141076, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Vishal Patel", "userName": "Vishal Patel", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu89ySAQqZw8-pcXIaz-Tfxf9fiqjjvLq69k-JYLgg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 6263.5, "distance": 7282.747754208571, "timeTaken": 361262, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "yoshiyamamoto7", "userName": "yoshiyamamoto7", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png", "playerFlagName": "Yukon", "playerFlag": "ca-yukon", "wasRandom": false, "score": 6233.67, "distance": 12216.052918726806, "timeTaken": 383484, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "DAFFY XIII", "userName": "DAFFY XIII", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-3Tj2ke9Jaox9NCD4R-3R7ADdpZApkuUdjueQ6IQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 6209.33, "distance": 1945.8607694699394, "timeTaken": 83691, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "PeterPkp123", "userName": "peterpkp123", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/05aca998-e31e-44ee-95f2-36826aa71776-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 6185.83, "distance": 1247.3156260923672, "timeTaken": 67382, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "James \u201CJames C\u201D C", "userName": "James \u201CJames C\u201D C", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1wMCw4g_3ZictOTXN7XNoMmbgb-UlquydgHpXyWQ=s96-c", "playerFlagName": "Yorkshire", "playerFlag": "gb-yorkshire", "wasRandom": false, "score": 6090.83, "distance": 14765.942886643179, "timeTaken": 340371, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "ryclemo", "userName": "ryclemo", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/2f3d1e99-f704-405b-b181-b75ee8f95527-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5939.16, "distance": 1461.7686349084972, "timeTaken": 208937, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Ashish Asthana", "userName": "Ashish Asthana", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1glLkNHpFWTMqZmpmDHHXhmwG-Ceku_v58S4_q=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5844.17, "distance": 13795.785902630243, "timeTaken": 483133, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Diah Rizqi", "userName": "Diah Rizqi", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu87H5xS9Qcxeq05msfnXPEwRTPwJVSjqvx1qv91ag=s96-c", "playerFlagName": "Indonesia", "playerFlag": "id", "wasRandom": false, "score": 5777.51, "distance": 20750.478580335348, "timeTaken": 338913, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "bestformspielt", "userName": "bestformspielt", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-INqsQdOb1yAmxX3qnNqyZ6AX13NjlvsgXxySc=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5769.17, "distance": 5249.7218717487485, "timeTaken": 192708, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Tobik", "userName": "Tobik", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8zd3wR2uzuABhX54Yh4dBPcxq-UpK04aeviCk9Gw=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5638.33, "distance": 13654.906850838659, "timeTaken": 196314, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "LY Ching", "userName": "LY Ching", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9oO4ZUZtd4aNxhziIWAx1KvrSbopMNmKESCNaHBw=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5627, "distance": 2919.7421463951473, "timeTaken": 243314, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "hahamuffingobrr", "userName": "hahamuffingobrr", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/27b9195e-fa14-4a8b-b32e-724e6b891285-profile_image-300x300.png", "playerFlagName": "Denmark", "playerFlag": "dk", "wasRandom": false, "score": 5540, "distance": 20209.643507971312, "timeTaken": 166578, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Mikko Vitug", "userName": "Mikko Vitug", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0b7P18OVrK4G6cT4YWkFP8ohkbW22pt8QsE9wk=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5270.83, "distance": 1705.1732889903033, "timeTaken": 132615, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Toast is me", "userName": "Toast is me", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3buhhgUKDq_2w7SwfxxOcMIJ1LI-ZYsGwcN_XR=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5204.17, "distance": 4441.280269236381, "timeTaken": 186481, "streak": 1, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Ted last", "userName": "Ted last", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2XQicLgWh9wMOizL-mhJMNCpMnXp2yi4Z3CRo_=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5088.33, "distance": 14668.429443680474, "timeTaken": 421671, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "DTAS T.", "userName": "DTAS T.", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2-xbgKPpBo7qZQKcWmnAH55TyAjgz02d6MCdb3=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5045, "distance": 2094.1055105759588, "timeTaken": 131522, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "cukraus_tetukas", "userName": "cukraus_tetukas", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/8d024eba-1db8-401f-9e89-983508218228-profile_image-300x300.png", "playerFlagName": "Lithuania", "playerFlag": "lt", "wasRandom": false, "score": 4867.5, "distance": 37558.68811874192, "timeTaken": 327427, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Lord Lifre", "userName": "Lord Lifre", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_6YNnlNy8V7oX3oPnlczQt0UE4YP0V5X0ZIsSL8A=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4773.34, "distance": 2307.4651833293483, "timeTaken": 142407, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "MZV", "userName": "MZV", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9qi9zOM-jX7BkjfonZVFzesrIBNKvkj6aEl3bnSw=s96-c", "playerFlagName": "Andorra", "playerFlag": "ad", "wasRandom": false, "score": 4305, "distance": 5951.126362877071, "timeTaken": 225267, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Magdalena Szepietowska", "userName": "Magdalena Szepietowska", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0-8oVx9ac_mS_y7TnqWj2QW-gvJQqyeNpFZcOT=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4265.84, "distance": 2976.020731547742, "timeTaken": 180697, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Ollie Smith", "userName": "Ollie Smith", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0CfM9-ZGXUK3Vi7czkLJOc6vJNzX_GPdEONt55=s96-c", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 4116.67, "distance": 29186.67112172785, "timeTaken": 355297, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 4, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "piccabo21", "userName": "piccabo21", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/f4a18121-c39b-4368-ace1-944c228cdff7-profile_image-300x300.png", "playerFlagName": "Faroe Islands", "playerFlag": "fo", "wasRandom": false, "score": 3936.67, "distance": 105.40229404837356, "timeTaken": 36206, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Retisska", "userName": "retisska", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/08259190-b3f8-4a86-adfb-06851dbcead2-profile_image-300x300.png", "playerFlagName": "Denmark", "playerFlag": "dk", "wasRandom": false, "score": 3933.33, "distance": 106.81826264747811, "timeTaken": 66083, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "SoulSeeke", "userName": "SoulSeeke", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_VNHzmz2zDlUIHtEuJGCux1dKHTcrbHpVMrQE6=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3920, "distance": 2983.8433362452956, "timeTaken": 121710, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Torvald Ripel", "userName": "Torvald Ripel", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1c9CEpplUmPtJqHhxW1byuvTW6bfS4d3jqn_HT=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3761.67, "distance": 2951.493594713862, "timeTaken": 86049, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Maurits Ampe", "userName": "Maurits Ampe", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9wKc3g9KYkToHY8CYL0-s78yCI-zQnMq-gObNY=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3603.34, "distance": 3555.9498401726732, "timeTaken": 99147, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Nikola Arsi\u0107", "userName": "Nikola Arsi\u0107", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu04bZdCEL4AVeWl-indOaoVFvUUHrtuFJ_TSeN2=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3530, "distance": 3848.524546892476, "timeTaken": 154543, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "quadrumane", "userName": "quadrumane", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu12EpdmbyEAJ7VdXlqBpyX_YCsDqd1_bSm_ONAE=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3213.33, "distance": 481.38543934897774, "timeTaken": 100376, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "John Yancey", "userName": "John Yancey", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8mvOkihlHhRXrQ0Py3VlXcqeBeSxOlc4tbsb8tLQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3195.83, "distance": 8364.597261944335, "timeTaken": 164953, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "frkjdhauzdnadpoi", "userName": "frkjdhauzdnadpoi", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/c6f62383-0d3f-4149-b31b-16cb98205626-profile_image-300x300.png", "playerFlagName": "Nepal", "playerFlag": "np", "wasRandom": false, "score": 3119.17, "distance": 23194.842490222807, "timeTaken": 299918, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 5, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Rodya", "userName": "Rodya", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-Ep-mIGtw1PbLPI8aM6WsTf5jk_ZuxT4uDQ0Lp=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2807.5, "distance": 9139.920629714406, "timeTaken": 177629, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "ADHITHYAN VP", "userName": "ADHITHYAN VP", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9ZrdHiFKjYh52OpGUko_E9rH8Bmj42vaR_9HXd_Q=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2759.17, "distance": 13485.485416270129, "timeTaken": 261029, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 3, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "NoTrespassingCRO", "userName": "NoTrespassingCRO", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0wmq6WKiBFQGrPXQxYJuxj9I6eYa_PGPTLIfI1=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2587.5, "distance": 883.2071920356714, "timeTaken": 60910, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Luke Houghton", "userName": "Luke Houghton", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2GuCs30SArB6f-b4-1RKw9C714gT9DxtBot7mQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2585.83, "distance": 884.0522019140814, "timeTaken": 72431, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "undergroundbig", "userName": "undergroundbig", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/8892cc51-d547-4305-9cd0-ff5b22623d77-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2288.33, "distance": 1110.7994897143508, "timeTaken": 99531, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Joseph Evanson", "userName": "Joseph Evanson", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9A2Nl6iE9tkD0Pr-y4vQYzfpCqLrL5e6EHHwCfpg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2050.83, "distance": 1313.8790415919495, "timeTaken": 41585, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "CocoaBlueTie2", "userName": "CocoaBlueTie2", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9B6QQ-0Umz4XWBNPKlV-d0BKMosYTKSwJ__risXg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1906.67, "distance": 1448.7307588877036, "timeTaken": 29387, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "tns22", "userName": "tns22", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0hhPqdJbEzTPjCEsMv3kMPOyGYOpPg5-W2O_Js=s96-c", "playerFlagName": "Arizona", "playerFlag": "usaz", "wasRandom": false, "score": 1873.3400000000001, "distance": 6075.979868579652, "timeTaken": 121536, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Lucas \xD6stman", "userName": "Lucas \xD6stman", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9qln8IHNLICelc0nPST3YJ7rmMQXnCFc6vt7Vo=s96-c", "playerFlagName": "Finland", "playerFlag": "fi", "wasRandom": false, "score": 1845.83, "distance": 8843.675616516124, "timeTaken": 101011, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "XDgallahan YT", "userName": "XDgallahan YT", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9lD5t9yC0XjsLqPnsLJHyGpgorfkDu50FhY3516w=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1835, "distance": 1519.9045823861645, "timeTaken": 34186, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "S\xF6ren Michaels", "userName": "S\xF6ren Michaels", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu26KIATlQ6F1FTtp26F-P1akvVvzVJJpm4oHYYroA=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1827.5, "distance": 1528.0473578699498, "timeTaken": 80515, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "willewilliam123", "userName": "willewilliam123", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/350fef7d-f4fc-4587-a78b-09984ad00fe5-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1778.33, "distance": 1578.4110942117284, "timeTaken": 62992, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "andy_dreax", "userName": "andy_dreax", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/6c233b44-5fff-48ff-a319-153c77b60111-profile_image-300x300.png", "playerFlagName": "Philippines", "playerFlag": "ph", "wasRandom": false, "score": 1698.33, "distance": 1663.336111117588, "timeTaken": 83359, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Mihika Peshwa", "userName": "Mihika Peshwa", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2DvIM0LDziAxEJwjDkVxr_qaNOn-lNHFQ8xAJnFA=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1247.5, "distance": 2234.879819236272, "timeTaken": 102852, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Fireninjata bg", "userName": "Fireninjata bg", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_M5w0lDd5KRr5Gu-bAUKpkhrXebpu79SS4FB2S=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 929.17, "distance": 2782.073621762188, "timeTaken": 33501, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Dan 14", "userName": "Dan 14", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu90S5qpYII0pwH3QROa4zqp6t1M1EBEdhj4Lx9u=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 829.17, "distance": 2992.8094227508504, "timeTaken": 97324, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "OneClickStream", "userName": "oneclickstream", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 795, "distance": 14766.939681597829, "timeTaken": 130367, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Oscar Conklin", "userName": "Oscar Conklin", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_dIuBQQqSvsPOKSwxGZio3NPiY5nnRXEPFbtCp=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 746.67, "distance": 3185.984317603961, "timeTaken": 53110, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "VektorDS", "userName": "vektords", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/vektords-profile_image-2503ce96762cf366-300x300.jpeg", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 572.5, "distance": 12096.546286587101, "timeTaken": 103819, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "alexhavefluffycats", "userName": "alexhavefluffycats", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png", "playerFlagName": "Japan", "playerFlag": "jp", "wasRandom": false, "score": 444.15999999999997, "distance": 20804.01211387591, "timeTaken": 156933, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 2, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Tropic327", "userName": "tropic327", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 72.5, "distance": 7508.852146121096, "timeTaken": 130398, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "Jameson Velez", "userName": "Jameson Velez", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu13IShKIHxhEcJ5hOcG4pR8tNaVg--a5CORtEAx=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 7.5, "distance": 11776.95516169688, "timeTaken": 60026, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "BOK\u51F1", "userName": "BOK\u51F1", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9Iy3_5C4K_Tu_XJIwuRuBVJ8t0MGsgP8sq8CbV=s96-c", "playerFlagName": "Taiwan", "playerFlag": "tw", "wasRandom": false, "score": 5.83, "distance": 12164.341924449534, "timeTaken": 80724, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }, { "displayName": "KarkLive", "userName": "KarkLive", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-MvvH1z_IdFa2_J0KVWdL1TaJZHK1-QGhlmwGSDA=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 5.83, "distance": 12307.435375398407, "timeTaken": 45102, "streak": 0, "countryCode": null, "exactCountryCode": null, "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": "14nnQ0MRheHQOWG2" }];

// src/mock/fakeGameSettings.ts
var fakeGameSettings_default = { "mapID": 0, "mapName": "A Community World", "isInfinite": false, "isStreak": false, "gameType": "standard", "gameMode": "standard", "gameState": "started", "roundCount": 5, "timeLimit": 0, "forbidMoving": true, "forbidZooming": true, "forbidRotating": true, "streakType": "countrystreak" };

// src/mock/fakeMapOptions.ts
var fakeMapOptions_default = { "showStreamOverlay": false, "showFlags": false, "showBorders": true, "mapIdentifier": "GraphicGroupGoddart", "streamer": "56311e06acdaa11d50d8d141", "installedFlagPacks": "[]", "gameMode": "DEFAULT", "isUSStreak": false, "temporaryGuesses": true, "twitchChannelName": "Petery" };

// src/mock/fakeRoundInfo.ts
var fakeRoundInfo_default = { "roundNumber": 1, "isMultiGuess": false, "startTime": "2022-09-25T15:37:58.5715788+00:00" };

// src/mock/fakeRoundResults.ts
var fakeRoundResults_default = [{ "displayName": "benofchess", "userName": "benofchess", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png", "playerFlagName": "Canada", "playerFlag": "ca", "wasRandom": false, "score": 4607, "distance": 151.87407282906725, "timeTaken": 31979.5434, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "jess795", "userName": "jess795", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png", "playerFlagName": "New Brunswick", "playerFlag": "ca-new-brunswick", "wasRandom": false, "score": 4498, "distance": 195.93356426346097, "timeTaken": 64433.6315, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "blushykate", "userName": "blushykate", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/77966a2c-8871-42e4-a75c-ab4efe2238b2-profile_image-300x300.png", "playerFlagName": "Greenland", "playerFlag": "gl", "wasRandom": false, "score": 4448, "distance": 216.79025146923792, "timeTaken": 73031.7159, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Gonzague Valli\xE8re", "userName": "Gonzague Valli\xE8re", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0adoiQJuTcXzJTjHK-6Bc9SSYvNAPVD-z40ucjYQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4359, "distance": 254.40616840297506, "timeTaken": 45852.6905, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "elkku48", "userName": "elkku48", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png", "playerFlagName": "Finland", "playerFlag": "fi", "wasRandom": false, "score": 4354, "distance": 256.32890501752416, "timeTaken": 92186.07, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "jim12__", "userName": "jim12__", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/7b44669d-29d9-4e09-bf3c-ca928ad94f06-profile_image-300x300.png", "playerFlagName": "Egypt", "playerFlag": "eg", "wasRandom": false, "score": 4343, "distance": 261.00017337017255, "timeTaken": 97104.1672, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Yuergenos", "userName": "yuergenos", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/29343774-087f-4458-9e6f-e61396e8b2ca-profile_image-300x300.png", "playerFlagName": "Yukon", "playerFlag": "ca-yukon", "wasRandom": false, "score": 4217, "distance": 315.67593808467194, "timeTaken": 19486.0176, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "valgue_", "userName": "valgue_", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png", "playerFlagName": "France", "playerFlag": "fr", "wasRandom": false, "score": 4182, "distance": 331.1595322764625, "timeTaken": 59585.5115, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "DelCarlo", "userName": "delcarlo", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png", "playerFlagName": "USA", "playerFlag": "us", "wasRandom": false, "score": 4169, "distance": 336.7610954644199, "timeTaken": 31185.55, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "andy_dreax", "userName": "andy_dreax", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/6c233b44-5fff-48ff-a319-153c77b60111-profile_image-300x300.png", "playerFlagName": "Philippines", "playerFlag": "ph", "wasRandom": false, "score": 4168, "distance": 337.4507558046157, "timeTaken": 35057.8828, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Moses1979", "userName": "Moses1979", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_27ed7jBURyGPcVoZ7CskY2vs8suGHPe0gHqrP=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4157, "distance": 342.288839914959, "timeTaken": 66714.9654, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "IndyDeedy", "userName": "indydeedy", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/cdd517fe-def4-11e9-948e-784f43822e80-profile_image-300x300.png", "playerFlagName": "New Zealand", "playerFlag": "nz", "wasRandom": false, "score": 4148, "distance": 346.3224012790768, "timeTaken": 51405.218, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Icy3P", "userName": "Icy3P", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8sQJOlphZ4t6hazt4eYvdQ4GkJ4MVKe6cYjFZF_Q=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4141, "distance": 349.5206699085141, "timeTaken": 97635.2813, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Stavboy", "userName": "Stavboy", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2svJChmHqBTSNNuMAQAjeO_f1RIXbb-EALPcr2=s96-c", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 4141, "distance": 349.57361306865937, "timeTaken": 50852.0076, "streak": 2, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Lawrence Chen", "userName": "Lawrence Chen", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9BZzvUMpXA_gSHVKW-3h8oVbMrgKFHgZVl6HbVKQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4140, "distance": 349.7908505460036, "timeTaken": 76217.9986, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "man_of_bananas", "userName": "man_of_bananas", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/3a62161a-3d67-42dd-bf47-0bf217662013-profile_image-300x300.png", "playerFlagName": "Alberta", "playerFlag": "ca-alberta", "wasRandom": false, "score": 4114, "distance": 361.70271196844175, "timeTaken": 77484.6158, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "indigo__carmine", "userName": "indigo__carmine", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/a7939de4-b3f0-45ac-889d-2bf24827057e-profile_image-300x300.png", "playerFlagName": "Slovakia", "playerFlag": "sk", "wasRandom": false, "score": 4096, "distance": 369.5928234114521, "timeTaken": 76558.1636, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "CocoaBlueTie2", "userName": "CocoaBlueTie2", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9B6QQ-0Umz4XWBNPKlV-d0BKMosYTKSwJ__risXg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4054, "distance": 388.8434199528384, "timeTaken": 50310.9706, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Carsten Marks", "userName": "Carsten Marks", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3rzltQDmSIdXU7nyCZUkZOJXq7U2WAiq1HP060=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4047, "distance": 392.1636341273372, "timeTaken": 24596.0816, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "mein Humor", "userName": "mein Humor", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-nyrvLXq_ZhDXVwTVfq1AaBVyyLIPIU5wFcJMkkw=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4015, "distance": 406.5598028028569, "timeTaken": 91191.2099, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Luke Houghton", "userName": "Luke Houghton", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2GuCs30SArB6f-b4-1RKw9C714gT9DxtBot7mQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 4014, "distance": 407.1780410693822, "timeTaken": 62775.865, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "ssooozzz", "userName": "ssooozzz", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/373f8725-1e5c-4967-9b05-d8bdc2d3e024-profile_image-300x300.png", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 3985, "distance": 420.40914661226884, "timeTaken": 51650.8191, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "JohnnyC", "userName": "JohnnyC", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1MD_SE_Qy031tKJe8Wmly4JgcLiqtwush9NgF0=s96-c", "playerFlagName": "Portugal", "playerFlag": "pt", "wasRandom": false, "score": 3978, "distance": 423.6644648928751, "timeTaken": 48972.7218, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Carsyn E", "userName": "", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu82c_fQgJVcIkhlhUjV8WYCYO2JMVs2biXvdKnY=s96-c", "playerFlagName": "France", "playerFlag": "fr", "wasRandom": false, "score": 3977, "distance": 424.2552972149714, "timeTaken": 113485.3308, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Jack Hughes", "userName": "Jack Hughes", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8csHubpVo2TOqpjR3bEhF5U0mj6J13CItq4AOyug=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3959, "distance": 432.56381906190717, "timeTaken": 56627.14, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "wissensdigger", "userName": "wissensdigger", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3956, "distance": 434.10795078149226, "timeTaken": 113482.8852, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "ryclemo", "userName": "ryclemo", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/2f3d1e99-f704-405b-b181-b75ee8f95527-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3918, "distance": 452.093694318192, "timeTaken": 81856.1747, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Coleo21", "userName": "Coleo21", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8RggNZU-FxpBAp5cOvnDxI52lHaVvpy3oNoRWhbg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3900, "distance": 460.66500026290083, "timeTaken": 42400.7319, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "mofred", "userName": "mofred", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/mofred-profile_image-bf0e42f63f6b28ea-300x300.jpeg", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 3893, "distance": 463.9456620202149, "timeTaken": 71705.6081, "streak": 2, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Socrates", "userName": "Socrates", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9iTPFc6fKHi8dlGICpdPO4yXXXYw04YkOjrqTtjQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3870, "distance": 474.95804011324225, "timeTaken": 28516.7479, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "KaTzY BigBen", "userName": "KaTzY BigBen", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9Y76Nwz4cv2OrZekM2QLpD0bhkAMPBuvhAkD6kxQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3790, "distance": 513.7548285053656, "timeTaken": 98116.0246, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Enrix", "userName": "Enrix", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-C4fjilqdsAeM1kiRGxPOBH3E8S7barXGt38_c=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3753, "distance": 531.7289789517233, "timeTaken": 24050.642, "streak": 2, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "flaze", "userName": "flaze", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-t7ycysugGzo3skatu-stIlbZ0Yug5o_UxCNb8pw=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 3732, "distance": 542.0604921299143, "timeTaken": 90741.0517, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "artification", "userName": "artification", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3729, "distance": 543.8192390795806, "timeTaken": 59511.1973, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "SHIAH SHIAH", "userName": "SHIAH SHIAH", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-fWJWdDKNAErPvLRRICDdt85ekwpbWX4SsbbkE=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 3707, "distance": 554.688419052664, "timeTaken": 91804.9385, "streak": 1, "countryCode": "FR", "exactCountryCode": "FR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Christian H", "userName": "Christian H", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_8IfZGmXBE3T3mSKjnaUYFr4BgiYrS1XumJKkQLw=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 3161.67, "distance": 511.5501451737581, "timeTaken": 40703.6326, "streak": 0, "countryCode": "ES", "exactCountryCode": "ES", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Dividenden Nerd", "userName": "Dividenden Nerd", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_XZSa6yx5nk_z7nYhVHoew5L23yz6Kp62xlvyH=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 3160, "distance": 512.6480807238927, "timeTaken": 43422.0827, "streak": 0, "countryCode": "ES", "exactCountryCode": "ES", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "lysosome17", "userName": "lysosome17", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png", "playerFlagName": "T\xFCrkiye", "playerFlag": "tr", "wasRandom": false, "score": 3080.83, "distance": 559.5328475621039, "timeTaken": 88519.9608, "streak": 0, "countryCode": "BE", "exactCountryCode": "BE", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "MZV", "userName": "MZV", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9qi9zOM-jX7BkjfonZVFzesrIBNKvkj6aEl3bnSw=s96-c", "playerFlagName": "Andorra", "playerFlag": "ad", "wasRandom": false, "score": 3015, "distance": 599.4408429517707, "timeTaken": 68956.9185, "streak": 0, "countryCode": "LU", "exactCountryCode": "LU", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "ADHITHYAN VP", "userName": "ADHITHYAN VP", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9ZrdHiFKjYh52OpGUko_E9rH8Bmj42vaR_9HXd_Q=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2987.5, "distance": 616.5512935098781, "timeTaken": 42921.5929, "streak": 0, "countryCode": "BE", "exactCountryCode": "BE", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "undergroundbig", "userName": "undergroundbig", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/8892cc51-d547-4305-9cd0-ff5b22623d77-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2961.67, "distance": 632.6145675273094, "timeTaken": 77482.4765, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Kryen 112", "userName": "Kryen 112", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2gRxHgbzFh02dnoYJA_GW6UCeroVSvW0CFcWlg=s96-c", "playerFlagName": "Netherlands", "playerFlag": "nl", "wasRandom": false, "score": 2942.5, "distance": 644.7638176150175, "timeTaken": 101332.4095, "streak": 0, "countryCode": "BE", "exactCountryCode": "BE", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Non Aligned", "userName": "Non Aligned", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_3TJwFPnPW0UqdH8Yb2wbp-7_va7Gx6CynOFtmtg=s96-c", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 2940.83, "distance": 645.8375681108497, "timeTaken": 54500.5944, "streak": 0, "countryCode": "BE", "exactCountryCode": "BE", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Joseph Evanson", "userName": "Joseph Evanson", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9A2Nl6iE9tkD0Pr-y4vQYzfpCqLrL5e6EHHwCfpg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2898.33, "distance": 672.7933940785518, "timeTaken": 58722.9544, "streak": 0, "countryCode": "CH", "exactCountryCode": "CH", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "xrmich", "userName": "xrmich", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png", "playerFlagName": "Spain", "playerFlag": "es", "wasRandom": false, "score": 2834.17, "distance": 714.5677967608844, "timeTaken": 62051.2174, "streak": 0, "countryCode": "ES", "exactCountryCode": "ES", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Mihika Peshwa", "userName": "Mihika Peshwa", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2DvIM0LDziAxEJwjDkVxr_qaNOn-lNHFQ8xAJnFA=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2830, "distance": 717.1161445399489, "timeTaken": 78883.4107, "streak": 0, "countryCode": "ES", "exactCountryCode": "ES", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "KSF0 Building", "userName": "KSF0 Building", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1P4ySaa-Pslbrys7Ek0r4tOJzl2XHqvkECnsQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2813.33, "distance": 728.0880265296267, "timeTaken": 87887.7959, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "forrozeiro602", "userName": "forrozeiro602", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png", "playerFlagName": "Greece", "playerFlag": "gr", "wasRandom": false, "score": 2752.5, "distance": 768.7214606389589, "timeTaken": 88600.3747, "streak": 0, "countryCode": "ES", "exactCountryCode": "ES", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Gergely Kerenyi", "userName": "Gergely Kerenyi", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-_siSeWILNfsDIudlkRrXYk2tsLiePOQpUMXfQ6A=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2750.83, "distance": 769.8885895208839, "timeTaken": 31371.4402, "streak": 0, "countryCode": "ES", "exactCountryCode": "ES", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "piccabo21", "userName": "piccabo21", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/f4a18121-c39b-4368-ace1-944c228cdff7-profile_image-300x300.png", "playerFlagName": "Faroe Islands", "playerFlag": "fo", "wasRandom": false, "score": 2679.17, "distance": 818.8134510344037, "timeTaken": 44701.0139, "streak": 0, "countryCode": "ES", "exactCountryCode": "ES", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Jeroen ter Steeg", "userName": "Jeroen ter Steeg", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu86jKCrpVWGr_yhMm17RBEYdbJAh0D7FWagquCT8g=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2595.83, "distance": 876.8221998498724, "timeTaken": 60609.2548, "streak": 0, "countryCode": "PT", "exactCountryCode": "PT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "mixmissed123", "userName": "mixmissed123", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png", "playerFlagName": "Norway", "playerFlag": "no", "wasRandom": false, "score": 2593.33, "distance": 879.1277918251312, "timeTaken": 18727.3772, "streak": 0, "countryCode": "PT", "exactCountryCode": "PT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "m_room", "userName": "m_room", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_rWHJmP0lDaw70Y097qhN1aqe8dOaaZj1p0TRH=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2539.17, "distance": 917.8877350422047, "timeTaken": 92350.0054, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "James \u201CJames C\u201D C", "userName": "James \u201CJames C\u201D C", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1wMCw4g_3ZictOTXN7XNoMmbgb-UlquydgHpXyWQ=s96-c", "playerFlagName": "Yorkshire", "playerFlag": "gb-yorkshire", "wasRandom": false, "score": 2506.67, "distance": 941.9063898811683, "timeTaken": 77650.3015, "streak": 0, "countryCode": "PT", "exactCountryCode": "PT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Daniil Bejan", "userName": "Daniil Bejan", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu27vJU6bCnz-NDpjnJYgDf19HYyv_JCMnxW55M=s96-c", "playerFlagName": "Moldova", "playerFlag": "md", "wasRandom": false, "score": 2465, "distance": 972.6915501133707, "timeTaken": 75263.0054, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Vyacheslav", "userName": "Vyacheslav", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_OtUckiDtKWwXUrw_kHt0zJxzwWdEoT5hZDu176Q=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2417.5, "distance": 1008.8830831571378, "timeTaken": 75082.2336, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "QuiteAButterfly", "userName": "quiteabutterfly", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2416.67, "distance": 1009.6438168156542, "timeTaken": 85207.8258, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Trippel", "userName": "Trippel", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_fZds3xx4eR3_9UW6wMnnFsWaax7gep8nXhZC9=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2401.67, "distance": 1021.0197957486326, "timeTaken": 63555.4621, "streak": 0, "countryCode": "SM", "exactCountryCode": "SM", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "bestformspielt", "userName": "bestformspielt", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-INqsQdOb1yAmxX3qnNqyZ6AX13NjlvsgXxySc=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2396.67, "distance": 1024.9185589332044, "timeTaken": 69232.2796, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Jason Lovett", "userName": "Jason Lovett", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2cCESKk8yuItJJhqxoq-X8kwR1ebZSpQtqpsGV=s96-c", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 2366.67, "distance": 1048.575753597338, "timeTaken": 28457.0391, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "MiniGolfPhenom", "userName": "MiniGolfPhenom", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2Up0eAJpbSzlxrGC4pmQkmLO72Fr0SzJpojGDU=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2365.83, "distance": 1048.8353199915805, "timeTaken": 49801.3512, "streak": 0, "countryCode": "ES", "exactCountryCode": "ES", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Bla\u017E Nepu\u017Elan", "userName": "Bla\u017E Nepu\u017Elan", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1ZCmZKTXgUlCIhZlWxHSYQxc2f-2ZUY5ojizyn=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2332.5, "distance": 1075.2723550865164, "timeTaken": 81866.3388, "streak": 0, "countryCode": "SI", "exactCountryCode": "SI", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Sebastian Persson", "userName": "Sebastian Persson", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8BzWj4awgIuOHtzi5l1eozbyXt41x7C_-EYBtGvg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2313.33, "distance": 1090.4031990854394, "timeTaken": 57992.1945, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Mikko Vitug", "userName": "Mikko Vitug", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0b7P18OVrK4G6cT4YWkFP8ohkbW22pt8QsE9wk=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2297.5, "distance": 1103.6425372342612, "timeTaken": 75174.9128, "streak": 0, "countryCode": "CZ", "exactCountryCode": "CZ", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Eric Eggert", "userName": "Eric Eggert", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8Q7V6soLK5NYLNkQPscHheH1SeKKldW-E9kPhNUA=s96-c", "playerFlagName": "Europe", "playerFlag": "eu", "wasRandom": false, "score": 2295, "distance": 1105.5817212479383, "timeTaken": 77486.785, "streak": 0, "countryCode": "PT", "exactCountryCode": "PT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "wudilka", "userName": "wudilka", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2281.67, "distance": 1116.447526302153, "timeTaken": 46542.8171, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "NoTrespassingCRO", "userName": "NoTrespassingCRO", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0wmq6WKiBFQGrPXQxYJuxj9I6eYa_PGPTLIfI1=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2280, "distance": 1117.6667844714202, "timeTaken": 55070.2873, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "sidc28", "userName": "sidc28", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png", "playerFlagName": "India", "playerFlag": "in", "wasRandom": false, "score": 2277.5, "distance": 1119.298652125734, "timeTaken": 90744.8981, "streak": 0, "countryCode": "PT", "exactCountryCode": "PT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Ollie Smith", "userName": "Ollie Smith", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0CfM9-ZGXUK3Vi7czkLJOc6vJNzX_GPdEONt55=s96-c", "playerFlagName": "United Kingdom", "playerFlag": "gb", "wasRandom": false, "score": 2270, "distance": 1125.6394136742047, "timeTaken": 34701.937, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "pigeon0427", "userName": "pigeon0427", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2261.67, "distance": 1132.6823875870714, "timeTaken": 69800.9414, "streak": 0, "countryCode": "HR", "exactCountryCode": "HR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "No Name", "userName": "No Name", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu25V1bhS9zbqJWRFviUM5oJACiPkNppL0eZXiVH=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2232.5, "distance": 1156.8516512104907, "timeTaken": 63508.773, "streak": 0, "countryCode": "CZ", "exactCountryCode": "CZ", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Sandy P", "userName": "Sandy P", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8FnRQqWfdcDMmKonhYVGK5VMe_YcJk4w8rYoJj=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2224.17, "distance": 1163.5235483631643, "timeTaken": 65824.4279, "streak": 0, "countryCode": "CZ", "exactCountryCode": "CZ", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Guybruh", "userName": "guybruh", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ebb84563-db81-4b9c-8940-64ed33ccfc7b-profile_image-300x300.png", "playerFlagName": "Portugal", "playerFlag": "pt", "wasRandom": false, "score": 2212.5, "distance": 1173.5157377146777, "timeTaken": 73825.5697, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "DTAS T.", "userName": "DTAS T.", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2-xbgKPpBo7qZQKcWmnAH55TyAjgz02d6MCdb3=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2211.67, "distance": 1174.0163764007755, "timeTaken": 82118.6889, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Deniz Kiki", "userName": "Deniz Kiki", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8fxJqNk2f9xuBIiDos4kRHwVUvLGl3quC4Ai150w=s96-c", "playerFlagName": "Bulgaria", "playerFlag": "bg", "wasRandom": false, "score": 2185, "distance": 1196.659316482909, "timeTaken": 88309.4509, "streak": 0, "countryCode": "HR", "exactCountryCode": "HR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Epic_Cheese_Cat", "userName": "Epic_Cheese_Cat", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-oNrLgIqktSeupbz3m8XJpVD43T4eUCMHFT-d7SQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2132.5, "distance": 1241.371232750891, "timeTaken": 50771.7941, "streak": 0, "countryCode": "HR", "exactCountryCode": "HR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Akseli", "userName": "Akseli", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-1f7DCXja5NCwIAmqPCNwNq_qFx2BI5WoWaosV=s96-c", "playerFlagName": "Finland", "playerFlag": "fi", "wasRandom": false, "score": 2129.17, "distance": 1244.3621455245793, "timeTaken": 50817.2207, "streak": 0, "countryCode": "HR", "exactCountryCode": "HR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "svlxprd", "userName": "svlxprd", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/802f9dc1-1f0f-4804-b505-4f2f3954fb97-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2128.33, "distance": 1245.1026100950746, "timeTaken": 113479.9902, "streak": 0, "countryCode": "HR", "exactCountryCode": "HR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "kisieliux", "userName": "kisieliux", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png", "playerFlagName": "Lithuania", "playerFlag": "lt", "wasRandom": false, "score": 2127.5, "distance": 1245.5396956975574, "timeTaken": 52884.543, "streak": 0, "countryCode": "HR", "exactCountryCode": "HR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Isaac Tompkin", "userName": "Isaac Tompkin", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu14nH879q10rTyGe2x6jLUAckrprFBQvc62Zpc=s96-c", "playerFlagName": "Andorra", "playerFlag": "ad", "wasRandom": false, "score": 2121.67, "distance": 1251.2457883352856, "timeTaken": 113487.6095, "streak": 0, "countryCode": "CZ", "exactCountryCode": "CZ", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Wyatt Wilson", "userName": "Wyatt Wilson", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu960quHcKE9_OLQdwcgy7KDOWWBkSt7j4eKqlwd=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2104.17, "distance": 1266.524821950604, "timeTaken": 36653.3422, "streak": 0, "countryCode": "AT", "exactCountryCode": "AT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Ashish Asthana", "userName": "Ashish Asthana", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1glLkNHpFWTMqZmpmDHHXhmwG-Ceku_v58S4_q=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2096.67, "distance": 1272.6753087911138, "timeTaken": 34300.1158, "streak": 0, "countryCode": "CZ", "exactCountryCode": "CZ", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Hoschi3000", "userName": "hoschi3000", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 2075.83, "distance": 1291.5236983271498, "timeTaken": 44137.2584, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Donald", "userName": "Donald", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_YsXgymBK5FocyGQEMvbtUsIOnVFHf8hFnmbfB=s96-c", "playerFlagName": "North Carolina", "playerFlag": "usnc", "wasRandom": false, "score": 2073.33, "distance": 1294.0176787113803, "timeTaken": 66717.4048, "streak": 0, "countryCode": "CZ", "exactCountryCode": "CZ", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Sayan Singha", "userName": "Sayan Singha", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3hyakAolGYgnIU6sgyAsM8ldTyanAkjqsc1-nb=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2061.67, "distance": 1304.005945892722, "timeTaken": 100791.8256, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Gladias", "userName": "Gladias", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_YCXpUg1ugU3wg1hLjsEZv_RbWQaNS5UVgD6WG=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2050, "distance": 1314.4376057109184, "timeTaken": 50502.7607, "streak": 0, "countryCode": "CZ", "exactCountryCode": "CZ", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Bongooose", "userName": "Bongooose", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2zw-_XFx3DhDhXrAjFaKwij5A5PjWm4eSTuJ5g=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 2022.5, "distance": 1339.7666790839057, "timeTaken": 45513.339, "streak": 0, "countryCode": "HR", "exactCountryCode": "HR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Micro", "userName": "Micro", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-rg73HeAuIZtrNNREmc99-Hn7rd9KkJTDBJPo=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1987.5, "distance": 1372.412515753211, "timeTaken": 37921.831, "streak": 0, "countryCode": "DK", "exactCountryCode": "DK", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Antique Insider", "userName": "Antique Insider", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu14MrL6OJS3S6BngfSm4t6ajKh39pEL4698H_N0=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1900, "distance": 1455.4719742104692, "timeTaken": 61535.175, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Masimaz", "userName": "Masimaz", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-wB_n0YmKStJ2sDIQ9q9FtCIjiIfkT3IkblBwOeA=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1878.33, "distance": 1476.6696922373105, "timeTaken": 88815.7536, "streak": 0, "countryCode": "SK", "exactCountryCode": "SK", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "samuraicapt", "userName": "samuraicapt", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/dc6f5504-96a6-4a2e-a9af-4287c1d93c44-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1876.67, "distance": 1478.67061731671, "timeTaken": 28469.2999, "streak": 0, "countryCode": "BA", "exactCountryCode": "BA", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "mollegah", "userName": "mollegah", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/78e7ec62-6158-414c-8842-b19929d5475a-profile_image-300x300.png", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 1805.83, "distance": 1549.4263312557432, "timeTaken": 84051.0608, "streak": 0, "countryCode": "RS", "exactCountryCode": "RS", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Jan Raczkowski", "userName": "Jan Raczkowski", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu14BowlQVHrX439dnHwQdzC23VU6jRVXY-iYBky=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1785, "distance": 1571.6824152321115, "timeTaken": 80221.0661, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "nwreck", "userName": "nwreck", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png", "playerFlagName": "Togo", "playerFlag": "tg", "wasRandom": false, "score": 1782.5, "distance": 1573.5028047679043, "timeTaken": 51803.0115, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Missy Meyer", "userName": "Missy Meyer", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9TEqA7WEw3UQH1nbLRcO4AqSRGl5mRisA2P1efXaY=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1780, "distance": 1576.245432661949, "timeTaken": 64281.5765, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "jegelan", "userName": "jegelan", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png", "playerFlagName": "Norway", "playerFlag": "no", "wasRandom": false, "score": 1775, "distance": 1581.37626077429, "timeTaken": 70803.1829, "streak": 0, "countryCode": "IT", "exactCountryCode": "IT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "eskilate!", "userName": "eskilate!", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-vBrNZyNBwRfu0i9jgdMI5ZGeCo1Ko-751Yhq_2A=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1707.5, "distance": 1653.7663762437319, "timeTaken": 75368.1738, "streak": 0, "countryCode": "RO", "exactCountryCode": "RO", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Bunny Elixir", "userName": "Bunny Elixir", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-y8Png4rBKHS8MheC4uhcb8d-wSFP7I1fuALCK=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1696.67, "distance": 1665.7194644022652, "timeTaken": 44758.4673, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Andy A", "userName": "Andy A", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3Ic2kLPHcfyIlCc2Ni_A1Y2kY8nLWHFBJQeUbo=s96-c", "playerFlagName": "USA", "playerFlag": "us", "wasRandom": false, "score": 1694.17, "distance": 1668.194698032474, "timeTaken": 31865.711, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "GuyOnMoose", "userName": "GuyOnMoose", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu1YHiOycTpAUK7h4gCQlKrT1AymSP2OugBMU6jt=s96-c", "playerFlagName": "Canada", "playerFlag": "ca", "wasRandom": false, "score": 1691.67, "distance": 1670.48843744289, "timeTaken": 28733.7516, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Mats Niska", "userName": "Mats Niska", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-N8_4JAmafV6evAW7vC8j8vmv1Bajj9QjyuEh-sA=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1691.67, "distance": 1670.6857640074033, "timeTaken": 46204.0405, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "primemillennial", "userName": "primemillennial", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/8d4565b4-03c3-42c3-9b7f-8f6878b70eb0-profile_image-300x300.png", "playerFlagName": "USA", "playerFlag": "us", "wasRandom": false, "score": 1689.17, "distance": 1673.3458895872236, "timeTaken": 59812.8232, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "elinaishere", "userName": "elinaishere", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png", "playerFlagName": "Latvia", "playerFlag": "lv", "wasRandom": false, "score": 1689.17, "distance": 1673.5748724563723, "timeTaken": 69603.1746, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Sebastian Schmitt", "userName": "Sebastian Schmitt", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0SZp6vYGWPQIdr7dR91paRwkpn7AI5jWpgGpYS=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 1689.17, "distance": 1673.8213165846403, "timeTaken": 87032.2726, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "YanitedRitchie", "userName": "yanitedritchie", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/37c6e030-94d6-44d2-ac77-761423f8f8a6-profile_image-300x300.png", "playerFlagName": "Sri Lanka", "playerFlag": "lk", "wasRandom": false, "score": 1688.33, "distance": 1674.3111447067063, "timeTaken": 91217.8709, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Ivo Abreu", "userName": "Ivo Abreu", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu81cvLZZeh4XK3_b2pr9mNvRhOgnlFj076uWh4=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1687.5, "distance": 1675.0373359609766, "timeTaken": 81072.6852, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "FIRE_KG", "userName": "fire_kg", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/f2b64e95-1851-4099-ab86-7a12b65dc7b5-profile_image-300x300.png", "playerFlagName": "Romania", "playerFlag": "ro", "wasRandom": false, "score": 1687.5, "distance": 1675.0999491757882, "timeTaken": 58315.2314, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Mihail Constantin", "userName": "Mihail Constantin", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3c_6Q1CkDJza-CWmOrjF2R8hlqKLtOJSSJ20nj=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1686.67, "distance": 1675.989546851637, "timeTaken": 74236.7726, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Rakef", "userName": "Rakef", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_oMF3hlvQOsgQeRCmH7KUxrsmLSWh7aHcrKRNT-Q=s96-c", "playerFlagName": "Germany", "playerFlag": "de", "wasRandom": false, "score": 1686.67, "distance": 1676.1240380992638, "timeTaken": 81074.9259, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Diah Rizqi", "userName": "Diah Rizqi", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu87H5xS9Qcxeq05msfnXPEwRTPwJVSjqvx1qv91ag=s96-c", "playerFlagName": "Indonesia", "playerFlag": "id", "wasRandom": false, "score": 1686.67, "distance": 1676.4052319119578, "timeTaken": 46087.9309, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Nico Zoeschg", "userName": "Nico Zoeschg", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu3ziQn22-884WM-pR3NP4Xve3kb110vQsd_5Ffs=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1686.67, "distance": 1676.629677447315, "timeTaken": 43367.4678, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "K\xFCgul Stan", "userName": "K\xFCgul Stan", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu-zArLjq9BPzDl47MUQAjA-nas2iLth-DtB13Cxpw=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1686.67, "distance": 1676.6989033148777, "timeTaken": 56575.0606, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Sraucel", "userName": "sraucel", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/504c85f8-cd50-48e1-b86a-55277aa48a95-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1686.67, "distance": 1676.7301510990922, "timeTaken": 72555.7652, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Mason Martinez", "userName": "Mason Martinez", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9t2jzkv6R0K9mYxHiioVKfAo1jqaBH9d1oEIIH=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1686.67, "distance": 1676.7342057944047, "timeTaken": 52851.7169, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Arthur Parssinen", "userName": "Arthur Parssinen", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu16QSG4TCEJlVSpzxdWONFL0LJ_kUfHxoGhX08X=s96-c", "playerFlagName": "Finland", "playerFlag": "fi", "wasRandom": false, "score": 1683.33, "distance": 1680.1393588323203, "timeTaken": 81362.6422, "streak": 0, "countryCode": "MT", "exactCountryCode": "MT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Lord Lifre", "userName": "Lord Lifre", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_6YNnlNy8V7oX3oPnlczQt0UE4YP0V5X0ZIsSL8A=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1677.5, "distance": 1686.5252147597032, "timeTaken": 72385.2697, "streak": 0, "countryCode": "AL", "exactCountryCode": "AL", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "PeterPkp123", "userName": "peterpkp123", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/05aca998-e31e-44ee-95f2-36826aa71776-profile_image-300x300.png", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1676.67, "distance": 1687.0037692617107, "timeTaken": 18521.6732, "streak": 0, "countryCode": "AL", "exactCountryCode": "AL", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Jonathan Post", "userName": "Jonathan Post", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu0E8EMOTPn07qof2mGpQN4MwTjLcE7dnKkqsvQX=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1415, "distance": 2002.081619641605, "timeTaken": 71291.8919, "streak": 0, "countryCode": "GR", "exactCountryCode": "GR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "cukraus_tetukas", "userName": "cukraus_tetukas", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/8d024eba-1db8-401f-9e89-983508218228-profile_image-300x300.png", "playerFlagName": "Lithuania", "playerFlag": "lt", "wasRandom": false, "score": 1405.83, "distance": 2013.4917299484193, "timeTaken": 29387.548, "streak": 0, "countryCode": "LT", "exactCountryCode": "LT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "V\xEDt Hou\u0161ka", "userName": "V\xEDt Hou\u0161ka", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8vPkNE2rSg7AoW_pan7zCoi9wh9dxjUsDrxzyaEA=s96-c", "playerFlagName": "Czech Republic", "playerFlag": "cz", "wasRandom": false, "score": 1376.67, "distance": 2052.2103548847463, "timeTaken": 82201.9734, "streak": 0, "countryCode": "RO", "exactCountryCode": "RO", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "LY Ching", "userName": "LY Ching", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu9oO4ZUZtd4aNxhziIWAx1KvrSbopMNmKESCNaHBw=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1358.33, "distance": 2077.5368434924567, "timeTaken": 113477.8753, "streak": 0, "countryCode": "PT", "exactCountryCode": "PT", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Petery", "userName": "GeoPeter (YT)", "profilePicUrl": "pin/b8902ff7945cc5eec911fe15b6937b5b.png", "playerFlagName": "Latvia", "playerFlag": "lv", "wasRandom": false, "score": 1330, "distance": 2116.1089706928215, "timeTaken": 175707.9507, "streak": 0, "countryCode": "GR", "exactCountryCode": "GR", "guessCount": 1, "isStreamerResult": true, "guessedBefore": false, "gameId": null }, { "displayName": "yoshiyamamoto7", "userName": "yoshiyamamoto7", "profilePicUrl": "https://static-cdn.jtvnw.net/user-default-pictures-uv/41780b5a-def8-11e9-94d9-784f43822e80-profile_image-300x300.png", "playerFlagName": "Yukon", "playerFlag": "ca-yukon", "wasRandom": false, "score": 1268.33, "distance": 2204.7467397116507, "timeTaken": 87077.2366, "streak": 0, "countryCode": "TR", "exactCountryCode": "TR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Ugiv", "userName": "Ugiv", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_9NRZMkWcLX-0hJYStI-I4Uui_ld0wiU-41gON=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1226.67, "distance": 2266.719699211209, "timeTaken": 49366.1187, "streak": 0, "countryCode": "UA", "exactCountryCode": "UA", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "UnWing", "userName": "UnWing", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_faWhhii8V4j6vai-N__NfPq7O26DTnXljhHh9CQ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1133.33, "distance": 2412.9945395512364, "timeTaken": 68750.7413, "streak": 0, "countryCode": "TR", "exactCountryCode": "TR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Dan 14", "userName": "Dan 14", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu90S5qpYII0pwH3QROa4zqp6t1M1EBEdhj4Lx9u=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 1005.83, "distance": 2634.0420749251916, "timeTaken": 80777.0367, "streak": 0, "countryCode": "TR", "exactCountryCode": "TR", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Nika", "userName": "Nika", "profilePicUrl": "https://lh3.googleusercontent.com/a/ALm5wu2VRQwYdDNKi41EfzYQltA-F4cJbEAUTq5NdBV2fg=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 803.33, "distance": 3051.0854238670554, "timeTaken": 63276.5689, "streak": 0, "countryCode": "CY", "exactCountryCode": "CY", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "ImPotassium_", "userName": "impotassium_", "profilePicUrl": "https://static-cdn.jtvnw.net/jtv_user_pictures/f5de9825-f46c-4ccf-8b24-b463fcda4e55-profile_image-300x300.png", "playerFlagName": "Seychelles", "playerFlag": "sc", "wasRandom": false, "score": 672.5, "distance": 3379.931085441902, "timeTaken": 64749.4836, "streak": 0, "countryCode": "IL", "exactCountryCode": "IL", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "Bas Garretsen", "userName": "Bas Garretsen", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu8kh0k9LQpdn5BpZCBYfqR0BfNK6FFH3hF-UthJ=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 134.17, "distance": 6365.871075966808, "timeTaken": 8461.1084, "streak": 0, "countryCode": "CN", "exactCountryCode": "CN", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }, { "displayName": "SoulSeeke", "userName": "SoulSeeke", "profilePicUrl": "https://lh3.googleusercontent.com/a-/ACNPEu_VNHzmz2zDlUIHtEuJGCux1dKHTcrbHpVMrQE6=s96-c", "playerFlagName": "", "playerFlag": null, "wasRandom": false, "score": 19.17, "distance": 9970.781650935189, "timeTaken": 46374.4216, "streak": 0, "countryCode": "JP", "exactCountryCode": "JP", "guessCount": 1, "isStreamerResult": false, "guessedBefore": false, "gameId": null }];

// src/mock/MockConnectionBuilder.ts
var MockConnectionBuilder = class {
  constructor() {
    console.log("using MockConnectionBuilder");
  }
  registeredHandlers = {};
  connection = {
    state: "Connected",
    start: vi.fn(),
    stop: vi.fn(() => {
      this.connection.onclose(new Error("mock error"));
      console.log("connection closed");
    }),
    on: vi.fn((method, func) => {
      this.registeredHandlers[method] = func;
    }),
    onclose: (e) => {
    },
    onreconnecting: (e) => {
    },
    invoke: vi.fn((method, args) => {
      if (method === "MapLogin") {
        return this.mapOptions;
      }
    })
  };
  withUrl(_url, _) {
    return {
      build: () => this.connection
    };
  }
  startGame = () => {
    this.registeredHandlers.StartGame(this.mapGameSettings);
  };
  sendMapOptions = () => {
    this.registeredHandlers.MapOptions(this.mapOptions);
  };
  startRound = () => {
    this.registeredHandlers.StartRound(this.mapRoundSettings);
  };
  endRound = () => {
    this.registeredHandlers.EndRound(this.mapRoundResult);
  };
  endGame = () => {
    this.registeredHandlers.EndGame(this.mapGameEndResult);
  };
  exitGame = () => {
    this.registeredHandlers.ExitGame();
  };
  mapOptions = fakeMapOptions_default;
  mapGameSettings = fakeGameSettings_default;
  mapRoundResult = fakeRoundResults_default;
  mapGameEndResult = fakeGameEndResults_default;
  mapRoundSettings = fakeRoundInfo_default;
};

// src/index.ts
var sleep = (ms) => new Promise((r) => setTimeout(r, ms));
var GCSocketClient = class {
  connection;
  listeners;
  _streamerCode;
  running = false;
  constructor(url, streamerCode, { connectionBuilder = new signalR.HubConnectionBuilder() }, listeners) {
    const result = mod.string().url().safeParse(url);
    if (result.success) {
      this.connection = connectionBuilder.withUrl(result.data, {}).build();
      this._streamerCode = streamerCode;
      this.listeners = listeners;
      this.#start();
    } else {
      throw result.error;
    }
  }
  set streamerCode(streamerCode) {
    if (!streamerCode) {
      console.warn("no streamer code given");
    }
    this._streamerCode = streamerCode;
    console.info("new streamer code", streamerCode);
    this.#logInToMap();
  }
  get streamerCode() {
    return this._streamerCode;
  }
  async #start() {
    if (this.running) {
      console.warn("don't use start again! use reconnect instead");
    }
    await this.connection.start();
    await this.#logInToMap();
    this.#listenToStreamerSettings();
    this.#listenToProblems();
    this.#listenToGameStart();
    this.#listenToRoundStart();
    this.#listenToRoundEnd();
    this.#listenToGameEnd();
    this.#listenToGameExit();
    this.running = true;
  }
  async stop() {
    await this.connection.stop();
  }
  #setStreamerSettings(streamerSettings) {
    if (!streamerSettings) {
      console.warn("did'nt receive streamer settings as response");
    } else {
      this.listeners?.onStreamerSettings?.(streamerSettings);
    }
  }
  async #logInToMap() {
    const res = await this.connection.invoke("MapLogin", this.streamerCode);
    const streamerSettingsRes = MapOptions.safeParse(res);
    if (streamerSettingsRes.success) {
      this.#setStreamerSettings(streamerSettingsRes.data);
    } else {
      console.error("map log in", streamerSettingsRes.error);
      console.log(res);
    }
  }
  #listenToStreamerSettings() {
    this.connection.on("SetMapFeatures", (streamerSettings) => {
      this.#setStreamerSettings(streamerSettings);
    });
  }
  #listenToGameStart() {
    this.connection.on("StartGame", (data) => {
      const res = MapGameSettings.safeParse(data);
      if (res.success) {
        this.listeners?.onGameStart?.(res.data);
      } else {
        console.error("game start", res.error);
      }
    });
  }
  #listenToRoundStart() {
    this.connection.on("StartRound", (data) => {
      const res = MapRoundSettings.safeParse(data);
      if (res.success) {
        this.listeners?.onRoundStart?.(res.data);
      } else {
        console.error("round start", res.error);
      }
    });
  }
  #listenToRoundEnd() {
    this.connection.on("EndRound", (data) => {
      const res = MapRoundResult.safeParse(data);
      if (res.success) {
        this.listeners?.onRoundEnd?.(res.data);
      } else {
        console.error(res.error);
      }
    });
  }
  #listenToGameEnd() {
    this.connection.on("EndGame", (data) => {
      const res = MapGameEndResult.safeParse(data);
      if (res.success) {
        this.listeners?.onGameEnd?.(res.data);
      } else {
        console.error(res.error);
      }
    });
  }
  #listenToGameExit() {
    this.connection.on("ExitGame", () => {
      this.listeners?.onGameExit?.();
    });
  }
  #listenToProblems() {
    this.connection.onreconnecting = (e) => {
      console.info("default reconnecting from singalR", e);
    };
    this.connection.onclose = (e) => {
      console.warn("signalR connection closed trying to reconnect manually", e);
      setTimeout(() => {
        this.reconnect();
      }, 1e3);
    };
  }
  async reconnect() {
    console.info("reconnecting...");
    if (!this.streamerCode) {
      console.warn("calling reconnect without streamer code");
    }
    await this.connection.start();
    const res = await this.connection.invoke("MapLogin", this.streamerCode);
    const streamerSettingsRes = MapOptions.safeParse(res);
    if (streamerSettingsRes.success) {
      this.#setStreamerSettings(streamerSettingsRes.data);
    } else {
      console.error("got a weird response from map login check if you need to update gcsocketlibrary", streamerSettingsRes.error);
      console.log(res);
    }
  }
  async sendGuess(guess, checkGuess = true) {
    let guessId;
    if (this.connection.state !== "Connected") {
      console.log("not connected trying to reconnect before sending guess");
      await this.reconnect().then(async () => {
        console.log("sending guess after reconnect");
        guessId = await this.connection.invoke("SendGuessToClients", guess);
      });
    } else {
      guessId = await this.connection.invoke("SendGuessToClients", guess);
    }
    if (!checkGuess)
      return;
    if (typeof guessId === "number") {
      let state = await this.#getGuessState(guessId);
      let counter = 6;
      while (state === "Submitted" && counter >= 0) {
        state = await this.#getGuessState(guessId);
        console.log(state);
        await sleep(500);
        counter = counter - 1;
      }
      if (counter <= 0) {
        console.warn("something went wrong while processing guess on client");
        this.listeners?.onFailedGuess?.(state, "something went wrong while processing guess on client");
        return;
      }
      if (state === "Success" || state === "TempSuccess") {
        this.listeners?.onSuccessfulGuess?.();
      } else {
        this.listeners?.onFailedGuess?.(state, createErrorText(state));
      }
    }
  }
  async sendFlag(data) {
    const flagParseRes = Flag.safeParse(data);
    if (flagParseRes.success) {
      await this.connection.invoke("SendFlagToClients", flagParseRes.data);
    } else {
      console.error(flagParseRes.error);
      console.log(data);
    }
  }
  async sendColor(data) {
    const ColorParseRes = Color.safeParse(data);
    if (ColorParseRes.success) {
      await this.connection.invoke("SendColorToClients", ColorParseRes.data);
    } else {
      console.error(ColorParseRes.error);
      console.log(data);
    }
  }
  async #getGuessState(id) {
    return await this.connection.invoke("GetGuessState", id);
  }
};
function createErrorText(status) {
  switch (status) {
    case GuessState.Banned: {
      return "You are banned by the streamer and not allowed participate in any games.";
    }
    case GuessState.BotNotFound: {
      return "Bot not found";
    }
    case GuessState.GuessedAlready: {
      return "Already sent a guess for the round!";
    }
    case GuessState.InvalidCoordinates: {
      return "Invalid coordinates. Refresh the page.";
    }
    case GuessState.NoGame: {
      return "No ongoing game found, try again later.";
    }
    case GuessState.NotFound: {
      return "Invalid user data. Refresh the page.";
    }
    case GuessState.SameCoordinates: {
      return "Failed to send same guess back to back.";
    }
    case GuessState.TooFast: {
      return "Sending guesses too fast, try guessing again.";
    }
    case GuessState.UndefinedError: {
      return "Server error. Try guessing again.";
    }
    case GuessState.Unknown: {
      return "Invalid guess id. Refresh the page.";
    }
    default: {
      return "Something went wrong. Try guessing again.";
    }
  }
}
var GuessState = /* @__PURE__ */ ((GuessState2) => {
  GuessState2["Submitted"] = "Submitted";
  GuessState2["Success"] = "Success";
  GuessState2["NoGame"] = "NoGame";
  GuessState2["TempSuccess"] = "TempSuccess";
  GuessState2["NotFound"] = "NotFound";
  GuessState2["Banned"] = "Banned";
  GuessState2["GuessedAlready"] = "GuessedAlready";
  GuessState2["TooFast"] = "TooFast";
  GuessState2["InvalidCoordinates"] = "InvalidCoordinates";
  GuessState2["SameCoordinates"] = "SameCoordinates";
  GuessState2["UndefinedError"] = "UndefinedError";
  GuessState2["BotNotFound"] = "BotNotFound";
  GuessState2["Unknown"] = "Unknown";
  return GuessState2;
})(GuessState || {});
var SendingBase = mod.object(
  {
    bot: mod.string(),
    tkn: mod.string(),
    id: mod.string(),
    name: mod.string(),
    sourcePlatform: mod.enum(["YouTube", "Twitch"]),
    display: mod.string(),
    pic: mod.string()
  }
);
var Guess = SendingBase.extend({
  lat: mod.string(),
  lng: mod.string(),
  isTemporary: mod.boolean(),
  isRandom: mod.boolean()
});
var Flag = SendingBase.extend({
  flag: mod.string()
});
var Color = SendingBase.extend({
  color: mod.string()
});
var MapOptions = mod.object({
  mapIdentifier: mod.string().optional(),
  botname: mod.string().nullish(),
  streamer: mod.string().nullish(),
  twitchChannelName: mod.string().nullish(),
  installedFlagPacks: mod.string(),
  gameMode: mod.string().nullish(),
  isUSStreak: mod.boolean(),
  temporaryGuesses: mod.boolean(),
  showFlags: mod.boolean(),
  showBorders: mod.boolean(),
  showStreamOverlay: mod.boolean()
});
var MapGameSettings = mod.object({
  mapID: mod.number(),
  mapName: mod.string(),
  forbidMoving: mod.boolean(),
  forbidRotating: mod.boolean(),
  forbidZooming: mod.boolean(),
  roundCount: mod.number(),
  gameMode: mod.string(),
  gameType: mod.string(),
  gameState: mod.string(),
  isStreak: mod.boolean(),
  isInfinite: mod.boolean(),
  timeLimit: mod.number(),
  streakType: mod.string()
});
var PlayerBase = mod.object({
  displayName: mod.string(),
  userName: mod.string(),
  profilePicUrl: mod.string(),
  score: mod.number(),
  distance: mod.number(),
  timeTaken: mod.number(),
  streak: mod.number(),
  playerFlagName: mod.string().nullish(),
  playerFlag: mod.string().nullish(),
  guessCount: mod.number(),
  isStreamerResult: mod.boolean()
});
var MapRoundResult = mod.array(PlayerBase.extend(
  {
    guessedBefore: mod.boolean(),
    exactCountryCode: mod.string().nullish(),
    countryCode: mod.string().nullish(),
    wasRandom: mod.boolean(),
    gameId: mod.string().nullish()
  }
));
var MapGameEndResult = MapRoundResult;
var MapRoundSettings = mod.object({
  roundNumber: mod.number(),
  isMultiGuess: mod.boolean(),
  startTime: mod.string()
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Color,
  Flag,
  GCSocketClient,
  Guess,
  MapGameEndResult,
  MapGameSettings,
  MapOptions,
  MapRoundResult,
  MapRoundSettings,
  MockConnectionBuilder,
  PlayerBase,
  SendingBase,
  z
});
/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */
/*!
 * ### ._obj
 *
 * Quick reference to stored `actual` value for plugin developers.
 *
 * @api private
 */
/*!
 * ### .ifError(object)
 *
 * Asserts if value is not a false value, and throws if it is a true value.
 * This is added to allow for chai to be a drop-in replacement for Node's
 * assert class.
 *
 *     var err = new Error('I am a custom error');
 *     assert.ifError(err); // Rethrows err!
 *
 * @name ifError
 * @param {Object} object
 * @namespace Assert
 * @api public
 */
/*!
 * Add a chainable method
 */
/*!
 * Aliases.
 */
/*!
 * Assert interface
 */
/*!
 * Assertion Constructor
 *
 * Creates object for chaining.
 *
 * `Assertion` objects contain metadata in the form of flags. Three flags can
 * be assigned during instantiation by passing arguments to this constructor:
 *
 * - `object`: This flag contains the target of the assertion. For example, in
 *   the assertion `expect(numKittens).to.equal(7);`, the `object` flag will
 *   contain `numKittens` so that the `equal` assertion can reference it when
 *   needed.
 *
 * - `message`: This flag contains an optional custom error message to be
 *   prepended to the error message that's generated by the assertion when it
 *   fails.
 *
 * - `ssfi`: This flag stands for "start stack function indicator". It
 *   contains a function reference that serves as the starting point for
 *   removing frames from the stack trace of the error that's created by the
 *   assertion when it fails. The goal is to provide a cleaner stack trace to
 *   end users by removing Chai's internal functions. Note that it only works
 *   in environments that support `Error.captureStackTrace`, and only when
 *   `Chai.config.includeStack` hasn't been set to `false`.
 *
 * - `lockSsfi`: This flag controls whether or not the given `ssfi` flag
 *   should retain its current value, even as assertions are chained off of
 *   this object. This is usually set to `true` when creating a new assertion
 *   from within another assertion. It's also temporarily set to `true` before
 *   an overwritten assertion gets called by the overwriting assertion.
 *
 * @param {Mixed} obj target of the assertion
 * @param {String} msg (optional) custom error message
 * @param {Function} ssfi (optional) starting point for removing stack frames
 * @param {Boolean} lockSsfi (optional) whether or not the ssfi flag is locked
 * @api private
 */
/*!
 * Assertion Error
 */
/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addLengthGuard utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - compareByInspect utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerableProperties utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getOwnEnumerablePropertySymbols utility
 * Copyright(c) 2011-2016 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - isNaN utility
 * Copyright(c) 2012-2015 Sakthipriyan Vairamani <thechargingvolcano@gmail.com>
 * MIT Licensed
 */
/*!
 * Chai - isProxyEnabled helper
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - proxify utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Chai dependencies.
 */
/*!
 * Chai version
 */
/*!
 * Check if a property exists
 */
/*!
 * Check to see if the MemoizeMap has recorded a result of the two operands
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @returns {Boolean|null} result
*/
/*!
 * Checks error against a given set of criteria
 */
/*!
 * Compare by inspect method
 */
/*!
 * Compare two Regular Expressions for equality.
 *
 * @param {RegExp} leftHandOperand
 * @param {RegExp} rightHandOperand
 * @return {Boolean} result
 */
/*!
 * Compare two Sets/Maps for equality. Faster than other equality functions.
 *
 * @param {Set} leftHandOperand
 * @param {Set} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Configuration
 */
/*!
 * Core Assertions
 */
/*!
 * Deep equal utility
 */
/*!
 * Deep path info
 */
/*!
 * Dependencies that are used for multiple exports are required here only once
 */
/*!
 * Determine if the given object has an @@iterator function.
 *
 * @param {Object} target
 * @return {Boolean} `true` if the object has an @@iterator function.
 */
/*!
 * Determines if two objects have matching values, given a set of keys. Defers to deepEqual for the equality check of
 * each key. If any value of the given key is not equal, the function will return false (early).
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Array} keys An array of keys to compare the values of leftHandOperand and rightHandOperand against
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Ensure correct constructor
 */
/*!
 * Expect interface
 */
/*!
 * Flag transferring utility
 */
/*!
 * Flag utility
 */
/*!
 * Function name
 */
/*!
 * Get own enumerable properties method
 */
/*!
 * Get own enumerable property symbols method
 */
/*!
 * Gets all entries from a Generator. This will consume the generator - which could have side effects.
 *
 * @param {Generator} target
 * @returns {Array} an array of entries from the Generator.
 */
/*!
 * Gets all iterator entries from the given Object. If the Object has no @@iterator function, returns an empty array.
 * This will consume the iterator - which could have side effects depending on the @@iterator implementation.
 *
 * @param {Object} target
 * @returns {Array} an array of entries from the @@iterator function
 */
/*!
 * Gets all own and inherited enumerable keys from a target.
 *
 * @param {Object} target
 * @returns {Array} an array of own and inherited enumerable keys from the target.
 */
/*!
 * Inherit from Error.prototype
 */
/*!
 * Inspect util
 */
/*!
 * Module dependencies
 */
/*!
 * Module dependencies.
 */
/*!
 * Module export.
 */
/*!
 * Module variables
 */
/*!
 * Object Display util
 */
/*!
 * Overwrite chainable method
 */
/*!
 * Primary Export
 */
/*!
 * Primary Exports
 */
/*!
 * Primary `Assertion` prototype
 */
/*!
 * Proxify util
 */
/*!
 * Recursively check the equality of two Objects. Once basic sameness has been established it will defer to `deepEqual`
 * for each enumerable key in the object.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
/*!
 * Returns true if the argument is a primitive.
 *
 * This intentionally returns true for all objects that can be compared by reference,
 * including functions and symbols.
 *
 * @param {Mixed} value
 * @return {Boolean} result
 */
/*!
 * Set the result of the equality into the MemoizeMap
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {MemoizeMap} memoizeMap
 * @param {Boolean} result
*/
/*!
 * Should interface
 */
/*!
 * Simple equality for flat iterable objects such as Arrays, TypedArrays or Node.js buffers.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Simple equality for generator objects such as those returned by generator functions.
 *
 * @param {Iterable} leftHandOperand
 * @param {Iterable} rightHandOperand
 * @param {Object} [options] (Optional)
 * @return {Boolean} result
 */
/*!
 * Statically set name
 */
/*!
 * The main logic of the `deepEqual` function.
 *
 * @param {Mixed} leftHandOperand
 * @param {Mixed} rightHandOperand
 * @param {Object} [options] (optional) Additional options
 * @param {Array} [options.comparator] (optional) Override default algorithm, determining custom equality.
 * @param {Array} [options.memoize] (optional) Provide a custom memoization object which will cache the results of
    complex objects for a speed boost. By passing `false` you can disable memoization, but this will cause circular
    references to blow the stack.
 * @return {Boolean} equal match
*/
/*!
 * Utility Functions
 */
/*!
 * Utils for plugins (not exported)
 */
/*!
 * actual utility
 */
/*!
 * add Method
 */
/*!
 * add Property
 */
/*!
 * addLengthGuard util
 */
/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * expectTypes utility
 */
/*!
 * getOperator method
 */
/*!
 * isNaN method
 */
/*!
 * isProxyEnabled helper
 */
/*!
 * message utility
 */
/*!
 * overwrite Method
 */
/*!
 * overwrite Property
 */
/*!
 * test utility
 */
/*!
 * type utility
 */
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.js.map
