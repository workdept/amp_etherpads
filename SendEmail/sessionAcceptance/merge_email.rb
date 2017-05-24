def build_m merge
	body = <<EOF
<img src="https://test-octamerous-leangle.cfapps.io/#{merge[:point_person]}/logo.png" alt="AMC logo" title="AMC logo" style="display:block" width="197" height="157" />
Dear #{merge[:name1]} + #{merge[:name2]} --
<br/><br/>
Thanks for your awesome AMC2017 session proposals. Your content very clearly overlaps and we would like to merge these proposals into one session, called #{merge[:session_name]}.  
<br/><br/>
#{merge[:point_person]} would be the point person for this merged session, responsible for submitting final session information and confirming participation by <b>April 30, 2017</b>. 
<br/><br/>
In order successfully develop your merged session, we suggest:
<ul>
<li>
Figuring out the points of connection between your two proposals.
</li>
<br/>
<li>
Creating a session outline that is enriched by both proposals.
</li>
<br/>
<li>
Collaborating and compromising to find a good balance. 
</li>
</ul>
<br/>
Below are links to both proposals for your collaborative review.
<br/><br/>
Use these etherpads to review content from both proposals:
<br/><br/>
#{merge[:link1]}
<br/><br/>
#{merge[:link2]}
<br/><br/>
<b>Please reply to this email letting us know if you are willing to merge. Once you confirm your acceptance of a merger, we will send the point person a link to update and finalize your session information.</b>
<br/><br/>
We are looking forward to a great session. Let us know if we can support this merger by facilitating conversations or providing other assistance.
<br/><br/>
Thank you!
<br/>
Morgan Willis + Jenny Lee
EOF
end
