	$( document ).ready(function() {
	 $('#dEstados option[value=8]').attr('selected','selected');
	 $('#dEstados').chosen({width: "95%"});
	 $('#dMunicipios').chosen({width: "95%"});
	 municipios(8);
	});
	function municipios (id) {
		$.post('/imedich/pacientes/municipios', {municipioid: id},
          function (data) {
          	$('#dMunicipios').empty();
          	for(i = 0; i < data.length; i++){
					$('#dMunicipios').append("<option value='"+data[i].ID+"' id='Municipio"+data[i].ID+"'>"+data[i].NOMBRE+"</option>");
				}
			$("#dMunicipios").val(233);
			$("#dMunicipios").trigger("chosen:updated");
          });
	}
	function municipios3 (id,municipio) {
		$.post('/imedich/pacientes/municipios', {municipioid: id},
          function (data) {
          	$('#dMunicipios').empty();
          	for(i = 0; i < data.length; i++){
					$('#dMunicipios').append("<option value='"+data[i].ID+"' id='Municipio"+data[i].ID+"'>"+data[i].NOMBRE+"</option>");
				}
			$("#dMunicipios").val(municipio);
			$("#dMunicipios").trigger("chosen:updated");
          });
	}
	function clientes (id) {
		$.get('clientes',
          function (data) {
          	$('#sCliente').empty();
          	for(i = 0; i < data.length; i++){
					$('#sCliente').append("<option value='"+data[i].ID+"' id='Municipio"+data[i].ID+"'>"+data[i].NOMBRE+" ["+data[i].RFC+"]</option>");
				}
			$("#sCliente").val(id);
			$("#sCliente").trigger("chosen:updated");
          });
	}
	function municipios2 (id) {
		$.post('municipios', {municipioid: id},
          function (data) {
          	$('#sMunicipios').empty();
          	for(i = 0; i < data.length; i++){
					$('#sMunicipios').append("<option value='"+data[i].ID+"' id='Municipio"+data[i].ID+"'>"+data[i].NOMBRE+"</option>");
				}
			$("#dMunicipios").val(233);
			$("#dMunicipios").trigger("chosen:updated");
          });
	}
	function verificar_campo(campo) {
		n = verificar_input(campo);
	    if(n > 0){
	      $('#bEnviar').prop("disabled",true);
	    } else {
	      $('#bEnviar').prop("disabled",false);
	    }
  	}
  	function verificar_campo2(campo) {
	    n = verificar_input(campo);
	    if(n > 0){
	      $('#cGuardar').prop("disabled",true);
	    } else {
	      $('#cGuardar').prop("disabled",false);
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
