def build_info_without_codes response

	body = <<EOF
Hello #{response[:name]}!
<br/><br/>
<h3><b>FIRST THING:</b></h3>
Your session, "#{response[:session_name]}" has been scheduled from #{response[:start_time]} to #{response[:end_time]}. If you will not be physically present at the conference at this time, please email amc@alliedmedia.org immediately and we will see what we can do to reschedule your session. PLEASE NOTE: No schedule changes can be made after <b>12:00pm EST Tuesday, May 30th</b>.
<br/>
<br/>
<b>View Your Session Online:</b>
<br/>
Please go to https://amc2017.sched.com/, search for your session using the title provided above, and review the location and final information (description, presenters, kid friendliness, etc.). Your session description may have been edited for clarity and length. <b>Email sessions@alliedmedia.org as soon as possible with any changes.</b>
<br/>
<br/>
<h3><b>SECOND THING:</b></h3>
As an AMC presenter, you may reserve a complimentary ride to and from the airport with the AMC presenter-only shuttle. <a href="https://docs.google.com/document/d/1Gx_7oEYsmedpaAnAfoZz4jEVQTWA3HgkzaPeQi7hqho/edit">Please use this form</a>, to select from a limited number of pick-up and drop-off times. There are the only times we can offer shuttles. If none of these shuttle times work, try using Skoot, Lyft, or Uber/UberX. To arrange ride-sharing with other AMC participants, use our <a href="https://www.facebook.com/groups/200720500409018/">Facebook event</a>. If you do not fill-out this form before <b>June 11th</b>, we cannot guarantee you a ride. We can't wait to see you soon!
<br/>
<br/>
<br/>
See you at AMC2017!
<br/>
EOF
end