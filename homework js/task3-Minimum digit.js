function minDigit(x)
{
    let min_number,result=x%10;
    while (x!==0)
    {
        min_number=x%10;
        if(min_number<result) {result=min_number};
        x=(x-min_number)/10;
    };
    return result;
}

console.log(minDigit(84578734));