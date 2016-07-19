$(document).ready(function() {
	
    $('#form-0000')
        .bootstrapValidator({
            message: 'Este campo não esta correto.',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
               
                NOME_ITEM:{
                    validators: {
                        notEmpty: {
                            message: 'Campo obrigatório'
                        },
                        remote: {
	                    	type: 'POST',	
	                        url: 'ajax/existeregistro.php',
	                        data: function(validator, $field, value) {
	                            return {
	                                NOME_ITEM: validator.getFieldElements('NOME_ITEM').val(),
	                                opcao: itemJson.opcao,
	                                Id_ITEM: itemJson.Id_ITEM,
	                                //estouaqui: validator.getFieldElements('estouaqui').val()
	                                estouaqui:'item'  
	                            	}

	                        }  
                    	}
                       	
                    }
                },
                
                
                
            }
        })
        .on('success.form.bv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            //preparo o objeto
			

            // Use Ajax to submit form data
            /*$.post($form.attr('action'), itemJson, function(result) {
            	console.log(result);
        		$('.gravarItem-botao').hide();
				$('.alterarItem-botao').show();
				$('.alterarItem-botao').removeAttr('disabled');
				$('.excluirItem-botao').show();
				itemJson.opcao = 'alterar';
				itemJson.Id_ITEM = result.Id_ITEM;
				alerta('GravarItem');
				atualizaItem();
            }, 'json');
            */
        });
});

