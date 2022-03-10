<template>
  <div id="app">
    <tree-menu :label="treeList.label" :nodes="treeList.nodes" :depth="0"/>
  </div>
</template>

<script>
import TreeMenu from "./components/TreeMenu";

const list = {
        label: "root",
        nodes: [
          {
            label: "item 1",
            nodes: [
              {
                label: "item 1.2",
                nodes: [
                  {
                    label: "item 1.2.1"
                  },
                  {
                    label: "item 1.2.2"
                  }
                ]
              }
            ]
          },
          {
            label: "item 2",
            nodes: [
              {
                label: "item 2.1",
              }
            ]
          }
        ]
      }

export default {
  name: "App",
  components: {
    TreeMenu
  },
  data() {
    return {
      treeList: list
    };
  }
};
</script>

<style>
</style>
