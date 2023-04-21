import {  getManager, EntityRepository, Repository, EntityManager } from 'typeorm';


class DataService {

  private entityManager : EntityManager;

  constructor(){
      this.entityManager = getManager();
  }
  
  public async getResultMethod(additionalDUIds: Array<string>): Promise<any> {

    for(const additionalId of additionalDUIds) {

        const query = `SELECT * FROM result_method WHERE additional_data_user_id=?`;
    
        const resm = await this.entityManager.query(query , [additionalId]);
    
        let regAprobado = { resultMethodId: "", CCRId : "", result: ""};
        let regWCCR= { resultMethodId: "", CCRId : "", result: ""};
    
        for(const row of resm) {
           let resultMethodId = row.id;
           let CCRId = row.configurable_credit_request_id;
           let result = row.result;
    
            if(!CCRId){
              if(result === 'Aprobado'){
                regAprobado = { resultMethodId, CCRId : "", result };
              }
             }
      
            if(CCRId){
              if(result === 'En duda'){
                regWCCR = { resultMethodId, CCRId, result };
              }
            }
       
        }
    
        regAprobado.CCRId  = regWCCR.CCRId;
        regWCCR.CCRId = "";

        if(regAprobado.resultMethodId && regWCCR.resultMethodId){
          console.log(regAprobado);
          console.log(regWCCR)

        //console.log(resm)
        
        console.log("--------------------------------------------")
        }


    }

 
  }

 
}

export default DataService;
