import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule);


function launch() {
  if (environment.production) {
    enableProdMode();
  }
  platformBrowserDynamic().bootstrapModule(AppModule);
}


if (window.hasOwnProperty('Office') && window.hasOwnProperty('Word')) {

  // Application-specific initialization code goes into a function that is
  // assigned to the Office.initialize event and runs after the Office.js initializes.
  // Bootstrapping of the AppModule must come AFTER Office has initialized.
  Office.initialize = reason => {
    // if (OfficeHelpers.Authenticator.isAuthDialog()) return;

    // AppGlobal.getInstance().authenticator = new OfficeHelpers.Authenticator();

    // register Microsoft endpoint by overriding default values
    //authenticator.endpoints.registerAzureADAuth(azureADClientID, 'microsoft.com',{
    //    redirectUrl: 'https://localhost:44379/MessageRead.html'
    //});

    // AppGlobal.getInstance().authenticator.endpoints.registerMicrosoftAuth(AppGlobal.getInstance().clientId, {
    //   redirectUrl: 'https://localhost:44334/login'
    // });


    launch();
  }
}
else {
  launch();
}