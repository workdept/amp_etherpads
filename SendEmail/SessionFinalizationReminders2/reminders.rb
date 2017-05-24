require '../email'
require './reminder'

require 'csv'

yes_array = CSV.read('./reminders.tsv', { :col_sep => "\t" })

count = 0
(384..498).each do |i|

	info = yes_array[i]
	next if info[5] && info[5].strip == 'N'
	next if info[12]
		
	count = count + 1
	yes_info = {
		:name => info[23],
		:email => info[24].strip,
	}


	
	body = build_reminder yes_info

		

	recipients = [
		{:name => yes_info[:name], :email => yes_info[:email]}
		
		#{:name => 'Muna Danish',   :email => 'muna@alliedmedia.org'},
		#{:name => 'Morgan Willis', :email => 'morgan@alliedmedia.org'}, #Morgan Willis <morgan@alliedmedia.org>
		#{:name => 'Meg Heeres',    :email => 'meg@theworkdept.com'} #Meg Heeres <meg@theworkdept.com>
	]

	puts i
	puts yes_info[:name]
	puts yes_info[:email]
	send_email(recipients, body, "Finalize your AMC session by Friday, May 5th! ")
end

puts count
