// Use an immediately invoked function to prevent
// polluting the global namespace with variables/functions
// specific to lowdown's implementation.

(function() {
  // For simplicity assume `this` resolves to browser Window
  let root = this;

  var lowDown = (function() {
    let inputGuards = function(collection, functionArg, argType) {
      const noCollectionErrorMessage = "Collection required";
      const noCallbackErrorMessage = `${argType} function required`;
      const notAFunctionErrorMessage = `${argType} must be a function`;

      if (!collection) {
        throw noCollectionErrorMessage;
      }

      if (!functionArg) {
        throw noCallbackErrorMessage;
      }

      if (typeof functionArg !== "function") {
        throw notAFunctionErrorMessage;
      }
    };

    /*======================= map =========================*/
    var map = function(collection, callback, context) {
      inputGuards(collection, callback, "Callback");

      let mappedCollection = [];

      for (var i = 0, len = collection.length; i < len; i++) {
        mappedCollection.push(callback.call(context, collection[i], i));
      }

      return mappedCollection;
    };

    /*======================= reduce =======================*/
    var reduce = function(collection, callback, accumulator) {
      inputGuards(collection, callback, "Callback");

      accu = (!!accumulator || accumulator === 0) ? accumulator : collection[0];

      for (var i = 0, len = collection.length; i < len; i++) {
        accu = callback.call(undefined, accu, collection[i]);
      }
      return accu;
    };

    /*======================== filter ======================*/
    var filter = function(collection, predicate) {
      inputGuards(collection, predicate, "Predicate");

      let filteredCollection = [];

      for (var i = 0, len = collection.length; i < len; i++) {
        if (predicate(collection[i])) {
          filteredCollection.push(collection[i]);
        }
      }
      return filteredCollection;
    };

    return {
      map,
      reduce,
      reduce,
      filter,
    }
  })();

  const _ = lowDown;

  if (typeof exports != 'undefined' && !exports.nodeType) {
    if (typeof module != 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
})();
