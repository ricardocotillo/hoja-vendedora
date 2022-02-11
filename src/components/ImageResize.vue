<template>
  <div @click="fileOpen" id="image-container">
    <vue-drag-resize :isActive="editMode" id="resize" :w="width" :h="height" v-on:resizing="resizeImage" preventActiveBehavior>
      <img :style="{height: `${height}px`, width: `${width}px`}" ref="img" id="image" :src="imageData" alt />
    </vue-drag-resize>
    <input @input="onSelectFile" ref="fileInput" type="file" style="display: none">
  </div>
</template>

<script>
export default {
  props: {
    editMode: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      width: 375,
      height: 250,
      imageData: null
    }
  },
  methods: {
    resizeImage(rect) {
      this.width = rect.width
      this.height = rect.height
    },
    fileOpen() {
      if (!this.editMode) {
        this.$refs.fileInput.click()
      }
    },
    onSelectFile() {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.imageData = files[0]
      }
    }
  },
};
</script>

<style>
</style>