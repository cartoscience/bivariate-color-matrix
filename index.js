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
	let textCol;
  let midCol = chroma.scale([color,L1])(0.5);
  let mix8 = chroma.mix(color,document.getElementById("myCanvas5").style.backgroundColor);
  let mix9 = chroma.mix(color,document.getElementById("myCanvas4").style.backgroundColor);
  let mix10 = chroma.mix(midCol,L2);
  let mix11 = chroma.mix(midCol,document.getElementById("myCanvas5").style.backgroundColor);
  let mix12 = chroma.mix(midCol,document.getElementById("myCanvas4").style.backgroundColor);
  let mix14 = chroma.mix(L1,document.getElementById("myCanvas5").style.backgroundColor);
  let mix15 = chroma(document.getElementById("myCanvas5").style.backgroundColor);

  const canvasChange = (canvas, context, color) => {
    context.clearRect(0,0,canvas.width,canvas.height);
  	let lum = chroma(color).luminance();
    if (lum < 0.179) {
    	textCol = "#E8E8E8";
    	} else {
    		textCol = "#202020";
    	}
    context.fillStyle = textCol;
  	canvas.style.backgroundColor = color;
    context.fillText(color.toString().toUpperCase(),30,33);
  }

  canvasChange(c, ctx, color);
  canvasChange(c2, ctx2, midCol);
  canvasChange(c7, ctx7, midCol);
  canvasChange(c8, ctx8, mix8);
  canvasChange(c9, ctx9, mix9);
  canvasChange(c10, ctx10, mix10);
  canvasChange(c11, ctx11, mix11);
  canvasChange(c12, ctx12, mix12);
  canvasChange(c14, ctx14, mix14);
  canvasChange(c15, ctx15, mix15);

	var lum = chroma(mix11).luminance();
  if (lum < 0.6) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}

  //creates an array populated with all deltaE values from Bivariate Pallete
  const deltaE = [
    chroma.deltaE(midCol,mix8),
  	chroma.deltaE(midCol,mix9),
  	chroma.deltaE(midCol,mix10),
  	chroma.deltaE(midCol,mix11),
  	chroma.deltaE(midCol,mix12),
  	chroma.deltaE(midCol,L1),
  	chroma.deltaE(midCol,mix14),
  	chroma.deltaE(midCol,mix15),
  	chroma.deltaE(mix8,mix9),
  	chroma.deltaE(mix8,mix10),
  	chroma.deltaE(mix8,mix11),
  	chroma.deltaE(mix8,mix12),
  	chroma.deltaE(mix8,L1),
  	chroma.deltaE(mix8,mix14),
  	chroma.deltaE(mix8,mix15),
  	chroma.deltaE(mix9,mix10),
  	chroma.deltaE(mix9,mix11),
  	chroma.deltaE(mix9,mix12),
  	chroma.deltaE(mix9,L1),
  	chroma.deltaE(mix9,mix14),
  	chroma.deltaE(mix9,mix15),
  	chroma.deltaE(mix10,mix11),
  	chroma.deltaE(mix10,mix12),
  	chroma.deltaE(mix10,L1),
  	chroma.deltaE(mix10,mix14),
  	chroma.deltaE(mix10,mix15),
  	chroma.deltaE(mix11,mix12),
  	chroma.deltaE(mix11,L1),
  	chroma.deltaE(mix11,mix14),
  	chroma.deltaE(mix11,mix15),
  	chroma.deltaE(mix12,L1),
  	chroma.deltaE(mix12,mix14),
  	chroma.deltaE(mix12,mix15),
  	chroma.deltaE(L1,mix14),
  	chroma.deltaE(L1,mix15),
  	chroma.deltaE(mix14,mix15)
  ]

    let deMin = Math.min(...deltaE)

    if (deMin < 8) {
  		deCol = "#D52A2A";
  	} else {
  		deCol = "#00AA00";
  	}

    document.getElementById("banner").style.backgroundColor=mix11;
  	document.getElementById("titleCol").style.color=textCol;
  	document.getElementById("subtitleCol").style.color=textCol;
  	document.getElementById("deltaColMinVal").style.color = deCol;
  	document.getElementById("deltaColMinVal").innerHTML = deMin.toFixed(1);
});

