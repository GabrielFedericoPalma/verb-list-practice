<template>
  <q-layout view="lHh Lpr lFf" :key="updated" >

    <q-header elevated class="row justify-between items-center" >
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="drawer = !drawer" />
      </q-toolbar>
      <div>
        <h1>Irregular verbs</h1>
        <div class="row items-center" >
          <img src="/app-icons/usa-flag.png" alt="" />
          <span>practice</span>
          <img src="/app-icons/arg-flag.png" alt="" />
        </div>
      </div>
        <p><small>v 1.1.2</small></p>
    </q-header>

   <!-- ***** MENU LATERAL ***** -->
  <q-drawer v-model="drawer" show-if-above bordered class="bg-black" >

      <q-list style="padding-top:16px" >

        <router-link to="/" >
          <q-item clickable  >
          <q-item-section avatar >
            <q-icon name="img:app-icons/text_to_speech.svg" />
          </q-item-section>
            <q-item-section>
              <q-item-label class="text-uppercase" >VERB LIST</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

        <router-link to="/practice" >
          <q-item clickable >
          <q-item-section avatar >
            <q-icon name="img:app-icons/fact_check.svg" />
          </q-item-section>
            <q-item-section>
              <q-item-label class="text-uppercase" >PRACTICE</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

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
import { mapState } from 'pinia'
import { firebase_db_store } from 'stores/firebase_db.js'

export default {
  name: 'MainLayout',
  components:{},
  data () {
    return {
      drawer: true,
      indexNumber: 0,
      isABCIndex: false,
      init: 0,
      store: firebase_db_store()
    }
  },
  methods: {
    clickOnABCIndex(){

        firebase_db_store().update(true)

        let index = this.indexNumber -1
        let to = this.ABCIndex[index]

        firebase_db_store().pagination(to)

        window.scrollTo(0, 0);

    }
  },
  computed: {
    ABCIndex: {
      get() {
        return this.store.ABCIndex
      }
    },
    ABCIndexLength: {
      get() {
        return this.store.ABCIndex.length
      }
    },
    dataFirstLetters: {
      get() {
        return this.store.dataFirstLetters
      }
    },
    updated: {
      get() {
        return this.store.updated
      }
    }
  },
  updated(){
    // console.log('updated')
      if(this.init == 0){
        // console.log('updated main layout')
        //**Replace numbers for letters in ABCIndex**
        const letters = this.store.ABCIndex
        const lettersLength = letters.length
        // const qPaginationClass = document.getElementsByClassName('q-pagination');

        const buttonsFromIndex = document.querySelectorAll('div.q-pagination__middle.row button')

        // console.log(buttonsFromIndex[2].innerText = '2')

        for(let i = 0; i<lettersLength; i++){
          buttonsFromIndex[i].innerText = letters[i]

          // console.log(buttonsFromIndex[i].innerText)
        }

        this.init = 1
      }

  }
}
</script>

<style scoped >
.q-header {padding:16px 16px 6px 16px}
.q-header img {width: 42px; margin: 10px;}
.q-header img:first-child {width:33px}
.q-header .q-btn {margin-top: -10px;}
</style>
