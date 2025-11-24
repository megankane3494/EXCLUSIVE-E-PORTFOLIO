// template_vxj9l8h 
// service_w0il5jl 
// v0M6JB80T49lcdZ4K 

let IsModalOpen = false;
let contrastToggle = false;

function toggleContrast () {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove('dark-theme')
    }

}




function contact (event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_w0il5jl',
        'template_vxj9l8h',
        event.target,
        'v0M6JB80T49lcdZ4K'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            'The email service is temporarily unavailable. Please contact me directly at megankane3494@gmail.com.'
        );
    })
    }

    let isModalOpen = false
    function toggleModal() {
        if (isModalOpen) {
            isModalOpen = false
            return document.body.classList.remove('modal--open')
        }
        isModalOpen = true;
            return document.body.classList += " modal--open";
        }