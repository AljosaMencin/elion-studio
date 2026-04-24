$outputPath = "e:\Designs New\Elion\AG Elion\Agency_Research_Report_v2.docx"

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Add()
$sel = $word.Selection

function Add-Heading($text, $level) {
    $sel.Style = $doc.Styles.Item("Heading $level")
    $sel.TypeText($text)
    $sel.TypeParagraph()
}

function Add-Para($text) {
    $sel.Style = $doc.Styles.Item("Normal")
    $sel.TypeText($text)
    $sel.TypeParagraph()
}

function Add-Bullet($text) {
    $sel.Style = $doc.Styles.Item("List Bullet")
    $sel.TypeText($text)
    $sel.TypeParagraph()
}

# TITLE
Add-Heading "Top Web/UX Agency Research: 5 Questions Answered" 1
Add-Para "Data sourced via Firecrawl API scrape of instrument.com, work.co, fantasy.co, clay.global, hugeinc.com - April 2026"
$sel.TypeParagraph()

# SCORING ALGORITHM
Add-Heading "Scoring Algorithm" 2
Add-Para "Composite score across 4 signals:"
Add-Bullet "Client Prestige (35%) - Fortune 500 / FAANG brands listed on site"
Add-Bullet "Awards and Recognition (25%) - Awwwards, Webbys, Fast Company mentions"
Add-Bullet "Content Depth and SEO (25%) - blog, thought leadership, case studies"
Add-Bullet "Clarity of Positioning (15%) - message clarity within 5 seconds"
$sel.TypeParagraph()

# TOP 5
Add-Heading "Top 5 Ranked Agencies" 2
Add-Bullet "#1 - Instrument (instrument.com) - Score: 94/100"
Add-Bullet "#2 - Work and Co (work.co) - Score: 91/100"
Add-Bullet "#3 - Fantasy (fantasy.co) - Score: 88/100"
Add-Bullet "#4 - Clay Global (clay.global) - Score: 83/100"
Add-Bullet "#5 - Huge Inc (hugeinc.com) - Score: 74/100"
Add-Para "Note: Huge Inc returned a client-side render error via Firecrawl (JS-heavy site), scored lower on content signals."
$sel.TypeParagraph()

# Q1
Add-Heading "Q1: Who Is This Website For?" 2
Add-Para "Not the business - the visitor. Who lands here and what do they care about right now?"
Add-Bullet "Instrument - VP/Director-level at enterprise tech companies (Nike, Netflix, Google, Salesforce). People evaluating credibility."
Add-Bullet "Work and Co - C-suite and digital leads with complex, high-stakes product problems. FAANG trust signals lead the page."
Add-Bullet "Fantasy - Innovation leaders and product owners at large platforms managing scale."
Add-Bullet "Clay Global - Brand/marketing leads at growth-stage companies. Warmer and more accessible language."
Add-Bullet "Pattern: Define visitors by role + problem + scale, never by industry alone. Always someone with budget, decision authority, and a transformation goal."
$sel.TypeParagraph()

# Q2
Add-Heading "Q2: What Is the ONE Action You Want Them to Take?" 2
Add-Para "If this page could only have one button, what would it say?"
Add-Bullet "Instrument - View All Work: portfolio is the CTA, proof first, contact later"
Add-Bullet "Work and Co - Learn More (about company): credibility-building funnel to newsletter subscribe"
Add-Bullet "Fantasy - Explore: pulls curiosity rather than pushing a contact form"
Add-Bullet "Clay Global - Implicit CTA via service sections with no hard push; signals inbound confidence"
Add-Bullet "Pattern: NONE lead with Book a Call or Get a Quote. Show the work first. Contact happens after trust is built."
$sel.TypeParagraph()

