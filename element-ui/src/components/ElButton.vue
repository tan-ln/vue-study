<template>
    <button class="el-button" :disabled="buttonDisabled" :type="nativeType" :class="[
            type ? 'el-button--' + type : '',
            size ? 'el-button--' + size : '',
            {'is-disabled': buttonDisabled,
            'is-loading': loading,
            'is-round': round,
            'is-circle': circle,
            'is-plain': plain,
            }
        ]"
        @click="handleClick"
        >
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon&&!loading"></i>
        <slot></slot>
    </button>
    <!-- 两种写法： 
                三元运算符：disabled ? 'is-disabled' : '',
                对象： {'is-disabled': buttonDisabled}
     -->
</template>

<script>
export default {
  name: "ElButton",
  props: {
    disabled: Boolean,
    type: {
        type: String,
        default: 'default'
    },
    loading: Boolean,
    icon: {
        icon: String,
        default: ''
    },
    nativeType: {
        type: String,
        default: 'defautl'
    },
    size: String,
    round: Boolean,
    circle: Boolean,
    plain: Boolean,
  },
  computed: {
    buttonDisabled() {
      return this.disabled
    },

    buttonType() {
        return this.type
    },

    buttonSize() {
        return this.size
    },
  },
  methods: {
      handleClick(event) {
        //   console.log(event)
          this.$emit('click', event)
      }
  }
};
</script>

<style>
</style>
