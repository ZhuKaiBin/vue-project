import { defineStore } from 'pinia'

// 创建一个store



export const useCounterStore = defineStore('counter', {

  state: () => {

    return {
      mun: 0,
      address: '北京'
    }
  },
  getters: {
    doubleCount(state):number {

      console.log('doubleCount', state.mun)

       return state.mun
    }
  },
  actions: {

    increment() {

    
      console.log('before increment', this.mun)
      if( this.mun<10)
      {
        this.mun++
      }
     
      console.log('after increment', this.mun)
    }
  },

})





export const useDataStore = defineStore('dataStore', {
  state: () => ({
    value: '默认数据'
  }),
  actions: {
    updateValue(newValue:string) {
      this.value = newValue
    }
  }
})

