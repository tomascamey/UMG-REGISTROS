import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  private students: Student[] = [];

  create(createStudentDto: CreateStudentDto) {
    this.students.push(createStudentDto);
    return { message: 'Estudiante registrado', data: createStudentDto };
  }

  findAll() {
    return this.students;
  }

  findOne(carnet: string) {
    const student = this.students.find(s => s.carnet === carnet);
    if (!student) throw new NotFoundException(`Estudiante con carnet ${carnet} no encontrado`);
    return student;
  }

  update(carnet: string, updateStudentDto: UpdateStudentDto) {
    const index = this.students.findIndex(s => s.carnet === carnet);
    if (index === -1) throw new NotFoundException('Estudiante no encontrado');
    
    this.students[index] = { ...this.students[index], ...updateStudentDto };
    return { message: 'Estudiante actualizado (PATCH)', data: this.students[index] };
  }

  replace(carnet: string, createStudentDto: CreateStudentDto) {
    const index = this.students.findIndex(s => s.carnet === carnet);
    if (index === -1) throw new NotFoundException('Estudiante no encontrado');
    
    // Aquí está la corrección aplicada
    this.students[index] = { ...createStudentDto, carnet };
    return { message: 'Estudiante reemplazado (PUT)', data: this.students[index] };
  }

  remove(carnet: string) {
    const index = this.students.findIndex(s => s.carnet === carnet);
    if (index === -1) throw new NotFoundException('Estudiante no encontrado');
    
    const deleted = this.students[index];
    this.students.splice(index, 1);
    return { message: 'Estudiante eliminado', data: deleted };
  }
}