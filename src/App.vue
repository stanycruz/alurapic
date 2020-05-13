<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="foto in fotos" :key="foto.url">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data() {
    return {
      titulo: 'Hadouken',
      fotos: [
        {
          url: 'https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-article_media_mobile-1.jpg',
          titulo: 'cachorro'
        },
        {
          url: 'https://static1.patasdacasa.com.br/articles/8/10/38/@/4864-o-cachorro-inteligente-mostra-essa-carac-article_media_mobile-1.jpg',
          titulo: 'cachorrão'
        }
      ]
    }
  }
};
</script>

<style lang="scss">
</style>
