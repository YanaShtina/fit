import { gsap } from "gsap";

export default {
  init() {
    const questions = [ 
      {
      'q': '1. Какая ваша главная мотивация для похудения?',
      'opt' : {
        '0':'Внешний вид и уверенность в себе',
        '1':'Улучшение здоровья',
        '2':'Здоровье',
        '3':'Все перечисленные варианты'
      },
      'img': 'assets/1.jpg'
      },

      {
        'q': '2. Как вы оцениваете свои пищевые привычки?',
        'opt' : {
          '0':'Употребляю много вредного',
          '1':'Питаюсь сбалансированно, но срываюсь',
          '2':'Всегда только сбалансированно',
          '3':'Не могу оценить'
        },
        'img': 'assets/2.jpg'
        },

      {
        'q': '3. Какое отношение у вас к сладостям?',
        'opt' : {
          '0':'Не употребляю',
          '1':'Ем редко, но много  я',
          '2':'Каждый день',
          '3':'Это мой основной рацион',
        },
        'img': 'assets/3.jpg'
        },

        {
          'q': '4. Важно ли для вас участие специалиста в планировании питания?',
          'opt' : {
            '0':'Очень важна, хочу индивидуальный рацион',
            '1':'Важно, но могу без специалиста',
            '2':'Не важно, могу самостоятельно составить план',
            '3':'Не могу определиться',
          },
          'img': 'assets/4.jpg'
          },

          {
            'q': '5. Вы готовы изменить свои пищевые привычки для достижения целей?',
            'opt' : {
              '0':'Готов(-а) внести радикальные изменения',
              '1':'Готов(-а) изменить некоторые привычки',
              '2':'Не готов(-а) менять свои текущие привычки',
              '3':'Не могу определиться',
            },
            'img': 'assets/5.jpg'
            },
     
    ];

    const btnStart = document.querySelector('.start-btn');
    const btnNext = document.querySelector('.next-btn');
    const questionPage = document.querySelector('.question');
    const indexPage = document.querySelector('.index');
    const question = document.querySelector('.question__question');
    const questionList = document.querySelector('.question__list');
    const questionImg = document.querySelector('.question__img');
    const progressInfo = document.querySelector('.question__top-info span');
    let step = 0;
    const progressBar= document.querySelector('.question__top-progress');
    const progressShow= document.querySelector('.question__top-progress-show');
    const isQuestionPage = document.querySelector('main.question');

    function showQ() {
      if (isQuestionPage.classList.contains('active')) {
         document.querySelector('footer').style.display = 'none';
      } else {
        document.querySelector('footer').style.display = 'block';
      }
      question.innerHTML = questions[step].q;
      let options = '';
      questionImg .innerHTML= ` <img src="${questions[step]['img']}" alt="${questions[step]['img']}">`


      for (let key in questions[step]['opt']){
        options += `  
        <div class="checkbox-wrap">
          <div class="question__checkbox">
            <input id="${key}" class="checkbox" name='${step}'  type="radio" checked>
            <label for="${key}">
              ${questions[step]['opt'][key]}
            </label>
          </div>
        </div>`
      }
      questionList.innerHTML = options;
    }
 

    let progressLine = progressShow.offsetWidth;

    btnNext.addEventListener('click', () => {
      step++;
      const progressBarP = progressBar.offsetWidth;
      const progressReady = progressBarP/questions.length;
      progressLine += progressReady;
      progressShow.style.width = `${progressLine}px`;
      progressInfo.innerHTML = step/questions.length * 100;
      if (step === questions.length) {
        const end = document.querySelector('.end');
        questionPage.classList.remove('active');
        end.classList.add('active');
        document.querySelector('footer').style.display = 'block';
      } else {
        showQ(step);
      }
    })


    btnStart.addEventListener('click', () => {
      questionPage.classList.add('active');
      showQ(step);
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