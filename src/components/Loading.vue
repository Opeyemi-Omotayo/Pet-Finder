<template>
  <div v-if="loading" class="loading-state">
    <div class="loading-spinner"></div>
  </div>
</template>

<script>
export default {
 name: "Loading",
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style>
.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.loading-spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #fdc001;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
