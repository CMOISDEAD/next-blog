#!/usr/bin/env node
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "posts/");
const posts = [];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.map((file, i) => {
    const item = path.basename(file, ".html");
    const [title, author, timestamp] = item.split("$");
    const content = fs.readFileSync(path.join(directoryPath, file)).toString();
    posts.push({ id: i, title, content, author, timestamp });
  });
  const object = {
    posts: posts,
  };
  fs.writeFile(
    path.join(__dirname, "posts.json"),
    JSON.stringify(object),
    (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
});

// Purpose: generate a json file with all the content of posts/*.html
// html-structure-name: title$author$timestamp.html
