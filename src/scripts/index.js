function handleModal() {
    const buttons = document.querySelectorAll("button.header__button, button.faq__button");
    const modalContainer = document.querySelector("#modal-info");

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            e.preventDefault();  
            modalContainer.showModal();  
        });
    });

    closeModal();
}

function closeModal() {
    const closeButton = document.querySelector("#modalClose");
    const modalContainer = document.querySelector("#modal-info");

    
    closeButton.addEventListener("click", function () {
        modalContainer.close();  
    });
}

handleModal();
