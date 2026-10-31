/* B-lab class hub data. This is the only file you edit to change content.
   Colours and layout are in css/style.css, behaviour is in js/app.js. */

var SITE = {
  name: "B-lab",
  batch: "8th batch",
  program: "E-Learning & Earning",
  updated: "30 Oct 2026",
  url: "blabclasshub.vercel.app",
  /* Slim bar at the very top. Leave text empty to hide it. */
  banner: {
    text: "Portfolio page v1 is due on 2 November. Submit your link in the class group.",
    href: "#notices",
  } /* printed on the student ID cards */,
  email: "",
  /* Contact for clients. Fill what you have, leave the rest empty and its button hides itself.
     whatsapp: country code and number, digits only, e.g. '8801XXXXXXXXX' */
  contact: { whatsapp: "", messenger: "", email: "", group: "" } /* batch email, shown in the footer when filled */,
  schedule: [
    ["Days", "Saturday and Tuesday"],
    ["Time", "10:00 AM to 12:00 PM"],
    ["Format", "Live class, recording shared after"],
  ],
};

/* Next class. The countdown in the hero reads this. Keep the +06:00 so it matches Bangladesh time. */
var NEXT_CLASS = { title: "Class 15: next topic", at: "2026-11-03T10:00:00+06:00", hours: 2 };

/* The four things B-lab teaches. tools = skills shown on chips and in the ticker. c = the track's own colour. */
var TRACKS = {
  mkt: {
    c: "#4C7DF0",
    name: "Digital marketing",
    tools: ["Facebook Ads", "Google Ads"],
    blurb: "Plan, launch and measure paid campaigns. We start with a small budget and learn from every result.",
  },
  gfx: {
    c: "#E8478B",
    name: "Graphic design",
    tools: ["Photoshop", "Adobe Illustrator"],
    blurb: "Logos, social posts and thumbnails. Photoshop for photos and mockups, Illustrator for clean vector work.",
  },
  wp: {
    c: "#F0803C",
    name: "WordPress",
    tools: ["WordPress"],
    blurb: "Hosting, themes, plugins and pages. We build a real site and hand it to a client.",
  },
  web: {
    c: "#8B5CF6",
    name: "HTML and CSS",
    tools: ["HTML", "CSS"],
    blurb: "Write pages by hand, then make them look right on any phone with Flexbox and Grid.",
  },
};

var STATUS = { live: ["Live", "live"], wip: ["In progress", "wip"], todo: ["Not started", "todo"] };

/* One object per student, in roll order.
   f = photo file inside images/students (leave '' for a monogram)
   n = name, t = track key, r = headline, s = skills, p = featured project
   st = live | wip | todo, b = short bio, l = portfolio link (optional)
   k = social and marketplace links (optional). Paste full links, leave out any you do not have:
       k:{fb:'', ig:'', li:'', be:'', yt:'', gh:'', wa:'', fiverr:'', upwork:'', fl:'', pph:'', web:''}
       fb Facebook, ig Instagram, li LinkedIn, be Behance, yt YouTube, gh GitHub, wa WhatsApp number (digits),
       fiverr, upwork, fl Freelancer, pph PeoplePerHour, web personal website
   w:true = this student has won a first client (shows a star)
   NOTE: names, headlines, projects and bios are placeholders. Skills were assigned at random.
   Photos 01 to 13 are real, so replace the names for those rows first. */
