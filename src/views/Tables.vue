<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">PK Area</h3>

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
          :rowEditor="true"
          style="width: 10%; min-width: 8rem"
          bodyStyle="text-align:center"
        ></Column>
      </DataTable>
      <AddPkModal />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PkService from "../service/PkService";
import AddPkModal from "./modal/AddPkModal.vue";

export default defineComponent({
  data() {
    return {
      pks:[],
      editingRows: [],
      editingCellRows: [],
      pk: [],
      original: [],
      updates: [],
      inserts: [],
      originalRows: {},
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
    },
    onRowEditInit(event) {
      this.originalRows[event.index] = { ...this.pks[event.index] };
    },
    onRowEditCancel(event: any) {
      this.pks[event.index] = this.originalRows[event.index];
    },
  },
  components: {
    AddPkModal,
  },
});
</script>
