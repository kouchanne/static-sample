<template>
  <div>
    <h1>「{{p.id}}」の記事一覧</h1>
    <div class="lead">
      <p>「{{p.id}}」に関する一覧ページです</p>
      <p>ここもデータで管理できるといいよね</p>
    </div>
    <div class="article">
      <article v-for="(cont, i) in list" :key="i">{{cont}}</article>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "content",
  // validate({ params }) {
  //   // 数値でなければならない
  //   return /^\d+$/.test(params.id);
  // },
  asyncData({ params }) {
    return { p: params };
  },
  mounted() {
    this.getList();
  },
  methods: {
    ...mapActions({
      getList: "content/getList"
    })
  },
  computed: {
    ...mapGetters({
      list: "content/getAll"
    })
  }
};
</script>

<style scoped>
h1 {
  line-height: 1.5em;
  font-size: 182%;
  font-weight: bold;
}
</style>