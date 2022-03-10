<template>
    <div class="el-radio-group" role="radiogroup" @keydown="handleKeyDown">
        <slot />
    </div>
</template>
<script>
import EleRadio from '@/components/EleRadio'

export default {
    name: 'radioGroup',
    components: { EleRadio },
    data() {
        return {
            // value: String,
        }
    },
    methods: {
        handleKeyDown() {

        },

    },

}
</script>

