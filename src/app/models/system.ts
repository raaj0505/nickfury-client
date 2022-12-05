export interface System {
  id?:number;
  name:string;
  isUp:boolean;
  lastCheckedAt:string;
  healthCheckUrl:string;

}
