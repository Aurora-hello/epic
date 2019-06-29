module.exports = function epic(mod) {
		
	//Inner Harmony
	mod.hook('C_START_SKILL', 7, event => {
        if(event.skill.id === 230100) {
            mod.send('S_CHAT', 3, {
                name: mod.game.me.name,
                message: `Birth is exhausted, the holy life has been lived out, what can be done is done, of this there is no more beyond`
            });
        }
    });
	
	//Burning Heart
	mod.hook('C_START_SKILL', 7, event => {
        if(event.skill.id === 150704) {
            mod.send('S_CHAT', 3, {
                name: mod.game.me.name,
                message: `The way is not the sky, the way is the heart`
            });
        }
    });
	
	//Harmonic Burning Heart
	mod.hook('C_START_SKILL', 7, event => {
        if(event.skill.id === 150731) {
            mod.send('S_CHAT', 3, {
                name: mod.game.me.name,
                message: `Breath of life, stream of death`
            });
        }
    });
	
	//Attenuement
	mod.hook('C_START_SKILL', 7, event => {
        if(event.skill.id === 170100) {
            mod.send('S_CHAT', 3, {
                name: mod.game.me.name,
                message: `Loud splashes the brook but the oceans depth are calm`
            });
        }
    });
	
	//Fire Avalanche
	mod.hook('C_START_SKILL', 7, event => {
        if(event.skill.id === 80231) {
            mod.send('S_CHAT', 3, {
                name: mod.game.me.name,
                message: `You will not be punished for your anger, you will be punished by your anger`
            });
        }
    });
	
	//Harmonic Fire Avalanche
	mod.hook('C_START_SKILL', 7, event => {
        if(event.skill.id === 80251) {
            mod.send('S_CHAT', 3, {
                name: mod.game.me.name,
                message: `You will not be punished for your anger, you will be punished by your anger`
            });
        }
    });
	
	//Harmonic and normal Shuriken
	mod.hook('C_START_SKILL', 7, event => {
        if(event.skill.id === 210100) {
            mod.send('S_CHAT', 3, {
                name: mod.game.me.name,
                message: `If you truly seek peace, your blade will only hurt the evil`
            });
        }
    });
	
	
}