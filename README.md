# Portfolio of Work Done, Fully Complete or Otherwise

#### Note, Some Work Is Incomplete For A Variety of Reasons, Usually Revolving Around CLients Leaving The Project. These Are Included As A Website UI Example.

# For Victor:

### Note, The Services tab is the old design I was using as reference. This can be ignored as it will be replaced with the work you are doing now. there is no nav link to the survey page but `/survey` link works. Good luck!

- [x] Home Page Responsive Technologies Carousel
- [x] Survey Page => Details => Working Tabs, detail tab is default. active tab has (unconfirmed) styles
- [x] Survey Page => Details => Hover shows correct detail on hover only
- [x] Survey Page => Details => Click keeps correct detail showing. hover on alt icon shows that instead and unhover reverts to previously clicked icon. New click keeps that detail up instead
- [x] Survey Page => Quote => One page shown at a time. Next/previous button changes page. Restrict changing pages until all required fields are done.
- [x] Survey Page => Quote => Each input needs to be saved onChange as the final submit button will use emailJS to send the mail. Email template will be made by me. So I'm thinking CSS maybe the best bet to just move the pages on and off screen? Going to previous page needs to show the previously entered answers obviously. Up for discussion.
- [x] Survey Page => Quote => Progress bar works to apply specific `.active` class to the tab which is active and `.complete` class to all previous pages. Tabs also need to work as buttons to jump multiple pages. Again, restrict movement if the required fields are not answered.
- [ ] Admin => Not sure if we fixed this but we did have a token issue.

# To-Do List:

- [x] Create An Overall Nav System.
- [x] Group Unfinished Designs Into "UI Examples" Or Something Positive.
- [x] ~~Have a home button absolutely positioned in the corner of all pages without the default Nav.~~ Went new tab route instead
- [x] Include A Bio. Use https://anthonyconstant.co.uk and https://robertd.co.uk/ as references.
- [x] ~~Sources Light/Dark Images For The Home Page. Coding Related? Tech Related? Abstract Patterns? Something Trippy?~~ Attempting to get custom art done.
- [ ] Media Queries For All Pages! INCLUDING UI EXAMPLES!
- [x] Add a 'services' page? Maybe too money grabby as prices vary. Could use a 'from $x' method? Either way what would I offer? I'm only really good with static sites. Lists of 1 aren't good to look at.
- [x] ~~See if Sam wants to make graphic wallpaper for the projects bg~~ He wouldn't do it. ET may help instead
- [x] ~~See if Sam would always make me a logo around my initials. This can be converted to a favicon too.~~ He wouldn't do it. ET may help instead
- [x] Finish & Upload My CV as PDF
- [x] Scan & Upload My Degree
- [ ] Create Images For Project Cards
- [x] Contact MailTo
- [x] Contact Form
- [x] Theme Static
- [x] Theme Toggle
- [ ] Link Eli Turp When Finished
- [ ] Link Fifa Project When Finished
- [ ] ~~Link Rainy's Site When Finished~~
- [x] Switch Projects File to mongoDB. That way I only ever need to update the DB and never rebuild the site to make changes!
- [ ] Add Certificates To About Section? Need something to break up the text
- [ ] Prerender large image files
- [ ] Permanent content for the error page? Or something comical and an auto-redirect backwards? 
- [x] Services page -> Remove prices. Have breakdown explanation of what the services are and the difference between each tier. These then autofill like before into a contact form. This form either has Q&A boxes with specific questions or a general more details text area. Request for quote button submits form via emailJS

# Bugs
- [x] FIX JS ERRORS IN THE PM NAV
- [x] FIX JS ERRORS IN THE PM PATREON PAGE
- [x] FIX JS ERRORS IN THE PM YOUTUBE PAGE
- [x] Video Stuttering On Home Page
- [x] Index Carousel Is Broken
- [x] Edit padding for Index circle logo to not cover the edge of the OT. Make That Page Look Nicer.

# Pages

- [ ] Home
- [ ] About (degree & cv download link)
- [ ] Projects Hub
- [ ] -> Finished Projects
- [ ] -> UI Examples
- [ ] Services
- [ ] Contact
- [ ] Error


The code that sets how long the jwt lasts is located in [adminAuthController.js](./backend/controllers/adminAuthController.js#generateToken)  inside it's `generateToken` method. The line that says 
```js
// { expiresIn: "2d" }   => expires in 2days (30d => 30days)
return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2d" } );
```