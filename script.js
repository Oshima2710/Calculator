let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=> {
    
      button.addEventListener('click', (e)=> {

        if(e.target.value == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if(e.target.value == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }

        else if(e.target.value == 'DE') {
            string = string.slice(0,-1)
            document.querySelector('input').value = string;
        }

        else { 
            console.log(e.target);
            string = string + e.target.value;
            document.querySelector('input').value = string;
        }
    })
})