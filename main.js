


function makeSound(id){

    var audio = document.getElementById(id);
    audio.play();

  }

  toggle.onclick = () =>{
    items.classList.toggle("open");
    toggle.classList.toggle("close");
  }

