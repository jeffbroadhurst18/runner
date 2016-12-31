import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let runners = [
      {id: 11, name: 'Jeff Broadhurst', sex: 'Male', age: '45-49'},
      {id: 12, name: 'Wendy Broadhurst', sex: 'Female', age: '45-49'},
      {id: 13, name: 'Rebecca Broadhurst', sex: 'Female', age: '15-19'},
      {id: 14, name: 'Tom Broadhurst', sex: 'Male', age: '11-14'}
    ];
    return {runners};
  }
}