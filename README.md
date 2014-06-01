# task-writer
> Write files.

## The "writer" task

### Usage Examples

```js
var writer = new (require('task-writer'))
writer.run(inputs, options, logger)
```

### Options

#### options.path
Type: `string`

File path.

#### options.encoding
Type: `string`

File encoding.

#### options.mode
Type: `string`

#### options.force
Type: `boolean`
Default: `true`

Overwrite exists file.

#### options.backup
Type: `boolean`
Default: `false`

Backup exists before overwrite file.

## Release History
* 2014-06-02 0.1.0 Initial release.

## License
Copyright (c) 2014 Yuanyan Cao. Licensed under the MIT license.
