$(document).ready(function() {
	$('.slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				dots: true
			}
		}]
	});
	$('h2').click(function() {
		console.log($(this).css("background-color"));
		if ($(this).css("background-color") == "rgb(211, 211, 211)" || $(this).css("background-color") == "rgb(255, 0, 0)") {
			$(this).css({"background-color":"blue"})
		} else if ($(this).css("background-color") == "rgb(0, 0, 255)") {
			$(this).css({"background-color":"green"})
		} else {
			$(this).css({"background-color":"red"})
		}
	});

	$('#chr1').change(function () {
		var img = $("<img id='img-p1' src='img/"+$(this).val()+".png'>");
		$("#img-p1").remove();
		$("#selected-char-p1").append(img);
		img.css({"left":"-150%"});
		img.animate({"left":"0%"},{"duration":300});
	});
	$('#chr2').change(function () {
		var img = $("<img id='img-p2' src='img/"+$(this).val()+".png'>");
		$("#img-p2").remove();
		$("#selected-char-p2").append(img);
		img.css({"right":"-150%"});
		img.animate({"right":"0%"},{"duration":300});
	});

	
	// Validation
	
	$('#playerForm').validate({
		focusCleanup: true,
		rules: {
			addrp1: {
				required: true,
				minlength: 5,
				maxlength: 20
			},
			agep1: {
				required: true,
				min: 18,
				max: 99
			},
			charp1: "required",
			addrp2: {
				required: true,
				minlength: 5,
				maxlength: 20
			},
			agep2: {
				required: true,
				min: 18,
				max: 99
			},
			charp2: "required"
		},
		messages: {
			addrp1: {
				required: "Este campo es obligatorio",
				minlength: "La direccion debe tener mas de 4 caracteres",
				maxlength: "La direccion debe tener menos de 20 caracteres"
			},
			agep1: {
				required: "Este campo es obligatorio",
				min: "Debes tener como minimo 18 años",
				max: "Too old (Has de ser menor de 99)"
			},
			charp1: {
				requierd: "Por favor, selecciona un personaje"
			},
			addrp2: {
				required: "Este campo es obligatorio",
				minlength: "La direccion debe tener mas de 4 caracteres",
				maxlength: "La direccion debe tener menos de 20 caracteres"
			},
			agep2: {
				required: "Este campo es obligatorio",
				min: "Debes tener como minimo 18 años",
				max: "Too old (Has de ser menor de 99)"
			},
			charp2: {
				requierd: "Por favor, selecciona un personaje"
			}
		}
	});
});