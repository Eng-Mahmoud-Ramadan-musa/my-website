
let links = document.querySelectorAll(".link a");

for (let i = 0 ; i < links.length ; i++) {
  links[i].addEventListener('click',function(event){
    event.preventDefault();
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
      
    }
    this.classList.add('active');
    window.location.href = this.href;
  })
}
