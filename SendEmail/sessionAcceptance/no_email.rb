def build_n no_info
	body = <<EOF
<img src="https://test-octamerous-leangle.cfapps.io/no/logo.png" alt="AMC logo" title="AMC logo" style="display:block" width="197" height="157" />
Dear #{no_info[:name]} --
<br/><br/>
Thank you for proposing a session for the 19th annual Allied Media Conference. We received over 500 session proposals and were inspired by every single one. While we cannot accept your proposal, “#{no_info[:session_name]}” for the AMC, we know your work is important and crucial to our network.
<br/><br/>
Please consider participating in the AMC by attending or volunteering. 
<br/><br/>
We hope to see you in June!
<br/><br/>
Sincerely,
<br/>
Morgan Willis + Jenny Lee
EOF
end