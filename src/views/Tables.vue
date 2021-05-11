<template>
  <div>
    <Toast />
    <h3 class="text-gray-700 text-3xl font-medium">PK Area</h3>
    <div class="mt-8">
      <Button
        label="Nouveau PK"
        icon="pi pi-plus"
        iconPos="left"
        class="p-button-primary"
        @click="onClickModal"
      />
    </div>
    <div class="mt-8">
      <DataTable
        dataKey="pk_id"
        :value="pks"
        :paginator="true"
        :rows="50"
        editMode="row"
        class="editable-cells-table"
        v-model:editingRows="editingRows"
        removableSort="true"
        @rowEditInit="onRowEditInit"
        @rowEditCancel="onRowEditCancel"
        @rowEditSave="onRowEditSave"
        stripedRows
      >
        <Column field="pk_debut" header="PK debut" sortable="true">
          <template #editor="slotProps">
            <InputText v-model="slotProps.data[slotProps.column.props.field]" />
          </template>
        </Column>
        <Column field="pk_fin" header="PK fin" sortable="true"
          ><template #editor="slotProps">
            <InputText
              v-model="slotProps.data[slotProps.column.props.field]"
            /> </template
        ></Column>
        <Column field="pk_voie" header="Voie" sortable="true"
          ><template #editor="slotProps">
            <InputText
              v-model="slotProps.data[slotProps.column.props.field]"
            /> </template
        ></Column>
        <Column field="pk_type" header="Type" sortable="true"
          ><template #editor="slotProps">
            <InputText
              v-model="slotProps.data[slotProps.column.props.field]"
            /> </template
        ></Column>
        <Column field="pk_autoroute" header="Autoroute" sortable="true"
          ><template #editor="slotProps">
            <InputText
              v-model="slotProps.data[slotProps.column.props.field]"
            /> </template
        ></Column>
        <Column field="pk_sens" header="sens" sortable="true"
          ><template #editor="slotProps">
            <InputText
              v-model="slotProps.data[slotProps.column.props.field]"
            /> </template
        ></Column>
        <Column field="pk_debut_zone" header="PK debut zone" sortable="true"
          ><template #editor="slotProps">
            <InputText
              v-model="slotProps.data[slotProps.column.props.field]"
            /> </template
        ></Column>
        <Column field="pk_fin_zone" header="PK fin zone" sortable="true"
          ><template #editor="slotProps">
            <InputText
              v-model="slotProps.data[slotProps.column.props.field]"
            /> </template
        ></Column>
        <Column
          style="width: 5%; min-width: 5rem"
          bodyStyle="text-align:center"
        >
          <template #body="slotProps">
            <Button
              icon="pi pi-trash"
              class="p-button-text p-button-danger"
              @click="deletePk(slotProps.data)"
            /> </template
        ></Column>
        <Column
          :rowEditor="true"
          style="width: 5%; min-width: 5rem"
          bodyStyle="text-align:center"
        ></Column>
      </DataTable>
      <Dialog
        v-model:visible="openModal"
        :style="{ width: '450px' }"
        header="Ajouter un PK"
        :modal="true"
        class="p-fluid"
        @hide="onHide"
      >
        <div class="p-field">
          <label for="debut">PK Debut</label>
          <InputNumber
            id="debut"
            v-model="newPk.pk_debut"
            required="true"
            autofocus
          />
        </div>
        <div class="p-field">
          <label for="fin">PK Fin</label>
          <InputNumber id="fin" v-model="newPk.pk_fin" autofocus />
        </div>
        <div class="p-field">
          <label for="autoroute">Autoroute</label>
          <Dropdown
            id="autoroute"
            v-model="newPk.pk_autoroute"
            required="true"
            autofocus
            :options="autoroutes"
          />
        </div>
        <div class="p-field">
          <label for="voie">Voie</label>
          <Dropdown
            id="voie"
            v-model="newPk.pk_voie"
            required="true"
            autofocus
            :options="voies"
          />
        </div>
        <div class="p-field">
          <label for="sens">Sens</label>
          <Dropdown
            id="sens"
            v-model="newPk.pk_sens"
            required="true"
            autofocus
            :options="sens"
          />
        </div>
        <div class="p-field">
          <label for="type">Type</label>
          <InputText
            id="type"
            v-model="newPk.pk_type"
            required="true"
            autofocus
          />
        </div>
        <div class="p-field">
          <label for="debutZone">PK Debut Zone</label>
          <InputNumber
            id="debutZone"
            v-model="newPk.pk_debut_zone"
            required="true"
            autofocus
          />
        </div>
        <div class="p-field">
          <label for="finZone">PK Fin Zone</label>
          <InputNumber
            id="finZone"
            v-model="newPk.pk_fin_zone"
            required="true"
            autofocus
          />
        </div>
        <template #footer>
          <Button
            label="Cancel"
            icon="pi pi-times"
            class="p-button-text"
            @click="onCloseModal"
          />
          <Button
            label="Save"
            icon="pi pi-check"
            class="p-button-text"
            @click="savePk"
          />
        </template>
      </Dialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PkService from "../service/PkService";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Dropdown from "primevue/dropdown";
