module.exports = {
  getType: function (row) {

      var possibleTypes = ["Track", "Practice Space", "Network Gathering"];
      var type = row["whichcontentareaareyouproposingforamc2016"];
      if(possibleTypes.indexOf(type) == -1) {
        throw "type: " + type + " not found"
      }
      return type
    }
} 