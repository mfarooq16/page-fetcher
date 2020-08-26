const args = process.argv.slice(2);
const URL = args[0];
const path = args[1];

const fs = require('fs');
const request = require('request');

request(URL, (error, response, body) => {
  if (response && response.statusCode === 200) {
    fs.writeFile(path, body, (err) => {
      if (err) {
        throw err;
      } else {
        let stats = fs.statSync(path);
        let fileSizeInB = stats["size"];
        console.log(`Downloaded and saved ${fileSizeInB} bytes to ${path}`);
      }
    });
  } else {
    console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
  }
});