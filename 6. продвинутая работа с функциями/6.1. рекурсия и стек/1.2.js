function sumTo(n) {
    let sum = 0;
    if (n == 1) { return 1; }
    else { return n + sumTo(n - 1) };
}

alert (sumTo(100));