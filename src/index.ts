import 'dotenv/config';
import App from './app';
import DataService from './services/data.service';


(async () => {
  const app = new App();
  await app.connectToDatabase();

 let dataService = new DataService();

 let resp = await dataService.getResultMethod(["01bcd751-b422-44a3-a779-8dc86da2a6b4", "038f074d-0da0-4a64-af22-8e32fa45bda9", "05cb05bf-a625-4559-830d-6aa4de889cf6"]);
 console.log(resp); 

 await dataService.updateResultMethod(resp);

})();
