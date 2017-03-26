var jugador1 = {};
var jugador2 = {};

var names = [];
var points = [];

if (localStorage.rankNames) {
	names = JSON.parse(localStorage.getItem("rankNames"));
	points = JSON.parse(localStorage.getItem("rankPoints"));
}

function ani() {
	$(this).siblings('img').stop();
	$(this).siblings('img').animate({
		width: "100", 
		height: "100"
	});
	$(this).stop();
	$(this).animate({
		width: "140", 
		height: "140"
	});
};

function playerExists(names, player) {
	for (var i=0; i<names.length;i++) {
		if (player===names[i]) return true;
	}
	return false;
}

function increasePoints(names,points,player) {
	for (var i=0; i<names.length;i++) {
		if (player===names[i]) points[i]+=1;
	}
}

function swap(obj,j) {
	var aux = obj[j-1];
	obj[j-1]=obj[j];
	obj[j]=aux;
}

function sortRanking(names,points) {
	for (var i=0;i<points.length;i++) {
		for (var j=i; j>0 && points[j]>points[j-1];j--) {
			swap(names,j);
			swap(points,j); 
		}
	}
}

function returnSize() {
	$(this).parent().children('img').stop();
	$(this).parent().children('img').animate({
		width: "120", 
		height: "120"
	});
};

results = {
	rock: {rock:"draw",paper:"player2Win", scissors:"player1Win", spock:"player2Win", lizard:"player1Win"},
	paper: {rock:"player1Win", paper:"draw", scissors:"player2Win", spock:"player1Win", lizard:"player2Win"},
	scissors: {rock:"player2Win", paper:"player1Win", scissors:"draw", spock:"player2Win", lizard:"player1Win"},
	spock: {rock:"player1Win", paper:"player2Win", scissors:"player1Win", spock:"draw", lizard:"player2Win"},
	lizard: {rock:"player2Win", paper:"player1Win", scissors:"player2Win", spock:"player1Win", lizard:"draw"}
};

$(document).ready(function() {
	var player1name = window.prompt("Nombre del jugador 1");
	if (!playerExists(names,player1name)) {
		names.push(player1name);
		points.push(0);
	}
	var player2name = window.prompt("Nombre del jugador 2");
	if (!playerExists(names,player2name)) {
		names.push(player2name);
		points.push(0);
	}
	$('#fight').click(function() {
		$('#fight, #rank, #player1Win, #player2Win, #draw, #jugador2>img, #consola').hide();
		$('img').css({'height':'120px', 'width':'120px', 'position':'relative', 'top':'0px', 'left':'0px'});
		$('#jugador1>img').show();
		$('#jugador1>h3').css('background-color','lightblue');
		$('#jugador1>img').hover(ani,returnSize);
		$('#jugador1>img').click(function() {
			jugador1=$(this);
			$('#jugador1>img').off();
			$('#jugador1>img').hide();
			$('#jugador2>img').show();
			$('#jugador1>h3').css('background-color','transparent');
			$('#jugador2>h3').css('background-color','lightblue');
		});
		$('#jugador2>img').hover(ani,returnSize);
		$('#jugador2>img').click(function() {
			jugador2=$(this);	
			$('#jugador2>img').off();
			$('#jugador2>img').hide();
			$('#jugador2>h3').css('background-color','transparent');
			jugador1 .add(jugador2).css('position','absolute');
			jugador1.add(jugador2).show();
			jugador1.animate({
				top: "150",
				left: "150"
			});
			jugador2.animate({
				top: "150",
				left: "-150"
			});
			
			jugador1=jugador1.attr('alt');
			jugador2=jugador2.attr('alt');
			$("#"+results[jugador1][jugador2]).show();
			if (results[jugador1][jugador2] === "player1Win") increasePoints(names,points,player1name);
			if (results[jugador1][jugador2] === "player2Win") increasePoints(names,points,player2name);
			
			localStorage.setItem("rankNames", JSON.stringify(names));
			localStorage.setItem("rankPoints", JSON.stringify(points));
			$('#fight, #rank').show();
		});
	});
	$('#rank').click(function() {
		sortRanking(names,points);
		$('#consola').show();
		var ranking = "<table>";
		for (var i=0;i<names.length;i++) {		
			if (i==0) ranking+= "<tr><th>Nombre</th><th>Victorias</th></tr>";
			ranking+="<tr><td>"+names[i]+"</td><td>"+points[i]+"</td></tr>";
		}
		ranking+="</table>";
		document.getElementById('ranking').innerHTML = ranking;
	});
});

