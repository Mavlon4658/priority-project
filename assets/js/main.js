const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const directionSwp = new Swiper('.direction-swp .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.direction-swp .swp-btn__next',
        prevEl: '.direction-swp .swp-btn__prev',
    }
})

const adviceFormSwp = new Swiper('.advice-form .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    spaceBetween: 0,
    allowTouchMove: false,
    navigation: {
        nextEl: '.advice-form .swiper-slide .btn-blue',
        prevEl: '.advice-form .swiper-slide .prev-btn',
    },
})

const adviceFormCard = document.querySelectorAll('.advice-form .swiper-slide');
const adviceFormLines = document.querySelectorAll('.advice-form .swiper-slide .line span');

const handleAdviceFormLines = () => {
    adviceFormLines.forEach(el => {
        el.style.width = 100  / (adviceFormSwp.slides.length - 1) * (adviceFormSwp.realIndex + 1) + '%';
    })
}

if (adviceFormLines.length) {
    handleAdviceFormLines();
}

if (adviceFormCard.length) {
    adviceFormSwp.on('slideChange', function (e) {
        handleAdviceFormLines();
    });

    adviceFormCard.forEach((el, elIdx) => {
        const checkboxes = el.querySelectorAll('.checkbox-wrap .checkbox');
        const btnBlue  = el.querySelector('.btn-blue');
        if (checkboxes.length) {
            let t = 0;
            checkboxes.forEach(checkbox => {
                checkbox.querySelector('input').oninput = () => {
                    if (checkbox.querySelector('input').checked) {
                        t += 1;
                    } else {
                        t -= 1;
                    }
                    if (t != 0) {
                        btnBlue.classList.remove('disabled');
                    } else {
                        btnBlue.classList.add('disabled');
                    }
                }
            })
        }
    })
}

const accordions = document.querySelectorAll('.accordion');

if (accordions.length) {
    accordions.forEach((item) => {
        const accBtn = item.querySelector('.accordion-btn');
        const accBody = item.querySelector('.accordion-body');
    
        accBtn.addEventListener('click', () => {
            item.classList.toggle('active');
            accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
        });
    });
}

// modals
const modalCls = ['.sales-modal'];

modalCls.forEach(cls => {
    const modal = document.querySelector(cls);
    const modalOpenBtns = document.querySelectorAll(`${cls}__open`);
    const modalCloseBtn = document.querySelector(`${cls} .modal-close`);
    const modalBg = document.querySelector(`${cls} .modal-bg`);

    const modalClose = () => {
        bodyVisible();
        modal.classList.remove('active');
    }

    if (modalOpenBtns.length) {
        modalOpenBtns.forEach(btn => {
            btn.onclick = e => {
                e.preventDefault();
                modal.classList.add('active');
                bodyHidden();
            }
        })
    }

    modalCloseBtn.onclick = () => modalClose();

    modalBg.onclick = () => modalClose();

})
// modals end