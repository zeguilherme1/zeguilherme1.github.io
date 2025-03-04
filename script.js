document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('open-dialog-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.cs-dialog').showModal();
    });
});

const progressBar = document.getElementById('progress-bar');
const content = document.getElementById('content');
let currentWidth = 0;

const interval = setInterval(function(){
    currentWidth += 20;
    progressBar.style.width = currentWidth + '%';
    
    if(currentWidth >= 100){
        clearInterval(interval);
        content.classList.remove('hidden');
        progressBar.parentElement.classList.add('hidden');
    }
}, 250);
