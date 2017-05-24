require '../email'
require './proposal_without_codes'
require 'csv'


#some sessions do not have OLD titles
#potential issues: duplicate titles, lose track of which codes were already sent, strikethrough, how many codes got used
#who got assigned which codes?

responses_array  = CSV.read('./responses.tsv', { :col_sep => "\t" })

for_amc_to_review_array  = CSV.read('./for_amc_to_review.tsv', { :col_sep => "\t" })




num_scholarships_hash = {}


for for_amc_to_review in for_amc_to_review_array 
	old_title = for_amc_to_review[15]
	new_title = for_amc_to_review[12]
	if old_title
		num_scholarships_hash[old_title] = for_amc_to_review[8]		
	end
	if new_title
  		num_scholarships_hash[new_title.strip] = for_amc_to_review[8]
  	end
end
sent_to = []
count = 0
(1..519).each do |i|
 	response_array = responses_array[i]
 	session_name = response_array[57]
 	next if !session_name || session_name == ""
 	session_name = session_name.strip
 	response = {
 		:session_name => session_name,
 		:start_time => response_array[53],
 		:end_time => response_array[54],
 		:name => response_array[13],
 		:email => response_array[14].strip
 	}

 	if !response[:start_time] || response[:start_time] == ""
 		puts "not sending e-mail for #{session_name} because missing start time"
 		next
 	elsif !response[:end_time] || response[:end_time] == ""
 		puts "not sending e-mail for #{session_name} because missing end time"
 		next
 	elsif !response[:name] || response[:name] == ""
 		puts "not sending e-mail for #{session_name} because missing name"
 		next
 	elsif !response[:email] || response[:email] == ""
 		puts "not sending e-mail for #{session_name} because missing email"
 		next
 	end
 		

 	
 	subject = "*Corrected* Airport Shuttle Link + Your AMC2017 Webinar Links"
 	body = build_info_without_codes
 	

 	recipients = []
 	
	#recipients << {:name => 'Murtuza Boxwala', :email => 'mboxwala@umich.edu'}
	#recipients << {:name => 'Muna Danish',     :email => 'muna@alliedmedia.org'}
	#recipients << {:name => 'Morgan Willis',   :email => 'morgan@alliedmedia.org'}
	#recipients << {:name => 'Meg Heeres',      :email => 'meg@theworkdept.com'}
	#recipients << {:name => 'Meghan Sweet',    :email => 'meghan.sweet@gmail.com'}
	
	recipients << {:name => response[:name], :email => response[:email]}
	
	next if sent_to.include? response[:email]
	sent_to << response[:email]
	puts recipients
 	send_email(recipients, body, subject)
 	count += 1
end
puts count