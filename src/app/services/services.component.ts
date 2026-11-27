import { Component, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from '../shared/services.service';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  builder = inject(FormBuilder)
  servicesApi = inject(ServicesService)

  services = signal<any[]>([])

  servicesForm = this.builder.group({
    id: [null as number | null],
    name: [''],
    description: [''],
    stype: [''],
    price: [null as number | null]
  })

  ngOnInit(){
    this.getServices()
  }

  getServices(){
        this.servicesApi.getServices().subscribe({
      next: (res: any) => {
        // console.log(res)
        this.services.set(res)
      },
      error: (error) => { 
        console.error(error)
      }
    })
  }
  
}
