

const display = document.querySelector('[data-display]')
// const currentOperand = document.querySelector('[data-current-operand]')
// const previousOperand = document.querySelector('[data-previous-operand]')
// const allClear = document.querySelector('[data-all-clear]')
// const clear = document.querySelector('[data-delete]')
// const operation = document.querySelector('[data-operation]')
// const number = document.querySelector('[data-number]')
// const equals = document.querySelector('[data-equals]')
const allButtons = (document.querySelectorAll('button'))

// allButtons.map(button =>{
//     button.addEventListener('click', function (e){
//         switch (e.target.innerHTML){
//             case 'AC':
//                 display.innerHTML = ''
//                 break;
//             case   'DEL':
//                 if (display.innerHTML) {
//                     display.innerHTML = display.innerHTML.slice(0, -1)
//                 }
//                 break;
//             case '=':
//                 display.innerHTML = eval(display.innerHTML)
//                     break;
//             default:
//                 display.innerText += e.target.innerHTML
//         }
//     });
// })

allButtons.forEach(button=>{
    button.addEventListener('click', function (el){
        if(el.target.innerText === 'AC'){
            display.innerText = ''
        }else if (el.target.innerText === 'DEL'){
            display.innerHTML = display.innerText.slice(0, -1)
        }else if (el.target.innerText === '='){
        try {
            display.innerHTML = eval(display.innerText)
        }catch {
            display.innerText = 'ERROR!';
        }
        }else{
            display.innerText += el.target.innerText
        }

    })
})


