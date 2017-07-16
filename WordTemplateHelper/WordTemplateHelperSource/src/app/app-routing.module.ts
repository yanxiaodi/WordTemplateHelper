
/*
  This file defines the routes of the application. 
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionStepsComponent } from './instruction-steps/instruction-steps.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchTemplateComponent } from './search-template/search-template.component';
import { MyFavoriteTemplateComponent } from './my-favorite-template/my-favorite-template.component';
import { AddTemplateComponent } from './add-template/add-template.component';
import { OrganizationTemplateComponent } from './organization-template/organization-template.component';
import { MyPrivateTemplateComponent } from './my-private-template/my-private-template.component';

// export function fetchInstructionSetting(): string {
//   return window.localStorage.getItem("StyleCheckerAddinShowInstructions");
// }

// export function setRoutesArray(): any {
//   let routesArray: any = [
//     { path: 'instruction-steps', component: InstructionStepsComponent },
//     { path: 'settings', component: SettingsComponent },
//     { path: 'add-template', component: AddTemplateComponent },
//     { path: 'search-template', component: SearchTemplateComponent },
//     { path: 'my-favorite-template', component: MyFavoriteTemplateComponent },
//     { path: 'my-private-template', component: MyPrivateTemplateComponent },
//     { path: 'organization-template', component: OrganizationTemplateComponent }

//   ];

//   let defaultRoute: any = { path: '', redirectTo: '/instruction-steps', pathMatch: 'full' };

//   // If a user has set the application to skip the instruction view,
//   // then set the default route to the search and replace view.
//   if (fetchInstructionSetting() === "OnlyFirstTime") {
//     defaultRoute = { path: '', redirectTo: '/search-template', pathMatch: 'full' }
//   }
//   routesArray.unshift(defaultRoute);
//   return routesArray;
// }

// export const routes: Routes = setRoutesArray();
export const routes: Routes = [
  { path: '', redirectTo: '/search-template', pathMatch: 'full' },
  { path: 'instruction-steps', component: InstructionStepsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'add-template', component: AddTemplateComponent },
  { path: 'search-template', component: SearchTemplateComponent },
  { path: 'my-favorite-template', component: MyFavoriteTemplateComponent },
  { path: 'my-private-template', component: MyPrivateTemplateComponent },
  { path: 'organization-template', component: OrganizationTemplateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // Use hash location strategy in an Office Add-in
    { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }