import { defineStore } from 'pinia'

export const useScoreGame = defineStore({
  id: 'counter',
  state: () => ({
      userO: 0,
      userX: 0
  }),
  actions: {
    incrementScore(win) {
      if (win === 'O') {
        this.userO += 1;
      }else if (win === 'X') {
        this.userX += 1;
      } 
    }
  }
})
