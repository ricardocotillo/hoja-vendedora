<template>
  <div @click="fileOpen" id="end-img-container">
    <vue-drag-resize :isActive="editMode" id="resize" :w="width" :h="height" v-on:resizing="resizeImage" preventActiveBehavior>
      <img :style="{height: `${height}px`, width: `${width}px`}" id="end-img" :src="imageData" alt />
    </vue-drag-resize>
    <input @input="onSelectFile" ref="fileIn" type="file" style="display: none">
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
      width: 307,
      height: 180,
      imageData: null
    }
  },
  methods: {
    resizeImage(rect) {
      this.width = rect.width
      this.height = rect.height
    },
    fileOpen() {
        console.log('hola')
      if (!this.editMode) {
        this.$refs.fileIn.click()
      }
    },
    onSelectFile(e) {
      const input = this.$refs.fileIn
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