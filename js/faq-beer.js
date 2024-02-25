const faqButton = document.querySelectorAll(".faq__list-item_button");

for(let i of faqButton) {
    i.addEventListener('click', function (e) {
        if (e.target.innerText === '-') {
            e.target.innerText = '+';
            e.target.parentElement.parentElement.querySelector('.faq__list-answer').style.display = 'none';
        } else {
            let buttons = e.target.parentElement.parentElement.parentElement.querySelectorAll('.faq__list-item_button')
            for (let btn of buttons) {
                btn.innerText = '+';
            }

            e.target.innerText = '-';
            let child = e.target.parentElement.parentElement.parentElement.querySelectorAll('.faq__list-answer')
            for (let c of child) {
                c.style.display = 'none'
            }
            
            e.target.parentElement.parentElement.querySelector('.faq__list-answer').style.display = 'block';
        }

    })
}
