// const fs = require('fs'); //this is not required if we use fs.promises, only use for callback hell
const path = require('path');
//Creating var using promises with fs.promises
const fsPromises = require('fs').promises;

//Promise method using async and await method
const fileOps = async() =>{
  try{
    //read file method
    const data = await fsPromises.readFile(path.join(__dirname,'files','start.txt'), 'utf8');
    console.log(data);
    //writefile method
    await fsPromises.writeFile(path.join(__dirname,'files','write.txt'), 'Hi guys,How are you guys');
        console.log('File written successfully');
        //append file method
        await fsPromises.appendFile(path.join(__dirname,'files','write.txt'), ', Hope all of you are good!!');
              console.log('append successfully');
              //rename file method
              await fsPromises.rename(path.join(__dirname,'files','write.txt'), path.join(__dirname,'files','renameFile.txt'))
                      console.log('Rename successfully');
                      //unlink file method(delete file)
                      await fsPromises.unlink(path.join(__dirname,'files','start.txt'), 'utf8');
  }catch(err){
    console.log(err);
  }
}
fileOps();

//exit of uncaught error
process.on('uncaughtException', (err) => {
  console.error(`There was an Uncaught error: ${err}`);
  process.exit(1);
}); 


//callback hell Asynchronous method
fs.readFile(path.join(__dirname,'files','start.txt'), 'utf8',(err, data) => {
  if (err) throw err;
  console.log(data);
});
fs.writeFile(path.join(__dirname,'files','write.txt'), 'Hi guys,How are you guys',(err, data) => {
  if (err) throw err;
  console.log('File written successfully');
  fs.appendFile(path.join(__dirname,'files','write.txt'), ', Hope all of you are good!!',(err, data) => {
    if (err) throw err;
    console.log('append successfully');
    fs.rename(path.join(__dirname,'files','write.txt'), path.join(__dirname,'files','renameFile.txt'),(err) => {
      if (err) throw err;
      console.log('Rename successfully');
    });
  });
});