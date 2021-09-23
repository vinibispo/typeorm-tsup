import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("sessions")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
