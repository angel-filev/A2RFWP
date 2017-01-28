"use strict";
var app_root_1 = require('./app.root');
describe('a2-cli App', function () {
    var page;
    beforeEach(function () {
        page = new app_root_1.HomePage();
    });
    it('should display message saying Hello from Angular App with Webpack', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Hello from Angular App with Webpack');
    });
});
//# sourceMappingURL=app.root.e2e-spec.js.map