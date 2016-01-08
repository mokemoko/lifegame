var X_SIZE = 5;
var Y_SIZE = 5;
var CELL_SIZE = 0.25;
var FPS = 100;
var canvas;
var context;
var t_canvas;
var t_context;
var time;
 
window.onload = function() {
  var str = "x = 3081, y = 813, rule = B3/S23\n26$2394b4o7b2o$2393bo3bo6bo2bo12b2o$2393bo10bo2b2o11b2o$2394bob2obo4bo\n2bo$2397b3o6bo2$2397b3o6bo$2396b2obo4bo2bo$2395bo8bo2b2o$2396b2o6bo2bo\n$2397bo7b2o3$2430b2o$2430b2o4$2509b4o7b2o$2424bo5bo77bo3bo6bo2bo12b2o$\n2423b3o3b3o76bo10bo2b2o11b2o$2422bo2b2ob2o2bo76bob2obo4bo2bo$2422bo3bo\nbo3bo79b3o6bo$2424bobobobo$2512b3o6bo$2421b2ob2o3b2ob2o77b2obo4bo2bo$\n2423bo7bo78bo8bo2b2o$2511b2o6bo2bo$2512bo7b2o3$2430bo114b2o$2429b3o\n113b2o$2428bo3bo$2427bo5bo$2427bo5bo$2428bo3bo191b4o7b2o$2539bo5bo77bo\n3bo6bo2bo12b2o$2428bo3bo105b3o3b3o76bo10bo2b2o11b2o$2427bo5bo103bo2b2o\nb2o2bo76bob2obo4bo2bo$2423b2o2bo5bo103bo3bobo3bo79b3o6bo$2423b2o3bo3bo\n106bobobobo$2429b3o195b3o6bo$2430bo105b2ob2o3b2ob2o77b2obo4bo2bo$2538b\no7bo78bo8bo2b2o$2626b2o6bo2bo$2627bo7b2o3$2545bo114b2o$2544b3o113b2o$\n2543bo3bo$2542bo5bo89bo$2542bo5bo76bo11b2o$2543bo3bo76bo12bobo99b4o7b\n2o$2624b3o27bo5bo77bo3bo6bo2bo12b2o$2543bo3bo105b3o3b3o76bo10bo2b2o11b\n2o$2542bo5bo103bo2b2ob2o2bo76bob2obo4bo2bo$2487bo50b2o2bo5bo103bo3bobo\n3bo79b3o6bo$2486bo51b2o3bo3bo106bobobobo$2486b3o55b3o195b3o6bo$2545bo\n105b2ob2o3b2ob2o77b2obo4bo2bo$2653bo7bo78bo8bo2b2o$2741b2o6bo2bo$2649b\n2o91bo7b2o$2613bo34b2o$2613bobo34bo$2613b2o45bo114b2o$2659b3o113b2o$\n2514bo143bo3bo$2475bo38b2o141bo5bo$2475bobo35bobo141bo5bo$2475b2o181bo\n3bo191b4o7b2o$2769bo5bo77bo3bo6bo2bo12b2o$2658bo3bo105b3o3b3o76bo10bo\n2b2o11b2o$2657bo5bo103bo2b2ob2o2bo76bob2obo4bo2bo$2602bo37b2o11b2o2bo\n5bo103bo3bobo3bo79b3o6bo$2601bo39b2o10b2o3bo3bo106bobobobo$2601b3o36bo\n18b3o195b3o6bo$2660bo105b2ob2o3b2ob2o77b2obo4bo2bo$2768bo7bo78bo8bo2b\n2o$2502b2o352b2o6bo2bo$2503b2o352bo7b2o$2502bo225bo$2728bobo$2728b2o\n45bo114b2o$2774b3o113b2o$2629bo143bo3bo$2629b2o141bo5bo$2628bobo141bo\n5bo$2773bo3bo191b4o7b2o$2884bo5bo77bo3bo6bo2bo12b2o$2491bo281bo3bo105b\n3o3b3o76bo10bo2b2o11b2o$2491b2o279bo5bo103bo2b2ob2o2bo76bob2obo4bo2bo$\n2490bobo224bo50b2o2bo5bo103bo3bobo3bo79b3o6bo$2716bo51b2o3bo3bo106bobo\nbobo$2716b3o55b3o195b3o6bo$2775bo105b2ob2o3b2ob2o77b2obo4bo2bo$2883bo\n7bo78bo8bo2b2o$2971b2o6bo2bo$2972bo7b2o3$2890bo114b2o$2441bo37b2o408b\n3o113b2o$2440bo39b2o406bo3bo$2440b3o36bo407bo5bo89bo$2887bo5bo88b2o$\n2888bo3bo89bobo$2999bo5bo$2888bo3bo105b3o3b3o$2887bo5bo103bo2b2ob2o2bo\n$2832bo37b2o11b2o2bo5bo103bo3bobo3bo$2831bo39b2o10b2o3bo3bo106bobobobo\n$2831b3o36bo18b3o$2468bo421bo105b2ob2o3b2ob2o$2429bo38b2o528bo7bo$\n2429bobo35bobo262b2o$2429b2o302b2o$2732bo2$3005bo$2594b2o408b3o$2595b\n2o406bo3bo$2594bo225bo181bo5bo$2820bobo179bo5bo$2820b2o181bo3bo2$2721b\no281bo3bo$2721b2o279bo5bo$2720bobo224bo37b2o11b2o2bo5bo$2946bo39b2o10b\n2o3bo3bo$2946b3o36bo18b3o$3005bo$2544bo$2544bobo$2544b2o4$2671bo$2670b\no303bo$2670b3o301b2o$2973bobo2$2533bo$2532bo303bo$2532b3o301b2o$2835bo\nbo4$2659bo$2659bobo$2659b2o7$2422bo$2383bo38b2o$2383bobo35bobo$2383b2o\n5$2813bo$2813b2o$2812bobo2$2372bo$2371bo$2371b3o$2901bo$2900bo$2900b3o\n$2537bo$2498bo38b2o$2498bobo35bobo262b2o$2498b2o302b2o$2801bo3$2663b2o\n$2664b2o$2663bo3$2487bo$2486bo$2486b3o6$2916b2o$2917b2o$2916bo3$2176b\n2o$2176b2o4$2602bo37b2o$2601bo39b2o262bo$2601b3o36bo225bo38b2o$2238bo\n627bobo35bobo$2238b2o626b2o$2237bobo2$2728bo$2728bobo$2169b3o3b3o550b\n2o$2169bo2bobo2bo186b2o$2169b2obobob2o187b2o262bo$2169b2o5b2o186bo225b\no38b2o$2291b2o297bobo35bobo$2291b2o297b2o$2226b2o$2227b2o262bo$2171b2o\nb2o50bo264b2o$2169bo2bobo2bo312bobo224bo$2169bobo3bo3bo3b3o530bo$2169b\n3o3bo3bo3bobo530b3o$2177bo2bobo2bo$2179b2ob2o130bo$2314bobo$2314b2o$\n2843bo$2215bo627bobo$2177b2o5b2o29b2o67b3o3b3o550b2o$2177b2obobob2o28b\nobo67bo2bobo2bo148bo$2177bo2bobo2bo98b2obobob2o147bo303bo$2177b3o3b3o\n98b2o5b2o147b3o301b2o$2406b2o335bobo$2406b2o$2303bo37b2o$2302bo39b2o$\n2286b2ob2o11b3o36bo$2284bo2bobo2bo539bo$2284bobo3bo3bo3b3o530bo$2203b\n2o79b3o3bo3bo3bobo530b3o$2204b2o86bo2bobo2bo167bo$2196b2o5bo90b2ob2o\n130bo38b2o$2196b2o231bobo35bobo262b2o$2429b2o302b2o$2184b2o546bo$2184b\n2o144bo$2292b2o5b2o29b2o67b3o3b3o$2292b2obobob2o28bobo67bo2bobo2bo148b\no$2292bo2bobo2bo98b2obobob2o147bo$2292b3o3b3o98b2o5b2o147b3o262bo$\n2521b2o297bobo$2521b2o297b2o$2456b2o$2255b2o200b2o$2255b2o144b2ob2o50b\no$2399bo2bobo2bo$2399bobo3bo3bo3b3o$2196bo7bo44bo5bo143b3o3bo3bo3bobo$\n2195b4o3b4o42b3o3b3o61bo88bo2bobo2bo$2195bo3bobo3bo42bob2ob2obo54b2o4b\n3o89b2ob2o130bo$2196bo2bobo2bo42b2o7b2o53b2o3bo3bo223bobo262bo37b2o$\n2196b3o3b3o42b2o7b2o58b2ob2o223b2o262bo39b2o$2247b3o5b3o41b2o15b2ob2o\n487b3o36bo$2249b3ob3o43b2o$2251bobo62b2ob2o86b2o5b2o98b3o3b3o$2248bo2b\nobo2bo59b2ob2o86b2obobob2o98bo2bobo2bo$2247bo2bo3bo2bo58bo3bo86bo2bobo\n2bo98b2obobob2o$2248b2o5b2o60b3o14b2o71b3o3b3o98b2o5b2o$2203b2o113bo\n14bo2bo299b2o$2203b2o128bobo300b2o$2334bo236b2o$2370b2o200b2o262bo$\n2339b2o29b2o144b2ob2o50bo264b2o$2338bo2bo172bo2bobo2bo312bobo$2338bobo\n173bobo3bo3bo3b3o$2311bo7bo19bo24bo5bo143b3o3bo3bo3bobo$2310b4o3b4o42b\n3o3b3o61bo88bo2bobo2bo$57b2o2251bo3bobo3bo23b2o17bob2ob2obo54b2o4b3o\n89b2ob2o130bo$56bobo2252bo2bobo2bo23bo2bo15b2o7b2o53b2o3bo3bo223bobo$\n56bo2254b3o3b3o23bobo16b2o7b2o58b2ob2o223b2o$55b2o2198b2o87bo17b3o5b3o\n41b2o15b2ob2o$2255b2o107b3ob3o43b2o144bo$2349b2o15bobo62b2ob2o86b2o5b\n2o29b2o67b3o3b3o$2348bo2bo11bo2bobo2bo59b2ob2o86b2obobob2o28bobo67bo2b\nobo2bo148bo37b2o$2348bobo11bo2bo3bo2bo58bo3bo86bo2bobo2bo98b2obobob2o\n147bo39b2o$2349bo13b2o5b2o60b3o14b2o71b3o3b3o98b2o5b2o147b3o36bo$2318b\n2o113bo14bo2bo299b2o$2318b2o128bobo300b2o$55b2o11b2o2379bo198bo37b2o$\n47b2o7bo10b4o2414b2o160bo39b2o$44bo11bobo7bob2ob2obo2379b2o29b2o144b2o\nb2o11b3o36bo$43bobo2b2o7b2o12b2o2bo2377bo2bo172bo2bobo2bo$41bobob3o2bo\n15b2o2b2o2b3o2376bobo173bobo3bo3bo3b3o$41bo2b6o16b4obo2b3o2349bo7bo19b\no24bo5bo143b3o3bo3bo3bobo$44b2ob2o16bo2bo3bo2bo2349b4o3b4o42b3o3b3o61b\no88bo2bobo2bo167bo$43b6o2bo12b3o2bob4o2350bo3bobo3bo23b2o17bob2ob2obo\n54b2o4b3o89b2ob2o130bo38b2o$42bo2b3obobo12b3o2b2o2b2o2351bo2bobo2bo23b\no2bo15b2o7b2o53b2o3bo3bo223bobo35bobo$43b2o2bobo15bo2b2o2356b3o3b3o23b\nobo16b2o7b2o58b2ob2o223b2o$48bo17bob2ob2obo2295b2o87bo17b3o5b3o41b2o\n15b2ob2o$44b2o24b4o2296b2o107b3ob3o43b2o144bo$71b2o2408bobo62b2ob2o86b\n2o5b2o29b2o67b3o3b3o$2478bo2bobo2bo59b2ob2o86b2obobob2o28bobo67bo2bobo\n2bo$2477bo2bo3bo2bo58bo3bo86bo2bobo2bo98b2obobob2o$2478b2o5b2o60b3o14b\n2o71b3o3b3o98b2o5b2o$2433b2o113bo14bo2bo$2433b2o128bobo$2564bo$2600b2o\n$44bo2bobo17bo2bobo2496b2o29b2o144b2ob2o$42b2obob3o15b2obob3o2495bo2bo\n172bo2bobo2bo$43bo6bo15bo6bo2494bobo173bobo3bo3bo3b3o$42b2o5bo15b2o5bo\n2468bo7bo19bo24bo5bo143b3o3bo3bo3bobo$2540b4o3b4o42b3o3b3o61bo88bo2bob\no2bo$43bo5b2o6b2o7bo5b2o2466bo3bobo3bo42bob2ob2obo54b2o4b3o89b2ob2o$\n42bo6bo6bobo6bo6bo2468bo2bobo2bo42b2o7b2o53b2o3bo3bo$43b3obob2o5bo9b3o\nbob2o2467b3o3b3o42b2o7b2o58b2ob2o$43bobo2bo6b2o9bobo2bo2413b2o105b3o5b\n3o41b2o15b2ob2o$2485b2o107b3ob3o43b2o$2596bobo62b2ob2o86b2o5b2o$2593bo\n2bobo2bo59b2ob2o86b2obobob2o$2592bo2bo3bo2bo58bo3bo86bo2bobo2bo$2593b\n2o5b2o60b3o14b2o71b3o3b3o$2548b2o113bo14bo2bo$2548b2o128bobo$55b2o\n2622bo$56bo2658b2o$43b2ob2obo6bobo7b6ob2o2640b2o$42b2o2b2ob2o6b2o7b6ob\n2o$50bo22b2o$42b2o22b2o5b2o2581bo7bo44bo5bo$42b2o5b2o15b2o5b2o2580b4o\n3b4o42b3o3b3o61bo$49b2o15b2o5b2o2580bo3bobo3bo42bob2ob2obo54b2o4b3o$\n42bo23b2o2588bo2bobo2bo42b2o7b2o53b2o3bo3bo$42b2ob2o2b2o15b2ob6o2581b\n3o3b3o42b2o7b2o58b2ob2o$43bob2ob2o16b2ob6o2525b2o105b3o5b3o41b2o15b2ob\n2o$2600b2o107b3ob3o43b2o$2711bobo62b2ob2o$2708bo2bobo2bo59b2ob2o$2707b\no2bo3bo2bo58bo3bo$2708b2o5b2o60b3o$2663b2o113bo$2663b2o2$2830b2o$42b6o\nb2o16bo2bobo2757b2o$42b6ob2o14b2obob3o$49b2o15bo6bo$42b2o5b2o14b2o5bo\n2698bo7bo44bo5bo$42b2o5b2o2719b4o3b4o42b3o3b3o$42b2o5b2o6b2o7bo5b2o\n2696bo3bobo3bo42bob2ob2obo$42b2o12bobo6bo6bo2698bo2bobo2bo42b2o7b2o$\n42b2ob6o5bo9b3obob2o2697b3o3b3o42b2o7b2o$42b2ob6o4b2o9bobo2bo2643b2o\n105b3o5b3o$2715b2o107b3ob3o$2826bobo$2823bo2bobo2bo$2822bo2bo3bo2bo$\n2823b2o5b2o$2778b2o$2778b2o$55b2o$43b4o9bo$42bo4bob2o5bobo7b6ob2o$42bo\n4bo3bo5b2o7b6ob2o$45b2o4bo21b2o$42b2o4bo2bo14b2o5b2o$41bo2bo3bo2bo14b\n2o5b2o$41bo2bo4b2o15b2o5b2o$41bo4b2o18b2o$41bo3bo4bo15b2ob6o$42b2obo4b\no15b2ob6o2755b2o$46b4o2780b2o6$2854b2o$44b2o2808b2o$43b4o$42bob2ob2obo\n16bo2bobo$47b2o2bo13b2obob3o$42b2o2b2o2b3o13bo6bo$42b4obo2b3o12b2o5bo$\n41bo2bo3bo2bo$40b3o2bob4o6b2o7bo5b2o$40b3o2b2o2b2o5bobo6bo6bo$41bo2b2o\n10bo9b3obob2o$42bob2ob2obo4b2o9bobo2bo$46b4o2752b2o$47b2o2753b2o$2847b\n2o5b2o$2847bob2ob2obo$2848bobobobo$2848bobobobo$2715b2o130bo7bo$43bo2b\no8b2o2658b2o78b3o3b3o$47bo8bo2737bo2bo3bo2bo$48b2o6bobo7b6ob2o2719bo3b\nobo3bo$42bob2o6bo4b2o7b6ob2o2718b2obobobobob2o43b2ob2o$42bo2bo3bo23b2o\n2718b2ob2o3b2ob2o41bo2bobo2bo$41bo3bob3o16b2o5b2o2719b3o5b3o42b3o3b3o$\n40bo11bo13b2o5b2o2773bo5bo$43b3obo3bo14b2o5b2o$43bo3bo2bo15b2o2786b2o$\n40bo6b2obo15b2ob6o2779b2o$43b2o21b2ob6o$45bo2617b2o137bo$46bo2bo2613b\n2o136bobo$2708b2o5b2o83bo3bo$2707bo2bo3bo2bo82b5o$2708bo2bobo2bo82bobo\nbobo$2711bobo86bo3bo$2600b2o107b3ob3o67b2o$2600b2o105b3o5b3o65b2o15bo\n3bo$47b2o2607b3o3b3o42b2o7b2o81bobobobo$48bo18bo2bobo2583bo2bobo2bo42b\n2o7b2o77b2o3b5o$43b3o2b2o15b2obob3o2582bo3bobo3bo42bob2ob2obo78b2o3bo\n3bo$41b3obo3bo16bo6bo2581b4o3b4o42b3o3b3o84bobo$41bo4bob2o15b2o5bo\n2583bo7bo44bo5bo86bo$45bobo$43b2obo4bo5b2o7bo5b2o$43bo3bob3o4bobo6bo6b\no2642b2o$43b2o2b3o6bo9b3obob2o2641b2o$44bo10b2o9bobo2bo2607bo$44b2o\n2502b2o128bobo$2548b2o128bo2bo94b3o3b3o$2593b2o5b2o77b2o95b3o3b3o$\n2592bo2bo3bo2bo172bob2o3b2obo$2593bo2bobo2bo173bob2o3b2obo$2596bobo\n177b2o5b2o$47b2o2436b2o107b3ob3o43b2o131bo5bo$44bo10b2o11b2o2415b2o\n105b3o5b3o41b2o$43bobo2b2o6bo10b4o2470b3o3b3o42b2o7b2o$41bobob3o2bo5bo\nbo7bob2ob2obo2466bo2bobo2bo42b2o7b2o53b2o11bo$41bo2b6o7b2o12b2o2bo\n2464bo3bobo3bo42bob2ob2obo54b2o5bo5b2o107b2ob2o$44b2ob2o17b2o2b2o2b3o\n2463b4o3b4o42b3o3b3o62b2o2bobo98bo6b2o5bo$43b6o2bo14b4obo2b3o2464bo7bo\n44bo5bo62b2o102b2ob2o3bobobob2ob2o$42bo2b3obobo13bo2bo3bo2bo2691b2ob2o\nbobobo3b2ob2o$43b2o2bobo14b3o2bob4o2694bo5b2o6bo2b2o$48bo15b3o2b2o2b2o\n2525b2o168b2ob2o11bobo$44b2o19bo2b2o2530b2o184bo$66bob2ob2obo2489bo$\n70b4o2359b2o128bobo87b2o$71b2o2360b2o128bo2bo85bobo114bo5bo$2478b2o5b\n2o77b2o71b3o3b3o8bo113b2o5b2o$2477bo2bo3bo2bo149bo2bobo2bo11b2o108bob\n2o3b2obo$2478bo2bobo2bo73b2o75b2obobob2o12b2o107bob2o3b2obo$2481bobo\n76b2o75b2o5b2o11bo110b3o3b3o$2370b2o107b3ob3o43b2o237b3o3b3o$56b2o\n2312b2o87bo17b3o5b3o41b2o$57bo2368b3o3b3o23bobo16b2o7b2o309b3o$57bobo\n2366bo2bobo2bo23bo2bo15b2o7b2o53b2o254bo$58b2o2365bo3bobo3bo23b2o17bob\n2ob2obo54b2o5bo90b2ob2o154bo$2425b4o3b4o42b3o3b3o62b2o86bo2bobo2bo$\n2426bo7bo19bo24bo5bo62b2o79b3o3bo3bo3bobo$2453bobo173bobo3bo3bo3b3o$\n2453bo2bo172bo2bobo2bo$2454b2o29b2o144b2ob2o$2485b2o$2449bo$2318b2o\n128bobo87b2o235b2o$2318b2o128bo2bo85bobo235b2o$2363b2o5b2o77b2o71b3o3b\n3o8bo89b2o5b2o$2362bo2bo3bo2bo149bo2bobo2bo98b2obobob2o210bobo$2363bo\n2bobo2bo73b2o75b2obobob2o28bobo67bo2bobo2bo211b2o$2366bobo76b2o75b2o5b\n2o29b2o67b3o3b3o211bo$2364b3ob3o43b2o144bo$2362b3o5b3o41b2o$2311b3o3b\n3o42b2o7b2o$2311bo2bobo2bo42b2o7b2o53b2o$2310bo3bobo3bo42bob2ob2obo54b\n2o5bo90b2ob2o$2310b4o3b4o42b3o3b3o62b2o86bo2bobo2bo$2311bo7bo44bo5bo\n62b2o79b3o3bo3bo3bobo$2514bobo3bo3bo3b3o289b3o$2514bo2bobo2bo297bo39bo\n$2370b2o144b2ob2o11b3o36bo249bo39b2o$2370b2o160bo39b2o286b2o$2533bo37b\n2o$2423b2o211b2o$2318bo103bobo211b2o$2317b3o87b3o3b3o8bo89b2o5b2o$\n2316bo3bo86bo2bobo2bo98b2obobob2o$2316b2ob2o86b2obobob2o28bobo67bo2bob\no2bo$2316b2ob2o86b2o5b2o29b2o67b3o3b3o$2299b2o144bo386b2o$2299b2o15b2o\nb2o511bobo$2316b2ob2o511bo38bobo$2311b2o3bo3bo551b2o$2311b2o4b3o89b2ob\n2o458bo$2318bo88bo2bobo2bo$2399b3o3bo3bo3bobo$2399bobo3bo3bo3b3o$2399b\no2bobo2bo$2401b2ob2o50bo$2457b2o$2456b2o$2521b2o320b3o$2521b2o320bo39b\no$2292b3o3b3o98b2o5b2o186bo249bo39b2o$2292bo2bobo2bo98b2obobob2o187b2o\n286b2o$2292b2obobob2o98bo2bobo2bo186b2o$2292b2o5b2o98b3o3b3o3$2429b2o$\n2429bobo35bobo$2294b2ob2o130bo38b2o$2292bo2bobo2bo167bo386b2o$2284b3o\n3bo3bo3bobo554bobo$2284bobo3bo3bo3b3o266b2o286bo$2284bo2bobo2bo274bobo\n35bobo$2286b2ob2o50bo225bo38b2o$2342b2o262bo$2341b2o$2406b2o$2406b2o$\n2284b2o5b2o147b3o$2284b2obobob2o147bo$2284bo2bobo2bo148bo$2284b3o3b3o\n2$2578b3o36bo$2578bo39b2o$2352bobo224bo37b2o$2353b2o$2353bo$2716b3o$\n2452b2o262bo$2452bobo262bo$2452bo$2878b2o$2878bobo$2291b2o585bo$2291b\n2o335bobo$2364bo264b2o$2365b2o262bo$2364b2o$2728b2o$2728bobo$2463b3o\n36bo225bo$2463bo39b2o$2464bo37b2o3$2640bo$2641b2o$2375bobo262b2o$2376b\n2o$2376bo2$2475b2o$2475bobo$2475bo3$2940bobo$2941b2o$2941bo8$2912b3o$\n2912bo39bo$2913bo39b2o$2952b2o11$2674bobo$2675b2o$2675bo2$2774b2o$\n2774bobo$2509b3o262bo$2509bo$2510bo8$2785b3o$2521b2o262bo$2521bobo35bo\nbo224bo$2521bo38b2o$2560bo2$2659b2o$2659bobo$2659bo10$2670b3o$2670bo$\n2671bo3$2808b3o$2808bo$2582bobo224bo$2583b2o444bo$2583bo386b2o56bobo$\n2970bobo$2682b2o286bo38bobo10b2o2bo5bo$2682bobo325b2o10b2o5bo$2682bo\n327bo15b2o3b2o4$3026b2o3b2o$2594bo434bo$2595b2o429bo5bo$2594b2o$2981b\n3o44bobo$2981bo47bo$2693b3o36bo249bo34bobo$2693bo39b2o282b2o$2694bo37b\n2o284bo3bo7bo$3021bobo5bobo$2890bo133bo3bo$2889b3o129bo2bo3bo2bo$2883b\n2o3bo3bo129bobo3bobo$2883b2o2bo5bo130b2ob2o$2887bo5bo127b2ob2ob2ob2o$\n2888bo3bo128b2o2bobo2b2o$3022b3o3b3o$2705b2o181bo3bo130bo5bo$2705bobo\n179bo5bo$2705bo181bo5bo$2888bo3bo$2889b3o137b2o$2890bo138b2o$2880bo$\n2878b2o$2879b2o114b2o7b3o$2994bo2bo4bo4bo$2883bo7bo102bo2bo4bo5bo$\n2775bo105b2ob2o3b2ob2o100bo3bo8bo$2716b3o55b3o218b2o8b2o$2716bo51b2o3b\no3bo106bobobobo$2717bo50b2o2bo5bo103bo3bobo3bo102b2o8b2o$2772bo5bo103b\no2b2ob2o2bo105bo8bo$2773bo3bo105b3o3b3o100b2o8bo5bo10b2o$2884bo5bo101b\no9bo4bo11b2o$2773bo3bo89bobo126bo7b3o$2772bo5bo88b2o124bo2bo$2772bo5bo\n89bo$2773bo3bo$2774b3o113b2o$2728b2o45bo114b2o$2728bobo$2728bo$2857bo\n7b2o$2856b2o6bo2bo$2768bo7bo78bo8bo2b2o$2660bo105b2ob2o3b2ob2o77b2obo\n4bo2bo$2640bo18b3o195b3o6bo$2641b2o10b2o3bo3bo106bobobobo$2640b2o11b2o\n2bo5bo103bo3bobo3bo79b3o6bo$2657bo5bo103bo2b2ob2o2bo76bob2obo4bo2bo$\n2658bo3bo105b3o3b3o76bo10bo2b2o11b2o$2769bo5bo77bo3bo6bo2bo12b2o$2658b\no3bo89bobo99b4o7b2o$2657bo5bo88b2o$2657bo5bo89bo$2658bo3bo$2659b3o113b\n2o$2613b2o45bo114b2o$2613bobo34bo$2613bo34b2o$2649b2o91bo7b2o$2741b2o\n6bo2bo$2653bo7bo78bo8bo2b2o$2545bo105b2ob2o3b2ob2o77b2obo4bo2bo$2544b\n3o195b3o6bo$2538b2o3bo3bo106bobobobo$2538b2o2bo5bo103bo3bobo3bo79b3o6b\no$2542bo5bo103bo2b2ob2o2bo76bob2obo4bo2bo$2543bo3bo105b3o3b3o76bo10bo\n2b2o11b2o$2624b3o27bo5bo77bo3bo6bo2bo12b2o$2543bo3bo76bo12bobo99b4o7b\n2o$2542bo5bo76bo11b2o$2542bo5bo89bo$2543bo3bo$2544b3o113b2o$2545bo114b\n2o3$2627bo7b2o$2626b2o6bo2bo$2538bo7bo78bo8bo2b2o$2536b2ob2o3b2ob2o77b\n2obo4bo2bo$2627b3o6bo$2539bobobobo$2537bo3bobo3bo79b3o6bo$2537bo2b2ob\n2o2bo76bob2obo4bo2bo$2538b3o3b3o76bo10bo2b2o11b2o$2539bo5bo77bo3bo6bo\n2bo12b2o$2624b4o7b2o4$2545b2o$2545b2o3$2512bo7b2o$2511b2o6bo2bo$2510bo\n8bo2b2o$2511b2obo4bo2bo$2512b3o6bo2$2512b3o6bo$2509bob2obo4bo2bo$2508b\no10bo2b2o11b2o$2508bo3bo6bo2bo12b2o$2509b4o7b2o!";
  var field = rle2ary(str);
  canvas = document.getElementById('world');
  t_canvas = document.createElement('canvas');
  canvas.width = t_canvas.width = X_SIZE * CELL_SIZE;
  canvas.height = t_canvas.height =  Y_SIZE * CELL_SIZE;
  context = canvas.getContext('2d');
  t_context = t_canvas.getContext('2d');
  t_context.fillStyle = 'rgb(211, 85, 149)';
  update(field);
  setInterval(function() {document.getElementById("time").innerHTML = time;}, 1000);
}
 
