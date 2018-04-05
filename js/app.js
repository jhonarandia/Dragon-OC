//turn to inline mode
$.fn.editable.defaults.mode = 'inline';
$(document).ready(function() {

	$('#table_clientt').on('click', 'tr.dates-table', function(event) {
		event.preventDefault();

		//$('#username-1').editable();
	});


	$(".dates-table a.edit_num").each(function(){
		var id_up = $(this).attr('id');

		$('#'+id_up).editable();

		console.log(id_up);
	});
});



$(document).ready( function () {
	    $('#table_prov').DataTable({
	    	"scrollX": true,
	    	'language': {
				'lengthMenu': 'Mostrar _MENU_ registros por página',
				'zeroRecords': 'No hay registros - lo sentimos',
				'info': 'Mostrando página _PAGE_ de _PAGES_',
				'infoEmpty': 'No hay registros',
				'search': 'Buscar: ',
				'Previous': 'Anterior',
				'Next': 'Siguiente',
				'infoFiltered': '(filtrado de _MAX_ total de registros)',
				'paginate': {
			      'next': 'Siguiente',
			      'previous': 'Anterior'
			    }
			}
	    });
	} );

$(document).ready( function () {
    $('#table_client').DataTable({
    	'language': {
				'lengthMenu': 'Mostrar _MENU_ registros por página',
				'zeroRecords': 'No hay registros - lo sentimos',
				'info': 'Mostrando página _PAGE_ de _PAGES_',
				'infoEmpty': 'No hay registros',
				'search': 'Buscar: ',
				'Previous': 'Anterior',
				'Next': 'Siguiente',
				'infoFiltered': '(filtrado de _MAX_ total de registros)',
				'paginate': {
			      'next': 'Siguiente',
			      'previous': 'Anterior'
			    }
			}
    });
} );
