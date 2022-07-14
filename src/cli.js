const {mdLinks} = require('./index.js');
const chalk = require("chalk");
const getTypeCode = require('./utilities.js')
// console.log(chalk.rgb(42, 72, 88) ("MMMMMMMMMMMMMMMNK0KWMMMMMNK0XWMMMMMMWX0XWNKKNMMMMMMW0dOWMMMMMMMMMMWX0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMM"))
// console.log(chalk.rgb(8, 115, 127) (`MMMMMMMMMMMMMMMNK0KWMMMMMNK0XWMMMMMMWX0XWNKKNMMMMMMW0dOWMMMMMMMMMMWX0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
// console.log(chalk.rgb(38, 120,100) (`MMMMMMMMMMMMMMMk'..oNMMMXc..;0MMMMMMK:.lNO'.dWMMMMMNd,oNMMMMMMMMMMXc.:XMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
// console.log(chalk.rgb(57, 180, 142)(`MMMMMMMMMMMMMMMx.  .xWMNl   'OMXklll'  :Nk. oWMMMMMNx:xNKooxdcco0WX; ,KNkldKWKdlccoONMMMMMMMMMMMMMMM`))
// console.log(chalk.rgb(57, 180, 142) (`MMMMMMMMMMMMMMMx. ...OWd... 'OX: .cl;. :Nk. oWMMMMMX; ;Kk. 'lc. 'OX; 'd;.,kN0, .ll;:OWMMMMMMMMMMMMMM`))
// console.log(chalk.rgb(8, 159, 143)  (`MMMMMMMMMMMMMMMx..ol.,l..oc .Ok. lWM0' :Nk. oWMMMMMX; ,Kk. oWWd..xX;    'OWMXl..,::o0WMMMMMMMMMMMMMM`))
// console.log(chalk.rgb(0, 137, 138) (`MMMMMMMMMMMMMMMx..xK:  .lXl .OO. ;0Xd. :Xk. cKKKKNWX; ,Kk. oWMx..xX; .:' ;0WXxlodc. :XMMMMMMMMMMMMMM`))
// console.log(chalk.rgb(8, 115, 127) (`MMMMMMMMMMMMMMMk''kW0;.cXWo.;0Nx,.';:..lNk'..',',xXKc.:XO'.dWMk..kXc.:K0:.;OKl'';,.,kWMMMMMMMMMMMMMM`))
// console.log(chalk.rgb(33, 93, 110) (`MMMMMMMMMMMMMMMNKKNMMNKNMMNKXWMMNK0KNX0XWNK00000KXWWX0XWNKKNMMNKKNWX0XWMNK0XWWX0O0KNMMMMMMMMMMMMMMMM`))
// console.log(chalk.rgb(42, 72, 88) (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))


