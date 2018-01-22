$(document).ready(function(){


	$('.har').keypress(function(){
		console.log('sds')
		$('#com-btn').css('display','block')
	})
		
	

	$('.mdb').mouseenter(function(){
		$(this).css({
			'background':'url(./images/dream-cards/bck-c.png)#354350',
			'background-repeat':'no-repeat',
			'background-position':"160%",
			'padding':'130px 0 20px 0'
		});
		$(this).empty();
		$(this).append('<a href="AboutDreams.html"class="example-one" data-text="MORE DETAILS +">MORE DETAILS +</a>');
	})
	$('.mdb').mouseleave(function(){
		$(this).css({
			'background':'url(./images/dream-cards/bck.png)white',
			'background-repeat':'no-repeat',
			'background-position':"160%",
			'padding':'70px 0 20px 0'
		});
		$(this).empty();
		$(this).append('<h1>MAGIC</h1>'+
			'<p>Creative storm and ocean of<br>success</p>');
	})

	var date = new Date();
	hour = date.getHours();
	if(hour==22||hour==23||hour==24||hour==1||hour==2||hour==3||hour==4||hour==5||hour==6||hour==7){
		$('#map').append('</script><script type="text/javascript"> google.maps.event.addDomListener(window, "load", init); function init() {'+

               'var mapOptions = {zoom: 11,center: new google.maps.LatLng(40.6700, -73.9400), styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]};'+

                'var mapElement = document.getElementById("map"); var map = new google.maps.Map(mapElement, mapOptions); var marker = new google.maps.Marker({'+
                    'position: new google.maps.LatLng(40.6700, -73.9400), map: map, title: "Snazzy!"});}</script>');
	}else if(hour==8||hour==9||hour==10||hour==11||hour==12||hour==13||hour==14||hour==15||hour==16||hour==17||hour==18||hour==19||hour==20||hour==21){
		$('#map').append('</script><script type="text/javascript"> google.maps.event.addDomListener(window, "load", init); function init() {'+

               'var mapOptions = {zoom: 11,center: new google.maps.LatLng(40.6700, -73.9400), styles: [ { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [ { "color": "#444444" } ] }, { "featureType": "landscape", "elementType": "all", "stylers": [ { "color": "#f2f2f2" } ] }, { "featureType": "poi", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "road", "elementType": "all", "stylers": [ { "saturation": -100 }, { "lightness": 45 } ] }, { "featureType": "road.highway", "elementType": "all", "stylers": [ { "visibility": "simplified" } ] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "transit", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, { "featureType": "water", "elementType": "all", "stylers": [ { "color": "#46bcec" }, { "visibility": "on" } ] } ]};'+

                'var mapElement = document.getElementById("map"); var map = new google.maps.Map(mapElement, mapOptions); var marker = new google.maps.Marker({'+
                    'position: new google.maps.LatLng(40.6700, -73.9400), map: map, title: "Snazzy!"});}</script>');
	}
})