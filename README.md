# mime-types

[![npm version](https://img.shields.io/npm/v/@litert/mime-types.svg?colorB=brightgreen)](https://www.npmjs.com/package/@litert/mime-types "Stable Version")
[![npm version](https://img.shields.io/npm/v/@litert/mime-types/dev.svg)](https://www.npmjs.com/package/@litert/mime-types "Development Version")
[![License](https://img.shields.io/github/license/litert/mime-types.svg)](https://github.com/litert/mime-types/blob/master/LICENSE)
[![node](https://img.shields.io/node/v/@litert/mime-types.svg?colorB=brightgreen)](https://nodejs.org/dist/latest-v10.x/)
[![GitHub issues](https://img.shields.io/github/issues/litert/mime-types.svg)](https://github.com/litert/mime-types/issues)
[![GitHub Releases](https://img.shields.io/github/release/litert/mime-types.svg)](https://github.com/litert/mime-types/releases "Stable Release")
[![GitHub Pre-Releases](https://img.shields.io/github/release/litert/mime-types/all.svg)](https://github.com/litert/mime-types/releases "Pre-Release")

Get MIME type based on file name.

## Installation

In the Node.js environment, you can install directly using NPM:

```sh
$ npm i @litert/mime-types --save
```

Or install the developing (unstable) version for newest features:

```sh
$ npm i @litert/mime-types@dev --save
```

## API

Demo code is written using TypeScript.

```typescript
import * as mime from "@litert/mime-types";

mime.get("hello.json");         // application/json
mime.get(".html");              // text/html
mime.get("css");                // text/css
mime.get("hi/baby.js");         // application/javascript
mime.get("/root/down/pk.zip");  // application/zip
mime.get("ext.dodooh");         // application/octet-stream
```

## License

This library is published under [Apache-2.0](./LICENSE) license.