<template>
  <div class="l-breadcrumb">
    <div class="l-breadcrumb__inner">
      <ul class="l-breadcrumb__items">
        <li class="l-breadcrumb__item" v-for="breadcrumb in breadcrumbs.data" :key="breadcrumb.name">
          <a v-if="breadcrumb.path" :href="breadcrumb.path" class="l-breadcrumb__text">
            {{ breadcrumb.name }}
            <b-icon pack="fas" icon="chevron-right" class="bread-icon"></b-icon>
          </a>
          <span v-else class="l-breadcrumb__text">{{ breadcrumb.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['breadcrumbs']
}
</script>

<style lang=scss>
.l-breadcrumb__items {
  text-align: left;
  padding-left: $site-outer-width;
  font-size: 0.65em;
  li {
    display: inline-block;
    margin-top: 1rem;
  }
  a {
    text-decoration: none;
    &:hover {
      color: $hover-color !important;
    }
  }
  .bread-icon {
    margin: 0 5px;
    color: black;
    opacity: 0.5;
    display: inline;
    svg {
      transform: scale(0.5, 0.75);
    }
  }
}
</style>
