import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async getLessonById(id: string): Promise<LessonEntity> {
    return this.lessonRepository.findOne({ id });
  }

  async getAllLessons(): Promise<Array<LessonEntity>> {
    return this.lessonRepository.find();
  }

  async createLesson(
    createLessonInput: CreateLessonInput,
  ): Promise<LessonEntity> {
    const { name, startDate, endDate } = createLessonInput;

    const lesson = this.lessonRepository.create({
      name,
      startDate,
      endDate,
    });

    await this.lessonRepository.save(lesson);

    return lesson;
  }
}
