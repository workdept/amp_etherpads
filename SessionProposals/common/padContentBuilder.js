module.exports = {
  build: function (proposal) {
    var content = "<!DOCTYPE html><html><head><title></title></head><body>" + buildDetails(proposal) + "</body>";
    return content;
  }
};

function buildDetails (proposal) {
	var padContent = "";
	padContent += buildSessionInfoSection(proposal.sessionInfo);
	padContent += buildPresentersSection(proposal.presenters);
	padContent += buildContentSection("Submission time", proposal.timestamp);
	return padContent;
}

function buildSessionInfoSection(sessionInfo) {
	var padContent = "";
	padContent += buildContentSection("Title", sessionInfo.title);
	padContent += buildContentSection("TPSNG", sessionInfo.track_practice_space);
	padContent += buildContentSection("Content type", sessionInfo.content_type);
	padContent += buildContentSection("Description", sessionInfo.description);
	padContent += buildContentSection("How is this connected to media-based organizing?", sessionInfo.media_based);
	padContent += buildContentSection("Need registration support?", sessionInfo.requires_registration_support);
	padContent += buildContentSection("Need additional scholarship?", sessionInfo.requires_additional_scholarship);
	padContent += buildContentSection("Audience", sessionInfo.audience);
	padContent += buildContentSection("#hashtag", sessionInfo.hash_tag);
	padContent += buildContentSection("Anything else?", sessionInfo.other);
	return padContent;
}

function buildPresentersSection(presenters) {
	var padContent = "";
	for(var i = 0; i < presenters.length; i++) {
		padContent += buildPresenterSection(presenters[i], i+1);
	}
	return padContent;
}

function buildPresenterSection(presenterInfo, number ) {
	var sectionContent = ""
	if( presenterInfo.name) {
		sectionContent += "<strong>" + "Presenter " + number + "</strong>" + "<br>";
		sectionContent += presenterInfo.name + ", ";
		sectionContent += presenterInfo.email + ", ";
		sectionContent += presenterInfo.phone + "<br>";
		sectionContent += presenterInfo.bio + "<br>";
		sectionContent += presenterInfo.affiliation + "<br>";
		sectionContent += "<br>";
	}
	return sectionContent;
}

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