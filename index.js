const c = document.getElementById("myCanvas");
const c2 = document.getElementById("myCanvas2");
const c3 = document.getElementById("myCanvas3");
const c4 = document.getElementById("myCanvas4");
const c5 = document.getElementById("myCanvas5");
const c6 = document.getElementById("myCanvas6");
const c7 = document.getElementById("myCanvas7");
const c8 = document.getElementById("myCanvas8");
const c9 = document.getElementById("myCanvas9");
const c10 = document.getElementById("myCanvas10");
const c11 = document.getElementById("myCanvas11");
const c12 = document.getElementById("myCanvas12");
const c13 = document.getElementById("myCanvas13");
const c14 = document.getElementById("myCanvas14");
const c15 = document.getElementById("myCanvas15");

const ctx = c.getContext("2d");
const ctx2 = c2.getContext("2d");
const ctx3 = c3.getContext("2d");
const ctx4 = c4.getContext("2d");
const ctx5 = c5.getContext("2d");
const ctx6 = c6.getContext("2d");
const ctx7 = c7.getContext("2d");
const ctx8 = c8.getContext("2d");
const ctx9 = c9.getContext("2d");
const ctx10 = c10.getContext("2d");
const ctx11 = c11.getContext("2d");
const ctx12 = c12.getContext("2d");
const ctx13 = c13.getContext("2d");
const ctx14 = c14.getContext("2d");
const ctx15 = c15.getContext("2d");

const hueb = new Huebee( '.color-input', {
  saturations: 3,
  notation: "hex",
  hues: 9,
  staticOpen: true
});

const hueb2 = new Huebee( '.color-input2', {
  saturations: 3,
  notation: "hex",
  hues: 9,
  staticOpen: true
});

const lightFont = "#E8E8E8";
const darkFont = "#202020";

const lumCheck = (lum, standard) => {
  return lum < standard ? lightFont : darkFont;
}

const canvasChange = (canvas, context, color) => {
  context.clearRect(0,0,canvas.width,canvas.height);
  textCol = lumCheck(chroma(color).luminance(), 0.179);

  context.textAlign = "center";
  context.fillStyle = textCol;
  canvas.style.backgroundColor = color;
  context.fillText(color.toString().toUpperCase(),30,33);
}

let textCol;

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

canvasChange(c, ctx, H1);
canvasChange(c2, ctx2, M1);
canvasChange(c3, ctx3, L1);
canvasChange(c4, ctx4, H2);
canvasChange(c5, ctx5, M2);
canvasChange(c6, ctx6, L2);
canvasChange(c7, ctx7, H1L2);
canvasChange(c8, ctx8, H1M2);
canvasChange(c9, ctx9, H1H2);
canvasChange(c10, ctx10, M1L2);
canvasChange(c11, ctx11, M1M2);
canvasChange(c12, ctx12, M1H2);
canvasChange(c13, ctx13, L1L2);
canvasChange(c14, ctx14, L1M2);
canvasChange(c15, ctx15, L1H2);

// On change event function for input 1
hueb.on( 'change', function (color) {
  let midCol = chroma.scale([color,L1])(0.5);
  let mix8 = chroma.mix(color,document.getElementById("myCanvas5").style.backgroundColor);
  let mix9 = chroma.mix(color,document.getElementById("myCanvas4").style.backgroundColor);
  let mix10 = chroma.mix(midCol,L2);
  let mix11 = chroma.mix(midCol,document.getElementById("myCanvas5").style.backgroundColor);
  let mix12 = chroma.mix(midCol,document.getElementById("myCanvas4").style.backgroundColor);
  let mix14 = chroma.mix(L1,document.getElementById("myCanvas5").style.backgroundColor);
  let mix15 = chroma(document.getElementById("myCanvas5").style.backgroundColor);

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

    textCol = lumCheck(chroma(mix11).luminance(), 0.6);

    document.getElementById("banner").style.backgroundColor = mix11;
  	document.getElementById("titleCol").style.color = textCol;
  	document.getElementById("subtitleCol").style.color = textCol;
  	document.getElementById("deltaColMinVal").style.color = deCol;
  	document.getElementById("deltaColMinVal").innerHTML = deMin.toFixed(1);
});

