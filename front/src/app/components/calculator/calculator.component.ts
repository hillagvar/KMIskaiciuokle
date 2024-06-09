import { Component } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  public result: string | null = null;

  public height: number | null = null;
  public weight: number | null = null;

  constructor (private calculatorService: CalculatorService) {}

  public calculateBMI() {
    if (this.height !=null && this.weight != null) {
      this.calculatorService.sendToCalculate(this.height, this.weight).subscribe( (data: any) => {
        this.result = "Jūsų kūno masės indeksas yra: " + data.bmi; 
        console.log(data);
      });
    }
  }
}
