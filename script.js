/* Print calendar events line by line. */

var message = "", date="";
document.querySelectorAll("body > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table:nth-child(7) tr").forEach( function(element, index) {
	if(index>1){
		date = element.querySelector("font>b").childNodes[0].textContent;
		element.querySelectorAll("a").forEach( function(element2, index2) {
			message += date;
			message += "\t"; 
			message += element2.textContent;
			message += "\n";
		});
	}
});
console.log(message);