var delay = function(delayMs, object, method, args) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            try {
                resolve(object[method].apply(object, args));
            } catch (e) {
                reject(e);
            }
        }, delayMs);
    });
};
