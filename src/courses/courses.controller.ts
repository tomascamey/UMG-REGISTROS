import { Controller, Get, Post, Body, Patch, Put, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':codigo')
  findOne(@Param('codigo') codigo: string) {
    return this.coursesService.findOne(codigo);
  }

  @Patch(':codigo')
  update(@Param('codigo') codigo: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(codigo, updateCourseDto);
  }

  @Put(':codigo')
  replace(@Param('codigo') codigo: string, @Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.replace(codigo, createCourseDto);
  }

  @Delete(':codigo')
  remove(@Param('codigo') codigo: string) {
    return this.coursesService.remove(codigo);
  }
}