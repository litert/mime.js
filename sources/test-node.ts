import * as mime from "./index";

console.log(mime.getData("jpg"));

console.log(mime.getData("qq.gif"));

console.log(mime.getData("/root/lnmp.png"));

console.log(mime.getData("static/global.js"));

console.log(mime.getMime("root/index.css"));