checkSpam = (str) => {
    return str.toLowerCase().includes("viagra") ||
    str.toUpperCase().includes("XXX") ? true : false;
    };