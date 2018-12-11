var result = '';

document.getElementById("submit").addEventListener('click', () => {
	var data = encodeURI(document.getElementById('word_input').value);
	console.log(data);
	var xmlhttp = new XMLHttpRequest();
	var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+data+'&key=AIzaSyDY7ZYa5qUgs5IYLtWG7MSK6rIvSYUVKVc'
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        result = myArr;
    };
    xmlhttp.open("GET", url, true);
	xmlhttp.send();
	};
})