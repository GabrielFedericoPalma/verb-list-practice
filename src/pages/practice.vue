<template>

<q-page padding >

<div class="q-pa-md" style="max-width: 600px; margin:auto; padding-bottom: 100px">

        <!-- PRACTICE -->
        <div v-for="(item, index) in verbList" :key="index" class="q-mb-md" >

          <h5 class="text-center text-white" >
            <span class="text-uppercase" >
              <q-icon name="volume_up" color="primary" @click="alert()" /><a href="#" @click.prevent="voice($event)" class="text-uppercase" title="Listen it" >{{item.INFINITIVE}}</a>
              </span><span v-if="item.SPANISH" > - <em class="text-lowercase" >{{item.SPANISH}}</em></span></h5>

              <q-input
                ref="input"
                filled
                value=""
                v-model="modelInput['infinitive'+index]"
                label="Infinitive"
                :rules="[ val => val.toLowerCase() == item.INFINITIVE ]"
                lazy-rules
                dense
              />

              <q-input
                ref="input"
                filled
                value=""
                v-model="modelInput['past'+index]"
                label="Past"
                :rules="[ val => val.toLowerCase() == item.PAST ]"
                lazy-rules
                dense
              />

              <q-input
                ref="input"
                filled
                value=""
                v-model="modelInput['participle'+index]"
                label="Participle"
                :rules="[ val => val.toLowerCase() == item.PARTICIPLE]"
                lazy-rules
                dense
              />

              <div style="width:100%; display:flex; justify-content: flex-end" >
                <div>
                  <small style="display:inline-block; margin-right:33px;color: #8b5353;" v-if="answer==index" >
                    <q-icon name="volume_up" color="primary" @click="alert()" /><a href="#" @click.prevent="voice($event)" title="Listen it" >{{item.INFINITIVE}} - {{item.PAST}} - {{item.PARTICIPLE}}</a>
                  </small>
                  <q-btn label="answer" color="primary" @click="toggleAnswer(index)" />
                </div>
              </div>

          </div>

        <!-- END PRACTICE -->

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
      answer: -1,
      modelInput:{}
    }
  },
  created(){

  },
  methods: {
    toggleAnswer(index){
      // console.log(index, this.answer)
      if(index === this.answer){
        this.answer = -1
      }else{
        this.answer = index
      }
    }
  },
  computed: {
    ...mapState(firebase_db_store, ['verbList'])
  }
}
</script>
<style scoped>
a {font-size: 18px}
small a {font-size: 14px;}
</style>
