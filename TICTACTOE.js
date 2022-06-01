if(localStorage.getItem("theme") == "light"){
	imgl.src = "images/dark.png";
	document.body.style.backgroundColor = "white";
	document.getElementById("i1").style.color = "black";
	document.getElementById("i2").style.color = "black";
	document.getElementById("btn").style.backgroundColor = "white";
	document.getElementById("num").style.backgroundColor = "white";
	document.getElementById("num").style.color = "black";
	document.getElementById("num").focus();
	document.getElementById("num").select();
}
let sound = "on"
if(localStorage.getItem("volum") == "off"){
	sound = "off";
	imgr.src = "images/volumeoff.png";
}

let vol = document.getElementById("vol")
vol.addEventListener('mouseover', function(){
	vol.style.filter = "brightness(0.5)"
});
vol.addEventListener('mouseout', function(){
	vol.style.filter = "brightness(1)"
});
vol.addEventListener('click', function(){
	if(imgr.src.match("images/volumeon.png")){
		imgr.src = "images/volumeoff.png";
		sound = "off";
		localStorage.setItem("volum", "off");
	}
	else{
		imgr.src = "images/volumeon.png";
		sound = "on";
		localStorage.setItem("volum", "on");
	}
});

let dark = document.getElementById("dark")
dark.addEventListener('mouseover', function(){
	dark.style.filter = "brightness(0.5)"
});
dark.addEventListener('mouseout', function(){
	dark.style.filter = "brightness(1)"
});
function dc(){
	if(imgl.src.match("images/bright.png")){
		imgl.src = "images/dark.png";
		checkboard();
		checkbutton2();
		localStorage.setItem("theme", "light");
		document.body.style.backgroundColor = "white";
		document.getElementById("i1").style.color = "black";
		document.getElementById("i2").style.color = "black";
		document.getElementById("btn").style.backgroundColor = "white";
		document.getElementById("num").style.backgroundColor = "white";
		document.getElementById("num").style.color = "black";
		num.focus();
		num.select();
	}
	else{
		imgl.src = "images/bright.png";
		checkboard();
		checkbutton2();
		localStorage.setItem("theme", "dark");
		document.body.style.backgroundColor = "black";
		document.getElementById("i1").style.color = "#FFAD05";
		document.getElementById("i2").style.color = "#FFAD05";
		document.getElementById("btn").style.backgroundColor = "#FFAD05";
		document.getElementById("num").style.backgroundColor = "black";
		document.getElementById("num").style.color = "#FFAD05";
		num.focus();
		num.select();
	}
}

let btn = document.getElementById("btn")
btn.addEventListener('mouseover', function(){
	btn.style.filter = "brightness(0.5)"
});
btn.addEventListener('mouseout', function(){
	btn.style.filter = "brightness(1)"
});

let moves = 0,player = 1;
let num = document.getElementById("num");
num.focus();
num.select();

num.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
	  	event.preventDefault();
	  	document.getElementById("btn").click();
	}
});

letter1 = document.getElementById('letter1')
letter2 = document.getElementById('letter2')
letter3 = document.getElementById('letter3')
letter4 = document.getElementById('letter4')
letter5 = document.getElementById('letter5')
letter6 = document.getElementById('letter6')
letter7 = document.getElementById('letter7')
letter8 = document.getElementById('letter8')
letter9 = document.getElementById('letter9')

