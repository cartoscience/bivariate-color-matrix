// Huebee by @Metafizzy
var hueb = new Huebee( '.color-input', {
  saturations: 3,
  notation: "hex",
  hues: 9,
  staticOpen: true
});

var hueb2 = new Huebee( '.color-input2', {
  saturations: 3,
  notation: "hex",
  hues: 9,
  staticOpen: true
});

// Default initialization colors
// Variable 1
var L1 = "#E8E8E8";
var M1 = "#F47474";
var H1 = "#FF0000";
// Variable 2
var L2 = "#E8E8E8";
var M2 = "#7474F4";
var H2 = "#0000FF";
// Grid
var H1L2 = "#F47474";
var H1M2 = "#BA3A7A";
var H1H2 = "#800080";
var M1L2 = "#EEAEAE";
var M1M2 = "#B474B4";
var M1H2 = "#7A3ABA";
var L1L2 = "#E8E8E8";
var L1M2 = "#AEAEEE";
var L1H2 = "#7474F4";

// Variable one canvases initalization symbology
var c = document.getElementById("myCanvas");
c.style.backgroundColor = H1;
var ctx = c.getContext("2d");
ctx.textAlign = "center";
ctx.fillStyle = "#e8e8e8";
ctx.fillText(H1,30,33);

var c2 = document.getElementById("myCanvas2");
c2.style.backgroundColor = M1;
var ctx2 = c2.getContext("2d");
ctx2.textAlign = "center";
ctx2.fillText(M1,30,33);

var c3 = document.getElementById("myCanvas3");
c3.style.backgroundColor = L1;
var ctx3 = c3.getContext("2d");
ctx3.textAlign = "center";
ctx3.fillText(L1,30,33);

// Variable two canvases initalization symbology
var c4 = document.getElementById("myCanvas4");
c4.style.backgroundColor = H2;
var ctx4 = c4.getContext("2d");
ctx4.textAlign = "center";
ctx4.fillStyle = "#e8e8e8";
ctx4.fillText(H2,30,33);

var c5 = document.getElementById("myCanvas5");
c5.style.backgroundColor = M2;
var ctx5 = c5.getContext("2d");
ctx5.textAlign = "center";
ctx5.fillText(M2,30,33);

var c6 = document.getElementById("myCanvas6");
c6.style.backgroundColor = L2;
var ctx6 = c6.getContext("2d");
ctx6.textAlign = "center";
ctx6.fillText(L2,30,33);

// Grid canvases initalization symbology
var c7 = document.getElementById("myCanvas7");
c7.style.backgroundColor = H1L2;
var ctx7 = c7.getContext("2d");
ctx7.textAlign = "center";
ctx7.fillText(H1L2,30,33);

var c8 = document.getElementById("myCanvas8");
c8.style.backgroundColor = H1M2;
var ctx8 = c8.getContext("2d");
ctx8.textAlign = "center";
ctx8.fillStyle = "#e8e8e8";
ctx8.fillText(H1M2,30,33);

var c9 = document.getElementById("myCanvas9");
c9.style.backgroundColor = H1H2;
var ctx9 = c9.getContext("2d");
ctx9.textAlign = "center";
ctx9.fillStyle = "#e8e8e8";
ctx9.fillText(H1H2,30,33);

var c10 = document.getElementById("myCanvas10");
c10.style.backgroundColor = M1L2;
var ctx10 = c10.getContext("2d");
ctx10.textAlign = "center";
ctx10.fillText(M1L2,30,33);

var c11 = document.getElementById("myCanvas11");
c11.style.backgroundColor = M1M2;
var ctx11 = c11.getContext("2d");
ctx11.textAlign = "center";
ctx11.fillText(M1M2,30,33);

var c12 = document.getElementById("myCanvas12");
c12.style.backgroundColor = M1H2;
var ctx12 = c12.getContext("2d");
ctx12.textAlign = "center";
ctx12.fillStyle = "#e8e8e8";
ctx12.fillText(M1H2,30,33);

