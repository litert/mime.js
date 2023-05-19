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

根據檔案名稱、路徑和副檔名獲取 mime 類型。

> 本庫不需要經常更新，因此即使很久沒有更新，只要它依然存在，則表示它是可用的。我們會持續關注其是否可以正常運行在最新的 Node 和瀏覽器環境。

## 安裝

### NPM

你可以直接通過 npm 命令進行安裝。

```sh
$ npm i @litert/mime --save
```

### CDN

如果你在瀏覽器中使用，可以使用 CDN 模式：

```html
<script src="https://cdn.jsdelivr.net/npm/@litert/loader@3.5.0/dist/loader.min.js?path=index&npm={'@litert/mime':'0.1.3'}"></script>
```

## 使用

演示程式碼使用 TypeScript 語言編寫。

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

正確編譯後，在終端中使用 `node ./dist/test-node` 就可以執行示例程式碼。

### 瀏覽器

在瀏覽器中訪問 `test/` 目錄即可查看示例。

[點擊此處在線查看示例](https://litert.github.io/mime.js/test/)

## 許可

本庫使用 [Apache-2.0](../LICENSE) 許可。