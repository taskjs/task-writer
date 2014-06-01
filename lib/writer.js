var fs = require('fs');
var path = require('path');
var file = require('./file');
var Execution = require('execution');
var Record = require('record');

module.exports = Execution.extend({
    options: {
        path: {
            label: "File path",
            type: 'string'
        },
        encoding: {
            label: "File encoding",
            type: 'string'
        },
        mode: {
            label: "File mode",
            type: 'number'
        },
        force: {
            label: 'Overwrite',
            type: 'boolean',
            default: true
        },
        backup: {
            label: 'Backup exists',
            type: 'boolean',
            default: false
        }
    },
    run: function (inputs, options, logger, settings) {
        if (typeof options === 'string') {
            options = {path: options};
        }
        return this._run(inputs, options, logger, settings);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var logger = this.logger;
        var inputs = this.inputs;

        var records = inputs.map(function (record) {
            var filename = record.path;
            var contents = record.contents;

            var dest = options.path;
            if(file.isDir(dest)){
                filename = path.join(dest, path.basename(filename));
            }else if(dest){
                filename = dest;
            }

            logger.log('Write', filename);

            return new Record({
                path: file.write(filename, contents, options),
                contents: contents
            })
        });

        resolve(records);
    }

});
