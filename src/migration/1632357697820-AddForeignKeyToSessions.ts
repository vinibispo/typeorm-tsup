import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AddForeignKeyToSessions1632357697820
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "sessions",
      new TableColumn({ name: "user_id", type: "int", isNullable: true })
    );
    await queryRunner.createForeignKey(
      "sessions",
      new TableForeignKey({
        name: "SessionUser",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("sessions", "SessionUser");
    await queryRunner.dropColumn("sessions", "user_id");
  }
}
