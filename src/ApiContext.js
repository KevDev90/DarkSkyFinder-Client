import React from 'react'

export default React.createContext({
  cards: [],
  folders: [],
  loggedIn: false,
  addFolder: () => {},
  addCard: () => {},
  deleteCard: () => {},
  favoriteCard: () => {},
  editCard: () => {},
})