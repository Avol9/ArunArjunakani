var buttons = document.querySelectorAll('.btn');
buttons.forEach( function( btn ) {
   btn.addEventListener('click', function(event) {
      ga('send', 'event', {
         eventAction: 'click',
         eventCategory: 'Buy Now Buttons',
         eventLabel: 'Buy Now'
      });
   });
} );