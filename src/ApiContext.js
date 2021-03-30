import React from 'react'

export default React.createContext({
  cards: [],
  folders: [],
  addFolder: () => {},
  addCard: () => {},
  deleteCard: () => {},
})