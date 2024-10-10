export default class SessionStorageService {
  setItem<T>(key: string, value: T): void {
    const serializedValue = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  }

  addItemToArray<T>(key: string, newItem: T): void {
    const existingArray = this.getItem<T[]>(key) || [];
    existingArray.push(newItem);
    this.setItem(key, existingArray);
  }

  hasItemInArray<T>(key: string, item: T): boolean {
    const array = this.getItem<T[]>(key);
    if (array === undefined) {
      return false;
    }
    return array.includes(item);
  }

  removeItemFromArray<T>(key: string, item: T): void {
    const array = this.getItem<T[]>(key);
    if (!array) {
      return;
    }
    const index = array.indexOf(item);
    if (index >= 0) {
      array.splice(index, 1);
    }
    this.setItem(key, array);
  }

  getItem<T>(key: string): T | undefined {
    const serializedValue = sessionStorage.getItem(key);
    if (serializedValue === null) {
      return undefined;
    }
    return JSON.parse(serializedValue) as T;
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  hasItem(key: string): boolean {
    return sessionStorage.getItem(key) != null;
  }
}
