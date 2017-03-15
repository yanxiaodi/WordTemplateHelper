using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WordTemplateHelperApi.Models;

namespace WordTemplateHelperApi.Data
{
    public class WordTemplateContext:DbContext
    {
        public WordTemplateContext(DbContextOptions<WordTemplateContext> options) : base(options)
        {

        }

        public DbSet<WordTemplateInfo> WordTemplateInfoes { get; set; }
        public DbSet<UserFavoriteInfo> UserFavoriteInfoes { get; set; }
        public DbSet<PrivateTemplateInfo> PrivateTemplateInfoes { get; set; }
        public DbSet<OrganizationTemplateInfo> OrganizationTemplateInfoes { get; set; }

    }
}
