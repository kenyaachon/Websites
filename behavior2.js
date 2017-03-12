// JavaScript Document

//allows for you to see a preview of the content of a webpage
//need to work on making it custom to the individual webpages,
//probably have it read from a file
var countClick = 0;
document.querySelector('.grid').addEventListener('click', function(e){
	if(e.target.className === 'press'){
		countClick++;
		var button = e.target.parentNode;
		//var box = button.parentNode;
		
		var temp = document.createElement("div");
		temp.className = 'preview';
		
		var text1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
		var text2 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
		var text3 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
		var text4 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
		var text5 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.");
		
		var para1 = document.createElement('p');
		var para2 = document.createElement('p');
		var para3 = document.createElement('p');
		var para4 = document.createElement('p');
		var para5 = document.createElement('p');
		
		var closeX = document.createTextNode(' X ');
		var buttonX = document.createElement('button');
		
		buttonX.appendChild(closeX);
	
		para1.appendChild(text1);
		para2.appendChild(text2);
		para3.appendChild(text3);
		para4.appendChild(text4);
		para5.appendChild(text5);
		
		temp.appendChild(para1);
		temp.appendChild(para2);
		temp.appendChild(para3);
		temp.appendChild(para4);
		temp.appendChild(para5);
		temp.appendChild(buttonX);
		
		button.appendChild(temp);
		
		temp.style.display = 'block';
		
		
		buttonX.addEventListener('click', function(){
			temp.style.display = 'none';
			
		}, false);
	/*
	if(countClick === 1){
		e.target.addEventListener('click', function handle2(){
			//prev.style.display = 'none';
			//var myNode = button.querySelector('div.preview');
			temp.style.display = 'none';
			button.removeChild(temp);
			e.target.removeEventListener('click', handle2, false);
			countClick = 0;
		}, false);
	}*/

	}
}, false);

