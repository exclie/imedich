function verificar_campo(campo) {
		n = verificar_input(campo);
	    if(n > 0){
	      $('#bEnviar').prop("disabled",true);
	    } else {
	      $('#bEnviar').prop("disabled",false);
	    }
 }
function verificar_input(campo) {
  		if($(campo).val() == '' || $(campo).val() == 0){
	      $(campo).siblings('.glyphicon').remove();
	      $(campo).parent().removeClass('has-success has-feedback');
	      $(campo).parent().addClass('has-error has-feedback');
	      $(campo).parent().prepend('<label class="control-label sr-only"></label>');
	      $(campo).parent().append('<span class="glyphicon glyphicon-remove form-control-feedback" title="Campo requerido."></span>'); 
	    } else {
	      $(campo).siblings('.glyphicon').remove();
	      $(campo).parent().removeClass('has-error has-feedback');
	    }
	    var n = $(campo).parents().find('.has-error').length;
	    return n;
  	}