sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
        createJSONModel: function (sFilePath) {
        var oModel = new JSONModel();
        // oModel.loadData(sFilePath);
         oModel.loadData(sFilePath, null, true); // async
        return oModel;
        },
        createResourceModel: function () {
        var oModel = new ResourceModel ({
            bundleUrl : "i18n/i18n.properties"
                });
        
        return oModel;
        }

    };
});