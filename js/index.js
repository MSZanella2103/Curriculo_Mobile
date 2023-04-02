var btn = document.querySelector('.button_sobremim');
var description = document.querySelector('.show-or-hidden_sobremim')

btn.addEventListener('click', function(){
    if(description.style.display === 'block'){
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
});