<template>
  <Dialog
    v-model:visible="open"
    :style="{ width: '450px' }"
    header="Ajouter un PK"
    :modal="true"
    class="p-fluid"
    @hide="onHide"
  >
    <div class="p-field">
      <label for="name">Name</label>
      <InputText
        id="name"
        v-model.trim="product.name"
        required="true"
        autofocus
        :class="{ 'p-invalid': submitted && !product.name }"
      />
      <small class="p-error" v-if="submitted && !product.name"
        >Name is required.</small
      >
    </div>
  </Dialog>
</template>

<script>
import { defineComponent } from "vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";

export default defineComponent({
  props: {
    open: Boolean
  },
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
  created() {},
  mounted() {},
  methods: {
    onHide() {
      this.$emit('hideModal')
    }
  },
  components: {
    Dialog,
    InputText
  },
});
</script>

<style>
input {
  width: 100%;
}
</style>