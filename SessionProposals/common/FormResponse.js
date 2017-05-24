exports.SessionProposal = function(timestamp, sessionInfo, presenters) {
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

exports.SessionInfo = function (title, description, content_type, track_practice_space, media_based, audience, hash_tag, requires_registration_support, requires_additional_scholarship, other)
{
    this.title = title;
    this.description = description;
    this.content_type = content_type;
    this.track_practice_space = track_practice_space;
    this.media_based = media_based;
    this.audience = audience;
    this.hash_tag = hash_tag;
    this.requires_registration_support = requires_registration_support;
    this.requires_additional_scholarship = requires_additional_scholarship;
    this.other = other;
}

