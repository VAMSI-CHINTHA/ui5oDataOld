/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"z0956_project/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});