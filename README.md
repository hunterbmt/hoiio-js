# hoiio-js
Hoiio-js is a JS SDK for Hoiio's API. It encapsulates the REST 
communications and let developers use the API via a few simple classes.

Currently, hoiio-js supports the Call, SMS, Fax, Account, Hoiio Number and IVR APIs.


# Installing
Include hoiiojs.js in dist folder.

# Usage
Here are some examples you can use the SDK to access all Hoiio's API (via Hoiio class)

``` javascript
	// init hoiio sdk with app_id and access_token
	var hoiio_sms = new HoiioSMS(app_id,access_token)
	//send a sms with dest param, msg param and callback function 
	
	hoiio_sms.send(dest,msg,function(result) {
		if (result.status == 'success_ok') {
			alert('Your message has been sent successfull');
		} else {
			alert("Can't send your SMS message",true);
		}
	});
```

# License
This project is under MIT License (http://en.wikipedia.org/wiki/MIT_License).
See LICENSE file for details.


# Contacts
If you have any questions, please feel free to contact us:

* Twitter:        @hoiiotweets
* Google Groups:  https://groups.google.com/forum/#!forum/hoiio-developers
* Facebook:       http://www.facebook.com/Hoiio
* Blog:           http://devblog.hoiio.com/
