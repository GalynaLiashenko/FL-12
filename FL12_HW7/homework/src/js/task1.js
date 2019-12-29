const em = 5;
const pas = 6;
let b;
let a = prompt('Email');
console.log(a);
if (!a) {
    alert('Canceled')

} else if (a.length < em) {
 alert('I dont know any emails having name length less than 5 symbols'); 
} else if (a === 'admin@gmail.com' || a === 'user@gmail.com') {
    b = prompt('Password');
    console.log(b);
    if (b === '') {
        alert('Canceled.')
    }
}
if (a === 'admin@gmail.com' && b === 'AdminPass' || a === 'user@gmail.com' && b === 'UserPass') {
    if (confirm('Do you want to change your password ?')) {

        let d = prompt('Old password');
        //  alert(d);
        if (d === '') {
            alert('Canceled.')
        } else if (d.length < pas) {
 alert('I dont know any emails having name length less than 6 symbols'); 
} else if (d === b) {
            let n = prompt('New password')
            if (n === '') {
                alert('Canceled.')
            } else if (n.length < pas) {
 alert('Its too short password. Sorry.'); 
} else {
              let m = prompt('type again')
                if (m === n) {
 alert('You have successfully changed your password') 
}
                if (m !== n) {
 alert('You wrote the wrong password.') 
}
            }
        }

    } else {
        alert('You have failed the change')
    }
}