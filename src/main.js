(function (window) {
  function log() {
    var _log = {};
    /**
     * log type of variable
     * @param {any} variable
     */
    _log.typeof = function (variable) {
      console.log("typeof variable: " + typeof variable);
    };
    return _log;
  }

  if (typeof window.log === "undefined") {
    window.log = log();
  }
})(window);
