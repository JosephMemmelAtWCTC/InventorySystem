Notes from class to implement
 - [x] Bold the navigation - text is bolded, icons are not - ask about icons
 - [x] Change modal color

Notes from comments to implement
- [ ] 

Other changes to make
- [~] Move validation code into vue - also prevention

Broken Items to Fix
- [~] Get validation working again (Also try to disable until)

Bug Tracker
- [ ] Not seamless transition from desktop to mobile


Items to ask about
[ ]  


Changes made list

[//]: # (- transition)
- Notifications
- Icons



From the feedback given in class (and your own ideas), identify 3-5 things to improve on. These could be:

    Squashing bugs. (This is one thing. 3 bugs = 1 thing to improve)
    Making components more reusable (i.e. Give your modal component more props or slots to make it multi-purpose).
    Improving the UI/UX. Use the Mental Notes 

    Links to an external site. app to brainstorm some ideas.
    Clean up the design. Work on learning the utility classes or components of the UI framework to improve the look and feel.
    Add features (e.g. edit, search, sort, magnet wobble, etc).
    Utilize a new UI framework. Tired of Bootstrap? Try Vuetify, Quasar, Element Plus, Vuestic, or something else.

Take an honest assessment of your skills and what you could improve on. In addition to the application, please turn in a list of improvements that you made.

List of improvements:
(Note: New primary page is index2.html, keeping original for reference for the time being)

- Moved project to not just use Quasar for inputs, (Bootstrap still in use in project as some helper functions)
- Expanded usage of components (MainContent & the customs built from it, optionsFAB, ResultsPossiblyEmpty, etc. note that some derivatives still are only used once, but were made to be re-used)
- Moved some hard-coded values to the component level as properties
- Make edit-modal use the app-modal instead of having its own
- Removed bits and parts of commented out old code & added a few comments to order the <script>s
- Graphical
  - Added animations to cards (load, hover), navigation icons still jump but now don't immediately go away
  - Changed inventory icon (using a mix now that includes fount awesome) to have a less-ambiguous icon
  - Updated account page to follow the rest of color convention
- Computed list now orders alphabetically by name
- New category creation uses q-inputs similar to the editing version
- Validation is working again and actually prevents submitting when in editing or adding new
  - Notifications now appear when attempting to submit and validation fails
