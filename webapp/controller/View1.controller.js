sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.emp.employeeform.controller.View1", {
        onInit() {
           this.oView = this.getView()
        },
        onReload : function (){
        this.oView.byId("idEmpId").setValue("100");
        this.oView.byId("idEmpName").setValue("gunjan");
        this.oView.byId("idEmpSal").setValue("1000");
        this.oView.byId("idEmpCurr").setValue("USD");
        }
    });
});