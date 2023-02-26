function Accumulator(value) 
{
    this.value = value;
    this.read = function() 
    {
    this.number = +prompt('Введите число: ', 0);
    this.value += this.number
    };
}