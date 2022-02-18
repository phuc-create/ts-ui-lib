import React from 'react';
import classnames from 'classnames';
import './style.scss';
var Button = function (_a) {
    var id = _a.id, type = _a.type, className = _a.className, children = _a.children, disabled = _a.disabled, link = _a.link, style = _a.style, onClick = _a.onClick;
    var buttonClass = classnames('button-ui', className);
    if (link) {
        return (React.createElement("a", { href: link, onClick: onClick, className: buttonClass, id: id, style: style }, children));
    }
    return (React.createElement("button", { onClick: onClick, type: type, id: id, disabled: disabled, className: buttonClass, style: style }, children));
};
export default Button;
var defaultProps = {
    disabled: false
};
Button.defaultProps = defaultProps;
//# sourceMappingURL=Button.js.map