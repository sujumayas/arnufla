window.Game = function(data){

	//Helper Function that calls showRoom with the info from the Click Handler
	var reload = function(data, frame_name){
		showRoom(data, frame_name);
		
	}

	//Function that uses data to show it in the DOM
	var showRoom = function(data, frame_name){
		if (frame_name == 'cuadro_b' || frame_name == 'cuadro_l' || frame_name == 'cuadro_k' || frame_name == 'cuadro_g') {
			$('#message').text(data[frame_name]['message']);
			$('#opt01').text('This...');
			$('#opt02').text('is...');
			$('#opt03').text('The End.');
			$('#frame').text(frame_name);
		}else{
			$('#message').text(data[frame_name]['message']);
			if (data[frame_name].opt01) {
				$('#opt01').text(data[frame_name]['opt01']['message']);
				$('#opt02').text(data[frame_name]['opt02']['message']);
				$('#opt03').text(data[frame_name]['opt03']['message']);
			}
			$('#frame').text(frame_name);
		}
	}

	//Simple handler for clicks that calls reload on relatedRoom
	var click_handler = function(data){
		$('#options').on('click', 'li', function(e){
			var this_room = $('#frame').text();
			console.log('This room: ' + this_room);
			var option_taken = e.target.id;
			console.log('Option Taken : '+ e.target.id);
			if(data[this_room].hasOwnProperty('opt01')){
				console.log('This room had options, you are going to : ' + data[this_room][option_taken]['relatedRoom']);
				reload(data, data[this_room][option_taken]['relatedRoom']);
			}
			
		});
	}
	
	//We initiate the handler
	click_handler(data);

	//We initiate the game:
	reload(data, 'cuadro_a');

}


