def build_reminder yes_info

	body = <<EOF
<img src="https://test-octamerous-leangle.cfapps.io/reminders/logo.png" alt="AMC logo" title="AMC logo" style="display:block" width="197" height="157" /> 
Dear #{yes_info[:name]},
<br/><br/>
This is a reminder to please complete your AMC session finalization by clicking on the link in your acceptance email. <b>If you do not submit your finalization form by Friday May 5th, we cannot guarantee that you will be able to present at the AMC.</b>
<br/><br/>
If you cannot present your session, please email amc@alliedmedia.org.
<br/><br/>
<b>What's next...</b>
<br/>
Once all your workshops are finalized, we will follow up and connect you with your track / practice space coordinators and give you instructions on how to register for the conference.
<br/><br/>
Once the online schedule is posted, we will send you a link to your session to promote and give you info on airport shuttles for presenters. 
<br/><br/>
<b>In the meantime...</b>
<br/>
Please secure your housing, travel and other logistics. For our partnering hotels and community housing information, see <a href="https://www.alliedmedia.org/amc/register">here</a>.
<br/><br/>
If you have trouble accessing your session's finalization form, please email amc@alliedmedia.org.
<br/><br/>
Thanks!
EOF
end