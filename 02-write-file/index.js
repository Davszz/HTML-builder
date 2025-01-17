const path = require("path");
const fs = require("fs");
const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'text.txt');
const stream = fs.createWriteStream(filePath);

stdout.write('Hi,write text \n');

stdin.on("data", (data) => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    }
    stream.write(data);
});

process.on("SIGINT", () => process.exit());
process.on("exit", () => stdout.write("Goodbye!\n"));

