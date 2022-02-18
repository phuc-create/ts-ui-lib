"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = (0, tslib_1.__importDefault)(require("react"));
var classnames_1 = (0, tslib_1.__importDefault)(require("classnames"));
require("./style.scss");
var Button = function (_a) {
    var id = _a.id, type = _a.type, className = _a.className, children = _a.children, disabled = _a.disabled, link = _a.link, style = _a.style, onClick = _a.onClick;
    var buttonClass = (0, classnames_1.default)('button-ui', className);
    if (link) {
        return (react_1.default.createElement("a", { href: link, onClick: onClick, className: buttonClass, id: id, style: style }, children));
    }
    return (react_1.default.createElement("button", { onClick: onClick, type: type, id: id, disabled: disabled, className: buttonClass, style: style }, children));
};
exports.default = Button;
var defaultProps = {
    disabled: false
};
Button.defaultProps = defaultProps;
//# sourceMappingURL=Button.js.map