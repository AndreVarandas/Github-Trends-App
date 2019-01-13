import {
  fetchAllLanguages,
  fetchRepositories,
  fetchDevelopers,
} from '@huchenme/github-trending';

export default class Github {
  static async getAllTrendingLanguages() {
    try {
      const data = await fetchAllLanguages();
      return data;
    } catch (error) {
      console.log('Unable to fetch data');
      return undefined;
    }
  }

  static async getAllTrendingRepositories() {
    try {
      const data = await fetchRepositories();
      return data;
    } catch (error) {
      console.log('Unable to fetch data');
      return undefined;
    }
  }

  static async getAllTrendingDevelopers() {
    try {
      const data = await fetchDevelopers();
      return data;
    } catch (error) {
      console.log('Unable to fetch data');
      return undefined;
    }
  }
}
