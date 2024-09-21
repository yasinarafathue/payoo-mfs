// console.log('button clicking file added'




// document.getElementById('id').addEventListener('click', fun)

//search: form submit reloading the page

// step-1: set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    // step-2: prevent default behavior ( prevent reloading browser)
    event.preventDefault(); //<---- Vejal to bedinners


    // step-3: get the phone number and the pin number
const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;

console.log(phoneNumber, pinNumber)

// step4 4: validate phone or pin
// this is temporary, you should do like this.

if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('You are logged in');
// step 5: allow user to use the website
window.location.href = '/home.html';

}
else{
    alert('Wrong phone number or pin')
}

    
})
