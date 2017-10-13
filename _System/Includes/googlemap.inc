<script src="//maps.googleapis.com/maps/api/js"></script>
<script>
    $(document).ready(function(e) {
        
        var address = '{module_contentholder name="Contact - Address"}';
		
			 var styles = [
	{
		"featureType": "landscape",
		"stylers": [
			{
				"hue": "#FF0300"
			},
			{
				"saturation": -100
			},
			{
				"lightness": 37.725490196078425
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.highway",
		"stylers": [
			{
				"hue": "#00D5FF"
			},
			{
				"saturation": 54.599999999999994
			},
			{
				"lightness": -0.4000000000000057
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.arterial",
		"stylers": [
			{
				"hue": "#FFBC00"
			},
			{
				"saturation": -55.10204081632645
			},
			{
				"lightness": 31.98431372549021
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "road.local",
		"stylers": [
			{
				"hue": "#00FFFD"
			},
			{
				"saturation": 0
			},
			{
				"lightness": 0
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "water",
		"stylers": [
			{
				"hue": "#0033FF"
			},
			{
				"saturation": -47.36842105263144
			},
			{
				"lightness": 44.54901960784312
			},
			{
				"gamma": 1
			}
		]
	},
	{
		"featureType": "poi",
		"stylers": [
			{
				"hue": "#FF0300"
			},
			{
				"saturation": -100
			},
			{
				"lightness": 21.411764705882348
			},
			{
				"gamma": 1
			}
		]
	}
];
		
        var map = new google.maps.Map(document.getElementById('googleMap'), { 
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            zoom: 6,
            scrollwheel:false,
            draggable: true,
			 styles: styles
        });
		
		
		
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'address': address
        }, 
         function(results, status) {
             if(status == google.maps.GeocoderStatus.OK) {
                 new google.maps.Marker({
                     position: results[0].geometry.location,
                     map: map
                 });
                 map.setCenter(results[0].geometry.location);
             }
         });
    });
</script>