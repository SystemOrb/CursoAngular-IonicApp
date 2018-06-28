export class list
{
  name:string;
  item:string[];
  buyed:boolean = false;
  constructor(name ,buyed){
      if(buyed)
      {
        this.buyed = true;
      }
      this.item = name;
  }
}
