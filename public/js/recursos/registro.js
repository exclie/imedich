  $(document).ready(function() {
    var mun = document.getElementById('dMunicipios').value;
    if (mun != '0' && mun != ''){
      municipiosx(document.getElementById('dMunicipios').value);
    }
  });
  function verificar_campo(campo) {
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
    if(n > 0){
      $('#bRegistrar').prop("disabled",true);
    } else {
      $('#bRegistrar').prop("disabled",false);
    }
  }
  function municipiosx (id) {
    $('#dMunicipios').empty();
    $.post('register/municipiosajax', {estadoid: id},
          function (data) {
           for(i = 0; i < data.length; i++){
            $('#dMunicipios').append("<option value='"+data[i].ID+"' id='Municipio"+data[i].ID+"'>"+data[i].NOMBRE+"</option>");
          }
          });
  }
  function usuariosx () {
    var nombre = document.getElementById('cUsuario').value;
    if(nombre != '' && nombre.length >= 6) {
      $.post('register/usuariosajax', {nombrestring: nombre},
          function (data) {
              if(data[0].a == '1'){
               reaplicarElementos('#divUsuario','has-success',1,'¡Usuario disponible!');  
              } else if (data[0].a == '2') {
                reaplicarElementos('#divUsuario','has-error',0,'Usuario no disponible'); 
              }
      });
    } 
    if (nombre.length < 6) {
      reaplicarElementos('#divUsuario','has-error',0,'El nombre de usuario requiere mínimo 6 caractéres'); 
    }
  }
  function emailx () {
    var email = document.getElementById('cEmail').value;
    if(email != '') {
      $.post('register/emailajax', {emailstring: email},
          function (data) {
              if(data[0].a == '1'){
                reaplicarElementos('#divEmail','has-success',1,'¡Correo electrónico disponible!');  
              } else if (data[0].a == '2') {
                reaplicarElementos('#divEmail','has-error',0,'Éste correo electrónico ya está registrado'); 
              }
      });
    } else {
      reaplicarElementos('#divEmail','has-error',0,'Campo requerido'); 
    }
  }
  /* Propiedades: div(campo),tipo(has-error,has-success),exito(1,0),msje(mensaje)*/
  function reaplicarElementos(div,tipo,exito,msje) {
    $(div).removeClass('has-error has-feedback');
    $(div).removeClass('has-success has-feedback');
    $(div +' .control-label').remove();
    $(div+' .glyphicon').remove();
    $(div).addClass(tipo+' has-feedback');
    if(exito == 1){
      $(div).prepend('<label class="control-label">'+msje+'</label>');
    }
    if(exito == 0){
      $(div).prepend('<label class="control-label">'+msje+'</label>');
    }
    if(exito == 1){
      $(div).append('<span class="glyphicon glyphicon-ok form-control-feedback"></span>');    
    }
    if(exito == 0){
      $(div).append('<span class="glyphicon glyphicon-remove form-control-feedback"></span>');    
    }
    
  }

  