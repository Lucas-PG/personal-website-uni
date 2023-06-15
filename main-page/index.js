var cursor = document.getElementById("cursor");
var cursor2 = document.getElementById("cursor2");

document.addEventListener("mousemove",function(e)
{
  cursor.style.cssText = cursor2.style.cssText = "left: "+e.clientX +
  "px; top: "+e.clientY +"px;";
})

const infoAbout = document.getElementById('firstAbout')

function scrollToTop() {
  const scrollDuration = 500; 
  const scrollStep = -window.scrollY / (scrollDuration / 15); 

  function scrollAnimation() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      setTimeout(scrollAnimation, 15); 
    }
  }

  scrollAnimation();
}

function smoothScroll(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}

const firstAboutElement = document.getElementById('firstAbout');
firstAboutElement.addEventListener('click', scrollToTop);

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const navItems = document.getElementsByClassName("nav-item")

Array.from(navItems).forEach((navItem, index) => {
  navItem.addEventListener('mouseover', () => {
    cursor.classList.remove("cursor")
    cursor2.classList.remove("cursor2")
  });

  navItem.addEventListener('mouseout', () => {
    cursor.classList.add("cursor")
    cursor2.classList.add("cursor2")
  });
});
