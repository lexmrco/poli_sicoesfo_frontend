import axios from 'axios'
import { DatosForensesService } from './datosForenses'

export default {
  datosForensesService: new DatosForensesService(axios)
}
