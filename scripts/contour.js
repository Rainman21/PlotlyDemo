var size = 100, x = new Array(size), y = new Array(size), z = new Array(size), i, j;

for (var i = 0; i < size; i++) {
  x[i] = y[i] = -2 * Math.PI + 4 * Math.PI * i / size;
  z[i] = new Array(size);
}

for (var i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    var r2 = x[i] * x[i] + y[j] * y[j];
    z[i][j] = Math.sin(x[i]) * Math.cos(y[j]) * Math.sin(r2) / Math.log(r2 + 1);
  }
}

var data = [{
  z: z,
  x: x,
  y: y,
  type: 'contour'
}
];

var layout = {
  title: 'Simple Contour Plot'
}

Plotly.newPlot('myDiv', data, layout, { showSendToCloud: true });