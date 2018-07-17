Java.perform(function x() {
	try{
		var OutsystemsPinning = Java.use("com.outsystems.plugins.sslpinning.pinning.X509TrustManagerWrapper");
		OutsystemsPinning.getPinningHash.overload('android.content.Context', 'java.lang.String').implementation = function(context,folder){
        		console.log("[-] Outsystems SSLPinning X509TrustManagerWrapper called. Returning null json file");
			return null;
     		}
    	}catch(err){}
});
