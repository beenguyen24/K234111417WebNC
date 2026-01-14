import { Component } from '@angular/core';

@Component({
  selector: 'app-ptb2',
  standalone: false,
  templateUrl: './ptb2.html',
  styleUrl: './ptb2.css',
})
export class Ptb2 {
  hsa:string="100"
  hsb:string="200"
  hsc:string="300"
  result:string="......"
  get_solution()
  {
    let a=parseFloat(this.hsa)
    let b=parseFloat(this.hsb)
    let c=parseFloat(this.hsc)

    if (a==0)
    {
      if (b==0 && c==0)
      {
        this.result="pt vô số nghiệm"
      }
      else if (b==0 && c!=0)
      {
        this.result="pt vô nghiệm"
      }
      else if (b!=0)
      {
        let x=-c/b
        this.result="pt có nghiệm x="+x
      }
    }
    else
    {
      let delta=Math.pow(b,2)-4*a*c
      this.result="biện luận theo Delta="+delta
      if (delta<0)
      {
        this.result="ptb2 vô nghiệm"
      }
      else if (delta==0)
      {
        let x=-b/(2*a)
        this.result="ptb2 có nghiệm kép x1=x2="+x
      }
      else
      {
        let x1=(-b+Math.sqrt(delta))/(2*a)
        let x2=(-b-Math.sqrt(delta))/(2*a)
        this.result="ptb2 có 2 nghiệm phân biệt x1="+x1+" và x2="+x2
      }
    }
  }

}