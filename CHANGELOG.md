# *08/01/2023* #2

- Blocked scrolling when navigation panel is opened
- Changed cursor transition speed

# *08/02/2023* #1

- Started to implement the mobile navigation panel
- Changed the cursor's size
- Various other changes

# *07/02/2023* #1

- Made the title text / subtitle font size relative
- Added a subtitle to the other titles (such as repositories and informations)
- Other CSS fixes

# *30/01/2023* #1

- Small modifications

# *29/01/2023* #2

- Optimized the performance regarding the titles

# *29/01/2023* #1

- Added the titles for the other sections of the page
- Optimized some CSS

# *28/01/2023* Hotfix #1

- Fixed an accessibility problem

# *28/01/2023* #2

- Greatly improved the accessibility
- The `.navbar-wrapper` is now a `<nav>` element
- Added `onkeydown` events on the navigation and theme buttons
- Added a border radius to the link buttons (featured projects)
- Changed the illustrations of project 2 and 3 
- The featured project name has now a shadow on hover
- Various other optimizations and fixes

# *28/01/2023* #1

- Added the 3 projects
- Made every project element a `display: grid;` to make the link bar stay at the bottom

# *26/01/2023* #1

- Made the website remember the selected section
- Changed the favicon
- The cursor's background is now a gradient

# *25/01/2023* Hotfix #1

- Fixed a color problem regarding the featured projects title, name and description

# *25/01/2023* #1

- Started adding the "*featured projects*" section
- Optimized some JS
- Moved the media query for the custom cursor in `customCursor.css`
- Changed some comments in the CSS
- Made the "*name*" be the name of the page section currently in
- Made some other values relative (using *rem*s)
- Made the "*page*" attribute a `display: flex;`
- Changed the `max-width` of the "*mobile-mode*" media query to 950 pixels

# *22/01/2023* #1

- Removed a debugging line in `loadFix.js`
- Made most sizes / paddings / margins relative (using *rem*s)
- Greatly optimized the `date.js` script
- Optimized some CSS

# *19/01/2023* #1

- Changed the "name" to "Portfolio"
- Started preparation for the other parts of the website

# *15/01/2023* Hotfix #1

- Fixed a glitch when the theme is loaded

# *15/01/2023* #1

- Added a favicon for both light & dark themes
- Fixed the header text being user-selectable

# *14/01/2023* #2

- Optimized the page loading
- Fixed the *flash of un-styled text* (FOUT) that occurred when loading the page
- The fade-in is now just a transition (instead of a CSS animation)
- Fixed the theme transition not working properly on some elements
- MAde the hamburger icon change weight when hovered
- Made the logo stop rotating when hovered
- The cursor is now only hidden when the page is loaded
- Other optimizations

# *14/01/2023* #1

- Made the logo rotation CSS based, instead of JS
- Removed a useless commented line

# *13/01/2023* #1

- Animated the logo in the homepage's title
- Refactored some JS functions

# *12/01/2023* Hotfix #1

- Fixed the cursor not working properly

# *12/01/2023* #1

- Added a custom cursor (I might change it in the future)
- Fixed a problem regarding the height of ".page-content"
- Fixed a problem where the icon of the theme change button wasn't vertically centered

# *11/01/2023* #1

- Started to make the website responsive
- Renamed "page-theme" to "theme"
- Replaced the margin of ".page-content-wrapper" to a padding to be able to see the blur of the mobile navigation bar
- Added a subtle animation when the title of the home page is resized
- Fixed some conflicts caused by the unused (yet) "repoListStyle.css"
- Other optimizations and fixes

# *10/01/2023* #1

- Fixed font problems on mobile devices
- Made the clock only update every 5 seconds instead of every second (since the seconds aren't displayed, this won't affect the time)
- Other optimizations
- Fixed some CHANGELOG typos (we aren't yet 2032)

# *09/01/2023* #1

- **Fully implemented the dark mode with** a smooth transition between the two themes
- Fixed a problem regarding the inverted rounded corners
- Added a bunch more colors
- Renamed the "themeToggler" JS file to "themeToggle" because even though "Toggler" is valid in Scrabble, it is not a valid English word.
- Other optimizations

# *08/01/2023* Hotfix #1

- Fixed an overflow problem in the navigation bar

# *08/01/2023* #2

- Added a fade-in effect when the page is loaded
- Made the body color 'var(--white)'
- Started the implementation of a dark theme
- Other fixes

# *08/01/2023* #1

- Added the ability to select the pages through the navigation bar
- Changed the color of the navigation bar and status bar
- Small optimizations

# *07/01/2023* #2

- Added 2 "inverted rounded corners"
- Renamed ".title" to ".name"
- Added the first element of the home page
- Fixed some scrolling issues
- Made the scrollbar invisible
- Added color to the status bar and navigation bar
- Made the body color white (instead of the status bar / navigation bar color)
- Added new font size and mask variables
- Modified some border-radius variables
- Fixed the clock not updating properly
- Overall optimizations and enhancements

# *07/01/2023* #1

- Added a hover effect on the material symbols
- Removed useless CSS
- Added right margin to ".title"