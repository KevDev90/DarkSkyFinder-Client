const findFolder = (folders = [], folderId) =>
  folders.find((folder) => {
    return folder.id === folderId;
  });

const findCard = (cards = [], cardId) =>
  cards.find((card) => card.id + "" === cardId);

const getCardsForFolder = (cards = [], folderId) =>
  !folderId
    ? cards
    : cards.filter((card) => {
        return card.folder_id + "" === folderId;
      });

const countCardsForFolder = (cards = [], folderId) =>
  cards.filter((card) => card.folder_id === folderId).length;

export default { findFolder, findCard, getCardsForFolder, countCardsForFolder }