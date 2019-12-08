const file_system = require('fs');



const write_to_file = (filename, data) => {



    file_system.writeFileSync(filename+'.txt',data);

}

module.exports = {
    write_to_file
}




