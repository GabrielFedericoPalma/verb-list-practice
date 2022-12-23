<template>
     
<q-page padding >

<div class="q-pa-md" style="max-width: 800px; margin:auto; padding-bottom: 60px">

<p class="text-center" >Verb list</p>

    <!-- VERB LIST -->
      <div v-for="(item, index) in verbList" :key="index" >

          <aside>

            <h5>
              <span><q-icon name="volume_up" color="primary" @click="alert()" /><a href="#" @click.prevent="voice($event)" class="text-uppercase" title="Listen it" >{{item.INFINITIVE}}</a></span>
              <span v-if="item.SPANISH" > - <em class="text-lowercase" >{{item.SPANISH}}</em></span>
            </h5>

            <h6><q-icon name="volume_up" color="primary" @click="alert()" /><a href="#" @click.prevent="voice($event)" title="Listen it" >{{item.PAST}}</a></h6>
            <h6><q-icon name="volume_up" color="primary" @click="alert()" /><a href="#" @click.prevent="voice($event)" title="Listen it" >{{item.PARTICIPLE}}</a></h6>
          
          </aside>
        
      </div>
    <!-- END VERB LIST -->

  </div>

  </q-page>

</template>

<script>
export default {
  name: 'PageIndex',
  components:{},
  data () {
    return {}
  },
  created(){
    // this.verbListLocal = {...this.verbList}
  },
  methods: {
    alert(){
      alert('Click the text to listen it')
    },
    voice($event){

      let text = $event.target.innerText
      // console.log({text})

      let speech = new SpeechSynthesisUtterance()
      speech.lang = "en"
      speech.text = text
      speech.rate = 0.7
      window.speechSynthesis.speak(speech);

    }
  },
  computed: {
    verbList: {
      get () {
        return this.$store.state.firebase_store.verbList
      }
    }
  }
}
</script>