<script setup lang="ts">
import type { Item } from '@/types';
import { computed } from 'vue';
import type { Ref } from 'vue';

const model = defineModel<Item[] | Item | null>()

const props = defineProps<{
  item: Item;
  disabled?: boolean;
  singleSelect?: boolean;
}>()

const isChecked = computed(() =>
  Array.isArray(model.value)
  ? model.value?.some(i => i.id === props.item.id) || false
  : model.value?.id === props.item.id
)

const toggle = () => {
  console.log();
  if (isChecked.value) {
    model.value = Array.isArray(model.value)
      ? model.value.filter(i => i.id !== props.item.id)
      : null
  } else {
    model.value = Array.isArray(model.value) 
      ? [...model.value, props.item]
      : props.item
  }
}
</script>

<template>
  <div 
    class="item-card"
    :class="{ 'item-card--disabled': props.disabled }"
  >
    <input
      :id="`${props.item.id}`"
      :checked="isChecked"
      type="checkbox"
      class="item-card__input"
      :disabled="props.disabled"
      @change="toggle"
    />
    <p class="item-card__name">{{ props.item.name }}</p>
  </div>
</template>

<style>
.item-card {
  position: relative;
  padding: 10px;
  min-width: 40px;
  min-height: 40px;
  aspect-ratio: 1;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  background-color: var(--color-background-mute);
}

.item-card:hover {
  opacity: 0.5;
}

.item-card__input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
}

.item-card--disabled {
  cursor: not-allowed;
}
</style>
