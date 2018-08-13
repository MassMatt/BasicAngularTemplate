import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forth',
  templateUrl: './forth.component.html',
  styleUrls: ['./forth.component.css']
})
export class ForthComponent implements OnInit {
  
  selectedFile: File = null;
  isImage : boolean;
    
  constructor(private http : HttpClient) {}

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }



  onUpload(){
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this.http.post('http://localhost:8080/image',fd)
    .subscribe(res => {
      console.log(res);
      
    }

    );
  }



  public test(){
    let headers = new Headers({'x-auth-token':localStorage.getItem('jwt')});
    
    console.log(localStorage.getItem('jwt'));
    console.log(headers);
    
    this.http.get('http://localhost:8080/test')
    .subscribe(resp => {

      console.log(resp);
      
      return resp;
    })
  }

  ngOnInit() {
    
    
  }

}
