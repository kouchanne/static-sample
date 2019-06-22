<template>
    <div>
        contページだお
    </div>
</template>

<script>
    export default {
        name: "cont",
        validate ({ params }) {
            // 数値でなければならない
            return /^\d+$/.test(params.id)
        }
    }
</script>

<style scoped>

</style>