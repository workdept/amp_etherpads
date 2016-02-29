
var rowUtils = require("./rowUtils");

module.exports = {
  

  build: function (row) {
    var typeToBuilderMap = {"Track":buildSessionForTrackContent, "Practice Space": buildSessionForPracticeSpaceContent};
    var builder = typeToBuilderMap[rowUtils.getType(row)];
    var content = "<!DOCTYPE html><html><head><title></title></head><body>" + builder(row) + "</body>";
    return content;
  }
};


function buildContentSection(header, content) {
	var section = "";
	section += "<strong>"+header+"</strong>";
	section += '<br>';
	if(!content)
		content = "No information provided"
	section += content;

	section += '<br><br>'
	return section;
}



function buildPrimaryPresenterSection(row, nameColumn, emailColumn, phoneNumberColumn, bioColumn) {

	var sectionContent = "<strong>" + "Presenter 1" + "</strong>" + "<br>";
	sectionContent += row[nameColumn] + ", ";
	sectionContent += row[emailColumn] + ", ";
	sectionContent += row[phoneNumberColumn] + "<br>";
	sectionContent += row[bioColumn] + "<br>";
	sectionContent += "<br>";
	return sectionContent;
}

function buildPresenterSection(row, coordinatorNumber, nameColumn, emailColumn, bioColumn) {

	if(!coordinatorEntered(row, nameColumn, emailColumn, bioColumn))
		return "";

	var sectionContent = "<strong>" + "Presenter " + coordinatorNumber + "</strong>" + "<br>";
	sectionContent += row[nameColumn] + ", ";
	sectionContent += row[emailColumn] + "<br>";
	sectionContent += row[bioColumn] + "<br>";
	sectionContent += "<br>";
	return sectionContent;
}

function coordinatorEntered(row, nameColumn, emailColumn, bioColumn) {
	return row[nameColumn] || row[emailColumn] || row[bioColumn];
}

function buildSessionForTrackContent (row) {
	var padContent = "";
	
	padContent += buildContentSection("Title", row['sessiontitle']);
	padContent += buildContentSection("For Track", row['towhattrackareyouproposing']);
	padContent += buildContentSection("Content type", row['whattypeofcontentareyouproposing']);
	padContent += buildContentSection("Read the call for proposals?", row['ihavereadthecallforproposalsforamc2016']);
	padContent += buildContentSection("Description", row['pleasewriteashortdescriptionofyoursession']);
	padContent += buildContentSection("Media-based organizing", row['pleasedescribehowyoursessionincludestheconceptofmedia-basedorganizing']);
	padContent += buildContentSection("Need Financial Aid?", row['willyoursessionspresentersneedfinancialassistancetoattendandpresentattheamc']);
	padContent += buildContentSection("If so, how many people?", row['ifyouansweredyesabovepleaselistthenumberof25scholarshipcouponsyouarerequestingforallpresentersinthissession']);
	padContent += buildContentSection("How the session fits in with Track", row['pleasedescribehowyoursessionfitswithinthetrackyouselected']);


	padContent += buildPrimaryPresenterSection(row, 'pointpersonpresenter1name', 'pointpersonpresenter1emailaddress',  'pointpersonpresenter1phonenumber', 'pointpersonpresenter1bio');
	padContent += buildPresenterSection(row, 2, 'presenter2name', 'presenter2emailaddress', 'presenter2bio');
	padContent += buildPresenterSection(row, 3, 'presenter3name', 'presenter3emailaddress', 'presenter3bio');
	padContent += buildPresenterSection(row, 4, 'presenter4name', 'presenter4emailaddress', 'presenter4bio');
	padContent += buildPresenterSection(row, 5, 'presenter5name', 'presenter5emailaddress', 'presenter5bio');
	padContent += buildPresenterSection(row, 6, 'presenter6name', 'presenter6emailaddress', 'presenter6bio');

	padContent += buildContentSection("Submission time", row['timestamp']);

	return padContent;
}

function buildSessionForPracticeSpaceContent(row) {
	var padContent = "";
	
	padContent += buildContentSection("Title", row['whatisthetitleofyourpracticespacesession']);
	padContent += buildContentSection("For Practice Space", row['whichpracticespaceareyouproposingfor']);
	padContent += buildContentSection("Content type", row['pleaseselectthetypeofpracticespacesessionyouareproposing']);
	padContent += buildContentSection("Description", row['pleasewriteashortdescriptionofyourpracticespacesession']);
	padContent += buildContentSection("Read the call for proposals?", row['ihavereadthecallforproposalsforamc2016_2']);
	padContent += buildContentSection("Media-based organizing", row['pleasedescribehowyourpracticespacesessionincludestheconceptofmedia-basedorganizing']);
	
	padContent += buildPrimaryPresenterSection(row, 'pointpersonpresenter1name', 'pointpersonpresenter1emailaddress',  'pointpersonpresenter1phonenumber', 'pointpersonpresenter1bio');
	padContent += buildPresenterSection(row, 2, 'presenter2name', 'presenter2emailaddress', 'presenter2bio');
	padContent += buildPresenterSection(row, 3, 'presenter3name', 'presenter3emailaddress', 'presenter3bio');
	padContent += buildPresenterSection(row, 4, 'presenter4name', 'presenter4emailaddress', 'presenter4bio');
	padContent += buildPresenterSection(row, 5, 'presenter5name', 'presenter5emailaddress', 'presenter5bio');
	padContent += buildPresenterSection(row, 6, 'presenter6name', 'presenter6emailaddress', 'presenter6bio');
	
	padContent += buildContentSection("Submission time", row['timestamp']);
	
	return padContent;
}