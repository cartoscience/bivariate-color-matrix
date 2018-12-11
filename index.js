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

const lightColor = "#E8E8E8";
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
  context.fillText(color.toString().toUpperCase(),29,32.5);
}

let textCol;
//initial canvas color build
canvasChange(c, ctx, "#FF0000");
canvasChange(c2, ctx2, "#F47474");
canvasChange(c3, ctx3, lightColor);
canvasChange(c4, ctx4, "#0000FF");
canvasChange(c5, ctx5, "#7474F4");
canvasChange(c6, ctx6, lightColor);
canvasChange(c7, ctx7, "#F47474");
canvasChange(c8, ctx8, "#BA3A7A");
canvasChange(c9, ctx9, "#800080");
canvasChange(c10, ctx10, "#EEAEAE");
canvasChange(c11, ctx11, "#B474B4");
canvasChange(c12, ctx12, "#7A3ABA");
canvasChange(c13, ctx13, lightColor);
canvasChange(c14, ctx14, "#AEAEEE");
canvasChange(c15, ctx15, "#7474F4");

//Map initialization
var crs = new L.Proj.CRS('EPSG:2163',
  '+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +a=6370997 +b=6370997 +units=m +no_defs',
  {
    resolutions: [8192]
  }
);
var map = L.map("map", {crs: crs}).setView([38.3, -96], 0);
map.removeControl(map.zoomControl);
map.scrollWheelZoom.disable();
map.doubleClickZoom.disable();
map.dragging.disable();
map.touchZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';

var baseStyle = {
  weight: 7,
  color: lightColor,
  opacity: 0.3,
  fillColor: lightColor,
  fillOpacity: 1
};

var countyStyle = {
  weight: 1,
  color: lightColor,
  opacity: 0.3,
  fillColor: lightColor,
  fillOpacity: 0
};

function getColor(d) {
  return d === 7 ? '#F47474' :
      d === 8 ? '#BA3A7A' :
      d === 9 ? '#800080' :
      d === 10 ? '#EEAEAE' :
      d === 11 ? '#B474B4' :
      d === 12  ? '#7A3ABA' :
      d === 13  ? '#E8E8E8' :
      d === 14  ? '#AEAEEE' :
            '#7474F4';
}

function colorStyle(feature) {
  return {
    weight: 1,
    color: lightColor,
    opacity: 0.3,
    fillColor: getColor(feature.properties.label),
    fillOpacity: 1
  };
}

L.geoJson(us, {
  style: baseStyle
}).addTo(map);

countyColors = L.geoJson(counties_reduced, {
  style: colorStyle
}).addTo(map);

countyOverlay = L.geoJson(counties, {
  style: countyStyle
}).addTo(map);

