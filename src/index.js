const {getAllFiles, getLinks, filterMd, validateLinks,isPathValide} = require('./mdlinks')

// 🔥

const mdLinks =  (path, options) => {
    return new Promise((resolve, reject)=>{ 
        if(!options.validate && !options.stats){
            resolve(getLinks(filterMd(getAllFiles(isPathValide(path)))))
        }
        else if(options.validate || options.stats){
            resolve(validateLinks(getLinks(filterMd(getAllFiles(isPathValide(path))))))
        }
        else{
            reject(Error("⛔ Something went wrong "))
        }
        })
}

module.exports = {mdLinks}