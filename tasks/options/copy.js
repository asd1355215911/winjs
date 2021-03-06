// Copyright (c) Microsoft Open Technologies, Inc.  All Rights Reserved. Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
(function () {
    "use strict";

    var config = require("../../config.js");
    var path = require("path");

    module.exports = {
        tests: {
            files: [{
                expand: true,
                cwd: "tests/",
                src: ["**"],
                dest: config.testsOutput,
                filter: function isNotLessFile(filePath) {
                    return path.extname(filePath) !== ".less";
                }
            }]
        },

        testDeps: {
            files: [{
                src: [config.desktopOutput + "/js/WinJS.js"],
                dest: config.testsOutput + "Base/source/WinJS.js"
            }]
        },

        fonts: {
            files: [{
                expand: true,
                cwd: "src/fonts/",
                src: ["**.ttf"],
                dest: config.desktopOutput + "fonts/"
            }]
        },

        srcjs: {
            files: [{
                expand: true,
                cwd: "src/js",
                src: ["**/*.js", "**/*.resjson"],
                dest: config.compiledTsOutput
            }]
        }
    };
})();