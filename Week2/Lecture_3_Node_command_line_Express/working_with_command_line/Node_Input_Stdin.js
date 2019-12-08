// const some_variable = require('./save_data_toFile');


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
//   readline.question(`Enter File Name: `, (name) => {
//       console.log();
//     let filename = name;
//     let data = '';
//     readline.question(`Enter Text To Save: `, (dataToSave) => {
//         console.log();
//         data = dataToSave;
//         some_variable.write_to_file(filename,data);
//         console.log(`Saved to data to ${filename}.txt`);
//         readline.close();
//       })
//   })



// const some_data_variable = require('./save_data_toFile');


// const readline = require('readline');

// const options = {
//   input: process.stdin,
//   output: process.stdout,
// }
// const readlineInterface = readline.createInterface(
// options
// );


// readlineInterface.question("What is your preferred filename ?", (file_name) => {


//   let filename = file_name;
//   let data_to_save = '';
//     readlineInterface.question("What do you want to save ? Please write below", (data) => {
      
//       data_to_save = data;
//       some_data_variable.write_to_file(filename,data_to_save);
//       console.log(`Saved your data: ${filename}.txt`);
//       readlineInterface.close();
      
//     })

// })


const read_line = require('readline');
const fs = require("fs");

let options = {
  input: process.stdin ,
  output: process.stdout
} 
let some_interface = read_line.createInterface(options)

let filename ;
let data_to_write ;

some_interface.question("what is your filename ?", (data) => {
      console.log(data);
          filename = data;
        some_interface.question("what do you want to write? " ,(data2) => {
          console.log(data2)
          data_to_write = data2;
          fs.writeFileSync(filename+".txt",data_to_write);
          some_interface.close();
        })
          
    }
 )