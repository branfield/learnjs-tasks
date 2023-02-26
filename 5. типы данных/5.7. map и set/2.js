function aclean(arr) {
    let sortedObj = arr.reduce((obj, elem) => {
    obj[elem.toLowerCase().split('').sort().join('')] = elem;
    return obj;
    }, {});
    return Object.values(sortedObj);
    }