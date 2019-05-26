var aesjs = require('aes-js');
var sha256 = require('js-sha256');

let key = 'abcd12345678901*';
let iv = 'abcd12345678901*';
let saltValue = "|Os3dcl82";
let string_Val = "FEDSAAS8545|FED|EU01EU02000000000001|RELI00000MUM01|011256899";
let consumer_Num = "52610029";
let sort_Ammount = consumer_Num.split("").sort().join(""); 

/*
Author : Shubham Jaiswal
Devglan Online tool Encryption using Aes256 128 bit
*/
let textto_Convert = string_Val;
console.log("String to convert :",textto_Convert);
key = aesjs.utils.utf8.toBytes(key,'aes');
iv =aesjs.utils.utf8.toBytes(iv);
textto_Convert =aesjs.utils.utf8.toBytes(textto_Convert);

let aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
let encryptedBytes = aesCbc.encrypt(aesjs.padding.pkcs7.pad(textto_Convert));
let final_aes = Buffer.from(encryptedBytes).toString('base64');

console.log("AES256 Value :",final_aes);

var hash = sha256.create();
hash.update(final_aes+saltValue);
let final_Hash = hash.hex();
console.log("Final Hash is :",final_Hash);