require '../email'
require 'csv'
require './email_content_image'



events  = CSV.read('./events.csv', { :col_sep => "," })
events.shift

responses_array  = CSV.read('./responses.tsv', { :col_sep => "\t" })

emails_hash = {}
person_hash = {}

responses_array.each do |response|

	if response[2]
		#puts "inserting " + response[2]
		emails_hash[response[2].strip.downcase] = response[14].strip
		person_hash[response[2].strip.downcase] = response[13].strip
	end
	

	if response[5]
		#puts "inserting " + response[5]
		emails_hash[response[5].strip.downcase] = response[14].strip
		person_hash[response[5].strip.downcase] = response[13].strip
	end

	if response[57]
		#puts "inserting " + response[57]
		emails_hash[response[57].strip.downcase] = response[14].strip
		person_hash[response[57].strip.downcase] = response[13].strip
	end

	emails_hash['Kreung Earthworks Urban Farm Tour'.downcase] = 'kreungcambodia@gmail.com'
	emails_hash['Kreung Kitchen orientation & paste making'.downcase] = 'kreungcambodia@gmail.com'
	emails_hash['Place-based Poetry (Part 1)'.downcase] = 'thebillymark@gmail.com'
	emails_hash['Kreung Dinner Team Building & Learning: Chum Reap Sew'.downcase] = 'kreungcambodia@gmail.com'
	emails_hash['Map the Power'.downcase] = 'rcgalbraith@gmail.com'
	emails_hash['How to Set-Up and Livestream an Event'.downcase] = 'juliecensullo@gmail.com'

	person_hash['Kreung Earthworks Urban Farm Tour'.downcase] = 'Chinchakriya Un'
	person_hash['Kreung Kitchen orientation & paste making'.downcase] = 'Chinchakriya Un'
	person_hash['Place-based Poetry (Part 1)'.downcase] = 'Billy Mark'
	person_hash['Kreung Dinner Team Building & Learning: Chum Reap Sew'.downcase] = 'Chinchakriya Un'
	person_hash['Map the Power'.downcase] = 'Rob Galbraith'
	person_hash['How to Set-Up and Livestream an Event'.downcase] = 'Julie Censullo'
end

count = 0


events.each do |event|
	presenter_name_cell = (event[29].split ',')
	
	if presenter_name_cell[0] == nil
		#puts event[2]
		next
	end

	presenter_name = person_hash[event[2].strip.downcase]
	email = emails_hash[event[2].strip.downcase]

	if presenter_name == nil || email == nil
		#puts event[2] 
		next
	end
	

	#puts count
	puts "#{presenter_name}, #{email}"
	#puts event[2]

	recipients = []
	recipients << {:name => presenter_name, :email => email}
	#recipients << {:name => 'Murtuza Boxwala', :email => 'mboxwala@umich.edu'}
	#recipients << {:name => 'Meg Herres', :email => 'meg@theworkdept.com'}
	send_email(recipients, (build_content presenter_name), 'Your Final Session Email for AMC2017')

	count = count + 1
end

