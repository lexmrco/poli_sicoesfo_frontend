<template>
  <v-app>
    <v-card>
      <img class="imagen" src="img/Encabezado.png" alt="Responsive image" style="width: 100%;height: auto;">
    </v-card>
    <v-content>
      <v-container class="fill-height">
        <v-row
          align="center"
          justify="center"
        >
        <v-col
            cols="12"
            sm="12"
            md="12"
          >
            <v-card class="elevation-12">
              <router-view></router-view>
            </v-card>
        </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  })
})

</script>

<style>
@media print {
  .no-print {
    display: none !important;
  }
}
@media screen {
  .no-screen {
    display: none !important;
  }
}
</style>
