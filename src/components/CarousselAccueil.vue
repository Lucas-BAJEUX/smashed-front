<template>
  <div id="carousselAccueil">
    <slot></slot>
    <button @click="next" class="next">Next</button>
    <button @click="prev" class="prev">Prev</button>
    <router-view />
    <navigation-bar />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    next() {
      this.$emit("next");
    },
    prev() {
      this.$emit("prev");
    },
  },
};
</script>

<style>
#carousselAccueil {
  position: relative;
  width: auto;
  height: 400px;
  overflow: hidden;
}
button {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
  background-color: rgba(25, 25, 25, 25);
  border: none;
  color: #fff;
}
button:focus,
button:hover {
  outline: none;
  cursor: pointer;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
</style>
