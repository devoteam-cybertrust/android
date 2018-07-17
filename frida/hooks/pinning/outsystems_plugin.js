Java.perform(function x() {
	try{
		var X509TrustManagerWrapper = Java.use("com.outsystems.plugins.sslpinning.pinning.X509TrustManagerWrapper");
		X509TrustManagerWrapper.getPinningHash.overload('android.content.Context', 'java.lang.String').implementation = function(context,folder){
        		console.log("[-] Outsystems SSLPinning X509TrustManagerWrapper called. Returning null json file");
			return null;
     		}
    	}catch(err){}
});
