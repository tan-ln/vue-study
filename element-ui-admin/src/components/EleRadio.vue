<template>
    <label for="radio" class="el-radio" :class="[
        {'is-diabled': isDisabled },
        {'is-focus': focus },
        {'is-border': border},
    ]">
    <span class="el-radio__input">
      <span class="el-radio__inner">
        <input type="radio" class="el-radio__original" :value="label" @focus="focus=true" @blur="focus=false" @change="handleChange" v-model="model" />
      </span>
      <span class="el-radio__label">
        <slot />
        <template v-if="!$slots.default">
          {{label}}
        </template>
      </span>
    </span>
    </label>
</template>

<script>
export default {
  name: "EleRadio",
  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },
  data() {
    return {
      focus: false
    };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    model: {
      get() {
        return this.value;
      },
      set(val) {
        return this.$emit("input", val);
      }
    }
  },
  methods: {
    handleChange() {}
  }
};
</script>
