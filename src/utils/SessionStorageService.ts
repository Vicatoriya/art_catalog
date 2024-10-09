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
    if (array === null) {
      return false;
    }
    console.log(array.includes(item));
    return array.includes(item);
  }

  getItem<T>(key: string): T | null {
    const serializedValue = sessionStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue) as T;
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  hasItem(key: string): boolean {
    return sessionStorage.getItem(key) !== null;
  }
}
