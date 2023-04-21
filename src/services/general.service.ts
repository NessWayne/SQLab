import {  getManager, EntityRepository, Repository, EntityManager } from 'typeorm';
import { User } from '../entities/user.entity';




class GeneralService {

  private entityManager : EntityManager;

  constructor(){
      this.entityManager = getManager();
  }
  
  public async findAllUser(): Promise<any> {

  /*  const userRep =  await this.entityManager.getRepository(User).findOne({id : "" });

    let userM=  await this.entityManager.getRepository(User).createQueryBuilder('us')
    .select(['us.id'])
    .where({ id: "" })
    .getOne(); */
    
  /*  let users = await this.entityManager.getRepository(User).createQueryBuilder('us')
    .limit(10)
    .getMany(); */
    
    const users: any[] = await this.entityManager.query("SELECT * FROM user LIMIT 10");

    return users;
  }

  public async getUserById(userId: string){
    
    const sql = 'SELECT * FROM user WHERE id=?';          
    const result = await this.entityManager.query(sql, [userId]);

            if (result.length === 0) {
                return {};
            }

            const user = result[0];

            return user;
          //  let query = 'UPDATE user SET status=1 WHERE id=?';
          //  const result2 = await this.entityManager.query(query, [userId]);
  }

  async getRoles() {

    type rolekt = {
      [key: string]: any
  }
  
    let rolelist : rolekt = {};
    const entityManager = this.entityManager;
  
    const roles: any[] = await entityManager.query("SELECT * FROM roles");
  
    for (const rol of roles) {
     
      let permiss = [];
      let roleId = String(rol.id);
      let roleName = rol.name;

      permiss.push(roleId);
      permiss.push(roleName);

      const query = ` SELECT per.id AS Id, per.name AS Name 
                      FROM role_has_permissions rhp
                      INNER JOIN  roles r
                      ON rhp."roleId" = r.id
                      INNER JOIN permissions per 
                      ON rhp."permissionId" = per.id 
                      WHERE r.id = $1 `;
       const permissions: any[]= await entityManager.query(query, [roleId]);

    /* Es necesario utilizar comillas dobles en los campos que estan declarados con mayuscula
       para que PostgreSQL pueda identificarlos */

      for(const value of permissions) {
        permiss.push(value.name);
      }

      rolelist[roleId] = permiss;
     
    }

      return rolelist;

  }

  /*  const query = `SELECT per.id AS Id, per.name AS Name 
                     FROM role_has_permissions rhp
                     INNER JOIN  roles r
                     ON rhp."roleId" = r.id
                     INNER JOIN permissions per 
                     ON rhp."permissionId" = per.id 
                     WHERE r.id=$1`;
    const permission: SysPermissions[]= await this.entityManager.query(query, [idRole]);
    
    permission.forEach(async function (value) {
        console.log(value.name)
    }); */

    /* Es necesario utilizar comillas dobles en los campos que estan declarados con mayuscula
       para que PostgreSQL pueda identificarlos */


   /* 
    const permissions: SysPermissions[] = await this.entityManager.createQueryBuilder()
    .select("p.id AS Id, p.name AS Name ")
    .from("role_has_permissions", "rhp")
    .innerJoin("roles", "r", 'rhp.roleId = r.id')
    .innerJoin("permissions", "p", 'rhp.permissionId = p.id')
    .where("r.id = :id", { id: roleId }).getRawMany();

       Se utiliza getRaw cuando el resultado de la consulta no corresponde a algun entity, 
       si no mas bien es una composicion de varias tablas(entities) 

       for (const value of permissions) {
         console.log(value.name);
       }
   
   */
}

export default GeneralService;
