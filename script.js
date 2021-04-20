//Create a single div

const container = document.querySelector('#container');

for (i=0; i<256;i++){
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = 'O'
        
        container.appendChild(content);
}


  
