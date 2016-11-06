 $(document).ready(function() {


 	var themes = ['Rainbow Dash', 'Spongebob', 'Vault Boy', 'Dory', 'Elsa', 'Patrick Star', 'Ariel', 'Mr. Krabs', 'Heman', 'Doge', 'Nyan Cat', 'Harry Potter', 'Nickelodeon', 'Power Rangers', '90s', 'Twilight Sparkle', 'Doctor Who', 'Kirby', 'Lego Movie', 'Pinkie Pie'];


	function renderButtons(){ 

			// Deletes the themes prior to adding new themes (this is necessary otherwise you will have repeat buttons)

		// $('#themesView').html ('');	
		$('#themesButtons').empty();		

		// Loops through the array of themes
		for (var i = 0; i< themes.length; i++) {
			themes[i];
			var button = $('<button>');
			button.addClass('theme');
			button.text(themes[i]);
			$('#themesButtons').append(button);
			console.log(button + "test");
		}


	}

		
		// Our array then runs which handles the processing of our movie array
		

    });
