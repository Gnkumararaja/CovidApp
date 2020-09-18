sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller,Filter, FilterOperator) {
	"use strict";

	return Controller.extend("covidapp.CovidApp.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf covidapp.CovidApp.view.View1
		 */
		onInit: function () {
			
			var	that = this;
				jQuery.ajax({
					method:"GET",
					url:"https://api.covid19api.com/summary",
					success: function(data){
						var oModel1 = new sap.ui.model.json.JSONModel(data);
						that.getView().setModel(oModel1);	
						console.log(data);
					},
					error: function(error){
						console.log("Message"+status);
					}
				});
				
			//	var a = this.getView().byId("pgtitle");
			
		},
		
		onSearch: function(oEvt){
			var oVal = oEvt.getSource().getValue();
			
			var oFilter = new Filter(
        "Country", 
        FilterOperator.Contains, 
        oVal
      );
 
      var oBinding = this.byId("tableid").getBinding("items");
       
      // apply filter
      oBinding.filter([
       
        oFilter 
     
      ]);
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf covidapp.CovidApp.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf covidapp.CovidApp.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf covidapp.CovidApp.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});