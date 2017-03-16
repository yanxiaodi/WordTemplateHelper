import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ButtonComponent } from '../shared/button/button.component';
import { IInstructionStep } from './IInstructionStep';

@Component({
  selector: 'app-instruction-steps',
  templateUrl: './instruction-steps.component.html',
  styleUrls: ['./instruction-steps.component.css']
})
export class InstructionStepsComponent implements OnInit {

  private title: string = "Welcome";
  private addin_description: string = "Template Helper can help you to search thousands word templates and use it by one button.";
  private steps_intro: string = "Just take these steps:";
  private steps: Array<IInstructionStep> =
  [{ step_number: 1, content: "Search templates by keyword and insert it to your document. You can add it to your favorites or convert it as your organization's template." },
  { step_number: 2, content: "Upload current document as Private/Organization/Public." },
  { step_number: 3, content: "Use your favorite templates." },
  { step_number: 4, content: "Use your private templates." },
  { step_number: 5, content: "Explore and use your organization's templates." }];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
