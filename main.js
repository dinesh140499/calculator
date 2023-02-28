let screen=document.getElementById('search')
let screenValue=''
buttons=document.querySelectorAll('button')
buttons.forEach((item)=>{
   item.addEventListener('click',(e)=>{
    buttonText=e.target.innerHTML
    if(buttonText=='AC')
    {
        screen.value=''
        screenValue=''
    }
    else if(buttonText=='DEL'){
        screenValue=screenValue.slice(0,-1)
        screen.value=screenValue
    }
    else if(buttonText=='='){
        screen.value=eval(screenValue)
    }
    else{
        screenValue+=buttonText
        screen.value=screenValue
    }
   })
})