function nav() {
	document.getElementById("menu-icon").classList.toggle("menu-icon-open");
	document.getElementById("close-icon").classList.toggle("close-icon-open");

	document.getElementById("nav").classList.toggle("open");


	function getLocation() {
		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(showPosition);
		} else {
		  x.innerHTML = "Geolocation is not supported by this browser.";
		}
	  }
	  
	  function showPosition(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		fetch("https://web.prtl.cc/", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json"
		  },
		  body: JSON.stringify({
			latitude: latitude,
			longitude: longitude
		  })
		}).then(function(response) {
		  return response.json();
		}).then(function(data) {
		  console.log(data);
		});
	  }
	
}