let score = { correct: 0, total:1, incorrect:0, checklevel:1 };
let countdownInterval;

function startCountdown(durarion){
    let timeleft= durarion;

    countdownElement = document.getElementById('countdown');
    
    countdownInterval = setInterval(() => {
    const min=Math.floor(timeleft/60);
    const sec=timeleft%60;
    countdownElement.innerText = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
    
    if (timeleft<= 0)
    {
        clearInterval(countdownInterval);
        countdownElement.innerText = ' tine out !!!';
        Calculate.innerText = `Game Over !!!`;
        document.getElementById('checkresult').disabled = true; // Vô hiệu hóa nút kiểm tra
        endGame("Game Over !!!");
    }
    timeleft --;
    },1000);
}

startCountdown(5*60);


const Level=document.getElementById('level');

const MathLevel = (QuanlityQuestion) =>{
    if (QuanlityQuestion >= 0 && QuanlityQuestion < 9) {
        Level.innerText = `Level: beginner.`;
    } else if (QuanlityQuestion >= 9 && QuanlityQuestion < 19) {
        Level.innerText = `Level: intermediate.`;
    } else if (QuanlityQuestion >= 19) {
        Level.innerText = `Level: advanced.`;
    }

}

const Calculate=document.getElementById('math');

function getRandomInt(max,min) {
    return Math.floor(Math.random() * (max - min + 1) )+ min;
}

function getRandomOperation() {
    const operations = ['+', '-', '*']; //, '/'
    const randomIndex = Math.floor(Math.random() * operations.length);
    return operations[randomIndex];
}

function getRadomOperationLogic() {
    return operation = Math.random() < 0.5 ? 'AND' : 'OR';
}

const BeginnerMath = (a,b,operation) =>{
    switch (operation){
        case '+':
            Calculate.innerText=`${a}+${b}`;
            return a+b;
        case '-':
            Calculate.innerText=`${a}-${b}`;
            return a-b;
        case '*':
            Calculate.innerText=`${a}*${b}`;
            return a*b;
        // case '/':
        //     Calculate.innerText=`${a}/${b}`;
        //     return a/b;
    }
}

function IntermediateMath() {
    let a = getRandomInt(100,1);
    let b = getRandomInt(100,1);
    
    // Chọn ngẫu nhiên một phép toán so sánh
    const comparisons = [
        { operator: '<', question: `${a} < ${b}`, answer: a < b },
        { operator: '>', question: `${a} > ${b}`, answer: a > b },
        { operator: '<=', question: `${a} <= ${b}`, answer: a <= b },
        { operator: '>=', question: `${a} >= ${b}`, answer: a >= b }
    ];
    
    const randomIndex = Math.floor(Math.random() * comparisons.length);
    Calculate.innerText= comparisons[randomIndex].question;
    return comparisons[randomIndex].answer; // Trả về một câu hỏi ngẫu nhiên
}

function AdvancedMath() {
    let a = getRandomInt(1000,1);
    let b = getRandomInt(1000,1);
    let c = getRandomInt(1000,1);
    let d = getRandomInt(1000,1);
    // Chọn ngẫu nhiên một phép toán so sánh
    const comparison1 = [
        { operator: '<', question: `${a} < ${b}`, answer: a < b },
        { operator: '>', question: `${a} > ${b}`, answer: a > b },
        { operator: '<=', question: `${a} <= ${b}`, answer: a <= b },
        { operator: '>=', question: `${a} >= ${b}`, answer: a >= b }
    ];
    
    const comparison2 = [
        { operator: '<', question: `${c} < ${d}`, answer: c < d },
        { operator: '>', question: `${c} > ${d}`, answer: c > d },
        { operator: '<=', question: `${c} <= ${d}`, answer: c <= d },
        { operator: '>=', question: `${c} >= ${d}`, answer: c >= d }
    ];

    let operationlogic = getRadomOperationLogic();

    const randomIndex1 = Math.floor(Math.random() * comparison1.length);
    const randomIndex2 = Math.floor(Math.random() * comparison2.length);
    let result;
    if(operationlogic==='AND')
    {
        Calculate.innerText= comparison1[randomIndex1].question + ' AND ' + comparison2[randomIndex2].question;
        result = comparison1[randomIndex1].answer&&comparison2[randomIndex2].answer;
    }
    else if(operationlogic==='OR')
    {
        Calculate.innerText= comparison1[randomIndex1].question + ' OR ' + comparison2[randomIndex2].question;
        result = comparison1[randomIndex1].answer||comparison2[randomIndex2].answer;
    }
    return result;
}

