//In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).



function toFreud(string){
    return string.split('').map(x => x && 'sex').join('')
}