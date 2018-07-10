// ===[ DEPENDENCIES ]===============================
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const fs = require('fs')
 
 
 
// ===[ MIDDLEWARE ]=================================
app.use(express.static(path.join(__dirname, 'build')))
 
 
 
// ===[ ROUTES ]=====================================
app.get('/ping', function (req, res) {  // Just to test server
 return res.send('pong');
})
 
app.get('/', function (req, res) {      // Route to serve build React-App.
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})



// ===[ FILE-MANIPULATIO ]============================
let myCount = 1

const check1 = () => {
  let sourceFolder = './00-FTP/'
//   let storageFolder = '01-StorageDir'

  fs.readdir(sourceFolder, (err, files) => {
    if(err){ 
        console.log("Error: ", err) 
    }else{
        console.log(`\n =================== \n Check: ${myCount}. Files in Folder:`)
        console.log(files)

        console.log("The name:", files[files.length -1])

        // fs.copyFile(`${sourceFolder}${files[files.length -1]}`, './01-StorageDir/', (err) => {
        //     if (err) throw err;
        //     console.log('source.txt was copied to destination');
        // });


    }

  })

  myCount += 1
}

setInterval(() => { check1() }, 1000)



 
// === [ SERVER LISTENER ]===========================
app.listen((process.env.PORT || 8080), (err) => {
    if(err){ throw err }
    console.log("Server Listening on port: 8080 ....")
})




// const fs = require('fs')
// // ===[ FILE-MANIPULATIO ]============================
// console.log("Checking if directory exist...")
// let sourceFolder = './00-FTP/test.txt'
// if(fs.existsSync(sourceFolder)){
//     console.log("Folder && File exist")
// }else{
//     console.log("NOOOOOO Exist.....")
// }





// const check1 = () => {
//     console.log("\n ===================")
//     console.log(`Check No: ${myCount} if there are any files.`)
//     // let sourceFolder = './00-FTP/one.imd'
//     let sourceFolder = './00-FTP/*.imd'
//     if(fs.existsSync(sourceFolder)){
//         console.log("File exist")
//     }else{
//         console.log("NOOOOOO Directory is EMPTY...")
//     }
//     myCount += 1
//   }