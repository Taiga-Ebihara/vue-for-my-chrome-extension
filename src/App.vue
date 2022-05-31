<template>
  <div class="wrapper">
    <Modal :is-visible="isVisible" @click:close="onCloseModal"></Modal>
    <Launcher v-if="isVisible.launcher" @click="onClickLauncher"></Launcher>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import Modal from "./components/Modal.vue";
import Launcher from "./components/Launcher.vue";

const isVisible = reactive({
  container: false,
  modal: false,
  launcher: true,
});

const showModal = () => {
  isVisible.container = true;

  setTimeout(() => {
    isVisible.modal = true;
  }, 1000);
};

const hideLauncher = () => {
  isVisible.launcher = false;
};

const onClickLauncher = () => {
  hideLauncher();
  showModal();
};

const onCloseModal = () => {
  isVisible.container = false;
  isVisible.modal = false;

  setTimeout(() => {
    isVisible.launcher = true;
  }, 1000);
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  pointer-events: none;
  z-index: 2147483647;
}
</style>
