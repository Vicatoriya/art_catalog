import { FAVORITES_LIST_KEY } from '@constants/SessionStorageConstants';
import SessionStorageService from './SessionStorageService';

export default function favClickHandler(
  imgId: string,
  storage: SessionStorageService
) {
  if (storage.hasItemInArray(FAVORITES_LIST_KEY, imgId)) {
    storage.removeItem(imgId);
  } else {
    storage.addItemToArray(FAVORITES_LIST_KEY, imgId);
  }
}
