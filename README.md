# minecraft-forge-json-helper

A JS script to help clone JSON files for similar Minecraft blockstates, block models, item models, and recipes. This is to help speed up Minecraft modding.

## Setup

Please have **NodeJS** installed to run the `runner.js` file. 

You might need to install the **NodeJS** `fs` and `path` modules, if you haven't previously used them. 

## Usage

To start, fill in the array in `copylist.js` with your Strings of variants. If the array is empty, the script will *not* clone any JSON files.

Go into `runner.js` and define the absolute path to the `Resources` folder of a Minecraft mod that you want to clone JSON files for. If this is not defined properly, the script will *not* run.

Finally you can define a replace using the `replace()` function. This function takes in the folder path, then the file name to clone, then the string to find, then the array of string variants to replace, then a boolean of wether or not existing files should be overwritten. 
You can use the example to get started. You can clone and replace files in multiple directories by making multiple `replace()` calls.

```javascript
// Example replace call
replace(blockstatesFolder, 'orange_crop_top.json', "orange", copyList, false);
```

Finally run the script using `node runner.js` from a terminal in the repo's root folder. The script will provide you with output as to what it is doing, and will also print out errors if they are encountered. 

---

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A0A2I777F)

