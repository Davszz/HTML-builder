const path = require("path");
const fs = require("fs");
// const { stdin, stdout } = process;

const currentFolder = path.join(__dirname, 'files');
const newFolder = path.join(__dirname, 'files-copy');

fs.rm(
    newFolder,
    { recursive: true, force: true },
    (error) => {

        if (error) return console.error(`Ошибка ${error.message}`);

        fs.mkdir(newFolder, { recursive: true }, () => { });

        fs.readdir(
            path.join(__dirname, 'files'),
            { withFileTypes: true },
            (error, files) => {
                if (error) return console.error(`Ошибка ${error.message}`);

                files.forEach((file) => {
                    if (file.isFile()) {
                        fs.copyFile(
                            path.join(__dirname, 'files', file.name),
                            path.join(__dirname, 'files-copy', file.name),
                            (error) => {
                                if (error) return console.error(`Ошибка ${error.message}`);
                            },
                        );
                    }
                });
            },


        );
    },
);