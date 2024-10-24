function pow(x,n){
    let result=1;
    if(x===0)
    {
        if(n===0)
        {
            return 'math erro!!!';
        }
        else
        {
            return 0;
        }
    };
    for(;n>=1;n--)
    {
        result*=x;
    }
    return result;
}

console.log('0^0= ',pow(0,0));
console.log("0^2= ",pow(0,2));
console.log('4^0= ',pow(4,0));
console.log('4^5= ',pow(4,5));