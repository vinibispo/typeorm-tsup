import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSession1632356139505 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "sessions",
        columns: [
          {
            name: "id",
            type: "int",
            isNullable: false,
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "date('now')",
          },
          { name: "updated_at", type: "timestamp", default: "date('now')" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("sessions");
  }
}
