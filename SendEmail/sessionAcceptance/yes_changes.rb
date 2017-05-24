require '../email'

require './yes_changes_scholarship'
require './yes_changes_no_scholarship'


require 'csv'

yes_array  = CSV.read('./yes_changes.tsv', { :col_sep => "\t" })

responses_array  = CSV.read('./responses.tsv', { :col_sep => "\t" })

responses_hash = {}

for response in responses_array
  responses_hash[response[2]] = response[0]
end


#loopOverYesArrays 133 (1..132)
(115..115).each do |i|
 	yes_info_array = yes_array[i]
 	session_name = yes_info_array[12]
 	yes_info = {
 		:session_name => session_name,
 		:tpsng => yes_info_array[11],
 		:editable_url => responses_hash[session_name],
 		:name => yes_info_array[20],
 		:email => yes_info_array[21].strip,
 		:reimbursement => yes_info_array[9],
 		:comp_reg => yes_info_array[8],
 		:changes => yes_info_array[7]
 	}
 	body = ""
 	if yes_info[:reimbursement] != "0"
 		body = build_y_s yes_info
 	else
 		body = build_y_n yes_info
 	end
 	recipients = [
			{:name => yes_info[:name], :email => yes_info[:email]},
			{:name => "Michelle Caswell", :email => "caswell@gseis.ucla.edu" }
	]
	puts :email => yes_info[:email]
	puts yes_info[:editable_url]
 	#send_email(recipients, body, "Your session proposal has been accepted!")
end
