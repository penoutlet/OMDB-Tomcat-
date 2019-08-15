/**
 * 
 */

window.onload = function(){
	document.getElementById("characterSubmit").addEventListener('click', getCharacter);
}

function getCharacter(){
	let characterId = document.getElementById('characterId').value;
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status ==200){
			let character = JSON.parse(xhttp.responseText);
			setValues(character);
		}
	}
	
	xhttp.open("GET","http://www.omdbapi.com/?t=" + characterId + "&apikey=cd90da81", true);
	xhttp.send();
}

function setValues(character) {
	document.getElementById("characterName").innerHTML = character.Title;
	document.getElementById("year").innerHTML = character.Year;
//	document.getElementById("rating").innerHTML = character.Rated;
	document.getElementById("charPlot").innerHTML = character.Plot;
	let characterImgElement = document.getElementById("characterImg");
	characterImgElement.setAttribute("src", character.Poster);
	document.body.style.backgroundImage="url(" + character.Poster + ")";
}