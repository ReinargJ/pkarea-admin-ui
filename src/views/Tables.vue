<template>
  <div>
    <h3 class="text-gray-700 text-3xl font-medium">PK Area</h3>

    <div class="mt-8">
      <h4 class="text-gray-600">Wide Table</h4>

      <div class="flex flex-col mt-6">
        <div
          class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
        >
          <div
            class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PK debut
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PK Fin
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PK Autoroute
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PK voie
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PK type
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PK debut de zone
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                  >
                    PK fin de zone
                  </th>
                </tr>
              </thead>

              <tbody class="bg-white">
                <tr v-for="(pk, index) in pks" :key="index">
                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ pk.pk_debut }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ pk.pk_fin }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ pk.pk_autoroute }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ pk.pk_voie }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ pk.pk_type }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ pk.pk_debut_zone }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ pk.pk_fin_zone }}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import PkService from "../service/PkService";
import { useTableData } from "../hooks/useTableData";

export default defineComponent({
  data() {
    return {
      pks: [],
    };
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
});
</script>
