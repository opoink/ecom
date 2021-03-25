const fs = require('fs');
const path = require('path');

const DS = path.sep;
const ROOT = path.dirname(path.dirname(path.dirname(path.dirname(__dirname))));

class StringParser {

    watcher = null;

    /**
     * set the watcher so that we can use it whenever needed
     * @param {*} watcher 
     */
    setWatcher(watcher){
        if(!this.watcher){
            this.watcher = watcher;
        }
    }

    /**
     * chaeck if the string is a valid url or not
     * @param {*} str 
     * @returns 
     */
    validURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    getImageSrc(){
        return new Promise(resolve => {
            setTimeout(f => {
                resolve(true)
            }, 10000)
        })
    }

    /**
     * this will extract img element and make the src
     * as an absolute path, in that case the file can be loadable
     * by file-loader
     * @param {*} source 
     * @param {*} resourcePath 
     * @returns 
     */
    async extractImgSrc(source, resourcePath){
        let regex = /<img.*?>/ig;
        let found = source.match(regex);
        if(found){
            for (const element of found) {
                let r = /src=("|').*?("|')/ig;
                let find = element.match(r);

                let newElement = '';
                if(find){
                    for (const src of find) {
                        let _url = src.replace('src="', '').replace('src=\'', '');
                        _url = _url.replace('"', '').replace('\'');

                        let isValidUrl = this.validURL(_url);
                        if(!isValidUrl){
                            let targetSourceDir = path.dirname(resourcePath)
                            let target = path.resolve(targetSourceDir + _url);
                            target = target.split(path.sep).join('/');
                            if (fs.existsSync(target)) {
                                newElement = element.replace(src, "src=\"" + target + "\"");
                                source = source.replace(element, newElement);
                            }  else {
                                console.log("File not found: " + target);
                                console.log("In: " + resourcePath);
                                console.log(element);
                                process.exit();
                            }
                        }
                    }
                }
            }
        }
        return source;
    }

    /**
     * extract the content and look for a string url()
     * @param {*} source 
     * @param {*} resourcePath 
     * @returns 
     */
    extractCssUrl(source, resourcePath, options=null, emitFile=null){
        let regex = /url\(.*?\)/ig;
        let found = source.match(regex);
    
        if(found){
            for (const url of found) {
                let _url = url.replace('url("', '').replace("url('", '');
                _url = _url.replace('")', '').replace("')", "");
                let isValidUrl = this.validURL(_url);
                if(!isValidUrl){
                    let targetSourceDir = path.dirname(resourcePath);
                    let target = path.resolve(targetSourceDir + _url);
                    target = target.split(path.sep).join('/');
                    
                    if(typeof emitFile === 'function'){
                        if (fs.existsSync(target)) {
                            let outputPath = '';
                            if(options){
                                outputPath = options.outputPath;
                            }
    
                            let fileName = path.basename(target);
    
                            outputPath += fileName;
                            let content = fs.readFileSync(target);
                            let assetInfo = { sourceFilename: target }
                            
                            emitFile(outputPath, content, null, assetInfo);
                            source = source.replace(url, "url(" + options.publicPath + '/' + fileName + ")");
                        }  else {
                            console.log("File not found: " + target);
                            console.log("In: " + resourcePath);
                            console.log(url);
                            process.exit();
                        }
                    }
                    else {
                        source = source.replace(url, "url("+target+")");
                    }
                }
            }
        }
        return source;
    }

    addCssComponentAttr(source, resourcePath, componentAttrId){
        let splitSourcePath = resourcePath.split(DS+'vue'+DS+'components'+DS);

        if(splitSourcePath.length > 1){
            source = "\n"+source;
            // let regex = /[(\r|\n)](\.|#)(.*?){[(\r|\n)]/ig;
            let regex = /[\#\.\w\-\,\s\n\r\t:]+(?=\s*\{)/ig;
                
            let found = source.match(regex);
            if(found){
                found.forEach(selector => { 
                    let newSelector = selector.replace(/(\r\n|\n|\r)/gm, "");

                    let dirname = path.dirname(resourcePath);
                    let cai = componentAttrId.getComponentAttrId(dirname);
                    let attr = "[" + cai.component_value_prefix + "=\"" + cai.component_value +"\"]";
                    newSelector = selector.trim() + attr;

                    // newSelector = newSelector.replace(/(\s){/gm, attr + " {");

                    source = source.replace(selector, "\n"+newSelector+" ");
                });
            }
        }
        return source;
    }
}

module.exports = StringParser;