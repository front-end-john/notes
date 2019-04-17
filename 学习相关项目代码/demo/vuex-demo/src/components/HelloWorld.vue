<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      vuex-demo
    </p>
    <ul>
      <li>store：{{ $store.state.count }}</li>
      <li>Todos：{{$store.state.todos}}</li>
      <li>过滤Todos done为true：{{doneTodos}}</li>
      <li>Todos的长度为：{{doneTodosCount}}</li>
      <li>查询ID等于2的Todos，计算属性传参:{{getTodoById(2)}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    doneTodos() {
      return this.$store.getters.doneTodos
    },
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    },
    getTodoById() {
      return this.$store.getters.getTodoById
    }
  },
  created() {
    console.log(this.$store.state.count);
    // 通过提交 mutation 的方式，而非直接改变 store.state.count
    this.$store.commit('increment', 10); // + 1
    console.log('doneTodos:', this.$store.getters.doneTodos);
    console.log('doneTodosCount:', this.$store.getters.doneTodosCount);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  ul
    text-align left
</style>
