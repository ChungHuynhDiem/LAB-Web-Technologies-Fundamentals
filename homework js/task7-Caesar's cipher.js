const alphabet= [
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н',
    'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь',
    'э', 'ю', 'я'
];


let help;

cesar = (str, shift, action) =>{
    
    if(action==='encode')
    {
        let arraylength= str.length;
        let encode='';
        for(let i=0; i<arraylength; i++)
        {
            help=alphabet.findIndex(element => element===str[i])
            if(help===-1)
            {
                encode+=str[i];
                continue;
            }
            help+=shift;
            if(help>33)
            {
                help-=33;
            }
          
            encode+=alphabet[help];
        }
        return encode;
    }
    else if(action==='decode')
    {
        let arraylength= str.length;
        let decode='';
        for(let i=0; i<arraylength; i++)
        {
            help=alphabet.findIndex(element => element===str[i])
            if(help===-1)
                {
                    decode+=str[i];
                    continue;
                }
            help-=shift;
            if(help<0)
            {
                help+=33;
            }
          
            decode+=alphabet[help];
        }
        return decode;
    }
};

const text1 = `ди/???!!ем`;
const text2 = 'ейён!!<>?';

console.log(cesar(text1,1,'encode'));

console.log(cesar(text2,1,'decode'));