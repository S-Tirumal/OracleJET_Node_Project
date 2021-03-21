"use strict";

exports.registerRoute = function (app) {
    app.post("/api/login", function (req, res) {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end();
    });
    
    app.post("/api/register", function (req, res) {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.end();
    });
};