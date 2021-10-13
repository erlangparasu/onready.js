function _onReady(test, callback) {
    var tmp = null;
    tmp = setInterval(function () {
        if (tmp) {
            if (test()) {
                callback();
                clearInterval(tmp);
            }
        }
    }, 3000);
}
