sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/format/DateFormat",
    "z0956project/Formatter/formatter"
], (Controller,DateFormat,formatter) => {

    "use strict";
    return Controller.extend("z0956project.controller.View1", {
        formatter:formatter,
        onInit() {
            var oModel=this.getOwnerComponent().getModel()
            var that=this;
            var entity =  "/ZFLIGHTSet"
            console.log(entity);
            
            oModel.read(entity,{
                success:function(odata,res){
                    console.log(odata);
                    
                    if(res.statusCode==="200" ||res.statusText==="OK" ){
                        var oMod=new sap.ui.model.json.JSONModel(odata)
                        that.getView().setModel(oMod, "VamsiModel2")
                      var mychek=that.getView().getModel("VamsiModel2")
                    }
                   
                },
                error:function(error){
                        console.log(error)
                }
            })
        },
  
        onRowSelect:function(oEvent){
          // first get the contextpath
          // we also need complete path as danModle is missing so we can concatenate it
          //we also need the object of the simpleform
          //then we are going to do the element binidng using bindElement method
          var oBinding=oEvent.getParameter("rowContext").sPath;
          var bindingPath= "VamsiModel2>" + oBinding;
          var oForm=this.getView().byId("idSimple");
          oForm.bindElement(bindingPath);
        }
    });
});