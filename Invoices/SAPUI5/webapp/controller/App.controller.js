// @ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
  
],
    /** 
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast 

     */

    //@param {typeof sap.ui.model.json.JSONModel} JSONModel 

    function (Controller, MessageToast ) {
        "use strict";
        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function () {
 /*       esta funciones se migraron al component.js

                //set model og the model,js
                this.getView().setModel(models.createModel());
                
                //model del resourcemodel
                let i18Model = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                try {
                    this.getView().setModel(i18Model, "i18n");//se renombre el modelo para que este sea entcontrado 
                } catch (error) {

                }
*/
            },


            onShow: function () {
                MessageToast.show("MessageToast");

            },

            onShow2: () => {
                alert("funcion flecha");
            }
        });

    });