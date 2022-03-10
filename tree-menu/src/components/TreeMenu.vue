<template>
  <div class="tree-menu">
    <div :style="indent">* {{label}}</div>
    <tree-menu v-for="(node, index) in nodes" :nodes="node.nodes" :label="node.label" :key="index" :depth="depth + 1"></tree-menu>
  </div>
</template>

<script>
export default {
  name: 'tree-menu',
  props: ['label', 'nodes', 'depth'],
  computed: {
    indent () {
      return { transform: `translate(${this.depth * 20}px)` }
    }
  }
}
</script>

<style>

</style>
