import { MigrationInterface, QueryRunner } from "typeorm";

export class user1617989909928 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      "create table `users` (`id` int unsigned not null auto_increment primary key, `username` text not null, `password` text not null, `first_name` text not null, `last_name` text not null, `created_at` datetime not null, `updated_at` datetime not null) default character set utf8mb4 engine = InnoDB;"
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE users`);
  }
}
    