// On change event function for input 1
hueb.on( 'change', function (color) {
  let midCol = chroma.scale([color, lightColor])(0.5);
  let mix8 = chroma.mix(color, document.getElementById("myCanvas5").style.backgroundColor);
  let mix9 = chroma.mix(color, document.getElementById("myCanvas4").style.backgroundColor);
  let mix10 = chroma.mix(midCol, lightColor);
  let mix11 = chroma.mix(midCol, document.getElementById("myCanvas5").style.backgroundColor);
  let mix12 = chroma.mix(midCol, document.getElementById("myCanvas4").style.backgroundColor);
  let mix14 = chroma.mix(lightColor, document.getElementById("myCanvas5").style.backgroundColor);
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

  const deltaE = [
    chroma.deltaE(midCol, mix8),chroma.deltaE(mix8, midCol),
    chroma.deltaE(midCol, mix9),chroma.deltaE(mix9, midCol),
    chroma.deltaE(midCol, mix10),chroma.deltaE(mix10, midCol),
    chroma.deltaE(midCol, mix11),chroma.deltaE(mix11, midCol),
    chroma.deltaE(midCol, mix12),chroma.deltaE(mix12, midCol),
    chroma.deltaE(midCol, lightColor),chroma.deltaE(lightColor, midCol),
    chroma.deltaE(midCol, mix14),chroma.deltaE(mix14, midCol),
    chroma.deltaE(midCol, mix15),chroma.deltaE(mix15, midCol),
    chroma.deltaE(mix8, mix9),chroma.deltaE(mix9, mix8),
    chroma.deltaE(mix8, mix10),chroma.deltaE(mix10, mix8),
    chroma.deltaE(mix8, mix11),chroma.deltaE(mix11, mix8),
    chroma.deltaE(mix8, mix12),chroma.deltaE(mix12, mix8),
    chroma.deltaE(mix8, lightColor),chroma.deltaE(lightColor, mix8),
    chroma.deltaE(mix8, mix14),chroma.deltaE(mix14, mix8),
    chroma.deltaE(mix8, mix15),chroma.deltaE(mix15, mix8),
    chroma.deltaE(mix9, mix10),chroma.deltaE(mix10, mix9),
    chroma.deltaE(mix9, mix11),chroma.deltaE(mix11, mix9),
    chroma.deltaE(mix9, mix12),chroma.deltaE(mix12, mix9),
    chroma.deltaE(mix9, lightColor),chroma.deltaE(lightColor, mix9),
    chroma.deltaE(mix9, mix14),chroma.deltaE(mix14, mix9),
    chroma.deltaE(mix9, mix15),chroma.deltaE(mix15, mix9),
    chroma.deltaE(mix10, mix11),chroma.deltaE(mix11, mix10),
    chroma.deltaE(mix10, mix12),chroma.deltaE(mix12, mix10),
    chroma.deltaE(mix10, lightColor),chroma.deltaE(lightColor, mix10),
    chroma.deltaE(mix10, mix14),chroma.deltaE(mix14, mix10),
    chroma.deltaE(mix10, mix15),chroma.deltaE(mix15, mix10),
    chroma.deltaE(mix11, mix12),chroma.deltaE(mix12, mix11),
    chroma.deltaE(mix11, lightColor),chroma.deltaE(lightColor, mix11),
    chroma.deltaE(mix11, mix14),chroma.deltaE(mix14, mix11),
    chroma.deltaE(mix11, mix15),chroma.deltaE(mix15, mix11),
    chroma.deltaE(mix12, lightColor),chroma.deltaE(lightColor, mix12),
    chroma.deltaE(mix12, mix14),chroma.deltaE(mix14, mix12),
    chroma.deltaE(mix12, mix15),chroma.deltaE(mix15, mix12),
    chroma.deltaE(lightColor, mix14),chroma.deltaE(mix14, lightColor),
    chroma.deltaE(lightColor, mix15),chroma.deltaE(mix15, lightColor),
    chroma.deltaE(mix14, mix15),chroma.deltaE(mix15, mix14)
  ]

  let deMin = Math.min(...deltaE)
  if (deMin < 8) {
    deCol = "#D52A2A";
  } else {
    deCol = "#00AA00";
  }

  textCol = lumCheck(chroma(mix11).luminance(), 0.6);

  document.getElementById("banner").style.backgroundColor = mix11;
  document.getElementById("logo").style.backgroundColor = mix11;
  document.getElementById("info").style.color = mix11;
  document.getElementById("titleCol").style.color = textCol;
  document.getElementById("subtitleCol").style.color = textCol;
  document.getElementById("deltaColMinVal").style.color = deCol;
  document.getElementById("deltaColMinVal").innerHTML = deMin.toFixed(1);

  function getColor(d) {
    return d === 7 ? midCol :
      d === 8 ? mix8 :
      d === 9 ? mix9 :
      d === 10 ? mix10 :
      d === 11 ? mix11 :
      d === 12  ? mix12 :
      d === 13  ? lightColor :
      d === 14  ? mix14 :
          mix15;
  }

  function colorStyle(feature) {
    return {
      weight: 1,
      color: lightColor,
      opacity: 0.3,
      fillColor: getColor(feature.properties.label),
      fillOpacity: 1
    };
  }

  countyColors.setStyle(colorStyle);

});

