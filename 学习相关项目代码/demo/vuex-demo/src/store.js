import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
    // 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
    // 且只有当它的依赖值发生了改变才会被重新计算。
    doneTodos: state => {
      // -> [{ id: 1, text: '...', done: true }]
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      // 通过让 getter 返回一个函数，来实现给 getter 传参
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    // mutations方法中是可以传参的，具体用法如下：
    // 这里只是传了一个数字，在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读。
    // mutations方法必须是同步方法！
    // 提交载荷 Payload
    increment (state, n) { //改变store状态的方法
      state.count += n;
    }
  },
  actions: {}
});
