let prize_sum = 0; let n = 5; let prize = 100; let nn = 4; let pr = 100; let pr2 = 2; let n2 = 5;
let x4 = 4; let x2 = 2; let y1 = 1; let y2 = 2;
if (confirm('Do you want to play a game?')) {
    do {
        n = n + nn;
        let x = 1;
        let y = 0;
        console.log(n);
        console.log('pr1' + prize);
        let i = 3;
        let a = Math.floor(Math.random() * n);
        console.log('a'+a);
        while (i > 0) {
            console.log('x==' + x);
            let p = n - 1;
            let us = prompt('Choose a roulette pocket number from 0 to ' + Number(p)
                + 'Attempts left:' + i + 'Total prize:' + prize_sum + '$'
                + 'Possible prize for current attempt:' + prize);
            console.log('us'+us)
            if (us === null) {
 break; 
}
            if (us === '') {
 n = n2; prize = pr; break; 
} else if (Number(us) === a) {
                prize_sum = prize_sum + prize;
                prize = prize * pr2 * x;
                alert('Congratulation, you won!   Your prize is:' + prize_sum + '$'); break;
            } else if (Number(us) !== a) {
                i--;
                y++; prize = prize / pr2;

                if (x === x4) {
                    x = 1;
                }
                if (y === 1) {

                    x = x * x2;
                }

                if (y === y2) {

                    x = x * x2;
                }
                console.log('x=' + x + 'y==' + y);
            } else {
                prize = pr; 
}
        }
    }
    while (confirm('Do you want to play again? '))
} else {
 alert('You did not become a billionaire, but can.') 
}