declare module "../../services/ApiClient" {
    export default class ApiClient {
      constructor(baseURL: string);
      read(url: string, accessToken?: string): Promise<any>;
    }
  }
  