sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/Controller"
], function (JSONModel, Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.fiori2.controller.DetailDetail", {
        onInit: function () {
            this.oOwnerComponent = this.getOwnerComponent();

            this.oRouter = this.oOwnerComponent.getRouter();
            this.oModel = this.oOwnerComponent.getModel();

            this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onPatternMatch, this);
        },

        handleAboutPress: function () {
            var oNextUIState;
            this.oOwnerComponent.getHelper().then(function (oHelper) {
                oNextUIState = oHelper.getNextUIState(3);
                this.oRouter.navTo("page2", {layout: oNextUIState.layout});
            }.bind(this));
        },

        _onPatternMatch: function (oEvent) {
            this._supplier = oEvent.getParameter("arguments").supplier || this._supplier || "0";
            this._product = oEvent.getParameter("arguments").product || this._product || "0";

            this.getView().bindElement({
                path: "/data/" + this._supplier,
                model: "products"
            });
        },
    });
});
