/*
 * Your dashboard ViewModel code goes here
 */
define(['accUtils', 'knockout', 'ojs/ojmodule-element-utils', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'ojs/ojcorerouter', 'ojs/ojmodulerouter-adapter', 'ojs/ojknockoutrouteradapter', 'ojs/ojurlparamadapter', 'ojs/ojarraydataprovider', 'ojs/ojknockouttemplateutils', 'ojs/ojmodule-element', 'ojs/ojknockout'],
        function (accUtils, ko, moduleUtils, ResponsiveUtils, ResponsiveKnockoutUtils, CoreRouter, ModuleRouterAdapter, KnockoutRouterAdapter, UrlParamAdapter, ArrayDataProvider, KnockoutTemplateUtils) {
            function HomeViewModel(args) {
                var self = this;
                this.KnockoutTemplateUtils = KnockoutTemplateUtils;

                // Handle announcements sent when pages change, for Accessibility.
                this.manner = ko.observable('polite');
                this.message = ko.observable();

                announcementHandler = (event) => {
                    this.message(event.detail.message);
                    this.manner(event.detail.manner);
                };

                document.getElementById('globalBody').addEventListener('announce', announcementHandler, false);

                // Media queries for repsonsive layouts
                const smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
                this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

                let navData = [
                    {path: '', redirect: 'dashboard'},
                    {path: 'dashboard', detail: {label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart'}},
                    {path: 'incidents', detail: {label: 'Incidents', iconClass: 'oj-ux-ico-fire'}},
                    {path: 'customers', detail: {label: 'Customers', iconClass: 'oj-ux-ico-contact-group'}},
                    {path: 'about', detail: {label: 'About', iconClass: 'oj-ux-ico-information-s'}}
                ];
                // Router 
                const Module_Comp_ID = "indexModule";
                let parentRouter = ko.dataFor(document.getElementById(Module_Comp_ID)).router;
                this.router = parentRouter.createChildRouter(navData);
                this.router.sync();

                this.moduleAdapter = new ModuleRouterAdapter(this.router);

                this.selection = new KnockoutRouterAdapter(this.router);

                // Setup the navDataProvider with the routes, excluding the first redirected
                // route.
                this.navDataProvider = new ArrayDataProvider(navData.slice(1), {keyAttributes: "path"});
                this.menuItemAction = function (event) {
                    const Module_Comp_ID = "indexModule";
                    let parentRouter = ko.dataFor(document.getElementById(Module_Comp_ID)).router;
                    parentRouter.selection = "login";
                    parentRouter.go({path: "login"});
                    parentRouter.sync();
                };


                // Header
                // Application Name used in Branding Area
                this.appName = ko.observable("9To5Jobs");
                // User Info used in Global Navigation area
                this.userLogin = ko.observable("sutrave.tirumal@gmail.com");

                // Footer
                this.footerLinks = [
                    {name: 'About Oracle', linkId: 'aboutOracle', linkTarget: 'http://www.oracle.com/us/corporate/index.html#menu-about'},
                    {name: "Contact Us", id: "contactUs", linkTarget: "http://www.oracle.com/us/corporate/contact/index.html"},
                    {name: "Legal Notices", id: "legalNotices", linkTarget: "http://www.oracle.com/us/legal/index.html"},
                    {name: "Terms Of Use", id: "termsOfUse", linkTarget: "http://www.oracle.com/us/legal/terms/index.html"},
                    {name: "Your Privacy Rights", id: "yourPrivacyRights", linkTarget: "http://www.oracle.com/us/legal/privacy/index.html"},
                ];

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * This method might be called multiple times - after the View is created
                 * and inserted into the DOM and after the View is reconnected
                 * after being disconnected.
                 */
                this.connected = () => {
                    accUtils.announce('Dashboard page loaded.');
                    document.title = "Dashboard";
                    // Implement further logic if needed
                };

                /**
                 * Optional ViewModel method invoked after the View is disconnected from the DOM.
                 */
                this.disconnected = () => {
                    // Implement if needed
                };

                /**
                 * Optional ViewModel method invoked after transition to the new View is complete.
                 * That includes any possible animation between the old and the new View.
                 */
                this.transitionCompleted = () => {
                    // Implement if needed
                };
            }
            ;

            return HomeViewModel;
        }
);