function checkboard(){
	if(letter1.innerHTML == letter2.innerHTML && letter2.innerHTML == letter3.innerHTML){
		if(imgl.src.match("images/bright.png")){
			letter1.style.backgroundColor = "white"
			letter2.style.backgroundColor = "white"
			letter3.style.backgroundColor = "white"
		}
		else{
			letter1.style.backgroundColor = "rgb(75, 75, 75)"
			letter2.style.backgroundColor = "rgb(75, 75, 75)"
			letter3.style.backgroundColor = "rgb(75, 75, 75)"
			letter1.style.color = "#FFAD05"
			letter2.style.color = "#FFAD05"
			letter3.style.color = "#FFAD05"
		}
		return true;
	}
	else if(letter4.innerHTML == letter5.innerHTML && letter5.innerHTML == letter6.innerHTML){
		if(imgl.src.match("images/bright.png")){
			letter4.style.backgroundColor = "white"
			letter5.style.backgroundColor = "white"
			letter6.style.backgroundColor = "white"
		}
		else{
			letter4.style.backgroundColor = "rgb(75, 75, 75)"
			letter5.style.backgroundColor = "rgb(75, 75, 75)"
			letter6.style.backgroundColor = "rgb(75, 75, 75)"
			letter4.style.color = "#FFAD05"
			letter5.style.color = "#FFAD05"
			letter6.style.color = "#FFAD05"
		}
		return true;
	}
		
	else if(letter7.innerHTML == letter8.innerHTML && letter8.innerHTML == letter9.innerHTML){
		if(imgl.src.match("images/bright.png")){
			letter7.style.backgroundColor = "white"
			letter8.style.backgroundColor = "white"
			letter9.style.backgroundColor = "white"
		}
		else{
			letter7.style.backgroundColor = "rgb(75, 75, 75)"
			letter8.style.backgroundColor = "rgb(75, 75, 75)"
			letter9.style.backgroundColor = "rgb(75, 75, 75)"
			letter7.style.color = "#FFAD05"
			letter8.style.color = "#FFAD05"
			letter9.style.color = "#FFAD05"
		}
		return true;
	}
	else if(letter1.innerHTML == letter4.innerHTML && letter4.innerHTML == letter7.innerHTML){
		if(imgl.src.match("images/bright.png")){
			letter1.style.backgroundColor = "white"
			letter4.style.backgroundColor = "white"
			letter7.style.backgroundColor = "white"
		}
		else{
			letter1.style.backgroundColor = "rgb(75, 75, 75)"
			letter4.style.backgroundColor = "rgb(75, 75, 75)"
			letter7.style.backgroundColor = "rgb(75, 75, 75)"
			letter1.style.color = "#FFAD05"
			letter4.style.color = "#FFAD05"
			letter7.style.color = "#FFAD05"
		}
		return true;
	}
	else if(letter2.innerHTML == letter5.innerHTML && letter5.innerHTML == letter8.innerHTML){
		if(imgl.src.match("images/bright.png")){
			letter2.style.backgroundColor = "white"
			letter5.style.backgroundColor = "white"
			letter8.style.backgroundColor = "white"
		}
		else{
			letter2.style.backgroundColor = "rgb(75, 75, 75)"
			letter5.style.backgroundColor = "rgb(75, 75, 75)"
			letter8.style.backgroundColor = "rgb(75, 75, 75)"
			letter2.style.color = "#FFAD05"
			letter5.style.color = "#FFAD05"
			letter8.style.color = "#FFAD05"
		}
		return true;
	}
	else if(letter3.innerHTML == letter6.innerHTML && letter6.innerHTML == letter9.innerHTML){
		if(imgl.src.match("images/bright.png")){
			letter3.style.backgroundColor = "white"
			letter6.style.backgroundColor = "white"
			letter9.style.backgroundColor = "white"
		}
		else{
			letter3.style.backgroundColor = "rgb(75, 75, 75)"
			letter6.style.backgroundColor = "rgb(75, 75, 75)"
			letter9.style.backgroundColor = "rgb(75, 75, 75)"
			letter3.style.color = "#FFAD05"
			letter6.style.color = "#FFAD05"
			letter9.style.color = "#FFAD05"
		}
		return true;
	}
	else if(letter1.innerHTML == letter5.innerHTML && letter5.innerHTML == letter9.innerHTML){
		if(imgl.src.match("images/bright.png")){
			letter1.style.backgroundColor = "white"
			letter5.style.backgroundColor = "white"
			letter9.style.backgroundColor = "white"
		}
		else{
			letter1.style.backgroundColor = "rgb(75, 75, 75)"
			letter5.style.backgroundColor = "rgb(75, 75, 75)"
			letter9.style.backgroundColor = "rgb(75, 75, 75)"
			letter1.style.color = "#FFAD05"
			letter5.style.color = "#FFAD05"
			letter9.style.color = "#FFAD05"
		}
		return true;
	}
	else if(letter3.innerHTML == letter5.innerHTML && letter5.innerHTML == letter7.innerHTML){
		if(imgl.src.match("images/bright.png")){
			letter3.style.backgroundColor = "white"
			letter5.style.backgroundColor = "white"
			letter7.style.backgroundColor = "white"
		}
		else{
			letter3.style.backgroundColor = "rgb(75, 75, 75)"
			letter5.style.backgroundColor = "rgb(75, 75, 75)"
			letter7.style.backgroundColor = "rgb(75, 75, 75)"
			letter3.style.color = "#FFAD05"
			letter5.style.color = "#FFAD05"
			letter7.style.color = "#FFAD05"
		}
		return true;
	}
	return false;
}

