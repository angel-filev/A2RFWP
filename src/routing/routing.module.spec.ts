/**
 * Created by K23900 on 1/27/2017.
 */
/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import {RoutingModule} from './routing.module';

describe('AppRoutingModule', () => {
    it('should be defined', () => {
        const routingModule = new RoutingModule();
        expect(routingModule).toBeDefined();
    });
});
