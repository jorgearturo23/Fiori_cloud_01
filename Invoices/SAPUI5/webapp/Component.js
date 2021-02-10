// @ts-nocheck

sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/models",
    "sap/ui/model/resource/ResourceModel"
],    /** 
     * 
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel 
     */

    function (UIComponent, models, ResourceModel) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {
            
                        //esta informacion viene del index.js 
                        metadata: {
                            manifest : "json"
                            //esta configuracion para que nos lleve a la view.app se camnbia al manifest
                            // "rootView": {
                            //     "viewName": "logaligroup.SAPUI5.view.App",
                            //     "type": "XML",
                            //     "async": true,
                            //     "id": "app"
                            // }
                        },
            
             
            init: function () {

                UIComponent.prototype.init.apply(this, arguments);

                //envia el modelo del model,js
                this.setModel(models.createModel());

                //model del resourcemodel del i18n

                // ahora lo toma del manifest, ya que el metadata da acceso al contenido 
                // let i18Model = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" });
                // this.setModel(i18Model, "i18n");//se renombre el modelo para que este sea entcontrado 

            }

        });
    });