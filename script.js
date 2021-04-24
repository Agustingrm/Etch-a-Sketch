window.onload = function(){

        var amountOfSquares = 30 
        var squareSideLenght = (480/amountOfSquares);
        //Create the divs array
        const container = document.querySelector('#container');

        for (i=0; i<amountOfSquares*amountOfSquares;i++){
                const content = document.createElement('div');
                content.classList.add('content');

                container.appendChild(content);
        }


        //Create squares according to lenght
        const dimensions = document.getElementsByClassName('content');

                for (let i=0; i<amountOfSquares**2;i++){
                        dimensions[i].style.height = squareSideLenght;
                        dimensions[i].style.width = squareSideLenght;
                }

        //Create variable grid
        const gridPattern = document.getElementById('container');

                gridPattern.style.backgroundColor = 'gray';
                gridPattern.style.gridTemplateColumns = 'repeat('+amountOfSquares+','+squareSideLenght+'px)';
                gridPattern.style.gridTemplateRows = 'repeat('+amountOfSquares+','+squareSideLenght+'px)';

        //Change background color on hover
        const changeBackground = document.getElementsByClassName('content');

                for (let i=0; i<amountOfSquares*amountOfSquares;i++){
                        changeBackground[i].addEventListener('mouseover', function(e){
                                var rainbowRoad = [[255,0,0],[255,127,0],[0,0,255],[255,255,0],[0,255,0],[0,0,255],[139,0,255]]
                                var color = rainbowRoad[Math.floor(Math.random()*6)]
                                changeBackground[i].style.backgroundColor = 'rgb('+ color.join(',') + ')';
                                });
                }

};

const newGame = document.getElementById('newGame');

newGame.addEventListener('click',function(e){
                const deleteEverything = document.getElementsByClassName('content');
                
                while (deleteEverything[0]){
                        deleteEverything[0].parentNode.removeChild(deleteEverything[0]);
                }

                var amountOfSquares = prompt('How many squares per side would you like?\nChoose between 2 and 60');

                while (typeof parseInt(amountOfSquares) !== "number"){
                        alert(amountOfSquares + ' it\'s not  a number')
                        var amountOfSquares = prompt('How many squares per side would you like?\nChoose between 2 and 60');
                                }
                while(amountOfSquares<2){
                        alert('Too low! You wont see a thing')
                        var amountOfSquares = prompt('How many squares per side would you like?\nChoose between 2 and 60');
                                }
                while(amountOfSquares>60){
                        alert('Too many squares, your pc will die')
                        var amountOfSquares = prompt('How many squares per side would you like?\nChoose between 2 and 60');
                        }
                var squareSideLenght = (480/amountOfSquares);
                //Create the divs array
                const container = document.querySelector('#container');

                for (i=0; i<amountOfSquares*amountOfSquares;i++){
                        const content = document.createElement('div');
                        content.classList.add('content');

                        container.appendChild(content);
                }

                //Create squares according to lenght
                        const dimensions = document.getElementsByClassName('content');

                for (let i=0; i<amountOfSquares**2;i++){
                        dimensions[i].style.height = squareSideLenght;
                        dimensions[i].style.width = squareSideLenght;
                }

                //Create variable grid
                const gridPattern = document.getElementById('container');

                        gridPattern.style.backgroundColor = 'gray';
                        gridPattern.style.gridTemplateColumns = 'repeat('+amountOfSquares+','+squareSideLenght+'px)';
                        gridPattern.style.gridTemplateRows = 'repeat('+amountOfSquares+','+squareSideLenght+'px)';
                //Change background color on hover
                const changeBackground = document.getElementsByClassName('content');

                for (let i=0; i<amountOfSquares*amountOfSquares;i++){
                        changeBackground[i].addEventListener('mouseover', function(e){
                                var rainbowRoad = [[255,0,0],[255,127,0],[0,0,255],[255,255,0],[0,255,0],[0,0,255],[139,0,255]]
                                var color = rainbowRoad[Math.floor(Math.random()*6)]
                                changeBackground[i].style.backgroundColor = 'rgb('+ color.join(',') + ')';
                                });
                }

})
;

