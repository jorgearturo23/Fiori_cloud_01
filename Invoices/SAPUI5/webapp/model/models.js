// @ts-nocheck

sap.ui.define([
    "sap/ui/model/json/JSONModel"

],
    /** 
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel 
     */

    function (JSONModel) {
        "use strict";
        return {
            createModel: function () {

                var odata = {
                    recipient: {
                        name: "Dato desde el model"
                    }
                };

                return new JSONModel(odata);

            }

        }

    });