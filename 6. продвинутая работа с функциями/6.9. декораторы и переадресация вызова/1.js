function spy () {
    return function (...args) {
    spy.calls.push(args);
    }
    }