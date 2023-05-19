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

ファイル名、パス、拡張子から mime タイプを取得します。

> このライブラリは頻繁に更新する必要がないため、長い間更新されていなくても、存在している限り使用可能です。私たちは常に最新の Node およびブラウザ環境で正常に動作するかどうかを確認しています。

## インストール

### NPM

次の npm コマンドを使用して直接インストールできます。

```sh
$ npm i @litert/mime --save
```

### CDN

ブラウザで使用する場合は、CDN モードを使用できます：

```html
<script src="https://cdn.jsdelivr.net/npm/@litert/loader@3.5.0/dist/loader.min.js?path=index&npm={'@litert/mime':'0.1.3'}"></script>
```

## 使用

デモコードは TypeScript で記述されています。

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

## サンプル

### Node

コンパイル後に、ターミナルで `node ./dist/test-node` を使用してサンプルコードを実行できます。

### ブラウザ

`test/` ディレクトリにアクセスすると、サンプルを表示できます。

[ここをクリックしてオンラインでサンプルを表示](https://litert.github.io/mime.js/test/)

## ライセンス

このライブラリは [Apache-2.0](../LICENSE) ライセンスで提供されています。