function pow(x, n) 
{
    let result;
    
    if (n >= 1 && (n % 1 == 0)) 
    {
    result = x ** n;
    } 
    else return 'Степень не поддерживается'
    return result;
}
    
    