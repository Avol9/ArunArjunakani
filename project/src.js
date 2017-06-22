function trackClick()
{
	ga('send', 'event', {
         eventAction: 'click',
         eventCategory: 'Buy Now Buttons',
         eventLabel: 'Buy Now'
      });
	console.log("Hello!");
}