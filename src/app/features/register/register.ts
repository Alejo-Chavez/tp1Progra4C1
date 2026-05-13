import { Component } from '@angular/core';
import { StepOne } from './components/step-one/step-one';
import { StepTwo } from './components/step-two/step-two';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthServices } from '../../core/services/auth.service';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-register',
  imports: [StepOne, StepTwo, ReactiveFormsModule],
  templateUrl: './register.html',
})
export class Register {

  form: FormGroup;
  step = 1;
  loading = false;

  constructor(
    private authService: AuthServices,
    private userService: UserService,
    private router: Router
  ) {
    this.form = new FormGroup({
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      edad: new FormControl("", [Validators.required, Validators.pattern("^[0-9]+$")]),
      mail: new FormControl("", [Validators.required, Validators.email]),
      contrasena: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  async handleSubmit(): Promise<void> {
    if(this.loading) return;  
    this.form.markAllAsTouched();

    if (this.form.invalid || this.loading) return;
    
    this.loading = true;

    const { nombre, apellido, edad, mail, contrasena } = this.form.value;

    const profile = { nombre, apellido, edad }; //guardamos los datos que van a ser insertados a la tabla

    try {
      // 1. AUTH
      const { data, error } = await this.authService.register(mail, contrasena); //llamo a la funcion y paso parametros

      if (error) {
        alert(error.message);
        this.loading = false;
        return;
      } //si no hay error, se tuvo que crear un auth user

      const userId = data.user?.id; //si se creó sin ID, error

      if (!userId) { 
        alert("No se pudo obtener el usuario");
        this.loading = false; //cancelamos y cortamos el flujo
        return;
      }

      // 2. PROFILE
      const { error: profileError } = //mandamos el id para vincular authUser con userProfile  (se decide que son LA MISMA persona-)
        await this.userService.createProfile(userId, profile);

      if (profileError) {
        alert(profileError.message);
        
        this.loading = false;
        return;
      }

      console.log("Registrado correctamente");
      this.authService.currentUser.set({id: userId, email: mail})
      this.router.navigate(['/home'])

    } finally {
      this.loading = false;
    }
  }

  next() {
    this.form.get('nombre')?.markAsTouched();
    this.form.get('apellido')?.markAsTouched();
    this.form.get('edad')?.markAsTouched();

    if (
      this.form.get('nombre')?.invalid ||
      this.form.get('apellido')?.invalid ||
      this.form.get('edad')?.invalid
    ) {
      return;
    }

    this.step = 2;
  }

  prev() {
    this.step--;
  }
}