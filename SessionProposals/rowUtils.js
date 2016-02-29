module.exports = {
  getType: function (row) {

      var possibleTypes = ["Track", "Practice Space"];
      var type = row['areyouproposingcontenttoanamc2016trackorapracticespace'];
      if(possibleTypes.indexOf(type) == -1) {
        throw "type: " + type + " not found"
      }
      return type
    }
} 