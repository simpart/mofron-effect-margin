/**
 * @file mofron-effect-margin/index.js
 * @brief margin effect
 * @author simpart
 */
const mf = require('mofron');

mf.effect.Margin = class extends mf.Effect {
    /**
     * initialize effect
     *
     * @param p1 (object) effect option 
     * @param p1 (string) margin type
     * @param p2 (string) margin value (css size)
     */
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
    
    /**
     * enable margin effect
     *
     * @note private method
     */
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
    
    /**
     * disable margin effect
     *
     * @note private method
     */
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
    
    /**
     * margin value setter/getter
     *
     * @param p1 (string) enable margin value (size value of css)
     * @param p1 (undefined) call as getter
     * @param p2 (string) disable margin value (size value of css)
     * @param p2 (undefined) call as getter
     * @reutrn (array) [ enable value, disable value ]
     */
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
    
    /**
     * enable margin value setter/getter
     *
     * @param p1 (string) enable margin value (size value of css)
     * @param p1 (undefined) call as getter
     * @reutrn (string) enable value
     */
    enaValue (prm) {
        try {
            let ret = this.member(
                'enaValue',
                ['Size'],
                (undefined !== prm) ? mf.func.getSize(prm) : prm
            );
            return (true === mf.func.isInclude(ret, 'Size')) ? ret.toString() : null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable margin value setter/getter
     *
     * @param p1 (string) disable margin value (size value of css)
     * @param p1 (undefined) call as getter
     * @reutrn (string) disable value
     */
    disValue (prm) {
        try {
            let ret = this.member(
                'disValue', 
                ['Size'],
                (undefined !== prm) ? mf.func.getSize(prm) : prm
            );
            return (true === mf.func.isInclude(ret, 'Size')) ? ret.toString() : null;
        } catch (e) {
            console.error(e.stack);
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
