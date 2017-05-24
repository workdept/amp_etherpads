var proposalInfo = require('../common/FormResponse.js')

exports.convert = function(sheetData) {
	var sessionInfo = extractSessionInfo(sheetData);
	var presenters = extractPresenters(sheetData);
	var timestamp = sheetData['Timestamp'];

	return new proposalInfo.SessionProposal(timestamp, sessionInfo, presenters);
}

function extractSessionInfo(sheetData) {
	var title = sheetData['What is your session title?  '];
	var description = sheetData['What is your session about? '];
	var content_type = sheetData['What type of session content are you proposing? '];
	var track_practice_space = sheetData['Which Track or Practice Space would you like your session to be a part of?'];
	var media_based = sheetData['Describe the connection between your proposed session and the practice of media-based organizing.'];
	var audience = sheetData['Who is this session for? '];
	var hash_tag = sheetData['Proposed hashtag for this session.'];
	var requires_registration_support = sheetData['Will you need AMC registration support to present at AMC2017?'];
	var requires_additional_scholarship = sheetData['Beyond complimentary AMC registration, will you and your session’s co-presenters need additional scholarship support for housing and travel?']
	var other = sheetData['Please share any other information you think would be relevant, interesting or important related to your session proposal at AMC2017.'];
	
	return new proposalInfo.SessionInfo(title, description, content_type, track_practice_space, media_based, audience, hash_tag, requires_registration_support, requires_additional_scholarship, other);
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
	var name = sheetData[presenterPrefix + ' Name'];
	var email = sheetData[presenterPrefix + ' Email'];
	var phone = sheetData[presenterPrefix + ' Phone'];
	var bio = sheetData[presenterPrefix + ' Bio'];
	var affiliation = sheetData[presenterPrefix + ' Organizational Affiliation'];
	return new proposalInfo.PresenterInfo(name, email, phone, bio, affiliation); 
}