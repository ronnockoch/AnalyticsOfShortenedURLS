# AnalyticsOfShortenedURLS
Updating Analytics for URL's Shortened by GoogleURL shortener in Sheets


Long story short; this code was written to automatically update a spreadsheet with values for how many times a goo.gl short link has been clicked for tracking purposes. Currently the data is organized in a set way and would require smallchanges to the code to make it easy to setup for others; if there's interest I can go through the code and make it easier to update where you want your information to go.
7/26/17


Couple of notes:

You need to enable the URL Shortner API in your Google Apps Script (Tools > Script Editor) then select the Advanced Google Services and activate the URLShortener. You'll be prompted to enable the services in the Google Developers Console as well (https://console.developers.google.com/apis/api/urlshortener.googleapis.com/)

These both need to be enabled before the code can run. 
