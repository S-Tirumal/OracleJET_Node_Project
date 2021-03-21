/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['accUtils', 'knockout'],
 function(accUtils, ko) {
    function DashboardViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.
      self.messages = ko.observableArray([]);
        self.currentMessage = ko.observable("");

        self.buttonEnabled = ko.computed(function(){
           return self.currentMessage().length > 0;
        });

        self.sendText = function () {
            window.console.log("sending");
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    receive(this.responseText);
                }
            };
            xhr.open("GET", "api/string/" + encodeURIComponent(self.currentMessage()), true);
            xhr.send();

        };


        function receive(responseText) {
            self.messages.push(JSON.parse(responseText));
        }
        try{
            ko.components.register("messages", {
                viewModel: function () {
                    this.messages = self.messages;
                },

                template: "<table><thead><tr><th>Original message</th><th>Response</th></tr></thead><tbody data-bind='foreach: messages'><tr><td data-bind='text: original'></td><td data-bind='text: reverted'></td></tr></tbody></table>"
            });
            ko.components.register("mytitle", {
                viewModel: function (params) {
                    this.title = ko.observable(params.title);
                },

                template: "<h2 data-bind='text: title'></h2>"
            });
        }catch(e){
                    window.console.error("Error: Component is already registered..");
        }

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

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
