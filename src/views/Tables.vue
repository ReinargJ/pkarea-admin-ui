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
                <tr v-for="(u, index) in pks" :key="index">
                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt
                        />
                      </div>

                      <div class="ml-4">
                        <div
                          class="text-sm leading-5 font-medium text-gray-900"
                        >
                          {{ u.name }}
                        </div>
                        <div class="text-sm leading-5 text-gray-500">
                          {{ u.email }}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <div class="text-sm leading-5 text-gray-900">
                      {{ u.title }}
                    </div>
                    <div class="text-sm leading-5 text-gray-500">
                      {{ u.title2 }}
                    </div>
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200"
                  >
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                      >{{ u.status }}</span
                    >
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                  >
                    {{ u.role }}
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap text-right border-b border-gray-200 text-sm leading-5 font-medium"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit</a
                    >
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
import { defineComponent } from "vue";

import { useTableData } from "../hooks/useTableData";

export default defineComponent({
  setup() {
    const {
      simpleTableData,
      paginatedTableData,
      wideTableData,
    } = useTableData();

    return {
      simpleTableData,
      paginatedTableData,
      wideTableData,
    };
  },
});
</script>
