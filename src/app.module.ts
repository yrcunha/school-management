import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './modules/lesson/lesson.entity';
import { LessonModule } from './modules/lesson/lesson.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '172.17.0.2',
      port: 27017,
      username: 'mongo',
      password: 'docker',
      database: 'school_management',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [LessonEntity],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonModule,
  ],
})
export class AppModule {}
