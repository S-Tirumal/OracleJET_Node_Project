define(['accUtils', 'knockout', "ojs/ojknockout", "ojs/ojinputtext", "ojs/ojlabel", "ojs/ojbutton", "ojs/ojformlayout"],
        function (accUtils, ko) {
            function LoginViewModel() {
                const Module_Comp_ID = "indexModule";
                this.userName = ko.observable();
                this.password = ko.observable();

                this.loginAction = function (event) {
                    oj.Logger.log("loginAction -> ");
                    var xmlHttpRequest = new XMLHttpRequest();
                    xmlHttpRequest.onreadystatechange = function () {
                        if (this.readyState === 4 && this.status === 200) {
                            let router = ko.dataFor(document.getElementById(Module_Comp_ID)).router;

                            if (router) {
                                router.selection = "home";
                                router.go({path: "home"});
                                router.sync();
                            }
                        }
                    };
                    xmlHttpRequest.open("POST", "/api/login", true);
                    xmlHttpRequest.send();
                };

                this.signUpAction = function (event) {
                    oj.Logger.log("signUpAction -> ");
                    let router = ko.dataFor(document.getElementById(Module_Comp_ID)).router;
                    if (router) {
                        router.selection = "register";
                        router.go({path: router.selection})
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
                    document.title = "Login page";
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

            return LoginViewModel;
        }
);
