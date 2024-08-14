/**
 * @file mofron-effect-margin/index.js
 * @brief margin effect
 * @author simpart
 */

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     *
     * @param p1 (object) effect option 
     * @param p1 (string) margin type
     * @param p2 (string) margin value (css size)
     */
    constructor (p1, p2) {
        try {
            super();
            this.modname("Margin");
            this.shortForm("type", "value");
        
            this.transition([
                "margin",
                "margin-top",
                "margin-bottom",
                "margin-left",
                "margin-right"
            ]);

	    this.confmng().add('type', { type:'string', select:['top', 'bottom', 'left', 'right'] });
            this.confmng().add('value', { type:'size' });

            if (0 < arguments.length) {
                this.config(p1,p2);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    contents (cmp) {
        try {
	    let mgn_typ = 'margin';
            if (null !== this.type()) {
                mgn_typ += '-' + this.type()
	    }
	    let set_mgn = {};
	    set_mgn[mgn_typ] = this.value();
	    cmp.style(set_mgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * margin type setter/getter
     * when not specifying anything, everything becomes effective
     * 
     * @param p1 (string) margin type ('top', 'right', 'bottom', 'left')
     * @param p1 (undefined) call as getter
     * @return (string) margin type
     */
    type (prm) {
        try {
            return this.confmng('type', prm);
        } catch (e) {
            console.error(e.stack);
        }
    }

    value (prm) {
        try {
            return this.confmng('value', prm);
        } catch (e) {
            console.error(e.stack);
        }
    } 
}
/* end of file */
