"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useClickedOutside(ref) {
    var _a = react_1.useState(false), clicked = _a[0], setClicked = _a[1];
    react_1.useEffect(function () {
        var handleClickOutside = function (event) {
            setClicked(ref.current && !ref.current.contains(event.target));
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return clicked;
}
exports.default = useClickedOutside;
