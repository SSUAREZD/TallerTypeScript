"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, url, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.image = image;
    }
    Serie.prototype.getName = function () {
        return this.name;
    };
    Serie.prototype.getSeasons = function () {
        return this.seasons;
    };
    Serie.prototype.getChannel = function () {
        return this.channel;
    };
    Serie.prototype.getDescription = function () {
        return this.description;
    };
    return Serie;
}());
exports.Serie = Serie;
