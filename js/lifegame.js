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
  var str = "x = 198, y = 233, rule = B3/S23\n8$134b3o$134b3o$135bo$135bo$135bo$134bobo6bo$142b3o$141bobobo$134bobo\n4bobobo$135bo6b3o$135bo7bo$135bo$134b3o$134b3o6bo$142b3o$122b6o13bobob\no$121bo6bo12bobobo$120bo8bo12b3o$121bo6bo14bo$122b6o$136b2o$136bobo8bo\n2bo4bo2bo$136bo8b3o2b6o2b3o$147bo2bo4bo2bo8$153bo2bob2obo2bo$153b4ob2o\nb4o$153bo2bob2obo2bo3$148b3o2$53b3o91bo3bo$52bo3bo90bo3bo$52bo3bo$53b\n3o92b3o3$148b3o2$53b3o91bo3bo$52bo3bo58bobo29bo3bo$52bo3bo58b2o$53b3o\n8b2o50bo31b3o$62bo4bo$61bo6bo$60bo8bo$60bo8bo$60bo8bo$61bo6bo$62bo4bo\n8bo$64b2o9b3o8bo$74b2ob2o6b3o32b3o$73b3ob3o4b2ob2o33bo$73b3ob3o3b3ob3o\n31bo$73b3ob3o3b3ob3o$63bo9b3ob3o3b3ob3o$62b2o10b2ob2o4b3ob3o$62bobo10b\n3o6b2ob2o$76bo8b3o$26bo59bo$25b3o$24b2ob2o$23b3ob3o$23b3ob3o$23b3ob3o\n51bo$23b3ob3o50bobo$24b2ob2o50b2o$25b3o50bo$26bo51bobobobo$78b3obob2o$\n82bobo$26bo56bo24b5o$13bo6bo6bo79bo4bo$12b2o6b2o3b3o84bo$11b3o6b3o84bo\n3bo$12b2o6b2o87bo$13bo6bo$80bo$79bobo$78b2obob3o$79bobobobo$85bo$83b2o\n$81bobo$65bo2bob2obo2bo5bo$65b4ob2ob4o19bo$65bo2bob2obo2bo17bobo$95b2o\n3$31b3o52b3o$30bo3bo50bo3bo$29bo5bo48bo5bo2$28bo7bo46bo7bo5b3o$28bo7bo\n6bo39bo7bo$41b2o53bo3bo$29bo5bo6b2o40bo5bo5bo3bo$30bo3bo50bo3bo$31b3o\n52b3o8b3o15b2o$114b2o$116bo$97b3o$18b2o6b2o$17bo2bo4bo2bo34b2o31bo3bo$\n17bo2bo4bo2bo21b2o10bobo31bo3bo$17bo2bo4bo2bo19bo4bo10bo$18b2o6b2o19bo\n6bo42b3o$46bo8bo$46bo8bo$46bo8bo$47bo6bo$48bo4bo$50b2o8b3o$59bo3bo$59b\no3bo$60b3o5$60b3o$59bo3bo$59bo3bo$60b3o9$61bobo$62b2o$62bo5$156b2o$\n156bobo$156bo9$173bo2bob2obo2bo$173b4ob2ob4o$173bo2bob2obo2bo3$168b3o\n2$167bo3bo$167bo3bo2$168b3o3$168b3o2$167bo3bo$167bo3bo2$168b3o5$104bo$\n102bobo$103b2o2$140b3o$142bo$141bo15$111b6o$110bo6bo$109bo8bo$110bo6bo\n$111b6o3$123b3o$122bo3bo$121bo5bo2$120bo7bo$120bo7bo2$121bo5bo$122bo3b\no$123b3o!";
  var field = rle2ary(str);
  //var field = [
  //  0,0,0,0,0,
  //  0,0,0,0,0,
  //  0,1,1,1,0,
  //  0,0,0,0,0,
  //  0,0,0,0,0,
  //];

  var tempField = new Array(X_SIZE*Y_SIZE);
  //for (var i=0; i<field.length; i++) {
  //  field[i] = Math.floor(Math.random()*2);
  //}
  canvas = document.getElementById('world');
  t_canvas = document.createElement('canvas');
  canvas.width = t_canvas.width = X_SIZE * CELL_SIZE;
  canvas.height = t_canvas.height =  Y_SIZE * CELL_SIZE;
  context = canvas.getContext('2d');
  t_context = t_canvas.getContext('2d');
  t_context.fillStyle = 'rgb(211, 85, 149)';
  update(field, tempField);
  setInterval(function() {document.getElementById("time").innerHTML = time;}, 1000);
}
 
function update(field, tempField) {
  var start = + new Date();
  var n = 0;
  tempField = field.slice();
  for (var i=0; i<tempField.length; i++) {
    n = 0;
    for (var s=-1; s<2; s++) {
      for (var t=-1; t<2; t++) {
        if (s==0 && t==0) continue;
        var c = i+s*X_SIZE+t;
        if (c>=0 && c<tempField.length) {
          if (i<c && c%X_SIZE!=0 || i>c && c%X_SIZE!=X_SIZE-1) {
            if (tempField[c]) n++;
          }
        }
      }
    }
    if (tempField[i] && (n==2||n==3)) {
      field[i] = 1;
    } else if (!tempField[i] && n==3) {
      field[i] = 1;
    } else field[i] = 0;
  }
  draw(field);
  time = new Date() - start;
  setTimeout(update, 1000/FPS, field, tempField);
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
  
  var width = xy[1];
  var height = xy[2];
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
        //for (var c = 0; c < num; c++)
        //  res[y][x+c] = 1;
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
