import { create } from 'zustand'

interface basketTokenState {
  basketToken: string
  setBasketToken: (newToken: string) => void
}

export const useBasketToken = create<basketTokenState>()((set) => ({
  basketToken: '',
  setBasketToken: (newToken: string) => set({ basketToken: newToken }),
}))
