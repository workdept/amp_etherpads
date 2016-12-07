
var rowUtils = require("./rowUtils");

module.exports = {
  build: function (row) {
    return "<!DOCTYPE html><html><head><title></title></head><body>" + buildContent(row) + "</body>";
  }
};


function buildContentSection(header, content) {
	var section = "";
	section += "<strong>" + header + "</strong>";
	section += '<br>';
	section += content;
	section += '<br><br>'
	return section;
}


function buildCoordinatorSection(row, coordinatorNumber) {

	var nameColumn  =  "coordinator" + coordinatorNumber + "name";
	var emailColumn =  "coordinator" + coordinatorNumber + "email";
	var bioColumn   =  "coordinator" + coordinatorNumber + "bio";

	var name  = row[nameColumn];
	var email = row[emailColumn];
	var bio   = row[bioColumn];

	if(!coordinatorEntered(name, email, bio))
		return "";

	var sectionContent = "<strong>" + "Coordinator " + coordinatorNumber + "</strong>" + "<br>";

	sectionContent += name  + ", ";
	sectionContent += email + "<br>";
	sectionContent += bio   + "<br>";
	sectionContent +=         "<br>";
	return sectionContent;
}

function coordinatorEntered(name, email, bio) {
	return name || email || bio;
}

function buildContent (row) {

	var padContent = "";

	var type = row['areyouproposingatrackpracticespaceornetworkgathering'];
	padContent += buildContentSection("Name of your " + type, row['nameofyourtpsng']);
	padContent += buildContentSection("Involving Media-based Organizing", row['howisyourcontentconnectedtomedia-basedorganizingmax.1600characters']);
	padContent += buildContentSection("Description", row['pleasewritea5-sentencedescriptionofyourtpsngmax1600characters']);
	padContent += buildContentSection("Additional Info", row['doyouhaveanyquestionsoradditionalinformationyouwanttoprovideusmax.250words']);		

	padContent += buildCoordinators(row);
		
	return padContent;
}

function buildCoordinators(row) {
	var content = "";
	content += buildCoordinatorSection(row, 1);
	content += buildCoordinatorSection(row, 2);
	content += buildCoordinatorSection(row, 3);
	content += buildCoordinatorSection(row, 4);
	content += buildCoordinatorSection(row, 5);
	content += buildCoordinatorSection(row, 6);
	return content;
}



