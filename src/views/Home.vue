<template>
  <div class="home">
    <Header></Header>
    <div class="main">
      <input type="text" placeholder="搜索" v-model="$store.state.val" />
      <List :list="dataList"></List>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import List from "./List";
export default {
  data() {
    return {
      list: []
    };
  },
  name: "home",
  components: {
    List
  },
  methods: {},
  computed: {
    dataList() {
      if (this.$store.state.val === "") {
        this.list = this.$store.state.list;
        return this.list;
      } else {
        return (this.list = this.$store.getters.change);
      }
    }
  },
  mounted() {
    this.$store.dispatch({ type: "getList" });
  }
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: auto;
    input {
      width: 80%;
      margin: 10px 35px;
      border: none;
      outline: none;
      background: #ccc;
      line-height: 30px;
      border-radius: 10px;
      text-indent: 20px;
    }
  }
}
</style>