import { useEffect, useState } from "react";
function useClickedOutside(ref) {
    var _a = useState(false), clicked = _a[0], setClicked = _a[1];
    useEffect(function () {
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
export default useClickedOutside;
