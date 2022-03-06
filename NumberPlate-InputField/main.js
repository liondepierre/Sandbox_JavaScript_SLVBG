const array = ['L', 'L', 'N', 'N', 'N', 'N', 'N'];

// ---------------------------------------------- VANILLA JAVASCRIPT ----------------------------------------------

// const input = document.getElementById('numberplateInput');
// const output = document.getElementById('feedback');

// input.addEventListener('input', (e) => {
//     const enteredText = e.currentTarget.value;

//     if(e.inputType === 'insertText') {
//         const index = enteredText.length - 1;
        
//         if(array.length < enteredText.length) {
//             input.value = enteredText.slice(0, -1);
//             output.innerText = 'ENOUGH! You reached the max length!';
//             return;
            
//         } else if((array[index] === 'L' && !enteredText[index].match('[A-ZÆØÅa-zæøå]')) || 
//                   (array[index] === 'N' && !enteredText[index].match('[0-9]'))) {
//             input.value = enteredText.slice(0, -1);
//             output.innerText = 'Invalid input';
//             return;
//         } 
//     }

//     switch(enteredText.length) {
//         case 0: 
//             output.innerText = '-';
//             break;
//         case array.length:
//             output.innerText = 'Okay';
//             break;
//         default:
//             output.innerText = 'Okay, but too short';
//     }
// });

// ---------------------------------------------- JQUERY ----------------------------------------------

const $input = $('#numberplateInput');

function setOutput(message) {
    $('#feedback').text(message);
}

$input.on('input', (e) => {
    const enteredText = $input.val();
    const index = enteredText.length - 1;

    if(array.length < enteredText.length) {
        $input.val(enteredText.slice(0, -1));
        setOutput('ENOUGH! You reached the max length!')
        return;
    }

    if((array[index] === 'L' && !enteredText[index].match('[A-ZÆØÅa-zæøå]')) || (array[index] === 'N' && !enteredText[index].match('[0-9]'))) {
        $input.val(enteredText.slice(0, -1));
        setOutput('Invalid input');
        return;
    }

    switch(enteredText.length) {
        case 0: 
            setOutput('-') 
            break;
        case array.length:
            setOutput('Okay')
            break;
        default:
            setOutput('Okay, but too short')
    }
});