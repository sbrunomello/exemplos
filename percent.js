	

	//Calculo de porcentagem com JS e JQUERY
	//porcentagem baseado no salario
	document.getElementById('percentSalario').onkeyup = function() {
			var salarioNovo = Number(document.getElementById('salarioNovo').value);
			var salario = Number(document.getElementById('salarioAtual').value); 
			var percent = document.getElementById('percentSalario').value;
			salarioNovo = salario * (Number(this.value)/100);
			document.getElementById('salarioNovo').value = salario + percentAtual;
		}
		
			$("#percentSalario").on('change',(function(o) {
			$('#percentSalario').number( true, 2, ',', '.' );
			if($("#percentSalario") < 0)
				{
					alert ("Percentual não pode ser negativo!")
				}
			
		}));

	

	//salario baseado na porcentagem
	document.getElementById('salarioNovo').onkeyup = function() {
		var salarioNovo = Number(document.getElementById('salarioNovo').value);
		var salario = Number(document.getElementById('salarioAtual').value); 
		var p1 = salarioNovo - salario;
		var p2 = p1 / salario;
		var percentual = (p2 * 100).toFixed(4);
		document.getElementById('percentSalario').value = percentual;
	}
