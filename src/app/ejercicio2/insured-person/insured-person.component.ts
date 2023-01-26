import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insured-person',
  templateUrl: './insured-person.component.html',
  styleUrls: ['./insured-person.component.css']
})
export class InsuredPersonComponent implements OnInit{

  insured:any = [
    {
     aseguradora:"AFIRME",
     cotizacion:{
        cliente:{
          tipoPersona:"fisica",
          nombre:"prueba",
          apellidoPat:"prueba",
          apellidoMat:"prueba",
          rfc:"",
          fechaNacimiento:"01-01-2005",
          ocupacion:"",
          curp:"",
            direccion:{
              calle:"oriente 945",
              noExt:"410",
              noInt:"021",
              colonia:"prueba",
              codPostal:"56618",
              poblacion:"mexico",
              ciudad:"cdmx",
              pais:"mexico"
            },
          edad:"18",
          genero:"MASCULINO",
          telefono:"",
          email:""
        }
      }
     }
    ];

  insuredBasicData:any = [];

  ngOnInit(): void {    
    let {tipoPersona,nombre,apellidoPat,apellidoMat,fechaNacimiento} = this.insured[0].cotizacion.cliente;
    this.insuredBasicData = {
        nombre: nombre,
        apellidos: apellidoPat + " " + apellidoMat,
        fechaNacimiento: fechaNacimiento,
        tipo: tipoPersona
      };
  }

  change(){
    this.insuredBasicData = {
      nombre: 'Mauricio',
      apellidos: 'Reyes Rojas',
      fechaNacimiento: '07/09/2000',
      tipo: 'Fisica'
    };
  }

}
