(function () {
  var orig = document.getElementById('dolla-bill');
  var lines = orig.innerHTML.split('\n');
  orig.innerHTML = '';
  
  var yeah = []
  
  lines.forEach(function (line) {
    yeah.push(line, '\n');
  });
  console.log(yeah);
  document.getElementById('fixed').innerHTML = yeah.join('\n');
}());