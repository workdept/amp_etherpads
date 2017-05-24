require '../email'

require './merge_email'


require 'csv'

merge_array  = CSV.read('./merges.tsv', { :col_sep => "\t" })


#loopOvermergeArrays 14
(3..14).each do |i|
	merge_info_array = merge_array[i]
	if merge_info_array[10]
		merge_info = {
			:name1 => merge_info_array[10],
			:name1_email => merge_info_array[11].strip,
			:name2 => merge_info_array[12],
			:name2_email => merge_info_array[13].strip,
			:point_person => merge_info_array[14],
			:session_name => merge_info_array[15],
			:link1 => merge_info_array[16],
			:link2 => merge_info_array[17]
		}
		body = ""
		body = build_m merge_info
		puts i
		puts merge_info[:name1_email]
		puts merge_info[:name2_email]
	 	recipients = [
			{:name => merge_info[:name1], :email => merge_info[:name1_email]},
			{:name => merge_info[:name2], :email => merge_info[:name2_email]}
		]
		send_email(recipients, body, "Please merge your session proposals")
	end
end
