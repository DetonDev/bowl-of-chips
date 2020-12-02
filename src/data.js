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
        "progress": "Distance 'till escape",
        "length": "50",
        "action": "RUN AWAY"
    },
    {
        "text": "You come to a screetching halt at the end of the hallway. You quickly realize that this is a dead end and that your punishment will certainly not be light enough to make turning yourself in worth it. Then you see an open window nearby.",
        "progress": "\"Toodles!\"",
        "length": "5",
        "action": "Jump out the window!"
    },
    {
        "text": "You fall onto cold, concrete pavement. Your face feels broken. You hear Kevin's extremely loud footsteps as he races to the door, exits the house, and begins looking for you outside. You need to get up.<br>Now.",
        "progress": "Standing up",
        "length": "10",
        "action": "Get up"
    },
    {
        "text": "Ok, you're up. Now RUN!",
        "progress": "Distance from Kevin",
        "length": "100",
        "action": "FLEE"
    },
    {
        "text": "About 5 hours later, you collapse from exaustion. Looking around, you seem to have found your way into a large, sprawling forest. Kevin is nowhere to be seen...",
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
        "text": "And of course, you don't find it. It's starting to get dark, so you begin gathering sticks for the laborious process of building your new home-away-from-home.",
        "progress": "Shelter construction progress",
        "length": "200",
        "action": "Build!"
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
        "text": "You quickly scramble up a nearby tree. Kevin is patrolling the area, shining his flashlight in all directions.",
        "progress": "Waiting him out",
        "length": "100",
        "action": "Stay still"
    },
    {
        "text": "After a tense few minutes, Kevin finally stops looking for you and decides to sleep in your shelter for the night.",
        "progress": "\"But that's MY shelter!\"",
        "length": "4",
        "action": "Yell"
    },
    {
        "text": "Kevin hears you, runs over, and kicks the tree. You fall out. Kevin once again stands over you and pulls out his giant fucking axe.",
        "progress": "Distance from axe",
        "length": "10",
        "action": "Dodge!"
    },
    {
        "text": "You broke through the twig-walls, you can't break through a tree. Kevin brings the axe down on your extremely flabby neck, brutally chopping your head clean off your shoulders.",
        "progress": "Final words",
        "length": "2",
        "action": "\"Wait, what?\""
    },
    {
        "text": "You once again begin perceiving the world around you, or rather the sterile metal room around you.<br><br>Also you are floating.",
        "progress": "First words",
        "length": "2",
        "action": "\"Wait, what?\""
    },
    {
        "text": "At these words, peals of laughter burst from across the room. You suddenly perceive 2 figures, both of which are inspecting you. Your mind interprets the first one as some sort of businessman, and the other as some sort of goon. You doubt that they are actually real, mostly because they don't have shadows and are floating.<br><br>But then again, both of those are true for you, too.",
        "progress": "Seconds spent grumbling about your bruised ego",
        "length": "10",
        "action": "Hrmph..."
    }
];
