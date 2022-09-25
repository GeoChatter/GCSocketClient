var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod2) => function __require2() {
  return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
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
    function constructUserAgent(version, os, runtime, runtimeVersion) {
      let userAgent = "Microsoft SignalR/";
      const majorAndMinor = version.split(".");
      userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
      userAgent += ` (${version}; `;
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
    function getErrorString(e) {
      if (e.stack) {
        return e.stack;
      } else if (e.message) {
        return e.message;
      }
      return `${e}`;
    }
    exports.getErrorString = getErrorString;
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
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
          this._jar = new (requireFunc("tough-cookie")).CookieJar();
          this._fetchType = requireFunc("node-fetch");
          this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
        } else {
          this._fetchType = fetch.bind(Utils_1.getGlobalThis());
        }
        if (typeof AbortController === "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
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
        return new Promise((resolve, reject) => {
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
              resolve(new HttpClient_1.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
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
        const handshakePromise = new Promise((resolve, reject) => {
          this._handshakeResolver = resolve;
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
        const p = new Promise((resolve, reject) => {
          this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
            if (error) {
              reject(error);
              return;
            } else if (invocationEvent) {
              if (invocationEvent.type === IHubProtocol_1.MessageType.Completion) {
                if (invocationEvent.error) {
                  reject(new Error(invocationEvent.error));
                } else {
                  resolve(invocationEvent.result);
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
          await new Promise((resolve) => {
            this._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
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
        return new Promise((resolve, reject) => {
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
              resolve();
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
        return new Promise((resolve, reject) => {
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
            resolve();
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
        if (Utils_1.Platform.isNode && typeof __require !== "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : __require;
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
        this._stopPromise = new Promise((resolve) => {
          this._stopPromiseResolver = resolve;
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
        this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
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

// src/index.ts
var signalR = __toESM(require_cjs());

// node_modules/zod/lib/index.mjs
var util;
(function(util2) {
  util2.assertEqual = (val) => val;
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
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
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
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
  constructor(parent, value, path, key) {
    this.parent = parent;
    this.data = value;
    this._path = path;
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
    var _a;
    const ctx = {
      common: {
        issues: [],
        async: (_a = params === null || params === void 0 ? void 0 : params.async) !== null && _a !== void 0 ? _a : false,
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
        } catch (_a) {
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
    const keys = util.objectKeys(shape);
    return this._cached = { shape, keys };
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
          var _a, _b, _c, _d;
          const defaultError = (_c = (_b = (_a = this._def).errorMap) === null || _b === void 0 ? void 0 : _b.call(_a, issue, ctx).message) !== null && _c !== void 0 ? _c : ctx.defaultError;
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
      types.forEach((type) => {
        const discriminatorValue = type.shape[discriminator].value;
        options.set(discriminatorValue, type);
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
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      return OK(async (...args) => {
        const error = new ZodError([]);
        const parsedArgs = await this._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await fn(...parsedArgs);
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
        const result = fn(...parsedArgs.data);
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
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
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
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
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
ZodDefault.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
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
    state: "Closed",
    start: () => {
      this.connection.state = "Connected";
    },
    stop: () => {
      this.connection.onclose(new Error("mock error"));
      this.connection.state = "Closed";
      console.log("connection closed");
    },
    on: (method, func) => {
      this.registeredHandlers[method] = func;
    },
    onclose: (e) => {
    },
    onreconnecting: (e) => {
    },
    invoke: (method, args) => {
      if (method === "MapLogin") {
        return this.mapOptions;
      }
    }
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
export {
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
  mod as z
};
//# sourceMappingURL=index.js.map
