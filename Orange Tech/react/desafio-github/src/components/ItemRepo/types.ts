export interface IItemRepo{
  repo?:any;

  id?: number;
  name?:string;
  full_name?:string;
  owner?:{
    avatar_url?:string;
  }
  html_url?:string;
  handleRemoveRepo: (id:number) => void;
}