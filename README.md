# amp_etherpads

**Organizing the Allied Media Conference (AMC)**

*  Tracks, Practice Spaces, Network Gatherings (TPSNGs)
  
  The conference sessions are organized around its TPSNGs.  The Allied Media Partnership (AMP) creates a Google Form for users to propose TPSNGs. For each submission, the Work Department generates an Etherpad, in which the organizers can discuss the proposal and finalize a list of TPSNGs for the conference.
  
  
*  Session Proposals
  
  Once the organizers finalize the TPSNGs, they broadcast another Google Form, asking users to propose a session for the Tracks or Practice Spaces (Network Gatherings do not have sessions, but instead are events themselves). In 2016, there were more than 400 submissions. For each submission, the Work Department generates an Etherpad, in which the organizers can discuss the proposal.  Furthermore, to organize all the submissions, the Work Department creates a Table of Contents Etherpad as well.
  
  After a couple months of discussion and deliberation, the organizers decide which sessions they will host at the AMC. They write back to the proposers with their decision and ask them to verify their information they filled out in the Google Form.  In fact, the same form that was originally submitted is sent back via an "editable url." AMP may change the questions or format of the form, but it is still the 'same' form that was submitted months ago.
  
  
*  Sched and the Program Book
  
  After the sessions are finalized, AMP builds the schedule for the conference. The Work Department helps display this information to attendees via two media, sched.org and a program book.  The schedule is first built by uploading all the data into sched.  The data is then exported out of sched and into an XML file.  This XML file is then combined with design templates to create the book.



**Technologies**

*  Google Forms and Spreadsheet
  
  Google Forms and Spreadsheets are used to manage all the user submissions. When a user submits a form, his/her responses flow into a spreadsheet.  AMP also records which TPSNGs and sessions have been accepted in this sheet.
  
  
*  Etherpads
  
  AMP uses Etherpads to discuss the submitted proposals.Organizers for the conference are all over the country, so this online discussion is an important part of their workflow.
  
  Etherpads are collaborative documents where multiple users can edit simultaneously. The Etherpad records who made the changes and displays that info with multi-colored highlighting. It also includes a chat interface.
  
  
*  Node.js
  
  The scripts that help automate tasks are written in JavaScript and run in the Node.js environment.
  
  
Each folder has its own Readme file where the specifics of the process and code are discussed.
