<template>
    <div class="simplemde-container" :style="{height:height+'px',zIndex:zIndex}">
        <textarea :id="id"></textarea>
    </div>
</template>
<script>
import SimpleMDE from "simplemde";
import "simplemde/dist/simplemde.min.css";

export default {
  name: "simplemde-md",
  props: {
    value: String,
    id: {
      type: String
    },
    height: {
      type: Number,
      default: 150
    },
    zIndex: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      simplemde: null,
      hasChange: false
    };
  },
  mounted() {
    this.simplemde = new SimpleMDE({
        element: document.getElementById(this.id || 'markdown-editor-' + +new Date()),
    });
    if (this.value) {
      this.simplemde.value(this.value)
    }
    this.simplemde.codemirror.on('change', () => {
      if (this.hasChange) {
        this.hasChange = true
      }
      this.$emit('input', this.simplemde.value())
    })
  },
  destroyed() {
    this.simplemde.toTextArea()
    this.simplemde = null
  }
};
</script>
<style>
</style>


