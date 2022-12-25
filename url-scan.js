const fetch = require('node-fetch');
const fs = require('fs');
const readline = require('readline-sync');
const wordlistFile = fs.readFileSync('wordlist.txt', 'utf-8').split('\n');

const cliRed = "\x1b[31m"; 
const cliGreen = "\x1b[32m";

function banner(){
	console.log(`
   _         ___ _       _         
 _| |___ _ _|  _|_|___ _| |___ ___ 
| . | -_|_'_|  _| |   | . | -_|  _|
|___|___|_,_|_| |_|_|_|___|___|_|  
       
           [dexfinder]                   

			- Made by declanmidd
		`);
};
banner();

const targetUrl = readline.question('target url (https): ');


async function main(targetUrl, wordlist){
	try{
		for(const path of wordlistFile){
			const url = targetUrl + '/' + path;
			

			try{
				const response = await fetch(url)	
				
				if (response.status === 200){
					console.log(`${cliGreen} ~ Directory Found => `+ url)
				} else{
					console.log(`${cliRed} ~ Directory Not Found => ` + url)
				}


			} catch(err){
				console.log(err)
			}
		}
		
	} catch(err){
		console.log('error found => ' + err)
	}
};

main(targetUrl, wordlistFile)