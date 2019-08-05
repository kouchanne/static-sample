<template>
  <div class="contents">{{contList}}</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "default",
  asyncData({ params }) {
    return { p: params };
  },
  mounted() {
    this.fetchTagList(this.$nuxt.$route.params.id);
  },
  methods: {
    ...mapActions({
      fetchTagList: "content/fetchTagList"
    })
  },
  computed: {
    ...mapGetters({
      contList: "content/getList"
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