function update(field) {
  var start = + new Date();
  var length = field.length;
  var cp = new Uint8Array(length);
  for (var i=0; i<length; i++) {
    if (field[i] == 0) {
      continue;
    }
    if (i-X_SIZE-1 > 0) cp[i-X_SIZE-1]++;
    if (i-X_SIZE > 0) cp[i-X_SIZE]++;
    if (i-X_SIZE+1 > 0) cp[i-X_SIZE+1]++;
    cp[i+1]++;
    if (i-1 > 0) cp[i-1]++;
    cp[i+X_SIZE-1]++;
    cp[i+X_SIZE]++;
    cp[i+X_SIZE+1]++;
  }
  for (var i=0; i<length; i++) {
    var n = cp[i]
    if (field[i]) {
      if (!(n==2||n==3)) field[i] = 0;
    } else if (n==3) {
      field[i] = 1;
    }
  }
  draw(field);
  time = new Date() - start;
  setTimeout(update, 100/FPS, field);
}
 
function draw(field) {
  context.clearRect(0, 0, X_SIZE * CELL_SIZE, Y_SIZE * CELL_SIZE);
  t_context.clearRect(0, 0, X_SIZE * CELL_SIZE, Y_SIZE * CELL_SIZE);
  for (var i=0; i<field.length; i++) {
    if (field[i]) t_context.fillRect(i%X_SIZE * CELL_SIZE, Math.floor(i/X_SIZE) * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }
  context.drawImage(t_canvas, 0, 0);
}

function rle2ary(str) {
  var pos = str.indexOf('\n');
  var xy = str.substr(0, pos).match(/x = (\d*), y = (\d*),/);
  
  var width = +xy[1];
  var height = +xy[2];
  var res = new Uint8Array(width*height);

  str = str.substr(pos).replace(/\n/g, '');

  var num = 0;
  var y = 0;
  var x = 0;
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'b':
        num = num ? num : 1;
        x += num;
        break;
      case 'o':
        num = num ? num : 1;
        for (var c = 0; c < num; c++)
          res[y * width + x+c] = 1;
        x += num;
        break;
      case '$':
        num = num ? num : 1;
        y += num;
        x = 0;
        break;
      case '!':
        break;
      default :
        num = num * 10 + +str[i];
        continue;
    }
    num = 0;
  }

  X_SIZE = width;
  Y_SIZE = height;
  return res;
}
