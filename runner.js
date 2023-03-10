
const { replace, printLang, printTag, printCopyList } = require("./helper.js");
const { copyList } = require("./copylist.js");
var path = require('path');
const fs = require('fs');

/******************** Folder Setup ********************/

// Folder Paths
var resourcesFolder = path.resolve("C:\\Absolute\\Path\\To\\Your\\src\\main\\resources"); // todo Required: Must fill in
var blockstatesFolder = path.resolve(resourcesFolder, './assets/minecafe/blockstates/');
var blockModelsFolder = path.resolve(resourcesFolder, './assets/minecafe/models/block/');
var itemModelsFolder = path.resolve(resourcesFolder, './assets/minecafe/models/item/');
var loottablesFolder = path.resolve(resourcesFolder, './data/minecafe/loot_tables/blocks/');
var recipesFolder = path.resolve(resourcesFolder, './data/minecafe/recipes/');
var recipesFolderSpecific = path.resolve(recipesFolder, './ingredients/pies');

// Print what strings are in the copyList (Optional)
// console.log(copyList);

// Print what a folder has in it (Optional)
// fs.readdirSync(loottablesFolder).forEach(str => console.log("\t- " + str))

/******************** Script Calls ********************/

// Clone files for a list of string variants
// todo must make one call to replace or the script won't create any JSON files
// replace(blockstatesFolder, 'orange_crop_top.json', "orange", copyList, false);
// replace(blockModelsFolder, 'orange_crop_fruit.json', "orange", copyList, true);
