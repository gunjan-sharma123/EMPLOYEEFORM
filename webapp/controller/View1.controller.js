sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "com/emp/employeeform/model/models"
], (Controller,Models) => {
    "use strict";

    return Controller.extend("com.emp.employeeform.controller.View1", {
        onInit() {
           this.oView = this.getView();
        // calling our own reuse class to create model object
           var oModel =  Models.createJSONModel("model/mockdata/Sample.json");
           this.oView.setModel(oModel);

           var oModel2 =  Models.createJSONModel("model/mockdata/Dataset.json");
           this.oView.setModel(oModel2,"got");
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
        },
         onFlip : function(){
            //  var oModel = sap.ui.getCore().getModel();
            //  var oGOTModel = sap.ui.getCore().getModel("got"); 
             var oModel = this.oView.getModel();
             var oGOTModel = this.oView.getModel("got"); 
             this.oView.setModel(oGOTModel);
             this.oView.setModel(oModel, "got" );

         },
         onRowSelect: function(oEvent){
            console.log(oEvent);
            //step1:-what is the row which was selected by the user
            var oRowContext = oEvent.getParameter("rowContext");
            //step2:- know the address of the element
            var sPath = oRowContext.getPath();
            //step3:- get the object of the simple form
            var oSimpleForm = this.getView().byId("idSimple");
            //step4:- perform the element binding
            oSimpleForm.bindElement(sPath);
         }
    });
});