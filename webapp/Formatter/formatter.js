sap.ui.define([
    "sap/ui/core/format/DateFormat"
], (DateFormat) => {
    "use strict";
    return( {
        formatDate: function (sDate) {
            if (!sDate) return ""; // Check if there's a date to format
            console.log(sDate);
            
           
            var oDateFormat = DateFormat.getInstance({ pattern: "dd-MM-yyyy" });
           
            return oDateFormat.format(sDate); // Format date as ddMMyyyy
        }
    });
});