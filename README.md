<h4>Project Two: 
Evolving NYC</h4>

1. <b>Title:</b> Evolving NYC
2. <b>Description:</b> A website that aims to track reconstruction plans in the city by using the NYC Department of Buildings permit database. I want to collect data on how many "Demolition" permits were issued in the last ~5 years, how many "New Building" permits were issued in the last ~5 years, and depict this data by year. I also want to separate this information by borough (and, if I have time, narrow it down to the counsel district that represents each NYC neighborhood (or the neighborhoods themselves)). The ultimate goal is to create a tool that organically tracks plans for development in the city so residents can see projected changes in their community (though I won’t get to making it this granular in one week).
3. <b>Wireframes:</b> Mockups of your app on desktop, tablet, and mobile. - PLEASE SEE ATTACHED
4. <b>Component Hierarchy:</b> A visual tree of your components, depicting the parent/child relationships, as well as an indication of which will be class components, requiring state, and which will be functional components, taking props. - PLEASE SEE ATTACHED
5. <b>API: </b>
    1. API - https://data.cityofnewyork.us/resource/ipu4-2q9a.json
    2. Documentation - https://dev.socrata.com/foundry/data.cityofnewyork.us/ipu4-2q9a
6. <b>MVP:</b> A website where you can click on your borough of interest and then year of interest to see the number of demolition permits and new building permits issued for that year. 
7. <b>Post-MVP: </b>
    1. For each year you click on, I want to display the % change from the previous year
    2. I want to allow the user to click on their counsel district and/or neighborhood (ie. Bushwick, Lower East Side) to see data relevant to their area.
    3. I want to display important details from these permits when the user clicks on them (depending on how many there are). The user should be able to see a) date of issuance, b) job start date, c) name of the permit holder (i.e. who is instructing the work), d) building address and e) the whether the construction/demolition is residential or commercial. I would also like to connect demolitions to their expected new construction by detecting the same address. 
    4. Add “Neighborhoods of Interest” page where you can add favorite neighborhoods (when we learn backend, it would be cool to send email alerts to users about their neighborhoods).
8. <b>SWOT Analysis: </b>Heading into project week and with all your planning in mind, consider your Strengths, Weaknesses, Opportunities, and Threats as they relate to your final project. How will you overcome your weaknesses and threats?
    1. <b>Strengths:</b>Displaying data for each year/district using different components should be fairly straightforward.
    2. <b>Weaknesses:</b> Synthesizing the data may be a challenge because the permit data is very detailed. Permit issuances are also not necessarily a good indicator of new developments/construction because a lot of them are renewals for ongoing projects that I will need to make sure I do not take into account.
    3. <b>Opportunities:</b> Finding ways to synthesize the data in interesting ways using Javascript.
    4. <b>Threats:</b> The size of the dataset is so large that it may take too long to load the data I'm looking for.
