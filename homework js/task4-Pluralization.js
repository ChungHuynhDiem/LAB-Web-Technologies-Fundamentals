function pluralizeRecords(n)
{
    let x=n%100;
    if(x>=10 && x<=19)
    {
        return n + ' записей';
    }
    else
    {
        x%=10;
            if(x===1)
            {
                return n + ' запись';
            }
            else if (x>=2 && x<=4)
            {
                return n + ' записи';
            }
            else{
                return n + ' записей';
            }
    }
    
}

console.log(pluralizeRecords(112));