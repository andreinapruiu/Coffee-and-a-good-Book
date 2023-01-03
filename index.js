document.addEventListener('DOMContentLoaded', (event) => {
	fetch('random_quote.txt')
        .then(response => response.text()) // Extract the text from the response
        .then(quote => {
          // Find the element where the quote will be displayed
          const quoteElement = document.getElementById('quote');
          // Set the text of the element to the quote
          quoteElement.textContent = quote;
        });
	
	setTimeout(function() {
		document.body.classList.add('loaded');
		setTimeout(function() {
			document.getElementById("loader-wrapper").style.display = "none";
		}, 2000)
		}, 4000);
});