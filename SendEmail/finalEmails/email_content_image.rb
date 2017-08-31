def build_content(presenter_name)
	body = <<EOF
<img src="https://test-octamerous-leangle.cfapps.io/no/logo.png" alt="AMC logo" title="AMC logo" style="display:block" width="197" height="157" /> 
Dear #{presenter_name},<br/>
<br/> 
We are excited to have you present at AMC2017! Please read on for some crucial information.<br/>
<br/>
<ol>
<li>
<b>Webinar Recap and Presenter Guidelines (in English + Spanish)</b><br/> 
Miss the webinar? Need a refresher? All AMC2017 Presenters are encouraged to review the <a href="https://www.alliedmedia.org/sites/tmpstage.dev.altissima.theworkdept.com/files/amc2016_presenterguidelines_v2.pdf">Presenter Guidelines</a> to prepare for leading your sessions effectively and accessibly. The Presenter Guidelines are also <a href="https://www.alliedmedia.org/sites/tmpstage.dev.altissima.theworkdept.com/files/amc2016_presenterguidelines_esp_f.pdf">available in Spanish</a>.
</li><br/>
<li>
<b>Reminder: all presenters MUST register for the conference.</b><br/>
If you have not registered, <a href="https://www.eventbrite.com/e/allied-media-conference-2017-tickets-30102066090">please visit our Eventbrite page</a>. If you have requested codes and not received them, please email amc@alliedmedia.org.
</li><br/>
<li>
<b>Airport Shuttles -- Closed for registration.</b><br/>
Presenters flying into DTW, when you arrive at the airport, walk out of the terminal and head to the <b>GROUND TRANSPORTATION</b> area.  Look for a van that says  "AMC Shuttle" at the far end of the pick-up area.  Call 313-506-3986  if for some reason you cannot find the shuttle. You will be asked for your name and session name. Only registered presenters can access this shuttle.
</li><br/>
<li>
<b>Basic info for registration, housing, parking and registration is coming!</b><br/>
Please check your emails between today and tomorrow. Still have questions? Email amc@alliedmedia.org.
</li><br/>
</ol>
EOF
end