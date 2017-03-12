// JavaScript Document

document.querySelector('#Ksymbol').addEventListener('click', function (e) {
	e.target.parentNode.href = 'untitled.html';
}, false);


//Should make the login box appear
var loginbox = document.querySelector('#loginbox');
var search1 = document.querySelector('#spbutton2');

search1.onclick = function() {
	var closedcontent = document.querySelector('.contentclose');
	if (loginbox.style.display === 'none') {
		loginbox.style.display = 'block';
		closedcontent.style.opacity = '.5';
	}
	else {
		loginbox.style.display = 'none';
		closedcontent.style.opacity = '1';
	}
};




// Get the modal This is another way of making a pop box
var modal = document.querySelector('#myModal');
var contactmodal = document.querySelector('#contactbox');

// Get the button that opens the modal
var btn = document.querySelector("#spbutton2");
var cbtn = document.querySelector("#contactbtn");//for the contact modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];//for the contact modal

//where the majority of the content is
var webpage = document.querySelectorAll("header, footer, main");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    	modal.style.display = "block";
	for(var i = 0; i < 3; i++) {
		webpage[i].style.opacity = '.3';
	}
};

cbtn.onlick= function() {
		contactmodal.style.display = "block";
	for(var i = 0; i < 3; i++) {
		webpage[i].style.opacity = '.3';
	}
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
	for(var i = 0; i < 3; i++) {
		webpage[i].style.opacity = '1';
	}
};

//when the user clicks on <span> (x), to close the contact page
span2.onclick = function() {
    contactmodal.style.display = "none";
	for(var i = 0; i < 3; i++) {
		webpage[i].style.opacity = '1';
	}
};

// When the user clicks anywhere outside of the modal, close it
window.onclick =  function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
	if( event.target === contactmodal) {
		contactmodal.style.display = "none";
	}
	for(var i = 0; i < 3; i++) {
		webpage[i].style.opacity = 1;
	}
};

//should show a progressbar when the page loads
//But right now it is now working so I need to fix that
window.onload = function hello() {
console.log("Everything is working properly");
var elem = document.querySelector(".progress-bar");   
  var num = 1;
  var cont = true;
  while(cont) {
    if (num <= 100) {
      num++; 
      elem.style.width = num + '%'; 
	  elem.setAttribute('aria-valuenow', num);
	} 
	else {
		cont = false;
		elem.style.wdith = '0%';
		elem.setAttribute('aria-valuenow', 0);
	}
  }
};

/*
This is for the contact page
*
var cform = document.getElementById("contact");
var firstname = document.getElementById("fname");
var lastname = document.getElementById("lname");
var email = document.getElementById("email1");
var phonenum = document.getElementById("phone#");
var comments = document.getElementById("commentsec");

cform.onsubmit = function () {
	if(firstname.value === ""){
		document.getElementById("errorMessage").innerHTML = "Please provide your first name!";
		return false;
	}
	else if(lastname.value === ""){
		document.getElementById("errorMessage").innerHTML = "Please provide your last name!";
		return false;
	}
	else if(email.value === ""){
		document.getElementById("errorMessage").innerHTML = "Please provide your email";
		return false;
	}
	else if(phonenum.value === ""){
		document.getElementById("errorMessage").innerHTML = "Please provide your phone number";
		return false;
	}
	else if(comments.value === ""){
		document.getElementById("errorMessage").innerHTML = "Please provide your comments";
		return false;
	}
	else{
		document.getElementById("errorMessage").innerHTML = "";
		return true;
	}
	
};
*/

/*
var signup = document.getElementById("Signup");

signup.onclick = function() {
	document.getElementById("Signup2").href = "signup.html";
};
*/

/*
When the user clicks on one of the buttons, 
toggle between hiding and showing the dropdown
content
*/

