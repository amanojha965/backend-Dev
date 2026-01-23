const fs=require('fs');
const data=fs.readFileSync("./aman.txt",'utf8');
console.log(data);
const wordcount=data.split(" ").length;
console.log("word count:",wordcount);
function writeWordCount(){
    fs.writeFileSync("wordcount.txt",`word Count: ${wordcount}`);
}
writeWordCount();