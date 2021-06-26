
// traversing the DOM

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn){
    btn.addEventListener("click", function(event){
        const question = event.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});

