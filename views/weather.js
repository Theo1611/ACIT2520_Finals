document.getElementById("submit").addEventListener('click', () => {
	var data = encodeURI(document.getElementById('word_input').value);
	console.log(data);
	var xmlhttp = new XMLHttpRequest();
	var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+data+'&key=AIzaSyDY7ZYa5qUgs5IYLtWG7MSK6rIvSYUVKVc'
	xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        console.log(myArr);
        lat = myArr.results[0].geometry.location.lat;
        long = myArr.results[0].geometry.location.lng;
        var newXmlhttp = new XMLHttpRequest();
        var weather_url = 'https://api.darksky.net/forecast/e90ce0e915ebf043731e721f25874a7a/'+lat+','+long;
        xmlhttp.onreadystatechange = function() {
        if (newXmlhttp.readyState ==4 && newXmlhttp.status == 200) {
        	var result = JSON.parse(newXmlhttp.responseText);
        	document.getElementById('weather_display').innerHTML = result.hourly.summary;
        }};
        newXmlhttp.open("GET", weather_url, true);
		newXmlhttp.send();
    }};
    xmlhttp.open("GET", url, true);
	xmlhttp.send();
})