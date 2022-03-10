<template>
    <transition name="ele-alert-fade">
        <div class="el-alert" :class="[typeClass, center?'is-center':'']" v-show="visible">
            <div class="el-alert__content">
                <span class="el-alert__title" v-if="title">{{title}}</span>
                <i class="el-alert__closebtn el-icon-close" @click="close()"></i>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'EleAlert',
    props: {
        title: {
            type: String,
            default: '',
            required: true
        },
        type: {
            type: String,
            default: 'info'
        },
        center: Boolean
    },
    data() {
        return {
            visible: true
        }
    },
    computed: {
        typeClass() {
            return `el-alert--${this.type}`
        }
    },
    methods: {
        close() {
            this.visible = false
            this.$emit('close')
        }
    }
}
</script>

