import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum UserType {
  SIMPLE_USER = 'user',
  AGENT_USER = 'agent_user',
  SHOP_USER = 'shop_user',
  FINANCIER_ADMIN_USER = 'financier_admin_user',
  FINANCIER_USER = 'financier_user',
  MULTISHOP_USER = 'multishop_user',
}
export enum EUserOrigination {
  CASHI = 'cashi',
  WEBAPP = 'webapp',
  MOBILE = 'mobile',
  WEB = 'web',
  ECOMMERCE = 'ecommerce',
  BACKOFFICE_USER = 'backofficeUser',
  LANDING = 'landing',
  FINDO = 'findo',
  SMS = 'sms',
  MAILING = 'mailing',
}


@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  username?: string;

  @Column()
  password?: string;

  @Column()
  phonenumber?: string;

  @Column()
  legalPerson?: string;

  @Column()
  birthday?: Date;

  @Column()
  email?: string;

  @Column()
  confirm?: boolean;

  @Column()
  name?: string;

  @Column()
  lastName?: string;

  @Column()
  secondName?: string;

  @Column()
  rfc?: string;

  @Column()
  curp?: string;

  @Column()
  nacionality?: string;

  @Column()
  civilStatus?: string;

  @Column()
  jobCompanyName?: string;

  @Column()
  image?: string;

  @Column({ type: 'json' })
  address: any;

  @Column()
  status?: boolean;

  @Column()
  type?: UserType;

  @Column({ type: 'json' })

  ocr?: any;

  @Column({ type: 'json' })
  ocrRequest?: any;

  @Column({ type: 'json' })
  faceMatch?: any;

  @Column({ type: 'json' })
  faceMatchRequest?: any;

  @Column({ type: 'json' })
  creditBureauRequest?: any;

  @Column()
  customerId?: string;

  @Column({ type: 'json' })
  pld?: Array<object> | object;

  @Column({ type: 'json' })
  creditBureauScore?: object;

  @Column({ type: 'json' })
  creditCircleScore?: object;

  @Column()
  codeVerificateCreditRedeemed?: number;

  @Column()
  kycValidationStatus?: boolean;

  @Column()
  banned?: boolean;

  @Column()
  blocked?: boolean;

  @Column()
  unlockedDate?: Date;

  @Column()
  confirmTries?: number;

  @Column()
  kycTries?: number;

  @Column()
  recoverPasswordTries?: number;

  @Column({ type: 'json' })
  additionalProperties?: any;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;

  @Column({ type: 'json' })
  roles?: Array<string>;

  @Column({type: 'json'})
  prequalifier?: any;

  @Column({ name: 'flag_login', type: 'tinyint' , default: 0, comment: 'It is used to verify if you will be logged in for the first time or not.' })
  flagLogin?: boolean;

}

export class UserAdditionalProperties {

  financierId?: string | Array<string>;

  shopId?: string;

  shopBranchOfficesId?: string;

  origination?: EUserOrigination;

  shopName?: string;
  
  branchName?: string;
}