# LiteRT/Mime

[![npm version](https://img.shields.io/npm/v/@litert/mime.svg?colorB=brightgreen)](https://www.npmjs.com/package/@litert/mime "Stable Version")
[![npm version](https://img.shields.io/npm/v/@litert/mime/dev.svg)](https://www.npmjs.com/package/@litert/mime "Development Version")
[![License](https://img.shields.io/github/license/litert/mime.js.svg)](https://github.com/litert/mime.js/blob/master/LICENSE)
[![node](https://img.shields.io/node/v/@litert/mime.svg?colorB=brightgreen)](https://nodejs.org/dist/latest-v10.x/)
[![GitHub issues](https://img.shields.io/github/issues/litert/mime.svg)](https://github.com/litert/mime/issues)
[![GitHub Releases](https://img.shields.io/github/release/litert/mime.svg)](https://github.com/litert/mime/releases "Stable Release")
[![GitHub Pre-Releases](https://img.shields.io/github/release/litert/mime/all.svg)](https://github.com/litert/mime/releases "Pre-Release")

Get MIME type based on file name.

## Installation

### NPM

In the Node.js environment, you can install directly using NPM:

```sh
$ npm i @litert/mime --save
```

Or install the developing (unstable) version for newest features:

```sh
$ npm i @litert/mime@dev --save
```

### CDN

If you must use it on browser, please use CDN:

Recommended: https://cdn.jsdelivr.net/npm/@litert/mime@0.1.0/dist/index.min.js, which will reflect the latest version as soon as it is published to npm. You can also browse the source of the npm package at https://cdn.jsdelivr.net/npm/@litert/mime/.

Also available on [unpkg](https://unpkg.com/@litert/mime@0.1.0/dist/index.min.js).

In the example, the mime.js library is loaded using the loader.js library:

```html
<script src="https://cdn.jsdelivr.net/npm/@litert/loader@0.1.1/dist/index.min.js"></script>
<script>
loader.ready(function() {
    loader.require("https://cdn.jsdelivr.net/npm/@litert/mime@0.1.0/dist/index.min", function(mime) {
        alert(mime.getMime("root/index.css"));
    });
});
</script>
```

## Usage

Demo code is written using TypeScript.

```typescript
import * as mime from "@litert/mime";

mime.getData("hello.json");         // {"mime": "application/json", "compressible": true}
mime.getData(".html");              // {"mime": "text/html", "compressible": true}
mime.getData("css");                // {"mime": "text/css", "compressible": true}
mime.getData("hi/baby.js");         // {"mime": "application/javascript", "compressible": true}
mime.getData("/root/down/pk.zip");  // {"mime": "application/zip", "compressible": false}
mime.getData("ext.dodooh");         // {"mime": "application/octet-stream", "compressible": false}
mime.getMime("root/index.css");     // text/css
```

## Test

### Node

After compiling the TS code, execute: node dist/test-node to observe the execution results of the test code under node.

### Browser

Use your browser to access "test/" to see if the results are consistent with the node environment.

[You can also click here to access the example online.](https://litert.github.io/mime.js/test/)

## License

This library is published under [Apache-2.0](./LICENSE) license.