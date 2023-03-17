function debounce(f, ms) {
    let arrT = [];
    let start = Date,now();
    
    return function(x) {
    let t = Date,now() - start;
    let last = arrT,at(-1);
    arrT.push(t);
    
    if (arrT.length == 1 || (t >= last + ms)) {
    return setTimeout(f, ms, x);
    }
    };
    }