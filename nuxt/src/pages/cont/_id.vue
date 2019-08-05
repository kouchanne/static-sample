<template>
  <div class="contents">
    <article role="main">
      <h1>{{cont.title}}</h1>
      <ul class="tagList">
        <li v-for="(tag, i) in cont.tags" :key="i">{{tag}}</li>
      </ul>
      <div class="lead">{{cont.lead}}</div>
      <section>ほげほげほげほげほげ</section>
    </article>
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
    this.fetchContent(this.$nuxt.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchContent: "content/fetchContent"
    })
  },
  computed: {
    ...mapGetters({
      cont: "content/getContent"
    })
  }
};
</script>

<style scoped>
h1 {
  margin: 0 0 19px;
  display: flex;
  line-height: 1.5em;
  font-size: 182%;
  font-weight: bold;
}
</style>