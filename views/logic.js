var data = document.getElementById('data').innerHTML;
var list = data.split(',');
document.getElementById("data").style.display = "none";
for (var i = 0; i < list.length; i++) {
	var image = document.createElement('img');
	image.src = list[i];
	console.log(list[i]);
	document.getElementById('display').append(image);
}

