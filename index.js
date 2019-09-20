const tar = require('tar');
const fs = require('fs');



tar.x({ // /mnt/c/Users/(the user of your windows)/(file location)
    file: `/mnt/c/Users/blane/Downloads/blanekfink01-github-io-cloned-5959553.20181027T194959670Z.home.tar`
}).then(function(data) {
    console.log(data);
})