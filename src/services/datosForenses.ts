import { AxiosStatic } from 'axios'

export class DatosForensesService {
  axios: AxiosStatic
  baseUrl: string

  constructor (axios: AxiosStatic) {
    this.axios = axios
    this.baseUrl = process.env.VUE_APP_API_URL
  }

  getItems (page: number, itemsPerPage: number) {
    return this.axios.get(`${this.baseUrl}/api/datosforenses??page=${page}&rowsPerPage=${itemsPerPage}`)
  }
}
