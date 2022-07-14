const fs = require("fs");
const path = require("path");
const fetch = require('node-fetch');


const isPathValide = (inputPath) =>  {
  return fs.existsSync(inputPath) ?  inputPath : inputPath;  
}

const getAllFiles = (dirPath, arrayOfFiles) => {
  if(fs.statSync(dirPath).isDirectory()){
    let files = fs.readdirSync(dirPath); //ls
    arrayOfFiles = arrayOfFiles || [];
    files.forEach((file)=> {
      fs.statSync(dirPath + '/' + file).isDirectory() ? arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles) : arrayOfFiles.push(path.join(dirPath, '/', file))
    });
      return arrayOfFiles
  }else{
  return [dirPath]
  }
}

// const allFiles2 = getAllFiles('/Users/macarenaparedes/Desktop/LABORATORIA/PROYECTOS/Proyecto4/SCL020-md-links/demo-folder')
// const allFiles = getAllFiles('/Users/macarenaparedes/Desktop/LABORATORIA/PROYECTOS/Proyecto4/SCL020-md-links/demo-folder') // 
// console.log(allFiles2)
const filterMd = (arrFiles) => { 
  return arrFiles.filter((filePath)=>{ 
    return path.extname(filePath) ==='.md'})};

// const arrPathsMd = filterMd(allFiles) // 
// console.log({arrPathsMd})
// const isPathValide = (inputPath) => fs.existsSync(inputPath);
// console.log(isPathValide("/Users/macarenaparedes/Desktop/LABORATORIA/PROYECTOS/Proyecto4/SCL020-md-links/demo-folder"))

const getLinks = (arrPathsMd) =>{
    const links = []
    arrPathsMd.forEach((filePath, i)=>{
        const bufStr = fs.readFileSync(filePath).toString();
        const regAnchor = /\[(.*)\]\((h.*)\)/g
        const array = [...bufStr.matchAll(regAnchor)]; 
        array.forEach((item)=>{
            const objLink = {
                href:item[2], 
                textLink: item[1],
                path: filePath,
                name: path.basename(filePath).substring(0,path.basename(filePath).length-3)
            };
           links.push(objLink)
        })
    });  
    return links;
}

// const objLinks = getLinks(arrPathsMd)
// console.log(objLinks)

const validateLinks = (links) => {
  const valArray = [];
   links.map((link,i,links) =>{
    const fetchLink = fetch(link.href).then((response)=>
    { return  {
        name: links[i].name,
        text: links[i].textLink,
        path:links[i].path,
        href: links[i].href,
        responsetext: response.statusText,
        responseStatus: response.status,
        responseUrl:response.url,
      };}).catch((error)=>{
        return  {
        name: links[i].name,
        text: links[i].textLink,
        path:links[i].path,
        href: links[i].href,
        errorMssge: error.message,
      }})
    valArray.push(fetchLink)
  });
  return Promise.all(valArray);
};

module.exports = {
  isPathValide,
  getAllFiles, 
  filterMd, 
  getLinks,
  validateLinks
}