export class CreateCourseDto {
  codigo: string;
  nombre: string;
  descripcion: string;
  semestre: number;
  prerrequisitos: string[];
  creditos: number;
}