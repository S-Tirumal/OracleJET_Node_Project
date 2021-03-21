/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define(['knockout', 'ojs/ojmodule-element-utils', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'ojs/ojcorerouter', 'ojs/ojmodulerouter-adapter', 'ojs/ojknockoutrouteradapter', 'ojs/ojurlparamadapter', 'ojs/ojarraydataprovider', 'ojs/ojknockouttemplateutils', 'ojs/ojmodule-element', 'ojs/ojknockout'],
  function(ko, moduleUtils, ResponsiveUtils, ResponsiveKnockoutUtils, CoreRouter, ModuleRouterAdapter, KnockoutRouterAdapter, UrlParamAdapter, ArrayDataProvider, KnockoutTemplateUtils) {
     function ControllerViewModel() {
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

         this.routes =[
            { path: '', redirect: 'login' },
            { path: 'login', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } },
            { path: 'register', detail: { label: 'Incidents', iconClass: 'oj-ux-ico-fire' } },
            { path: 'home', detail: { label: 'Customers', iconClass: 'oj-ux-ico-contact-group'} }
          ];
         // Create the router with the routes and baseUrl
        this.router = new CoreRouter(this.routes, {
            urlAdapter: new UrlParamAdapter(),
        });
      
        this.router.sync();
         // Create ModuleRouterAdapter instance
        this.module = new ModuleRouterAdapter(this.router, {
            viewPath: "views/",
            viewModelPath: "viewModels/"
        });
        this.KnockoutTemplateUtils = KnockoutTemplateUtils;
        // Handle announcements sent when pages change, for Accessibility.
        this.manner = ko.observable('polite');
        this.message = ko.observable();

        announcementHandler = (event) => {
          this.message(event.detail.message);
          this.manner(event.detail.manner);
      };

      document.getElementById('globalBody').addEventListener('announce', announcementHandler, false);

      
}

     return new ControllerViewModel();
  }
);
