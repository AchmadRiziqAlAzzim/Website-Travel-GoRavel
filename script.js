const text = "Bersama GoRavel...";
let index = 0;

function type() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 80);
    }
}


const links = document.querySelectorAll(".nav-link");
links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active-link"));
        this.classList.add("active-link");
    });
});

const time = new Date().getHours();
const background = document.getElementById('background');
const icon = document.getElementById('main-icon');
if (time >= 18 || time >= 24) {
    background.style.backgroundColor = '#00040f'

    document.querySelectorAll('.card').forEach(card => {
        card.style.backgroundColor = 'transparent';
        card.style.color = 'white';
        card.style.border = '2px solid #183153';
    });

    document.querySelectorAll('.button-border').forEach(btn_border => {
        btn_border.style.color = 'white';
        btn_border.style.background = 'linear-gradient(90deg, #0040ff, #002fbc)'
    });

    document.querySelectorAll('.accordion-item').forEach(accordion_item => {
        accordion_item.style.color = 'white';
        accordion_item.style.backgroundColor = 'transparent';
        accordion_item.style.border = '3px solid #183153';
    });

    document.querySelectorAll('.accordion-button').forEach(accordion_button => {
        accordion_button.style.color = 'white';
        accordion_button.style.backgroundColor = 'transparent';
    });

    document.querySelectorAll('.bg-nav').forEach(bg_nav => {
        bg_nav.style.setProperty("background-color", "#00040f", "important");
    });


    document.querySelectorAll('.font-card-blue').forEach(font_card_blue => {
        font_card_blue.style.setProperty('color', '#ffbf00', 'important');
    });

    document.querySelectorAll('.font-card').forEach(font_card => {
        font_card.style.setProperty('color', '#0040ff', 'important');
    });

    document.querySelectorAll('.font').forEach(font => {
        font.style.setProperty('color', 'white', 'important');
    });

    document.querySelectorAll('.header2').forEach(header2 => {
        header2.style.setProperty('color', '#0040ff', 'important');
    });

    document.querySelectorAll('h1').forEach(h1 => {
        h1.style.color = '#fff';
    });

    document.querySelectorAll('span').forEach(span => {
        span.style.setProperty('color', '#fff', 'important');
    });

    document.querySelectorAll('p').forEach(p => {
        p.style.setProperty('color', '#fff', 'important');
    });

    document.querySelectorAll('a').forEach(a => {
        a.style.setProperty('color', '#fff', 'important');
    });
} else if (time < 1 || time <= 6) {
    background.style.backgroundColor = '#00040f'

    document.querySelectorAll('.card').forEach(card => {
        card.style.backgroundColor = 'transparent';
        card.style.color = 'white';
        card.style.border = '2px solid #183153';
    });

    document.querySelectorAll('.button-border').forEach(btn_border => {
        btn_border.style.color = 'white';
        btn_border.style.background = 'linear-gradient(90deg, #0040ff, #002fbc)'
    });

    document.querySelectorAll('.accordion-item').forEach(accordion_item => {
        accordion_item.style.color = 'white';
        accordion_item.style.backgroundColor = 'transparent';
        accordion_item.style.border = '3px solid #183153';
    });

    document.querySelectorAll('.accordion-button').forEach(accordion_button => {
        accordion_button.style.color = 'white';
        accordion_button.style.backgroundColor = 'transparent';
    });

    document.querySelectorAll('.bg-nav').forEach(bg_nav => {
        bg_nav.style.setProperty("background-color", "#00040f", "important");
    });


    document.querySelectorAll('.font-card-blue').forEach(font_card_blue => {
        font_card_blue.style.setProperty('color', '#ffbf00', 'important');
    });

    document.querySelectorAll('.font-card').forEach(font_card => {
        font_card.style.setProperty('color', '#0040ff', 'important');
    });

    document.querySelectorAll('.font').forEach(font => {
        font.style.setProperty('color', 'white', 'important');
    });

    document.querySelectorAll('.header2').forEach(header2 => {
        header2.style.setProperty('color', '#0040ff', 'important');
    });

    document.querySelectorAll('h1').forEach(h1 => {
        h1.style.color = '#fff';
    });

    document.querySelectorAll('span').forEach(span => {
        span.style.setProperty('color', '#fff', 'important');
    });

    document.querySelectorAll('p').forEach(p => {
        p.style.setProperty('color', '#fff', 'important');
    });

    document.querySelectorAll('a').forEach(a => {
        a.style.setProperty('color', '#fff', 'important');
    });
}