def build_y_n yes_info

	body = <<EOF
<img src="https://test-octamerous-leangle.cfapps.io/#{yes_info[:name]}/logo.png" alt="AMC logo" title="AMC logo" style="display:block" width="197" height="157" /> 
Dear #{yes_info[:name]} --
<br/><br/>
Your session proposal, "#{yes_info[:session_name]}", has been tentatively accepted for the 19th annual Allied Media Conference, June 15-18, 2017 as part of the "#{yes_info[:tpsng]}." We ask that you make the following critical changes in your proposal:
<blockquote>#{yes_info[:changes]}</blockquote>
Before your session is officially accepted for this year’s conference, you will need to take the following steps, listed below. Please be sure to read this entire email carefully.
<br/><br/>
Based on your scholarship request we can offer you #{yes_info[:comp_reg]} complimentary registrations.
<br/><br/>
Next steps:
<ol>
<li>
<b>REQUIRED BY APRIL 30:</b> <a href="#{yes_info[:editable_url]}">Complete the "Finalize Your Session" form.</a> You cannot participate in the AMC unless you finalize your session information. You can only submit this finalization form once!
</li>
<br/>
<li>
<b><a href="https://www.alliedmedia.org/sites/tmpstage.dev.altissima.theworkdept.com/files/amc2016_presenterguidelines_v2.pdf">Download and review the AMC2017 Presenter Guidelines</a></b>
</li>
<br/>
<li>
<b>Attend one of the AMC Presenter Webinars</b> held at three different time options on Friday, May 19. Select the time that works best in the “Finalize Your Session” form. Your attendance at this webinar will serve as the final confirmation that you intend to present this session. If you miss the webinar and we don’t hear from you, we may have to decline your session.
</li>
</ol>
If you are unable to present, please email amc@alliedmedia.org with the name of your canceled session. We will confirm via email and remove your content.
<br/><br/>
We are so excited to have you be a part of this year’s AMC! Please don’t hesitate to email us at amc@alliedmedia.org if you have any questions or concerns.
<br/><br/>
Sincerely,
<br>
Morgan Willis + Jenny Lee
EOF
end