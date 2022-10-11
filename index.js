let inputscreen = document.getElementById('inputscreen');
buttons = document.querySelectorAll('button');//arary
let screenValue = '';
for(items of buttons)
{
    //clck event
    items.addEventListener('click', (e)=>{
        console.log("clicked")
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText)
        if(buttonText=='X')
        {
            buttonText = '*';
            screenValue += buttonText; 
            inputscreen.value  = screenValue ;
        }
        else if(buttonText == 'C')
        {
            screenValue = "";
            inputscreen.value  = screenValue ;
        }
        else if(buttonText == '='){
            inputscreen.value = eval(screenValue);
        }
        else 
        {
            console.log("idhar")
            screenValue += buttonText;
            inputscreen.value = screenValue;
        }
    })
   
}