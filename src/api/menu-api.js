import { api } from 'boot/axios'
export const useMenuGetApi = async (menu) =>
  (await api.get(`/api/customer/${menu}`)).data.data
