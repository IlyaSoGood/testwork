window.addEventListener('DOMContentLoaded', () => {

    // tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabForm = document.querySelectorAll('[data-form]'),
          buttonsBack = document.querySelectorAll('.button_previous');
    
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fadeIn');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fadeIn');
        tabsContent[i].classList.remove('hide');
        if (i <= 3) {
            tabs[i].classList.add('tabheader__item_active');
        }
        if (tabsContent[i].classList.contains('tabcontent__form')) {
            document.querySelector('.tabheader').classList.add('hide');
        }
    }

    hideTabContent();
    showTabContent();
    
    tabForm.forEach((item, i) => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            hideTabContent();
            showTabContent(i + 1);
        });
    });

    buttonsBack.forEach((item, i) => {
        item.addEventListener('click', () => {
            hideTabContent();
            showTabContent(i);
        });
    });

    // hamburger menu
    const menu = document.querySelector('.header__menu'),
          menuItem = document.querySelectorAll('.header__menu li'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});