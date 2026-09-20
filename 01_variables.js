const accountId = '1234566';
let accEmail = "gaurav@gmail.com"
var accPass = "1234"
accCity = " jaipur"
let accStatus;// by default -> undefined

/*  avoid using var 
because of block and functional scope issues
*/

// accountId = 2;
console.log(accountId)
console.table([accountId , accEmail , accPass , accCity , accStatus]);