export interface ProjectsCard {
  title: string;
  _id: string;
  imageUrl: string;
  tags: string[];
  description: string;
  link: string;
}
export interface ContactFormData {
  firstName: string;
  lastName:string;
  phone?:string;
  email?:string;
  message:string;
}
