function camelize(str) 
{
    let arr = str.split('-');
    if (arr[0] == '') { arr.shift(0); }
    arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}