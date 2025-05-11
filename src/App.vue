<script setup lang="ts">
import { ref, watch } from 'vue';
import { useItemsStore } from './stores/ItemsStore';
import type { Item } from './types';
import ItemCard from '@/components/ItemCard.vue'

const itemsStore = useItemsStore()

const mySelected = ref<Item[]>([])

const otherSelected = ref<Item | null>(null)

watch(mySelected, () => {
  if (mySelected.value.length > 6) mySelected.value.pop()
})
</script>

<template>
  <main class="main">
    <div class="main__items">
      <ItemCard
        v-for="item in mySelected"
        :key="item.id"
        :item="item"
        disabled
      />
      <div class="main__items-count">
        {{ mySelected.length }} / 6
      </div>
    </div>
    <div class="main__item">
      <ItemCard
        v-if="otherSelected"
        :item="otherSelected"
        disabled
      />
    </div>
    <div class="main__items">
      <ItemCard
        v-for="item in itemsStore.myItems"
        :key="item.id"
        :item="item"
        v-model="mySelected"
      />
    </div>
    <div class="main__items">
      <ItemCard
        v-for="item in itemsStore.otherItems"
        :key="item.id"
        :item="item"
        single-select
        v-model="otherSelected"
      />
    </div>
  </main>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-rows: 250px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}

.main__items {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--color-background-soft);
}

.main__items-count {
  position: absolute;
  left: 10px;
  bottom: 10px;
  border-radius: 3px;
  padding: 0 5px;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  background: var(--color-background-soft);
}

.main__item {
  border-radius: 10px;
  background-color: var(--color-background-soft);
}

.main__item .item-card {
  width: 100%;
  height: 100%;
}
</style>
