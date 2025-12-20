sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "com/emp/employeeform/model/models"
], (Controller,Models) => {
    "use strict";

    return Controller.extend("com.emp.employeeform.controller.View1", {
        onInit() {
           this.oView = this.getView();

           var oModel =  Models.createJSONModel();

           this.oView.setModel(oModel);
        },
        onReload : function (){
        this.oView.byId("idEmpId").setValue("");
        this.oView.byId("idEmpName").setValue("");
        this.oView.byId("idEmpSal").setValue("");
        this.oView.byId("idEmpCurr").setValue("");
        }
    });
});