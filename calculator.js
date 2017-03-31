/**
	@num1 代表一个形式参数
	@num2 代表一个形式参数
	@opera 代表一个形式参数
	@calculator 代表函数名
	@function 代表函数的关键字
*/
function calculator(num1,num2,opera){
//输入两个数，再输入一个运算符，得到结果
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	var res = 0;
		switch(opera){
			case '+':
			res = num1 + num2;
			break;
			case '-':
			res = num1 - num2;
			break;
			case '*':
			res = num1 * num2;
			break;
			case '/':
			res = num1 / num2;
			break;
			case '%':
			res = num1 % num2;
			break;
			default:
			alert('enter errors');
			break;
		}
		document.write('res =' + res);
}