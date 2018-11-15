import * as types from './mutation-type'

const mutations = {
    [types.INCREMENT](state, count)  {
        state.count = count
    },
    [types.DECEREMENT](state, count) {
        state.count = count
    }
}

export default mutations