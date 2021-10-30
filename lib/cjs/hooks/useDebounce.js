"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useDebounce(value, delay) {
    var _a = react_1.useState(value), debouncedValue = _a[0], setDebouncedValue = _a[1];
    react_1.useEffect(function () {
        var handler = setTimeout(function () {
            setDebouncedValue(value);
        }, delay);
        return function () {
            clearTimeout(handler);
        };
    }, [value]);
    return debouncedValue;
}
exports.default = useDebounce;
