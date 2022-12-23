<template>
    
<q-page padding >

<div class="q-pa-md" style="max-width: 800px; margin:auto; padding-bottom: 60px">

<p class="text-center" >Practice</p>

        <!-- PRACTICE -->
        <div v-for="(item, index) in verbList" :key="index" >

          <h5 class="text-center" >
            <span class="text-uppercase" >
              <q-icon name="volume_up" color="primary" @click="alert()" /><a href="#" @click.prevent="voice($event)" class="text-uppercase" title="Listen it" >{{item.INFINITIVE}}</a>
              </span><span v-if="item.SPANISH" > - <em class="text-lowercase" >{{item.SPANISH}}</em></span></h5>

              <q-input
                ref="input"
                filled
                value=""
                v-model="modelInput['infinitive'+index]"
                label="INFINITIVE"
                :rules="[ val => val.toLowerCase() == item.INFINITIVE ]"
                lazy-rules
              />
              
              <q-input
                ref="input"
                filled
                value=""
                v-model="modelInput['past'+index]"
                label="PAST"
                :rules="[ val => val.toLowerCase() == item.PAST ]"
                lazy-rules
              />
              
              <q-input
                ref="input"
                filled
                value=""
                v-model="modelInput['participle'+index]"
                label="PARTICIPLE"
                :rules="[ val => val.toLowerCase() == item.PARTICIPLE]"
                lazy-rules
              />

              <div style="width:100%; display:flex; justify-content: flex-end" >
                <div>
                  <small style="display:inline-block; margin-right:33px;color: #8b5353;font-size: 14px;" v-if="answer==index" >
                    <q-icon name="volume_up" color="primary" @click="alert()" /><a href="#" @click.prevent="voice($event)" title="Listen it" >{{item.INFINITIVE}} - {{item.PAST}} - {{item.PARTICIPLE}}</a>
                  </small>
                  <q-btn label="answer" color="primary" @click="toggleAnswer(index)" />
                </div>
              </div>

          </div>
        
        <!-- END PRACTICE -->

        <!-- bottons go/back -->
        <!-- <div style="width:100%; display:flex; justify-content: space-between; margin-top:60px" >  
            <q-btn label="back" @click="goBack('back')" />
            <q-btn label="go" @click="goBack('go')" />
        </div> -->

  </div>

  </q-page>

</template>

<script>
export default {
  name: 'PageIndex',
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
    alert(){
      alert('Click the text to listen it')
    },
    voice($event){
      let text = $event.target.innerText
      let speech = new SpeechSynthesisUtterance()
      speech.lang = "en"
      speech.text = text
      speech.rate = 0.7
      window.speechSynthesis.speak(speech);
    },
    toggleAnswer(index){
      console.log(index, this.answer)
      if(index === this.answer){
        this.answer = -1
      }else{
        this.answer = index
      }     
    }
  },
  computed: {
    verbList: {
      get () {
        return this.$store.state.firebase_store.verbList
      }
    }
  },
  updated(){
    
    if(this.$store.state.firebase_store.update){
        this.modelInput = {}
        this.answer = -1
        this.$store.commit('firebase_store/update', false)
    }

  }
}
</script>
