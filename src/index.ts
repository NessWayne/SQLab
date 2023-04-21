import 'dotenv/config';
import App from './app';
import DataService from './services/data.service';
//import generalService from './services/general.service';


(async () => {
  const app = new App();
  await app.connectToDatabase();

/*  let userService = new generalService();

  let res = await userService.findAllUser();
  console.log(res); */

 // let res = await userService.getUserById("00c03c40-cb0a-4d4c-989b-932dde532244");
 // console.log(res); 

 let dataService = new DataService();

 await dataService.getResultMethod(["01bcd751-b422-44a3-a779-8dc86da2a6b4", "038f074d-0da0-4a64-af22-8e32fa45bda9", "05cb05bf-a625-4559-830d-6aa4de889cf6"]);
  
})();
