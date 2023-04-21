import { createConnection } from 'typeorm';
import { dbConnection } from './databases';


class App {

  public async connectToDatabase() {
    await createConnection(dbConnection);
    console.log("Connection Success!")
  }

}

export default App;
