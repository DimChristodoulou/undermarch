/* undermarch-atlas-data.js — nodes and edges for the Atlas.
 Loaded before undermarch-atlas.html's engine script.
 This is the file that changes when canon changes.
 Updated 2026-09-12 — Dunthara, the Cassiran Bay and the Ebon Summit named.
   The two moons live in undermarch-atlas-data-sky.js, loaded after this file. */
const DATA = {
nodes: [
// ---------- EVENTS & COSMOLOGY ----------
{i:"weeping",l:"The Weeping",t:"event",s:"locked",src:"Established Canon",
d:"Roughly two months ago, about twenty vast shafts tore open across the world's surface, connecting it to the Undermarch. The folk name; charter companies say <em>the Opening</em>, deep-dwellers say <em>the Unroofing</em>. Which name a character uses tells you who they are.",
f:[["When","~2 months ago"],["Nature","Not a natural disaster"],["Naming","Three competing names, none locked"],["Not part of","The Burial Age cycle — unrelated events sharing an ultimate cause"]]},

{i:"ritual",l:"The Undertear Ritual",t:"event",s:"locked",src:"Established / Proposed Canon",
d:"A single, immensely costly casting that spent close to a generation of insectoid mages. It did not excavate — it <em>compressed</em>, crushing rock ahead of the bore into the Underglass. Irreversible, unrepeatable, and fired at a surface its casters believed was empty.",
f:[["Cost","~a generation of mages"],["Method","Compression, not excavation"],["Repeatable","No — self-terminating"]]},

{i:"undertears",l:"The Undertears",t:"place",s:"locked",src:"Established Canon",
d:"About twenty shafts, each running 40+ km almost to the Root and roughly forty kilometres across — wide enough that the far wall is a smudge on the horizon in clear air, and wide enough to hold its own weather. A clean vertical hole top to bottom — no widening, no shelf. One settlement per Undertear, at the Lip; anything deeper is a handful of people in a Mouth, never a town.",
f:[["Count","~20"],["Depth","40+ km"],["Width","~40 km across"],["Anatomy","Lip · Throat · Mouths · Verge"],["Settlements","One each, at the Lip"],["Placed so far","Three in Obun; the Fallwater in Velmack"]]},

{i:"undermarch",l:"The Undermarch",t:"place",s:"locked",src:"Established Canon",
d:"The megadungeon itself — or <em>the Undersky</em>, to people who have lived down there long enough to love it. Danger scales with depth, loosely recognised in bands. Few living explorers have gone past the Mid Reaches and come back.",
f:[["Also called","The Undersky"],["Structure","Archipelago of isolated regions"],["Lies beneath","Kilometres of stacked Burial Ages"]]},

{i:"archipelago",l:"The Archipelago Model",t:"mechanic",s:"locked",src:"Established Canon",
d:"The deep is not one connected cave system. It is discrete regions separated by genuinely impassable gaps — flooded sumps, magma sheets, unbroken rock. Each is reachable from the surface but not easily from its neighbours, which is why travel between Undertears is easier <em>above</em> ground than below.",
f:[["Design payoff","Build one region at a time"],["Consequence","Only the Weftways cross the gaps"]]},

{i:"weftways",l:"The Weftways",t:"place",b:"mid",s:"open",src:"Proposed Canon",
d:"An ancient horizontal tunnel network stitching the archipelago together — slow, patient, conventional tunnelling by worker and taskmaster castes over centuries, for trade and expansion between deep regions. Nothing to do with the surface originally. Once the crisis hit, the insectoids realised existing infrastructure could move an army.",
f:[["Age","Centuries — predates the heat crisis"],["Built for","Internal trade and expansion"],["Name","Weftways / Sutures / Stitch — unconfirmed"],["Found at","The Regular Passage"]]},

{i:"stillness",l:"The Stillness",t:"phenomenon",b:"under",s:"locked",src:"Established Canon",
d:"A powerful enchantment holding the insectoid heartland untouched — no wind, no current, no intruding surface air, while the rest of the Undermarch howls. It runs on deep heat, which is being drained faster than it can be gathered. It is fading and cannot be renewed.",
f:[["Status","Receding, measurably"],["Fuel","Deep heat"],["Crossing it","The roar simply stops"],["Intel value","Map the line twice, months apart"]]},

{i:"root-entity",l:"The Root Entity",t:"creature",b:"root",s:"open",src:"Proposed Canon",
d:"Something at or near the deepest reachable point, quietly draining warmth out of the world. It did not make the Undertears and has no interest in the surface. One cause, two symptoms: it freezes the insectoid homeland <em>and</em> dissolves its only protection. Its episodic feeding is also what writes the Burial Ages into the rock.",
f:[["Identity","Undetermined — the campaign's biggest open question"],["Tier","Levels 17–20 endgame"],["Motive","Unknown; possibly none"],["Also drives","The Burial Age cycle"]]},

{i:"inverted-gradient",l:"The Inverted Gradient",t:"phenomenon",s:"locked",src:"Established Canon",
d:"The deep warms with depth exactly as it should — until somewhere in the Mid Reaches, where the gradient reverses. Below that point it gets colder the further you go, and the Root is the coldest place in the world. Nobody has measured it. The anomaly is entirely undetected.",
f:[["Campaign gradient","~2.5–3 °C/km — deliberately shallow"],["Peak","~50–60 °C around 20 km, then it reverses"],["Why nobody notices","The top few km are heat-loaded by what the shafts vent, so mines read ordinary"],["Consequence","Heat is the scarce resource, not the hazard"],["Discoverable by","A party with a thermometer and a rope"]]},

{i:"underglass",l:"The Underglass",t:"phenomenon",b:"root",s:"open",src:"Proposed Canon",
d:"Where the displaced rock went. The ritual crushed stone ahead of the bore into something far denser, and the compressed material hardened with depth until it was harder than the ritual could affect — so the boring stopped on its own byproduct. The Root is a floor, not a long empty drop.",
f:[["Scope","Per-Undertear — twenty independent floors"],["Contents","Density discontinuities, not preserved shapes"],["Solves","Mass conservation — mechanism only. The displaced-volume figure was retracted; any number must be derived against the 40 km width."]]},

{i:"invasion-timeline",l:"The Invasion Timeline",t:"era",s:"open",src:"Proposed Canon",
d:"Weftways built centuries ago for trade. Then the Root Entity begins draining heat; the Stillness recedes; the homeland starts to die. The mage castes develop the ritual as an <em>evacuation plan</em> aimed at a surface they believe is lethal but empty. It fires. Within weeks, armed people start climbing down.",
f:[["The surprise","The surface was inhabited"],["Now","Improvising a military they never had"],["Clock","~10 months to build an army from nothing"]]},

{i:"invasion-clock",l:"The Invasion Clock",t:"mechanic",s:"open",src:"Proposed Canon",
d:"An eight-segment front clock, advanced by triggers rather than the calendar — so careful play isn't punished. Escalation ladder: tremors at the Verge, animals refusing the Mouths, scouts appearing two bands shallower than they should, a camp going silent, a node opening inside surveyed territory, a colony falling, a Throat contested, invasion.",
f:[["Segments","8"],["Advances on","Triggers, not dates"],["Segment 1","Already started — the First Sign"]]},

{i:"reveal-ladder",l:"The Reveal Ladder",t:"mechanic",s:"proposed",src:"Adventure 01 / POI",
d:"How the party learns there is somebody down there, in deniable increments. Rung 1: an anomaly you can explain away. Rung 2: cultivation in the Shallows. Rung 3: the Regular Passage — ancient tunnel, recent repair — which cannot be explained away at all.",
f:[["Rung 1","The First Sign (Adventure 01)"],["Rung 2","Shallows cultivation (Adventure 02)"],["Rung 3","The Regular Passage"]]},

{i:"prep-twenty",l:"Prep Discipline for the Twenty",t:"mechanic",s:"open",src:"Proposed Canon",
d:"One Undertear built in full — the Fallwater. Two sketched in a paragraph. Seventeen as one-line rumours: a name and a single strange fact. The seventeen exist to make the world feel large, and they should stay rumours for most of the campaign.",
f:[["Built in full","1"],["Sketched","2"],["Rumours","17"],["Placed","3 in Obun, 1 in Velmack"]]},

{i:"darkview-tombs",l:"The Darkview Tombs",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A gallery of wayside burial niches three tiers high, opening off a Mouth within sight of the descent lines. Whose dead these were is not recorded, and the workmanship matches nothing else catalogued. Every body faces <em>down</em> the passage, toward the deep, rather than up toward the surface. A third of the niches are now empty.",
f:[["Depth","~180 m — provisional, pending your call"],["Cluster","A — On the Shaft"],["Level","2–4"],["Scale","Medium — a gallery, a worked chamber, and the empty graves on the Lip that lead here"],["Structure","An investigation that resolves into a conversation"],["Occupied by","People who died in the last two months"],["The turn","Mott doesn't run, doesn't fight, and doesn't deny any of it"]]},

{i:"mott",l:"Warden Anselm Mott",t:"npc",b:"threshold",s:"proposed",src:"Points of Interest",
d:"The Vigil warden who says the words at the Fallwater when there is nobody else to say them, and who has buried over a hundred people in eight weeks without pause. He took a necromantic text the Sounding Line's cautious circle had judged too dangerous to release, and has been quietly moving bodies out of the colony's ground into the Darkview Tombs to work on them one at a time.",
f:[["Faction","Vigil of the Weeping — and he ends it if this gets out"],["Motive","Repair, not power. His doctrine calls the Weeping a wound."],["The problem","It doesn't work. What comes back is not the person."],["Why he continues","Stopping means accepting that the eleven are not coming back either"],["At the table","A caster, not a combatant. He does not order an attack unless forced."]]},

{i:"petrified-forest",l:"The Petrified Forest",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A chamber of standing stone trees — not carved and not grown, but fossilised where they stood, bark grain intact, turned to silica by the rock that buried them. This is the campaign's only encounter with <em>geological</em> time. Every other ruin in the Undermarch is somebody's history, three thousand years deep at the outside. Nobody built this and nobody abandoned it. The ground the party is standing on used to be the sky.",
f:[["Depth","~540 m"],["Level","1–4"],["Scale","Small — one chamber, but a chamber worth an hour"],["Structure","Pure discovery. No combat, no hazard, no gate."],["Pairs with","The Skywell — a living grove one Mouth away, the same thing before anything alive today existed"],["Useful","The stone knaps like flint — a tool source for anyone underground without metal"],["The turn","Every trunk fell the same way, inward and down, in a single event. Do not answer what."],["Surface echo","The Floor's buried-timber horizon is the same phenomenon, above ground"]]},

{i:"holdfast",l:"The Holdfast",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"A tower that fell a very long time ago around a door that is standing open. Nothing has ever come out; nothing that went in has come back. The garrison is still on duty — a fixed number of constructs and ward-traps that hold the threshold, never pursue, and have never lost. They do not replenish, so the Fallwater has been slowly grinding them down for seasons.",
f:[["Depth","~1.7 km"],["Level","8–10, in a band rated 4–7"],["Scale","Small and vertical, defended out of all proportion"],["Count","Nine on the first survey. Seven remain."],["Not a delve","An attritional public objective with a visible counter"],["Against the Spire","Those constructs are caretakers. These are a garrison."],["The turn","The bodies in the rubble go down in layers, and a great many of them are old"]]},

// ---------- THE SURFACE WORLD ----------
{i:"surface-world",l:"The Surface World",t:"place",s:"locked",src:"Established Canon",
d:"Six continents, one of which holds everything the campaign currently touches. The world is volcanically violent and always has been — ash seasons are a fixed part of the agricultural calendar everywhere, and every child learns which mountains to watch. Nobody connects that to anything.",
f:[["Continents","6"],["Developed","Kethal and Obun"],["Named","No — the planet has no name in canon"]]},

{i:"kethal",l:"Kethal",t:"place",s:"locked",src:"Established Canon",
d:"The largest continent at roughly fifteen million square kilometres, and the one the campaign happens on. Two mountain ranges divide it: the Red Peaks running north–south through the northern half, and the Asbour running east–west across the middle. Prevailing winds run west to east, which decides where the food is. The Undertear Compact was founded here, at Xynnar. Like the calendar, the continent names are old survey terms carried forward out of administrative habit.",
f:[["Area","~15 million km² — largest"],["Nations","5"],["Ranges","The Red Peaks and the Asbour Mountains"],["Winds","West to east"],["Founded here","The Undertear Compact, at Xynnar"],["Holds","The Fallwater"],["Continuous history","~3,700 years — nothing older survives"]]},

{i:"kethal-history",l:"The Continental Timeline",t:"era",s:"locked",src:"Established Canon",
d:"Kethal has no continuous history older than roughly 3,700 years, and every nation on it knows that. Settlement began at the two First Risings — the western sea-cliffs that became Cludonea, and the southeastern coast and islands that became Surlund. Populations spread inland along the river valleys, claimed ground by occupation, fought over it for centuries, and only then wrote the borders down. The Settlement of Lines fixed the present five ~600 years ago.",
f:[["Starts","~3,700 years ago — the First Risings"],["Border rule","Claimed by occupation → disputed → fought over → written down"],["The Long Quarrels","~2,600 years ago, over the ashward plains"],["The Asbour Wars","~1,900 years ago, ended in exhaustion"],["Settlement of Lines","~600 years ago — the present map"],["Last change","~40 years ago, a river's course"],["Before it","Folklore only. Nobody has a history of the Burial Age."]]},

{i:"prevailing-winds",l:"Wind, Ash and Water",t:"phenomenon",s:"locked",src:"Established Canon",
d:"Kethal's prevailing winds run west to east. Moist ocean air rises over the Red Peaks, drops its rain on the western slope, and comes down the eastern slope dry — while the same wind carries volcanic ash east off the arc. The result is that the eastern half of the continent holds the richest soil in the world and the least reliable rainfall, which is the single fact the whole Kethali economy is arranged around.",
f:[["Direction","West → east"],["Windward","Cludonea — wet, ash-free, poorer soil"],["Leeward","Tenemrea and eastern Velmack — rich soil, unreliable rain"],["The fix","Irrigation, at state scale"],["Also produces","Dunthara — Brannock's desert, further north where no eastern sea compensates"]]},

{i:"red-peaks",l:"The Red Peaks",t:"place",s:"locked",src:"Established Canon",
d:"A young, active volcanic arc running roughly north to south down the northern half of Kethal, dividing Cludonea in the west from Tenemrea in the east, with Brannock straddling the northern end. It holds the great majority of the continent's active cones. These are the mountains children are taught to watch. The name is for the iron-stained ash, not the rock.",
f:[["Trend","North–south"],["Type","Active volcanic arc"],["Divides","Cludonea from Tenemrea"],["Watched because","Ash seasons come off it"],["Feeds","The gorge-fed rivers Tenemrea canalises"],["Cones","At least five active; the largest is the Ebon Summit, the rest unnamed"]]},

{i:"asbour",l:"The Asbour Mountains",t:"place",s:"locked",src:"Established Canon",
d:"Old, folded and extinct, running roughly east to west across the middle of Kethal and separating the northern nations from Velmack and Surlund. No cones, no ash, worn down far enough that the ore sits exposed. This is where Kethal mines. The range is a shared frontier rather than any one nation's possession, and the mining camps in it answer to whoever reached them last.",
f:[["Trend","East–west"],["Type","Old, folded, extinct"],["Function","The continent's ore"],["Owned by","Nobody — the Asbour Wars ended in exhaustion"],["Against the Red Peaks","The mountains you mine, versus the mountains you watch"]]},

{i:"varngate-gap",l:"The Varngate Gap",t:"place",s:"locked",src:"Established Canon",
d:"The two ranges do not meet. Between the southern end of the Red Peaks and the western end of the Asbour lies a lowland corridor — the only easy overland route between northern and southern Kethal. Everything else is a mountain crossing or a sea voyage. Velmack holds it from the fortress town of Varngate and charges for it, which is a substantial part of why Velmack is the largest nation on the continent.",
f:[["What it is","The gap between the two ranges"],["Held by","Velmack, from Varngate"],["Carries","Every north–south army, caravan and grain shipment not going by sea"],["Replaces","'The Knot' — a massif proposed and retracted; the ranges don't meet"]]},

{i:"cinder-belt",l:"The Cinder Belt",t:"place",s:"locked",src:"Established Canon",
d:"The dry, ash-loaded strip immediately east of the Red Peaks, before the rivers regain enough water to matter. Grazing, quarry and charcoal country. Thinly held, and militarily important out of all proportion to what lives there.",
f:[["Where","East of the Red Peaks, west of the Tenemrean plain"],["Supports","Grazing, quarries, charcoal"],["Politically","Nearly empty; strategically not"]]},

{i:"cassiran-strait",l:"The Cassiran Strait",t:"place",s:"locked",src:"Established Canon",
d:"The passage between Kethal's southeastern mainland and the head of Surlund's island chain, and the only short route between the continent's eastern and western coasts. It takes its name from the Cassira grain run — the traffic that made it worth holding. Surlund holds both shores and tolls every hull. The alternative is rounding the whole southern tail in open ocean off a lee shore, which costs weeks and, in bad seasons, ships.",
f:[["Held by","Surlund, both shores"],["Named for","The Cassira grain run"],["Alternative","Round the tail — weeks, and wrecks"],["Enforced by","Pilots and shoal water, not a fleet"],["Grievance","Cludonea contested it ~300 years ago, lost at sea, still pays"]]},

{i:"the-floor",l:"The Floor",t:"phenomenon",s:"locked",src:"Established Canon",
d:"A buried layer under all of Kethal: sterile grey ash and welded tuff, sometimes with a horizon of flattened or upright timber in it, sometimes with worked stone. Not a thin seam and not at a consistent depth — 300 m and more beneath the Tenemrean basins and the Fallwater valley, perhaps 40 across the open plains, effectively nothing on stripped highlands. Nobody reaches it by digging; it is reached where geology exposes it. There is no accepted explanation, and the local names are descriptive rather than theoretical.",
f:[["Depth","Wildly variable — 300 m+ in basins, ~40 m on plains, nil on ridges"],["Exposed at","Gorges, sea cliffs, quarry faces, landslide scars, Throat walls"],["Known as","The Floor, the grey course, the drowned wood, the Old Ground"],["Contains","Ash, buried forest, occasionally a buried town"],["Understood by","Nobody — it is folklore, not theory"],["Actually","The last Burial Age — GM only"]]},

{i:"kethal-settlements",l:"Kethal's Cities and Hubs",t:"place",s:"locked",src:"Established Canon",
d:"Velmack: Xynnar (capital, a coastal city on the Fallwater river), Kessek Roads (western port), Draymund (eastern port), Holtmarch (the ashward agricultural march), Varngate (the fortress in the Gap). Tenemrea: Aurelane (capital, head of the canal system), Cassira (the great eastern port), the Ombrian Hills (the vineyards). Cludonea: Threnhaven (capital and great western port), Ondris (northern port, the Brannock trade), the Calvyr Halls (the air-and-water college). Brannock: Aelthorn (forest seat), Sirrach (desert seat, in Dunthara), Duneth Gate (the licensed border market). Surlund: Ormsvik (capital, on the Strait, where the toll is assessed), Vessgard (the cliff country).",
f:[["Velmack","Xynnar · Kessek Roads · Draymund · Holtmarch · Varngate"],["Tenemrea","Aurelane · Cassira · the Ombrian Hills"],["Cludonea","Threnhaven · Ondris · the Calvyr Halls"],["Brannock","Aelthorn · Sirrach · Duneth Gate"],["Surlund","Ormsvik · Vessgard"],["Still unnamed","Corrach-Nom's capital and the ports of the nine"]]},

{i:"dunthara",l:"Dunthara",t:"place",s:"locked",src:"Established Canon",
d:"Brannock's open desert, and the dry half of the nation. It lies east of the Red Peaks' northern arm, in their rain shadow, far enough north that there is no eastern sea close enough to compensate for what the mountains take out of the air. Brannock's forest lies west and north of the range, in the wet; Dunthara lies east of it. One nation, one people, two climates, one mountain wall between them — and the reason desert elves are native to Brannock rather than immigrant.",
f:[["Continent","Kethal"],["Nation","Brannock"],["Where","East of the Red Peaks' northern arm"],["Cause","Rain shadow, with no eastern sea to compensate"],["Seat","Sirrach"],["Known abroad","Barely — foreign traffic stops at Duneth Gate"]]},

{i:"cassiran-bay",l:"The Cassiran Bay",t:"place",s:"locked",src:"Established Canon",
d:"The bay Kethal's eastern coast forms off Tenemrea. Ash-loaded rivers carry enormous sediment loads and build sandbar and delta faster than the sea clears them, so it is shoal for hundreds of kilometres and deep-hulled ships cannot approach most of it. Cassira sits on the one scoured channel that runs close inshore, and dredging it is a permanent and expensive obligation of the Tenemrean crown. The Cassiran Strait is a separate feature further south.",
f:[["Continent","Kethal"],["Off","Tenemrea's east coast"],["Character","Shoal, delta, permanently silting"],["Port on it","Cassira"],["Cost","Continuous dredging, paid by the crown"],["Not the Strait","That is further south, between the mainland and Surlund's island chain"]]},

{i:"ebon-summit",l:"The Ebon Summit",t:"place",s:"locked",src:"Established Canon",
d:"The largest volcano on Kethal, standing on the Red Peaks arc — the young, active chain that holds the great majority of the continent's active cones and supplies its ash seasons. These are the mountains children are taught to watch.",
f:[["Range","The Red Peaks"],["Continent","Kethal"],["Rank","Largest on the continent"],["Status","Active"],["Still open","Whether the arc's other cones get names, and whether any sits deliberately off the arc"]]},

{i:"naidrora",l:"Naidrora",t:"place",s:"locked",src:"Established Canon",
d:"A continent. Nothing has been built here yet — the name is canon, the content is not.",
f:[["Status","Named only"]]},

{i:"aubannon",l:"Aubannon",t:"place",s:"locked",src:"Established Canon",
d:"A continent. Nothing has been built here yet — the name is canon, the content is not.",
f:[["Status","Named only"]]},

{i:"obun",l:"Obun",t:"place",s:"locked",src:"Established Canon",
d:"The smallest continent, roughly five million square kilometres, lying far north and cold. Short growing season, poor soil, and it has never fed itself. Corrach-Nom holds about four fifths of it from the highland interior; nine smaller nations hold the coasts. Three Undertears opened inside its territories.",
f:[["Area","~5 million km² — smallest"],["Held by","Corrach-Nom (~4/5) and the nine coastal nations"],["Undertears","3"],["Has never","Fed itself"]]},

{i:"corrach-nom",l:"Corrach-Nom",t:"place",s:"locked",src:"Established Canon",
d:"A dwarven and gnomish nation holding the highland interior of Obun, and the most technically accomplished polity in the world. Its smiths and engineers supply the continent — and much of the world — with metal, tools, weapons and armour, and its military advantage over its neighbours is decisive in any engagement not decided by spellcasters. It also cannot eat any of that.",
f:[["Continent","Obun"],["Holds","~4/5 of it, the interior"],["Government","The Corrach-Nom Diarchy"],["Grows underground","Fungal farms — enough to survive a bad year, nowhere near enough to live on"],["Imports","Grain by sea, much of it Tenemrean"],["Undertears","Three, in its own territories"],["Capital","Unnamed"]]},

{i:"diarchy",l:"The Corrach-Nom Diarchy",t:"faction",s:"locked",src:"Established Canon",
d:"A thousand years of two crowns ruling together, always one dwarf and one gnome, and the pairing alternates each reign. The present pair is a gnome king and a dwarf queen. Both are elected separately by a council of a hundred and wed at coronation; the marriage is a marriage of state, and because the crowns are elective it needs no heirs.",
f:[["Age","~1,000 years in this form"],["Council","100 — 50 dwarves, 50 gnomes, allocated by law, filled from the guilds"],["Guilds","Not race-segregated; each elects its dwarven and gnomish delegates separately"],["Ties","Broken by the outgoing monarch of the opposite race"],["Tenure","For life"],["Removal","The council may depose the royal <em>pair</em> — never one crown alone"],["Why they hold together","Neither can survive the other's disgrace"]]},

{i:"obun-nine",l:"The Nine Coastal Nations",t:"place",s:"open",src:"Established Canon",
d:"Nine smaller nations holding Obun's coasts, none of them named yet. They arrived by sea some three and a half thousand years ago, found the interior already held, and settled the harbours instead. Trading states rather than agricultural ones: overseas grain inland, Corrach-Nom metalwork outward. There has been no war on Obun in living memory — a structural fact rather than a sentimental one.",
f:[["Count","9"],["Names","None yet — open"],["Arrived","~3,500 years ago, by sea"],["Hold","The harbours, the ships, the grain contracts"],["The balance","A continent that cannot feed itself does not conquer its own suppliers"],["The friction","Factions among them read the Diarchy's restraint as patience, not good will"]]},

{i:"lantern-concession",l:"The Lantern Concession",t:"event",s:"locked",src:"Established Canon",
d:"The sounding lanterns are not the Sounding Line's invention. Corrach-Nom developed them and handed over the schematics, and the price was not money — the Diarchy has little use for foreign coin. It took guaranteed grain tonnage, and a permanent Diarchy seat in Line survey operations at every Undertear on the planet. At the time it was widely read as generosity, since a lamp that points home saves lives and withholding it would have been monstrous.",
f:[["Given","The lantern schematics"],["Taken","Grain tonnage, and a seat at every Undertear"],["Read at the time as","Generosity"],["Not part of it","Line cable — that is the Line's own work, never shared"]]},

{i:"emmux",l:"Emmux",t:"place",s:"locked",src:"Established Canon",
d:"A continent. Nothing has been built here yet — the name is canon, the content is not.",
f:[["Status","Named only"]]},

{i:"jomoth",l:"Jomoth",t:"place",s:"locked",src:"Established Canon",
d:"A continent. Nothing has been built here yet — the name is canon, the content is not.",
f:[["Status","Named only"]]},

{i:"velmack",l:"Velmack",t:"place",s:"locked",src:"Established Canon",
d:"The largest nation on Kethal and the most balanced: a strong standing military — the oldest on the continent — moderate agriculture on its eastern side, and ports on both coasts, which no other Kethali nation has. It holds the Varngate Gap and taxes the overland traffic through it, governs the Fallwater outright, and hosted the founding of the Undertear Compact at Xynnar. Its reputation among the other four is competence without warmth: Velmack is the nation that did the arithmetic on its own farmland and let it drown.",
f:[["Capital","Xynnar"],["Continent","Kethal"],["Formed","~1,600 years ago, from the southwestern river holds"],["Military","First standing army on Kethal"],["Ports","Both coasts — Kessek Roads and Draymund"],["Holds","The Varngate Gap, and the Fallwater"],["Compact","Founding nation, and founding site"]]},

{i:"xynnar",l:"Xynnar",t:"place",s:"locked",src:"Established Canon",
d:"Velmack's capital, a coastal city on the Fallwater river. It issues the charters, sets the tolls, and holds the final say over who goes down the Fallwater. It is where the arithmetic was done that decided an open Undertear was worth more than the farmland below it — and it is where the Undertear Compact was founded, which every other Kethali nation remembers.",
f:[["Nation","Velmack"],["On","The Fallwater river, at the coast"],["Decided","Not to dam the Fallwater"],["Founding site","The Undertear Compact"]]},

{i:"brannock",l:"Brannock",t:"place",s:"locked",src:"Established Canon",
d:"The exception among Kethal's nations: an elven country, holding deep forest west of the Red Peaks' northern arm and open desert east of it, in the rain shadow. That geography is why woodland, ancient and desert lines are all native to it rather than immigrant — an elf of any of the three can be from Brannock without further explanation. Its borders are formally established and were the first on the continent to be fixed. What separates it from the other four is contact, not status: foreign traffic enters through one licensed market and goes no further.",
f:[["Continent","Kethal"],["Ancestry","Elven — all three lines native"],["Terrain","Forest west of the range, Dunthara east of it"],["Consolidated","~2,300 years ago — the oldest fixed border on Kethal"],["Contact","One licensed market at Duneth Gate; nothing beyond it"],["Consequence","Treaties and embassies, and almost no knowledge of the interior"],["Open","Homeland or enclave?"]]},

{i:"tenemrea",l:"The Tenemrea Kingdom",t:"place",s:"locked",src:"Established Canon",
d:"An agricultural and commercial powerhouse producing roughly sixty percent of Kethal's food supply on the richest soil in the world. Ash gives the fertility, the Red Peaks give the water, and the crown gives the canals — Tenemrea is a hydraulic state, and its investment in agricultural advancement is state policy rather than local practice. Tenemrean wine is a delicacy in noble courts well beyond Kethal. It has money, food, and very little military weight, and every neighbour knows the ratio.",
f:[["Continent","Kethal"],["Crowned","~1,300 years ago"],["Produces","~60% of Kethal's food"],["Mechanism","Gorge-fed rivers, canalised over a thousand years"],["Exports","Grain by sea to Obun; wine to noble courts"],["Vulnerability","A heavy ash year chokes the canals"],["Military","Negligible — and it pays Surlund's toll to ship anything west"]]},

{i:"surlund",l:"Surlund",t:"place",s:"locked",src:"Established Canon",
d:"The southern nation, holding Kethal's southeastern mainland and the island chain running out from it. One of the two First Risings and therefore the oldest continuously settled ground on the continent — and the poorest of the five. Its wealth is entirely positional: it holds both shores of the Cassiran Strait and tolls the only short route between Kethal's coasts. It has no fleet worth the name and does not need one, because the channels are shoal, tidal and unmarked.",
f:[["Continent","Kethal"],["Founded","~3,700 years ago — a First Rising"],["Holds","Both shores of the Cassiran Strait"],["Income","The toll, and pilotage"],["Real power","The pilot guilds, as old as the crown and about as strong"],["Temperament","Decayed seniority — oldest ground, least power"],["Also","Its uplifted coast exposes the Floor for hundreds of km, and means nothing to anyone"]]},

{i:"cludonea",l:"Cludonea",t:"place",s:"locked",src:"Established Canon",
d:"A major maritime force, built on import and export rather than production. Its decisive advantage is elemental magic: Cludonean work on air and water is the most advanced anywhere, and a merchant ship carries a trained wizard as routine, holding wind and current to schedule. That makes Cludonean shipping faster and more predictable than anyone else's, and it is the reason Tenemrea's grain reaches Obun on time.",
f:[["Continent","Kethal"],["Founded","~3,700 years ago — a First Rising, on the western sea-cliffs"],["Breakthrough","~900 years ago — systematic air and water work"],["Every ship","Carries a wizard"],["Trains them","The Calvyr Halls; the state controls who graduates"],["Grievance","Pays Surlund's toll, contested it ~300 years ago, lost"]]},

{i:"no-dam-decision",l:"The Decision Not to Dam",t:"event",s:"locked",src:"Established Canon",
d:"Velmack could have dammed the Fallwater and chose not to. Xynnar judged an open Undertear worth more than the farmland downstream, and let the farmland drown. It makes the crown culpable rather than unlucky, and it hands you a ruined downstream country that knows exactly whose decision did it and says so.",
f:[["Who","The crown at Xynnar"],["Traded","Farmland for access"],["Consequence","Refugees who know the name of the man responsible"]]},

{i:"burial-ages",l:"The Burial Ages",t:"era",s:"locked",src:"Established Canon",
d:"The Root's draw is episodic, on a period of roughly four thousand years, and every episode is written into the rock as a Burial Age. When a draw begins in earnest the displaced heat drives sustained volcanism, and the ash ends whatever civilization is standing — not by violence but by years of failed harvests. This is not a season of bad weather: it is flood-scale volcanism running for decades to centuries after the last harvest fails, laying down the Floor. Ash-loaded rain seals the abandoned cities fast enough to preserve what was written in them, which is why the deep holds legible ruins instead of rubble.",
f:[["Period","~4,000 years, strictly episodic"],["Duration","Decades to centuries of sustained volcanism"],["Kills by","Agricultural failure, not violence"],["Lays down","The Floor — hundreds of metres, reworked over millennia"],["Why no plateau","The crust subsides under the load; basins sink as they fill"],["Why the deep is layered","Kilometres of stacked cycles — the Era Stack read from below"],["Current draw","Real but early; aggressive phase 100–200 years out"],["Does not","Close the ways — that was a separate act"],["Known by","Nobody. Every civilization that could have recorded one was ended by it."]]},

{i:"ash-seasons",l:"The Ash Seasons",t:"phenomenon",s:"locked",src:"Established Canon",
d:"The surface-facing edge of the Burial Ages, and the only part of the process anybody alive has seen. Ash seasons are built into the agricultural calendar of every nation; every child learns which mountains to watch and when. On Kethal that means the Red Peaks. It is ordinary. It is also the shallow end of the thing that ends civilizations, and no one has made the connection.",
f:[["Known to","Everyone"],["Understood by","No one"],["Actually","The Burial Age cycle, early"],["On Kethal","The Red Peaks are the ones you watch"]]},

{i:"mainstream-church",l:"The Mainstream Church",t:"faction",s:"open",src:"Established Canon",
d:"The orthodox religious authority that declared the Vigil of the Weeping heretical. It exists in canon only as the body that made that ruling — name, doctrine, reach and whether it has its own read on the Weeping are all unbuilt.",
f:[["Canon role","Declared the Vigil heretical"],["Built","Almost nothing"],["Open","Does it have a position on the Weeping of its own?"]]},

// ---------- GM-ONLY ----------
{i:"corrach-nom-origin",l:"Corrach-Nom's Founding Tale",t:"era",s:"locked",src:"Established Canon — GM only",
d:"<strong>GM only.</strong> The tale is literally true. Corrach-Nom's dwarves and gnomes are descendants of the Aftermath — survivors of the last Burial Age who lived in the deep and came up out of it roughly four thousand years ago, into a surface the ash had just emptied. That is why they got a continent's interior: there was nobody left on it to object. They no longer know this. Four thousand years reduced it to folklore, and the Diarchy's own historians treat the tale as myth.",
f:[["Status","GM only"],["When","~4,000 years ago"],["Descended from","The Aftermath"],["Told as","A feast-tale nobody takes literally"],["Unaccounted for","How they got out of the deep at all"],["Parallel","Surlund's drowned-country folklore, which is also true and also disbelieved"]]},

{i:"diarchy-unit",l:"The Diarchy's Quiet Unit",t:"faction",s:"locked",src:"Established Canon — GM only",
d:"<strong>GM only.</strong> The Diarchy's foreign delegations are officially Sounding Line scholars operating under Corrach-Nom's authority, and most of them genuinely are. Separately, Corrach-Nom has assembled a unit of its best engineers, foremen and scholars to work the three Undertears in its own territory, looking for recoverable technique rather than knowledge for its own sake. It also reads the reports its foreign delegates send home — so an entirely honest Diarchy scholar at a distant Undertear can be the first link in a chain he knows nothing about.",
f:[["Status","GM only"],["Works","The three Obun Undertears"],["Wants","Recoverable technique"],["Reads","Its own delegates' reports"],["Hasn't worked out","Why they find any of it so legible"]]},

// ---------- DEPTH BANDS ----------
{i:"threshold",l:"The Threshold",t:"place",b:"threshold",s:"locked",src:"Established Canon",
d:"0–1 km. Rope-and-ladder country. Real sunlight still reaches through shafts and doline groves. Levels 1–4.",
f:[["Depth","0–1 km"],["Levels","1–4"],["Light","Real sunlight"],["Upper wall","Cuts through the Floor — the last Burial Age in cross-section"]]},

{i:"shallows",l:"The Shallows",t:"place",b:"shallows",s:"locked",src:"Established Canon",
d:"1–4 km. The last of the surveyed world. Bioluminescence replaces carried light as the dominant illumination; fungal forests and the first ruined cities. Levels 5–8.",
f:[["Depth","1–4 km"],["Levels","5–8"],["Light","Living bioluminescence"]]},

{i:"mid",l:"The Mid Reaches",t:"place",b:"mid",s:"locked",src:"Established Canon",
d:"4–12 km. Beyond any map. The great dead civilizations, the first Weftway nodes, and the hot band that drives the whole ventilation system. Somewhere in here the thermal gradient reverses. Levels 9–12.",
f:[["Depth","4–12 km"],["Levels","9–12"],["Light","Engineered — the dead's working lamps"],["Note","The gradient reverses here"]]},

{i:"under",l:"The Under Deeps",t:"place",b:"under",s:"locked",src:"Established Canon",
d:"12–40 km. Below the crust as anyone understands it. Insectoid heartland, and a darkness that ordinary darkvision simply fails against. Levels 13–16.",
f:[["Depth","12–40 km"],["Levels","13–16"],["Light","Mineral, anomalous, wrong-coloured"]]},

{i:"root",l:"The Root",t:"place",b:"root",s:"locked",src:"Established Canon",
d:"40 km and down. The coldest place in the world, and the floor of it is the Underglass. No light at all. Levels 17–20.",
f:[["Depth","40 km+"],["Levels","17–20"],["Light","None"],["Air","Dense, pooled, does not circulate"]]},

// ---------- UNDERTEAR ANATOMY ----------
{i:"lip",l:"The Lip",t:"place",b:"threshold",s:"locked",src:"Established Canon",
d:"The surface rim, and the only settlement an Undertear gets. Winch-towers, scaffold, tolls, and — at the Fallwater — permanent fog. Whoever holds the Lip controls descent.",
f:[["Population (Fallwater)","~400"],["Holds it","The Undertear Compact"]]},

{i:"throat",l:"The Throat",t:"place",b:"threshold",s:"locked",src:"Established Canon",
d:"The vertical shaft. Clean and largely uninterrupted from the Lip toward the Root, pierced at intervals by Mouths. On the order of forty kilometres across — the far wall is a smudge on the horizon in clear air, and the shaft holds its own weather. A permanent wind runs through it, and it squalls. Its top few hundred metres cut cleanly through the Floor, so the upper wall reads as banded stone — ash courses, flattened timber, occasionally masonry in cross-section.",
f:[["Length","Tens of km"],["Width","~40 km across"],["Interruptions","Mouths only — no shelf"],["Descent","Engineered lift only — nobody climbs an Undertear"],["Upper wall","The Floor in cross-section; surveyors use the banding as a depth reference"]]},

{i:"mouths",l:"The Mouths",t:"place",s:"locked",src:"Established Canon",
d:"Where the Throat's fall happens to intersect a pre-existing cave system — severed passages ranging from crawlspaces to openings wide enough to sail a barge through. Each major Mouth opens onto a cluster of connected sites.",
f:[["Size range","Crawlspace to barge-width"],["Function","Every POI cluster hangs off one"]]},

{i:"verge",l:"The Verge",t:"place",s:"locked",src:"Established Canon",
d:"The edge of whatever has been surveyed, wherever that happens to stop. Not a place so much as a moving line on a map — and it moves as the breathable frontier does.",
f:[["Meaning","Where the map ends"]]},

{i:"shelf",l:"The Shelf",t:"place",s:"retired",src:"History — session 13",
d:"<strong>Retired.</strong> Originally a widening partway down the shaft where a second colony could stand. Cut because you want a clean shaft top to bottom, with at most a small encampment in a Mouth — never a second town. Anatomy went from five parts to four.",
f:[["Retired","Session 13"],["Knock-on","Adventure 01's inversion clue rebuilt"],["Knock-on","Map 2 moved to the Lip settlement"]]},

// ---------- PHYSICS & ENVIRONMENT ----------
{i:"standing-draft",l:"The Standing Draft",t:"hazard",s:"proposed",src:"Gameplay",
d:"Every Throat and most major tunnels carry a permanent wind — the planet breathing through twenty new chimneys. Ambient rather than a hazard: it applies constantly and shapes how parties plan. Some Undertears exhale, some inhale, and direction can flip seasonally.",
f:[["Against the draft","Difficult terrain (greater, in a Throat)"],["Ranged attacks","−2 (−4 in a Throat)"],["Hearing","−2 circumstance"],["Open flame","DC 15 flat check/round (DC 20 in a Throat)"],["Scent tracking","Doubled downwind, impossible upwind"]]},

{i:"damps",l:"Blackdamp, Firedamp, Stinkdamp, Whitedamp",t:"hazard",s:"proposed",src:"Gameplay",
d:"Real miner's vocabulary for bad air, adopted wholesale. Blackdamp is oxygen-depleted and suffocating; firedamp is methane and explosive; stinkdamp is hydrogen sulfide, which deadens your sense of smell before it kills you; whitedamp is carbon monoxide and gives no warning at all.",
f:[["Before the Weeping","Most of the deep was unbreathable"],["Now","Twenty chimneys, and the planet is ventilating"]]},

{i:"breathable-frontier",l:"The Breathable Frontier",t:"phenomenon",s:"proposed",src:"Gameplay / Proposed Canon",
d:"A moving boundary between air you can breathe and air you can't, pushing deeper every month as the Undertears ventilate the deep. Beyond it, air is a resource you carry. A depth gate that isn't arbitrary.",
f:[["Direction","Advancing deeper"],["Effect","Natural, non-arbitrary depth gating"]]},

{i:"light-by-band",l:"Light by Band",t:"mechanic",s:"locked",src:"Established Canon",
d:"Light must have a source you can lose. Sunlight in the Threshold, bioluminescence in the Shallows, the dead civilizations' still-working lamps in the Mid Reaches, mineral and wrong-coloured light in the Under Deeps, and nothing at the Root.",
f:[["Threshold","Real sun"],["Shallows","Living light — it can be farmed, and it goes out when frightened"],["Mid Reaches","You read by something's grave goods"],["Under Deeps","Dark that behaves like a substance"]]},

{i:"unlit",l:"The Unlit",t:"hazard",b:"under",s:"planned",src:"Gameplay → Planned",
d:"Rules, not yet written, for dark that darkvision does not penetrate. Announced at session zero rather than sprung as a gotcha — it re-levels the party at depth without nerfing anyone's ancestry choice.",
f:[["Status","Catalogued, not built"],["Open","Does it interact with magical light? Is it older than the Root Entity?"]]},

{i:"fungal-calendar",l:"The Fungal Calendar",t:"phenomenon",s:"locked",src:"Established Canon",
d:"Peoples who predate the Weeping time their lives by the blooming cycles of a light-emitting fungus rather than any surface calendar. No colonist knows the system exists. It's a discovery the players earn, not a fact they're told.",
f:[["Known to colonists","No"],["Open","The cycle's exact period"]]},

{i:"time-underground",l:"Expedition Drift",t:"phenomenon",s:"locked",src:"Established Canon",
d:"Without light cues, human circadian rhythm free-runs long. Parties return from long delves having lost days and arguing about the date. Real precedent: Michel Siffre lost roughly twenty-five days of count in a cave.",
f:[["No generational drift","Two months is too short — no deep-born yet"]]},

{i:"river-drainage",l:"The Rivers Found Them",t:"phenomenon",s:"locked",src:"Established Canon",
d:"Where an Undertear opened near a watershed, the river now pours into the ground. Downstream: dead farmland, refugees, war over the water that remains. The surface has dammed what it could, unevenly — which divides the world into nations that were saved and nations that were ruined.",
f:[["Best image","A river falling into the earth, lit by a shaft of daylight"],["Politics","The dams are your political map"],["Open","How were they built so fast?"]]},

// ---------- ERAS ----------
{i:"era-stack",l:"The Era Stack",t:"era",s:"locked",src:"Established Canon",
d:"The dead as stratigraphy — four eras physically layered, deepest oldest: the Builders, the Sunfled, the Sealing Era, the Aftermath. A player who learns to read building styles can date a ruin at a glance, so the megadungeon teaches history through architecture. The stratification itself is a consequence of the Burial Ages: kilometres of stacked cycles, each sealing what the one before it left.",
f:[["Order","Builders → Sunfled → Sealing → Aftermath"],["Established","The stack itself, and that it is physically stratified"],["Why stratified","Stacked Burial Ages, each a few hundred metres"],["Still open","What each era actually was"],["The gap","Nothing accounts for how anyone left the deep after the sealing"]]},

{i:"builders",l:"The Builders",t:"era",b:"root",s:"open",src:"Proposed Canon",
d:"Deepest and oldest. Pre-human, non-humanoid architecture: scale wrong, doorways wrong, no stairs. Nobody knows what they were. The Hollow Spire may be theirs.",
f:[["Depth","Root / Under Deeps"],["Held in reserve","Mi-go as a sourcing option"]]},

{i:"sunfled",l:"The Sunfled",t:"era",b:"shallows",s:"open",src:"Proposed Canon",
d:"Peoples who could not bear the sun and went down while the ways were open. Their cities are <em>recognisably civilized</em> — plazas, temples, drainage, portrait statuary — which makes them the most haunting ruins, because they look like home.",
f:[["Sites","The Drowned City, The First Landing"],["Open","Are any still alive?"]]},

{i:"sealing-era",l:"The Sealing Era",t:"era",b:"shallows",s:"parked",src:"Proposed Canon",
d:"Whatever closed the ways. Fortifications, mass graves, enormous doors barred from above. The central historical mystery — and deliberately unanswered, because the answer determines whether the Undertears are a tragedy, an escape, or a repetition.",
f:[["Status","Parked by decision, not forgotten"],["Candidates","War · plague · quarantine · the insectoids · something got out"]]},

{i:"aftermath",l:"The Aftermath",t:"era",b:"shallows",s:"open",src:"Proposed Canon",
d:"Isolated survivors of the sealing. Small, changed, some still alive down there and very surprised to see you. The Hushed are theirs; so are the Silt Terraces and the Undersong Cairns — and, though nobody on the surface knows it, so are Corrach-Nom's dwarves and gnomes.",
f:[["Living descendants","The Hushed"],["Sites","Silt Terraces, Undersong Cairns"],["GM only","Corrach-Nom came up out of this"]]},

{i:"the-trapped",l:"The Trapped",t:"era",b:"threshold",s:"proposed",src:"Points of Interest",
d:"Not the Sunfled, who chose to descend — ordinary surface folk caught on the wrong side when the ways closed. They built the Lantern Reach across generations, organised every stone around the management of light, and then ran out of it.",
f:[["Sites","Lantern Warren, Sunken Cathedral, The Chandelier"],["Arc","Craft declines with depth into their own settlement"]]},

// ---------- THE FALLWATER ----------
{i:"fallwater",l:"The Fallwater",t:"place",b:"threshold",s:"locked",src:"Established Canon",
d:"The home Undertear. Compact records designate it only by number; everyone who lives there names it after the river pouring through its Throat. The watershed above it lies inside Velmack, which governs it in fact as well as in name. The three factions here are not outsiders filling a vacuum — each has its own reason to be present, and Velmack's consent.",
f:[["Draft","Exhaling"],["Population","~400 at the Lip"],["Governed by","Velmack — in fact, not nominally"],["Factions present","All three, by their own interest"],["Valley","The Floor runs 300 m+ beneath it"]]},

{i:"winch-towers",l:"The Winch-Heads",t:"place",b:"threshold",s:"proposed",src:"Adventure 01",
d:"The Compact's descent infrastructure at the Lip, and the chokepoint that makes holding the Lip mean something. Also where the sickness clusters worst, because the Throat's exhaust hits hardest here.",
f:[["Controlled by","The Undertear Compact"],["Worked by","Bett Orrow"]]},

{i:"vanishing-waterfall",l:"The Vanishing Waterfall",t:"phenomenon",b:"threshold",s:"locked",src:"Gameplay",
d:"Water falling down the Throat shreds into droplets and hits terminal velocity within the first 100–200 metres, meets the rising warm updraft head-on, stalls, and evaporates into it. The vapour climbs, cools, and condenses as the permanent fog over the Lip. The river doesn't reach the deep — part of it turns around and rains on the people who dammed it.",
f:[["Real anchor","Angel Falls in the dry season"],["Read aloud","First time the party looks down the Throat"],["Consequence","The Lip's permanent fog"]]},

{i:"frost-veil",l:"The Frost Veil",t:"phenomenon",b:"mid",s:"open",src:"Gameplay",
d:"At the exact boundary where the hot Mid Reaches meets the cold Under Deeps, any humidity that survived the hot band hits its dew point and crystallizes in open air — a curtain of falling ice hanging at the gradient reversal itself. Nobody but the insectoids has ever reached it.",
f:[["Function","Signals genuinely hostile depth"],["Contrast","The opposite of the Vanishing Waterfall's melancholy fog"],["Status","Awaiting your review"]]},

{i:"downdraft-furnace",l:"The Downdraft Furnace",t:"phenomenon",s:"open",src:"Gameplay",
d:"The mirror case, for inhaling Undertears. Air pulled down a shaft compresses as it descends, and compression heats gas — so an inhaling Undertear can run unexpectedly hot partway down, even above the naturally hot Mid Reaches.",
f:[["Applies to","Inhaling Undertears — not the Fallwater"],["Status","Awaiting your review"]]},

// ---------- CLUSTERS ----------
{i:"c-shaft",l:"Cluster A — On the Shaft",t:"place",b:"threshold",s:"proposed",src:"Points of Interest",
d:"0–300 m. Visible from the descent lines. Everyone who goes down passes these three, which makes them the campaign's default first contact with the deep.",
f:[["Depth","0–300 m"],["Sites","3"]]},

{i:"c-sunward",l:"Cluster B — The Sunward Mouths",t:"place",b:"threshold",s:"proposed",src:"Points of Interest",
d:"~450 m. A branch trending upward and outward toward the surface. Daylight reaches parts of it. The only cluster in the Undermarch where anything is pleasant.",
f:[["Depth","~430–470 m"],["Sites","3"]]},

{i:"c-lantern",l:"Cluster C — The Lantern Reach",t:"place",b:"threshold",s:"proposed",src:"Points of Interest",
d:"~700–750 m. The largest Threshold cluster and the historical heart of the upper band — everything the Trapped built, and everything that happened to them afterward.",
f:[["Depth","~700–750 m"],["Sites","3"],["Builders","The Trapped"]]},

{i:"c-deepthresh",l:"Cluster D — The Deep Threshold",t:"place",b:"threshold",s:"proposed",src:"Points of Interest",
d:"800 m–1 km. The caves get older and less human. The last band before the Shallows.",
f:[["Depth","800 m–1 km"],["Sites","2"]]},

{i:"c-fungal",l:"Cluster E — The Fungal Belt",t:"place",b:"shallows",s:"proposed",src:"Points of Interest",
d:"1–2 km. The Shallows begin. Bioluminescence replaces carried light and the ecology becomes genuinely alien.",
f:[["Depth","1–2 km"],["Sites","5"]]},

{i:"c-drowned",l:"Cluster F — The Drowned Quarter",t:"place",b:"shallows",s:"proposed",src:"Points of Interest",
d:"2–3 km. Where the Weir runs. The Sunfled built here, and the water took part of it back.",
f:[["Depth","2–3 km"],["Sites","3"]]},

{i:"c-warm",l:"Cluster G — The Warm Reaches",t:"place",b:"shallows",s:"proposed",src:"Points of Interest",
d:"3–4 km. The Mid Reaches approach. Heat becomes a presence rather than a background condition, and the first evidence of the campaign's real antagonist appears.",
f:[["Depth","3–4 km"],["Sites","3"]]},

// ---------- POINTS OF INTEREST ----------
{i:"weeping-scar",l:"The Weeping Scar",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A vertical band of shaft wall where the ritual's compression went wrong — stone twisted and glassy, folded into shapes that look poured rather than broken. Still faintly warm two months on, and the warmth doesn't diminish with depth into the rock. Pitons won't hold: the rock crazes and lets go within the hour.",
f:[["Depth","0–200 m, shaft wall"],["Level","1–3"],["Scale","A set piece, not a dungeon"],["Time","Half a session"],["The turn","Nothing attacks. The reward is entirely informational."]]},

{i:"drowned-chapel",l:"The Drowned Chapel",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest / Adventure 01",
d:"A rim village chapel, sheared off by the Weeping and jammed sideways into a Mouth at thirty degrees. The congregation was mid-service. Everything loose has migrated to the low corner — hymnals, candlesticks, coins, and forty-one people. Condensation runs down every wall and drains out through a crack, which is why what happens in this room does not stay in this room.",
f:[["Depth","~40 m"],["Level","1–2"],["Scale","Small — nave, sacristy, altar-breach"],["Terrain","The tilt: uphill is difficult terrain, prone creatures slide"],["The twist","The sacristy was sealed from the inside"]]},

{i:"catchbasin",l:"The Catchbasin",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A natural rock bowl the size of a village square, fed by a constant heavy drip out of the darkness above that never stops and never quite becomes rain. The sound is enormous and unvarying; people who work here a season go partially deaf and learn to read lips. Its overflow is where the Fallwater's water stops falling and starts going somewhere.",
f:[["Depth","~300 m"],["Level","Any — it's a crossroads"],["Scale","A hub: one chamber, three exits"],["Mechanics","−4 to hearing-based Perception; Stealth trivial in both directions"],["Not","The colony's water source — see History"]]},

{i:"skywell",l:"The Skywell",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A cavern with a genuine sinkhole open to the sky — a natural doline, nothing to do with the Weeping. Real sunlight falls in a shifting column onto a floor thick with green, and birds nest on the ledges. For a party that has been in the dark, arriving here produces a physical reaction. That is the point of the room.",
f:[["Depth","~450 m"],["Level","1–4"],["Scale","Medium — great chamber, ledges, sinkhole climb"],["Structure","Social and territorial, not combat-first"],["The turn","Give it away to someone else first. Somebody is always already here."]]},

{i:"barred-way",l:"The Barred Way",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A passage whose floor is worn smooth by generations of foot traffic. This was a road, and it went to the surface. The blockage fills it floor to ceiling: collapsed ceiling stone and unmistakably worked masonry, thoroughly intermixed. Which came first cannot be determined, and that matters enormously.",
f:[["Depth","~430 m"],["Level","Any"],["Structure","An investigation with no solution"],["Mechanics","Crafting, Society, Lore — reward good rolls with better ambiguity"],["The turn","Do not resolve this."]]},

{i:"whistling-galleries",l:"The Whistling Galleries",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A warren of narrow interconnected tubes running a kilometre or more through the rock. The standing draft moves through all of them at once and the whole system <em>sounds</em> — a continuous shifting chord. Colonists navigate it by ear; getting lost is a matter of losing the tune.",
f:[["Depth","~580 m"],["Level","2–4"],["Structure","A navigation puzzle where the solution is auditory"],["Value","The chord sours minutes before a squall — the Fallwater's only storm warning"],["Hazard","Infrasound: Fortitude each hour or fatigued"]]},

{i:"lantern-warren",l:"The Lantern Warren",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A settlement carved across generations, every aspect of its architecture organised around one problem: light. Polished mineral inlay to bounce flame, channels cut to carry glow between chambers, thousands of lamp niches. Move inward and the workmanship declines — the polish stops, the niches become gouges. In the deepest chambers there are no niches at all.",
f:[["Depth","~700 m"],["Level","2–4"],["Scale","Large — thirty-plus chambers, two to four sessions"],["Structure","Concentric. The dungeon is a timeline you walk through."],["The rule","The dead cluster where light falls and won't enter unlit rooms"],["The turn","A chamber where the dead stand in total darkness, waiting"]]},

{i:"sunken-cathedral",l:"The Sunken Cathedral",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"An enormous vaulted nave cut from living rock, its pillars carved to resemble trees nobody in the third generation had ever seen. A cathedral built underground to worship the sun. The great rose window is carved into solid stone with nothing behind it — a picture of a window.",
f:[["Depth","~700 m"],["Level","3–4 above; the crypt anywhere"],["Scale","Large — nave, transepts, apse, bell chamber, sealed crypt"],["The content","Iconography degrading across the building's timeline"],["The last carving","A burning eye in a vault of stone, fed by worshippers holding lamps"],["The turn","The crypt's seal was made from the inside"]]},

{i:"chandelier",l:"The Chandelier",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A gypsum chamber where crystal formations hang in masses metres across, grown over hundreds of thousands of years. Beams the width of a body, translucent, catching and splitting any light brought in. Every surface is a blade, and the acoustics are catastrophic — a shout brings down several tonnes of ceiling as a thousand pieces of glass.",
f:[["Depth","~750 m"],["Level","2–5"],["Scale","Small — one chamber, but a lethal one"],["Real precedent","Naica, Mexico"],["Mechanics","Noise is the trap"],["The turn","Combat here is a mistake, realised one round too late"]]},

{i:"hollow-spire",l:"The Hollow Spire",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A tower built <em>down</em> the inside of a natural vertical shaft — floor after floor cut into the rock wall around a central void, connected by a railless spiral descending some two hundred metres. Its builder was neither Sunfled nor Trapped; the proportions are slightly too tall, the doorways the wrong shape without being obviously inhuman.",
f:[["Depth","~850 m"],["Level","3–5"],["Scale","Large — twelve-plus floors, two to three sessions"],["Upper floors","Observation: instruments aimed upward and outward"],["Lower floors","Containment"],["The turn","The Spire was built to watch for something. It is still watching."]]},

{i:"silk-deeps",l:"The Silk Deeps",t:"poi",b:"threshold",s:"proposed",src:"Points of Interest",
d:"A cave system given over entirely to an arachnid ecology that has had a very long time to develop without interference. Sheet webs layered dozens deep until the floor is a metre of compacted silk. The web architecture is navigable if you understand it — load-bearing lines and trap lines, and the difference is visible to anyone who looks.",
f:[["Depth","~900 m"],["Level","3–5"],["Structure","Stealth-forward, or a gauntlet if the party is loud"],["No lore","Sometimes a place should just be dangerous"],["The turn","Some of the wrapped bundles are alive, and one is worth talking to"]]},

{i:"cinderspore",l:"The Cinderspore Reach",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest / Gameplay",
d:"A vast cultivated bioluminescent grove — the first significant renewable food and medicine source found near the Fallwater, and therefore contested by all three factions. Environmental-hazard-forward rather than monster-forward: spore clouds moved by the standing draft, unstable fungal terraces, a Blackdamp Pocket in the lowest hollow.",
f:[["Depth","~1.2 km"],["Level","2–5, scalable"],["Scale","Large — a region, not a room"],["Structure","Faction negotiation over a resource, hazards as terrain"],["Buried in a terrace","A tool matching no known culture"],["Now","Dying at the fringe — see Adventure 02"]]},

{i:"fungal-canopy",l:"The Fungal Canopy",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"What the Cinderspore Reach would be if nobody managed it. Growths twenty metres and more forming a genuine canopy, with competing bioluminescent colours beneath: cold blue, sickly green, and a deep red that is rarer and always means something. Compass sense fails. People walk in circles here for hours without realising.",
f:[["Depth","~1.5 km"],["Level","4–7"],["Scale","Very large — a wilderness region, days across"],["Structure","Hexploration-style travel region"],["The turn","A region where the avoidance patterns describe something the apex predator avoids"]]},

{i:"mycelial-nave",l:"The Mycelial Nave",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"Not a forest. One organism. A single fungal individual whose fruiting bodies have grown into and around the cave until the architecture <em>is</em> the creature — ribbed vaults of pale flesh, a floor that is soft and warm and yields underfoot. It is the largest single living thing anyone in this world has encountered.",
f:[["Depth","~1.8 km"],["Level","4–6"],["Real precedent","Armillaria colonies spanning square miles"],["Mechanics","A disturbance counter — the organism is the dungeon's clock"],["The turn","A chamber that is deliberately shaped. Recently. Not by the Sounding Line."]]},

{i:"silt-terraces",l:"The Silt Terraces",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"Abandoned Aftermath cultivation: stepped terraces once irrigated by a channel that no longer runs. Tools lie where they were set down, dwellings stand roofed and empty, hearths cold and swept. Nothing violent happened here — no bodies, no struggle, no barricades. People simply stopped.",
f:[["Depth","~1.9 km"],["Level","3–5"],["Structure","Investigation and environmental storytelling; low combat by design"],["The thread","Follow the dry channel upstream"],["The turn","The water was diverted deliberately, by something that understood irrigation well enough to break it precisely"]]},

{i:"undersong-cairns",l:"The Undersong Cairns",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest / Adventure 02",
d:"A cavern where the dead are laid beneath cultivated fungal beds — because to whoever built this, a body is a seedbed and burial is planting. The pattern runs opposite to the Lantern Warren's: the cairns near the entrance are dead and collapsed, and the further in you go the brighter they get, until you reach mounds that are days old.",
f:[["Depth","~1.95 km"],["Level","3–4"],["Structure","Linear — but progress here means hope, not decline"],["Mechanics","Religion/Society DC 15; Medicine/Nature DC 16 to date a cairn; Survival DC 17"],["The anomaly","An ancient ward, and beneath it a fragment that has failed to rot"],["The turn","Someone arrives to tend a grave"]]},

{i:"weir",l:"The Weir",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"A genuine underground river — wide, slow, cold, running horizontally through the Shallows for an unknown distance in both directions. After the vertical drama of the Throat, its horizontality is disorienting. It is navigable by boat, and that single fact changes the entire texture of travel in this band.",
f:[["Depth","~2.2 km"],["Level","Any"],["Function","The spine of Shallows movement"],["Chokepoint","Whoever holds a landing controls a great deal"],["The turn","Followed far enough, it leaves the region the Fallwater can reach"]]},

{i:"drowned-city",l:"The Drowned City",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"A substantial Sunfled settlement — thousands lived here — now partially submerged where the Weir's course shifted. Colonnades stand in water to their capitals; an amphitheatre is flooded to the third tier. The statuary is of people, with individual faces, in a style that is recognisably civilised. That is precisely what makes it unsettling.",
f:[["Depth","~2.4 km"],["Level","5–8"],["Scale","Very large — run it in sections"],["Structure","Dry upper level; flooded lower level gated behind water access"],["Horror device","The water is very clear"],["The turn","They lived with the flooding for generations, then left anyway"]]},

{i:"first-landing",l:"The First Landing",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"The earliest Sunfled burial ground — shallow niches cut into a cave wall with poor tools by people in a hurry. Minimal grave goods, no inscriptions in the earliest section. These are the burials of refugees, not citizens, and the contrast with the Drowned City's statuary is the entire point.",
f:[["Depth","~2.1 km"],["Level","3–5"],["Structure","Linear and chronological — walking the wall is reading the history"],["The turn","The earliest graves all face upward. They expected to go back."]]},

{i:"ember-shrine",l:"The Ember Shrine",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"A temple built directly onto a thermal vent, its concentric chambers radiating outward: innermost too hot to enter and glazed by centuries of exposure, then survivable in bursts, then comfortable, then merely warm. Whoever built it worshipped warmth explicitly and without metaphor. There is no sun imagery anywhere.",
f:[["Depth","~3.3 km"],["Level","5–7"],["Scale","Medium — concentric rings, ~15 chambers"],["Mechanics","Heat as the gate: progress inward is progress toward damage"],["The turn","The vent is cooling. The glazing stops partway up the wall."],["Significance","The first physical evidence of the inverted gradient anyone can stand in"]]},

{i:"mudflats",l:"The Mudflats",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"Geothermal activity intensifying as the Mid Reaches approach. Geysers on unpredictable schedules, mudpots that belch and settle, scalding pools with mineral terracing coloured by bacteria. Ground that gives no warning before it stops being solid. The safe routes exist, but they shift, and last season's markers are worse than useless.",
f:[["Depth","~3.6 km"],["Level","4–7"],["Scale","A crossing, not a place"],["Function","A filter keeping the unprepared out of the deep Shallows"],["The turn","Something crosses this regularly, and it doesn't use the safe routes"]]},

{i:"regular-passage",l:"The Regular Passage",t:"poi",b:"shallows",s:"proposed",src:"Points of Interest",
d:"A tunnel that is wrong. Perfectly consistent bore for kilometres, no natural jointing, no water-carving, flat floor, walls meeting the ceiling at a consistent radius. It curves occasionally and the curves have intent — they avoid unstable strata and water tables, which means whoever cut this knew what was there before they cut. And sections show repair done in the last few years.",
f:[["Depth","~3.8 km"],["Level","5+ to reach"],["Scale","Unbounded — a corridor without a known end"],["What it is","A Weftway spur"],["The realisation","Ancient tunnel, recent maintenance"],["Significance","Rung 3. Everything before this is deniable. This is not."]]},

{i:"hushed-undersong",l:"The Hushed of the Undersong",t:"poi",b:"shallows",s:"proposed",src:"Gameplay",
d:"The Hushed settlement itself, a day or two past the Verge in a side-passage newly ventilated by the Weeping. Narrow galleries, browning fungus terraces, and generations-old traps built against something they call only \"the old fear.\" A settlement site, not a combat gauntlet.",
f:[["Level","3–4"],["Structure","Negotiation, not a gauntlet"],["The cruelty","The air that let you find them is killing their food"],["Status","The chapter after Adventure 02 — not yet written"]]},

// ---------- FACTIONS ----------
{i:"sounding-line",l:"The Sounding Line",t:"faction",s:"locked",src:"Established Canon",
d:"Scholars, engineers, spelunkers and alchemists organised to survey the Undermarch: what caused the Weeping, whether it can happen again, what the Undertears connect to. It draws its people from every nation on the planet, and at any given Undertear the host nation's scholars outnumber the rest — the Line at the Fallwater is mostly Velmack's, the Line in Obun mostly Corrach-Nom's. Chronically understaffed, so it sponsors expeditions rather than fielding them — buying survey data, specimens and reports from anyone willing to sell. Two goods have become universal below ground: sounding lanterns, which burn without fuel and lean toward the nearest way to the surface, and Line cable, which does not part under load. The cable is the Line's own work and has never been shared. The lanterns are not the Line's at all.",
f:[["Scope","Global — present at most Undertears"],["Staffed by","Every nation; the host nation predominates at any given Undertear"],["Universal goods","Sounding lanterns (Corrach-Nom's) and Line cable (the Line's own)"],["Internal divide","Publish openly vs. withhold"],["Already withheld","At least one discovery judged too dangerous"],["Understood by everyone","Governments read what their own citizens send home"],["Has no origin story yet","Where and when it was founded is unbuilt"]]},

{i:"cautious-circle",l:"The Line's Cautious Circle",t:"faction",s:"proposed",src:"Established Canon / Adventure 01",
d:"The faction inside the faction: researchers who have decided some findings are too dangerous to publish. They have already suppressed at least one discovery, and Ashfeld's report on the First Sign quietly fails to be logged.",
f:[["Method","Reports that don't get logged"],["First brush","Adventure 01's resolution"]]},

{i:"compact",l:"The Undertear Compact",t:"faction",s:"locked",src:"Established Canon",
d:"A multinational agreement placing soldiers from rival nations under joint command at Undertear frontiers, formed to stop any single power seizing the openings. Founded at Xynnar, in Velmack — which remains a live grievance, since every other Kethali nation signed away unilateral control of its own openings in a building in Velmack's capital, and Velmack governs the Fallwater in fact all the same. Nations ruined by the floods pushed hardest for it; nations that finished their dams joined reluctantly. In practice an uneasy coalition — contingents distrust each other and home governments issue contradictory orders behind its back.",
f:[["Scope","Global"],["Founded at","Xynnar, in Velmack"],["Holds","The Lip and descent"],["Public position","The Undertears were dug, deliberately — prepare for what climbs out"],["Quiet second purpose","Nobody gets rich off an Undertear without Compact approval"],["Institutional reflex","Read any anomaly as a rival nation's doing"],["Open","Whether its permanent seat stayed at Xynnar or moved to neutral ground"]]},

{i:"vigil",l:"The Vigil of the Weeping",t:"faction",s:"locked",src:"Established Canon",
d:"An old fringe religious order with chapter-houses predating the Weeping, now reading the event as confirmation of doctrine it already held. Declared heretical by the mainstream Church. It provides medicine and burial rites wherever it holds ground, and its scholars catalogue deep anomalies more thoroughly than anyone — understanding few of them. Vigil texts described an opening of the deep before the Weeping happened, in terms specific enough that dismissing the match has become awkward, and the order has grown enormously in the two months since.",
f:[["Scope","Global"],["Doctrine","The Weeping was a herald — a god rising from below, to be met not fought"],["Why it grew","It appears to have called the event in advance"],["Soft power","Medicine and rites where death is common"],["Role","The delivery mechanism for the inverted-gradient discovery"]]},

{i:"deep-choir",l:"The Insectoids (\"the Deep Choir\")",t:"faction",b:"under",s:"open",src:"Established / Proposed Canon",
d:"A genuine civilization of insectoid mages — castes, internal politics, dissent, art — not a mindless hive. They tore the Undertears open in one irreversible ritual, expecting a lethal but empty surface. They found farms, roads and cities in what their people believe is a death-world, and are now improvising an army they never had.",
f:[["They knew the period","Burial Ages were expected and planned around"],["The actual catastrophe","The Stillness failing, not the draw"],["Name","Placeholder only — deliberately not committed to"],["Species basis","Formian castes + Thriae magical culture (proposed)"],["Diet","Fungus-farmers — the deep mushroom forests are their agriculture"],["Their flaw","They never scouted before an irreversible commitment"]]},

{i:"hushed",l:"The Hushed",t:"faction",b:"shallows",s:"proposed",src:"Gameplay",
d:"Isolated survivors descended from the Sealing Era, cut off long enough to believe they were the last people in the world. Pale, sensitive-eyed, sustained for generations on cultivated fungus and mineral light. Not hostile — a people to negotiate with, not fight. The same air currents that let you find them are killing their food.",
f:[["Descended from","The Aftermath"],["They call it","\"The old fear\""],["First contact","Adventure 02, at the Undersong Cairns"]]},

{i:"concord",l:"The Concord Company",t:"faction",s:"retired",src:"History — session 10",
d:"<strong>Retired.</strong> A merchant charter that funded the region's dam in exchange for exclusive descent rights and tolled everything. Cut because it read as generic and its central motive was an indirect causal chain rather than a graspable reason — and because a Fallwater-only faction meant rebuilding reputation from zero at every new site.",
f:[["Replaced by","The Undertear Compact"],["Retired","Session 10"],["Still referenced by","Vane, Vance, hooks A and E"]]},

{i:"commons",l:"The Commons of the Fallwater",t:"faction",s:"retired",src:"History — session 10",
d:"<strong>Retired.</strong> Refugees and locals self-organised under Sella Marrow, running smuggled rope-routes beneath the toll system. Cut alongside Concord in the same move to global factions.",
f:[["Replaced by","The Sounding Line"],["Retired","Session 10"],["Splinter","The Undertow"]]},

{i:"undertow",l:"The Undertow",t:"faction",s:"retired",src:"History — session 10",
d:"<strong>Retired.</strong> The Commons' hardline splinter, which wanted to burn the toll tower outright rather than negotiate. Retired with its parent faction — though the structural idea (a militant wing the moderate leader is barely holding) is worth re-homing in one of the global factions.",
f:[["Retired","Session 10"],["Worth keeping","The structure, not the name"]]},

// ---------- NPCs ----------
{i:"reyne",l:"Sergeant Halvard Reyne",t:"npc",s:"proposed",src:"Adventure 01",
d:"Fifties, grey-stubbled, wearing a Compact surcoat over mail that doesn't match it — his own nation's kit under coalition colours, which is true of everyone here and bothers him more than he admits. Formal to the point of stiffness. Writes everything down.",
f:[["Faction","Undertear Compact"],["Wants","The cause found and stopped. Doesn't care what it is."],["Withholds","Why the contract says report to the Compact exclusively — he doesn't know either"],["If pushed","Diplomacy DC 18"]]},

{i:"cotter",l:"Warden Ilse Cotter",t:"npc",s:"proposed",src:"Adventure 01",
d:"Thirties, four days without sleep and visibly past the point where that's still functional. Wet cloth mask pushed down around her neck because it never helped. Asks rather than hires, and is not embarrassed about having no money. The most straightforward person in the adventure.",
f:[["Faction","Vigil of the Weeping"],["Wants","The cause stopped <em>and</em> the dead given rites. Both."],["Leverage","Her regard is worth more later than the Compact's fee is now"]]},

{i:"ashfeld",l:"Surveyor Nen Ashfeld",t:"npc",s:"proposed",src:"Adventure 01",
d:"Twenties, ink-stained, carrying more equipment than she can comfortably manage. Fast-talking, genuinely excited by a problem, tactless about the fact that people are dying while she finds it interesting. Her commission is unauthorised and she is paying from her own stipend.",
f:[["Faction","The Sounding Line"],["Wants","Data first, solving it second — and she'll say so out loud"],["Her thesis","It's not in the water. It comes up from below."],["After","Her report on the mark quietly fails to be logged"]]},

{i:"orrow",l:"Winch-hand Bett Orrow",t:"npc",s:"proposed",src:"Adventure 01",
d:"Works the winch-heads and knows the shaft face better than anyone at the Lip because she looks at it all day. Can be hired as a rigger for 2 gp — she signs the gear out on her own name and is liable for it. She rigs the traverse; she does not enter the chapel.",
f:[["Role","Local knowledge, the ungated clue"],["Knows","The chapel by sight, and that nobody has been inside"],["Design","The adventure never gates on a roll — she just tells them"]]},

{i:"chapel-survivors",l:"The Three from the Sacristy",t:"npc",s:"proposed",src:"Adventure 01",
d:"Three of the congregation survived the fall, barricaded themselves into the sacristy, and counted thirty-one days on the plaster. Then they left through the altar-breach deliberately, taking the lamp oil, and made a camp four hundred metres in. Then something came, and they are gone, and the lamp oil is still sitting by the cold fire.",
f:[["Status","Missing — deliberately unexplained"],["Evidence","Three sets of bedding; the count stops at 31"],["Why it works","They were alive and managing. That's a rescue the party can still attempt."],["Where the answer is","Deeper"]]},

{i:"grave-tender",l:"The Grave-Tender",t:"npc",b:"shallows",s:"proposed",src:"Adventure 02",
d:"Pale, thin, carrying a bundle of fungal cuttings wrapped in wet cloth against their chest. Eyes wrong for this light — pupils blown huge by darkness they've never had to leave. Unarmed but for a small bone tool, and reacts to threat with flight rather than violence. The party's first action decides the scene.",
f:[["People","The Hushed"],["Encounter","Social. Never combat by default."],["Success","Diplomacy DC 18, without shared language — posture, not words"],["On success","No conversation. But an exchange, if the party offers rather than takes."]]},

{i:"ashgrove",l:"Elder Cael Fenn",t:"npc",s:"proposed",src:"Gameplay",
d:"Leader of the Vigil of the Weeping. Isolated by the heresy declaration, and therefore willing to cut uncomfortable deals for protection. Provides medicine and burial rites — real soft power where death is common. (Renamed from Warden Cael Ashgrove to avoid clashing with Surveyor Nen Ashfeld; Warden is the Vigil's ordinary rank, so the order's head needed a different title.)",
f:[["Faction","Vigil of the Weeping"],["Rank","Elder — Warden is the ordinary rank"],["Hook","His scholars catalogue anomalies obsessively and understand almost none of them"],["Function","How the party can learn about the inverted gradient in fiction"]]},

{i:"sarn",l:"\"Ninefinger\" Sarn",t:"npc",s:"proposed",src:"Gameplay",
d:"Independent guide, unaffiliated. Went deeper than anyone, early, and lost fingers to frostbite somewhere that should have been getting <em>hotter</em>. Doesn't know why. Trusts nobody's authority but his own experience.",
f:[["Faction","None — and that's the point"],["Hook","A living, walking clue to the inverted gradient"],["Value","His scars are evidence before any instrument confirms it"]]},

{i:"vane",l:"Factor Ilsabet Vane",t:"npc",s:"rework",src:"Gameplay — needs rework",
d:"<strong>Needs rework.</strong> Field Director of the retired Concord Company: cold, pragmatic, one bad quarter from being pulled by the home office, already hiding casualty numbers to keep the operation funded. Not a villain — a person making a bad trade to survive her own hierarchy. That character is worth keeping; her employer no longer exists.",
f:[["Problem","Her faction was retired in session 10"],["Worth salvaging","The pressure, the hidden casualty numbers, the leak"],["Obvious re-home","The Compact, or the Line's cautious circle"]]},

{i:"marrow",l:"Sella Marrow, \"the Boatwright\"",t:"npc",s:"rework",src:"Gameplay — needs rework",
d:"<strong>Needs rework.</strong> Ex-riverboat captain leading the retired Commons, running smuggled rope-routes beneath the toll system, rationing communally and sometimes brutally, barely holding a fracturing coalition together. Same problem as Vane: good character, dead faction.",
f:[["Problem","Her faction was retired in session 10"],["Worth salvaging","Holding a coalition together against its own hardliners"]]},

{i:"vance",l:"Toll-keeper Ordo Vance",t:"npc",s:"rework",src:"Gameplay — needs rework",
d:"<strong>Needs rework.</strong> Concord's toll-collector at the base of the Throat, missing along with a strongbox, with tracks at the scene matching nothing in any bestiary. He was the original delivery of the First Sign — but Adventure 01 now delivers it through the chapel survivors instead, and both can't be the opening tremor.",
f:[["Problem 1","His employer and his post no longer exist"],["Problem 2","Duplicates Adventure 01's First Sign"],["Decision needed","Pick one delivery, or explicitly make it two sightings"]]},

// ---------- CREATURES ----------
{i:"insectoid-scout",l:"The Scout",t:"creature",s:"proposed",src:"Gameplay / Adventure 01",
d:"Whatever took the three from the camp. Not a vanguard — reconnaissance. The insectoids emerged expecting an empty surface and are urgently trying to understand what they've run into, so this thing is as unsettled as the colonists are. Worth playing that way if the party ever meets one.",
f:[["Left behind","A deliberate mark and unplaceable tracks"],["Behaviour","Moved, stopped, came back. Searching."],["Do not","Resolve this. No creature appears."]]},

{i:"zombie-shambler",l:"Zombie Shambler",t:"creature",s:"proposed",src:"Adventure 01 — Monster Core",
d:"Creature −1. Permanently slowed 1, no reactions, no tactics — it moves toward the nearest living thing and Grabs. The danger is entirely positional: being dragged downhill into the water with four of them.",
f:[["AC","12; Fort +6, Ref +0, Will +2"],["HP","20 (void healing)"],["Weaknesses","slashing 5, vitality 5"],["Fist","+7 agile, 1d6+3 bludgeoning plus Grab"],["Used in","The Drowned Chapel nave — 4, plus 2 on round two"]]},

{i:"rat-swarm",l:"Rat Swarm & Giant Rat",t:"creature",s:"proposed",src:"Adventure 01 — Monster Core",
d:"The no-undead alternative for the chapel nave: one rat swarm plus a giant rat, feeding. Mechanically similar, tonally very different — pick based on how supernatural you want session one to feel.",
f:[["Swarm","Creature 1; AC 14, HP 14; resist physical 6 except bludgeoning"],["Weaknesses","area damage 3, splash 3"],["Note","Both carry putrid plague — don't stack it with Lip Sickness"]]},

{i:"lantern-dead",l:"The Dead of the Warren",t:"creature",b:"threshold",s:"proposed",src:"Points of Interest",
d:"Skeleton guards and zombie shamblers in numbers, and they cluster where light falls and will not enter unlit rooms. That is a tactical fact, a navigation aid, and the grimmest piece of characterisation available in the Threshold — the safe route is the dark one, and the safe route is the one where you cannot see.",
f:[["Rule","They won't enter darkness"],["Level","Skeleton guards (2), zombie shamblers (−1)"],["The break","One chamber where they stand in total darkness, waiting"]]},

{i:"spire-constructs",l:"The Spire's Constructs",t:"creature",b:"threshold",s:"proposed",src:"Points of Interest",
d:"Still patrolling, still carrying out repairs, still sweeping floors that no longer need sweeping. Not hostile by default — a party can walk past one and be ignored entirely. They are extremely hostile to specific things, and working out what those things are before triggering them is the actual puzzle.",
f:[["Design","A rules puzzle, not a fight"],["Balance","One is survivable at level 4. Three is not."],["The turn","Their criteria describe something not seen in a very long time"]]},

{i:"canopy-apex",l:"The Canopy's Apex Predator",t:"creature",b:"shallows",s:"proposed",src:"Points of Interest",
d:"Never described directly. The local ecology is visibly arranged around avoiding it — clearings nothing crosses, a band of canopy where nothing nests, silence that moves. The party learns to read where it is by watching what everything else does.",
f:[["Statted","No — deliberately"],["The turn","A region where the avoidance patterns describe something <em>it</em> avoids"]]},

{i:"silk-core",l:"The Thing at the Centre",t:"creature",b:"threshold",s:"proposed",src:"Points of Interest",
d:"At the centre of the Silk Deeps is something whose web has structural columns. Giant spiders and spider swarms are the population; this is not one of them.",
f:[["Population","Giant spiders (1), spider swarms (1)"],["Core","Considerably worse"]]},

{i:"mycelial-organism",l:"The Nave Organism",t:"creature",b:"shallows",s:"proposed",src:"Points of Interest",
d:"The single fungal individual that <em>is</em> the Mycelial Nave. It responds to disturbance slowly — over minutes and hours — and chemically, across the whole structure at once. Cut it in one chamber and something changes a kilometre away. Whether that constitutes awareness is a question the Sounding Line's researchers disagree sharply about.",
f:[["Mechanics","A disturbance counter; thresholds change the environment"],["Ethics","The experiments that would settle it are the argument"]]},

// ---------- HAZARDS ----------
{i:"throat-squall",l:"Throat Squall",t:"hazard",s:"proposed",src:"Gameplay — Hazard 5",
d:"The standing draft isn't smooth wind — it's turbulent pulses, and a squall is one breaking loose. A pressure drop in the ears and a rising howl give a few seconds' warning. Not confined to the open Throat: narrow passages are often <em>worse</em>, because the same volume of air forced through a smaller opening speeds up.",
f:[["Level","Hazard 5 (complex, environmental)"],["Stealth","DC 20 (expert)"],["Disable","Survival DC 22 or Athletics DC 24"],["Surge","DC 22 Fort — 2d6 and pushed 15 ft on failure; 4d6, 30 ft, and DC 22 Ref on crit"],["Torn Debris","3d6 bludgeoning, DC 22 Ref basic"],["Reset","~Hourly; every ten minutes near the Stillness"],["Level-1 downscale","One round, DC 17, 1d6/2d6 — see Adventure 01"],["Design note","In a tunnel it's buffeting. In a Throat the push is a fall."]]},

{i:"blackdamp-pocket",l:"Blackdamp Pocket",t:"hazard",s:"proposed",src:"Gameplay — Hazard 2",
d:"A hollow where oxygen-depleted air has settled and stayed. Odourless, invisible, heavier than good air, so it pools in dips and dead ends. Flames gutter low and a carried bird sickens first. It doesn't deal damage — it <em>spends</em> the party.",
f:[["Level","Hazard 2 (environmental)"],["Stealth","DC 18 (trained)"],["Disable","Survival DC 18, or Crafting DC 20 to rig a draft-line"],["Suffocation","DC 18 Fort — fatigued until 10 minutes in clean air; crit adds unconscious"],["Found at","The Cinderspore Reach's lowest hollow"]]},

{i:"lip-sickness",l:"Lip Sickness",t:"hazard",s:"proposed",src:"Adventure 01 — Disease 1",
d:"The respiratory illness at the Fallwater: contaminated water seeping from the Drowned Chapel onto the open shaft face, torn into droplets by the updraft, carried up to the Lip, and condensed into the fog four hundred people breathe. Boiling the drinking water accomplished nothing because it was never in the water.",
f:[["Save","DC 16 Fortitude; onset 1 day"],["Stage 1","fatigued"],["Stage 2","fatigued, enfeebled 1"],["Stage 3","fatigued, enfeebled 1, drained 1 (max)"],["Exposure","An hour in the chapel's low corner without a face covering (+2 with wet cloth)"],["Cure","Removing the bodies stops new cases. It doesn't cure anyone already infected."]]},

{i:"tilted-floor",l:"The Tilted Floor",t:"hazard",s:"proposed",src:"Adventure 01",
d:"Not a stat block, but the single most impactful mechanic in Adventure 01. The chapel lies at thirty degrees: downhill movement is normal, uphill is difficult terrain, and any creature knocked prone slides ten feet downhill — toward the water and the dead.",
f:[["Prone","Slides 10 ft downhill"],["Exploit","Shamblers in the water start prone and must Stand"]]},

{i:"coldbite",l:"Coldbite",t:"hazard",b:"under",s:"planned",src:"Gameplay → Planned",
d:"The deep cold below the reversal as a persistent affliction with stages rather than flat damage. Afflictions survive downtime in PF2e, which makes this the campaign's actual attrition mechanism rather than a bookkeeping chore.",
f:[["Status","Catalogued, not built"],["Why stages","Because afflictions persist past a rest and HP doesn't"]]},

{i:"stillness-shear",l:"Stillness Shear",t:"hazard",b:"under",s:"planned",src:"Gameplay → Planned",
d:"A higher-level upscale of Throat Squall for the enchantment boundary itself. Moving air meeting motionless air is violent, so the worst squalls in the Undermarch cluster along the Stillness — which means wind data is intelligence data, and unexplained weather points toward insectoid territory.",
f:[["Status","Catalogued, not built"],["Target tier","Hazard 9–11"],["Intel","Players can triangulate the enemy's borders from weather"]]},

// ---------- ADVENTURES ----------
{i:"adv01",l:"Adventure 01 — What the Water Carried",t:"adventure",s:"proposed",src:"Adventure 01",
d:"Levels 1–2, two to three sessions, self-contained. People at the top of the shaft are drowning in their own lungs, the cause is forty metres below them, and what the party finds behind it is the first thread of everything. The heroic part of this job turns out to be mortuary work.",
f:[["Acts","The Lip → the Drowned Chapel → behind the altar"],["Pressure clock","Day 1: 26 sick, 3 dead → Day 7: the quarantine line breaks"],["Encounter","6 zombie shamblers = Severe at level 1. Cut the reinforcements for a new party."],["XP","~200"],["Ends on","An absence, not a monster"]]},

{i:"adv02",l:"Adventure 02 — The Withering Undersong",t:"adventure",s:"proposed",src:"Adventure 02",
d:"Levels 3–4, two sessions. The colony's food supply is dying at the edges and the trail leads to a graveyard someone is still tending. There is no monster in this adventure. The tension comes entirely from the party not knowing that.",
f:[["Acts","The fringe → the old cairns → the tended rows"],["Act 1 payoff","A bearing. The dying spreads inward, so the source is further out."],["Climax","First contact — social, decided in ten seconds"],["Ends at","Contact, not conversation"]]},

{i:"first-sign",l:"The First Sign",t:"event",s:"proposed",src:"Adventure 01 / Gameplay",
d:"A mark cut into stone at chest height, a hand across — not writing anyone recognises, not a scratch. Even cuts, made with something narrow and very hard, meeting at angles decided in advance. In the silt in front of it, tracks nothing in any bestiary matches, showing a pause-and-return pattern. Searching behaviour.",
f:[["Survival 16","Not a beast's — too regular, and it came back"],["Nature 18","Nothing catalogued matches"],["Crafting 17","Made with a tool, carefully, by something not in a hurry"],["Perception 20","An older set going the other way, with drag-marks for three bodies"],["Rung","1 — deniable"],["Rule","Do not resolve this"]]},

{i:"hooks-deferred",l:"Session One Hooks (deferred)",t:"adventure",s:"parked",src:"Gameplay",
d:"Five candidates held until closer to session zero: the Toll Line, Ninefinger's Debt, the Vigil's Excavation, Winter Is Two Months Away, and the Missing Toll-Keeper. Two of them (A and E) depend on the retired local factions and need rework. D was critiqued as the season rather than a session — use it as permanent backdrop.",
f:[["Status","Deferred by you, not forgotten"],["Needs rework","A (Toll Line), E (Missing Toll-Keeper)"],["Superseded in practice","Adventure 01 now occupies the session-one slot"]]},

{i:"pressure-clock",l:"The Pressure Clock",t:"mechanic",s:"proposed",src:"Adventure 01",
d:"Adventure 01's visible day counter. Days pass when the party rests, rigs or travels, and you tell them what a day costs. Day 5 is the first death since they were hired — and if they met that person in the ward, you say so by name.",
f:[["Day 1","26 sick, 3 dead"],["Day 3","The ward runs out of floor"],["Day 5","First death since the party was hired"],["Day 7","The quarantine line at the winch-heads breaks"],["Day 10+","Don't kill the colony — escalate to the Compact ordering the Lip abandoned"]]},

// ---------- MECHANICS ----------
{i:"attrition",l:"The Attrition Problem",t:"mechanic",s:"open",src:"Proposed Canon",
d:"Classic megadungeon play runs on attrition; PF2e is built to defeat exactly that. Focus Points return in ten minutes, Treat Wounds heals the party for free, and the encounter math assumes you start near full. Do nothing and your vast labyrinth becomes a series of unrelated fights with a picnic between each one.",
f:[["Fix 1","Environmental pressure, not resource-tracking"],["Fix 2","Delve-ploration"],["Fix 3","Supply as hard currency"],["Do not","Nerf Treat Wounds by fiat — constrain where they rest, not whether healing works"]]},

{i:"supply",l:"Supply",t:"mechanic",s:"planned",src:"Gameplay → Planned",
d:"An abstract resource pool, not ration bookkeeping. Spend it to rest safely; out of Supply means no Treat Wounds, no Refocus, no full rest. The depth you can reach becomes a function of what you carried, which is a real decision.",
f:[["Status","Catalogued, not built"],["Gates","Rest and recovery, not healing itself"]]},

{i:"delve-ploration",l:"Delve-ploration",t:"mechanic",s:"planned",src:"Gameplay → Planned",
d:"Kingmaker's hexploration subsystem reskinned for the Undermarch — activities per travel period, discovery rolls, supply expenditure, with the hex becoming a \"reach.\" The Fungal Canopy is explicitly designed to run on it.",
f:[["Status","Catalogued, not built"],["First customer","The Fungal Canopy"]]},

{i:"clock-tension",l:"Exploration vs. the Clock",t:"mechanic",s:"open",src:"Proposed Canon",
d:"Megadungeon play is exploratory and digressive; an invasion deadline is urgent and focused. Run them naively together and either the players ignore the clock and the invasion feels like an ambush, or they chase it and never explore. The fix: make the dungeon itself the source of the counter-invasion, so digression is just a different route.",
f:[["Found down there","Weftway maps, Sealing Era records, a defector"],["Effect","Every delve is both a treasure hunt and a move against the clock"]]},

{i:"map-program",l:"The Map Program",t:"mechanic",s:"proposed",src:"Map Program",
d:"Draw order, deliberately not starting with the world map. Map 1 is the Fallwater cross-section — a projected elevation in cave-survey terms — because verticality is the setting's defining property and you cannot design vertically until you have drawn vertically. The Kethal continental sheet is now in progress alongside it.",
f:[["01","Cross-section of the Fallwater"],["02","The Lip settlement, isometric"],["03","The local reach — nodes and links, not cartography"],["04","One dungeon site, gridded, in full"],["05","The world schematic. Last."],["In progress","Kethal — first draft drawn, not inked"],["Kit","Isometric grid, dot grid, fineliners 005/01/03, tracing paper, hachures"]]},

// ---------- OPEN QUESTIONS ----------
{i:"q-ways-closed",l:"Why did the ways close?",t:"question",s:"parked",src:"Open Questions",
d:"The central historical mystery, parked by decision rather than forgotten. Candidates: a war, a plague, a deliberate quarantine, the insectoids sealing it themselves, or something that got out once and was never allowed to happen again. This answer determines whether the Undertears are a tragedy, an escape, or a repetition.",
f:[["Status","Parked"],["In-fiction threads","The Barred Way, the Hushed's \"old fear\", the Sunken Cathedral's crypt"]]},

{i:"q-leaving-the-deep",l:"How did anyone leave the deep?",t:"question",s:"parked",src:"Open Questions",
d:"The Era Stack is canon and the Aftermath survived; Corrach-Nom's dwarves and gnomes came up out of the deep four thousand years ago into an emptied surface. Nothing accounts for the route. Parked deliberately — it is the sealing mystery approached from the other side.",
f:[["Status","Parked"],["Paired with","Why the ways closed"],["Raised by","Corrach-Nom's founding tale being literally true"]]},

{i:"q-root-identity",l:"What is the Root Entity?",t:"question",s:"open",src:"Open Questions",
d:"The levels 17–20 endgame currently has no identity. Is it awake? Is it why the ways were sealed? Can it be reasoned with, fought, or only fled?",
f:[["Priority","High"]]},

{i:"q-end-level",l:"What level does the campaign end at?",t:"question",s:"open",src:"Open Questions",
d:"A single in-world year is compressed for 1→20. Either the campaign covers the year and ends around 12–14 with the invasion as climax, the players stall the clock and it runs past the year to 20, or the year is the first of three arcs.",
f:[["Priority","High"],["Depends on","How the clock resolves"]]},

{i:"q-species",l:"Species basis for the insectoids",t:"question",s:"open",src:"Open Questions",
d:"Formian caste architecture with Thriae magical culture layered on top is proposed and never confirmed. Also unresolved: how they communicate, whether it can be learned, their religion, caste mobility, and — most valuable — the defector.",
f:[["Priority","High"],["Most valuable NPC","There should be a defector"]]},

{i:"q-naming",l:"The naming decisions",t:"question",s:"open",src:"Open Questions",
d:"Four names still open: the cataclysm (Weeping / Opening / Unroofing), the megadungeon (Undermarch / Undersky), the insectoid civilization (\"the Deep Choir\" is a placeholder only), and the tunnel network (Weftways / Sutures / Stitch).",
f:[["Count","4"],["Note","For the first two, using both simultaneously is the proposal — the disagreement is free characterisation"]]},

{i:"q-hero",l:"Why hasn't a high-level hero fixed this?",t:"question",s:"open",src:"Open Questions",
d:"Four combinable answers: the surface powers are pointed at each other rather than the dark; power doesn't solve <em>search</em> at planetary scale; the first wave went down and didn't come back and their gear is now treasure; the threat isn't legible yet. Recommended weighting toward the first.",
f:[["Strongest version","Surface disunity is the actual antagonist and the insectoids are just the deadline"]]},

{i:"q-surface",l:"How many surface powers matter?",t:"question",s:"open",src:"Open Questions",
d:"Substantially answered. Kethal is now built — geography, continental timeline, five nations, cities. Obun and the Corrach-Nom Diarchy are canon. Still unbuilt: four entire continents, Corrach-Nom's capital, the ports of the nine, and the saved-versus-ruined political map the dams created.",
f:[["Suggested cap","4–5 that matter"],["Now built","Kethal in full, and Obun"],["Free political map","Nations that got dams vs. nations that didn't"],["Blank","Naidrora, Aubannon, Emmux, Jomoth"]]},

{i:"q-kethal-undertears",l:"How many Undertears are on Kethal?",t:"question",s:"open",src:"Open Questions",
d:"Three of the twenty are placed, in Obun, and the Fallwater is in Velmack. Nothing says how many more Kethal holds or where. This blocks the continental map: every opening placed on the sheet drowns a watershed and changes the politics around it.",
f:[["Priority","High — blocks the map"],["Placed","3 in Obun, 1 in Velmack"],["Consequence of each","A drowned watershed and a ruined downstream country"]]},

{i:"q-obun-names",l:"The nine, and the unnamed cities",t:"question",s:"open",src:"Open Questions",
d:"The nine coastal nations of Obun have no names. Neither does Corrach-Nom's capital, nor any of the ports of the nine. Kethal's cities are now named; Obun's are not. Also open: which of the nine resents the Diarchy, and how far it goes — canon says factions exist who read the restraint as patience, and nobody has been named.",
f:[["Unnamed","9 nations, 1 capital, 9-odd ports"],["Also open","Which of the nine resents the Diarchy"],["Constraint","No war on Obun in living memory"]]},

{i:"q-brannock",l:"Is Brannock the elven homeland, or an enclave?",t:"question",s:"open",src:"Open Questions",
d:"Raised and not settled. As a homeland, Brannock is confident and inward-facing and needs nothing from anyone. As an enclave on someone else's continent, its licensed-market posture becomes a survival strategy and it acquires an offstage relationship with a homeland elsewhere. The answer also decides whether all three elven lines being native is ordinary geography or a much stranger story.",
f:[["Knock-on","Where the elven homeland sits, if not here — likely one of the four blank continents"],["Not in question","Its borders, which are the oldest fixed borders on Kethal"]]},

{i:"q-elven-memory",l:"What do long-lived elves remember?",t:"question",s:"open",src:"Open Questions",
d:"Canon states the Burial Ages are forgotten everywhere, with a single hedge — that elves may hold fragments closer to the truth, and that nothing in Brannock has been examined on the point. That hedge is either a door or a dead end and should be decided before anyone plays an ancient elf.",
f:[["Status","Open"],["Constraint","Nobody on the surface has the theory — a fragment is not the answer"],["Ties to","Brannock's isolation, which is why nobody has checked"]]},

{i:"q-sunfled-alive",l:"Are any Sunfled still alive?",t:"question",s:"open",src:"Open Questions",
d:"The Drowned City and the First Landing are theirs, and both are empty. Whether anything of that civilization survives further down is unanswered.",
f:[["Contrast","The Hushed survived; they're Aftermath, not Sunfled"]]},

{i:"q-diarchy-delegate",l:"Who is the Diarchy's delegate at the Fallwater?",t:"question",s:"open",src:"Open Questions",
d:"The lantern concession bought Corrach-Nom a permanent seat in Line survey operations at every Undertear, and the quiet unit reads what those delegates send home. The Fallwater's delegate is a ready-made hook — the party finds a device, word spreads, and someone with an honest interest approaches them. Needs a name, and a decision on whether he knows what his reports feed.",
f:[["Priority","High"],["Needed for","The Fallwater, before session one"],["The good version","He is entirely honest and still the first link in the chain"]]},

{i:"q-velmack-face",l:"Who is the face of Velmack's crown at the Fallwater?",t:"question",s:"open",src:"Open Questions",
d:"Velmack governs the opening, but no named officer represents it — a royal warden, a governor, or a tax officer. Without one, the crown's authority is an abstraction the players never meet. Needed before session one.",
f:[["Priority","High"],["Needed for","Session one"],["Reports to","Xynnar, which made the no-dam decision"]]},

{i:"q-surlund-guilds",l:"Surlund's pilot guilds versus its crown",t:"question",s:"open",src:"Open Questions",
d:"Canon says the guilds are as powerful as the crown and considerably older. Nothing says how that relationship works, who collects the toll, or what happens when they disagree.",
f:[["Status","Open"],["Stakes","The toll is the whole national income"]]},

{i:"q-volcanoes",l:"The five active volcanoes",t:"question",s:"open",src:"Open Questions",
d:"Kethal has at least five active volcanoes, most of them on the Red Peaks arc. The largest is now named — the Ebon Summit. The rest are not, and it has not been decided whether any sits deliberately off the arc as an unexplained outlier.",
f:[["Status","Partly answered"],["Named","The Ebon Summit, the largest — the rest are not"],["Open option","One deliberate outlier with no arc to belong to"]]}
],

edges: [
// event / cosmology spine
["weeping","undertears","opened"],["ritual","weeping","caused"],["deep-choir","ritual","cast"],
["ritual","underglass","produced"],["ritual","weeping-scar","went wrong at"],
["weeping","river-drainage","caused"],["weeping","damps","ventilated the deep"],
["weeping","breathable-frontier","started"],["weeping","vigil","confirmed doctrine of"],
["weeping","compact","prompted formation of"],["weeping","q-naming","name unresolved"],
["undertears","undermarch","open onto"],["undertears","lip","anatomy"],["undertears","throat","anatomy"],
["undertears","mouths","anatomy"],["undertears","verge","anatomy"],["undertears","shelf","retired part of"],
["undertears","prep-twenty","prep approach"],["undertears","standing-draft","carry"],
["undertears","q-kethal-undertears","how many on Kethal"],
["undermarch","archipelago","structured as"],["undermarch","threshold","band"],["undermarch","shallows","band"],
["undermarch","mid","band"],["undermarch","under","band"],["undermarch","root","band"],
["undermarch","q-naming","name unresolved"],["undermarch","light-by-band","zoned by"],
["undermarch","burial-ages","lies beneath kilometres of them"],
["archipelago","weftways","crossed only by"],
["weftways","deep-choir","built by"],["weftways","regular-passage","surfaces as"],
["weftways","invasion-timeline","predates the crisis"],["weftways","q-naming","name unresolved"],
["stillness","deep-choir","protects"],["stillness","root-entity","drained by"],
["stillness","throat-squall","worst squalls at its edge"],["stillness","stillness-shear","boundary hazard"],
["stillness","under","located in"],
["root-entity","inverted-gradient","causes"],["root-entity","root","dwells at"],
["root-entity","underglass","may be embedded in"],["root-entity","q-root-identity","unresolved"],
["root-entity","invasion-timeline","started the crisis"],
["root-entity","burial-ages","its feeding writes them"],
["inverted-gradient","ember-shrine","first standable evidence"],["inverted-gradient","sarn","walking clue to"],
["inverted-gradient","frost-veil","produces"],["inverted-gradient","coldbite","makes lethal"],
["inverted-gradient","vigil","has the data, not the interpretation"],["inverted-gradient","mid","reverses in"],
["underglass","root","forms the floor of"],
["invasion-timeline","invasion-clock","sets"],["invasion-timeline","deep-choir","history of"],
["invasion-clock","first-sign","segment 1"],["invasion-clock","clock-tension","design problem"],
["reveal-ladder","first-sign","rung 1"],["reveal-ladder","adv02","rung 2"],["reveal-ladder","regular-passage","rung 3"],
// bands and physics
["threshold","light-by-band","real sun"],["shallows","light-by-band","bioluminescence"],
["under","unlit","dark that darkvision fails against"],["mid","frost-veil","upper edge of"],
["standing-draft","throat-squall","pulses as"],["standing-draft","vanishing-waterfall","stalls the falling water"],
["standing-draft","whistling-galleries","sounds"],["standing-draft","damps","clears"],
["standing-draft","downdraft-furnace","inhaling variant"],["standing-draft","throat","runs through"],
["damps","blackdamp-pocket","stat block"],["breathable-frontier","hushed","opened their passage"],
["fungal-calendar","aftermath","kept by"],["time-underground","verge","below it nobody knows the date"],
["river-drainage","fallwater","named for"],["river-drainage","vanishing-waterfall","never reaches bottom"],
// eras
["era-stack","builders","deepest"],["era-stack","sunfled","second"],["era-stack","sealing-era","third"],
["era-stack","aftermath","shallowest"],["era-stack","q-leaving-the-deep","the gap in it"],
["era-stack","burial-ages","stratified by"],
["sealing-era","q-ways-closed","the mystery"],
["sealing-era","aftermath","survived by"],["sealing-era","the-trapped","caught on the wrong side"],
["sealing-era","barred-way","physical evidence"],["aftermath","hushed","descended into"],
["aftermath","silt-terraces","abandoned cultivation"],["aftermath","undersong-cairns","active burial practice"],
["aftermath","corrach-nom-origin","the other survivors — GM only"],
["sunfled","drowned-city","built"],["sunfled","first-landing","first foothold"],["sunfled","q-sunfled-alive","unresolved"],
["the-trapped","lantern-warren","built"],["the-trapped","sunken-cathedral","built"],["the-trapped","chandelier","harvested"],
["builders","hollow-spire","possibly built"],
["q-leaving-the-deep","q-ways-closed","the same mystery, other side"],
["q-leaving-the-deep","aftermath","how did any of them get out"],
// the Fallwater
["fallwater","undertears","one of ~20"],["fallwater","threshold","upper band"],["fallwater","lip","settlement at"],
["fallwater","throat","shaft"],["fallwater","vanishing-waterfall","signature phenomenon"],
["fallwater","winch-towers","descent by"],["fallwater","sounding-line","survey chapter"],
["fallwater","compact","garrison"],["fallwater","vigil","chapter-house"],
["fallwater","c-shaft","cluster"],["fallwater","c-sunward","cluster"],["fallwater","c-lantern","cluster"],
["fallwater","c-deepthresh","cluster"],["fallwater","c-fungal","cluster"],["fallwater","c-drowned","cluster"],
["fallwater","c-warm","cluster"],["fallwater","map-program","Map 1 subject"],
["fallwater","q-diarchy-delegate","its Diarchy seat is unfilled"],
["fallwater","q-velmack-face","its crown has no face"],
["lip","winch-towers","holds"],["lip","vanishing-waterfall","fogged by"],["compact","winch-towers","controls"],
["throat","mouths","pierced by"],["mouths","c-shaft","opens onto"],["mouths","c-sunward","opens onto"],
["mouths","c-lantern","opens onto"],["mouths","c-deepthresh","opens onto"],["mouths","c-fungal","opens onto"],
["mouths","c-drowned","opens onto"],["mouths","c-warm","opens onto"],
["throat","throat-squall","squalls"],["throat","standing-draft","wind tunnel"],
["throat","the-floor","its upper wall cuts through it"],
["shelf","concord","retired together"],
// clusters → sites
["c-shaft","weeping-scar","site"],["c-shaft","drowned-chapel","site"],["c-shaft","catchbasin","site"],["c-shaft","darkview-tombs","site"],
["c-sunward","petrified-forest","site"],["c-fungal","holdfast","site"],
["c-sunward","skywell","site"],["c-sunward","barred-way","site"],["c-sunward","whistling-galleries","site"],
["c-lantern","lantern-warren","site"],["c-lantern","sunken-cathedral","site"],["c-lantern","chandelier","site"],
["c-deepthresh","hollow-spire","site"],["c-deepthresh","silk-deeps","site"],
["c-fungal","cinderspore","site"],["c-fungal","fungal-canopy","site"],["c-fungal","mycelial-nave","site"],
["c-fungal","silt-terraces","site"],["c-fungal","undersong-cairns","site"],
["c-drowned","weir","site"],["c-drowned","drowned-city","site"],["c-drowned","first-landing","site"],
["c-warm","ember-shrine","site"],["c-warm","mudflats","site"],["c-warm","regular-passage","site"],
// site cross-links
["weeping-scar","throat-squall","lethal here — nothing to hold"],["weeping-scar","sounding-line","pays for samples"],
["drowned-chapel","adv01","act 2"],["drowned-chapel","lip-sickness","source of"],
["drowned-chapel","tilted-floor","terrain"],["drowned-chapel","zombie-shambler","nave encounter"],
["drowned-chapel","rat-swarm","no-undead alternative"],["drowned-chapel","chapel-survivors","sacristy"],
["drowned-chapel","vigil","wants the bodies and relics"],["drowned-chapel","mouths","wedged into one"],
["catchbasin","adv01","suspect, cleared"],["catchbasin","vanishing-waterfall","catches what survives"],
["skywell","threshold","only pleasant place in it"],["barred-way","q-ways-closed","poses the question"],
["whistling-galleries","throat-squall","warns of"],["lantern-warren","lantern-dead","haunted by"],
["lantern-warren","light-by-band","architecture of light rationing"],["lantern-warren","undersong-cairns","reversed reveal direction"],
["sunken-cathedral","q-ways-closed","the crypt sealed from inside"],["chandelier","lantern-warren","supplied its mirror-inlay"],
["hollow-spire","spire-constructs","patrolled by"],["silk-deeps","silk-core","centre of"],
["cinderspore","blackdamp-pocket","in the lowest hollow"],["cinderspore","standing-draft","moves spore clouds"],
["cinderspore","adv02","act 1"],["cinderspore","compact","wants to toll it"],["cinderspore","sounding-line","wants to study it"],
["cinderspore","vigil","reads it as omen"],["cinderspore","first-sign","a second, in a terrace"],
["fungal-canopy","canopy-apex","ruled by"],["fungal-canopy","delve-ploration","designed to run on"],
["mycelial-nave","mycelial-organism","is"],["mycelial-nave","sounding-line","ethics argument in"],
["silt-terraces","undersong-cairns","contrast piece"],["undersong-cairns","hushed","tended by"],
["undersong-cairns","adv02","act 2–3"],["undersong-cairns","grave-tender","first contact"],
["weir","drowned-city","drowned it"],["weir","shallows","spine of travel in"],
["drowned-city","first-landing","the contrast"],["ember-shrine","root-entity","its vent is being drained"],
["mudflats","mid","marks the approach"],["regular-passage","deep-choir","maintained by"],
["regular-passage","invasion-clock","story-critical"],
["petrified-forest","the-floor","the same phenomenon, above ground"],
["petrified-forest","burial-ages","the fallen trunks — link available, unconfirmed"],
["hushed-undersong","hushed","their settlement"],["hushed-undersong","adv02","next chapter"],
["hushed-undersong","q-ways-closed","oral history nobody has heard"],
// factions
["sounding-line","cautious-circle","internal split"],["sounding-line","ashfeld","junior researcher"],
["sounding-line","lantern-concession","bought its lanterns with a seat"],
["compact","reyne","sergeant"],["vigil","cotter","warden"],["vigil","ashgrove","led by"],
["compact","concord","replaced"],["sounding-line","commons","replaced"],["commons","undertow","splinter"],
["commons","marrow","led by"],["concord","vane","field director"],["concord","vance","toll-keeper"],
["deep-choir","insectoid-scout","sent"],["deep-choir","stillness","protected by"],
["deep-choir","q-species","unresolved"],["deep-choir","weftways","built"],["deep-choir","under","homeland in"],
["hushed","grave-tender","one of"],["hushed","aftermath","descended from"],
["compact","q-surface","member nations unbuilt"],
["compact","xynnar","founded at"],["compact","velmack","hosted by, and resented for it"],
// NPCs
["reyne","adv01","hook-giver"],["cotter","adv01","hook-giver"],["ashfeld","adv01","hook-giver"],
["orrow","adv01","the ungated clue"],["orrow","winch-towers","works"],
["ashfeld","cautious-circle","her report vanishes"],["ashfeld","first-sign","takes the rubbing"],
["cotter","lip-sickness","treats it"],["chapel-survivors","insectoid-scout","taken by"],
["chapel-survivors","first-sign","led the party to"],["grave-tender","adv02","climax of"],
["sarn","inverted-gradient","evidence of"],["ashgrove","inverted-gradient","holds the data"],
["vane","concord","orphaned by"],["marrow","commons","orphaned by"],["vance","concord","orphaned by"],
["vance","first-sign","duplicate delivery — decide"],["vance","hooks-deferred","hook E"],
["marrow","hooks-deferred","hook A"],["sarn","hooks-deferred","hook B"],["vigil","hooks-deferred","hook C"],
// adventures
["adv01","first-sign","ends on"],["adv01","pressure-clock","runs on"],["adv01","lip-sickness","the crisis"],
["adv01","throat-squall","level-1 downscale"],["adv01","standing-draft","applies throughout"],
["adv01","adv02","leads to"],["adv01","hooks-deferred","occupies the session-one slot"],
["adv02","hushed","first contact with"],["adv02","cinderspore","the dying starts here"],
["adv02","hushed-undersong","leads to"],["adv02","breathable-frontier","the underlying cause"],
["first-sign","insectoid-scout","made by"],
// mechanics
["attrition","supply","fix"],["attrition","delve-ploration","fix"],["attrition","coldbite","persistent affliction"],
["attrition","light-by-band","environmental pressure"],["clock-tension","invasion-clock","the tension"],
["clock-tension","weftways","the counter-invasion is down there"],["clock-tension","sealing-era","records of how it was done before"],
["map-program","fallwater","Map 1"],["map-program","lip","Map 2"],["map-program","kethal","continental sheet in progress"],
// questions
["q-end-level","invasion-clock","depends on"],["q-hero","compact","surface disunity"],
["q-species","deep-choir","about"],["q-naming","deep-choir","placeholder name"],
["q-surface","river-drainage","dams are the political map"],["q-sunfled-alive","sunfled","about"],
["q-root-identity","root","about"],["q-ways-closed","sealing-era","about"],
["q-kethal-undertears","kethal","blocks its map"],["q-kethal-undertears","map-program","blocks the continental sheet"],
["q-elven-memory","burial-ages","the one hedge in 'nobody knows'"],["q-elven-memory","brannock","why nobody has checked"],
["q-volcanoes","red-peaks","its cones — the largest now named"],
["brannock","dunthara","its desert half"],["dunthara","red-peaks","lies in their rain shadow"],
["dunthara","prevailing-winds","made by"],["dunthara","kethal-settlements","Sirrach sits in it"],
["cassiran-bay","kethal","its eastern coast"],["cassiran-bay","tenemrea","the coast of"],
["cassiran-bay","cassiran-strait","separate feature, further south"],
["cassiran-bay","kethal-settlements","Cassira sits on it"],
["ebon-summit","red-peaks","stands on"],["ebon-summit","ash-seasons","feeds them"],
["ebon-summit","kethal","largest on it"],["ebon-summit","q-volcanoes","the first of them named"],["q-surlund-guilds","surlund","who actually rules"],
// the surface world
["surface-world","kethal","continent"],["surface-world","naidrora","continent"],["surface-world","aubannon","continent"],
["surface-world","obun","continent"],["surface-world","emmux","continent"],["surface-world","jomoth","continent"],
["surface-world","undertears","torn open across it"],["surface-world","ash-seasons","lives with them"],
["kethal","velmack","nation of"],["kethal","brannock","nation of"],["kethal","tenemrea","nation of"],
["kethal","surlund","nation of"],["kethal","cludonea","nation of"],["kethal","compact","founded here"],
["kethal","kethal-history","its history"],["kethal","red-peaks","range"],["kethal","asbour","range"],
["kethal","varngate-gap","the corridor between them"],["kethal","prevailing-winds","shaped by"],
["kethal","the-floor","buried beneath it"],["kethal","cassiran-strait","its only short sea passage"],
["kethal","kethal-settlements","its cities"],["kethal","cinder-belt","its dry belt"],
["kethal-history","cludonea","First Rising"],["kethal-history","surlund","First Rising"],
["kethal-history","velmack","formed ~1,600 years ago"],["kethal-history","tenemrea","crowned ~1,300 years ago"],
["kethal-history","brannock","consolidated first, ~2,300 years ago"],
["kethal-history","asbour","the Asbour Wars fought over it"],
["kethal-history","burial-ages","begins after the last one"],
["prevailing-winds","red-peaks","rain shadow cast by"],["prevailing-winds","tenemrea","made it rich and dry"],
["prevailing-winds","brannock","made its desert"],["prevailing-winds","cludonea","wet and leeward-poor"],
["prevailing-winds","ash-seasons","carries the ash east"],["prevailing-winds","cinder-belt","made it"],
["red-peaks","ash-seasons","the mountains you watch"],["red-peaks","tenemrea","feeds its rivers"],
["red-peaks","varngate-gap","its southern end"],["red-peaks","q-volcanoes","its cones are unnamed"],
["asbour","varngate-gap","its western end"],["asbour","velmack","southern flank"],
["cassiran-strait","surlund","tolled by"],["cassiran-strait","cludonea","its grievance"],
["cassiran-strait","tenemrea","its grain pays the toll"],["cassiran-strait","kethal-settlements","Cassira and Ormsvik sit on it"],
["varngate-gap","velmack","held and taxed by"],
["the-floor","burial-ages","is the last one — GM only"],["the-floor","surlund","exposed along its coast"],
["the-floor","throat","visible in every shaft wall"],["the-floor","era-stack","the surface face of it"],
["velmack","xynnar","capital"],["velmack","fallwater","governs"],["velmack","compact","founding nation of"],
["velmack","no-dam-decision","made"],["xynnar","no-dam-decision","did the arithmetic"],
["velmack","asbour","mines it"],["velmack","kethal-settlements","five of them"],
["no-dam-decision","river-drainage","let the flood stand"],["no-dam-decision","fallwater","kept it open"],
["tenemrea","cludonea","ships its grain"],["tenemrea","cassiran-strait","pays to leave the east coast"],
["cludonea","obun-nine","carries the grain to them"],
["surlund","cassiran-strait","its whole income"],["surlund","q-surlund-guilds","who rules it"],
["brannock","q-brannock","unresolved"],["brannock","red-peaks","straddles its northern end"],
["burial-ages","root-entity","driven by its feeding"],["burial-ages","ash-seasons","surface edge of"],
["burial-ages","era-stack","the cycle the eras sit in"],["burial-ages","deep-choir","they knew the period"],
["burial-ages","q-ways-closed","does not explain the sealing"],
["burial-ages","the-floor","laid it down"],
["burial-ages","corrach-nom-origin","the last one emptied the surface they walked into"],
["mainstream-church","vigil","declared heretical"],
["q-surface","kethal","answered by"],["q-surface","obun","answered by"],
// Obun and Corrach-Nom
["obun","corrach-nom","interior held by"],["obun","obun-nine","coasts held by"],
["obun","undertears","three opened here"],
["corrach-nom","diarchy","governed by"],["corrach-nom","obun-nine","metalwork out, grain in"],
["corrach-nom","lantern-concession","invented the lanterns"],
["corrach-nom","sounding-line","predominates in the Line on Obun"],
["corrach-nom","corrach-nom-origin","GM-only truth about it"],
["diarchy","obun-nine","mutual dependency, not dominance"],
["diarchy","diarchy-unit","runs"],["diarchy","q-diarchy-delegate","its seats are unnamed"],
["diarchy","lantern-concession","set the price"],
["obun-nine","tenemrea","ship its grain"],["obun-nine","q-obun-names","unnamed"],
["tenemrea","corrach-nom","principal grain source for"],
["lantern-concession","sounding-line","bought a permanent seat at every Undertear"],
["diarchy-unit","sounding-line","reads its own delegates' reports"],
["diarchy-unit","undertears","works the three in Obun"],
["diarchy-unit","q-diarchy-delegate","the chain the delegate feeds"],
["corrach-nom-origin","aftermath","descended from"],
["corrach-nom-origin","q-leaving-the-deep","poses the question"],
["corrach-nom-origin","the-floor","the same disbelieved truth Surlund has"]
]
};