// On change event function for input 2
hueb2.on( 'change', function (color2) {
	let textCol2;
  let midCol2 = chroma.scale([color2,L1])(0.5);
  let mix7 = chroma(document.getElementById("myCanvas2").style.backgroundColor);
  let mix8 = chroma.mix(midCol2,document.getElementById("myCanvas").style.backgroundColor);
  let mix9 = chroma.mix(color2,document.getElementById("myCanvas").style.backgroundColor);
  let mix10 = chroma.mix(document.getElementById("myCanvas2").style.backgroundColor,L2);
  let mix11 = chroma.mix(midCol2,document.getElementById("myCanvas2").style.backgroundColor);
  let mix12 = chroma.mix(color2,document.getElementById("myCanvas2").style.backgroundColor);
  let mix14 = chroma.mix(L1,midCol2);

  const canvasChange = (canvas, context, color) => {
    context.clearRect(0,0,canvas.width,canvas.height);
  	var lum = chroma(color).luminance();
    if (lum < 0.179) {
    	textCol2 = "#E8E8E8";
    	} else {
    		textCol2 = "#202020";
    	}
    context.fillStyle = textCol2;
  	canvas.style.backgroundColor = color;
    context.fillText(color.toString().toUpperCase(),30,33);
  }

  canvasChange(c4, ctx4, color2);
  canvasChange(c5, ctx5, midCol2);
  canvasChange(c7, ctx7, mix7);
  canvasChange(c8, ctx8, mix8);
  canvasChange(c9, ctx9, mix9);
  canvasChange(c10, ctx10, mix10);
  canvasChange(c11, ctx11, mix11);
  canvasChange(c12, ctx12, mix12);
  canvasChange(c14, ctx14, mix14);
  canvasChange(c15, ctx15, midCol2);

	document.getElementById("banner").style.backgroundColor=mix11;
	var lum = chroma(mix11).luminance();
  if (lum < 0.6) {
  	textCol = "#E8E8E8";
  	} else {
  		textCol = "#202020";
  	}
	document.getElementById("titleCol").style.color=textCol;
	document.getElementById("subtitleCol").style.color=textCol;

	var de1 = chroma.deltaE(mix7,mix8);
	var de2 = chroma.deltaE(mix7,mix9);
	var de3 = chroma.deltaE(mix7,mix10);
	var de4 = chroma.deltaE(mix7,mix11);
	var de5 = chroma.deltaE(mix7,mix12);
	var de6 = chroma.deltaE(mix7,L1);
	var de7 = chroma.deltaE(mix7,mix14);
	var de8 = chroma.deltaE(mix7,midCol2);
	var de9 = chroma.deltaE(mix8,mix9);
	var de10 = chroma.deltaE(mix8,mix10);
	var de11 = chroma.deltaE(mix8,mix11);
	var de12 = chroma.deltaE(mix8,mix12);
	var de13 = chroma.deltaE(mix8,L1);
	var de14 = chroma.deltaE(mix8,mix14);
	var de15 = chroma.deltaE(mix8,midCol2);
	var de16 = chroma.deltaE(mix9,mix10);
	var de17 = chroma.deltaE(mix9,mix11);
	var de18 = chroma.deltaE(mix9,mix12);
	var de19 = chroma.deltaE(mix9,L1);
	var de20 = chroma.deltaE(mix9,mix14);
	var de21 = chroma.deltaE(mix9,midCol2);
	var de22 = chroma.deltaE(mix10,mix11);
	var de23 = chroma.deltaE(mix10,mix12);
	var de24 = chroma.deltaE(mix10,L1);
	var de25 = chroma.deltaE(mix10,mix14);
	var de26 = chroma.deltaE(mix10,midCol2);
	var de27 = chroma.deltaE(mix11,mix12);
	var de28 = chroma.deltaE(mix11,L1);
	var de29 = chroma.deltaE(mix11,mix14);
	var de30 = chroma.deltaE(mix11,midCol2);
	var de31 = chroma.deltaE(mix12,L1);
	var de32 = chroma.deltaE(mix12,mix14);
	var de33 = chroma.deltaE(mix12,midCol2);
	var de34 = chroma.deltaE(L1,mix14);
	var de35 = chroma.deltaE(L1,midCol2);
	var de36 = chroma.deltaE(mix14,midCol2);

	var deMin = Math.min(de1,de2,de3,de4,de5,de6,de7,de8,de9,de10,de11,de12,de13,de14,de15,de16,de17,de18,de19,de20,de21,de22,de23,de24,de25,de26,de27,de28,de29,de30,de31,de32,de33,de34,de35,de36);
  	if (deMin < 8) {
  		deCol = "#D52A2A";
  	} else {
  		deCol = "#00AA00";
  	}

  	document.getElementById("deltaColMinVal").style.color = deCol;
  	document.getElementById("deltaColMinVal").innerHTML = deMin.toFixed(1);
});
