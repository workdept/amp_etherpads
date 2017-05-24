exports.FinalizedProposal = function(timestamp, sessionInfo, presenters) {
    this.timestamp = timestamp;
    this.sessionInfo = sessionInfo;
    this.presenters = presenters
}

exports.PresenterInfo = function(name, email, phone, bio, affiliation) {
    this.name = name;
    this.email = email;
    this.bio = bio;
    this.phone = phone;
    this.affiliation = affiliation;
}

exports.SessionInfo = function (title, one_liner, content_type, track_practice_space, audience, hashtag) {
    this.title = title;
    this.one_liner = one_liner;
    this.content_type = content_type;
    this.track_practice_space = track_practice_space;
    this.audience = audience;
    this.hashtag = hashtag;
}
