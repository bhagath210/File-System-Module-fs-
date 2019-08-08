const fs = require('fs');
console.log("******************************Reading, Writing, Deleteing**************************");
var readme = fs.readFile("./f1.js", "UTF-8",function(err,data){ // reading the data in the file 
    if(err){
        console.log(error);
    }
    else{
        console.log(data);
    }
});
console.log("The content in the file 1 is:");

fs.writeFile("./f2.js", "India Is My country. ",(err,data)=>{ // writting the data in the file i.e writing the new data into the file, already exsting will be overridden
    if(err){
        console.log(err);
    }
    else{
        console.log('finishedWriting');
    }
});
console.log("hai");

fs.unlink("./deletefile3.js", err=>{ // deleting the data in the file
    if(err){
        console.log("Error occured");
    }
    else{
        console.log("Delete finished");
    }
});

fs.appendFile("./f2.js","All Indians Are Relatives", (err)=>{ // appending the data to the file i.e only adding the data
    if(err){
        console.log(err);
    }
    else{
        console.log("finished appending the text");
    }
});