var PEOPLE = [
  {
    f: "01.jpeg",
    n: "Rafi Ahmed",
    t: "wp",
    r: "WordPress builder",
    s: ["WordPress", "Google Ads"],
    p: "Recipe blog",
    st: "live",
    b: "Sets up a WordPress site from hosting to launch and writes notes for the client.",
    l: "",
  },
  {
    f: "02.png",
    n: "Jannatul",
    t: "gfx",
    r: "Illustrator artist",
    s: ["Photoshop", "Adobe Illustrator", "Google Ads"],
    p: "Business card and letterhead",
    st: "live",
    b: "Likes clean layouts, strong type and a small colour palette.",
    l: "",
  },
  {
    f: "03.jpg",
    n: "Monir Khan Shanto",
    t: "mkt",
    r: "Campaign builder",
    s: ["Facebook Ads", "Google Ads"],
    p: "Google Ads search campaign",
    st: "wip",
    b: "Writes short ad copy and tests two versions of every ad.",
    l: "",
  },
  {
    f: "04.jpg",
    n: "Sumaiya Islam Rodshi",
    t: "web",
    r: "Frontend beginner",
    s: ["HTML", "CSS", "Adobe Illustrator"],
    p: "Landing page for a cafe",
    st: "todo",
    b: "Likes small details like hover effects, grids and clean code.",
    l: "",
  },
  {
    f: "05.jpg",
    n: "Mubassir Raiyan",
    t: "mkt",
    r: "Ads strategist",
    s: ["Facebook Ads", "Google Ads", "WordPress"],
    p: "Lead ad for a tutor",
    st: "live",
    b: "Writes short ad copy and tests two versions of every ad.",
    l: "",
  },
  {
    f: "06.jpeg",
    n: "Sumiya Bushra Sara",
    t: "web",
    r: "Frontend beginner",
    s: ["HTML", "CSS", "Photoshop"],
    p: "Responsive menu component",
    st: "wip",
    b: "Likes small details like hover effects, grids and clean code.",
    l: "",
  },
  {
    f: "07.jpg",
    n: "Bristy",
    t: "wp",
    r: "WordPress builder",
    s: ["WordPress", "CSS"],
    p: "Recipe blog",
    st: "live",
    b: "Learning pages, menus, forms and a simple shop setup.",
    l: "",
  },
  {
    f: "08.jpg",
    n: "An Noor Tasnim",
    t: "gfx",
    r: "Illustrator artist",
    s: ["Photoshop", "Adobe Illustrator", "WordPress"],
    p: "Logo set for 3 small brands",
    st: "todo",
    b: "Likes clean layouts, strong type and a small colour palette.",
    l: "",
  },
  {
    f: "09.jpg",
    n: "Arnob Hossain Rakib",
    t: "wp",
    r: "WordPress builder",
    s: ["WordPress", "Photoshop"],
    p: "Coaching centre website",
    st: "wip",
    b: "Tweaks themes until they look custom and tests every plugin first.",
    l: "",
  },
  {
    f: "10.jpg",
    n: "Veer Abir",
    t: "wp",
    r: "Blog builder",
    s: ["WordPress", "CSS"],
    p: "Blog on free hosting",
    st: "wip",
    b: "Learning pages, menus, forms and a simple shop setup.",
    l: "",
  },
  {
    f: "11.jpeg",
    n: "Nurullah Hossain",
    t: "web",
    r: "HTML and CSS developer",
    s: ["HTML", "CSS", "Google Ads"],
    p: "Landing page for a cafe",
    st: "wip",
    b: "Practises one new layout after every class and cares a lot about spacing.",
    l: "",
  },
  {
    f: "12.jpg",
    n: "Abu Huraira As Sami",
    t: "wp",
    r: "Blog builder",
    s: ["WordPress", "Facebook Ads"],
    p: "Handmade soap store",
    st: "live",
    b: "Sets up a WordPress site from hosting to launch and writes notes for the client.",
    l: "",
  },
  {
    f: "13.jpg",
    n: "Mahim",
    t: "mkt",
    r: "Google Ads learner",
    s: ["Facebook Ads", "Google Ads", "Adobe Illustrator"],
    p: "Lead ad for a tutor",
    st: "wip",
    b: "Writes short ad copy and tests two versions of every ad.",
    l: "",
  },
  {
    f: "14.jpeg",
    n: "Al-Imran",
    t: "gfx",
    r: "Photoshop designer",
    s: ["Photoshop", "Adobe Illustrator", "HTML"],
    p: "Business card and letterhead",
    st: "todo",
    b: "Sketches an idea first, then builds it in Photoshop or Illustrator.",
    l: "",
  },
  {
    f: "15.png",
    n: "Nafi",
    t: "wp",
    r: "WordPress builder",
    s: ["WordPress", "Facebook Ads"],
    p: "Local shop website",
    st: "live",
    b: "Learning pages, menus, forms and a simple shop setup.",
    l: "",
  },
  {
    f: "16.png",
    n: "Imtiaj Ahmmed",
    t: "web",
    r: "Layout designer",
    s: ["HTML", "CSS", "WordPress"],
    p: "Landing page for a cafe",
    st: "todo",
    b: "Likes small details like hover effects, grids and clean code.",
    l: "",
  },
  {
    f: "17.jpeg",
    n: "Ashikuzzaman Prottoy",
    t: "web",
    r: "HTML and CSS developer",
    s: ["HTML", "CSS", "Google Ads"],
    p: "Landing page for a cafe",
    st: "live",
    b: "Practises one new layout after every class and cares a lot about spacing.",
    l: "",
  },
  {
    f: "18.png",
    n: "Nazia Tabassum",
    t: "web",
    r: "Layout designer",
    s: ["HTML", "CSS"],
    p: "Flexbox pricing cards",
    st: "wip",
    b: "Likes small details like hover effects, grids and clean code.",
    l: "",
  },
  {
    f: "19.jpeg",
    n: "Samiya Akter Tisha",
    t: "mkt",
    r: "Ads strategist",
    s: ["Facebook Ads", "Google Ads", "WordPress"],
    p: "Google Ads search campaign",
    st: "wip",
    b: "Learning how to pick an audience and keep cost per click low.",
    l: "",
  },
  {
    f: "20.jpg",
    n: "Taspia Hossen Shanta",
    t: "mkt",
    r: "Google Ads learner",
    s: ["Facebook Ads", "Google Ads", "HTML"],
    p: "Ad plan for a local bakery",
    st: "wip",
    b: "Writes short ad copy and tests two versions of every ad.",
    l: "",
  },
  {
    f: "22.png",
    n: "Sumonti Debnath",
    t: "mkt",
    r: "Google Ads learner",
    s: ["Facebook Ads", "Google Ads", "CSS"],
    p: "Facebook page growth test",
    st: "wip",
    b: "Learning how to pick an audience and keep cost per click low.",
    l: "",
  },
  {
    f: "25.png",
    n: "Tuba Noor",
    t: "mkt",
    r: "Campaign builder",
    s: ["Facebook Ads", "Google Ads"],
    p: "Ad plan for a local bakery",
    st: "wip",
    b: "Runs small test campaigns and explains the numbers in plain words.",
    l: "",
  },
  {
    f: "25.png",
    n: "Asif Mahmud",
    t: "gfx",
    r: "Social post designer",
    s: ["Photoshop", "Adobe Illustrator", "Google Ads"],
    p: "YouTube thumbnail pack",
    st: "todo",
    b: "Sketches an idea first, then builds it in Photoshop or Illustrator.",
    l: "",
  },
  {
    f: "25.png",
    n: "Ishrat Zaman",
    t: "gfx",
    r: "Social post designer",
    s: ["Photoshop", "Adobe Illustrator", "Facebook Ads"],
    p: "Festival post templates",
    st: "live",
    b: "Makes template packs so a page can post all month without redesigning.",
    l: "",
  },
  {
    f: "25.png",
    n: "Zahid Sarker",
    t: "gfx",
    r: "Social post designer",
    s: ["Photoshop", "Adobe Illustrator", "Facebook Ads"],
    p: "Business card and letterhead",
    st: "todo",
    b: "Likes clean layouts, strong type and a small colour palette.",
    l: "",
  },
];

