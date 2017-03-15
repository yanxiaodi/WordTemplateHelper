using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using WordTemplateHelperApi.Data;
using WordTemplateHelperApi.Models;

namespace WordTemplateHelperApi.Migrations
{
    [DbContext(typeof(WordTemplateContext))]
    [Migration("20170315072439_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WordTemplateHelperApi.Models.OrganizationTemplateInfo", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateTime");

                    b.Property<string>("OrganizationId");

                    b.Property<string>("TemplateId");

                    b.HasKey("Id");

                    b.ToTable("OrganizationTemplateInfoes");
                });

            modelBuilder.Entity("WordTemplateHelperApi.Models.PrivateTemplateInfo", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateTime");

                    b.Property<string>("TemplateId");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.ToTable("PrivateTemplateInfoes");
                });

            modelBuilder.Entity("WordTemplateHelperApi.Models.UserFavoriteInfo", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateTime");

                    b.Property<string>("TemplateId");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.ToTable("UserFavoriteInfoes");
                });

            modelBuilder.Entity("WordTemplateHelperApi.Models.WordTemplateInfo", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreateTime");

                    b.Property<int?>("DownloadCount");

                    b.Property<string>("ImageUrl");

                    b.Property<string>("Name");

                    b.Property<decimal?>("Star");

                    b.Property<string>("TemplateContent");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("WordTemplateInfoes");
                });
        }
    }
}
