<script>
	// when user clicks on thumbnail replace large image
	$('.product-thumbs a').on('click', function(e){
		e.preventDefault();
		// get the large image info from the link
		var newImage = $(this).attr('href');
		// now replace the href of the large image with newImage
		$("#large-image").attr("src",newImage).stop(true,true).hide().fadeIn()
		// now see if there is an attribute that has a matching image and set that to selected
		var attributes = {{attributes|json}};
	  	for (var item in attributes) {
			for (var i=0; i<attributes[item].length; i++) {
				var attributeItem = attributes[item][i].image;
				if ( attributeItem == newImage){
					//console.log("Image Matched");
					//console.log("itemID: " + attributes[item][i].id);
					var newAttribute = attributes[item][i].id;
					// now update the selected attribute of this item
					$('.catProdAttributeItem option[value="'+newAttribute+'"]').prop('selected', true);
				}
				//console.log("item: " + attributes[item][i].id);
			}
		}
	})
	 
	$('.catProdAttributeItem select').on('change', function(e){
		//e.preventDefault();
		var selectedOption = $(this).val();
		
		var attributes = {{attributes|json}};
	 	for (var item in attributes) {
				for (var i=0; i<attributes[item].length; i++) {
					var attributeItem = attributes[item][i].id;
					if ( attributeItem == selectedOption){
						//console.log("ID Matched");
						//console.log("item: " + attributes[item][i].image);
						var newImage = attributes[item][i].image;
						// now replace the href of the large image with newImage
						if (newImage.length > 1 ){
							$("#large-image").attr("src",newImage).stop(true,true).hide().fadeIn()
						}
					}
					//console.log("item: " + attributes[item][i].id);
				}
			}
	})	

</script>