var NOTICES = [
  {
    d: "2026-10-31",
    time: "10:00 AM",
    title: "Class 14: Flexbox and Grid practice",
    text: "Bring your laptop. We rebuild one real landing page together.",
    tag: "Class",
    kind: "class",
  },
  {
    d: "2026-11-02",
    time: "11:59 PM",
    title: "Portfolio page v1 due",
    text: "Submit your link in the class group. A rough draft is fine.",
    tag: "Deadline",
    kind: "due",
  },
  {
    d: "2026-11-05",
    time: "4:00 PM",
    title: "Mock client pitch day",
    text: "Three minutes each. Pitch your project as if the batch were your client.",
    tag: "Event",
    kind: "",
  },
  { d: "2026-10-27", time: "Posted", title: "New resource: Framer starter pack", text: "Added to the class library below.", tag: "Update", kind: "" },
];

var RESOURCES = [
  {
    kind: "Cheat sheet",
    title: "Flexbox in one page",
    text: "Every container and item property with a small picture for each.",
    icon: "file",
    href: "",
  },
  {
    kind: "Recording",
    title: "Framer basics, class 9",
    text: "Frames, stacks, breakpoints and publishing, start to finish.",
    icon: "play",
    href: "",
  },
  {
    kind: "Slides",
    title: "How to find your first client",
    text: "Profile setup, first gig ideas and a message template.",
    icon: "slides",
    href: "",
  },
  {
    kind: "Reference",
    title: "W3Schools HTML tutorial",
    text: "Our self-study path for HTML basics.",
    icon: "link",
    href: "https://www.w3schools.com/html/",
  },
  { kind: "Template", title: "Framer starter pack", text: "Navbar, hero and footer blocks to copy into your projects.", icon: "template", href: "" },
  {
    kind: "Checklist",
    title: "Before you send a site to a client",
    text: "Mobile view, links, speed, contact form, favicon.",
    icon: "check",
    href: "",
  },
];

