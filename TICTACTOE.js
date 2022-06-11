if(localStorage.getItem("theme") == "light"){
	imgl.src = "images/dark.png";
	document.body.style.backgroundColor = "white";
	document.getElementById("i1").style.color = "black";
	document.getElementById("i2").style.color = "black";
	document.getElementById("btn").style.backgroundColor = "white";
	document.getElementById("num").style.backgroundColor = "white";
	document.getElementById("num").style.color = "black";
}
let sound = "on"
if(localStorage.getItem("volum") == "off"){
	sound = "off";
	imgr.src = "images/volumeoff.png";
}

let vol = document.getElementById("vol")
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

function darkclick(){
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

function lettersColorChange(l1,l2,l3){
	if(imgl.src.match("images/bright.png")){
		l1.style.backgroundColor = "white"
		l2.style.backgroundColor = "white"
		l3.style.backgroundColor = "white"
	}
	else{
		l1.style.backgroundColor = "rgb(75, 75, 75)"
		l2.style.backgroundColor = "rgb(75, 75, 75)"
		l3.style.backgroundColor = "rgb(75, 75, 75)"
		l1.style.color = "#FFAD05"
		l2.style.color = "#FFAD05"
		l3.style.color = "#FFAD05"
	}
}
function checkboard(){
	if(letter1.innerHTML == letter2.innerHTML && letter2.innerHTML == letter3.innerHTML)
		lettersColorChange(letter1,letter2,letter3);
	else if(letter4.innerHTML == letter5.innerHTML && letter5.innerHTML == letter6.innerHTML)
		lettersColorChange(letter4,letter5,letter6);
	else if(letter7.innerHTML == letter8.innerHTML && letter8.innerHTML == letter9.innerHTML)
		lettersColorChange(letter7,letter8,letter9);
	else if(letter1.innerHTML == letter4.innerHTML && letter4.innerHTML == letter7.innerHTML)
		lettersColorChange(letter1,letter4,letter7);
	else if(letter2.innerHTML == letter5.innerHTML && letter5.innerHTML == letter8.innerHTML)
		lettersColorChange(letter2,letter5,letter8);
	else if(letter3.innerHTML == letter6.innerHTML && letter6.innerHTML == letter9.innerHTML)
		lettersColorChange(letter3,letter6,letter9);
	else if(letter1.innerHTML == letter5.innerHTML && letter5.innerHTML == letter9.innerHTML)
		lettersColorChange(letter1,letter5,letter9);
	else if(letter3.innerHTML == letter5.innerHTML && letter5.innerHTML == letter7.innerHTML)
		lettersColorChange(letter3,letter5,letter7);
	else return false;
	return true;
}

function playagain(){
	document.getElementById("p2").innerHTML = '<button id="btn2" onmouseover="bmover()" onmouseout="bmout()" onclick="history.go(0);">PLAY AGAIN!</button>'
	checkbutton2();
	document.getElementById("btn2").style.height = "6vh";
	document.getElementById("btn2").style.width = "35vh";
	document.getElementById("btn2").style.fontFamily = "fatternregular";
	document.getElementById("btn2").style.fontSize = "4.7vh";
	document.getElementById("btn2").style.margin = "2vh";
	document.getElementById("btn2").style.borderRadius = "0.5vh";
}

function bmover(){
	document.getElementById("btn2").style.filter = "brightness(0.5)"
}
function bmout(){
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
function move(l,text,ox,pwon,b){
	if(l.innerHTML == text){
		l.innerHTML = ox;
		l.style.color = "black";
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
			document.getElementById("p1").innerHTML = pwon;
			playagain();
			b = false;
		}
	}
	return b;
}

let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
btn.addEventListener('click', function(){
	moves++;
	b = true;
	if(player == 1){
		let ox = 'O',pwon = "PLAYER 1 WON!";
		if(num.value == 1)
			b = move(letter1,'1',ox,pwon,b);
		else if(num.value == 2)
			b = move(letter2,'2',ox,pwon,b);
		else if(num.value == 3)
			b = move(letter3,'3',ox,pwon,b);
		else if(num.value == 4)
			b = move(letter4,'4',ox,pwon,b);
		else if(num.value == 5)
			b = move(letter5,'5',ox,pwon,b);
		else if(num.value == 6)
			b = move(letter6,'6',ox,pwon,b);
		else if(num.value == 7)
			b = move(letter7,'7',ox,pwon,b);
		else if(num.value == 8)
			b = move(letter8,'8',ox,pwon,b);
		else if(num.value == 9)
			b = move(letter9,'9',ox,pwon,b);
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
		let ox = 'X',pwon = "PLAYER 2 WON!";
		if(num.value == 1)
			b = move(letter1,'1',ox,pwon,b);
		else if(num.value == 2)
			b = move(letter2,'2',ox,pwon,b);
		else if(num.value == 3)
			b = move(letter3,'3',ox,pwon,b);
		else if(num.value == 4)
			b = move(letter4,'4',ox,pwon,b);
		else if(num.value == 5)
			b = move(letter5,'5',ox,pwon,b);
		else if(num.value == 6)
			b = move(letter6,'6',ox,pwon,b);
		else if(num.value == 7)
			b = move(letter7,'7',ox,pwon,b);
		else if(num.value == 8)
			b = move(letter8,'8',ox,pwon,b);
		else if(num.value == 9)
			b = move(letter9,'9',ox,pwon,b);
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