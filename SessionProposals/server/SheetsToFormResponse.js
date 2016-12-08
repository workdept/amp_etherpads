var proposalInfo = require('../common/FormResponse.js')

exports.convert = function(sheetData) {
	var sessionInfo = extractSessionInfo(sheetData);
	var presenters = extractPresenters(sheetData);
	var timestamp = sheetData['Timestamp'];

	return new proposalInfo.SessionProposal(timestamp, sessionInfo, presenters);
}

function extractSessionInfo(sheetData) {
		var title = sheetData['What is your session title?  '][0];
	var description = sheetData['What is your session about? '][0];
	var content_type = sheetData['What type of session content are you proposing? '][0];
	var track_practice_space = sheetData['Which Track or Practice Space would you like your session to be a part of?'][0];
	var media_based = sheetData['Describe the connection between your proposed session and the practice of media-based organizing.'][0];
	var audience = sheetData['Who is this session for?'][0];
	var hash_tag = sheetData['Proposed hashtag for this session.'][0];
	var requires_scholarship = sheetData['Will you need scholarship support to present at AMC2017? '][0];
	var other = sheetData['Please share any other information you think would be relevant, interesting or important related to your session proposal at AMC2017.'][0];
	
	return new proposalInfo.SessionInfo(title, description, content_type, track_practice_space, media_based, audience, hash_tag, requires_scholarship, other);
}

function extractPresenters(sheetData) {
	presenters = [];
	presenters.push(extractPresenter('Presenter 1/Point Person', sheetData));
	presenters.push(extractPresenter('Presenter 2', sheetData));
	presenters.push(extractPresenter('Presenter 3', sheetData));
	presenters.push(extractPresenter('Presenter 4', sheetData));
	presenters.push(extractPresenter('Presenter 5', sheetData));
	presenters.push(extractPresenter('Presenter 6', sheetData));
	return presenters;
}

function extractPresenter(presenterPrefix, sheetData) {
	var name = sheetData[presenterPrefix + ' Name'][0];
	var email = sheetData[presenterPrefix + ' Email'][0];
	var phone = sheetData[presenterPrefix + ' Phone'][0];
	var bio = sheetData[presenterPrefix + ' Bio'][0];
	var affiliation = sheetData[presenterPrefix + ' Organizational Affiliation'][0];
	return new proposalInfo.PresenterInfo(name, email, phone, bio, affiliation); 
}