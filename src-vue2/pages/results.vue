<template>

<div>
     
<q-page padding >

<div class="q-pa-md" style="max-width: 800px; margin:auto; padding-bottom: 60px">
      
      <!-- RESULT -->
      <div>

          {{dataResult}}

          <div v-for="(item, index) in dataResult" :key="index" >

            <h5 class="text-center" style="margin-bottom: 6px" >
              <span><q-icon name="volume_up" color="secondary" /><a href="#" @click.prevent="voice($event)" class="text-uppercase" >{{item.INFINITIVE}}</a></span>
              <span v-if="item.SPANISH" > - <em class="text-lowercase" style="font-size:16px; color: #8b5353" >{{item.SPANISH}}</em></span>
            </h5>
            
            <aside>
              <h6><q-icon name="volume_up" color="secondary" /><a href="#" @click.prevent="voice($event)" >{{item.PAST}}</a></h6>
              <h6><q-icon name="volume_up" color="secondary" /><a href="#" @click.prevent="voice($event)" >{{item.PARTICIPLE}}</a></h6>
            </aside>
          
        </div>
      </div>
      <!-- END RESULT -->
      
  </div>

  </q-page>

  </div>
</template>

<style>
h1,h2,h3,h4,h5,h6{margin:24px 0}
.title{
    margin-bottom: 50px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }
.pagination{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: #f0f0f0;
    position: fixed;
    margin: auto;
    width: 100%;
    z-index: 1;
    padding: 6px 16px;
}
</style>

<script>
export default {
  name: 'PageIndex',
  components:{},
  data () {
    return {
      answer: -1,
      startSlice: 0,
      endSlice: 5,
      indexNumber: 1,
      isABCIndex: false,
      modelInput: {}
      // init: this.$store.state.firebase_store.init
    }
  },
  created(){
    // this.verbListLocal = {...this.verbList}
  },
  methods: {
    clickOnABCIndex(){
        let index = this.indexNumber -1
        let to = this.ABCIndex[index]
        this.$store.commit('firebase_store/pagination', to)
        window.scrollTo(0, 0);
        this.answer = -1
    },
    // goBack(value){

    //   window.scrollTo(0, 0);
    //   this.answer = -1
    //   let firstInput = document.getElementsByTagName('input');

    //   console.log('input: ',firstInput[0])
 
    //   if(value=='go'){
    //     this.indexNumber = this.indexNumber+1
    //     firstInput[0].focus()
    //     return
    //   }
    //   if(value=='back'){
    //     this.indexNumber = this.indexNumber-1
    //     return
    //   }
    
    // },
    // dataPagination() {

    //   console.log('pagination')
    //   //PAGINATION
    //   // if(indexNumber !== )

    // let index = this.indexNumber -1
    // let to = this.ABCIndex[index]
    // let length = this.dataGlobal.length
    // let dataGlobal = {...this.dataGlobal}
    // let pagination = null

    //   for(let i = 0; i<length; i++){
    //     // console.log(state.dataFirstLetters[i])
    //     if(to==this.dataFirstLetters[i]){
    //       // console.log('dataGlobal: ',dataGlobal[i].INFINITIVE)
    //       pagination = dataGlobal.filter(function(value){
    //         // console.log('value: ',value.INFINITIVE.charAt(0));
    //         return value.INFINITIVE.charAt(0) == to
    //       })
    //       // value => value.INFINITIVE == 'a')      
    //     }  
    //   }

    //   // console.log('pagination: ',pagination)
    //   return pagination
    //   // console.log('state.verbList: ',state.verbList)

    // },

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
    dataGlobal: {
      get () {
        return this.$store.state.firebase_store.dataGlobal
      }
    },
    verbList: {
      get () {
        return this.$store.state.firebase_store.verbList
      }
    },
    ABCIndex: {
      get() {
        return this.$store.state.firebase_store.ABCIndex
      }
    },
    ABCIndexLength: {
      get() {
        return this.$store.state.firebase_store.ABCIndex.length
      }
    },
    dataFirstLetters: {
      get() {
        return this.$store.state.firebase_store.dataFirstLetters
      }
    }
  },
  updated(){
      console.log('updated')

      this.init = true

      //**Replace numbers for letters in ABCIndex**

      const letters = this.$store.state.firebase_store.ABCIndex
      const lettersLength = letters.length
      // const qPaginationClass = document.getElementsByClassName('q-pagination');
      
      const buttonsFromIndex = document.querySelectorAll('div.q-pagination div.row button')

      // console.log(buttonsFromIndex[2].innerText = '2')

      for(let i = 0; i<lettersLength; i++){
        buttonsFromIndex[i].innerText = letters[i]
      }
  }
}
</script>