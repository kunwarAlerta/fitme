"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const category_route_1 = __importDefault(require("./routes/category.route"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = require("./middleware/passport");
const errorHandler_1 = require("./middleware/errorHandler");
class App {
    constructor() {
        this.app = express_1.default();
        this.mongoUrl = process.env.MONGOURL;
        this.passport = passport_1.default;
        this.config();
        this.mongoSetup();
        this.initRoutes();
        this.passportSetup();
        this.initClient();
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(passport_1.default.initialize());
        this.app.use(express_1.default.static("public"));
        this.app.use(morgan_1.default("dev"));
        this.app.set("port", process.env.PORT || 8000);
    }
    passportSetup() {
        this.app.use(passport_1.default.initialize());
        this.app.use(passport_1.default.session());
        this.app.use(express_1.default.static("public"));
        this.app.use(express_1.default.static(path_1.default.join(__dirname, "../clientApp/build")));
        passport_2.PassportLocal.passportHandler(passport_1.default);
    }
    initClient() {
        this.app.get("*", (req, res) => {
            res.sendFile(path_1.default.join(__dirname, "../clientApp/build/index.html"));
        });
    }
    initRoutes() {
        this.app.use("/api/user", user_route_1.default);
        this.app.use("/api/category", category_route_1.default);
        this.app.use(errorHandler_1.errorHandler);
    }
    mongoSetup() {
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.set("useNewUrlParser", true);
        mongoose_1.default.set("useFindAndModify", false);
        mongoose_1.default.set("useCreateIndex", true);
        mongoose_1.default
            .connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => {
            console.log("Successfully connected to the database");
        })
            .catch((err) => {
            console.log("Could not connect to the database. Exiting now...", err);
            process.exit();
        });
    }
}
exports.default = new App().app;