/* What clients can hire the batch for. Each card uses the track text above. */
var HIRE = {
  intro:
    "Need a logo, a landing page, a WordPress site or a small ad campaign? The batch takes small client projects at student-friendly prices, and every job is reviewed by our trainer.",
  steps: [
    ["Tell us the job", "Send what you need, your deadline and a rough budget."],
    ["We match a builder", "We pick the student whose skills and portfolio fit your job best."],
    ["Review and delivery", "You see a draft, ask for changes and get the final files."],
  ],
};

var FAQ = [
  { q: "Who is this site for?", a: "Students of the E-Learning and Earning 8th batch, and anyone who wants to see what we are building." },
  {
    q: "How do I get my photo or details on the site?",
    a: "Send your photo, bio, skills and links to your batch lead in the class group. They update the data file and the site refreshes in a minute.",
  },
  { q: "Where do I find the class recordings and slides?", a: "Open the Class library section further down. Everything from class is added there." },
  {
    q: "Can I get my own ID card to share?",
    a: "Yes. Open your profile, tap Make ID card, then download the picture or share it straight to Facebook or WhatsApp.",
  },
  {
    q: "When are the classes?",
    a: "Every Saturday and Tuesday, 10:00 AM to 12:00 PM. The next class is shown at the top of the site with a countdown.",
  },
  {
    q: "What do I need to follow the class?",
    a: "A laptop or PC, a stable internet connection and a free Google account. The tools we use are free to start with.",
  },
  {
    q: "How do I hand in my work?",
    a: "Post your link in the class group before the deadline on the notice board. A rough draft is fine, we improve it together.",
  },
  {
    q: "Do I need coding for WordPress?",
    a: "No. WordPress runs on ready themes and plugins. A little HTML and CSS helps when you want to fine tune the design.",
  },
  { q: "Can I see how I am doing?", a: "Yes. The Class tracker shows your attendance and which work you have handed in." },
  { q: "What does the blinking dot mean?", a: "It marks a student whose project is live on the internet right now." },
  {
    q: "Can a client hire a student from the batch?",
    a: "Yes. Use the Hire the batch section and send the job details. We match you with the right student.",
  },
];

/* ---------- Google Sheet (optional) ----------
   Paste the published CSV link of each tab here. Leave '' to keep using the lists in this file.
   Guide: Google Sheets > File > Share > Publish to web > choose the tab > CSV > Publish > copy the link.
   Ready-made column templates are in the sheet-templates folder. */
var SHEET = { people: "", notices: "", tracker: "", stories: "" };

/* ---------- Class tracker ----------
   classes = every class held. att for each student is one letter per class: P present, A absent.
   work = homework and tasks. sub is one digit per task: 1 handed in, 0 not yet.
   rows are in roll order (same order as PEOPLE). These numbers are sample numbers, replace them
   with real ones here or in the tracker tab of your sheet. */
var TRACKER = {
  classes: [
    { t: "Class 4", d: "2026-09-26" },
    { t: "Class 5", d: "2026-09-29" },
    { t: "Class 6", d: "2026-10-03" },
    { t: "Class 7", d: "2026-10-06" },
    { t: "Class 8", d: "2026-10-10" },
    { t: "Class 9", d: "2026-10-13" },
    { t: "Class 10", d: "2026-10-17" },
    { t: "Class 11", d: "2026-10-20" },
    { t: "Class 12", d: "2026-10-24" },
    { t: "Class 13", d: "2026-10-27" },
  ],
  work: [
    { t: "Intro profile page", due: "2026-10-06" },
    { t: "Flexbox menu", due: "2026-10-13" },
    { t: "Brand colour sheet", due: "2026-10-20" },
    { t: "Portfolio page v1", due: "2026-11-02" },
    { t: "Mock client pitch", due: "2026-11-05" },
  ],
  rows: [
    { att: "PPPPPPPPPP", sub: "01100" },
    { att: "PAPPPPAPAP", sub: "10010" },
    { att: "PAPPPAPAPP", sub: "11100" },
    { att: "PAPAPPAPPP", sub: "01100" },
    { att: "APPPAPPPPP", sub: "10110" },
    { att: "PPAPPPPPAP", sub: "01000" },
    { att: "PPPPPPPAPP", sub: "11110" },
    { att: "PPPAPAPPAP", sub: "11110" },
    { att: "PPPPPPPPPP", sub: "11100" },
    { att: "PPPPPPPAPP", sub: "10001" },
    { att: "PPPPPPPPPP", sub: "00100" },
    { att: "APPPPPPPPP", sub: "11000" },
    { att: "APPAPPPAPP", sub: "01111" },
    { att: "PPPPPPAPAP", sub: "01100" },
    { att: "PPPPPAPPPP", sub: "10100" },
    { att: "PPPPPPPPPP", sub: "11001" },
    { att: "PPPPPPPPAP", sub: "11001" },
    { att: "PPPPPPPPPP", sub: "10100" },
    { att: "PAPPPPPAPA", sub: "11100" },
    { att: "PPPPPAPPPP", sub: "11101" },
    { att: "PPAPAPPPPP", sub: "11100" },
    { att: "PPPPPPPPPP", sub: "11110" },
    { att: "PPPPPPPPPP", sub: "10000" },
    { att: "PPPAAPPPPP", sub: "11101" },
    { att: "PPPAPPPPAP", sub: "01101" },
  ],
};