function playagain(){
	document.getElementById("p2").innerHTML = '<button id="btn2" onmouseover="bmo()" onmouseout="bmou()" onclick="history.go(0);">PLAY AGAIN!</button>'
	if(imgl.src.match("images/bright.png")){
		document.getElementById("btn2").style.color = "#FFAD05";
		document.getElementById("btn2").style.backgroundColor = "white";
		document.getElementById("btn2").style.border = "0.5vh solid #FFAD05";
	}
	else{
		document.getElementById("btn2").style.color = "black";
		document.getElementById("btn2").style.backgroundColor = "#FFAD05";
		document.getElementById("btn2").style.border = "0.5vh solid black";
	}
	document.getElementById("btn2").style.height = "6vh";
	document.getElementById("btn2").style.width = "35vh";
	document.getElementById("btn2").style.fontFamily = "fatternregular";
	document.getElementById("btn2").style.fontSize = "4.7vh";
	document.getElementById("btn2").style.margin = "2vh";
	document.getElementById("btn2").style.borderRadius = "0.5vh";
}

function bmo(){
	document.getElementById("btn2").style.filter = "brightness(0.5)"
}
function bmou(){
	document.getElementById("btn2").style.filter = "brightness(1)"
}

function checkbutton2(){
	if(!(document.getElementById("btn2")))
		return;
	if(imgl.src.match("images/dark.png")){
		document.getElementById("btn2").style.color = "black";
		document.getElementById("btn2").style.backgroundColor = "#FFAD05";
		document.getElementById("btn2").style.border = "0.5vh solid black";
	}
	else{
		document.getElementById("btn2").style.color = "#FFAD05";
		document.getElementById("btn2").style.backgroundColor = "white";
		document.getElementById("btn2").style.border = "0.5vh solid #FFAD05";
	}
}

