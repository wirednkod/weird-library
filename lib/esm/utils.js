var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import componentTheme from "./components/theme.json";
// Private
var mergeDeep = function (target) {
    var _a, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length)
        return target;
    var source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key])
                    Object.assign(target, (_a = {},
                        _a[key] = {},
                        _a));
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, (_b = {},
                    _b[key] = source[key],
                    _b));
            }
        }
    }
    return mergeDeep.apply(void 0, __spreadArray([target], sources));
};
// public
export var getTheme = function (props) {
    return mergeDeep(componentTheme, props.theme);
};
export var isEmpty = function (obj) {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
};
var isObject = function (item) {
    return item && typeof item === "object" && !Array.isArray(item);
};
