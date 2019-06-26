﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using suncoastoverflow;

namespace sdgreacttemplate.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20190626022647_AddFK")]
    partial class AddFK
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.0-rtm-35687")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("SuncoastOverflow.Model.Answer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<int>("VoteValue");

                    b.HasKey("Id");

                    b.ToTable("Answer");
                });

            modelBuilder.Entity("SuncoastOverflow.Model.Question", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AnswerId");

                    b.Property<string>("Description");

                    b.HasKey("Id");

                    b.HasIndex("AnswerId");

                    b.ToTable("Question");
                });

            modelBuilder.Entity("SuncoastOverflow.Model.Question", b =>
                {
                    b.HasOne("SuncoastOverflow.Model.Answer", "Answer")
                        .WithMany("Questions")
                        .HasForeignKey("AnswerId");
                });
#pragma warning restore 612, 618
        }
    }
}
