/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['accUtils', 'knockout', "ojs/ojknockout", "ojs/ojinputtext", "ojs/ojlabel", "ojs/ojbutton", "ojs/ojformlayout"],
 function(accUtils, ko) {
    function IncidentsViewModel() {
        
        this.userName = ko.observable();
        this.password = ko.observable();
        
        this.loginAction = function(event){
            oj.Logger.log("loginAction -> ");
            var xmlHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.onreadystatechange = function(){
                if (this.readyState === 4 && this.status === 200) {
                    let router = document.getElementById("navList");
                    if(router){
                        router.selection = "dashboard";
                    }
                }
            };
            xmlHttpRequest.open("POST", "/api/login", true);
            xmlHttpRequest.send();
        };
        
        this.signUpAction = function(event){
            oj.Logger.log("signUpAction -> ");
            let router = document.getElementById("navList");
            if(router){
                router.selection = "customers";
            }
        };
        
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Incidents page loaded.');
        document.title = "Incidents";
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

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return IncidentsViewModel;
  }
);
