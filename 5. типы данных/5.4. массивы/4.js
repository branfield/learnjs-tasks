sumInput = () => {
    let arr = [];
    let sum = 0;
    while (true) 
    {
        let input = prompt('Введите число', 0)
        if (input === null || !isFinite(input) || input === '') { break; }
        arr.push(+input);
    }
    for (let num of arr) { sum += num; }
    return sum;
} 

alert( sumInput() );