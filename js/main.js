// const allCross = document.querySelectorAll(".visible img");

// allCross.forEach(element => {

//   element.addEventListener('click', function () {

//     console.log(this.parentNode.parentNode.childNodes)

//     const Height = this.parentNode.parentNode.childNodes[3].scrollHeight;

//     const currentChoice = this.parentNode.parentNode.childNodes[3];

//     if (this.src.includes('plus')) {
//       this.src = 'images/moins.svg';
//       gsap.to(currentChoice, { duration: 0.2, height: Height + 40, opacity: 1, padding: '10px 40px', })

//     } else if (this.src.includes('moins')) {
//       this.src = 'images/plus.svg';
//       gsap.to(currentChoice, { duration: 0.2, height: 0, opacity: 0, padding: '0px 15px' })

//     }
//   })
// })



const allCross = document.querySelectorAll(".faq_block");

allCross.forEach(element => {

  element.addEventListener("click", function() {

    console.log(this.childNodes[1].childNodes[1])

    const test = this.childNodes[1].childNodes[1];

    // const Height = this.childNodes[3].scrollHeight;

    const currentChoice = this.childNodes[3];

    if (test.src.includes('plus')) {
      test.src = 'images/moins.svg';
      currentChoice.classList.add('diplayblock')
      const Height = this.childNodes[3].scrollHeight;
      gsap.to(currentChoice, { duration: 0.2, height: Height + 40, opacity: 1, padding: '10px 40px', })
     

    } else if (test.src.includes('moins')) {
      test.src = 'images/plus.svg';
      gsap.to(currentChoice, { duration: 0.2, height: 0, opacity: 0, padding: '0px 15px' })
      currentChoice.classList.remove('diplayblock')

    }


  })
})






const ham = document.querySelectorAll(".bouton-navigation");
const purple = document.querySelectorAll('.barre');
const nav = document.querySelectorAll('.navigation')


ham.forEach(element => {
  element.addEventListener('click', function() {
    for (const purples of purple){
      purples.classList.toggle('purple')
    }
    for (const navigations of nav){
      navigations.classList.toggle('isOpen')
    }

  })
})




window.addEventListener('scroll',(event) => {
    for (const navigations of nav){
      navigations.classList.remove('isOpen')
    }
    for (const purples of purple){
      purples.classList.remove('purple')
    }
});

// $(document).ready(function(){
//   $(".bouton-navigation").click(function(){
//     $(this).find(".barre").toggleClass('white')
//     $(".navigation").toggleClass('isOpen')

//   });

// });




