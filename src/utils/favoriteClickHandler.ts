import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import SessionStorageService from '@utils/SessionStorageService';

export default function favClickHandler(
  imgId: string,
  storage: SessionStorageService
) {
  if (storage.hasItemInArray(FAVORITES_LIST_KEY, imgId)) {
    storage.removeItemFromArray(FAVORITES_LIST_KEY, imgId);
  } else {
    storage.addItemToArray(FAVORITES_LIST_KEY, imgId);
  }
}
