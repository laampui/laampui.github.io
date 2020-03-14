$('.dropdown-trigger').dropdown();

$(document).ready(function(){
  $('.sidenav').sidenav();
});


window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  // e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  // showInstallPromotion();
});
/*
let buttonInstall = document.querySelector('footer')
buttonInstall.addEventListener('click', (e) => {
  // Hide the app provided install promotion
  // hideMyInstallPromotion();
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      alert('User accepted the install prompt');
    } else {
      alert('User dismissed the install prompt');
    }
  })
});
*/
