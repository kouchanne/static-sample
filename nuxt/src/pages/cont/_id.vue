<template>
  <div>
    <span>contページです</span>
    <div>ID : {{p.id}}</div>
  </div>
</template>

<script>
export default {
  layout: "default",
  validate({ params }) {
    // 数値でなければならない
    return /^\d+$/.test(params.id);
  },
  asyncData({ params }) {
    return { p: params };
  }
};
</script>

<style scoped>
</style>