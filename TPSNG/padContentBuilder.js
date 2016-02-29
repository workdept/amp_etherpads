
var rowUtils = require("./rowUtils");

module.exports = {
  

  build: function (row) {
    var typeToBuilderMap = {"Track":buildTrackContent, "Practice Space": buildPracticeSpaceContent, "Network Gathering": buildNetworkGatheringContent};
    var builder = typeToBuilderMap[rowUtils.getType(row)];
    var content = "<!DOCTYPE html><html><head><title></title></head><body>" + builder(row) + "</body>";
    return content;
  }
};


function buildContentSection(header, content) {
	var section = "";
	section += "<strong>"+header+"</strong>";
	section += '<br>';
	section += content;
	section += '<br><br>'
	return section;
}


function buildCoordinatorSection(row, coordinatorNumber, firstNameColumn, lastNameColumn, emailColumn, phoneNumberColumn, bioColumn) {

	if(!coordinatorEntered(row, firstNameColumn, lastNameColumn, emailColumn, phoneNumberColumn, bioColumn))
		return "";

	var sectionContent = "<strong>" + "Coordinator " + coordinatorNumber + "</strong>" + "<br>";
	sectionContent += row[firstNameColumn] + " " + row[lastNameColumn] + ", ";
	sectionContent += row[emailColumn] + ", ";
	sectionContent += row[phoneNumberColumn] + "<br>";
	sectionContent += row[bioColumn] + "<br>";
	sectionContent += "<br>";
	return sectionContent;
}

function coordinatorEntered(row, firstNameColumn, lastNameColumn, emailColumn, phoneNumberColumn, bioColumn) {
	return row[firstNameColumn] || row[lastNameColumn] || row[emailColumn] || row[phoneNumberColumn] || row[bioColumn];
}

function buildTrackContent (row) {
	var padContent = "";
	
	padContent += buildContentSection("Track Name", row['whatisyourtracksname']);
	padContent += buildContentSection("Involving Media-based Organizing", row['pleasedescribehowthistrackinvolvesmedia-basedorganizing.']);
	padContent += buildContentSection("Skills you Hope to Foster", row['pleasedescribesomeconcreteskillsthatyouhopeyourtrackwillfosterinparticipants.']);
	padContent += buildContentSection("Description", row['pleasewriteafivesentencedescriptionofyourtrack.']);
	padContent += buildContentSection("Invitees", row['whoaresomepeopleorganizationsnetworksmedia-makersyouwouldliketoinvitetoparticipateinyourtrack']);


	padContent += buildCoordinatorSection(row, 1, 'coordinator1firstname', 'coordinator1lastname', 'coordinator1emailaddress',  'coordinator1phonenumber', 'coordinator1organizationalaffiliationsbio');
	padContent += buildCoordinatorSection(row, 2, 'coordinator2firstname', 'coordinator2lastname', 'coordinator2emailaddress',  'coordinator2phonenumber', 'coordinator2organizationalaffiliationsbio');
	padContent += buildCoordinatorSection(row, 3, 'coordinator3firstname', 'coordinator3lastname', 'coordinator3emailaddress',  'coordinator3phonenumber', 'coordinator3organizationalaffiliationsbio');
	padContent += buildCoordinatorSection(row, 4, 'coordinator4firstname', 'coordinator4lastname', 'coordinator4emailaddress',  'coordinator4phonenumber', 'coordinator4organizationalaffiliationsbio');
	padContent += buildCoordinatorSection(row, 5, 'coordinator5firstname', 'coordinator5lastname', 'coordinator5emailaddress',  'coordinator5phonenumber', 'coordinator5organizationalaffiliationsbio');
	padContent += buildCoordinatorSection(row, 6, 'coordinator6firstname', 'coordinator6lastname', 'coordinator6emailaddress',  'coordinator6phonenumber', 'coordinator6organizationalaffiliationsbio');
		
	return padContent;
}

