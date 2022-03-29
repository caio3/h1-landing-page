let youtube = document.querySelectorAll( ".youtube" );

for (let i = 0; i < youtube.length; i++) { 

	// thumbnail image source.
	//let source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
	let source = "43336667836/images/video-thumb.jpg";

	// Load the image asynchronously
	let image = new Image();
	image.src = source;
	image.addEventListener( "load", function() {
		youtube[ i ].appendChild( image );
	}( i ) );

	youtube[i].addEventListener( "click", function() {

		var iframe = document.createElement( "iframe" );

		iframe.setAttribute( "frameborder", "0" );
		iframe.setAttribute( "allowfullscreen", "" );
		iframe.setAttribute( "src", "https://player.vimeo.com/video/691105207?h=2c73f1c2f5" );
		iframe.setAttribute( "allow", "autoplay" );

		this.innerHTML = "";
		this.appendChild( iframe );
	} );
}