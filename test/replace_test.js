
/*
 * gulp-replace-task
 *
 * Copyright (c) 2015 outaTiME
 * Licensed under the MIT license.
 * https://github.com/outaTiME/gulp-replace-task/blob/master/LICENSE-MIT
 */

'use strict';

// dependencies

var assert = require('assert');
var replace = require('../index');
var Vinyl = require('vinyl');

// test

describe('gulp-replace-task', function () {

  it('should replace simple key with value', function (done) {

    var stream = replace({
      variables: {
        'key': 'value'
      }
    });

    stream.on('data', function (file) {
      var expect = 'value';
      assert.equal(file.contents.toString(), expect);
      done();
    });

    stream.write(new Vinyl({
      contents: Buffer.from('@@key')
    }));

    stream.end();

  });

});
