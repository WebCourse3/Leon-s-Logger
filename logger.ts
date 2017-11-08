import {colorsTypes } from './colors.js';
import { log } from 'util';
class logger {

	private name: string;
	private configuration: Configuration;

	constructor(name: string, configuration: Configuration) {
		this.name = name;
		this.configuration = configuration;
	}

	public log(level: any, strings: any[]): void {
		let logtypes = {
			'debug'   : this.debug.bind(this),
			'info'    : this.info.bind(this),
			'warning' : this.warning.bind(this),
			'error'   : this.error.bind(this)
		};
		let lvl = level || this.configuration.logLevel;
		logtypes[lvl](strings);
	}

	public info(strings: string[]): void {
		this.consolePrinter(colorsTypes.green,strings);
	}

	public warning(strings: string[]): void {
		this.consolePrinter(colorsTypes.yellow,strings);
	}

	public debug(strings: any[]): void {
		this.consolePrinter(colorsTypes.white,strings);
	}

	public error(strings: string[]): void {
		this.consolePrinter(colorsTypes.red,strings);
	}

	private consolePrinter(colorType:colorsTypes,strings:any[]):void{
		if(this.configuration.console)
		{
			strings.forEach(x=>
			{
				if(this.configuration.colors)
				{
					console.log(colorType,x);
				}
				else
				{
					console.log(x);
				}
			});


		}
		if(this.configuration.file)
		{
			strings.forEach(str=>
			{
				this.writeToFile(str);
			});
		}
	}
	private writeToFile(log: string){
		let fs  = require('fs');
		fs.writeFile('log.txt',log + '\r\n', (err) => {
			if(err) throw err;
		});
	}

}



let difLogs:logger = new logger('test',{console: true, file: true, colors: true, logLevel: 'debug'});
difLogs.log('debug',['log test 1','log test 2']);
difLogs.info(['info 1','info 2']);
difLogs.debug(['debug 1','debug 2']);
difLogs.warning(['warning 1','warning 2']);
difLogs.error(['error 1','error 2']);