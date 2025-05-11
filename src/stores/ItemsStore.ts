import type { Item } from "@/types";
import { defineStore } from "pinia";

interface StateShape {
  myItems: Item[];
  otherItems: Item[];
}

export const useItemsStore = defineStore('itemsStore', {
  state: (): StateShape => ({
    myItems: [
      { "id": 1, "name": "Shoes 1", selected: false },
      { "id": 2, "name": "Shoes 2", selected: false },
      { "id": 3, "name": "Shoes 3", selected: false },
      { "id": 4, "name": "Shoes 4", selected: false },
      { "id": 5, "name": "T-shirt 1", selected: false },
      { "id": 6, "name": "T-shirt 2", selected: false },
      { "id": 7, "name": "T-shirt 3", selected: false },
      { "id": 8, "name": "T-shirt 4,", selected: false }
    ],
    otherItems: [
      { "id": 11, "name": "Jacket 1", selected: false },
      { "id": 12, "name": "Jacket 2", selected: false },
      { "id": 13, "name": "Jacket 3", selected: false },
      { "id": 14, "name": "Jacket 4", selected: false },
      { "id": 15, "name": "Hoodie 1", selected: false },
      { "id": 16, "name": "Hoodie 2", selected: false },
      { "id": 17, "name": "Hoodie 3", selected: false },
      { "id": 18, "name": "Hoodie 4", selected: false }
    ],
  }),
  getters: {
    selectedMyItems: (state) => state.myItems.filter(item => item.selected),
    selectedOtherItems: (state) => state.otherItems.filter(item => item.selected),
  },
})
