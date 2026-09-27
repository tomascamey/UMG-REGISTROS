import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':carnet')
  findOne(@Param('carnet') carnet: string) {
    return this.studentsService.findOne(carnet);
  }

  @Patch(':carnet')
  update(@Param('carnet') carnet: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(carnet, updateStudentDto);
  }

  @Put(':carnet')
  replace(@Param('carnet') carnet: string, @Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.replace(carnet, createStudentDto);
  }

  @Delete(':carnet')
  remove(@Param('carnet') carnet: string) {
    return this.studentsService.remove(carnet);
  }
}