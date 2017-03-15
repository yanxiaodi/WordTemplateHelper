using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WordTemplateHelperApi.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OrganizationTemplateInfoes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    OrganizationId = table.Column<string>(nullable: true),
                    TemplateId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrganizationTemplateInfoes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PrivateTemplateInfoes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    TemplateId = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrivateTemplateInfoes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserFavoriteInfoes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    TemplateId = table.Column<string>(nullable: true),
                    UserId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserFavoriteInfoes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WordTemplateInfoes",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    CreateTime = table.Column<DateTime>(nullable: false),
                    DownloadCount = table.Column<int>(nullable: true),
                    ImageUrl = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Star = table.Column<decimal>(nullable: true),
                    TemplateContent = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WordTemplateInfoes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrganizationTemplateInfoes");

            migrationBuilder.DropTable(
                name: "PrivateTemplateInfoes");

            migrationBuilder.DropTable(
                name: "UserFavoriteInfoes");

            migrationBuilder.DropTable(
                name: "WordTemplateInfoes");
        }
    }
}
