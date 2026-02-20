

function capitalString(str){
    return str.toUpperCase();
    

}
function reverseString(str){
    return str.split('').reverse().join('');
    
}
function countVowels(str){
    return(str.match(/[aeiou]/gi)||[]).length;
    
}
 

module.exports={capitalString,reverseString,countVowels};



