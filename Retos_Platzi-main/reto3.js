/*
Reto #3 “Mensaje multilínea”
Instrucciones: seguro has visto que en Platzi hay más de 600 cursos
¿puedes mostrar a que categorías corresponden en una sola línea de código?
Debe mostrarse así:
Platzi cuenta con cursos de:
[categoría1]
[categoría2]
[categoría3]
[categoría4]
[categoría5]
[categoría6]
*/
let categorias_cursos =["Desarrollo e Ingenieria","Diseño y UX","Marketing","Negocios y emprendimiento","Producción Audivisual","Crecimiento Profesional"];
console.log("Platzi cuenta con cursos de: ");
for(let i=0;i<=categorias_cursos.length;i++){
    console.log(categorias_cursos[i]);
}