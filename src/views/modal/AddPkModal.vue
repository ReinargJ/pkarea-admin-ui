<template>
  <Dialog
    v-model:visible="showInsert"
    :style="{ width: '450px' }"
    header="Ajouter un PK"
    :modal="true"
    class="p-fluid"
  >
    hello
  </Dialog>
</template>

<script>
import { defineComponent } from "vue";
import Dialog from "primevue/dialog";

export default defineComponent({
  data() {
    return {
      pks: null,
      showInsert: false,
      product: {},
      selectedProducts: null,
      filters: {},
      submitted: false,
    };
  },
  productService: null,
  created() {
  },
  mounted() {
  },
  methods: {},
  components: {
    Dialog,
  },
});
</script>

<style>
input {
  width: 100%;
}
</style>