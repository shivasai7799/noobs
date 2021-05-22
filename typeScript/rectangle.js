var myMath;
(function (myMath) {
    function calcualteRectangle(length, width) {
        return length * width;
    }
    myMath.calcualteRectangle = calcualteRectangle;
})(myMath || (myMath = {}));
