var btn = document.querySelector('.button');
var description = document.querySelector('.show-or-hidden')

btn.addEventListener('click', function(){
    if(description.style.display === 'block'){
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
});