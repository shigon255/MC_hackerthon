"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var head_1 = require("next/head");
var react_webcam_1 = require("react-webcam");
var faceapi = require("face-api.js");
var react_2 = require("react");
function Home() {
    var _this = this;
    var webcamRef = (0, react_1.useRef)(null);
    var canvasRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isLoaded = _a[0], setIsLoaded = _a[1];
    var loadModels = function () { return __awaiter(_this, void 0, void 0, function () {
        var MODEL_URL;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    MODEL_URL = "/models";
                    return [4 /*yield*/, Promise.all([
                            faceapi.nets.tinyFaceDetector.load(MODEL_URL),
                            faceapi.nets.faceExpressionNet.load(MODEL_URL),
                        ])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var handleLoadWaiting = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    var timer = setInterval(function () {
                        var _a, _b;
                        if (((_b = (_a = webcamRef.current) === null || _a === void 0 ? void 0 : _a.video) === null || _b === void 0 ? void 0 : _b.readyState) == 4) {
                            resolve(true);
                            clearInterval(timer);
                        }
                    }, 500);
                })];
        });
    }); };
    function scoreExpression(expressions, scores) {
        //console.log(scores);
        var max = Math.max.apply(null, scores);
        if (scores[0] == max) {
            var neutral = scores.shift();
            var second_1 = Math.max.apply(null, scores);
            if (max / second_1 > 2 && second_1 != 0)
                return expressions[0];
            else
                return expressions[scores.findIndex(function (score) { return score === second_1; })];
        }
        else {
            var index = scores.findIndex(function (score) { return score === max; });
            return expressions[index];
        }
    }
    var faceDetectHandler = function () { return __awaiter(_this, void 0, void 0, function () {
        var webcam, canvas, video_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, loadModels()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, handleLoadWaiting()];
                case 2:
                    _a.sent();
                    if (webcamRef.current) {
                        setIsLoaded(true);
                        webcam = webcamRef.current.video;
                        canvas = canvasRef.current;
                        webcam.width = webcam.videoWidth;
                        webcam.height = webcam.videoHeight;
                        video_1 = webcamRef.current.video;
                        (function detect() {
                            return __awaiter(this, void 0, void 0, function () {
                                var detectionsWithExpressions, images_series, _loop_1, i;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, faceapi
                                                .detectAllFaces(video_1, new faceapi.TinyFaceDetectorOptions())
                                                .withFaceExpressions()];
                                        case 1:
                                            detectionsWithExpressions = _a.sent();
                                            if (detectionsWithExpressions.length > 0) {
                                                _loop_1 = function (i) {
                                                    var Array_1 = Object.entries(detectionsWithExpressions[i].expressions);
                                                    var expressionsArray = Array_1.map(function (j) { return j[0]; });
                                                    var scoresArray = Array_1.map(function (i) { return i[1]; });
                                                    var max = Math.max.apply(null, scoresArray);
                                                    var index = scoresArray.findIndex(function (score) { return score === max; });
                                                    var expression = scoreExpression(expressionsArray, scoresArray);
                                                    // const log = scoresArray.map((element, index)=>{
                                                    //   return `${expressionsArray[index]} : ${element}`
                                                    //});
                                                    console.log(expression);
                                                };
                                                for (i = 0; i < detectionsWithExpressions.length; i++) {
                                                    _loop_1(i);
                                                }
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })();
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        faceDetectHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (<>
      <div>
        <head_1.default>
          <title>Face2Emoji</title>
          <meta name="description" content="Mask Emoji to your face"/>
          <meta property="og:image" key="ogImage" content="/emojis/happy.png"/>
          <link rel="icon" href="/emojis/happy.png"/>
        </head_1.default>
        <header>
          <h1>Face2Emoji</h1>
        </header>
        <main>
          <react_webcam_1.default audio={false} ref={webcamRef}/>
          <canvas ref={canvasRef}/>
        </main>
      </div>
    </>);
}
exports.default = Home;
