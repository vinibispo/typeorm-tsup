import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCreatedAtAndUpdatedAtToSessions1632356657591
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("users", [
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        default: "date('now')",
      }),
      new TableColumn({
        name: "updated_at",
        type: "timestamp",
        default: "date('now')",
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns("users", ["created_at", "updated_at"]);
  }
}
