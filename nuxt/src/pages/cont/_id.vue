<template>
  <div class="contents">
    <article role="main">
      <h1>タイトル</h1>
      <ul class="tagList">
        <li>ほぎぃ</li>
        <li>ほぎぃ</li>
        <li>ほぎぃ</li>
        <li>ほぎぃ</li>
      </ul>
      <div class="lead">リード文が入ります</div>
      <section>ほげほげほげほげほげ</section>
      {{cont}}
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
    this.fetchContent();
  },
  methods: {
    ...mapActions(
      {
        fetchContent: "content/fetchContent"
      },
      this.$params.id
    )
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