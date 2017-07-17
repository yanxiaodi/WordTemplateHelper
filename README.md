# WordTemplateHelper
This repo is an Office Add-in sample, which demonstrates how to create an Office Word Add-In project, including APIs and add-in.

You can find the details of this code demo from the link(by Chinese):
[How to Create an Office Word Add-In, including APIs and Add-In](http://www.cnblogs.com/yanxiaodi/p/7192280.html)

## How to run the project
First clone this repo to your local disk. Open the solution with VS 2017.

Compile the `WordTemplateHelperApi` project, and run this command to launch the API:

`dotnet run`

The URL of the API is:

`http://localhost:5000/api/`

Then compile the `WordTemplateHelperSource` project. Use this command in the directory:

`ng build --prod`

Copy all files in the `dist` directory to the `WordTemplateHelperWeb` directory.

Now set the `WordTemplateHelper` project as the startup project and run the solution by click `start` button on the toolbar of VS2017.

A Word instance will be launched and you can test the Word Template Helper.

## The architecture of the solution

![](http://images2015.cnblogs.com/blog/352913/201707/352913-20170716224405316-803553342.png)

The solution contains these projects:
* `WordTemplateHelper`. This project is the configuration project of a Word Add-in, which contains a `WordTemplateHelperManifest.xml` of the Add-In.

* `WordTemplateHelperApi`. This is the API of the Add-in. This project is developed by ASP.NET Core MVC.

* `WordTemplateHelperSource`. This is the source code of the Add-in. This is a pure frontend project with `Angular` and `TypeScript`.

* `WordTemplateHelperWeb`. This is the main project of the Add-In. Commonly we should spend most of the time in this project. Because of `Angular`, we just need to copy the files in `dist` directory to this project.

## The representation of the Word Add-in

![](http://images2015.cnblogs.com/blog/352913/201707/352913-20170716224426332-1335921032.png)

Users can upload local documents as a template to the server, and search, download, and apply them to local documents.


### Contact
yan_xiaodi@hotmail.com

