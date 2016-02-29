var lodash = require('lodash'),
    util = require('util'),
    Tabletop = require('tabletop'),
    etherpadLiteClient = require('etherpad-lite-client');

var ep = etherpadLiteClient.connect({
  apikey: '9e7d36e7a4a510484d523f29753a8c0079bdb008ec64e7749911c76e4118a185',
  host: 'etherpad.alliedmedia.org',
  port: 443
});

var processSessionsSheet = function(data, tabletop) {
  lodash.each(data['Form Responses 1'].elements, function(row) {
    var padContent = '<!DOCTYPE html><html><head><title>AMC2015 Session Proposal #' + row.rowNumber + '</title></head><body><br><br>';
    padContent += 'DO NOT LEAVE COMMENTS ON THIS PAGE, PLEASE USE YOUR TRACK OR PRACTICE SPACE ETHERPAD AT ';
    padContent += row.tableofcontentsetherpadurl;
    padContent += '<br><br><br>';

    var pretty_cols = data['Form Responses 1'].pretty_columns;

    lodash.each(row, function(v, k) {
      try {
        if (pretty_cols.hasOwnProperty(k)) {
          var kk = pretty_cols[k];
          var is_not_contact_info = (kk.toLowerCase().indexOf('email address') !== 0)
                                 && (kk.toLowerCase().indexOf('phone number') !== 0);
          var is_not_blank = v.length > 1;
          var is_not_useless = (kk !== 'Etherpad URL') && (kk !== 'Edit URL');
          if (is_not_contact_info && is_not_blank && is_not_useless) {
            padContent += '<b>' + kk + ':</b><br><br>' + v + '<br><br><br>';
          }
        }
      } catch (e) {
        console.error('bad time');
      }
    });
    padContent += '</body></html>';
    var padID = '2015_Session_Proposal_' + row.rowNumber;
    console.log(padID);
    ep.createPad({padID: padID});
    ep.setHTML({
      padID: padID,
      html: padContent
    });
  });
};

Tabletop.init({
  key: '1C8infRjTAVInEFuWY1rZ0Zv_mMApTqEwsPvkHVts-lw',
  callback: processSessionsSheet,
  prettyColumnNames: true,
  simpleSheet: false
});


