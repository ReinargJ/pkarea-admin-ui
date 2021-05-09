import { ref } from 'vue';

export interface IPkData {
  pk_id: number;
  pk_debut: string;
  pk_fin: string;
  pk_autoroute: string;
  pk_voie: string;
  pk_sens: string;
  pk_type: string;
  pk_debut_zone: string;
  pk_fin_zone: string;
}

export function useTableData() {
  const pkData = ref<IPkData[]>([
  ]);

  return {
    pkData
  };
}
