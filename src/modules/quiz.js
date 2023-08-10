import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default {
  init() {
    const questions = [ {
      'q': 'Какая ваша главная мотивация для похудения?',
      'opt' : {
        '0':'Внешний вид и уверенность в себе',
        '1':'Улучшение здоровья',
        '2':'Здоровье',
        '3':'Все перечисленные варианты'
      }
    }
     
    ];

    const btnStart = document.querySelector('.start-btn');
    const btnNext = document.querySelector('.start-btn');
    const questionPage = document.querySelector('.question');
    const indexPage = document.querySelector('.index');
    
    console.log('dfdfdf', btnStart)

    btnStart.addEventListener('click', () => {
      questionPage.classList.add('active');
      const tl = gsap.timeline();

      tl.to(indexPage, {
        x:3000,
        opacity: 0,
        duration:1,
        delay:0,
        height:0,
      })
      .from(questionPage, {
        x:0,
        opacity: 0,
        duration: 0,
        delay:0,
      })
    })
    
  }
}