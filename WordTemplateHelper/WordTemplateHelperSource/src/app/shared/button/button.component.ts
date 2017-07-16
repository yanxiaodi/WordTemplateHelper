// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license in root of repo.

/*
  This file defines a Fabic-styled button. 
*/

import { Component, Input } from '@angular/core';

@Component({
    selector: 'sc-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {
     
     // Text for the button label is provided by the parent view.
     @Input() buttonlabel: string;
}
