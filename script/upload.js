'use strict';
/**
 * @file Upload datas from all tokens to Cluestr
 *
 * This script can be run with a cron.
 */

require('../app.js');
var providerGoogleContact = require('../lib/provider-google-contact');

providerGoogleContact.helpers.upload(function(err) {
  if(err) {
     throw err;
  }
  
  console.log("Contacts logged", new Date());

  process.exit()
});
