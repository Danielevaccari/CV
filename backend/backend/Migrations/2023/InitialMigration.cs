using FluentMigrator;

namespace InitialMigration
{
    [Migration(07032023_2145)]
    public class AddLogTable : Migration
    {
        public override void Up()
        {
            Create.Table("VisitorData")
                .WithColumn("Id").AsInt64().PrimaryKey().Identity()
                .WithColumn("Ip").AsString(50).Nullable()
                .WithColumn("OperatingSystem").AsString(100).Nullable()
                .WithColumn("date").AsDate().NotNullable();

            Create.Table("Migration")
                .WithColumn("Code");
        }

        public override void Down()
        {
            Delete.Table("VisitorData");
        }
    }
}