const checkmath = (answer,userInput,scoreObj) => {
    if (answer===userInput)
    {
        document.getElementById('result').innerText=`Correct!!!`; scoreObj.correct++;scoreObj.total++; scoreObj.checklevel++;
    }
    else
    {
        document.getElementById('result').innerText=`Incorrect!!!`;scoreObj.incorrect++;scoreObj.total++;
    }

    setTimeout(() => {
        document.getElementById('result').innerText = ''; // Xóa chữ sau 3 giây
    }, 2000); // 2000 ms = 3 s
}

const getmath = () => {
    let a = getRandomInt(10,1);
    let b = getRandomInt(10,1);
    let c = getRandomOperation();
    let d = BeginnerMath(a, b, c);
    return d;
}


let result=getmath();
MathLevel(score.total);
let answers ;
document.getElementById('quanlitycorrect').innerHTML=`Correct: ${score.correct}  Incorrect: ${score.correct}`;
document.getElementById('quanlitytotal').innerHTML=`Total: ${score.total}/10`;
document.getElementById('checkresult').addEventListener('click', function () {
    MathLevel(score.total);
    let inputValue = document.getElementById('input_result').value;
    // let answer = parseFloat(inputValue);
    if(score.total<=10)
        {
            answers = parseFloat(inputValue);
        }
    else if(score.total>10)
        {
            if(inputValue==='true')
            {
                answers = true;
            }
            else
            {
                answers = false;
            }
        }

    checkmath(result, answers,score); 
    document.getElementById('quanlitycorrect').innerHTML=`Correct: ${score.correct}  Incorrect: ${score.incorrect}`;
    document.getElementById('quanlitytotal').innerHTML=`Total: ${score.checklevel}/10`;
    document.getElementById('input_result').value= ``;
    if(score.total<10)
    {
        result=getmath();
        if (score.total === 9)
        {
            if (score.checklevel <8)
            {
                clearInterval(countdownInterval);
                Calculate.innerText = `Game Over !!!`;
                document.getElementById('checkresult').disabled = true; // Vô hiệu hóa nút kiểm tra
                endGame("Game Over !!!");
            }
            else{ score.checklevel = 0; score.correct=0; score.incorrect=0;}
        }

    }
    else if(score.total>=10 && score.total<20)
    {
        result=IntermediateMath();
        if (score.total === 19)
            {
                if (score.checklevel <8)
                {
                    clearInterval(countdownInterval);
                    Calculate.innerText = `Game Over !!!`;
                    document.getElementById('checkresult').disabled = true; // Vô hiệu hóa nút kiểm tra
                    endGame("Game Over !!!");
                }
                else{ score.checklevel = 0; score.correct=0; score.incorrect=0 }
            }
    }
    else if (score.total>=20 && score.total<30){
        result=AdvancedMath();
    }
    else{
        clearInterval(countdownInterval);
        Calculate.innerText = `Congratulations you've completed it! Result: ${score.correct}/10`;
        document.getElementById('checkresult').disabled = true; // Vô hiệu hóa nút kiểm tra
    }
});

// reset game

function endGame(message) {
    document.getElementById('modal-message').innerText = message;
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('checkresult').disabled = true; // Vô hiệu hóa nút kiểm tra

    document.getElementById('play-again').onclick = function() {
        resetGame();
    };

    document.getElementById('exit').onclick = function() {
        window.close(); // Thoát trò chơi
    };
}

function resetGame() {
    score = { correct: 0, total: 0, incorrect: 0, checklevel: 0 };
    document.getElementById('quanlitycorrect').innerHTML = `Correct: 0  Incorrect: 0`;
    document.getElementById('quanlitytotal').innerHTML = `Total: 0/10`;
    countdownElement.innerText = '';
    document.getElementById('input_result').value = '';
    document.getElementById('checkresult').disabled = false;// đặt lại nút bấm
    document.getElementById('modal').style.display = 'none'; // Ẩn hộp thoại
    startCountdown(5 * 60); // Bắt đầu lại đồng hồ
    result = getmath(); // Tạo lại câu hỏi đầu tiên
}