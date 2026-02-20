const fs=require("fs");
const data=fs.readFileSync("./aman.txt",'utf8');
console.log(data);
const wordCount=data.split(" ").length;
console.log("Word Count:",wordCount);
function writeWordCount() {
   fs.writeFileSync("wordcount.txt",`Word Count: ${wordCount}`);
}
writeWordCount();