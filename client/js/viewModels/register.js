/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['accUtils', 'knockout', "ojs/ojknockout", "ojs/ojinputtext", "ojs/ojlabel", "ojs/ojbutton", "ojs/ojformlayout"],
 function(accUtils, ko) {
    function RegisterViewModel() {
        const Module_Comp_ID = "indexModule";
      this.userName = ko.observable();
      this.firstName = ko.observable();
      this.lastName = ko.observable();
      this.email = ko.observable();
      this.signUpAction = function(){
            window.console.log("Sign up action completed.");
            let router = ko.dataFor(document.getElementById(Module_Comp_ID)).router;
                    
            if(router){
                router.selection = "login";
                router.go({path: "login"});
                router.sync();
            }
      };
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Customers page loaded.');
        document.title = "Customers";
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

    return RegisterViewModel;
  }
);
