<template>
  <div>
    <span>contページです</span>
    <div>ID : {{p.id}}</div>
    {{list}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "default",
  validate({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id);
  },
  asyncData({ params }) {
    return { p: params };
  },
  mounted() {
    this.getList();
  },
  methods: {
    ...mapActions({
      getList: "company/getList"
    })
  },
  computed: {
    ...mapGetters({
      list: "company/questionList"
    })
  }
};
</script>

<style scoped>
</style>