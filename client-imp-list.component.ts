import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormArray} from '@angular/forms';

@Component({
  selector: 'app-client-imp-list',
  templateUrl: './client-imp-list.component.html',
  styleUrls: ['./client-imp-list.component.css']
})
export class ClientImpListComponent implements OnInit {

  cilForm: FormGroup;

  constructor(private fb:FormBuilder) {
  this.cilForm= this.fb.group({
            incNo: '',
            iStartTime:'',
            iEndtime:'',
            ntlData:'false',
            params: this.fb.array([])
           })
  }

  ngOnInit(): void {
    this.addParams();
    this.addParams();
    this.addParams();
    this.cilForm.valueChanges.subscribe(console.log)
  }


  get paramForm()
    {
    return this.cilForm.get('params') as FormArray
    }

    addParams()
    {
     const params1 = this.fb.group(
     {
        param:[],
        value:[]
     })
     this.paramForm.push(params1);
    }

    deleteParam(i)
    {
    this.paramForm.removeAt(i)
    }

}
