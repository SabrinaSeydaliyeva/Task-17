let btn= document.querySelector('button')
let nameInput=document.querySelector('.name-input')
let passwordInput=document.querySelector('.password-input')
let msj=document.querySelector('.message')

btn.addEventListener('click', showData)

function showData(e) 
{
    e.preventDefault()
    console.log('ddd'); 
}