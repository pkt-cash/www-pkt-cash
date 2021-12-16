<template>
  <div class="c-social">
    <template v-for="item of list">
      <a class="c-social__item" :id="item.key" :href="item.link" target="_blank">
		  <img :src="item.src" :alt="item.title" />     
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: "SocialLinks",
  props: {
    list: Array,
  }
};
</script>

<style lang="scss">

</style>
