// navbar button'
const navMenu = document.querySelector('.nav-menu')
const navButton = document.querySelector('.nav-button')
const rowEffect = document.querySelector('.rowEffect')
const cmImg = document.querySelector('.cmImg')
const cmText = document.querySelector('.cmText')
const table1 = document.querySelector('.table-1')
const table2 = document.querySelector('.table-2')
const table3 = document.querySelector('.table-3')
const table4 = document.querySelector('.table-4')

navButton.addEventListener('click', function() {
    navButton.classList.toggle("changeButton");
})

window.addEventListener('scroll', function() {
    let position = window.pageYOffset;

    console.log(position)

    if(position > 170) {
        rowEffect.classList.add('changeRow')
    }
    if(position < 70) {
        rowEffect.classList.remove('changeRow')
    }
    if(position > 200) {
        navMenu.classList.add('customNavbar')
    }
    if(position < 150) {
        navMenu.classList.remove('customNavbar')
    }
    if(position > 600) {
        cmImg.classList.add('rowEffect')
        cmText.classList.add('rowEffect')
    }
    if(position < 400) {
        cmImg.classList.remove('rowEffect')
        cmText.classList.remove('rowEffect')
    }
    if(position > 1700) {
        table1.classList.add('rowEffect')
        table2.classList.add('rowEffect')
    }
    if(position < 1550) {
        table1.classList.remove('rowEffect')
        table2.classList.remove('rowEffect')
    }
    if(position > 2200) {
        table3.classList.add('rowEffect')
        table4.classList.add('rowEffect')
    }
    if(position < 2000) {
        table3.classList.remove('rowEffect')
        table4.classList.remove('rowEffect')
    }
    
})
// end of navbar button

// slideshowDivs
const slideshowDivs = () => {
    for (let index = 1; index <= 4; index++) {
        const div = document.createElement('div');
        const img = document.createElement('img');

        img.src = `./images/slideshow/HeaderBg-${index}.JPG`;

        img.classList.add('img-style');

        div.appendChild(img);

        index === 1 && div.classList.add('change');

        const slideShow = document.querySelector('.slideshow');
        slideShow.appendChild(div);
    }
}

slideshowDivs();
// End of slideshowDivs

// slideshow
const divs = document.querySelectorAll('.slideshow div');
let count = 1;

const slideshow = ()=>{
    setInterval(()=>{

        let div = document.querySelector('.slideshow div.change');
        
        div.classList.remove('change');

        if(count < divs.length){
            div.nextElementSibling.classList.add('change');
        }else{
            divs[0].classList.add('change');
            count = 1;
        }
        count++;
    }, 10000);
}

slideshow();
// end of slideshow
