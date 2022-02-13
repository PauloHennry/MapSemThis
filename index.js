
/*Aqui estamos realizado o calculo de uma array com o metodo filter sem This, ou seja uma das maneiras ate mais visiaveis para fazer algums operações com array. */

function mapSemThis(arr){
	return arr.map(function(item){
		return item * 2;
	});
}

const numeros = [2,4,6,8,10];

console.log(numeros);

