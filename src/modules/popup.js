const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const enableBodyScroll = bodyScrollLock.enableBodyScroll;

export default {
  init() {
    let openPopupButtons = document.querySelectorAll('.open-popup'); 
    const targetElement = document.querySelector('.popup');

    const isApple = function iOS() {
      return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform)
      // iPad on iOS 13 detection
      || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    }

    // console.log('isApple', isApple())

    openPopupButtons.forEach((button) => { 
      button.addEventListener('click', (e) => { 
          e.preventDefault();
          const type = button.dataset.type;
          const title = button.dataset.title ? button.dataset.title : '';

         

          const popupBg = document.querySelector(`.popup__bg.${type}`); 
       
          let popup = popupBg.querySelector('.popup'); 
          
          popupBg.classList.add('active'); 
          popup.classList.add('active'); 

          const popupTitle = popup.querySelector('.popup__title'); 
          if (title) {
            popupTitle.textContent = `Получите подборку ${title}`;
          }


          if (type !== 'policy') {
            disableBodyScroll(targetElement);
          } 
          
          let closePopupButton = popupBg.querySelector('.close-popup');


          closePopupButton.addEventListener('click',() => { 
           //  console.log('closePopupButton');
            popupBg.classList.remove('active'); 
            popup.classList.remove('active'); 
            enableBodyScroll(targetElement);
        });
      
          document.addEventListener('click', (e) => { 
            if(e.target === popupBg) { 
                popupBg.classList.remove('active'); 
                popup.classList.remove('active'); 
                enableBodyScroll(targetElement);
            }
          });
      })
  });
  },
}