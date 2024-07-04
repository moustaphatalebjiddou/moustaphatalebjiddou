// Ajoutez vos scripts JavaScript ici, par exemple pour la validation du formulaire
$('#contact-form').submit(function(e) {
    e.preventDefault();
    
    // Code de traitement du formulaire (par exemple, envoi à un backend ou affichage d'un message de confirmation)
    // Vous pouvez utiliser AJAX pour l'envoi asynchrone si nécessaire
    alert('Formulaire soumis avec succès !');
  });
 
  // Script pour faire défiler le texte dans l'en-tête
  const headerText = document.getElementById('header-text');
  const texts = ['Bienvenue sur mon portfolio !', 'Découvrez mes projets...', 'Contactez-moi pour en savoir plus !'];
  let index = 0;
  
  function changeText() {
      headerText.textContent = texts[index];
      index = (index + 1) % texts.length;
  }
  
  setInterval(changeText, 3000); // Change le texte toutes les 3 secondes
