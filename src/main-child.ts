import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {HomeComponent} from './app/components/home/home';
import {ProductDetailComponent} from './app/components/products/product';

@Component({
    selector: 'basic-routing',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/product', 1234]">Product Details</a>
        <router-outlet></router-outlet>
    `,
})
@Routes([
    {path: '/',            component: HomeComponent},
    {path: '/product/:id', component: ProductDetailComponent}
])
class RootComponent{}

bootstrap(RootComponent, [
    ROUTER_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
]);