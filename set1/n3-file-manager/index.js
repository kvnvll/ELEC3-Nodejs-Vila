
// Name: VILA, KEVIN V.
// Section: IV-BSIT C
// Activity: N3 - File Manager
// Date: November 2026

const fs = require("fs");
const path = require("path");

const filesFolder = path.join(__dirname, "files");

if (!fs.existsSync(filesFolder)) {
    fs.mkdirSync(filesFolder);
}

const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

const filePath = path.join(filesFolder, fileName || "");

switch (command) {
    case "create":
        if (!fileName || !content) {
            console.log("Please provide a file name and content.");
            break;
        }

        fs.writeFileSync(filePath, content);
        console.log("File created successfully:", fileName);
        break;

    case "read":
        if (!fs.existsSync(filePath)) {
            console.log("File not found:", fileName);
            break;
        }

        console.log("File Content:");
        console.log(fs.readFileSync(filePath, "utf8"));
        break;

    case "update":
        if (!fs.existsSync(filePath)) {
            console.log("File not found:", fileName);
            break;
        }

        if (!content) {
            console.log("Please provide content to append.");
            break;
        }

        fs.appendFileSync(filePath, "\n" + content);
        console.log("File updated successfully:", fileName);
        break;

    case "delete":
        if (!fs.existsSync(filePath)) {
            console.log("File not found:", fileName);
            break;
        }

        fs.unlinkSync(filePath);
        console.log("File deleted successfully:", fileName);
        break;

    case "list":
        const files = fs.readdirSync(filesFolder);

        if (files.length === 0) {
            console.log("No files found.");
            break;
        }

        files.forEach(file => {
            const currentPath = path.join(filesFolder, file);
            const stats = fs.statSync(currentPath);

            if (stats.isFile()) {
                console.log("-------------------------");
                console.log("Full Path:", currentPath);
                console.log("File Name:", path.basename(file));
                console.log("Extension:", path.extname(file));
                console.log("Contents:");
                console.log(fs.readFileSync(currentPath, "utf8"));
            }
        });
        break;

    default:
        console.log("Unknown command!");
        console.log("Available commands: create, read, update, delete, list");
}
