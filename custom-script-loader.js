let fs = require("fs");
let mainDir = "/../custom-scripts/";
let files = fs.readdirSync('.' + mainDir);
let loaded = failed = 0;

let successfulLoad = [
    "color: #1ac",
    "background-color: #000",
    "padding: 2px 4px",
    "border-radius: 2px",
    "font-size: 20px"
].join(';');

let failedLoad = [
    "color: #f05",
    "background-color: #000",
    "padding: 2px 4px",
    "border-radius: 2px",
    "font-size: 20px",
    "font-weight: 900"
].join(';');

for (var file of files) {
    try {
        require('../../../' + mainDir + file);
        loaded++;
        console.log(`%cLoaded: ${file} successfully.`, successfulLoad);
    } catch (Exception) {
        loaded++;
        console.log(`%c${file} failed to load. Reason: ${Exception}`, failedLoad);
    }
}
console.log(`%cLoaded: ${loaded} scripts.\nFailed: ${failed} scripts.`, successfulLoad);