import Toast from "primevue/toast";
import { IPk } from "../model/pk";

export default defineComponent({
  data() {
    return {
      pks: [],
      editingRows: [],
      editingCellRows: [],
      pk: [],
      original: [],
      updates: [],
      inserts: [],
      originalRows: {},
      openModal: false,
      newPk: {
        pk_debut: 0,
        pk_fin: 0,
        pk_sens: "",
        pk_autoroute: "",
        pk_voie: "",
        pk_type: "",
        pk_debut_zone: 0,
        pk_fin_zone: 0,
      },
      sens: ["Nord", "Sud"],
      voies: ["Rapide", "Mediane", "Lente"],
      autoroutes: ["A41", "A410", "Adelac"],
    };
  },

  created() {
    this.originalRows = {};
  },
  mounted() {
    PkService.getAll()
      .then((response) => {
        console.log(response);

        this.pks = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    onRowEditSave(event: any) {
      PkService.updatePk(event.data)
        .then((response) => {
          this.$toast.add({
            severity: "success",
            summary: "PK mis à jour",
            life: 1500,
          });
        })
        .catch(this.displayError);
    },
    onRowEditInit(event) {
      this.originalRows[event.index] = { ...this.pks[event.index] };
    },
    onRowEditCancel(event: any) {
      this.pks[event.index] = this.originalRows[event.index];
    },
    onClickModal() {
      this.openModal = true;
    },
    onCloseModal() {
      this.openModal = false;
    },
    savePk() {
      PkService.createPk(this.newPk)
        .then((response) => {
          console.log(response);
          let id = response.data.insertId;
          console.log({ id, ...this.newPk });

          this.pks.push({ pk_id: id, ...this.newPk });
          this.$toast.add({
            severity: "success",
            summary: "PK créé",
            life: 1500,
          });
          this.newPk = {
            pk_debut: 0,
            pk_fin: 0,
            pk_sens: "",
            pk_autoroute: "",
            pk_voie: "",
            pk_type: "",
            pk_debut_zone: 0,
            pk_fin_zone: 0,
          };
        })
        .catch(this.displayError);
      this.openModal = false;
    },
    deletePk(data: IPk) {
      this.pks = this.pks.filter((pk) => pk.pk_id !== data.pk_id);

      PkService.deletePk(data.pk_id)
        .then((response) => {
          this.$toast.add({
            severity: "success",
            summary: "PK supprimé",
            life: 1500,
          });
        })
        .catch(this.displayError);
    },
    displayError(err: any) {
      this.$toast.add({
        severity: "error",
        summary: "Une erreur est survenue",
        detail: err.message,
        life: 5000,
      });
    },
  },
  components: {
    Dialog,
    InputText,
    InputNumber,
    Dropdown,
    Toast,
  },
});
</script>

<style scoped>
.p-button {
  background: #4f46e5;
  color: #fff;
}

.p-button:hover {
  background: rgba(79, 70, 229, 0.7);;
}
</style>