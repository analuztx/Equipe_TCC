/* Lê o XML */
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudo");

/* Exibe o conteúdo */

function funcaoTitulo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 style='font-family:Courier New, Courier, monospace; font-weight: bold; text-align: center'>" + x[i].getElementsByTagName("tituloinicio")[0].childNodes[0].nodeValue + "</h2>");}}

function funcaoSubTitulo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p style='text-align: center;'>" + x[i].getElementsByTagName("titulosobreinicio")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaoConteudo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='featurette-heading' data-anime='left'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h1>" +
			"<h3 data-anime='right'>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</h3>");
	}
}
function funcaosobre() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 data-anime='left' style='color:#FFF'>" + x[i].getElementsByTagName("titulosobre")[0].childNodes[0].nodeValue + "</h1>");
	}
}
function funcaosobreconteudo() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 style='color: #FFF'>" + x[i].getElementsByTagName("corposobre1")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaoapp() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 id='app'>" + x[i].getElementsByTagName("tituloapp")[0].childNodes[0].nodeValue + "</h1>" +
			"<h4>" + x[i].getElementsByTagName("corpoapp")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcaotituloarduino() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='subtitle-two' data-anime='left' style='margin-left: 5%'>" + x[i].getElementsByTagName("tituloarduino")[0].childNodes[0].nodeValue + "</h1>");
	}
}

function funcaosobrearduino() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 class='description-web' data-anime='right'>" + x[i].getElementsByTagName("corpoarduino")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaotituloweb() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='subtitle-two' data-anime='left' style='margin-left: -2%'>" + x[i].getElementsByTagName("tituloweb")[0].childNodes[0].nodeValue + "</h1>");
	}
}

function funcaosobreweb() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 class='description-web' data-anime='right'>" + x[i].getElementsByTagName("corpoweb")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaotituloapp() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='subtitle-two' data-anime='left' style='margin-left: 2%'>" + x[i].getElementsByTagName("tituloapp")[0].childNodes[0].nodeValue + "</h1>");
	}
}

function funcaosobreapp() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 class='description-web' data-anime='right'>" + x[i].getElementsByTagName("corpoapp")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaosobre2app() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 class='description-web' data-anime='right'>" + x[i].getElementsByTagName("corpoapp2")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function funcaotitulodistanciamento() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h1 class='featurette-heading' style='margin-left: -5%'>" + x[i].getElementsByTagName("titulodistanciamento")[0].childNodes[0].nodeValue + "</h1>");
	}
}

function funcaosobredistanciamento() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h3 style='text-align:left; font-weight: bold'>" + x[i].getElementsByTagName("sobredistanciamento")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function footer() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='text-center text-muted'>" + x[i].getElementsByTagName("footer")[0].childNodes[0].nodeValue + "</h3>");
	}
}

function footer1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='text-center text-muted'>" + x[i].getElementsByTagName("footer2")[0].childNodes[0].nodeValue + "</h3>");
	}
}

