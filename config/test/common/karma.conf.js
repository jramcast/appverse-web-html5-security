'use strict';

var settings = {

    basePath : '../../',

    frameworks: ['mocha', 'chai', 'sinon'],

    commonFiles : [
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'src/api-*/**/module.js',
        // The rest
        'src/api-*/**/*.js',
    ],

    unitFiles : [
        'test/unit/**/*.js'
    ],

    midwayFiles : [ ],
};


function Configurator () {
    this._files = [];
    this.basePath = settings.basePath;
    this.frameworks = settings.frameworks;
}

Configurator.prototype.filesForUnitTests = function () {
    return this.withCommonFiles().files(settings.unitFiles);
};

Configurator.prototype.filesForMidwayTests = function () {
    return this.withCommonFiles().files(settings.midwayFiles);
};

Configurator.prototype.withCommonFiles = function () {
    this._files = settings.commonFiles;
    return this;
};

Configurator.prototype.files = function (specificFiles) {
    return this._files.concat(specificFiles);
};

module.exports = new Configurator();

