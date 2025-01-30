const fs = require('fs')

//fs Create dir using exitsSync method
if(fs.existsSync('./files')){
    //Removedir method
    fs.rmdir('./updatedNewFiles', (err)=>{
        if(err) throw err
        console.log('Directory created successfully')
    })
}
//makedirectory method
fs.mkdir('./updatedFiles', (err)=>{
    if(err) throw err
    console.log('Directory created successfully')
})
//exit of uncaught error
process.on('uncaughtException', (err) => {
    console.error(`There was an Uncaught error: ${err}`);
    process.exit(1);
  }); 