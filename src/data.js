// this is the data file for the game. there is probably a better way to implement this but i'm too lazy so anyone reading this can give it a try. :)
// text is the main text describing things, progress is the action tracker, length is the clicks required to pass, action is the button text.

const content = [
    {
        "text": "You walk into the dining room. The first thing to catch your eye is a bowl of light-blue hue, filled to the brim with nacho-cheese chips. It is just sitting on the table, not serving any purpose.<br><br>No one is watching...",
        "progress": "Chips eaten",
        "length": "100",
        "action": "Eat a chip"
    },
    {
        "text": "Oh dear. Kevin walked in at juuuust the right time to see you practically inhaling the last chips in the bowl. The cheese stains coating your fingers don't help, either.",
        "progress": "Distance until escape",
        "length": "50",
        "action": "RUN AWAY"
    },
    {
        "text": "You come to a screeching halt at the end of the hallway. You quickly realize that this is a dead end and that your punishment will certainly not be light enough to make turning yourself in worth it. Then you see an open window nearby.",
        "progress": "\"Toodles!\"",
        "length": "5",
        "action": "Jump out the window!"
    },
    {
        "text": "You fall onto cold, concrete pavement. Your face feels broken. You hear the comically squeaky noise of Kevin's 20-inch-long pointy shoes as he shuffles to the door, exits the house, and begins looking for you outside. You need to get up.<br>Now.",
        "progress": "Standing up",
        "length": "10",
        "action": "Get up"
    },
    {
        "text": "You lift yourself off the pavement and immediately begin sprinting down the street, resisting the temptation to check if your face is broken with a frankly impressive amount of willpower that you really should have used to avoid devouring all those chips in the first place.<br><br>Anyway, you'd better run before Kevin finishes trying not to impale his lawn gnomes with the front half of his feet.",
        "progress": "Distance from Kevin",
        "length": "100",
        "action": "FLEE"
    },
    {
        "text": "You race through the completely empty city that you have lived in your whole life, bringing back the memories of all the people who used to live here, but dissapeared one-by-one without ever giving any reason or saying goodbye. Due to your current situation, you can't help but wonder how much the local property value has decreased due to you and Kevin's \"antics\".<br><br>Despite feeling as nauesous as if you had drunk a McBurger and with your ability to tell where you are rapidly decreasing, you perisist. You kick your adrenaline levels up to 110, cross a few hopes and dreams off your bucket list, and run faster than you ever have in your life.",
        "progress": "Adrenaline",
        "length": "110",
        "action": "LETS GOOOOO"
    },
    {
        "text": "About 5 hours later, you collapse from exaustion in a completly unfamiliar-looking forest. Kevin is nowhere to be seen...",
        "progress": "\"So where is this place?\"",
        "length": "30",
        "action": "Look around"
    },
    {
        "text": "Ah! You recognize this place. This land is the estate of Ms. Melianna, your 69-year-old neighbor who disappeared recently. Her mansion should be located in the forest somewhere. Seeing as you certainly aren't going back to Kevin anytime soon, and the mansion is surely being wasted with nobody to use it, you easily decide exactly where you want to sleep tonight.<br><br>How hard can finding a mansion from it's backyard be?",
        "progress": "Searching the area",
        "length": "69",
        "action": "Look around harder"
    },
    {
        "text": "After trekking through the greenery for an indeterminate length, you spot a cat with black fur, dotted with completely random white spots that you would have spent the next 5 hours wondering about if you weren't more focused on how it looks half-starved to death. It was eating the corpse of an unfortunate bird, up until the moment it noticed you and began eyeing the paunch you gained from eating all those chips with malicious intent written all over it's pinched face.<br><br>A red velvet collar hangs around it's neck, and in place of a nametag is a golden key. This cat must have belonged to Ms. Melianna before she vanished, and that key must have something to do with the mansion.<br><br>But you don't have any time to think as the cat swiftly hurls it's skeletal figure at you, scraggly claws drawn.",
        "progress": "Deflect attack",
        "length": "2",
        "action": "Swing fist"
    },
    {
        "text": "Your fist meets the cat mid-air, giving it a convenient body part to grab onto and tear to bloody shreds. You cry like a baby from the sheer pain and agony inflicted on your arm as the kitty bites into your flesh.<br><br>You want to make this beast suffer as much as possible from it's decision to make you suffer, so naturally you decide to split it's skull in half by giving it a good hard knock on a nearby oak with your cat-laden fist.",
        "progress": "Cracking kitty skull open on tree",
        "length": "5",
        "action": "Swing fist HARDER"
    },
    {
        "text": "You punch the oak tree with the cat looking at the wood rushing towar—CRAK!<br><br>The dazed cat falls off your arm and immediately hurls itself upon your leg.",
        "progress": "Punt this fuck into kitty hell",
        "length": "3",
        "action": "Swing leg"
    },
    {
        "text": "Your leg has been waiting for this moment it's whole life, from it's very first leg day. It launches the cat skybound, sailing along it's parabola until it gets shipwrecked on the sharpest branch in the forest, skewered through the heart.<br><br>You eagerly limp over and jump to grab the key from it's bloody corpse, because you get the feeling that it will be important later. Your arm shrieks with agony the very moment you grab the key, and you realize that you should probably do something about your arm, which is already losing the fight to gangrene. As you can probably tell by it's dark-purple color and the amount of exposed bone, the only hope left at this point is amputation.<br><br>But how do you safely remove an arm in the middle of a forest?",
        "progress": "\"With that cat's gnarly claws, duh.\"",
        "length": "20",
        "action": "Peel kitty claw from corpse"
    },
    {
        "text": "You now have exactly one unrealistically sharp claw, plucked straight off a starving cat's dead body.<br><br>So whatcha waiting for? Chop your arm off.",
        "progress": "Remove deprecated library from code",
        "length": "40",
        "action": "Hack away!"
    },
    {
        "text": "Done. You tear off a part of your shirt and wrap it around your stump like a total badass. Just kidding, you cry about your woes to the uncaring squirrels passing by on the above branches, stopping only to inspect the weird fleshy bloody thing hanging from one of the aforementioned branches.",
        "progress": "Sad section",
        "length": "10",
        "action": "Much-needed emotional release",
    },
    {
        "text": "It's getting dark out, and since you probably won't find Ms. Melianna's mansion anytime soon in your current state, you begin gathering sticks for the laborious process of building your new home-away-from-home.",
        "progress": "Lean-to shelter construction progress",
        "length": "200",
        "action": "Build"
    },
    {
        "text": "All done! You gaze lovingly at your beautiful creation. However, it is almost midnight and you really need some rest. You crawl into your little shelter and start trying to get some shuteye.",
        "progress": "Falling asleep",
        "length": "10",
        "action": "Lie still"
    },
    {
        "text": "6 hours later, you wake up to Kevin's flashlight beam shining directly into your eyes.<br><br>While you were mindlessly running away in your desperate bid to LARP as Usain Bolt, Kevin looted a convenience store and obtained convenient items, including the flashlight and the giant fucking axe strapped to his back.",
        "progress": "Words in eloquent apology speech",
        "length": "100",
        "action": "Apologize"
    },
    {
        "text": "\"Sorry bub, I ain't buyin' it.\"<br><br>He pulls out his giant fucking axe and prepares to bring it down on your extremely flabby neck.",
        "progress": "Distance from axe",
        "length": "10",
        "action": "Dodge!"
    },
    {
        "text": "In an unusually impressive move for someone of your naked mole-rat physique, you roll out of the way, smash through the twig-walls of your shelter, and begin sprinting off into the woods at top speed.<br><br>Kevin is pursuing.",
        "progress": "Escape progress",
        "length": "150",
        "action": "RUN FOR IT"
    },
    {
        "text": "You somehow manage to clamber up a nearby tree with only one arm. Kevin is patrolling the area, shining his flashlight in all directions.",
        "progress": "Waiting him out",
        "length": "100",
        "action": "Stay still"
    },
    {
        "text": "After a tense few minutes, Kevin finally stops looking for you and decides to sleep in your shelter for some much-needed rest after trying to murder you for so long.",
        "progress": "\"But that's MY shelter!\"",
        "length": "4",
        "action": "Yell"
    },
    {
        "text": "Kevin hears you, runs over, and kicks the tree. You fall out, sprawling across the ground like a senile pet on an euthanasia table. Kevin once again stands over you and pulls out his giant fucking axe.<br><br>You would normally be doomed in this scenario, but luckily the raising of Kevin's arms has left his private parts unguarded.",
        "progress": "Delivering pain",
        "length": "10",
        "action": "Headbutt"
    },
    {
        "text": "Getting up on your knees, you lunge scalp-first at Kevin's genitals. Kevin screeches in unfathomable horror, dropping his giant fucking axe to the ground behind him.<br><br>He then joins his axe on the ground, writhing and shrieking. You should have enough time to start limping away before he gets up.",
        "progress": "GTFO",
        "length": "20",
        "action": "\"Owned. B)\""
    },
    {
        "text": "Limping as fast as a fast thing, you race half-asleep through the foilage. It seems to have a nasty habit of brushing into the exposed stump of your former arm and causing you immesurable pain, but your flight response won't take any of that bullshit.",
        "progress": "ESCAPE KEVIN",
        "length": "100",
        "action": "LIMP HARDER MY BOI"
    },
    {
        "text": "After a good deal of good limping, you finally collapse into the grass. Looking up ahead is the most promising sight you've seen throughout this entire chase: a road.<br><br>You immediately get back up, Now with something to follow, you begin wondering about all the other places in the world. Excepting a few visits to your neighbors' homes that Kevin took you on, you have lived your entire life up to this point completely in your apartment with Kevin. What else could you see in the world that you have only ever read about?",
        "progress": "On the road again, going places that I've never been...",
        "length": "50",
        "action": "Do adventure"
    },
    {
        "text": "You follow a road for an unknown period of time. Your brain at this point is just complete shit and is only getting you to move by having you shamble forward like a zombie with an axe lodged up it's rear.<br><br>But eventually, you finally come across something: A dead hitchhiker's corpse.",
        "progress": "Ooohh, loot?",
        "length": "20",
        "action": "Investigate the body"
    },
    {
        "text": "The hitchhiker has a full head of curly red hair, and no other memorable traits. Other than the psychedelic floral tee that is coming loose from his dead body, of course. Besides the hitchhiker himself, there is also a cardboard sign, with no text other than the name LOVEBURG etched onto the surface in a gaudy Comic Sans look.<br><br>\"Damn,\" you think, \"this is the perfect hitchhiking sign! It draws the eye, conveys the necessary info, and costs nothing to create!\"<br><br>You grab the dead bloke's sign and begin waiting for any cars to come along, because you are now curious about visiting this \"Loveburg\" place.",
        "progress": "tick tock tic tok tiktok",
        "length": "200",
        "action": "w a i t"
    },
    {
        "text": "As time melts like the clocks from that one Salvador Dali painting, you begin keeping yourself awake by toying with the dung beetle milling about the dirt beside your leftmost shoelace. This isn't fair to the poor dung beetle, who really just wanted some dung but now has to put up with the whims of the (presumably)crackheaded giant who keeps rolling the dung away from her.<br><br>Unfortunately, this dung beetle's fortunes are not getting any better, because the (possibly)methheaded goliath is now kicking the dung onto the road.",
        "progress": "Crushing dung beetle dreams",
        "length": "10",
        "action": "Kick dung"
    },
    {
        "text": "The dung rolls into the middle of the road. The dung beetle quickly begins giving chase, skittering swiftly to the only source of food she can feed her four ki...<br><br>*squish*<br><br>A white pickup truck rolls onto the dung beetle, it's carcass joining all the weird red stains that definitely aren't blood that are on the tires. With the dung beetle's dreams sufficiently crushed, your ride has finally arrived. As it screeches to a halt, the dirt-caked windows crawl downwards to reveal the truck's heavily freckled underage driver, along with the 5 other people crammed into the truck with her.<br><br>\"Hey shithead, mind getting the fuck in? We don't have all day to sit here for ya to finish pontificating!\"",
        "progress": "Getting the fuck in",
        "length": "15",
        "action": "Finish pontificating"
    },
    {
        "text": "You clamber onto the truck's greasy frame and a multitude of grimy arms pull you into the most suffocating, squashed together position you have ever been in. For starters, you are sitting on the lap of a squishy man in a dark-blue logo-coated hoodie, while the two of you are crammed in between a muscular young redheaded woman covered in tattoos and a withering old man who is really too old to ride around like this. Squeezing into the trunk is the most generic looking person you have ever seen.<br><br>In the front seats are two teenagers, one furiously typing on a laptop while bragging about their front-seat priveliges. The other is the driver, a ginger-haired teenage girl with so many freckles they don't seem to all fit on her face.<br><br>She looks back at you and shouts \"Hey stranger! Lemme tell you all our names!\" over the chaos.",
        "progress": "Listening intently",
        "length": "10",
        "action": "Avoid suffocating"
    },
    {
        "text": "\"I'm Cindina,\" the driver says. \"and you're sitting on Adormam.\"<br><br>The guy in the hoodie taps your shoulder to acknowledge this statement, then Cindina starts barking out more names.<br><br>\"The lady next to you is Iatrana,\" Iatrana does an extremely casual salute.<br><br>\"and the prune is Erald.\" Erald is displeased with this statement.<br><br>\"My lucky copilot of the day is Sam,\" Sam types \"Hello hitchhiker\" on their screen.<br><br>\"and the one in the trunk is...\"<br><br>The generic person's name is so generic you cannot remember it. They themselves seem to be mildy unused and offended to hear their own name, and only barely accepting of it.<br><br>\"So yeah, that's the gang.\" Cindina rattles. \"Wait, where did you want to go again?\"",
        "progress": "Stating your hitchhiking destination",
        "length": "15",
        "action": "TALK OVER NOISE"
    },
    {
        "text": "\"Wait wait wait, you want to go to Loveburg?\"<br><br>The entire vehicle goes silent except for the loudly-humming engine inside this truck's hood. These people are acting as if they were telepathically talking amongst themselves, trying to decide what to do with you.<br><br>But obviously, that couldn't be true.",
        "progress": "Awkward silence",
        "length": "50",
        "action": "Sit still and be uneasy"
    },
    {
        "text": "Cindina turns to you and says \"Oh, wonderful! We just happen to be going to Loveburg too!\" in the most plastic smile you have ever seen. Adormam fastens you to your place with his arms and Cindina proceeds to gun the truck's engine to dangerous levels.<br><br>As the forests you fled through whiz by at an unholy pace, you find it increasingly difficult to breathe, hear, or anything else. For starters, the rocketing speeds are forcing you and Adormam ever-so-uncomfortably, squished together like two fruits that are squished together. Iatrana and Erald on your sides and both vying for more streching space is the last thing you could have wanted from your hitchhiking experience.",
        "progress": "Filling your lungs",
        "length": "75",
        "action": "GASP for air"
    },
    {
        "text": "For a second, you are almost not asphixiated.<br><br>Unfortunately, that was the second this truck hit the road's largest pebble.<br><br>You are lurched into one of the seats in front of you, knocking the air out of your lungs. The flying limbs of your jolted comrades slapping into yours is comparatively less interesting, mostly because right after you fall out of your seat and into the abyss that feet dwell in during a car ride.",
        "progress": "GAHHHHHH",
        "length": "5",
        "action": "Struggle past the shoes"
    },
    {
        "text": "You attempt to get up, but Adormam kicks you back down and mutters \"more air this way\".<br><br>Wedged into a cavern and being constantly caressed by a coven of putrid shoes, you are once again struggling to breathe.<br><br>You should probably fight for your survival by fighting to get back up.",
        "progress": "Climb back up",
        "length": "4",
        "action": "Flail, grasp, repeat",
    },
    {
        "text": "For a second, you are almost up.<br><br>Unfortunately, that was the second this truck hit the road's second largest pebble.<br><br>You fall back down into the claustrophobia-inducing hellhole from which you (almost)came. However, there is one key difference: Adormam is now on top of you. He was flung out of his seat by the bump and lands elbow-first on your stomach, which bumps up your chances of suffocating to death in this acursed automobile to about the 99th percentile.",
        "progress": "AVOID DEATH",
        "length": "3",
        "action": "Shove Adormam offa you"
    },
    {
        "text": "You nearly budge Adormam back onto his seat, but Iatrana and Erald have seized the opportunity to claim more space for themselves and shove Adormam back down onto you, ensuring your continued smothering.<br><br>Your vision is growing increasingly dark and blurry, and with it you grow more desperate.",
        "progress": "AVOID DEATH WITH PASSION",
        "length": "2",
        "action": "attac"
    },
    {
        "text": "The world grows dark, and your breathing slowly fades. The truck bumps over more pebbles as your unconsious body grows ever closer to death. As you fade from the realm of the living, you hear the others finally noticing and discussing your death.<br><br>\"Oh damn, guys. Another one asphixiated.\"<br><br>\"Shit. Why do they always go out that way?\"<br><br>\"Don't look at me that way! Adormam was on 'em the whole time, and he didn't make a peep about it!\"<br><br>\"Guys guys guys, before you all get pissed at me for keeping myself alive in this crapspace, look on the bright side: They're still in good enough shape to be nyuded! Not like that guy whose neck snapped from the crushing weight of my butt, right?\"<br><br>\"Well... fine. Let's just get back to base quickly before any nasty stuff sets in.\"<br><br>You die shortly after.",
        "progress": "...",
        "length": "1",
        "action": "..."
    },
    {
        "text": "You once again begin perceiving the world around you, or rather the sterile metal room around you. You have just emerged in the sterile metal room from a sterile metal capsule. On the far side of the room is a line of screens, each one showing a bright green checkmark except for the last one, which displays a flashing red ERROR screen.<br><br>Also you are floating.",
        "progress": "First words",
        "length": "2",
        "action": "\"Wait, what?\""
    },
    {
        "text": "At those words, peals of laughter break out from across the room. You suddenly perceive 2 figures, both of which are inspecting you. Your mind interprets the first one as some sort of businessperson, and the other as some sort of goon. You doubt that they are actually real, mostly because they don't have shadows and are floating.<br><br>But then again, both of those are true for you, too.",
        "progress": "Seconds spent recovering from your wounded ego",
        "length": "10",
        "action": "Hrmph..."
    },
    {
        "text": "The two manage to regain enough of their composure to begin examining you.<br><br>\"Impressive. You and the rest of your department finally stopped using your goddamn M.E.A.T.B.A.Gs to cosplay as productive members of society and got something done for once. Keep it up and I might just pay you fellas enough to afford your birth permits.\"<br><br>\"...\"<br><br>\"So anyway, why don't we introduce our lovely concusser over here to the wonderful world of transsapience?\"<br><br>At this point, the suit turns their attention to you, and seems to be preparing to deliver more exposition just as you are still processing what you heard.",
        "progress": "Exposition processing",
        "length": "15",
        "action": "*whirring brain noises*"
    },
    {
        "text": "\"So you want to know what's going on, yes?\"<br><br>No shit, sherlock.<br><br>\"If you wish to be sarcastic on my planet, then I'd recommend avoiding such generic phrases.\" the businessperson says, presumably to flex their mind-reading ability.<br><br>You don't really care about anything at this point other than getting back to Earth, if this is truly another planet.<br><br>\"Ah yes, I remember now. Our first order of business is to inform you that you haven't ever really been on Earth.\"",
        "progress": "\"Umm... what?\"",
        "length": "5",
        "action": "WTF"
    },
    {
        "text": "\"You see, my parents evacuated the planet you know as 'Earth' centuries ago due to the Great Blitzerkreig, stowing away on one of the exit ships owned by the rich folk just to give me a chance at survival. Your parents were members of the Amicable Morrowship In Service of Heart, or A.M.I.S.H. This pesky cult managed to seize the planet P20E-Cassandra about 43 years before you were born and raised there, hellbent on returning to the simpler times in the early 21st century, back when all humanity had to worry about was global nuclear war, economic fallout, and social unrest.\"<br><br>\"Alas, they needed to be dealt with for reasons I shall explain to you in a minute...\"<br><br>The businessperson clears their throat and prepares to deliver more exposition.",
        "progress": "Exposition processing #2",
        "length": "43",
        "action": "*light humming of brain cogs can be heard faintly in the background*"
    },
    {
        "text": "\"Wait wait wait, what's your deal though? Why the fuck are we all a bunch of trippy floating light-beings? What does your company even do?\" you ask.<br><br>\"There we go!\" the businessperson says, the two-second wait they had anticipated before the questions were asked complete.",
        "progress": "The next two-second wait",
        "length": "2",
        "action": "wait..."
    },
    {
        "text": "\"Let's cut to the chase.<br><br>My name is Kello Fey, and I'm the fourth slickest suit in this galaxy. That's mostly because everyone else is able to apply eyeliner to their M.E.A.T.B.A.Gs without gouging their retinas out, but at least I still have dominance over them thanks to a gargantuan intergalactic market monopoly on my greatest invention: the NUYU!\"",
        "progress": "Popping another question",
        "length": "4",
        "action": "Inquire"
    },
    {
        "text": "\"And what the hell is a NUYU?\" you sputter.<br><br>\"To put it simply, it's what you are now! The NUYU is the next step in human evolution, amplifying everything that could possibly make you more useful to capitalism. You don't eat, don't sleep, don't do any other gross human shit. Additionally, the computer-projected nature of the NUYU makes it so that you can teleport anywhere covered by one of our servers. For physical tasks, you can transition your consiousness into a M.E.A.T.B.A.G, a fully-operatable metal replacement of the human body.<br><br>Your NUYU also would normally replace your consiousness with a new one more benefical to your employer, but it seems you are a bit of a freak, mentally.\" Kello says while gesturing to the lone red ERROR screen.",
        "progress": "Popping yet another question",
        "length": "21",
        "action": "Moar talk less action"
    },
    {
        "text": "\"Errm, what does any of this have to do with me, though? Why am I here? Why did you force me into this without my consent?\"<br><br>\"Well, our business has run into a bit of a roadblock as of late: we've sold a NUYU to everyone who wants one. Our customers, at first eagerly trying to increase their usefulness AKA wages, slowly transitioned into a series of disconnected individuals reluctantly getting one because it's mandatory for keeping up with everyone else.<br><br>That's why we've set our top researchers on developing a gateway to the other universes, to continue selling despite hitting this universe's limit.\"<br><br>Kello clears their throat and prepares to explain more stuff.",
        "progress": "Exproc: The First Episode",
        "length": "5",
        "action": "Process Exposition"
    },
    {
        "text": "\"But that ended up rasing a new problem: The marketing team's '100% in our universe' slogan. Earlier this year, we sent our first interuniversal explorer, Warser, into the portal for a beta test. The research on the alternate reality we had just opened was... concerning. Evolution is much faster for the alt-humans than it is for us, and as a result it appeares that after marketers in their universe created the modern ad industry, the alt-humans rapidly evolved psychic abilities that allowed them to gauge the accuracy of ads.<br><br>This is a massive business liability.\"",
        "progress": "Exproc 2: This Time it's Personal",
        "length": "100",
        "action": "Process Exposition"
    },
    {
        "text": "\"Our marketing team's R&D has confirmed that our product will be impossible to sell if we switch our slogan to '99% in our universe'. We can't just build another portal to another universe; we spent ungodly amounts of un-unobtainium on this one! We are left with no choice but to make our current slogan true. In pursuit of this, we have successfully decimated every alien race from the Eqi's to the Topoolrosos, every nonconforming human from the infamous Regili Renvama to that one guy who wanted to keep using his toaster without having to pay for every session.<br><br>And yet one group remains: AMISH.\"",
        "progress": "Exproc 3: Return of the Plot Point",
        "length" : "99",
        "action": "Process Exposition"
    },
    {
        "text": "\"We've managed to pick off almost every AMISH member, one by one. Except for you and your father, Kevin. The deranged, violent methods of defense he resorted to after realizing we were behind the dissapearances have kept us from nuyuding you both.<br><br>Until we nuyuded you, just now.<br><br>Kevin is now the last living being in this universe to not be a NUYU. The one thing that keeps us from 100%.\"",
        "progress": "Exproc 4: The Shameless Nostalgia Cash-In",
        "length": "2",
        "action": "Process Exposition"
    },
    {
        "text": "\"And of course, this is where you come in.\"<br><br>\"Uh oh, what do you want me to do?\" you halfheartedly grumble.<br><br>\"Now now, you have been living with Kevin for the last 15 years of your life! You are an invaluable asset in our mission to eliminate or nuyude him.\"<br><br>\"And how do you plan on getting me to help you kill my dad?\"<br><br>Kello psychically tells the goon to go fetch something, then tells you to wait a bit.",
        "progress": "Standing around awkwardly",
        "length": "15",
        "action": "w a i t"
    },
    {
        "text": "The goon returns to the room in a MEATBAG, Holding a red bowl filled to the brim with tortilla chips.<br><br>The ravenous beast chained inside of you is engaged in a siege with your mind.<br><br>\"Think about it, dear concusser,\" Kello begins, \"In your current NUYU form, you can't experience any physical sensations. No chemicals in your brain to feel love, or sadness, or the delectable taste of chips. All you have to even know of these things is your memory, which we couldn't erase, in your case. But, if you are able to help us deal with Kevin, we will give you a MEATBAG with these features, which would normally only be gained with 45 years of toil.\"<br><br>\"There isn't much choice,\" Kello says through the smirkiness radiating from their consiousness, \"You are already stuck as a functionally immortal NUYU, and you might as well make the most of it.\"<br><br>Dear god the chips I need the chips.",
        "progress": "Giving in",
        "length": "5",
        "action": "yes yes fuck i cant resist"
    },
    {
        "text": "\"Splendid.\"<br><br>Kello tells the goon to stow the chips in Preservation Core 5, then teleports their consiousness to a room on the far side of the NUYU Opportunity Skysurpasser. You have no idea of how you know this but it probably has something to do with being a disembodied digital consiousness so you don't question it.<br><br>And speaking of teleportation, you are probably supposed to follow Kello.",
        "progress": "Teleporting? First time?",
        "length": "2",
        "action": "Teleport"
    },
    {
        "text": "You are in Squad 1, the finest of all the squad bases that NUYU owns. Which isn't saying much, because the entire area looks like a beat-up bus. The squad that lives here can claim it's for the millitary aesthetic all they like, but everyone knows better.<br><br>Sensing the environment outside of this building, there is no signs of life other than some automated vehichles transporting MEATBAGs to their destinations, as all unfortunate owners of bodies must do.<br><br>Kello directs your attention to the occupants.<br><br>You quickly recognize a familiar group of MEATBAGS: a redheaded woman, two teens, a dude in a blue hoodie, the oldest man you've ever seen, and a generic person.<br><br> The squad that lives here is the squad that killed your original body.",
        "progress": "YOU GUYS AGAIN",
        "length": "10",
        "action": "fuuuuu"
    },
    {
        "text": "The squad revels in your derison, unluckily enough. You quickly pause and switch gears to probing for information.<br><br>\"Now that these lovely individuals have saved you from a pitiful existence as a fleshthing, perhaps it's time for you to all go off together to set things straight with Kevin, eh?\" Kello suggests-while-implying-that-you-are-forced-to-do-this.",
        "progress": "Workin' with the SQUAD",
        "length": "10",
        "action": "Hhhh...hhi?"
    },
    {
        "text": "",
        "progress": "",
        "length": "",
        "action": ""
    }
];