let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
btn.addEventListener('click', function(){
	moves++;
	let b = true;
	if(player == 1){
		if(num.value == 1){
			if(document.getElementById("letter1").innerHTML == '1'){
				document.getElementById("letter1").innerHTML = 'O';
				document.getElementById("letter1").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			} 
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 1 WON!";
					playagain();
					b = false;
				}
			}
		}	
		else if(num.value == 2){
			if(document.getElementById("letter2").innerHTML == '2'){
				document.getElementById("letter2").innerHTML = 'O';
				document.getElementById("letter2").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 1 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 3){
			if(document.getElementById("letter3").innerHTML == '3'){
				document.getElementById("letter3").innerHTML = 'O';
				document.getElementById("letter3").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 1 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 4){
			if(document.getElementById("letter4").innerHTML == '4'){
				document.getElementById("letter4").innerHTML = 'O';
				document.getElementById("letter4").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 1 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 5){
			if(document.getElementById("letter5").innerHTML == '5'){
				document.getElementById("letter5").innerHTML = 'O';
				document.getElementById("letter5").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 1 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 6){
			if(document.getElementById("letter6").innerHTML == '6'){
				document.getElementById("letter6").innerHTML = 'O';
				document.getElementById("letter6").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 1 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 7){
			if(document.getElementById("letter7").innerHTML == '7'){
				document.getElementById("letter7").innerHTML = 'O';
				document.getElementById("letter7").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 1 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 8){
			if(document.getElementById("letter8").innerHTML == '8'){
				document.getElementById("letter8").innerHTML = 'O';
				document.getElementById("letter8").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 1 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 9){
			if(document.getElementById("letter9").innerHTML == '9'){
				document.getElementById("letter9").innerHTML = 'O';
				document.getElementById("letter9").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 1 WON!";
					playagain();
					b = false;
				}
			}
		}
		else{
			alert("Number must be between 1 and 9.");
			b = false;
			moves--;
		}
		if(b && moves != 9){
			if(sound == "on")
				audio1.play();
			player = 2;
			document.getElementById("p1").innerHTML = 'PLAYER 2 MOVE!';
 		}
		if(moves == 9){
			audio2.play();
			document.getElementById("p1").innerHTML = "GAME DRAW!";
			playagain();
		}
	}
	else if(player == 2){
		if(num.value == 1){
			if(document.getElementById("letter1").innerHTML == '1'){
				document.getElementById("letter1").innerHTML = 'X';
				document.getElementById("letter1").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 2 WON!";
					playagain();
					b = false;
				}
			}
		}	
		else if(num.value == 2){
			if(document.getElementById("letter2").innerHTML == '2'){
				document.getElementById("letter2").innerHTML = 'X';
				document.getElementById("letter2").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 2 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 3){
			if(document.getElementById("letter3").innerHTML == '3'){
				document.getElementById("letter3").innerHTML = 'X';
				document.getElementById("letter3").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 2 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 4){
			if(document.getElementById("letter4").innerHTML == '4'){
				document.getElementById("letter4").innerHTML = 'X';
				document.getElementById("letter4").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 2 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 5){
			if(document.getElementById("letter5").innerHTML == '5'){
				document.getElementById("letter5").innerHTML = 'X';
				document.getElementById("letter5").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 2 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 6){
			if(document.getElementById("letter6").innerHTML == '6'){
				document.getElementById("letter6").innerHTML = 'X';
				document.getElementById("letter6").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 2 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 7){
			if(document.getElementById("letter7").innerHTML == '7'){
				document.getElementById("letter7").innerHTML = 'X';
				document.getElementById("letter7").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 2 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 8){
			if(document.getElementById("letter8").innerHTML == '8'){
				document.getElementById("letter8").innerHTML = 'X';
				document.getElementById("letter8").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 2 WON!";
					playagain();
					b = false;
				}
			}
		}
		else if(num.value == 9){
			if(document.getElementById("letter9").innerHTML == '9'){
				document.getElementById("letter9").innerHTML = 'X';
				document.getElementById("letter9").style.color = "black";
			}
			else{
				moves--;
				b = false;
				alert("Enter another number.");
			}
			if(moves >= 5){
				if(checkboard()){
					if(sound == "on")
						audio2.play();
					document.getElementById("p1").innerHTML = "PLAYER 2 WON!";
					playagain();
					b = false;
				}
			}
		}
		else{
			alert("Number must be between 1 and 9.");
			b = false;
			moves--;
		}
		if(b){
			if(sound == "on")
				audio1.play();
			player = 1;
			document.getElementById("p1").innerHTML = 'PLAYER 1 MOVE!';
		}
	}
	document.getElementById("num").value = ""
	num.focus();
	num.select();
});