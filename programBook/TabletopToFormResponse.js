var proposalInfo = require('./FinalizedResponse.js')

exports.convert = function(sheetData) {
	var sessionInfo = extractSessionInfo(sheetData);
	var presenters = extractPresenters(sheetData);
	var timestamp = sheetData['Timestamp'];

	return new proposalInfo.FinalizedProposal(timestamp, sessionInfo, presenters);
}

function extractSessionInfo(sheetData) {
	var title = sheetData['EDITED session title'];
	var one_liner = sheetData['EDITED one sentence description'];
	var content_type = sheetData['What type of session content are you proposing? '];
	var track_practice_space = sheetData['Which Track or Practice Space would you like your session to be a part of?'];
	var audience = sheetData['Who is this session for? '];
	var hashtag = sheetData['EDITED hashtag']
	
	return new proposalInfo.SessionInfo(title, one_liner, content_type, track_practice_space, audience, hashtag);
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