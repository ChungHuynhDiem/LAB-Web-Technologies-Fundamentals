let arr =
[
    {name:'Anna' ,age:18 ,},
    {name:'Aisa' ,age:17 ,},
    {name:'Alex' ,age:30 ,},
    {name:'Tom' ,age:32 ,},
    {name:'Polina' ,age:10 ,},
    {name:'Lap' ,age:40 ,},
    {name:'Diem' ,age: 20 ,},
    {name:'Aton' ,age:10 ,},
]
let min;

const getSortedArray = (array, key) =>
{
    let lengthArr= array.length;
    
    for(let i=0; i<lengthArr;i++)
    {
        for(let j=i+1; j<lengthArr;j++)
        {
            if(array[i][key]>array[j][key])
            {
                //swap hai vi tri
                min=array[i];
                array[i]=array[j];
                array[j]=min;
            }
        }
    }
    console.log(array);
}

getSortedArray(arr,'age');

// numbers.forEach(function(number, index) {
//     console.log(`Index: ${index}, Value: ${number}`);
//   });