"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_route_1 = __importDefault(require("./routes/user.route"));
class App {
    constructor() {
        this.app = express_1.default();
        this.mongoUrl = "mongodb://localhost:27017/photo-frames";
        this.config();
        this.mongoSetup();
        this.initRoutes();
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static("public"));
        this.app.set("port", process.env.PORT || 3000);
    }
    initRoutes() {
        this.app.use("/api/user", user_route_1.default);
    }
    mongoSetup() {
        mongoose_1.default.Promise = global.Promise;
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
