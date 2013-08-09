# Google Contact Cluestr Provider

Cluestr Provider for contacts stored in Google Contacts.

# How to install?
Vagrant everything.

Create a `keys.js` file:

```
// Google ids
module.exports.GOOGLE_ID = "{your_google_id}";
module.exports.GOOGLE_SECRET = "{yourgoogle_secret}";
module.exports.GOOGLE_URL = "{your_redirect_url}";

// Cluestr ids
module.exports.CLUESTR_ID = "{your_cluestr_id}";
module.exports.CLUESTR_SECRET = "{your_cluestr_secret}";
module.exports.CLUESTR_URL = "{cluestr_provider_url}"

// Access token for test.
// See README.md
module.exports.ACCESS_TOKEN = '{see below}';
```

# How does it works?
Cluestr Core will call `/init/connect` with cluestr Oauth-tokens. The user will be transparently redirected to Google consentment page.
Google will then call us back on `/init/callback` with a `code` parameter. We'll trade the code for an `access_token` and store it in the database, along with the Cluestr tokens.

We can now sync datas between Google and Cluestr.

This is where the `upload` handler comes into play.
The function will retrieve, for all the accounts, the contacts modified since the last run, and upload the datas to Cluestr.

# How to test?
Unfortunately, testing this module is really hard.
This project is basically a simple bridge between Google and Cluestr, so testing requires tiptoeing with the network.

Before running the test suite, you'll need to do:

```
> node test-auth.js
```

And follow the instructions. You'll get an `access_token` to paste in the `keys.js` file.

After that, if you get `Uncaught Error: Wrong Authorization provided.`, your token is not valid anymore. Regenerate a new acces_token.
