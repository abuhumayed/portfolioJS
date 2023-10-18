
// window.onload = () =>
// {
//   // function toggleMenu()
//   // {
//   //   const menu = document.querySelector(".menu-links");
//   //   const icon = document.querySelector(".hamburger-icon");
//   //   menu.classList.toggle("open")
//   //   icon.classList.toggle("open")

//   // }
// }





window.onload = () =>
{
  document.querySelector(".menu-links").onclick = function() {toggleMenu()};
  document.querySelector(".hamburger-icon").onclick = function() {toggleMenu()};

  function toggleMenu()
  {
   
    document.querySelector(".menu-links").classList.toggle("open")
   
    document.querySelector(".hamburger-icon").classList.toggle("open")
   
  }

}
