window.addEventListener('load' , function()

{
    const form = document.getElementById('contact-form');
    form.addEventListener('submit' , function(e)
    {
        e.preventDefault();

        alert('formulaire soumis');
        form.requestFullscreen();
    }
)
}

);