// On change event function for input 2
hueb2.on( 'change', function (color) {
  let midCol = chroma.scale([color,L1])(0.5);
  let mix7 = chroma(document.getElementById("myCanvas2").style.backgroundColor);
  let mix8 = chroma.mix(midCol,document.getElementById("myCanvas").style.backgroundColor);
  let mix9 = chroma.mix(color,document.getElementById("myCanvas").style.backgroundColor);
  let mix10 = chroma.mix(document.getElementById("myCanvas2").style.backgroundColor,L2);
  let mix11 = chroma.mix(midCol,document.getElementById("myCanvas2").style.backgroundColor);
  let mix12 = chroma.mix(color,document.getElementById("myCanvas2").style.backgroundColor);
  let mix14 = chroma.mix(L1,midCol);

  canvasChange(c4, ctx4, color);
  canvasChange(c5, ctx5, midCol);
  canvasChange(c7, ctx7, mix7);
  canvasChange(c8, ctx8, mix8);
  canvasChange(c9, ctx9, mix9);
  canvasChange(c10, ctx10, mix10);
  canvasChange(c11, ctx11, mix11);
  canvasChange(c12, ctx12, mix12);
  canvasChange(c14, ctx14, mix14);
  canvasChange(c15, ctx15, midCol);

  const deltaE = [
  	chroma.deltaE(mix7,mix8),
  	chroma.deltaE(mix7,mix9),
  	chroma.deltaE(mix7,mix10),
  	chroma.deltaE(mix7,mix11),
  	chroma.deltaE(mix7,mix12),
  	chroma.deltaE(mix7,L1),
  	chroma.deltaE(mix7,mix14),
  	chroma.deltaE(mix7,midCol),
  	chroma.deltaE(mix8,mix9),
  	chroma.deltaE(mix8,mix10),
  	chroma.deltaE(mix8,mix11),
  	chroma.deltaE(mix8,mix12),
  	chroma.deltaE(mix8,L1),
  	chroma.deltaE(mix8,mix14),
  	chroma.deltaE(mix8,midCol),
  	chroma.deltaE(mix9,mix10),
  	chroma.deltaE(mix9,mix11),
  	chroma.deltaE(mix9,mix12),
  	chroma.deltaE(mix9,L1),
  	chroma.deltaE(mix9,mix14),
  	chroma.deltaE(mix9,midCol),
  	chroma.deltaE(mix10,mix11),
  	chroma.deltaE(mix10,mix12),
  	chroma.deltaE(mix10,L1),
  	chroma.deltaE(mix10,mix14),
  	chroma.deltaE(mix10,midCol),
  	chroma.deltaE(mix11,mix12),
  	chroma.deltaE(mix11,L1),
  	chroma.deltaE(mix11,mix14),
  	chroma.deltaE(mix11,midCol),
  	chroma.deltaE(mix12,L1),
  	chroma.deltaE(mix12,mix14),
  	chroma.deltaE(mix12,midCol),
  	chroma.deltaE(L1,mix14),
  	chroma.deltaE(L1,midCol),
  	chroma.deltaE(mix14,midCol)
  ]

  let deMin = Math.min(...deltaE)
	if (deMin < 8) {
		deCol = "#D52A2A";
	} else {
		deCol = "#00AA00";
	}

  textCol = lumCheck(chroma(mix11).luminance(), 0.6);

  document.getElementById("banner").style.backgroundColor = mix11;
	document.getElementById("titleCol").style.color = textCol;
	document.getElementById("subtitleCol").style.color = textCol;
	document.getElementById("deltaColMinVal").style.color = deCol;
	document.getElementById("deltaColMinVal").innerHTML = deMin.toFixed(1);
});
