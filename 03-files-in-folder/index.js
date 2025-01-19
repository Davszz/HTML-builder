const path = require("path");
const fs = require("fs");
// const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath, { withFileTypes: true }, (err, files) => {

    files.forEach((x) => {
        let fileFolderPath = path.join(filePath, x.name);
        fs.stat(fileFolderPath, (error, stat) => {
            if (stat.isFile()) {
                const updatePath = path.parse(fileFolderPath);
                const nameFile = updatePath.name;
                const file = updatePath.ext.slice(1);
                const size = Math.round((stat.size / 1024) * 1000) / 1000;
                const fileDescription = (`${nameFile} - ${file} - ${size}kb`)
                console.log(fileDescription);
            }
        });
    });
});