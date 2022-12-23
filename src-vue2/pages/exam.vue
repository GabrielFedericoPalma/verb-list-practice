<template>
     
<q-page padding >

<div class="q-pa-md" style="max-width: 800px; margin:auto; padding-bottom: 60px">

<p class="text-center" >When you finish it, go to Results.</p>

    {{modelExam}}
    <hr>
    {{verbList}}

    <div v-for="(item, index) in verbList" :key="index" >

      <h5 class="text-center" >
        <span class="text-uppercase" >{{item.INFINITIVE}}</span><span v-if="item.SPANISH" > - <em class="text-lowercase" >{{item.SPANISH}}</em></span>
      </h5>

        <div class="inputsExam" >
            
            <q-input
              ref="input"
              filled
              value=""
              v-model="verbList[index]['PAST']"
              label="PAST"
            />
            
            <q-input
              ref="input"
              filled
              value=""
              v-model="modelInput['participle'+index]"
              label="PARTICIPLE"
            />

        </div>

    </div>

  </div>

  </q-page>

</template>

<script>
export default {
  name: 'PageIndex',
  components:{},
  data () {
    return {
      modelInput: {},
      modelExam: {}
    }
  },
  created(){
    this.modelExam = {...this.verbList}
  },
  methods: {},
  computed: {
    verbList: {
      get () {
        return this.$store.state.firebase_store.verbList
      }
    }
  }
}
</script>