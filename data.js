
//calendário com datepicker jQuery
//iniciando calendário no primeiro dia do mês corrente

var d = new Date();
$('#dataEfet').datetimepicker({
	format : "dd/mm/yyyy",
	locale : 'pt-BR',
	minDate: new Date(d.getFullYear(), d.getMonth(), 1)
});	
