require '../email'

require './yes_scholarship'
require './yes_no_scholarship'


require 'csv'

yes_array  = CSV.read('./yes.tsv', { :col_sep => "\t" })




responses_array  = CSV.read('./responses.tsv', { :col_sep => "\t" })

responses_hash = {}

for response in responses_array
  responses_hash[response[2]] = response[0]
end


#loopOverYesArrays 133 (1..132)
[4,77,80,97,110,113,127].each do |i|
 	yes_info_array = yes_array[i]
 	session_name = yes_info_array[12]
 	yes_info = {
 		:session_name => session_name,
 		:tpsng => yes_info_array[11],
 		:editable_url => responses_hash[session_name],
 		:name => yes_info_array[20],
 		:email => yes_info_array[21].strip,
 		:reimbursement => yes_info_array[9],
 		:comp_reg => yes_info_array[8]
 	}
 	#p yes_info
 	body = ""
 	if yes_info[:reimbursement] != "0"
 		#p "reimbursed"
 		body = build_y_s yes_info
 	else
 		#p "none"
 		body = build_y_n yes_info
 	end

 	#puts i
 	#puts yes_info[:name]
 	puts yes_info[:email]
 	#puts yes_info[:editable_url]
 	recipients = [
			{:name => yes_info[:name], :email => yes_info[:email]}
	]
 	#send_email(recipients, body, "Your session proposal has been accepted!")
end
