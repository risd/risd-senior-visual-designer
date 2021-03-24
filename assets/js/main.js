console.log('%c Apply Today!', 'font-family:Gotham, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-feature-settings: "salt" 3; font-weight:bold; marign-bottom:1em; color: rgb(0,255,0); font-size:120px; letter-spacing:-10px;');

$( '.gallery-video' ).draggable()

var $images = $( '.gallery-image' )

var pileMade = false;
var anImageIsBig = false

if( $( window ).width() > 512) {
	makeAPile()
}

$( window ).resize( function () {
	if( ( $( window ).width() > 512 ) && ( pileMade === false ) ) {
		makeAPile()
	}

	updateGalleryValues()
} )

$images.draggable()
$images.hover( hoveringImage, notHoveringImage )

function hoveringImage () {
	if ( anImageIsBig === false ) {
		var $image = $( this )
		var positionZ = $image.data( 'z-indez' )
		$image.css( 'z-index', positionZ + 1000 )	
	}
}

function notHoveringImage () {
	if ( anImageIsBig === false ) {
		var $image = $( this )
		var positionZ = $image.data( 'z-indez' )
		$image.css( 'z-index', positionZ )	
	}
}

function makeAPile(){
	$images.each( function () {
		var $image = $( this )

		var positionLeft = randomBetween( -15, 60 )
	  var positionTop = randomBetween( -20, 75 )
	  var positionZ = randomBetween( 1, 10 )

    $image.css( {
    	left: positionLeft + '%',
    	top: positionTop + '%',
    	zIndex: positionZ,
    } )

    $image.data( 'z-indez', positionZ )
	} )

 	pileMade = true

 	return pileMade
}

function randomBetween ( min, max ) {
	return Math.floor( Math.random() * ( max - min) ) + min;		
}

var $galleryContainer = $( '.gallery-of-work' )
var galleryContainerWidth = $galleryContainer[ 0 ].clientWidth
var galleryCenter = galleryContainerWidth / 2

var $galleryImageBigToggleIcons = $( '.gallery-image .icon' )

$galleryImageBigToggleIcons.click( function () {
	var $icon = $( this )

	anImageIsBig = ! anImageIsBig

	if ( anImageIsBig === true ) {
		$galleryImageBigToggleIcons.css( 'pointer-events', 'none' )
		$icon.css( 'pointer-events', 'all' )
	}
	else {
		$galleryImageBigToggleIcons.css( 'pointer-events', 'all' )
	}
	
	$images.toggleClass( 'deselected' )

	var $image = $icon.closest( 'figure' )
	$image
		.toggleClass( 'big' )
		.removeClass( 'deselected' )

	var leftCoordinate = $image.css( 'left' )

	galleryContainerWidth = $galleryContainer[ 0 ].clientWidth
	var leftCoordinateClean = parseInt( leftCoordinate, 10 )

	if( leftCoordinateClean >= galleryCenter ){
		$image.toggleClass( 'bottom-right' )
	} else {
		$image.toggleClass( 'bottom-left' )
	}
} )

function updateGalleryValues () {
	galleryContainerWidth = $galleryContainer[ 0 ].clientWidth
	galleryCenter = galleryContainerWidth / 2
}