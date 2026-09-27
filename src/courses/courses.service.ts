import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [];

  create(createCourseDto: CreateCourseDto) {
    this.courses.push(createCourseDto);
    return { message: 'Curso registrado', data: createCourseDto };
  }

  findAll() {
    return this.courses;
  }

  findOne(codigo: string) {
    const course = this.courses.find(c => c.codigo === codigo);
    if (!course) throw new NotFoundException(`Curso ${codigo} no encontrado`);
    return course;
  }

  update(codigo: string, updateCourseDto: UpdateCourseDto) {
    const index = this.courses.findIndex(c => c.codigo === codigo);
    if (index === -1) throw new NotFoundException('Curso no encontrado');
    
    this.courses[index] = { ...this.courses[index], ...updateCourseDto };
    return { message: 'Curso actualizado (PATCH)', data: this.courses[index] };
  }

  replace(codigo: string, createCourseDto: CreateCourseDto) {
    const index = this.courses.findIndex(c => c.codigo === codigo);
    if (index === -1) throw new NotFoundException('Curso no encontrado');
    
    // Aquí está la corrección aplicada
    this.courses[index] = { ...createCourseDto, codigo };
    return { message: 'Curso reemplazado (PUT)', data: this.courses[index] };
  }

  remove(codigo: string) {
    const index = this.courses.findIndex(c => c.codigo === codigo);
    if (index === -1) throw new NotFoundException('Curso no encontrado');
    
    const deleted = this.courses[index];
    this.courses.splice(index, 1);
    return { message: 'Curso eliminado', data: deleted };
  }
}