var path = require('path');
const fs = require('fs');

function replace(folder, fileToCloneName, stringToFind, copyList, doOverwriteFiles) {
    // Check folder exists
    if (!fs.existsSync(folder)) {
        console.log("Error: no dir '" + folder +"' found!");
        return;
    }

    // Check that copyList has elements
    copyList = Array.from(copyList);
    if (copyList.length == 0) {
        console.log("Error: copyList has no elements!");
        return;
    }

    // Check file for copying exists
    let fileToClonePath = path.resolve(folder, fileToCloneName);
    if (!fs.existsSync(fileToClonePath)) {
        console.log("Error: no file '" + fileToClonePath +"' found!");
        return;
    }

    // Get contents of file to copy
    let fileToCloneContents = null;
    try {
        fileToCloneContents = fs.readFileSync(fileToClonePath, 'utf8');
    } catch (err) {
        console.error(err);
    }
    if (fileToCloneContents == null || fileToCloneName.indexOf(stringToFind) == -1) {
        console.log("Error: file '" + fileToCloneName +"' has no string '" + stringToFind + "' to replace!");
        return;
    }

    console.log("\n\nCloning files in: \n" + folder);

    copyList.forEach(stringToReplace => {
        let newFileName = fileToCloneName.replace(stringToFind, stringToReplace);
        let newFilePath = path.resolve(folder, newFileName);

        let doSaveFile = true;
        if (fs.existsSync(newFilePath)) {
            if (doOverwriteFiles) {
                console.log("Overwriting " + newFileName);
            } else {
                console.log("Error: existing file '" + newFileName + "' found, but overwrite files is off!");
                doSaveFile = false;
            }
        } else {
            console.log("Creating " + newFileName);
        }
        
        if (doSaveFile) {
            fs.writeFile(newFilePath, 
                fileToCloneContents.replaceAll(stringToFind, stringToReplace), 
                (err) => {
                    if (err)
                        console.log(err);
                });
        }
    });
    console.log("\nfinished :)");
}

// Prints formatted english lang file entries that can be pasted into the lang file
function printLang(folder, fileToCloneName, stringToFind, copyList, modid) {
    // Check folder exists
    if (!fs.existsSync(folder)) {
        console.log("Error: no dir '" + folder +"' found!");
        return;
    }

    // Check that copyList has elements
    copyList = Array.from(copyList);
    if (copyList.length == 0) {
        console.log("Error: copyList has no elements!");
        return;
    }

    // Check file for copying exists
    let fileToClonePath = path.resolve(folder, fileToCloneName);
    if (!fs.existsSync(fileToClonePath)) {
        console.log("Error: no file '" + fileToClonePath +"' found!");
        return;
    }

    // Get contents of file to copy
    let fileToCloneContents = null;
    try {
        fileToCloneContents = fs.readFileSync(fileToClonePath, 'utf8');
    } catch (err) {
        console.error(err);
    }
    if (fileToCloneContents == null || fileToCloneName.indexOf(stringToFind) == -1) {
        console.log("Error: file '" + fileToCloneName +"' has no string '" + stringToFind + "' to replace!");
        return;
    }

    console.log("\nFormatted English Lang:");

    copyList.forEach(stringToReplace => {
        let newFileName = fileToCloneName.replace(stringToFind, stringToReplace).replace(".json", "");
        let nameOfItem = newFileName.split("_").map(f => {
            return f[0].toUpperCase() + f.slice(1);
        }).join(" ");

        console.log("  \"item." + modid + "." + newFileName + "\": \"" + nameOfItem + "\",");
    });
    console.log("\nfinished :)");
}

// Prints a list of the items that can be pasted into a tag json file
function printTag(folder, fileToCloneName, stringToFind, copyList, modid) {
    // Check folder exists
    if (!fs.existsSync(folder)) {
        console.log("Error: no dir '" + folder +"' found!");
        return;
    }

    // Check that copyList has elements
    copyList = Array.from(copyList);
    if (copyList.length == 0) {
        console.log("Error: copyList has no elements!");
        return;
    }

    // Check file for copying exists
    let fileToClonePath = path.resolve(folder, fileToCloneName);
    if (!fs.existsSync(fileToClonePath)) {
        console.log("Error: no file '" + fileToClonePath +"' found!");
        return;
    }

    console.log("\nFormatted Tags:");

    // Get contents of file to copy
    let fileToCloneContents = null;
    try {
        fileToCloneContents = fs.readFileSync(fileToClonePath, 'utf8');
    } catch (err) {
        console.error(err);
    }
    if (fileToCloneContents == null || fileToCloneName.indexOf(stringToFind) == -1) {
        console.log("Error: file '" + fileToCloneName +"' has no string '" + stringToFind + "' to replace!");
        return;
    }

    copyList.forEach(stringToReplace => {
        let newFileName = fileToCloneName.replace(stringToFind, stringToReplace).replace(".json", "");
        console.log("  \"" + modid + ":" + newFileName + "\",");
    });
    console.log("\nfinished :)");
}

function printCopyList(copyList) {
    // Check that copyList has elements
    copyList = Array.from(copyList);
    if (copyList.length == 0) {
        console.log("Error: copyList has no elements!");
        return;
    }

    console.log("\nCopyList Array of Strings:")

    let stringList = ""
    copyList.forEach(str => {
        stringList += "\"" + str + "\", "
    })
    console.log(stringList)
}


module.exports = { replace, printLang, printTag, printCopyList };