const { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } = require('typeorm');
const { roles } = require('../config/roles');

@Entity({ name: 'user' })
class User {
  @PrimaryGeneratedColumn('uuid')
  user_id;

  @Column({ type: 'varchar', length: 255, nullable: false, trim: true })
  name;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true, trim: true })
  email;

  @Column({ type: 'varchar', length: 255, nullable: false, trim: true })
  password;

  @Column({ type: 'enum', enum: roles, default: 'user' })
  role;

  @Column({ type: 'boolean', default: false })
  isEmailVerified;

  @CreateDateColumn()
  createdAt;

  @UpdateDateColumn()
  updatedAt;
}

module.exports = User;
