import { AsyncStorage } from 'react-native';

class Storage {
  static async saveItem(key, item) {
    try {
      return await AsyncStorage.setItem(key, item);
    } catch (error) {
      throw new Error('Unable to save item');
    }
  }

  static async getItem(key) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      throw new Error('Unable to get the items');
    }
  }

  static async deleteItems() {
    try {
      return AsyncStorage.clear();
    } catch (error) {
      throw new Error('Unable to delete all the data');
    }
  }
}

export default Storage;
