const path = require("path");
const fs = require("fs");
// const { stdin, stdout } = process;

const pathStyles = path.join(__dirname, 'styles');
const copyFiles = path.join(__dirname, 'project-dist', 'bundle.css');

const stream = fs.createWriteStream(copyFiles);

fs.readdir(pathStyles,
    { withFileTypes: true },
    (error, files) => {

        files.forEach((x) => {
            if (x.name.slice(-3) === 'css') {
                let filePath = path.join(pathStyles, x.name);
                let newStream = fs.createReadStream(filePath);
                newStream.on('data', (data) => stream.write(data));
            }
        });
    });