/* ---------- Success stories ----------
   s = position of the student in PEOPLE (0 is the first row, 1 the second)
   The three stories below are SAMPLE text so you can see the layout. They show a small "Sample story" tag.
   Replace them with what your real clients said, and delete  sample: true  from each one to hide the tag.
   cn = client name or business, cr = their role, img = client photo in images/clients (optional).
   Only real client feedback should be shown as a story. */
var STORIES = [
  {
    s: 0,
    cn: "Amran Hasan",
    cr: "Owner",
    client: "a local recipe page",
    quote: "He set up the whole site, explained every step in simple words and finished two days early.",
    result: "Site live in 5 days",
    stars: 5,
    img: "amran.png",
  },
  {
    s: 1,
    cn: "Kamrul Islam",
    cr: "Founder",
    client: "a small home business",
    quote: "The logo and business card felt like us from the first draft. We only changed one colour.",
    result: "3 designs, 1 round of changes",
    stars: 5,
    img: 'kamrul.png'
  },
  {
    s: 4,
    cn: "Nisith Roy",
    cr: "Teacher",
    client: "a home tutor",
    quote: "My Facebook ad brought real messages from parents in the first week, and the numbers were easy to follow.",
    result: "18 enquiries in 7 days",
    stars: 5,
    img: "nitish.png"
  },
];

/* ---------- Learning path (Keep learning section) ---------- */
var ROADMAP = {
  mkt: ["Learn the ad basics", "Set up an ad account", "Run a small test campaign", "Read the numbers", "Pitch your first client"],
  gfx: [
    "Learn shapes, type and colour",
    "Master Photoshop basics",
    "Draw clean vectors in Illustrator",
    "Build a three piece portfolio",
    "Offer your first design job",
  ],
  wp: [
    "Get hosting and install WordPress",
    "Pick and tweak a theme",
    "Add pages, menus and forms",
    "Run speed and safety checks",
    "Hand a site to a client",
  ],
  web: [
    "Write the HTML structure",
    "Style it with CSS",
    "Build layouts with Flexbox and Grid",
    "Make it work on phones",
    "Publish your portfolio page",
  ],
};

/* Tools we use. k = track key. */
var TOOLS = [
  { n: "Visual Studio Code", t: "Write HTML and CSS", k: "web", url: "https://code.visualstudio.com" },
  { n: "Figma", t: "Plan layouts before you build", k: "gfx", url: "https://www.figma.com" },
  { n: "Adobe Photoshop", t: "Photos, mockups and posts", k: "gfx", url: "https://www.adobe.com/products/photoshop.html" },
  { n: "Adobe Illustrator", t: "Logos and clean vector art", k: "gfx", url: "https://www.adobe.com/products/illustrator.html" },
  { n: "LocalWP", t: "Run WordPress on your own PC", k: "wp", url: "https://localwp.com" },
  { n: "Meta Ads Manager", t: "Facebook and Instagram ads", k: "mkt", url: "https://www.facebook.com/adsmanager" },
  { n: "Google Ads", t: "Search and display campaigns", k: "mkt", url: "https://ads.google.com" },
  { n: "Canva", t: "Quick social posts and thumbnails", k: "gfx", url: "https://www.canva.com" },
];

/* Practice challenge. Change it every week. due = last day, k = track key. */
var CHALLENGE = {
  title: "Build a one-screen portfolio hero",
  text: "Use Flexbox to put your name, a job title and one button on a single screen. It must look right on a phone. Post your link in the class group.",
  due: "2026-11-07",
  k: "web",
  tip: "Start with the phone layout first.",
};
