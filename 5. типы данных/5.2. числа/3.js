function readNumber()
{
    let num;
    while (!Number.isFinite(num)) { num = +prompt('Введите число:'); }
    return num === null || num === 0 ? null : num;
}
    console.log(readNumber());