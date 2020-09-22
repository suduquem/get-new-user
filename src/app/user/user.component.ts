import { Component, OnInit } from '@angular/core';

// Services
import { UserManagerService } from './services/user-manager.service';

// Models
import { IUserResponse, IUser } from './models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  // Si se quisiera renderizar user.email, habría que crear un objeto e inicializarlo user{email:...}
  name: string;
  email: string;
  phone: string;
  picture: string; 

  constructor(private userManagerService: UserManagerService) {}

  // El ngOnInit se ejecuta una sola vez, cuando carga el componente:
  ngOnInit(): void {
    this.getRandomUser();
  }

  //Función para suscribirnos a la respuesta del servicio
  getRandomUser() {
    this.userManagerService.getRandomName().subscribe((response: IUserResponse) => {
      // Para ver si recibe la respuesta:
      //console.log(response);

      //Para acceder a una variable de la respuesta:
      // console.log(response.results[0]);
      // this.email = response.results[0].email;

      const {results} = response; // Destructuring con objetos
      const [data] = results; // Destructuring con Array
      const {name, email, phone, picture}: IUser = data; // Destructuring
      // console.log(name, email, phone, picture);
      this.name = `${name.first} ${name.last}`;
      this.email = email;
      this.phone = phone;
      this.picture = picture.large;
      console.log(this.name);
    });
  }
}