// On change event function for input 2
hueb2.on( 'change', function (color) {
  let midCol = chroma.scale([color, lightColor])(0.5);
  let mix7 = chroma(document.getElementById("myCanvas2").style.backgroundColor);
  let mix8 = chroma.mix(midCol, document.getElementById("myCanvas").style.backgroundColor);
  let mix9 = chroma.mix(color, document.getElementById("myCanvas").style.backgroundColor);
  let mix10 = chroma.mix(document.getElementById("myCanvas2").style.backgroundColor, lightColor);
  let mix11 = chroma.mix(midCol, document.getElementById("myCanvas2").style.backgroundColor);
  let mix12 = chroma.mix(color, document.getElementById("myCanvas2").style.backgroundColor);
  let mix14 = chroma.mix(lightColor, midCol);

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
    chroma.deltaE(mix7, mix8),chroma.deltaE(mix8, mix7),
    chroma.deltaE(mix7, mix9),chroma.deltaE(mix9, mix7),
    chroma.deltaE(mix7, mix10),chroma.deltaE(mix10, mix7),
    chroma.deltaE(mix7, mix11),chroma.deltaE(mix11, mix7),
    chroma.deltaE(mix7, mix12),chroma.deltaE(mix12, mix7),
    chroma.deltaE(mix7, lightColor),chroma.deltaE(lightColor, mix7),
    chroma.deltaE(mix7, mix14),chroma.deltaE(mix14, mix7),
    chroma.deltaE(mix7, midCol),chroma.deltaE(midCol, mix7),
    chroma.deltaE(mix8, mix9),chroma.deltaE(mix9, mix8),
    chroma.deltaE(mix8, mix10),chroma.deltaE(mix10, mix8),
    chroma.deltaE(mix8, mix11),chroma.deltaE(mix11, mix8),
    chroma.deltaE(mix8, mix12),chroma.deltaE(mix12, mix8),
    chroma.deltaE(mix8, lightColor),chroma.deltaE(lightColor, mix8),
    chroma.deltaE(mix8, mix14),chroma.deltaE(mix14, mix8),
    chroma.deltaE(mix8, midCol),chroma.deltaE(midCol, mix8),
    chroma.deltaE(mix9, mix10),chroma.deltaE(mix10, mix9),
    chroma.deltaE(mix9, mix11),chroma.deltaE(mix11, mix9),
    chroma.deltaE(mix9, mix12),chroma.deltaE(mix12, mix9),
    chroma.deltaE(mix9, lightColor),chroma.deltaE(lightColor, mix9),
    chroma.deltaE(mix9, mix14),chroma.deltaE(mix14, mix9),
    chroma.deltaE(mix9, midCol),chroma.deltaE(midCol, mix9),
    chroma.deltaE(mix10, mix11),chroma.deltaE(mix11, mix10),
    chroma.deltaE(mix10, mix12),chroma.deltaE(mix12, mix10),
    chroma.deltaE(mix10, lightColor),chroma.deltaE(lightColor, mix10),
    chroma.deltaE(mix10, mix14),chroma.deltaE(mix14, mix10),
    chroma.deltaE(mix10, midCol),chroma.deltaE(midCol, mix10),
    chroma.deltaE(mix11, mix12),chroma.deltaE(mix12, mix11),
    chroma.deltaE(mix11, lightColor),chroma.deltaE(lightColor, mix11),
    chroma.deltaE(mix11, mix14),chroma.deltaE(mix14, mix11),
    chroma.deltaE(mix11, midCol),chroma.deltaE(midCol, mix11),
    chroma.deltaE(mix12, lightColor),chroma.deltaE(lightColor, mix12),
    chroma.deltaE(mix12, mix14),chroma.deltaE(mix14, mix12),
    chroma.deltaE(mix12, midCol),chroma.deltaE(midCol, mix12),
    chroma.deltaE(lightColor, mix14),chroma.deltaE(mix14, lightColor),
    chroma.deltaE(lightColor, midCol),chroma.deltaE(midCol, lightColor),
    chroma.deltaE(mix14, midCol),chroma.deltaE(midCol, mix14)
  ]

  let deMin = Math.min(...deltaE)
  if (deMin < 8) {
    deCol = "#D52A2A";
  } else {
    deCol = "#00AA00";
  }

  textCol = lumCheck(chroma(mix11).luminance(), 0.6);

  document.getElementById("banner").style.backgroundColor = mix11;
  document.getElementById("logo").style.backgroundColor = mix11;
  document.getElementById("info").style.color = mix11;
  document.getElementById("titleCol").style.color = textCol;
  document.getElementById("subtitleCol").style.color = textCol;
  document.getElementById("deltaColMinVal").style.color = deCol;
  document.getElementById("deltaColMinVal").innerHTML = deMin.toFixed(1);

  function getColor(d) {
    return d === 7 ? mix7 :
      d === 8 ? mix8 :
      d === 9 ? mix9 :
      d === 10 ? mix10 :
      d === 11 ? mix11 :
      d === 12  ? mix12 :
      d === 13  ? lightColor :
      d === 14  ? mix14 :
            midCol;
  }

  function colorStyle(feature) {
    return {
      weight: 1,
      color: lightColor,
      opacity: 0.3,
      fillColor: getColor(feature.properties.label),
      fillOpacity: 1
    };
  }

  countyColors.setStyle(colorStyle);

});
