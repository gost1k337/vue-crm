<template>

  <ul class="sidenav app-sidenav " :class="{open: isOpen}">

    <router-link
      v-for='link in links'
      :key='link.url'
      tag='li'
      active-class='active'
      :to='link.url'
      :exact='link.exact'
    >
      <a href="#" class="waves-effect waves-green pointer">{{ link.title }}</a>
    </router-link>

  </ul>

</template>

<script>
import localizeFilter from '@/filters/localize.filter'

  export default {
    props: ['isOpen'],
    data: () => ({
      links: [
        {title: localizeFilter('Menu_Bill'), url: '/', exact:true},
        {title: localizeFilter('Menu_History'), url: '/history'},
        {title: localizeFilter('Menu_Planning'), url: '/planning'},
        {title: localizeFilter('Menu_Record'), url: '/record'},
        {title: localizeFilter('Menu_Category'), url: '/categories'},
      ]
    })
  }
</script>
