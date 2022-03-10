<template>
    <div class="main">
        <div class="title">
            {{album.title}}
        </div>
        <div class="album">
            <t-block v-for="(item, index) in album.album" :key="index" :albumItem="item" />
        </div>
    </div>
</template>

<script>
import block from '@/components/block'

export default {
    components: { 
        't-block': block
     },
    props: {
        album: Object,
    },
}
</script>

<style scoped>
.main {
    text-align: center;
}
.title {
    display: inline-block;
    font-size: 0.373333rem;
    border-bottom: 0.01333rem solid rgb(241, 113, 87);
    height: 0.50666667rem;
}
.album {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.18rem;
    margin-bottom: 0;
}
</style>