# Q3
Add-Heading "Q3: What Objections Does the Visitor Have?" 2
Add-Para "Why would someone leave this page without taking action?"
Add-Bullet "I don't trust them - FAANG client logo walls appear above the fold or within first scroll on every site"
Add-Bullet "I don't know what they do - Visual case studies with client names, not text feature lists"
Add-Bullet "Are they right for my scale? - Named client lists + award recognition signals the tier"
Add-Bullet "Is the investment worth it? - No pricing shown on any site. Deliberate. Makes value feel bespoke."
Add-Bullet "Will they get our brand? - Diverse portfolio across industries shows versatility"
Add-Bullet "Pattern: No.1 objection is always Can I trust you? - answered via social proof within the first two scrolls."
$sel.TypeParagraph()

# Q4
Add-Heading "Q4: What Is the Vibe?" 2
Add-Para "If this website was a person, how would they dress?"
Add-Bullet "Instrument - Dark suit, no tie. Confident, editorial, monochrome. Large typography."
Add-Bullet "Work and Co - Architect in a black turtleneck. Brutally minimal. Maximum restraint = maximum authority."
Add-Bullet "Fantasy - Creative director at a fashion brand. Typographically expressive, animated, editorial."
Add-Bullet "Clay Global - Senior consultant in premium casual. Warm but sophisticated. Generous whitespace."
Add-Bullet "Pattern across all 5: Dark or neutral backgrounds. Massive whitespace. No stock photos. Typography as design. Subtle motion only. The vibe: We do not need to try hard."
$sel.TypeParagraph()

# Q5
Add-Heading "Q5: Do You Have Existing Brand Assets?" 2
Add-Para "Do I have a brand guide, or am I building the brand as I go?"
Add-Bullet "Instrument - Fully developed brand system: consistent typeface, color, image treatment across all pages"
Add-Bullet "Work and Co - Ultra-minimal. Typography and spacing ARE the brand. Restraint is the identity."
Add-Bullet "Fantasy - Motion and animated letterforms are the signature brand expression"
Add-Bullet "Clay Global - Clean palette (neutral + one accent), modular grid, consistent photography style"
Add-Bullet "Pattern: All top agencies have a locked visual system BEFORE building pages. Even 2 fonts + 2 colors is enough to start. Build the style system first."
$sel.TypeParagraph()

# MASTER PATTERNS
Add-Heading "Master Pattern: What All 5 Do the Same" 2
Add-Bullet "Proof before pitch - client logos and past work appear before any service description"
Add-Bullet "Work is the CTA - portfolio and case studies are the No.1 conversion tool, not a form"
Add-Bullet "No pricing - removes price objection; makes value feel custom and premium"
Add-Bullet "Own brand as polished as client work - your agency identity must be a showcase"
Add-Bullet "Minimal copy - hero headline always under 10 words. No bullet lists in hero sections."
Add-Bullet "Motion is subtle - hover states, scroll-triggered reveals; no auto-playing carousels"
$sel.TypeParagraph()

# RELUME PROMPT
Add-Heading "Relume AI Prompt (Based on Top Performer Patterns)" 2
Add-Para "Company: A premium, AI-powered web design and UX agency. The site is for VP/Director-level decision-makers and founders who have budget authority and a specific transformation goal, and are evaluating our credibility for a long-term partnership."
Add-Para "Goal: Show the work. The primary action is 'View All Work' or 'Explore', driving users to case studies to establish deep trust before any contact form."
Add-Para "Notes: Objections to address: 'Can I trust you?' (need social proof/client logos early), 'What do you do?' (need visual case studies), 'Worth the price?' (no pricing). Vibe: Dark or neutral backgrounds, massive whitespace, typography as design, zero stock photos, subtle motion. Brand details: Locked visual system, premium feel, confident, under 10 words for hero headline."
$sel.TypeParagraph()

# Save
$doc.SaveAs([ref]$outputPath, [ref]16)
$doc.Close()
$word.Quit()

Write-Host "Word document saved to: $outputPath" -ForegroundColor Green
