const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profileImg');
const name = document.getElementById('name');
const date = document.getElementById('date');

setTimeout(setDate, 1500)

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgText = document.querySelectorAll('.animated-bg-text');

function setDate() {
    header.innerHTML = `<img src="img.jpg" alt="card backgroung" />`
    title.innerHTML = 'Lorem, ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,dolorem?'
    profileImg.innerHTML = '<img src="person.jpg" alt="">'
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020'

    animatedBgs.forEach(bg => bg.classList.remove('animated-bg'));
    animatedBgText.forEach(bg => bg.classList.remove('animated-bg-text'))
}