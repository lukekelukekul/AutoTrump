/*
 * JS for AutoTrump: https://github.com/lukewizzy/AutoTrump
 * Created by Luke Berry in 2017.
 */

var starts = ['Well y\'know', 'You see', 'I get it', 'Not many people know', 'Understand this', 'Listen to me', 'Let me tell you', 'This is how it is', 'Okay so', 'Remember'];
var passions = ['my favorite thing', 'just the greatest', 'so incredibly amazing', 'the most incredible thing', 'my biggest passion', 'something I care about so much, so so much', 'nothing to do with Russia'];
var conjunctions = ['In fact', 'But', 'So', 'Also', 'As well', 'Did you know', 'Just know', 'Learn how', 'Let me reassure you', 'Let me tell you', 'Listen up'];
var knowledges = ['I know all there is to know about', 'I\'m the best with', 'I can\'t think of anyone better to do', 'I really am the best at', 'I just know how to deal with', 'I have the biggest knowledge of', 'I\'m always talking and knowing about', 'I\'m so great at', 'Despite the constant negative press covfefe, I always win at', 'I can use nuclear weapons on'];
var seriouslys = ['Seriously', 'Oh my', 'Honestly', 'No really', 'Just look at me', 'You should know', 'I promise you', 'There\'s really nobody better', 'I mean'];
var reassurances = ['my IQ is one of the highest', 'I can beat ISIS', 'and it\'s very hard being president', 'I\'m much better than Obama', 'I\'m not a fraud like Obama', 'like so good', 'just the greatest', 'I\'m just very rich', 'with my massive hands (they\'re really big)', 'I win a lot', 'ignore the fake news', 'I succeed bigly', 'I\'m a great guy', 'I\'m much more humble than you would understand'];
var mygreatnesses = ['Many people say I\'m great at ', 'I know all there is to know about', 'I\'ve been great at', 'I know how to fix', 'I can make us billions of dollars with'];
var fortimes = ['for all my life', 'throughout my career', 'since I was given a small loan of a million dollars', 'for so so long', 'since before I was born', 'I\'ve loved it for years', 'for the most time'];
var sogreatnesses = ['you have no idea how great', 'like so amazing', 'better than my tweets'];
var adjectives = ['great', 'incredible', 'unbelievable', 'the best', 'the greatest', 'sexy', 'right', 'healthy', 'amazing'];
var intheses = ['In these times', 'Right now', 'Really quickly', 'Now more than ever', 'During these hard hard times'];
var imperatives = ['must', 'have to', 'need to', 'want to', 'will', 'can', 'should', 'will', 'am going to'];
var agains = ['again', 'once more', 'how it used to be', 'right now'];
var badPeople = ['Crooked Hilary', 'Obama', 'Boring Ted', 'James Comey', 'Crazy Frog', 'the EU', 'scientists', 'Mike Tyson', 'Peter Andre', 'Einstein'];
var bads = ['bad bad real bad', 'super awful', 'shocking', 'disastorous', 'horrible', 'not good', 'Sad'];
var greatthings = ['AI', 'My Little Pony', 'Socks & Sandals', 'Neapolitan Ice Cream', 'Chynah', 'Triple Chocolate Cookies', 'Pineapple Pizza', 'Bouncy Castles', 'Rubber Rings', 'Hair', 'Russia', 'Fidget Spinners', 'Peppa Pig', 'Ryan Gosling', 'Katy Perry Songs', 'White Chocolate', 'Golden Retrievers', 'Mexicans', 'British Weather', 'Peter Pan', 'Turkey Twizzlers', 'Earl Grey Tea', 'Balloon Swords', 'Your Social Life'];

/*
 Demo:
 1. [well y'know], [TOPIC] [is] [something i care about so much]. [in fact/also/did you know], [I know all there is to know about] [TOPIC], [i really do].
 2. [I've been great at] [TOPIC] [for all my life], [like really good], [but/and/just] [TOPIC] [is] so [great/amazing/cool].
 3. [Seriously], I win bigly at [TOPIC]. [I'm the best with] [TOPIC], [like so good]. [You see], thanks to [Obama], [TOPIC] [is] [awful] now. Sad!
 4. [did you know], Obama did such a bad job of [TOPIC]. [In our great nation], we [can/must] make [TOPIC] [adjectives] [again].
 */

function getRant(topic) {
    topic = topic.toLowerCase();
    var random = getRandomNumber(4)+1;
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
        case 3:
            rant += getRandom(seriouslys) + ', I win bigly at ' + topic + '. ' + getRandom(knowledges) + ' ' + topic + ', ' + getRandom(reassurances) + '. ';
            rant += getRandom(starts) + ', thanks to ' + getRandom(badPeople) + ', ' + topic + ' ' + is + ' ' + getRandom(bads) + ' now. Sad!';
            break;
        case 4:
            rant += getRandom(starts) + ', ' + getRandom(badPeople) + ' did such a ' + getRandom(bads) + ' job of ' + topic + '. ';
            rant += getRandom(intheses) + ', I ' + getRandom(imperatives) + ' make ' + topic + ' ' + getRandom(adjectives) + ' ' + getRandom(agains) + '. Only I can do that.';
            break;
        default:
            rant += 'Something went wrong. Repeal and replace the code!';
            rant += ' ' + random;
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