var c13 = document.getElementById("myCanvas13");
c13.style.backgroundColor = L1L2;
var ctx13 = c13.getContext("2d");
ctx13.textAlign = "center";
ctx13.fillText(L1L2,30,33);

var c14 = document.getElementById("myCanvas14");
c14.style.backgroundColor = L1M2;
var ctx14 = c14.getContext("2d");
ctx14.textAlign = "center";
ctx14.fillText(L1M2,30,33);

var c15 = document.getElementById("myCanvas15");
c15.style.backgroundColor = L1H2;
var ctx15 = c15.getContext("2d");
ctx15.textAlign = "center";
ctx15.fillText(L1H2,30,33);

// On change event function for input 1
hueb.on( 'change', function (color) {
	var textCol;
	ctx.clearRect(0,0,c.width,c.height);
	var lum = chroma(color).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx.fillStyle = textCol;
	c.style.backgroundColor = color;
  ctx.fillText(color,30,33);

	ctx2.clearRect(0,0,c2.width,c2.height);
	midCol = chroma.scale([color,L1])(0.5);
	var lum = chroma(midCol).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx2.fillStyle = textCol;
	c2.style.backgroundColor = midCol;
	ctx2.fillText(midCol.toString().toUpperCase(),30,33);

	ctx7.clearRect(0,0,c7.width,c7.height);
	var lum = chroma(midCol).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx7.fillStyle = textCol;
	c7.style.backgroundColor = midCol;
	ctx7.fillText(midCol.toString().toUpperCase(),30,33);

	ctx8.clearRect(0,0,c8.width,c8.height);
	mix8 = chroma.mix(color,document.getElementById("myCanvas5").style.backgroundColor);
	var lum = chroma(mix8).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx8.fillStyle = textCol;
	c8.style.backgroundColor = mix8;
	ctx8.fillText(mix8.toString().toUpperCase(),30,33);

	ctx9.clearRect(0,0,c9.width,c9.height);
	mix9 = chroma.mix(color,document.getElementById("myCanvas4").style.backgroundColor);
	var lum = chroma(mix9).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx9.fillStyle = textCol;
	c9.style.backgroundColor = mix9;
	ctx9.fillText(mix9.toString().toUpperCase(),30,33);

	ctx10.clearRect(0,0,c10.width,c10.height);
	mix10 = chroma.mix(midCol,L2);
	var lum = chroma(mix10).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx10.fillStyle = textCol;
	c10.style.backgroundColor = mix10;
	ctx10.fillText(mix10.toString().toUpperCase(),30,33);

	ctx11.clearRect(0,0,c11.width,c11.height);
	mix11 = chroma.mix(midCol,document.getElementById("myCanvas5").style.backgroundColor);
	var lum = chroma(mix11).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx11.fillStyle = textCol;
	c11.style.backgroundColor = mix11;
	ctx11.fillText(mix11.toString().toUpperCase(),30,33);

	ctx12.clearRect(0,0,c12.width,c12.height);
	mix12 = chroma.mix(midCol,document.getElementById("myCanvas4").style.backgroundColor);
	var lum = chroma(mix12).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx12.fillStyle = textCol;
	c12.style.backgroundColor = mix12;
	ctx12.fillText(mix12.toString().toUpperCase(),30,33);

	ctx14.clearRect(0,0,c14.width,c14.height);
	mix14 = chroma.mix(L1,document.getElementById("myCanvas5").style.backgroundColor);
	var lum = chroma(mix14).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx14.fillStyle = textCol;
	c14.style.backgroundColor = mix14;
	ctx14.fillText(mix14.toString().toUpperCase(),30,33);

	ctx15.clearRect(0,0,c15.width,c15.height);
	mix15 = chroma(document.getElementById("myCanvas5").style.backgroundColor);
	var lum = chroma(mix15).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx15.fillStyle = textCol;
	c15.style.backgroundColor = mix15;
	ctx15.fillText(mix15.toString().toUpperCase(),30,33);

	document.getElementById("banner").style.backgroundColor=mix11;
	var lum = chroma(mix11).luminance();
  if (lum < 0.6) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
	document.getElementById("titleCol").style.color=textCol;
	document.getElementById("subtitleCol").style.color=textCol;
});

