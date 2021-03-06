import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

	info:any = {};
	cargada:boolean = false;
	cargada_sobre_nosotros:boolean = false;
	equipo:any = [];

  constructor( public http:HttpClient ) {
	  this.carga_info();
	  this.carga_sobre_nosotros();
   }
   public carga_info() {
		this.http.get("assets/data/info.pagina.json")
		.subscribe( data =>{
			// console.log(data);
			this.cargada = true;
			this.info = data;
	})
   }

   public carga_sobre_nosotros() {
		this.http.get("https://paginaweb-46309-default-rtdb.firebaseio.com/equipo.json")
		.subscribe( data =>{
			console.log(data);
			this.cargada_sobre_nosotros = true;
			this.equipo = data;
		})
   }
}
