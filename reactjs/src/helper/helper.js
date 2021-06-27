export function checkWin(correct, wrong, word) {
    let status = 'win';

    word.split('').forEach(letter => {
        if (!correct.includes(letter)){
          status = '';      
        }          
    });

    if (wrong.length == 6) status = 'loose';

    return status;
}

export function showNotification(setter) {
    setter(true)
    setTimeout(() => {
        setter(false);
    }, 2000);
}