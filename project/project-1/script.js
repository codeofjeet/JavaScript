const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
            document.getElementById('red').style.backgroundColor='white'
        }

         if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
            document.getElementById('green').style.backgroundColor='white'
            document.getElementById('red').style.backgroundColor='red'
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
            document.getElementById('green').style.backgroundColor='green'
            document.getElementById('red').style.backgroundColor='red'
            document.getElementById('blue').style.backgroundColor='white'
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id
            document.getElementById('green').style.backgroundColor='green'
            document.getElementById('red').style.backgroundColor='red'
            document.getElementById('blue').style.backgroundColor='blue'
            document.getElementById('yellow').style.backgroundColor='white'
        }

        if(e.target.id === 'blueviolet'){
            body.style.backgroundColor = e.target.id
            document.getElementById('green').style.backgroundColor='green'
            document.getElementById('red').style.backgroundColor='red'
            document.getElementById('blue').style.backgroundColor='blue'
            document.getElementById('yellow').style.backgroundColor='yellow'
            document.getElementById('blueviolet').style.backgroundColor='white'
        }
    })
});