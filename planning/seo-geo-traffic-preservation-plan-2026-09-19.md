# SEO, GEO and traffic-preservation plan

Date: 19 September 2026  
Status: Required pre-launch gate

## Core decision

The rebuilt website will continue to use `https://hulmsolutions.com`. Any URL that currently earns impressions, clicks, leads or backlinks should keep the same public path wherever technically possible. A redirect is the fallback for a genuinely replaced or duplicate page, not the default migration method.

The redirect rules created during Phase 7 are therefore a draft safety layer. They must not be treated as the final migration map until Search Console, analytics and backlink data have been reconciled.

## What must be preserved per page

Every existing organic landing page receives a preservation record containing:

| Signal | What is preserved or improved |
| --- | --- |
| URL | Keep the exact path when the page already performs |
| Search demand | Primary query, supporting queries, branded queries and question variants |
| Search performance | Clicks, impressions, CTR and average position by query and country |
| Conversion value | Form submissions, trial registrations, calls and WhatsApp leads attributed to the landing page |
| Metadata | Existing title and description are retained until a query-level comparison justifies a change |
| Page meaning | H1, main answer, useful sections, FAQs, product details, entity names and geographic relevance |
| Internal links | Existing valuable inbound links and anchor context; remove redirect hops |
| External equity | Backlinks and referring domains mapped to the same URL or its closest equivalent |
| Media | Important images, alt text and indexed media URLs where relevant |
| Trust | Author, company information, reviews, dates and compliance wording |
| Structured data | Appropriate Organization, WebSite, Article, Person, Breadcrumb, Product/SoftwareApplication and FAQ markup only when supported by visible content |

## Keyword handling

Keywords will be managed as a URL-to-query map, not as a list placed in a meta-keywords field.

For every important URL:

1. Export the last 16 months of Google Search Console query and page data.
2. Assign one primary search intent and its existing query cluster to that URL.
3. Record current title, meta description, H1, headings, ranking content blocks and conversion action.
4. Compare the rebuilt page against the queries already producing clicks and leads.
5. Restore any commercially valuable topic, detail or FAQ that the new design accidentally removed.
6. Add new terms only when they fit the same intent; do not stuff exact-match phrases.
7. Prevent two pages from targeting the same primary intent unless they serve distinct countries or user needs.

The `meta keywords` tag is not a preservation mechanism. Google ignores it. The important signals are the page's meaning, useful content, title, H1, internal/external links, entities, structured data and user response.

## URL inventory and migration matrix

The final URL inventory must combine all of these sources:

- WordPress sitemap(s)
- Google Search Console Pages export
- Google Search Console Queries export
- GA4 organic landing pages and conversions
- Backlink exports from the available SEO tool
- Current navigation and footer links
- A crawl of `hulmsolutions.com`
- Server logs, if available
- Indexed URLs found through targeted search checks

Each historical URL must receive one of four explicit outcomes:

| Outcome | Rule |
| --- | --- |
| Keep | Same URL returns `200`, carries its search intent and has a self-canonical |
| Replace | Old URL permanently redirects once to the most equivalent new page |
| Consolidate | Several true duplicates redirect to one stronger page after content and keyword reconciliation |
| Retire | Only for content with no traffic, links, leads or useful equivalent; return a deliberate `404` or `410` |

No historical URL with clicks, impressions, backlinks or leads may return an accidental 404. No group of unrelated URLs may be redirected to the homepage, because that can be treated as a soft 404.

## Confirmed route policy

The production site currently uses `/blogs/` for the editorial index and `/blog/{slug}` for articles. It uses `/pos-case-studies/` for case studies. These paths should remain unchanged for pages with existing performance unless Search Console proves that another canonical already owns the signals.

The development implementation now keeps `/blogs/`, `/blog/{slug}`, `/pos-case-studies/` and `/pos-case-studies/{slug}` as the canonical public routes. The rebuild-only `/insights` and `/case-studies` paths permanently redirect in one hop to those established paths.

The same rule applies to every industry and capability page: a cleaner new slug is not sufficient reason to move a performing URL.

## GEO and LLM visibility preservation

### Crawler access

- Core content must be present in the initial server-rendered HTML.
- Explicitly allow search-oriented AI crawlers where consistent with business policy, including `OAI-SearchBot` for ChatGPT search visibility.
- Verify CDN/firewall rules and production logs do not block legitimate crawler IP ranges.
- Internal links must go directly to final `200` URLs rather than through redirects.

### Extractable content

- One focused claim or answer per section.
- Use descriptive question-style headings where they match real queries.
- Keep facts, prices, supported features and limitations in text, not only images.
- Use real HTML tables and lists for comparisons and feature details.
- Preserve FAQs that answer genuine search questions.
- Add visible reviewed/updated dates only when content actually changes.

### Trust and citations

- Keep a consistent company name, product name, pricing and feature scope across the website, social profiles, directories and review platforms.
- Use a named editorial author with a stable profile and verifiable credentials.
- Retain customer evidence only where the quote and identity are approved.
- Track external mentions and citations, not only website sessions.

### Measurement

Before launch, record a baseline prompt set for high-value clusters such as:

- best POS software in Pakistan
- FBR-integrated POS software
- retail POS system Pakistan
- restaurant POS system Pakistan
- pharmacy POS system Pakistan
- bakery POS system Pakistan
- salon POS software
- POS software pricing Pakistan

Measure:

- Share of Mentions
- Share of Direct Citations
- Indirect citations through third-party sources
- Sentiment and factual accuracy on a manual sample

Repeat the same prompt set after launch and compare with the baseline.

## Launch acceptance criteria

The production domain must not be switched until all conditions pass:

- 100% of known historical URLs appear in the migration matrix.
- 100% of URLs with clicks, impressions, leads or backlinks return either the same `200` URL or one direct permanent redirect to an equivalent page.
- Zero redirect chains and zero accidental 404s among known URLs.
- All canonical tags resolve to a `200` URL and agree with the sitemap.
- Sitemap contains canonical URLs only.
- No production `noindex` directives or crawler blocks on indexable pages.
- Priority pages preserve their validated query clusters and conversion actions.
- Core content is visible in the initial HTML.
- Analytics, Search Console verification and conversion tracking are working.
- Legal pages and the `what-is-pos` article are resolved.
- A rollback deployment is ready.

## Monitoring after launch

Check daily for the first two weeks, then weekly through at least twelve weeks:

- 404 and 5xx responses
- Redirect errors and chains
- Search Console indexing and canonical selections
- Clicks, impressions, CTR and average position by preserved URL
- Organic leads by landing page
- Crawl activity from Google and AI search bots
- Backlink destination errors
- AI Share of Mentions and citation changes

Permanent redirects should remain for at least one year and preferably indefinitely where external links still use the old address.

## Honest risk statement

No one can guarantee zero ranking fluctuation during a rebuild or migration. The goal is to remove preventable loss, preserve proven signals, detect problems quickly and keep a rollback option. Keeping the same domain and the same performing URLs materially lowers the risk compared with changing the information architecture and URLs at the same time.

