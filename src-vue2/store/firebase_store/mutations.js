import state from "./state";

export function firebaseToStore (state, data) {
  // console.log('datae: ',data)

  if(data==''){
    data = state.dataCache
  }

  state.dataGlobal = data.Verb_List;

  //ABCIndex
  const dataIndex = data.Verb_List
  const arrDataIndex = []
  const verbListLength = dataIndex.length;
  const dataGlobal = state.dataGlobal
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
  state.ABCIndex = result;

  //Only first letters for paginacion
  let arrFirstLetters = []

  for(let i = 0; i<dataGlobalLength; i++){
      arrFirstLetters.push(dataGlobal[i].INFINITIVE.charAt(0))
  }
  
  state.dataFirstLetters = arrFirstLetters 

  //console.log('ABCIndex: ', state.ABCIndex);

  //Modelo del for verbList
  state.verbList = state.dataGlobal.slice(0,3);

}

export function saveDataToResult (state, data){
  // console.log('state.verbList: ',state.verbList)
  state.dataResult.push(data)
  // console.log('state.dataResult: ',state.dataResult)
}

export function pagination (state, to) {
    
    // console.log('TO', to)

    let index = to-1
    // to = state.ABCIndex[index]
    let dataGlobal = state.dataGlobal 
    // let pagination = null
    //Modelo del for verbList
    // state.verbList = state.dataGlobal.slice(0,3);
    // console.log('To: ',typeof to)
    // console.log('state.dataGlobal Pag: ',state.dataGlobal)
    // console.log('state.verbList: ',state.verbList)

    if(typeof to == 'string'){

      for(let i = 0; i<dataGlobal.length; i++){
        // console.log(state.dataFirstLetters[i])
        if(to==state.dataFirstLetters[i]){
          // console.log('dataGlobal: ',dataGlobal[i].INFINITIVE)
          state.verbList = dataGlobal.filter(function(value){
            // console.log('value: ',value.INFINITIVE.charAt(0));
            return value.INFINITIVE.charAt(0) == to
          })
          // value => value.INFINITIVE == 'a')      
        }  
      }

      // state.verbList = pagination
      // console.log('state.verbList: ',state.verbList)

    }

}

export function update (state, boolean) {
  state.update = boolean
}
