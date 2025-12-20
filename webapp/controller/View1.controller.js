sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "com/emp/employeeform/model/models"
], (Controller,Models) => {
    "use strict";

    return Controller.extend("com.emp.employeeform.controller.View1", {
        onInit() {
           this.oView = this.getView();
        // calling our own reuse class to create model object
           var oModel =  Models.createJSONModel();

           this.oView.setModel(oModel);
        },
        onReload : function (){
        // step 1 :- get the model object
        // var oModel = sap.ui.getCore().getModel();
         var oModel = this.oView.getModel();
        // step 2 :- change data in the model
        var oData = oModel.getProperty("/empSTR");
        console.log(oData);
        oModel.setProperty("/empSTR/empName","Spiderman");
        // this.oView.byId("idEmpId").setValue("");
        // this.oView.byId("idEmpName").setValue("");
        // this.oView.byId("idEmpSal").setValue("");
        // this.oView.byId("idEmpCurr").setValue("");
        },
        onShowme : function(){
        // var oModel = sap.ui.getCore().getModel();
         var oModel = this.oView.getModel();
        // step 2 :- change data in the model
        var oData = oModel.getProperty("/");
        console.log(oData);
        }
    });
});