import { defineStore } from 'pinia';

export const firebase_db_store = defineStore('firebase_db_store', {
  state: () => ({
    ABCIndex: [],
    dataGlobal: [],
    verbList: [],
    dataResult: [],
    dataFirstLetters: null,
    updated: false,
    answer: -1
  }),
  getters: {
  },

  actions: {
    getFirebaseToStore(data) {
      // console.log('Pinia: ', data)

      this.dataGlobal = data.Verb_List;

      //ABCIndex
      const dataIndex = data.Verb_List
      const arrDataIndex = []
      const verbListLength = dataIndex.length;
      const dataGlobal = this.dataGlobal
      const dataGlobalLength = dataGlobal.length;

      for(let i=0; i<verbListLength; i++){
        //console.log('data.Verb_List: ', data.Verb_List[i].INFINITIVE)
        arrDataIndex.push(dataIndex[i].INFINITIVE.charAt(0))
      }

      //IndexOf
      let result = arrDataIndex.filter((item,index)=>{
        return arrDataIndex.indexOf(item) === index;
      })

      //Paginacion
      this.ABCIndex = result;

      //Only first letters for paginacion
      let arrFirstLetters = []

      for(let i = 0; i<dataGlobalLength; i++){
          arrFirstLetters.push(dataGlobal[i].INFINITIVE.charAt(0))
      }

      this.dataFirstLetters = arrFirstLetters

      // console.log('this.dataFirstLetters: ', this.dataFirstLetters);

      //Modelo del for verbList
      this.verbList = this.dataGlobal.slice(0,2);

      this.updated = true

    },
    saveDataToResult (data){
      // console.log('state.verbList: ',state.verbList)
      this.dataResult.push(data)
      // console.log('state.dataResult: ',state.dataResult)
    },
    pagination (to) {

        // console.log('Pagi', to)

        let index = to-1
        // to = state.ABCIndex[index]
        let dataGlobal = this.dataGlobal
        // let pagination = null
        //Modelo del for verbList
        // state.verbList = state.dataGlobal.slice(0,3);
        // console.log('To: ',typeof to)
        // console.log('state.dataGlobal Pag: ',state.dataGlobal)
        // console.log('state.verbList: ',state.verbList)

        if(typeof to == 'string'){

          for(let i = 0; i<dataGlobal.length; i++){
            // console.log(state.dataFirstLetters[i])
            if(to==this.dataFirstLetters[i]){
              // console.log('dataGlobal: ',dataGlobal[i].INFINITIVE)
              this.verbList = dataGlobal.filter(function(value){
                // console.log('value: ',value.INFINITIVE.charAt(0));
                return value.INFINITIVE.charAt(0) == to
              })
              // value => value.INFINITIVE == 'a')
            }
          }

          // Clear Answers
          this.answer = -1

          // state.verbList = pagination
          // console.log('state.verbList: ',state.verbList)

        }

    },
    update (boolean) {
      this.updated = boolean
    },
  },
});
