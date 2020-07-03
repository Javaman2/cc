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
                    <a href="index.html" data-type="index-link">mslparent documentation</a>
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
                                <a href="modules/MslModule.html" data-type="entity-link">MslModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MslModule-a11477181812e3b94bf0754a6ccd05f3"' : 'data-target="#xs-components-links-module-MslModule-a11477181812e3b94bf0754a6ccd05f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MslModule-a11477181812e3b94bf0754a6ccd05f3"' :
                                            'id="xs-components-links-module-MslModule-a11477181812e3b94bf0754a6ccd05f3"' }>
                                            <li class="link">
                                                <a href="components/ActionItemsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorHandlerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorHandlerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExpanderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExpanderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaterialTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaterialTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MslComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MslComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignalRComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignalRComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MslModule-a11477181812e3b94bf0754a6ccd05f3"' : 'data-target="#xs-injectables-links-module-MslModule-a11477181812e3b94bf0754a6ccd05f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MslModule-a11477181812e3b94bf0754a6ccd05f3"' :
                                        'id="xs-injectables-links-module-MslModule-a11477181812e3b94bf0754a6ccd05f3"' }>
                                        <li class="link">
                                            <a href="injectables/DialogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DialogService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/EventService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EventService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HtmlElementService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HtmlElementService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SignalRService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SignalRService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link">ServicesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ServicesModule-7e81de842b21806911040083fa586458"' : 'data-target="#xs-injectables-links-module-ServicesModule-7e81de842b21806911040083fa586458"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ServicesModule-7e81de842b21806911040083fa586458"' :
                                        'id="xs-injectables-links-module-ServicesModule-7e81de842b21806911040083fa586458"' }>
                                        <li class="link">
                                            <a href="injectables/EventService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EventService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/HtmlElementService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>HtmlElementService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="classes/ErrorModel.html" data-type="entity-link">ErrorModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/Setting.html" data-type="entity-link">Setting</a>
                            </li>
                            <li class="link">
                                <a href="classes/SettingGroup.html" data-type="entity-link">SettingGroup</a>
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
                                    <a href="injectables/DialogService.html" data-type="entity-link">DialogService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EventService.html" data-type="entity-link">EventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HtmlElementService.html" data-type="entity-link">HtmlElementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MslService.html" data-type="entity-link">MslService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignalRService.html" data-type="entity-link">SignalRService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/canActivateService.html" data-type="entity-link">canActivateService</a>
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