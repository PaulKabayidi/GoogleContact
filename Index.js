window.addEventListener('load' , function(){   
    const form = document.getElementById('contact-form');
    form.addEventListener('submit' , function(e){
        e.preventDefault();

        alert('formulaire soumis');
        form.requestFullscreen();
    });
    
    const btn_creer_contact = this.document.getElementById('Ccontact');
    btn_creer_contact.addEventListener('click' , function(e){
          form.hidden = false;
    });
});