/*function fibb(n)
{
    if (n===1 || n===2)
    {
        return 1;
    }
    else
    {
        return fibb(n-1)+fibb(n-2)
    }
}*/

function fibb(n)
{
    if(n===1 || n===2)
    {
        return 1;
    }
    else
    {
        let before=1,after=1;
        let result;
        for(;n>2;n--)
        {
            result = before + after;
            after = before;
            before = result;
        }
        return result;
    }
}

console.log(fibb(5));