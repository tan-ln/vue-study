<template>
    <div class="block">
        <div class="img">
            <img :src="'../../static/images/' + albumItem.id + '_03.png'" alt="">
            <div class="cover">{{albumItem.desc}}</div>
        </div>
        <div class="lock" :class="albumItem.status!='lock'?'unlock':'locked'">
            <img :src="'../../static/images/' + albumItem.status + '_03.png'" v-if="albumItem.status!='lock'" />
            <div class="status">
                {{albumItem.status=='lock'?'帮ta解决':'已解锁'}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        albumItem: Object,
    },
}
</script>

<style scoped>
.block {
    width: 1.8rem;
    margin: 0.265rem 0.06rem;
}
.block .img {
    position: relative;
    width: 1.8rem;
    height: 1.8rem;
}
.block img {
    width: 1.8rem;
    height: 1.8rem;
}
.block .cover {
    position: absolute;
    width: 1.8rem;
    height: 0.506667rem;
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 0;
    color: #fff;
    font-size: 0.267rem;
    line-height: 0.506667rem;
    letter-spacing: 0.01rem;
}
.lock {
    width: 1.8rem;
    height: 0.8rem;
    border-radius: 0.06rem;
    margin-top: 0.1867rem;
    font-size: 0.32rem;
    display: flex;
    flex-direction: row;
    vertical-align: middle;
    align-items: center;
    justify-content: space-around;
}
.lock img {
    width: 0.6667rem;
    height: 0.6667rem;
    border-radius: 50%;
}
.locked {
    background-color: rgb(240, 109, 84);
    color: #fff;
}
.unlock {
    background-color: #fff;
    color: rgb(52, 210, 138);
}
.status {
    text-align: center;
    letter-spacing: 0.03rem;
}
</style>
