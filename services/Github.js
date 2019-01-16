import {
  fetchAllLanguages,
  fetchRepositories,
  fetchDevelopers,
} from '@huchenme/github-trending';

export default class Github {
  static async getAllTrendingLanguages() {
    try {
      return await fetchAllLanguages();
    } catch (error) {
      return null;
    }
  }

  static async getAllTrendingRepositories() {
    try {
      return await fetchRepositories();
    } catch (error) {
      return null;
    }
  }

  static async getAllTrendingDevelopers() {
    try {
      return await fetchDevelopers();
    } catch (error) {
      return null;
    }
  }
}
