const {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} = require('typeorm');
const User = require('./user.model');
const { tokenTypes } = require('../config/tokens');

@Entity({ name: 'tokens' })
class Token {
  @PrimaryGeneratedColumn()
  token_id;

  @Column({ type: 'varchar', length: 255, nullable: false })
  token;

  @Column({ type: 'enum', enum: Object.values(tokenTypes), nullable: false })
  type;

  @Column({ type: 'timestamp', nullable: false })
  expires;

  @Column({ type: 'boolean', default: false })
  blacklisted;

  @CreateDateColumn()
  createdAt;

  @UpdateDateColumn()
  updatedAt;

  @ManyToOne(() => User, (user) => user.tokens, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user;
}

module.exports = Token;
