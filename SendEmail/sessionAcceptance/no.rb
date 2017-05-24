require '../email'

require './no_email'


require 'csv'

no_array  = CSV.read('./no.tsv', { :col_sep => "\t" })


#loopOverYesArrays 213 (i.e. 1..213)
(79..79).each do |i|
 	no_info_array = no_array[i]
 	session_name = no_info_array[12]
 	no_info = {
 		:session_name => session_name,
 		:name => no_info_array[20],
 		:email => no_info_array[21].strip
 	}
	body = build_n no_info
	puts i
	puts no_info[:email]
 	recipients = [
		{:name => no_info[:name], :email => no_info[:email]}
	]
 	send_email(recipients, body, "Your AMC2017 Session Proposal")
end
