# AnalyticsOfShortenedURLS
Updating Analytics for URL's Shortened by GoogleURL shortener in Sheets

UPDATE February 13th, 2019 - 
As of April 18th, 2018 the Goo.gl short url service has shut down. This content is depreceated unless you've already activated, and still use your short urls. This project may be updated to reflect the new FDL links if I have time in the future.
https://developers.googleblog.com/2018/03/transitioning-google-url-shortener.html



Long story short; this code was written to automatically update a spreadsheet with values for how many times a goo.gl short link has been clicked for tracking purposes. Currently the data is organized in a set way and would require smallchanges to the code to make it easy to setup for others; if there's interest I can go through the code and make it easier to update where you want your information to go.
7/26/17


Couple of notes:

You need to enable the URL Shortner API in your Google Apps Script (Tools > Script Editor) then select the Advanced Google Services and activate the URLShortener. You'll be prompted to enable the services in the Google Developers Console as well (https://console.developers.google.com/apis/api/urlshortener.googleapis.com/)

These both need to be enabled before the code can run. 


Pulled from both of these locations for information and code snippets:
https://productforums.google.com/forum/#!msg/docs/3r3sOazAWCY/5mlSK0gP6V0J // This didn't work on it's own and had to essentially re-write the entire code for it to work in my purpose.
https://webapps.stackexchange.com/questions/82600/pull-in-analytics-and-click-stats-for-goo-gl-links-in-google-sheets









Todo:
- Re-Intergrate ability to create short-links based off of long-links
- Make code easier to modify
