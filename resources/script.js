let name = document.getElementById('bigname')

document.addEventListener('scroll', function(e) {
   
    if (window.pageYOffset >= 170)
    {
        console.log('flip it!!!')
        name.classList.add("fliptext");
    }


  });

  document.addEventListener('scroll', function(e) {
   
    if (window.pageYOffset <= 169)
    {
        console.log('flip it!!!')
        name.classList.remove("fliptext");
    }


  });