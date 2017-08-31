require 'rubygems'
require 'net/smtp'



FROM_EMAIL = 'amc@alliedmedia.org'
PASSWORD = 'alliedmedia2017'

def send_email(recipients, body, subject) 

	emails = recipients.map do |recipient|
		recipient[:email]
	end
	to_string = ""
	for recipient in recipients 
		to_string += "#{recipient[:name]}<#{recipient[:email]}>, "
	end
	marker = "AUNIQUEMARKER"

	part1 = <<EOF
From: AMC <#{FROM_EMAIL}>
To: #{to_string}
Subject: #{subject}
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary=#{marker}
--#{marker}
EOF

	part2 = <<EOF
Content-Type: text/html
Content-Transfer-Encoding:8bit
<html>
<head>
	<!--[if gte mso 15]>
	<xml>
		<o:OfficeDocumentSettings>
		<o:AllowPNG/>
		<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="date=no" />
	<meta name="format-detection" content="address=no" />
	<meta name="format-detection" content="telephone=no" />
	<title>AMC Session</title>	
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="date=no" />
	<meta name="format-detection" content="address=no" />
	<meta name="format-detection" content="telephone=no" />
	<title>AMC Session</title>	
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="date=no" />
	<meta name="format-detection" content="address=no" />
	<meta name="format-detection" content="telephone=no" />
	<title>AMC Session</title>

</head>
<body>
#{body}
</body>
</html>
--#{marker}--
EOF


	smtp = Net::SMTP.new 'smtp.mandrillapp.com', 587
	smtp.enable_starttls

	smtp.start('alliedmedia.org','Allied Media Projects', 'xNE393rJNMtLHbROfV98LA', :login) do |smtp|
	  smtp.send_message(part1 + part2, FROM_EMAIL, emails)
	end
end
