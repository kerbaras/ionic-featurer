"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var change_case_1 = require("change-case");
var path = require("path");
var utils = require("./utils");
var feature_1 = require("../templates/feature");
var FeatureCommand = (function () {
    function FeatureCommand() {
        var _this = this;
        this.command = "generate:feature";
        this.describe = "Creates a new feature.";
        this.handler = function (argv) { return __awaiter(_this, void 0, void 0, function () {
            var directory, name, selector;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        directory = argv.dir;
                        name = change_case_1.pascalCase(argv.name);
                        selector = change_case_1.paramCase(name);
                        return [4, this.createFolders(directory, selector)];
                    case 1:
                        _a.sent();
                        return [4, this.createModule(directory, name, selector)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        }); };
    }
    FeatureCommand.prototype.builder = function (yargs) {
        return yargs
            .option("n", {
            alias: "name",
            describe: "Name of the feature.",
            demand: true
        })
            .option("d", {
            alias: "dir",
            describe: "Directory where the feature should be created.",
            default: "./src"
        });
    };
    FeatureCommand.prototype.createFolders = function (directory, name) {
        return __awaiter(this, void 0, void 0, function () {
            var folders, _i, folders_1, folder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        folders = ["assets", "components", "models", "services", "pages"];
                        _i = 0, folders_1 = folders;
                        _a.label = 1;
                    case 1:
                        if (!(_i < folders_1.length)) return [3, 4];
                        folder = folders_1[_i];
                        return [4, utils.createDirectories(this.getPath(directory, name, folder))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2];
                }
            });
        });
    };
    FeatureCommand.prototype.createModule = function (directory, name, selector) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, utils.createFile(this.getModulePath(directory, selector), feature_1.featureModuleTemplate(name))];
            });
        });
    };
    FeatureCommand.prototype.getModulePath = function (directory, name) {
        return this.getPath(directory, name, name + ".module.ts");
    };
    FeatureCommand.prototype.getPath = function (directory, feature, name) {
        return path.join(directory, "features", feature, name);
    };
    return FeatureCommand;
}());
exports.FeatureCommand = FeatureCommand;
//# sourceMappingURL=FeatureCommand.js.map