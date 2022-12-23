<template>
  <q-layout view="lHh Lpr lFf" >
    
    <q-header elevated class="q-pa-md row justify-between items-center" >
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="drawer = !drawer" />
      </q-toolbar>
        <!-- <img src="images/flags.jpg" alt="Flag" style="max-width:180px; margin-bottom:16px" > -->
        <h1>IRREGULAR VERBS<br/><span>Practice</span></h1>
        <p>V 1.0.0</p>
    </q-header>

   <!-- ***** MENU LATERAL ***** -->
  <q-drawer v-model="drawer" show-if-above bordered class="bg-grey-1" >
        
      <q-list style="padding-top:33px" >

        <router-link to="/" >
          <q-item clickable  >
          <q-item-section avatar >
            <q-icon name="list" />
          </q-item-section>
            <q-item-section>
              <q-item-label class="text-uppercase" >VERB LIST</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link to="/practice" >
          <q-item clickable >
          <q-item-section avatar >
            <q-icon name="edit_note" />
          </q-item-section>
            <q-item-section>
              <q-item-label class="text-uppercase" >PRACTICE</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <!-- <router-link to="/exam" >
          <q-item clickable  >
          <q-item-section avatar >
            <q-icon name="format_list_numbered" />
          </q-item-section>
            <q-item-section>
              <q-item-label class="text-uppercase" >EXAM</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link to="/results" >
          <q-item clickable  >
          <q-item-section avatar >
            <q-icon name="format_indent_increase" />
          </q-item-section>
            <q-item-section>
              <q-item-label class="text-uppercase" >RESULTS</q-item-label>
            </q-item-section>
          </q-item>
        </router-link> -->

      </q-list>
      
    </q-drawer>
    <!-- ******* END MENU LATERAL ******* -->

    <!-- Pagination -->
    <div class="pagination" >
      <q-pagination
        v-model="indexNumber"
        :max="ABCIndexLength"
        direction-links
        boundary-links
        color="dark"
        icon-first="skip_previous"
        icon-last="skip_next"
        icon-prev="fast_rewind"
        icon-next="fast_forward"
        @click="clickOnABCIndex()"
      />
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

</template>

<script>

export default {
  name: 'MainLayout',
  components:{},
  data () {
    return {
      drawer: true,
      indexNumber: 1,
      isABCIndex: false,
      init: 0
    }
  },
  methods: {
    clickOnABCIndex(){

        this.$store.commit('firebase_store/update',true)

        let index = this.indexNumber -1
        let to = this.ABCIndex[index]

        // console.log('modelInput: ', this.modelInput)
        // console.log('verbList: ', this.verbList)

        // if(this.activeLink=='exam'){
        //   this.$store.commit('firebase_store/saveDataToResult', this.verbList)
        // }

        this.$store.commit('firebase_store/pagination', to)
        window.scrollTo(0, 0);
        // this.answer = -1
        // this.modelInput = {}
    }
  },
  computed: {
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

      if(this.init == 0){
        console.log('updated main layout')
        //**Replace numbers for letters in ABCIndex**
        const letters = this.$store.state.firebase_store.ABCIndex
        const lettersLength = letters.length
        // const qPaginationClass = document.getElementsByClassName('q-pagination');
        
        const buttonsFromIndex = document.querySelectorAll('div.q-pagination div.row button')

        // console.log(buttonsFromIndex[2].innerText = '2')

        for(let i = 0; i<lettersLength; i++){
          buttonsFromIndex[i].innerText = letters[i]
        }
        this.init = 1
      }

  }
}
</script>

<style scoped>
h1 {font-size:23px; margin: 0; padding:0; line-height: 1; text-align: center;text-shadow: 1px 3px 6px #000; font-weight: 400; letter-spacing: 0;}
h1 span {font-size:16px}
</style>