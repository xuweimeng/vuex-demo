import * as types from './mutation-type'
import { log } from 'core-js';

const actions = {
    decrementCount({commit, state}, count) {
        commit(types.DECEREMENT, count)
    }
}

export default actions