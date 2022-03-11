import * as types from './mutation-types'

export default {
  // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime += Number(time)
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime -= Number(time)
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    const avatar = 'https://i2.hdslb.com/bfs/face/92d66c3b8d6423dcb1f60cb19193a890f60b878b.jpg@52w_52h.webp'
    state.list.push(
      Object.assign({ name: 'tang', avatar }, plan)
    )
  },
  // 删除计划
  [types.DELETE_PLAN] (state, index) {
    state.list.splice(index, 1)
  }
}
