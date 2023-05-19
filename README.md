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

Get MIME type based on file name, path, and extension.

> This repository doesn't require frequent updates, so even if it hasn't been updated for a long time, as long as it still exists, it means it's available. We'll keep an eye on whether it can function properly in the latest Node and browser environments.

## Languages

[简体中文](doc/README.sc.md) | [繁體中文](doc/README.tc.md) | [日本語](doc/README.ja.md)

## Installation

### NPM

In the Node.js environment, you can install directly using NPM:

```sh
$ npm i @litert/mime --save
```

### CDN

If you're using it in a browser, you can utilize the CDN mode.

```html
<script src="https://cdn.jsdelivr.net/npm/@litert/loader@3.5.0/dist/loader.min.js?path=index&npm={'@litert/mime':'0.1.3'}"></script>
```

## Usage

Demo code is written using TypeScript.

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

## Test

### Node

Once it's compiled correctly, you can run the sample code in the terminal by using `node ./dist/test-node`.

### Browser

To view the examples, simply access the `test/` directory in your browser.

[Click here to view the examples online](https://litert.github.io/mime.js/test/)

## License

This library is published under [Apache-2.0](./LICENSE) license.