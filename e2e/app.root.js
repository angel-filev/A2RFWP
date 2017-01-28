"use strict";
var protractor_1 = require('protractor');
var HomePage = (function () {
    function HomePage() {
    }
    HomePage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    HomePage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('h1')).getText();
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=app.root.js.map