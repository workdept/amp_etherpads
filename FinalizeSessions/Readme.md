# Finalize Sessions

In 2016, we were unable to make editable URLs for the session finalization process.  The form was structured in such a way, that it was impossible to re-send out the form and still preserve the necessary data.  Instead we used a pre-filled URL, which is a URL that contains the data from the user's submission.  Furthermore, we made this URL directly in the sheet, referencing the necessary columns via a formula. These URLs became very large, so we used the tinyurl website to turn it into something smaller for the SurveyMonkey e-mails.


Ideally, we would have liked to create editable urls, so the users' responses would just overwrite the data they had originally sent.  The code for creating these urls is in the editableUrls.js file.  This code must run as a google script inside the spreadsheet.