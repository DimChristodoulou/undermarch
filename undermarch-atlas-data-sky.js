/* undermarch-atlas-data-sky.js — Atlas shard: the two moons.
   Loaded after undermarch-atlas-data.js and before the engine script in
   undermarch-atlas.html; it pushes into the same DATA object.
   Kept as a separate file only to avoid rewriting the 120 KB main data file
   for a three-node addition — fold it into undermarch-atlas-data.js at the
   next full Atlas pass.
   Added 2026-09-12 — see Established Canon, The Sky. */

DATA.nodes.push(

{i:"aumbris",l:"Aumbris",t:"phenomenon",s:"locked",src:"Established Canon",
d:"The larger, paler moon, and the one the world keeps time by — a thirty-day cycle, and a month means one turn of Aumbris everywhere records are kept. Almanacs and charters say Aumbris; common speech says <em>the Warden</em>. It shows the same face from one generation to the next, which is exactly what makes <a href=\"undermarch-atlas.html#velkarr\">Velkarr</a> unsettling by comparison.",
f:[["Cycle","30 days"],["Role","The calendar moon"],["Folk name","The Warden"],["Face","Fixed — the markings do not change"]]},

{i:"velkarr",l:"Velkarr",t:"phenomenon",s:"locked",src:"Established Canon",
d:"The smaller, closer, red moon — two of its cycles to every one of Aumbris. Its dark patches drift across a season and are sometimes repainted outright in a few days, so every sky-chart of it is out of date; rarely, at crescent, a faint spike stands off its edge for a night or two. Almanacs say Velkarr; common speech says <em>the Ember</em>. Nobody on the surface has instruments fine enough to explain any of it.<br><br><b>GM only:</b> it is volcanic. The 2:1 resonance flexes its interior and keeps it molten, and what reaches the surface is sulfur. This is deliberately <em>not</em> connected to the Burial Ages, the ash seasons, or the Root — the resemblance is a coincidence left available to in-world scholars who want to build a wrong theory on it.",
f:[["Cycle","15 days"],["Resonance","2:1 with Aumbris"],["Colour","Sulfur — orange to near-black red"],["Folk name","The Ember"],["Face","Changes; sky-charts go stale"],["Plumes","Real; hundreds of km tall"]]},

{i:"conjunction",l:"The Conjunction",t:"phenomenon",s:"locked",src:"Established Canon",
d:"The monthly alignment of the two moons, on a fixed and published date. Both pulls fall on the same side of the world and the month's highest tides follow. An inconvenience on most coasts; on Surlund's shoal, tidal, unmarked channels it is the difference between a passage and a wreck, and part of what the pilot guilds are actually selling.",
f:[["Period","Every 30 days"],["Effect","The month's highest tides"],["Predictable","Entirely — it is in every almanac"],["Occultation","Velkarr crosses Aumbris once every few years, not monthly"]]}

);

/* Edges are filtered against the ids that actually exist, so a renamed or
   not-yet-created node degrades to a missing edge instead of breaking the
   whole graph. */
(function(){
  var have = {};
  DATA.nodes.forEach(function(n){ have[n.i] = true; });
  [
    ["velkarr","aumbris","in resonance with"],
    ["conjunction","aumbris","alignment of"],
    ["conjunction","velkarr","alignment of"],
    ["surlund","conjunction","pilots by"],
    ["cassiran-strait","conjunction","tides set by"],
    ["skywell","aumbris","lit at night by"]
  ].forEach(function(e){
    if(have[e[0]] && have[e[1]]) DATA.edges.push(e);
  });
})();
