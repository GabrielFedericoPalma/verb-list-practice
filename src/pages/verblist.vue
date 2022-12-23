<template>
     
<q-page padding >

<div class="q-pa-md" style="max-width: 800px; margin:auto; padding-bottom: 60px" >

    <!-- VERB LIST -->
    <table class="wp-table">
      <tr>
        <th>Infinitive</th>
        <th>Past</th>
        <th>Participle</th>
        <th>Spanish</th>
      </tr>
      <tr v-for="(item, index) in verbList" :key="index" >
        <td><q-icon name="volume_up" color="primary" /><span @click.prevent="voice($event)" >{{ item.INFINITIVE }}</span></td>
        <td><q-icon name="volume_up" color="primary" /><span @click.prevent="voice($event)" >{{ item.PAST }}</span></td>
        <td><q-icon name="volume_up" color="primary" /><span @click.prevent="voice($event)" >{{ item.PARTICIPLE }}</span></td>
        <td>{{ item.SPANISH }}</td>
      </tr>
    </table>
    <!-- END VERB LIST -->

  </div>

  </q-page>

</template>

<script>
import   mixins from 'components/mixins.js'
import { mapState } from 'pinia'
import { firebase_db_store } from 'stores/firebase_db.js'

export default {
  name: 'PageIndex',
  mixins: [mixins],
  components:{},
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState(firebase_db_store, ['verbList'])
  }
}
</script>