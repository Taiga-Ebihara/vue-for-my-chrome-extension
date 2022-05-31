<template>
  <div class="container" :class="{ isVisible: isVisible.container }">
    <div class="modal" :class="{ isVisible: isVisible.modal }">
      <img
        class="close"
        src="../assets/close.svg"
        alt=""
        @click="$emit('click:close', $event)"
      />
      <div>
        <img class="icon" src="../assets/bolt.svg" alt="" />
        <p class="greeting">ようこそ!!</p>
      </div>
      <button class="btn">Get started</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, defineProps } from "vue";

const props = defineProps({
  isVisible: Object,
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: all 1s ease;
  pointer-events: none;
}

.modal {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  min-width: 600px;
  background: white;
  border-radius: 0.75rem;
  opacity: 0;
  transition: all 1s ease;
  pointer-events: auto;
}

.icon {
  margin: auto;
}

.close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  cursor: pointer;
}

.greeting {
  margin-top: 1rem;
  font-size: 1.25rem;
}

.btn {
  position: absolute;
  bottom: 6rem;
  left: 50%;
  width: 220px;
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: white;
  background: #00afc1;
  border: 1px solid white;
  border-radius: 0.75rem;
  cursor: pointer;
  transform: translateX(-50%);
}

.isVisible {
  opacity: 1;
}
</style>
