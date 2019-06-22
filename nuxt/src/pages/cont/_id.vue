<template>
    <div>
        contページだお
        {{p.id}}
    </div>
</template>

<script>
    export default {
        name: "cont",
        validate ({ params }) {
            // 数値でなければならない
            return /^\d+$/.test(params.id)
        },
        asyncData ({ params }) {
            return { p: params }
        }
    }
</script>

<style scoped>

</style>