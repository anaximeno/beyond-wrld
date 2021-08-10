function barAnime(x)
{
    x.classList.toggle("change");
}


function drop()
{
    const x = document.getElementById('dc');
    x.style.display = x.style.display !== 'block' ? 'block' : 'none';
}


function respBar()
{
  var x = document.getElementById("myTopnav");
  x.className = x.className === "topnav" ?  "responsive" : "topnav";
}
