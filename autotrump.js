/*
 * JS for AutoTrump: https://github.com/lukewizzy/AutoTrump
 * Created by Luke Berry in 2017.
 */

var starts = ['Well y\'know', 'You see', 'I get it', 'Not many people know', 'Understand this', 'Listen to me', 'Let me tell you', 'This is how it is', 'Okay so', 'Remember'];
var passions = ['my favorite thing', 'just the greatest', 'so incredibly amazing', 'the most incredible thing', 'my biggest passion', 'something I care about so much, so so much', 'nothing to do with Russia'];
var conjunctions = ['In fact', 'But', 'So', 'Also', 'As well', 'Did you know', 'Just know', 'Learn how', 'Let me reassure you', 'Let me tell you', 'Listen up'];
var knowledges = ['I know all there is to know about', 'I\'m the best with', 'I can\'t think of anyone better to do', 'I really am the best at', 'I just know how to deal with', 'I have the biggest knowledge of', 'I\'m always talking and knowing about', 'I\'m so great at', 'Despite the constant negative press covfefe, I always win at', 'I can use nuclear weapons on'];
var seriouslys = ['Seriously', 'Oh my', 'Honestly', 'No really', 'Just look at me', 'You should know', 'I promise you', 'There\'s really nobody better', 'I mean'];
var reassurances = ['I really do', 'my IQ is one of the highest', 'I can beat ISIS', 'and it\'s very hard being president', 'I\'m much better than Obama', 'I\'m not a fraud like Obama', 'like so good', 'just the greatest', 'I\'m just very rich', 'with my massive hands (they\'re really big)', 'I win a lot', 'ignore the fake news', 'I succeed bigly', 'I\'m a great guy', 'I’m much more humble than you would understand.'];
var mygreatnesses = ['Many people say I\'m great at ', 'I know all there is to know about', 'I\'ve been great at', 'I know how to fix', 'I can make us billions of dollars with'];
var fortimes = ['for all my life', 'throughout my career', 'since I was given a small loan of a million dollars', 'for so so long', 'since before I was born', 'I\'ve loved it for years', 'for the most time'];
var sogreatnesses = ['you have no idea how great', 'like so amazing', 'better than my tweets'];
var adjectives = ['great', 'incredible', 'unbelievable', 'the best', 'the greatest', 'sexy', 'right', 'healthy', 'amazing'];
var intheses = ['In these times', 'Right now', 'Really quickly', 'Now more than ever', 'During these hard hard times'];
var imperatives = ['must', 'have to', 'need to', 'want to', 'will', 'can', 'should', 'will', 'am going to'];
var agains = ['again', 'once more', 'how it used to be', 'right now'];
var greatthings = ['AI', 'Cookies', 'Pineapple Pizza', 'Bouncy Castles', 'Rubber Rings', 'Hair', 'Russia', 'Fidget Spinners', 'Peppa Pig', 'Ryan Gosling', 'Katy Perry Songs', 'White Chocolate', 'Golden Retrievers', 'Mexicans'];

/*
 Demo:
 [well y'know], [TOPIC] is [something i care about so much]. [in fact/also/did you know], [I know all there is to know about] [TOPIC], [i really do].
 [I've been great at] [TOPIC] [for all my life], [like really good], [but/and/just] [TOPIC] is so [great/amazing/cool].
 [did you know], Obama did such a bad job of [TOPIC]. [In our great nation], we [can/must] make [TOPIC] [adjectives] [again].
 */

function getRant(topic) {
    topic = topic.toLowerCase();
    var random = getRandomNumber(3);
    var rant = '';
    var is = topic.charAt(topic.length-1) === 's' ? 'are' : 'is';
    switch (random) {
        case 1:
            rant += getRandom(starts) + ', ' + topic + ' ' + is + ' ' + getRandom(passions) + '. ';
            rant += getRandom(conjunctions) + ' ' + getRandom(knowledges) + ' ' + topic + '. ' + getRandom(seriouslys) + ', ' + getRandom(reassurances) + '.';
            break;
        case 2:
            rant += getRandom(mygreatnesses) + ' ' + topic + '. I\'ve been ' + getRandom(adjectives) + ' at ' + topics + ' ' + getRandom(fortimes) + ', ' + getRandom(sogreatnesses) + '. ';
            rant += getRandom(conjunctions) + ', me and ' + topic + ' ' + is + ' ' + getRandom(adjectives) + '.';
            break;
        default:
            rant += getRandom(starts) + ', Obama did such a bad job of ' + topic + '. ';
            rant += getRandom(intheses) + ', I ' + getRandom(imperatives) + ' make ' + topic + ' ' + getRandom(adjectives) + ' ' + getRandom(agains) + '. Only I can do that.';
            break;
    }
    return rant;
}

function getGreatThing() {
    return getRandom(greatthings);
}

function getRandom(strs) {
    return strs[getRandomNumber(strs.length)];
}

function getRandomNumber(top) {
    return Math.floor(Math.random()*top);
}