function buildPracticeSpaceContent(row) {
	var padContent = "";

	padContent += buildContentSection("Practice Space Name", row['whatisyourpracticespacesname']);
	padContent += buildContentSection("Vision", row['pleasedescribeyourvisionforwhatwillhappeninyourpracticespaceoverthethreedaysoftheamcfriday-sunday.']);
	padContent += buildContentSection("Shareable Output", row['whatwillbetheshareablemediaarttechnologyorperformanceprojectcreatedinyourpracticespace']);
	padContent += buildContentSection("Major Questions to Explore", row['whatmajorquestionswillyourpracticespaceexplorethroughtheweekend']);
	padContent += buildContentSection("Invitees", row['whoaresomepeopleorganizationsnetworksmedia-makersyouwouldliketoinvitetoparticipateinyourpracticespace']);

	padContent += buildCoordinatorSection(row, 1, 'coordinator1firstname_2', 'coordinator1lastname_2', 'coordinator1emailaddress_2',  'coordinator1phonenumber_2', 'coordinator1organizationalaffiliationsbio_2');
	padContent += buildCoordinatorSection(row, 2, 'coordinator2firstname_2', 'coordinator2lastname_2', 'coordinator2emailaddress_2',  'coordinator2phonenumber_2', 'coordinator2organizationalaffiliationsbio_2');
	padContent += buildCoordinatorSection(row, 3, 'coordinator3firstname_2', 'coordinator3lastname_2', 'coordinator3emailaddress_2',  'coordinator3phonenumber_2', 'coordinator3organizationalaffiliationsbio_2');
	padContent += buildCoordinatorSection(row, 4, 'coordinator4firstname_2', 'coordinator4lastname_2', 'coordinator4emailaddress_2',  'coordinator4phonenumber_2', 'coordinator4organizationalaffiliationbio');
	padContent += buildCoordinatorSection(row, 5, 'coordinator5firstname_2', 'coordinator5lastname_2', 'coordinator5emailaddress_2',  'coordinator5phonenumber_2', 'coordinator5organizationalaffiliationsbio_2');
	padContent += buildCoordinatorSection(row, 6, 'coordinator6firstname_2', 'coordinator6lastname_2', 'coordinator6emailaddress_2',  'coordinator6phonenumber_2', 'coordinator6organizationalaffiliationsbio_2');
	
	
	return padContent;
}

function buildNetworkGatheringContent(row) {

	var padContent = "";

	padContent += buildContentSection("Network Gathering Name", row['whatisthenameofyournetworkgathering']);
	padContent += buildContentSection("Vision", row['describeyourvisionofwhatwilltakeplaceinyournetworkgathering.']);
	padContent += buildContentSection("Relation to Media-based Organizing", row['howwillyournetworkgatheringrelatetomedia-basedorganizing']);
	padContent += buildContentSection("Open or Invite Only?", row['willthisgatheringbeopentoallamcregistrantsorinvite-only']);
	padContent += buildContentSection("Anticipated Number of Participants", row['whatistheanticipatednumberofparticipantsinyourng']);
	padContent += buildContentSection("Invitees", row['whoaresomepeopleorganizationsnetworksmedia-makersyouwouldliketoinvitetoparticipateinyournetworkgathering']);
    padContent += buildContentSection("Will you Encourage your Participants to Present Sessions and Participate in Other Content Areas", row['willyouencourageparticipantsinyournetworkgatheringtopresentsessionsparticipateinothercontentareasthroughtheweekend']);
	

	padContent += buildCoordinatorSection(row, 1, 'coordinator1firstname_3', 'coordinator1lastname_3', 'coordinator1emailaddress_3',  'coordinator1phonenumber_3', 'coordinator1organizationalaffiliationbio');
	padContent += buildCoordinatorSection(row, 2, 'coordinator2firstname_3', 'coordinator2lastname_3', 'coordinator2emailaddress_3',  'coordinator2phonenumber_3', 'coordinator2organizationalaffiliationsbio_3');
	padContent += buildCoordinatorSection(row, 3, 'coordinator3firstname_3', 'coordinator3lastname_3', 'coordinator3emailaddress_3',  'coordinator3phonenumber_3', 'coordinator3organizationalaffiliationbio');
	padContent += buildCoordinatorSection(row, 4, 'coordinator4firstname_3', 'coordinator4lastname_3', 'coordinator4emailaddress_3',  'coordinator4phonenumber_3', 'coordinator4organizationalaffiliationbio_2');
	padContent += buildCoordinatorSection(row, 5, 'coordinator5firstname_3', 'coordinator5lastname_3', 'coordinator5emailaddress_3',  'coordinator5phonenumber_3', 'coordinator5organizationalaffiliationbio');
	padContent += buildCoordinatorSection(row, 6, 'coordinator6firstname_3', 'coordinator6lastname_3', 'coordinator6emailaddress_3',  'coordinator6phonenumber_3', 'coordinator6organizationalaffiliationsbio_3');
	return padContent;
	}




