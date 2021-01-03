"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_modal_1 = __importDefault(require("react-modal"));
var Dashboard_1 = require("./components/Dashboard");
function runDashboard() {
    react_dom_1.default.render(react_1.default.createElement(Dashboard_1.Dashboard, null), document.getElementById("reactRoot"));
    react_modal_1.default.setAppElement("#reactRoot");
}
exports.default = runDashboard;
