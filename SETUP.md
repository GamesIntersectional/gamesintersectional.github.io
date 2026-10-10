# GIRT website — local preview

Open index.html in your browser to review the redesigned homepage.
Open index-before-redesign.html to compare with the previous version.

## Updating
- Edit text and links in index.html. The main sections are home, about, archive, and join.
- Keep images and zine.pdf beside index.html.
- The full 2025 programme stays at https://gamesintersectional.github.io/gi-symposium25/.
- The zine download points to zine.pdf (approximately 51 MB).
- Styling is included in the page; no build command is needed. Google Fonts is optional; system fonts are used if unavailable.

## Before publishing
- Review the shortened wording and current roundtable information.
- Keep index-before-redesign.html as a local comparison; exclude it from the published files if you do not want the older draft accessible online.
- Review changes in GitHub Desktop before committing and pushing.

The redesign has been prepared locally, not published.

## Events
Open events.js. Copy the commented example into the square brackets and remove the leading // from those lines. Fill in the title, date/time/timezone, location and description. Keep the quotation marks. For multiple events, put a comma between their { ... } blocks.

After an event, change archived: false to archived: true. It will appear in the collapsible archive, preserving its details. Dates do not archive events automatically. With no current events, the page shows the monthly-roundtable announcement.

Preview index.html, then commit and push in GitHub Desktop. Reload the live page after GitHub Pages finishes publishing.

## Google Search Console
After publishing, submit sitemap.xml in Search Console > Sitemaps. It lists the homepage and symposium archive. Homepage sections (#about, #archive, #join) are not separate pages. The old design backup has noindex so it should not compete with the homepage in search. Keep the Google verification HTML file. Indexing is not immediate or guaranteed.
