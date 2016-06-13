var Tabletop = require('tabletop');
var fs = require('fs');




var originalSessions = {};
var finalizedSessions = {};

Tabletop.init({
  key: "17oclTki8oaYwsRsqyYDm0i3oiEKsNy__ZQEUlSv8pmc",
  callback: processSessionsSheet,
  prettyColumnNames: false,
  simpleSheet: false
});


function processSessionsSheet (data, tabletop) {

  
  var sheet = data['Form Responses 1'];
  var rows = sheet.elements;
  var numberOfRows = rows.length;
  for(var i = 0; i < numberOfRows; i++) {
    var row = rows[i];

    var track = row['towhattrackareyouproposing'];
    var practiceSpace = row['whichpracticespaceareyouproposingfor'];
    var type = row['whattypeofcontentareyouproposing'] || row['pleaseselectthetypeofpracticespacesessionyouareproposing'];
    var presenter = row['pointperson1name'].trim();
    var title = row['sessiontitle'] || row['whatisthetitleofyourpracticespacesession']
    console.log(title);

    if(presenter) {
      if(!(presenter in originalSessions)){
        originalSessions[presenter] = [];
      }

      originalSessions[presenter].push([track, practiceSpace, type, title]);
    }
  }



  Tabletop.init({
    key: "1A2n2RjXQDO5Q19nIrNMX-7A-9EQmNcry9Owq0orttZ8",
    callback: processFinalSheet,
    prettyColumnNames: false,
    simpleSheet: false
  });

}



function processFinalSheet(data, tabletop) {

  var sheet = data['Form Responses 1'];
  var rows = sheet.elements;
  var numberOfRows = rows.length;
  console.log(numberOfRows);
  for(var i = 0; i < numberOfRows; i++) {
    var row = rows[i];
    var name = row['pointpersonpresenter1name'].trim();
    var title = row['sessiontitle'];
    if(name in originalSessions) {
      
      if(originalSessions[name].length == 1) {
        console.log("easy case");
        var values = originalSessions[name][0];
        fs.appendFileSync('t.txt', values[0]);
        fs.appendFileSync('ps.txt', values[1]);
        fs.appendFileSync('type.txt', values[2]);
      }

      else {
        var numSessions = originalSessions[name].length;
        console.log('numSessions: ' + numSessions);
        var found = false;
        for(var j = 0; j< numSessions; j++) {
          
            var values = originalSessions[name][j];

            if(longestCommonSubstring(title, values[3]) > 7 ) {

              found = true;
              fs.appendFileSync('t.txt', values[0]);
              fs.appendFileSync('ps.txt', values[1]);
              fs.appendFileSync('type.txt', values[2]);
              break;
            }
        }
        if (found == false) {
          fs.appendFileSync('t.txt', '*****');
          fs.appendFileSync('ps.txt', '*****');
          fs.appendFileSync('type.txt', '*****');
        }
      }
    }
    else {
      fs.appendFileSync('t.txt', '*****');
      fs.appendFileSync('ps.txt', '*****');
      fs.appendFileSync('type.txt', '*****');
    }
    fs.appendFileSync('t.txt', '\n');
    fs.appendFileSync('ps.txt', '\n');
    fs.appendFileSync('type.txt', '\n');
  }

}

function longestCommonSubstring(string1, string2){
  // init max value
  var longestCommonSubstring = 0;
  // init 2D array with 0
  var table = [],
            len1 = string1.length,
            len2 = string2.length,
            row, col;
  for(row = 0; row <= len1; row++){
    table[row] = [];
    for(col = 0; col <= len2; col++){
      table[row][col] = 0;
    }
  }
  // fill table
        var i, j;
  for(i = 0; i < len1; i++){
    for(j = 0; j < len2; j++){
      if(string1[i] === string2[j]){
        if(table[i][j] === 0){
          table[i+1][j+1] = 1;
        } else {
          table[i+1][j+1] = table[i][j] + 1;
        }
        if(table[i+1][j+1] > longestCommonSubstring){
          longestCommonSubstring = table[i+1][j+1];
        }
      } else {
        table[i+1][j+1] = 0;
      }
    }
  }
  return longestCommonSubstring;
}
