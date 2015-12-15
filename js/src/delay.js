var delay = function(delayMs, object, method, args) {
    return new Promise(function(resolve, reject) {
        resolve(object[method].apply(object, args));
    });
};