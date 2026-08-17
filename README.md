# drsandy.com — static export

This is a flattened, fully static export of the original Classic ASP
`drsandy.com` site, generated from a Plesk hosting backup. It has no server
runtime dependency and is ready to serve as-is (e.g. via GitHub Pages).

## What changed from the original site

The original site was ~95% static content, wrapped in classic SSI
`<!-- #include -->` directives (`header.inc` + page content + `footer.inc`),
plus two small ASP query-string templaters (`doctor/default.asp?if=X` and
`sexypage.asp?f=X`) that spliced a requested `html/*.html` fragment into the
same header/footer shell. All of that has been pre-rendered into plain
`.html` files:

- Every top-level `.asp` page → `<name>.html` (`default.asp` → `index.html`).
- Every distinct `doctor/default.asp?if=X` value that was actually linked
  to anywhere in the site → `doctor/X.html`.
- Every distinct `sexypage.asp?f=X` value that was actually linked to →
  `sexypage/X.html`.
- Internal links were rewritten to point at the new flattened filenames.

### LoveStyles quiz (client-side reimplementation)

`lovestyles.html` (and its templated twin `doctor/lovestyles.html`) ship a
10-question quiz that originally POSTed to `doctor/_quizresults.asp`, which
tallied answers into four categories (lion / bear / bee / otter) and
redirected to `doctor/default.asp?if=<animal>.html`. **Those four
destination pages (`lion.html`, `bear.html`, `bee.html`, `otter.html`) never
existed anywhere in the source export** — the redirect was already broken in
the live site. The scoring logic has been reimplemented in
`scripts/quiz-result.js`: it intercepts the form submit, tallies the answers
the same way the original ASP did (including its tie-break order), and
displays the result inline on the page instead of redirecting to a dead URL.

### Case-sensitivity fixes

The original host (Windows/IIS) was case-insensitive, so a handful of links
that don't match their target's exact casing worked in production but would
404 on case-sensitive hosting (GitHub Pages). These were corrected by
renaming the asset to match the link text used across the site:
`Wvideo.png` → `wvideo.png`, and three article PDFs
(`scantling0121.pdf`, `scantling08-10-08.pdf`, `scantling1105.pdf` →
`Scantling0121.pdf`, `Scantling08-10-08.pdf`, `Scantling1105.pdf`).

### `images/doctor/` vs `doctor/images/`

The two directories contain nearly identical image sets. A full scan of the
source found 306 live references to `/images/doctor/<file>` and zero to
`doctor/images/`, so the doctor-section images are published at
`images/doctor/` (not `doctor/images/`) so links actually resolve.

## What was excluded (and why)

- **FrontPage metadata**: `_vti_cnf/`, `_vti_log`, `_vti_inf.html`,
  `_private/` — server-side hosting cruft, not content.
- **`test/`**: dead ASP/PHP/Perl/ColdFusion/Python probe scripts, unrelated
  to the site itself.
- **Backup/duplicate files**: anything named `Copy (2) of...`, `Copy of...`,
  or with a timestamp suffix (`default_20080203065547.asp`,
  `footer_20090210134029.inc`, `homepage_20090213212557.inc`,
  `homepage_2022.inc`, etc.), plus `default_old.asp`, `default_real.asp`,
  `unZipPrev_default.asp`, and the `.NET`/`.vb`/`.scc` leftovers under
  `doctor/` (`Default_test.asp(x)(.vb)`, `vssver.scc`). Only the canonical,
  non-timestamped version of each file was used. `default.asp` explicitly
  includes `html/homepage.inc` (not `homepage_2022.inc`), so that's the one
  used for the homepage content.
- **`_quizresults.asp`**: replaced by client-side JS (see above).
- **All remaining `.asp`/`.aspx`/`.vb`/`.scc` files**: nothing server-side
  survives in a static export.
- **Orphaned content fragments**: some `html/intimacyqaN-M.html` files exist
  on disk but are never linked to from anywhere in the site (e.g.
  `intimacyqa2-7.html`). These were left unrendered, matching the original
  site's actual reachable page set.

## Known pre-existing broken links (left as-is)

A few links were already broken in the original source and were **not**
invented/fixed, per scope:
- `sitemap.asp` → `about.asp`, `article.asp`, `/html/news.asp` (typos/wrong
  paths in the original).
- `programtips.html` → `/dlovetools.asp` (typo, should likely be
  `lovetools.asp`).
- `services.html` → `../images/sandy_yp_ad.jpg` (wrong relative path in the
  original include).
- `video2.html` has a malformed nested `<a>` tag with literal text baked
  into the `href` (pre-existing markup bug).
- Two article PDFs referenced by `articles.html`/`news.html`
  (`Scantling09-09-23.pdf`, `Scantling10-14-23.pdf`) were not present
  anywhere in the source export.
- A few of the `doctor/intimacyqa2-*.html` / `intimacyqa3-*.html` detail
  answer pages have their own pre-existing bugs in the original content:
  links meant for `bettersex.com` product pages that are missing the domain
  (`/sex-education/...`, `/better-sex-video-series/...`), and a couple of
  typo'd asset paths (`scripts/drsandyrollover.js`, `style/drsandystyle.css`).
  Left untouched, same as the other pre-existing broken links above.

## Structure

```
index.html, aboutdrsandy.html, ...   top-level flattened pages
doctor/*.html                        pre-rendered doctor/default.asp?if=X pages
sexypage/*.html                      pre-rendered sexypage.asp?f=X pages
images/, img/, default_files/,       static assets
css/, articles/, scripts/, images/doctor/
scripts/quiz-result.js               client-side LoveStyles quiz scoring
.github/workflows/pages.yml          GitHub Pages deploy workflow
```
