export const findFolder = (folders = [], folderId) =>
  folders.find((folder) => {
    return folder.id === folderId;
  });

export const findCard = (cards = [], cardId) =>
  cards.find((card) => card.id + "" === cardId);

export const getCardsForFolder = (cards = [], folderId) =>
  cards.filter((card) => {
    return card.folder_id === folderId;
  });

export const countCardsForFolder = (cards = [], folderId) =>
  cards.filter((card) => card.folder_id === folderId).length;