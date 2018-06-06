function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Update Analytics")
    .addItem("Update Analytics","getInfo")
    .addToUi()  
}


function createShorts() {
  performAction(SHORT);
}




function getInfo() { 
  var range = SpreadsheetApp.getActiveRange(); // This gets the current active range in the sheet
  var sheet = SpreadsheetApp.getActiveSheet(); // Determine which sheet is active (Important for books with more than one sheet)
  var data = sheet.getDataRange().getValues(); // This places every cell in the worksheet into an array data[0][0] this is where all the data is pulled from
  var iLen = data.length; // Determins the length of the data array (how many rows there are) - there is an error starting with this iLen later..
  
  
  // Set variables below to customize to your spreadsheet. 
  var RangeStart = "A";
  var RangeEnd = "G";
  
  
  for(var i = 0; i <= iLen; i++) {  // Loop until we're done with the amount of rows! 
    try { // This is to supress the array going one too many times and can't read the value. I don't know how to fix it so I put this here.. Crude but it works
     // var ValueShortURL = data[i + 1][3];  // Set Short URL from D (3) Column - Offset by 1 to account for fixed title row  
      var url = UrlShortener.Url.get(data[i + 1][3], {projection: 'FULL'}), index = 1; // data[i + 1][3] can be replaced with var ValueShortURL if it's easier to understand. But this is more concise. This fetches the full API call for the URL Shortener service. See: https://developers.google.com/url-shortener/v1/getting_started        
      var AllTimeClicks = url.analytics.allTime.shortUrlClicks; //Gets the number of clicks from the analytics class within the url var. Can also request: longUrlClicks, browsers; see again: https://developers.google.com/url-shortener/v1/getting_started#url_analytics
      var CurrentPos = i + 2; // This is a workaround to determine what row we're in currently. Without this the loop will print in one row above where we currently are 
      var RangeTo = sheet.getRange(RangeStart + CurrentPos + ":" + RangeEnd + CurrentPos); // Get the position of the current cell so we can set it later 
      var Today = new Date(); // Lists the current date so we can set it in the RangeSet array below. new Date(); doesn't play nicely in the column!
      
      data[i + 1][6] = AllTimeClicks; // Set AllTimeClicks to Analytics Column Data set - [i + 1][6]
      
      // Can I set the RangeSet array with cells.value() ? So only update the cells that need to be udpated. Would need to loop through and have a variable length array... if rangeLen = 2 then only two.. if rangeLen = 3 then three.. ect
      // This sounds more complicated then I thought it would be
     //               | Column 1 (A)  | Column 2 (B) | Column 3 (C) | Column 4 (D) | Column 5 (E)| 6 (F)| 7 (G)         | *** THIS CAN BE EXAPNDED TO AS MANY COLUMNS AS YOU HAVE IN YOUR SHEET. JUST MAKE SURE TO UPDATE RangeStart AND RangeEnd
      var RangeSet = [[data[i + 1][0],data[i + 1][1],data[i + 1][2],data[i + 1][3],data[i + 1][4],[Today],data[i + 1][6]]]; //Sets the RangeSet variable for X number of rows. Inefficient because I copy every cell into memory then dump it and I could just update the needed cells but that's the next step. 
      
      RangeTo.setValues(RangeSet);   // Update the range with the date set above.
    
  } // End Error Try
  catch (e) { // start Catch of an error I don't want to fix but that doesn't effect the program
    Logger.log(e); // Log the error anyways because that's a good idea right?
   } // End Catch
    
  } // End For
} // End Get Info Function



// https://developers.google.com/apps-script/guides/sheets
