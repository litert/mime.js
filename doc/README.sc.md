# mime.js

<p align="center">
    <a href="https://github.com/litert/mime.js/blob/master/LICENSE">
        <img alt="License" src="https://img.shields.io/github/license/litert/mime.js?color=blue" />
    </a>
    <a href="https://www.npmjs.com/package/@litert/mime">
        <img alt="NPM stable version" src="https://img.shields.io/npm/v/@litert/mime?color=brightgreen&logo=npm" />
    </a><br>
    <a href="https://github.com/litert/mime.js/releases">
        <img alt="GitHub releases" src="https://img.shields.io/github/v/release/litert/mime.js?color=brightgreen&logo=github" />
    </a>
    <a href="https://github.com/litert/mime.js/issues">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/litert/mime.js?color=blue&logo=github" />
    </a>
</p>

根据文件名、路径、扩展名获取 mime 类型。

> 本库不需要经常更新，因此即使很久没有更新，只要它依然存在，则表示他是可用的。我们会持续关注其是否可以正常运行在最新的 Node 和浏览器环境。

## 安装

### NPM

你可以直接通过 npm 命令进行安装。

```sh
$ npm i @litert/mime --save
```

### CDN

如果你在浏览器中使用，可以使用 CDN 模式：

```html
<script src="https://cdn.jsdelivr.net/npm/@litert/loader@3.5.0/dist/loader.min.js?path=index&npm={'@litert/mime':'0.1.2'}"></script>
```

## 使用

演示代码使用 Typescript 语言编写。

```typescript
import * as mime from "@litert/mime";

mime.getData("hello.json");         // {"mime": "application/json", "compressible": true, extension: 'json'}
mime.getData(".html");              // {"mime": "text/html", "compressible": true, extension: 'html'}
mime.getData("css");                // {"mime": "text/css", "compressible": true, extension: 'css'}
mime.getData("hi/baby.js");         // {"mime": "application/javascript", "compressible": true, extension: 'js'}
mime.getData("/root/down/pk.zip");  // {"mime": "application/zip", "compressible": false, extension: 'zip'}
mime.getData("ext.dodooh");         // {"mime": "application/octet-stream", "compressible": false, extension: 'dodooh'}
mime.getMime("root/index.css");     // text/css
```

## 示例

### Node

正确编译后，在终端中使用 `node ./dist/test-node` 就可以运行示例代码。

### 浏览器

在浏览器中访问 `test/` 目录即可查看示例。

[点击此处在线查看示例](https://litert.github.io/mime.js/test/)

## 许可

本库使用 [Apache-2.0](../LICENSE) 许可。