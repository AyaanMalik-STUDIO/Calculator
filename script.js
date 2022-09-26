function valueButton(e){
    calculatorform.screen.value += e.value;
}

function Clear(e){
    calculatorform.screen.value = "";
}

function Calculate(e){
    calculatorform.screen.value = eval(calculatorform.screen.value)
}