// On change event function for input 2
hueb2.on( 'change', function (color2) {
	var textCol2;
	ctx4.clearRect(0,0,c4.width,c4.height);
	var lum2 = chroma(color2).luminance();
	if (lum2 < 0.179) {
		textCol2 = "#E8E8E8";
	} else {
		textCol2 = "#202020";
	}
	c4.style.backgroundColor = color2;
	ctx4.fillStyle = textCol2
	ctx4.fillText(color2,30,33);

	ctx5.clearRect(0,0,c2.width,c2.height);
	midCol2 = chroma.scale([color2,L1])(0.5);
	var lum = chroma(midCol2).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx5.fillStyle = textCol;
	c5.style.backgroundColor = midCol2;
	ctx5.fillText(midCol2.toString().toUpperCase(),30,33);

  // check these
	ctx7.clearRect(0,0,c7.width,c7.height);
	mix7 = chroma(document.getElementById("myCanvas2").style.backgroundColor);
	var lum = chroma(mix7).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx7.fillStyle = textCol;
	c7.style.backgroundColor = mix7;
	ctx7.fillText(mix7.toString().toUpperCase(),30,33);

	ctx8.clearRect(0,0,c8.width,c8.height);
	mix8 = chroma.mix(midCol2,document.getElementById("myCanvas").style.backgroundColor);
	var lum = chroma(mix8).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx8.fillStyle = textCol;
	c8.style.backgroundColor = mix8;
	ctx8.fillText(mix8.toString().toUpperCase(),30,33);

	ctx9.clearRect(0,0,c9.width,c9.height);
	mix9 = chroma.mix(color2,document.getElementById("myCanvas").style.backgroundColor);
	var lum = chroma(mix9).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx9.fillStyle = textCol;
	c9.style.backgroundColor = mix9;
	ctx9.fillText(mix9.toString().toUpperCase(),30,33);

	ctx10.clearRect(0,0,c10.width,c10.height);
	mix10 = chroma.mix(document.getElementById("myCanvas2").style.backgroundColor,L2);
	var lum = chroma(mix10).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx10.fillStyle = textCol;
	c10.style.backgroundColor = mix10;
	ctx10.fillText(mix10.toString().toUpperCase(),30,33);

	ctx11.clearRect(0,0,c11.width,c11.height);
	mix11 = chroma.mix(midCol2,document.getElementById("myCanvas2").style.backgroundColor);
	var lum = chroma(mix11).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx11.fillStyle = textCol;
	c11.style.backgroundColor = mix11;
	ctx11.fillText(mix11.toString().toUpperCase(),30,33);

	ctx12.clearRect(0,0,c12.width,c12.height);
	mix12 = chroma.mix(color2,document.getElementById("myCanvas2").style.backgroundColor);
	var lum = chroma(mix12).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx12.fillStyle = textCol;
	c12.style.backgroundColor = mix12;
	ctx12.fillText(mix12.toString().toUpperCase(),30,33);

	ctx14.clearRect(0,0,c14.width,c14.height);
	mix14 = chroma.mix(L1,midCol2);
	var lum = chroma(mix14).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx14.fillStyle = textCol;
	c14.style.backgroundColor = mix14;
	ctx14.fillText(mix14.toString().toUpperCase(),30,33);

	ctx15.clearRect(0,0,c15.width,c15.height);
	var lum = chroma(midCol2).luminance();
  if (lum < 0.179) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
  ctx15.fillStyle = textCol;
	c15.style.backgroundColor = midCol2;
	ctx15.fillText(midCol2.toString().toUpperCase(),30,33);

	document.getElementById("banner").style.backgroundColor=mix11;
	var lum = chroma(mix11).luminance();
  if (lum < 0.6) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
	document.getElementById("titleCol").style.color=textCol;
	document.getElementById("subtitleCol").style.color=textCol;
});