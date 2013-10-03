
function buscar(){
	var busqueda = document.searcher.txtB.value;
	var	busquedas = document.searcher.selopciones.value;
	var windo = window.open();
	var nudoc = windo.document.open("text/html", "replace");
	//arreglos para manejar cadena de texto, 
	var cad = new Array(38);
	var pags = new Array(38);
	var imgs = new Array(38);
	
	//primer vector con cadenas de texto
	cad[0] = "Apple: MAC 07 | Tablets | CD";
	cad[1] = "Lenovo: A3000 | Tablets";
	cad[2] = "ZTE: V98 | Tablets";
	cad[3] = "Lenovo: S6000 | Tablets";
	cad[4] = "Sony: Xperia Z | Tablets";
	cad[5] = "Samsung: Galaxy Note 8.0 | Tablets";
	cad[6] = "Razer Edge Pro | Tablets";
	cad[7] = "Samsung: Galaxy Tab 2 | Tablets";
	cad[8] = "Google: Nexus 10 | Tablets";
	cad[9] = "Apple: iPad 4 | Tablets";
	cad[10] = "Microsoft: xBox 360 | Consola | Juegos";
	cad[11] = "Sony: Play Station 3 | Consola | Juegos";
	cad[12] = "Nintendo: Wii | Consola | Juegos";
	cad[13] = "Microsoft: xBox one | Consola | Juegos";
	cad[14] = "Sony: Play Station 4 | Consola | Juegos";
	cad[15] = "Nintendo: Wii U | Consola | Juegos";
	cad[16] = "Nvidia: SHIELD | Consola | Juegos";
	cad[17] = "Nintendo: 3DS | Consola | Juegos";
	cad[18] = "AMOLED: Cometa U945-S439 | Ordenador | Computadora | PC | transparente";
	cad[19] = "HP: Pavilion g7-2270us | Ordenador | Computadora | PC";
	cad[20] = "Apple: MacBook Pro | Ordenador | Computadora | PC";
	cad[21] = "Alienware: M17x | Ordenador | Computadora | PC";
	cad[22] = "Samsung: ATIV One 7 | Ordenador | Computadora | PC";
	cad[23] = "Lenovo: ThinkCentre Edge 92z | Ordenador | Computadora | PC";
	cad[24] = "HP: Z420 | Ordenador | Computadora | PC";
	cad[25] = "Falcon: Northwest Fragbox | Ordenador | Computadora | PC";
	cad[26] = "Apple: iMac 27-Inch | Ordenador | Computadora | PC";
	cad[27] = "Gateway: DX4870-UB2B | Ordenador | Computadora | PC";
	cad[28] = "Apple: iphone 5c | SmartPhone | Celular | Telefono";
	cad[29] = "Apple: iPhone6 | SmartPhone | Celular | Telefono| transparente";
	cad[30] = "Black berry: Q10 | SmartPhone | Celular | Telefono";
	cad[31] = "Sony: Xperia ZL | SmartPhone | Celular | Telefono";
	cad[32] = "Nokia: Lumia | SmartPhone | Celular | Telefono";
	cad[33] = "motorola: razr d1 | SmartPhone | Celular | Telefono";
	cad[34] = "Apple: iPhone 4S | SmartPhone | Celular | Telefono";
	cad[35] = "LG: Optimus L7 | SmartPhone | Celular | Telefono";
	cad[36] = "LG: Optimus L9 | SmartPhone | Celular | Telefono";
	cad[37] = "Samsung: Galaxy SIII (S3) | SmartPhone | Celular | Telefono";
	//llenar el array con cadena de  texto
	var a=1;
	var b=1;
	var c=1;
	for (i=0; i<38; i++){
		if (i <=9){
			pags[i]="paginas/tabs/t"+String(i+1)+".html"
		}
		else if(i>=10 && i<=17){
			pags[i]="paginas/cons/n"+String(a)+".html";
			a++;
		}
		else if (i>=18 && i <=27){
			pags[i] = "paginas/comp/o"+String(b)+".html";
			b++;
		}
		else if (i>=28 && i<=37){
			pags[i] = "paginas/cels/c"+String(c)+".html";
			c++;
		}
	}
	//llenando el siguiente array
	a=1;
	b=1;
	c=1;
	for (i=0; i<38; i++){
		if (i <=9){
			imgs[i]="img/tablets/t"+String(i+1)+".jpg"
		}
		else if(i>=10 && i<=17){
			imgs[i]="img/cons/n"+String(a)+".jpg";
			a++;
		}
		else if (i>=18 && i <=27){
			imgs[i] = "img/ord/o"+String(b)+".jpg";
			b++;
		}
		else if (i>=28 && i<=37){
			imgs[i] = "img/cels/c"+String(c)+".jpg";
			c++;
		}
			
	}
	imgs[4] = "img/tablets/t5.png";
	imgs[36] = "img/cels/c9.jpeg";
	imgs[12] = "img/cons/n3.png";
	imgs[16] = "img/cons/n7.png";
	imgs[17] = "img/cons/n8.png";
	if (busqueda.length < 2 || busqueda.length > 35) {
		alert("Se permite la busqueda solo por caracteristicas, para obtener mejores resultados ingrese detalles en el  textbox(menos de 35 caracteres)");
		return true;
	}
	
	nudoc.open();
	//Escribiré la pagina completa :)
	nudoc.write("<!DOCTYPE html>");
	nudoc.write("<html lang=\"es\">");
	nudoc.write("<head>");
	nudoc.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />");
	nudoc.write("<link href=\"../../css/estilo.css\" rel=\"stylesheet\" type=\"text/css\">");
	nudoc.write("<title>Buscar: " + busqueda + "</title>");
	nudoc.write("</head>");
	nudoc.write("<body>");
	nudoc.write("<table align=\"center\" id=\"supermain\"><tr><td>");
	nudoc.write("<header><nav><table align=\"center\"><tr><td id=\"indexmejorado\">");
	nudoc.write("<img src=\"../../img/logo.png\" id=\"logox\" height=\"150\" width=\"270\"></td>");
	nudoc.write("<td><img id=\"slid1\" src=\"../../img/bnnr.gif\"></td>");
	nudoc.write("</tr></table><table align=\"center\"><tr><td><ul id=\"menuu\">");
	nudoc.write("<li><a href=\"../../index.html\">Inicio</a></li>");
	nudoc.write("<li><a href=\"../../paginas/categ.html\">Categorias</a>");
	nudoc.write("<ul><li><a href=\"../../paginas/smaFo.html\">SmartPhones</a></li>");
	nudoc.write("<li><a href=\"../../paginas/table.html\">Tablets</a></li>");
	nudoc.write("<li><a href=\"../../paginas/pcs.html\">Ordenadores</a></li>");
	nudoc.write("<li><a href=\"../../paginas/games.html\">Consolas</a></li>");
	nudoc.write("</ul></li><li><a href=\"../../paginas/proms.html\">Promociones</a></li>");
	nudoc.write("<li><a href=\"../../paginas/us.html\">Nosotros</a></li></ul></td></tr></table></nav></header>");
<!--	alert("la busqueda: " + busqueda + " devolvio:");
	nudoc.write("<p>Resultados de la busqueda: " + busqueda + "<br></p>")
	nudoc.write("<table align=\"center\"><tr>");
	
	var cont = 0;
	var trdo = 0;
	
	for (var i = 0; i<38; i++) {
		strma = data[i].toLowerCase();
		strnam = data[i];
		struri = dats[i];
		imguri = dati[i];
		strbu = busqueda.toLowerCase();
		if(strma.indexOf(strbu)!=-1  ){
			if (strma.indexOf(busquedas)!=-1){
			
			nudoc.write("<td id=\"proms\"><img id=\"mages\" src=\"" + imguri + "\"><br><br>" + strnam + "<br><p id=\"bb\"><a href=\"" + struri + "\">Ver</a></p></td>");
			cont += 1;
			trdo += 1;
		}
		}
		if (trdo == 3){
			nudoc.write("</tr><tr>");
			trdo = 0;
		}		
	}
	if (trdo < 3){
		nudoc.write("</tr>");
	}
	
	if (cont == 0) {
			nudoc.write("<tr style=\"background-color:#F00\"><td>NO SE ENCONTRÓ RESULTADOS PARA SU BUSQUEDA. REVISE LOS FILTROS</td></tr>");
	}
	
	nudoc.write("</table>");
	
	nudoc.write("<footer><hr align=\"center\" color=\"#999999\" size=\"1\" /><p>&copy; Excelents ocnic for life S.A de S.V | Todos los derechos reservados | Lenguaje Interpretado al cliente</p><p><a href=\"../../contacto.html\">Contactenos</a> | <a href=\"../../politics.html\">Pol&iacute;tica del sitio</a> | <a href=\"../../us.html\">Nosotros</a> | <a href=\"../../help.html\">Ayuda</a></p></footer>");
	
	nudoc.write("</td></tr></table>");
	nudoc.write("</body>");
	nudoc.write("</html>");
	
	return true;
}