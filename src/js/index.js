var todasTarefas = new Array();
var tarefasConcluidas = new Array();

function primeiraLetraMaiuscula(text) {
	var retorno = text.toLowerCase();
  return retorno.charAt(0).toUpperCase() + retorno.slice(1);
}
function ordenar(array) {
	return array.sort();
}

function inserirTarefa() {
	var input = pegarInput();
	var text = primeiraLetraMaiuscula(input.value);
	

	if (text !== '') {
		todasTarefas.push(text);
	
		input.value = '';
		atualizarLista();
	}
}

function atualizarLista() {

	if (todasTarefas.length >= 0) {
		zerarTopContainer();
		todasTarefas = ordenar(todasTarefas);

		for (i = 0; i < todasTarefas.length; i++) {

			const localTarefa = document.createElement('div');

			localTarefa.classList.add("tarefasNaoConcluidas");

			localTarefa.innerHTML = `
			<input type="checkbox" class="inputNaoConcluido"  id="${todasTarefas[i]}" unchacked >
			<label  class="textoNaoConcluido" id="${i}">${todasTarefas[i]}</label>
			`
			localTarefa.children[0].addEventListener("click", adicionarCompleto);
			document.querySelector(".container-naoConcluida").appendChild(localTarefa);

		}
	}
}
function adicionarIncompleto() {
	
	const texto = primeiraLetraMaiuscula(this.id);

	todasTarefas.push(texto);
	todasTarefas.sort();

	const index = tarefasConcluidas.indexOf(texto);
	tarefasConcluidas.splice(index, 1);

	atualizarLista();
	atualizasCompletos();
	console.log("incompleto " + todasTarefas);


}
function adicionarCompleto() {

	const texto = primeiraLetraMaiuscula(this.id);
	tarefasConcluidas.push(texto);
	tarefasConcluidas.sort();


	const index = todasTarefas.indexOf(texto);
	todasTarefas.splice(index, 1);

	atualizarLista();
	atualizasCompletos();

	console.log(" texto " + texto);
	console.log(this);
}

function atualizasCompletos() {

	console.log(' tarefas concluidas: ' + tarefasConcluidas);

	if (tarefasConcluidas.length >= 0) {
		zerarBotContainer();

		tarefasConcluidas = ordenar(tarefasConcluidas);

		for (i = 0; i < tarefasConcluidas.length; i++) {

			const localTarefa = document.createElement('div');

			localTarefa.classList.add("tarefasConcluidas");

			localTarefa.innerHTML = `
				<input type="checkbox" class="concluido" checked id="${tarefasConcluidas[i]}"  >
				<label class="textoConcluido"  id="${i}">${tarefasConcluidas[i]}</label>
				`
			localTarefa.children[0].addEventListener("click", adicionarIncompleto);
			document.querySelector(".container-concluido").appendChild(localTarefa);

		}
	}
}
function pegarInput() {
	return document.getElementById("tarefaDigitada");
}

function zerarTopContainer() {
	return document.querySelector(".container-naoConcluida").innerHTML = "";

}
function zerarBotContainer() {
	return document.querySelector(".container-concluido").innerHTML = "";

}