/*
var dropdown1 = document.getElementById("dropbtn1");
var dropdown2 = document.getElementById("dropbtn2");
var dropdown3 = document.getElementById("dropbtn3");

dropdown1.onclick = function() {
	document.getElementById("dropdown1").classList.toggle("show");
};

dropdown2.onclick = function() {
	document.getElementById("dropdown2").classList.toggle("show");
};
dropdown3.onclick = function() {
	document.getElementById("dropdown3").classList.toggle("show");
};

// close the dropdown if the user clicks outside of it
window.onclick = function(e){
	if(!e.target.matches('.dropbtn')){
		
		var dropdowns = document.getElementsByClassName("dropdowncontent");
		
		for(var i = 0; i < dropdowns.length; i++){
			var openDropdown = dropdowns[i];
			
			if (openDropdown.classList.contains('show')) {
        		openDropdown.classList.remove('show');
      		}
		}
	}
};
*/


//should create a popup of the item display some cool information



//should make the search input field popup, is not working right now
/*
document.querySelector('#search1').addEventListener('click', function(e) {
		var space = e.target.parentNode;
		var tempspace = document.createElement("DIV");
		var searching = document.createElement("INPUT");
		var temptext = document.createTextNode("Go");
		var submitting = document.createElement("BUTTON");
		submitting.appendChild(temptext);
		searching.placeholder = "Searching....";
		searching.setAttribute("text", "type");
		searching.style.paddingLet = '430px';
		searching.style.paddingRight = '430px';
		searching.setAttribute("align", "left");
		//searching.className = "form-control";
		tempspace.className = "col-lg-12";
		tempspace.style.paddingLeft = '300px';
		tempspace.style.paddingRight = '300px';
		
	
		var bigbar = document.getElementById("bs-example-navbar-collapse-1");
		
		
		tempspace.appendChild(searching);
		tempspace.appendChild(submitting);
		bigbar.appendChild(tempspace);
		space.appendChild(tempspace);
	
}, false);*/

//makes the searchbar appear
var searchbut = document.querySelector('#search1');
searchbut.onclick = function(){
	var searchbar = document.querySelector('#SearchBar');
	if(searchbar.style.display === 'block'){
		searchbar.style.display = 'none';
	} else{
		searchbar.style.display = 'block';
	}
};


//creates a popup map, where a person can see a google map of the country
document.querySelector('.maps').onclick = function (e){
	if(e.target.className === 'press'){
		var buttonbox = e.target.parentNode;
		var map = buttonbox.querySelector('.preview');
		
		var closeX = map.querySelector('.press');
		//var buttons = buttonbox.querySelector('.press');
		map.style.display = 'block';
		
		closeX.addEventListener('click', function () {
			map.style.display = 'none';
		}, false);
	}
};

var countClick = 0;
document.querySelector('.press').addEventListener('click', function handle(e){
	var prev = document.getElementById('preview1');
	prev.style.display = 'block';
	countClick++;
	if(countClick === 1){
		e.target.addEventListener('click', function handle2(d){
			prev.style.display = 'none';
			d.target.removeEventListener('click', handle2, false);
			countClick = 0;
		}, false);
	}
}, false);


/*Making the searcch bar more active
Need to work on improving this
*/
$(function search1 () {
	var availableTags = [
		"Algerie",
		"Angola",
		"Art",
		"Benin",
		"Botswana",
		"Burkina Faso",
		"Burndi",
		"Cameroon",
		"Cape Verde",
		"Central African Republic",
		"Chad",
		"Comoros",
		"Democratic Republic of the Congo",
		"Republic of the Congo",
		"Djibouti",
		"East Africa",
		"Egypt",
		"Equatorial Guinea",
		"Eritrea",
		"Ethopia",
		"Flag",
		"Gabon",
		"Gambia",
		"Ghana",
		"Guinea",
		"Guinea-Bissau",
		"History",
		"Ivory Coast",
		"Kenya",
		"Lesotho",
		"Liberia",
		"Libya",
		"Madgascar",
		"Malawi",
		"Mali",
		"Map",
		"Mauritania",
		"Mauritius",
		"Morocco",
		"Mozambique",
		"Namibia",
		"Niger",
		"Nigeria",
		"Rwanda",
		"Sao Tome and Principe",
		"Senegal",
		"Seychelles",
		"Sierra Leone",
		"Somalia",
		"South Africa",
		"Sudan",
		"Swaziland",
		"Tanzania",
		"Togo",
		"Tunisia",
		"Uganda",
		"Zambia",
		"Zimbabwe"
	];
	$("#searchbartext").autocomplete({
	source: availableTags
	});
});