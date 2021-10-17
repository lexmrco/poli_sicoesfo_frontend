<template>
<div>
  <div class="home container">
    <v-card>
      <v-data-table
        :headers="headers"
        :items="dataItems"
        class="elevation-1"
        :options.sync="options"
        :server-items-length="itemsCount"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :footer-props="{
          'items-per-page-options':[15, 30, 50, 100, 1000],
          showFirstLastPage: true,
          'items-per-page-text': 'Filas por página',
          pageText: '{0} - {1} de {2}'
        }"
        :loading="loading"
      >
      </v-data-table>
      <v-card-text>
        <v-alert
          color="#70736F"
          outlined
          icon="mdi-sale"
          dense
          v-if="alertMessage"
        >
         {{alertMessage}}
      </v-alert>
    </v-card-text>
    </v-card>
  </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue, Watch } from 'vue-property-decorator'
import Services from '@/services/'

@Component({
  components: { }
})

export default class Products extends Vue {
  alertMessage = ''
  options: any = null
  dataItems = []
  sortBy = ['']
  sortDesc = [true]
  itemsCount = 0
  loading = false
  error = ''
  headers = [
    { value: 'fechaMuerte', text: 'Fecha Muerte', width: 70, class: 'header' },
    { value: 'horaMuerte', text: 'Hora Muerte', width: 50, class: 'header' },
    { value: 'tipoMuerte', text: 'Tipo Muerte', class: 'header' },
    { value: 'edad', text: 'Edad', class: 'header' },
    { value: 'estadoCivil', text: 'Estado Civil', class: 'header' },
    { value: 'escolaridad', text: 'Escolaridad', class: 'header' },
    { value: 'factorVulnerabilidad', text: 'Factor Vulnerabilidad', class: 'header' },
    { value: 'tipoDeZona', text: 'Tipo De Zona', class: 'header' },
    { value: 'escenario', text: 'Escenario', class: 'header' },
    { value: 'actividadDuranteHecho', text: 'Actividad Durante Hecho', class: 'header' },
    { value: 'circunstancia', text: 'Circunstancia', class: 'header' },
    { value: 'mecanismo', text: 'Mecanismo', class: 'header' },
    { value: 'codDaneDepartamento', text: 'Cod. Departamento', class: 'header' },
    { value: 'codigoDaneMunicipio', text: 'Cod Municipio', class: 'header' }
  ]

  @Watch('options')
  setItemdDsicount () {
    this.reload()
  }

  created () {
    this.reload()
  }

  reload () {
    this.loading = true
    let page = 1
    let itemsPerPage = 20
    if (this.options) {
      page = this.options.page
      itemsPerPage = this.options.itemsPerPage
    }
    Services.datosForensesService.getItems(page, itemsPerPage).then((response) => {
      const { page, rowsPerPage, totalRows, data } = response.data
      this.dataItems = data.map((item: any) => ({
        id: item.productId,
        fechaMuerte: item.fechaMuerte,
        horaMuerte: item.horaMuerte,
        tipoMuerte: item.tipoMuerte,
        edad: item.edad,
        estadoCivil: item.estadoCivil,
        escolaridad: item.escolaridad,
        factorVulnerabilidad: item.factorVulnerabilidad,
        tipoDeZona: item.tipoDeZona,
        escenario: item.escenario,
        actividadDuranteHecho: item.actividadDuranteHecho,
        circunstancia: item.circunstancia,
        mecanismo: item.mecanismo,
        codDaneDepartamento: item.codDaneDepartamento,
        codigoDaneMunicipio: item.codigoDaneMunicipio
      }))
      this.itemsCount = totalRows
    }).catch((e) => {
      this.alertMessage = 'Problema al cargar los datos'
      console.log(e.response)
    }).finally(() => {
      this.loading = false
    })
  }
}

</script>
