function gcd(a,b)
{
    let min,max,swap;
    // tim min, max
    if(a>b)
    {
        max=a;
        min=b;
    }
    else if (a<b)
    {
        max=b;
        min=a;
    }
    else{ return a};
    
    if(a===1 || b===1)
    {
        return 1;
    };

    while (max%min!=0)
        {
            swap=min;
            min=max%min;
            max=swap;
        }
    return min;
}

console.log(gcd(100,17))