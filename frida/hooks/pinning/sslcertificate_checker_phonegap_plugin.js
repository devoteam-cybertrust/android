Java.perform(function x() {
	try{
		var SSLCertificateChecker = Java.use("nl.xservices.plugins.SSLCertificateChecker")
		SSLCertificateChecker.execute.overload('java.lang.String', 'org.json.JSONArray', 'org.apache.cordova.CallbackContext').implementation = function(action,args,callbackContext){
			callbackContext.success("CONNECTION_SECURE");
			return true;
        	}
	}catch(err){}
});
