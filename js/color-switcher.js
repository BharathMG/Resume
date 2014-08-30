jQuery( document ).ready( function( $ ){
	var switcher = 'closed';

	$( '.color-switcher-button' ).click(
		function( e ){
			e.preventDefault();
		}
	);

	$( '.color-switcher-button' ).mousedown( function() {
		if( switcher == 'closed' ) {
			$( '#color-switcher' ).stop().animate( {right: '0'}, 300 );
			switcher = 'open';
		}
		else if( switcher == 'open' ) {
			$( '#color-switcher' ).stop().animate( {right: '-250'}, 300 );
			switcher = 'closed';
		}
	});

	$( '#color-switcher .switcher-list li a.scheme' ).click(
		function( e ){
			e.preventDefault();
			var scheme = $( this ).attr( "data-scheme" );
			$( 'body' ).removeClass( function( index, css ) {
				return ( css.match (/\btheme-\S+/g) || [] ).join( ' ' );
			});
			$( 'body' ).addClass( scheme );
		}
	);

	$( '#color-switcher .switcher-list li a.fx' ).click(
		function( e ){
			e.preventDefault();
			var scheme = $( this ).attr( "data-fx" );
			$( 'body' ).removeClass( function( index, css ) {
				return ( css.match (/\bfx-\S+/g) || [] ).join( ' ' );
			});
			$( 'body' ).addClass( scheme );
			//$( '.fx-backstretch' ).backstretch("destroy", preserveBackground);
		}
	);

	$( '#color-switcher .switcher-list li a.backstretch' ).click(
		function( e ){
			e.preventDefault();
			var scheme = $( this ).attr( "data-fx" );
			$( 'body' ).removeClass( function( index, css ) {
				return ( css.match (/\bfx-\S+/g) || [] ).join( ' ' );
			});
			$( 'body' ).addClass( scheme );
			$( '.fx-backstretch' ).backstretch("assets/img/backstretch.jpg");
		}
	);


});