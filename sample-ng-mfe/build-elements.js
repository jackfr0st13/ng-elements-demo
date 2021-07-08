const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
    const files = [
        './dist/runtime.js',
        './dist/polyfills.js',
        './dist/scripts.js',
        './dist/main.js'
      ];
    
      await fs.ensureDir('./dist/widget');
      await concat(files, './dist/widget/user-wc.js');
}
build();