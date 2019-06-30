const messages = require("./messages.json");
module.exports = function epic(mod) {

function send(message) {
mod.send('S_CHAT', 3, {
        name: mod.game.me.name,
        message: message
    })
}	

mod.hook('C_START_SKILL', 7, event => {
    if(Object.keys(messages).includes(event.skill.id.toString()) && mod.game.me.class === 'assassin') {
        send(messages[event.skill.id]);
    }
});
	
}