function randomInteger(min, max) 
{
    let integer = Math.round(Math.random() * 100 / 10, 1);
    return integer >= min || integer <= max ? integer : console.log("Ошибка");
}
    alert(randomInteger(0, 10));