import { Component, OnInit } from '@angular/core';
import { NavigationHeaderComponent } from '../shared/navigation-header/navigation.header.component';
import { ButtonComponent } from '../shared/button/button.component';
import { BrandFooterComponent } from '../shared/brand-footer/brand.footer.component';

// The SettingsStorageService provides CRUD operations on application settings.
import { SettingsStorageService, WordTemplateApiService, WordDocumentService } from '../services/index';
import { WordTemplateInfo } from '../models/index';

@Component({
  selector: 'app-search-template',
  templateUrl: './search-template.component.html',
  styleUrls: ['./search-template.component.css']
})
export class SearchTemplateComponent implements OnInit {

  public searchString: string;
  public resultList: Array<WordTemplateInfo>;
  public message: string;
  public isShowMessage: boolean;
  constructor(public settingsStorage: SettingsStorageService, public wordDocument: WordDocumentService, public wordTemplateApiService: WordTemplateApiService) {
    this.searchString = "";
    this.resultList = [];
    this.isShowMessage = false;
  }
  ngAfterViewInit() {
    let currentInstructionSetting: string = this.settingsStorage.fetch("StyleCheckerAddinShowInstructions");


    // Ensure that when the settings view loads, the radio button selection matches
    // the user's current setting.
    // if (currentInstructionSetting === "OnlyFirstTime") { 
    //   this.alwaysRadioButton.nativeElement.removeAttribute("checked");
    //   this.onlyFirstTimeRadioButton.nativeElement.setAttribute("checked", "checked");
    // }
  }

  ngOnInit() {
  }

  search() {
    this.resultList = [];
    console.log("数组已清空");

    this.wordTemplateApiService.searchWordTemplateList(encodeURI(this.searchString))
      .then(response => {
        console.log("获得返回值");

        if (response.IsSuccess) {
          console.log("获取数据成功");

          response.Result.forEach(x => this.resultList.push(x));
        }
        else {
          this.message = "No results!" + response.Message;
          this.isShowMessage = true;
        }
      })
      .catch(error => {
        this.message = "No results!";
        this.isShowMessage = true;
      })
  }

  closeMessage() {
    this.message = "";
    this.isShowMessage = false;
  }

  applyTemplate(template: WordTemplateInfo) {
    this.wordDocument.setOoxml(template.TemplateContent);
  }

  addFavorite(template: WordTemplateInfo) {
    this.wordTemplateApiService.addMyFavoriteTemplate(template)
      .then(response => {
        console.log("获得返回值");

        if (response.IsSuccess) {
          console.log("获取数据成功");
          this.message = "Done!" + response.Message;
          this.isShowMessage = true;
        }
        else {
          this.message = "Add to favorites failed!" + response.Message;
          this.isShowMessage = true;
        }
      })
      .catch(error => {
        this.message = "Add to favorites failed!";
        this.isShowMessage = true;
      })
  }

  addOrganization(template: WordTemplateInfo) {
    this.wordTemplateApiService.addOrganizationTemplate(template)
      .then(response => {
        console.log("获得返回值");

        if (response.IsSuccess) {
          console.log("获取数据成功");
          this.message = "Done!" + response.Message;
          this.isShowMessage = true;
        }
        else {
          this.message = "Add to organization failed!" + response.Message;
          this.isShowMessage = true;
        }
      })
      .catch(error => {
        this.message = "Add to organization failed!";
        this.isShowMessage = true;
      })
  }

}
