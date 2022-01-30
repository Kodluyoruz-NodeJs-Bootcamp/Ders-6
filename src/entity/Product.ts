import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './Category';
@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Category, category => category.products)
    category: Category;

    @Column()
    name: string;

    @Column()
    count: number

    @Column({ type: 'date', nullable: true })
    skid: Date
}
