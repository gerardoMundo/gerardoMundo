import chalk from 'chalk';
import {sumar, multiplicar} from './matematicas.js';


const log = console.log;
const sum = sumar(21, 56);
const multi = multiplicar(21, 90);

log(chalk.bgRed(sum));
log(chalk.bgGreen(multi));