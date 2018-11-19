/**
 * @file mofron-effect-margin/index.js
 * @brief margin effect
 * @author simpart
 */
const mf = require('mofron');

mf.effect.Margin = class extends mf.Effect {
    
    constructor (po, p2) {
        try {
            super();
            this.name('Margin');
            this.prmMap(['type', 'value']);
            this.prmOpt(po, p2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enable (tgt) {
        try {
            let mg = (null === this.type()) ? 'margin' : 'margin' + '-' + this.type();
            let setmgn = {};
            setmgn[mg] = this.enaValue();
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disable (tgt) {
        try {
            let mg = (null === this.type()) ? 'margin' : 'margin' + '-' + this.type();
            let setmgn = {};
            setmgn[mg] = this.disValue();
            tgt.adom().style(setmgn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (ena, dis) {
        try {
            if ( (undefined === ena) &&
                 (undefined === dis) ) {
                /* getter */
                return [this.enaValue(), this.disValue()];
            }
            /* setter */
            this.enaValue(ena);
            this.disValue(dis);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    enaValue (prm) {
        try {
            let ret = this.member(
                'enaValue',
                ['Size'],
                (undefined !== prm) ? mf.func.getSize(prm) : prm
            );
            return (undefined !== ret) ? ret.toString() : undefined;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    disValue (prm) {
        try {
            let ret = this.member(
                'disValue', 
                ['Size'],
                (undefined !== prm) ? mf.func.getSize(prm) : prm
            );
            return (undefined !== ret) ? ret.toString() : undefined;
        } catch (e) {
            console.error(e.stack);
        }
    }
    
    type (prm) {
        try {
            return this.member(
                'type',
                ['top', 'right', 'bottom', 'left'],
                prm
            );
        } catch (e) {
            console.error(e.stack);
        }
    }
}
module.exports = mofron.effect.Margin;
/* end of file */
