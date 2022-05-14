'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pizza-fresh-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-565e3b14d5899eb0258dd84af54949113f5dc9302cdb8ef56ab1663bd081765691a864152a27c2c6bf2371e304a24ad9767915015bea5aa86c6b691a57260495"' : 'data-target="#xs-controllers-links-module-AppModule-565e3b14d5899eb0258dd84af54949113f5dc9302cdb8ef56ab1663bd081765691a864152a27c2c6bf2371e304a24ad9767915015bea5aa86c6b691a57260495"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-565e3b14d5899eb0258dd84af54949113f5dc9302cdb8ef56ab1663bd081765691a864152a27c2c6bf2371e304a24ad9767915015bea5aa86c6b691a57260495"' :
                                            'id="xs-controllers-links-module-AppModule-565e3b14d5899eb0258dd84af54949113f5dc9302cdb8ef56ab1663bd081765691a864152a27c2c6bf2371e304a24ad9767915015bea5aa86c6b691a57260495"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-565e3b14d5899eb0258dd84af54949113f5dc9302cdb8ef56ab1663bd081765691a864152a27c2c6bf2371e304a24ad9767915015bea5aa86c6b691a57260495"' : 'data-target="#xs-injectables-links-module-AppModule-565e3b14d5899eb0258dd84af54949113f5dc9302cdb8ef56ab1663bd081765691a864152a27c2c6bf2371e304a24ad9767915015bea5aa86c6b691a57260495"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-565e3b14d5899eb0258dd84af54949113f5dc9302cdb8ef56ab1663bd081765691a864152a27c2c6bf2371e304a24ad9767915015bea5aa86c6b691a57260495"' :
                                        'id="xs-injectables-links-module-AppModule-565e3b14d5899eb0258dd84af54949113f5dc9302cdb8ef56ab1663bd081765691a864152a27c2c6bf2371e304a24ad9767915015bea5aa86c6b691a57260495"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' : 'data-target="#xs-controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' :
                                            'id="xs-controllers-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' : 'data-target="#xs-injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' :
                                        'id="xs-injectables-links-module-AuthModule-2d22075f0d1e7e24036df2c4d6ee23d51d7d5fa3d4d5afe5b0260ddec27dd79e8b02cb2fb82b41d62d9482058ac8189daba5367276802671b33fd85dc98d9389"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrderModule.html" data-type="entity-link" >OrderModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrderModule-4b29a618a2ea15b9fa1d331e0562b60ff2a53cf7967a7cf6334e2939e21bbff378a1e8246acbd3d8f7e39fafeeb85f85d588149ec8e36e03383e0ac25bfe7725"' : 'data-target="#xs-controllers-links-module-OrderModule-4b29a618a2ea15b9fa1d331e0562b60ff2a53cf7967a7cf6334e2939e21bbff378a1e8246acbd3d8f7e39fafeeb85f85d588149ec8e36e03383e0ac25bfe7725"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrderModule-4b29a618a2ea15b9fa1d331e0562b60ff2a53cf7967a7cf6334e2939e21bbff378a1e8246acbd3d8f7e39fafeeb85f85d588149ec8e36e03383e0ac25bfe7725"' :
                                            'id="xs-controllers-links-module-OrderModule-4b29a618a2ea15b9fa1d331e0562b60ff2a53cf7967a7cf6334e2939e21bbff378a1e8246acbd3d8f7e39fafeeb85f85d588149ec8e36e03383e0ac25bfe7725"' }>
                                            <li class="link">
                                                <a href="controllers/OrderController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrderModule-4b29a618a2ea15b9fa1d331e0562b60ff2a53cf7967a7cf6334e2939e21bbff378a1e8246acbd3d8f7e39fafeeb85f85d588149ec8e36e03383e0ac25bfe7725"' : 'data-target="#xs-injectables-links-module-OrderModule-4b29a618a2ea15b9fa1d331e0562b60ff2a53cf7967a7cf6334e2939e21bbff378a1e8246acbd3d8f7e39fafeeb85f85d588149ec8e36e03383e0ac25bfe7725"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrderModule-4b29a618a2ea15b9fa1d331e0562b60ff2a53cf7967a7cf6334e2939e21bbff378a1e8246acbd3d8f7e39fafeeb85f85d588149ec8e36e03383e0ac25bfe7725"' :
                                        'id="xs-injectables-links-module-OrderModule-4b29a618a2ea15b9fa1d331e0562b60ff2a53cf7967a7cf6334e2939e21bbff378a1e8246acbd3d8f7e39fafeeb85f85d588149ec8e36e03383e0ac25bfe7725"' }>
                                        <li class="link">
                                            <a href="injectables/OrderService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrderService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link" >ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-6ef3a97be27b2fb853b59caff86195d3b09f460a4bd453af3b2204fe65cfcb79f8b96d557ee1121826c1431a7c521246e21668d68f6576258cdbd89378e2af96"' : 'data-target="#xs-controllers-links-module-ProductModule-6ef3a97be27b2fb853b59caff86195d3b09f460a4bd453af3b2204fe65cfcb79f8b96d557ee1121826c1431a7c521246e21668d68f6576258cdbd89378e2af96"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-6ef3a97be27b2fb853b59caff86195d3b09f460a4bd453af3b2204fe65cfcb79f8b96d557ee1121826c1431a7c521246e21668d68f6576258cdbd89378e2af96"' :
                                            'id="xs-controllers-links-module-ProductModule-6ef3a97be27b2fb853b59caff86195d3b09f460a4bd453af3b2204fe65cfcb79f8b96d557ee1121826c1431a7c521246e21668d68f6576258cdbd89378e2af96"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-6ef3a97be27b2fb853b59caff86195d3b09f460a4bd453af3b2204fe65cfcb79f8b96d557ee1121826c1431a7c521246e21668d68f6576258cdbd89378e2af96"' : 'data-target="#xs-injectables-links-module-ProductModule-6ef3a97be27b2fb853b59caff86195d3b09f460a4bd453af3b2204fe65cfcb79f8b96d557ee1121826c1431a7c521246e21668d68f6576258cdbd89378e2af96"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-6ef3a97be27b2fb853b59caff86195d3b09f460a4bd453af3b2204fe65cfcb79f8b96d557ee1121826c1431a7c521246e21668d68f6576258cdbd89378e2af96"' :
                                        'id="xs-injectables-links-module-ProductModule-6ef3a97be27b2fb853b59caff86195d3b09f460a4bd453af3b2204fe65cfcb79f8b96d557ee1121826c1431a7c521246e21668d68f6576258cdbd89378e2af96"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link" >TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TableModule-6fbe72df23c0056c519376e900ae8a2ec57160778df53fbd81607bd65d0b0e2bbed5b59db0f2f381fa706d1f5c7f0a03f8c919e37913a4f3a6f033ba1945d07b"' : 'data-target="#xs-controllers-links-module-TableModule-6fbe72df23c0056c519376e900ae8a2ec57160778df53fbd81607bd65d0b0e2bbed5b59db0f2f381fa706d1f5c7f0a03f8c919e37913a4f3a6f033ba1945d07b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TableModule-6fbe72df23c0056c519376e900ae8a2ec57160778df53fbd81607bd65d0b0e2bbed5b59db0f2f381fa706d1f5c7f0a03f8c919e37913a4f3a6f033ba1945d07b"' :
                                            'id="xs-controllers-links-module-TableModule-6fbe72df23c0056c519376e900ae8a2ec57160778df53fbd81607bd65d0b0e2bbed5b59db0f2f381fa706d1f5c7f0a03f8c919e37913a4f3a6f033ba1945d07b"' }>
                                            <li class="link">
                                                <a href="controllers/TableController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TableModule-6fbe72df23c0056c519376e900ae8a2ec57160778df53fbd81607bd65d0b0e2bbed5b59db0f2f381fa706d1f5c7f0a03f8c919e37913a4f3a6f033ba1945d07b"' : 'data-target="#xs-injectables-links-module-TableModule-6fbe72df23c0056c519376e900ae8a2ec57160778df53fbd81607bd65d0b0e2bbed5b59db0f2f381fa706d1f5c7f0a03f8c919e37913a4f3a6f033ba1945d07b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TableModule-6fbe72df23c0056c519376e900ae8a2ec57160778df53fbd81607bd65d0b0e2bbed5b59db0f2f381fa706d1f5c7f0a03f8c919e37913a4f3a6f033ba1945d07b"' :
                                        'id="xs-injectables-links-module-TableModule-6fbe72df23c0056c519376e900ae8a2ec57160778df53fbd81607bd65d0b0e2bbed5b59db0f2f381fa706d1f5c7f0a03f8c919e37913a4f3a6f033ba1945d07b"' }>
                                        <li class="link">
                                            <a href="injectables/TableService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' : 'data-target="#xs-controllers-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' :
                                            'id="xs-controllers-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' : 'data-target="#xs-injectables-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' :
                                        'id="xs-injectables-links-module-UserModule-ef6a129ef77b8fec1bb18ebf1c67bff1bdb76a535756a7737bb158ba7b1027671b25328d40133acb3afa82a722b3aa7a5b6e6471bbb9a14e20730fc929e1df26"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/OrderController.html" data-type="entity-link" >OrderController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ProductController.html" data-type="entity-link" >ProductController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TableController.html" data-type="entity-link" >TableController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderProductDto.html" data-type="entity-link" >CreateOrderProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTableDto.html" data-type="entity-link" >CreateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/Table.html" data-type="entity-link" >Table</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTableDto.html" data-type="entity-link" >UpdateTableDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrderService.html" data-type="entity-link" >OrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TableService.html" data-type="entity-link" >TableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});