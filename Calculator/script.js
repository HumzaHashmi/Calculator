let input = document.getElementById('inputBox');
let calculator = document.querySelectorAll('button');

let string = "";
let arr = Array.from(calculator);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        
        
        if(e.target.innerHTML == '='){
             evaluate();
        }
        else if(e.target.innerHTML == '%'){
             percentage();
        }
        else if(e.target.innerHTML == 'AC'){
            clear();
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})

function evaluate(){
    string = eval(string);
    input.value = string;
}
 
function percentage(){
    string= eval(string);
    input.value = string/100;
    string= input.value;

}
function clear(){
    string = "";
    input.value = string;
}