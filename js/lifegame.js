var X_SIZE = 5;
var Y_SIZE = 5;
var CELL_SIZE = 1;
var FPS = 100;
var canvas;
var context;
var t_canvas;
var t_context;
var time;
 
window.onload = function() {
  var str = "x = 202, y = 236, rule = B3/S23\n2$126bo$125bobo3$125b3o$125b3o$126bo6b3o2$132bo3bo$126bo5bo3bo$125b3o$\n125b3o5b3o3$125bobo5b3o$114b4o8bo$113b6o13bo3bo$112b8o12bo3bo$111b2o6b\n2o$112b8o13b3o$113b6o$114b4o$132bobo3bo2bob2obo2bo$132b2o4b4ob2ob4o$\n133bo4bo2bob2obo2bo8$144bo2bob2obo2bo$143b2o2bo4bo2b2o$144bo2bob2obo2b\no2$140bo$140bo$45bo93b3o$44b3o$43bobobo$43bobobo91b3o$44b3o93bo$45bo\n81bo12bo$127b2o11bo$126bobo11bo$45bo93b3o$44b3o$43bobobo$43bobobo91b3o\n$44b3o93bo$45bo94bo$52bo6bo$51b2o6b2o$50b3o6b3o$51b2o6b2o$52bo6bo$43bo\n22b3o$41b2o22bo3bo6b3o$42b2o20bo5bo4bo3bo$74bo5bo$63bo7bo$63bo7bobo7bo\n$73bo7bo9bo$64bo5bo20bobo$65bo3bo4bo5bo10b2o$66b3o6bo3bo$16b3o57b3o$\n15bo3bo$14bo5bo2$13bo7bo$13bo7bo2$14bo5bo$15bo3bo$16b3o$60bo$58b2o$59b\n2o$3b2o6b2o$2bo2bo4bo2bo$2bo2bo4bo2bo115b2o$2bo2bo4bo2bo115bobo$3b2o6b\n2o118bo$85b3o43b2o$87bo$86bo2$80bo$79b2o$79bobo$56bo2bob2obo2bo22b3o$\n55b2o2bo4bo2b2o21bo$56bo2bob2obo2bo23bo$31bobo$32b2o$23bo8bo36b2o7bo$\n22b3o45b2o5b3o$21b5o43bo6b5o2$89bo$89bo$88b3o3$21b5o50b5o7b3o$22b3o52b\n3o9bo$23bo54bo10bo$89bo$89bo$9b2o6b2o69b3o$8bo2bo4bo2bo$7b6o2b6o$8bo2b\no4bo2bo68b3o$9b2o6b2o7bobo9bo6bo43bo$27b2o8b2o6b2o42bo$27bo8b3o6b3o$\n37b2o6b2o$38bo6bo$52bo$51b3o$50bobobo$50bobobo$51b3o$52bo3$52bo$51b3o$\n50bobobo$50bobobo$51b3o$52bo79b2o$131b2o$133bo21$69bo$67bobo$68b2o$\n164bo2bob2obo2bo$163b2o2bo4bo2b2o$164bo2bob2obo2bo2$160bo$160bo$159b3o\n3$159b3o$160bo$147bo12bo$147b2o11bo$146bobo11bo$159b3o3$159b3o$160bo$\n160bo19$109bo$110b2o$109b2o3$103b4o$102b6o$101b8o$100b2o6b2o$101b8o$\n102b6o$103b4o$115bo$114b3o$113b5o7$113b5o$114b3o$115bo!";
  var field = rle2ary(str);

  var tf = new Array(X_SIZE*Y_SIZE);
  canvas = document.getElementById('world');
  t_canvas = document.createElement('canvas');
  canvas.width = t_canvas.width = X_SIZE * CELL_SIZE;
  canvas.height = t_canvas.height =  Y_SIZE * CELL_SIZE;
  context = canvas.getContext('2d');
  t_context = t_canvas.getContext('2d');
  t_context.fillStyle = 'rgb(211, 85, 149)';
  update(field, tf);
  setInterval(function() {document.getElementById("time").innerHTML = time;}, 1000);
}
 
function update(field, tf) {
  var start = + new Date();
  var n = 0;
  tf = field.slice();
  time = new Date() - start;
  var length = tf.length;
  for (var i=0; i<length; i++) {
    n = 0;
    for (var s=-1; s<=1; s++) {
      var cc = i+s*X_SIZE;
      for (var t=-1; t<=1; t++) {
        if (s==0 && t==0) continue;
        var c = cc+t;
        if (c>=0 && c<length) {
          // パフォーマンスのため境界値チェックしない
          if (tf[c]) n++;
        }
      }
    }
    if (tf[i]) {
      if (n==2||n==3) field[i] = 1;
      else field[i] = 0;
    } else {
      if (n==3) field[i] = 1;
      else field[i] = 0;
    }
  }
  draw(field);
  time = new Date() - start;
  setTimeout(update, 1000/FPS, field, tf);
}
 
function draw(field) {
  context.clearRect(0, 0, X_SIZE * CELL_SIZE, Y_SIZE * CELL_SIZE);
  t_context.clearRect(0, 0, X_SIZE * CELL_SIZE, Y_SIZE * CELL_SIZE);
  for (var i=0; i<field.length; i++) {
    if (field[i]) t_context.fillRect(i%X_SIZE * CELL_SIZE, Math.floor(i/X_SIZE) * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }
  context.drawImage(t_canvas, 0, 0);
}

function rle2ary(str) {
  var pos = str.indexOf('\n');
  var xy = str.substr(0, pos).match(/x = (\d*), y = (\d*),/);
  
  var width = +xy[1];
  var height = +xy[2];
  var res = [];
  for (var i = 0; i < width * height; i++) {
    res[i] = 0;
  }

  str = str.substr(pos).replace(/\n/g, '');

  var num = 0;
  var y = 0;
  var x = 0;
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'b':
        num = num ? num : 1;
        x += num;
        break;
      case 'o':
        num = num ? num : 1;
        for (var c = 0; c < num; c++)
          res[y * width + x+c] = 1;
        x += num;
        break;
      case '$':
        num = num ? num : 1;
        y += num;
        x = 0;
        break;
      case '!':
        break;
      default :
        num = num * 10 + +str[i];
        continue;
    }
    num = 0;
  }

  X_SIZE = width;
  Y_SIZE = height;
  return res;
}