//
console.log(chalk.rgb(42, 72, 88) (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
console.log(chalk.rgb(8, 115, 127) (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
console.log(chalk.rgb(38, 120,100) (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
console.log(chalk.rgb(57, 180, 142)(`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
console.log(chalk.bold.rgb(57, 180, 142) (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM 🔗  MD-LINKS 🔗 MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
console.log(chalk.rgb(8, 159, 143)  (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
console.log(chalk.bold.rgb(0, 137, 138) (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM   Maca Paredes ©️  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
console.log(chalk.rgb(8, 115, 127) (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
console.log(chalk.rgb(33, 93, 110) (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))
console.log(chalk.rgb(42, 72, 88) (`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`))


const processArg = process.argv;
// console.log(processArg)
const inputPath = process.argv[2]; //3

//no arguments shownoarg()
if(processArg.length <= 2){
    console.log(chalk.bold.rgb(57, 180, 142)("¡¡You must enter an argument!!"))
    console.log(chalk.bold.rgb(0, 137, 138)("Valid options example:"))
    console.log(chalk.rgb(8, 115, 127)("$ md-links ./some/folder-or-fileMd "))
    console.log(chalk.rgb(8, 115, 127)("$ md-links ./some/folder-or-fileMd --validate"))
    console.log(chalk.rgb(8, 115, 127)("$ md-links ./some/folder-or-fileMd --stats"))
    console.log(chalk.rgb(8, 115, 127)("$ md-links ./some/folder-or-fileMd --stats --validate"))
}

//default
if(processArg.length === 3) {
    console.log(chalk.bold.rgb(100, 211, 170)(`
🔎 Looking for links...`))
    mdLinks(inputPath, {validate:false,stats:false}).then((data)=>{
        console.log(chalk.rgb(100, 211, 170)(`    - Links found: ${data.length}`))
        console.log(chalk.rgb(100, 211, 170)(`    - Results:👇️
        `))
        data.forEach((element,i,data) => {
            console.log(chalk.bold.rgb(100, 211, 170)(`${i+1}.`, "href: " , data[i].href))
            console.log(chalk.bold.rgb(5, 120, 129)("    Text: ", data[i].textLink))
            console.log(chalk.bold.rgb(5, 120, 129)("    📍 ",data[i].path))
        });
    }).catch((error)=>{
        console.log(chalk.bold.rgb(233, 53, 53)(` 
⛔ Invalid Path
        `)) 
        console.log(chalk.rgb(233, 53, 53)(`   ${error.message}
        `))
    })
 }

// --validate
if (processArg.length === 4 && processArg.includes('--validate')){
     console.log(chalk.bold.rgb(100, 201, 135)(`
🔗  Validating links...`))
     mdLinks(inputPath, {validate:true}).then((data)=>{
        console.log(chalk.rgb(100, 201, 135)(`    - Links found: ${data.length}`))
        console.log(chalk.rgb(100, 201, 135)(`    - Results:`))
        const validate = data.map(obj=>{
            return {
                ...obj, typeCode: getTypeCode(obj)
            }
        })
        console.log(validate)
        
     }).catch((error)=>{
        console.log(chalk.bold.rgb(233, 53, 53)(` 
    ⛔ Error
        `)) 
        console.log(chalk.rgb(233, 53, 53)(`    ${error.message}
        `))})
}

//--stats
if(processArg.length === 4 && processArg.includes('--stats')){
    console.log(chalk.bold.rgb(100, 201, 135)(` 
🔗  Getting stats...
`))
   mdLinks(inputPath, {stats:true}).then((data)=>{
        console.log(chalk.rgb(100, 201, 135)(`    - Total Links: ${data.length}`))
        const unique = Array.from(new Set(data.map(item => item.href))).length;
        console.log(chalk.rgb(100, 201, 135)(`    - Unique: ${unique}
        `))
        
     }).catch((error)=>{
        console.log(chalk.bold.rgb(233, 53, 53)(` 
    ⛔ Invalid Path2
        `)) 
        console.log(chalk.rgb(233, 53, 53)(`    ${error.message}
        `))})
}

// stats and validate
if( processArg.includes('--stats')&& processArg.includes( '--validate')){
    console.log(chalk.bold.rgb(100, 201, 135)(`
 🔗  Getting  information...
 `))
    
    mdLinks(inputPath, {stats:true,validate:true}).then((data)=>{
        
        console.log(chalk.bold.rgb(100, 201, 135)(`    - Total Links: ${data.length}`))
        
        const unique = Array.from(new Set(data.map(item => item.href)));
        console.log(chalk.bold.rgb(100, 201, 135)(`    - Unique: ${unique.length}`))
        
        console.log(chalk.bold.rgb(100, 201, 135)(`    - Status Details: `))
        let details= {}
        data.forEach((item)=>{details[item.responsetext] = (details[item.responsetext] || 0) + 1;})
         
        Object.entries(details).forEach(([key, value]) => {
            key !== 'undefined'? key =key : key = "Unable to make Request"
            console.log(chalk.rgb(100, 201, 135)('        ' + key + ': ' + value)); 
        });
        console.log(` `)      
    })
    .catch((error)=>{
        console.log(chalk.bold.rgb(233, 53, 53)(` 
    ⛔ Invalid Path
        `)) 
        console.log(chalk.rgb(233, 53, 53)(`    ${error.message}
        `))})
}