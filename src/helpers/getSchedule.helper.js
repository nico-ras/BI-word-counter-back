const getSchedule = (freeTask) => {

    const result = {};
    let workDays = [];
    let totalHours = 0;
    const laborDay = 8;
  
    freeTask.map((task) => (totalHours += task.duration));
  
    const days = totalHours / laborDay;
    
    const round = Math.ceil(days);
  
    for (let i = 1; i <= round; i++) {
      //armar objetos
      workDays.push({
        id: i,
        tareas: [],
        freeHours: 8,
      });
    }
  
    workDays.map((aWorkDay) => {
      //iteracion de total de los dias laborales necesarios
  
      for (let t = 0; t < freeTask.length; t++) {
        // Iteracion de tareas no asignadas por medio del ciclo for para mayor control de iteraciones (dada la eliminacionde elementos)
        if (freeTask[t].duration <= aWorkDay.freeHours) {
          // Sí el tiempo de la tarea por asignar es menor a las horas disponibles
          aWorkDay.freeHours = aWorkDay.freeHours - freeTask[t].duration; //se reasignan las horas libre del dia restando la realizacion de la nueva tarea
          aWorkDay.tareas.push(freeTask[t]); //cargamos la tarea dentro del array de la jornada
          //   delete freeTask[t];
          freeTask.splice(t, 1); //lo quitamos dentro de la lista de tareas pendientes.
          t -= 1; //Controlamos la iteracion para iterar en el siguiente elemento pero que ahora es el primero en el array
        } else if (
          aWorkDay.freeHours > 0 &&
          aWorkDay.freeHours < freeTask[t].duration //Si hay horas libres en el dia, pero es menos de lo que necesita una tarea...
        ) {
          const initialTaskDuration = freeTask[t].duration - aWorkDay.freeHours; //Conservamos el tiempo necesario para realizar la tarea, menos el tiempo disponible en el dia
          freeTask[t].duration = aWorkDay.freeHours; // Asignamos lo que resta libre del dia a la tarea avanzada hasta ese dia.
          aWorkDay.freeHours = 0; //dejamos las horas libres de dia en 0, porque ya se usaron todas
          aWorkDay.tareas.push({
            task_id: freeTask[t].task_id,
            task_name: freeTask[t].task_name,
            duration: freeTask[t].duration,
          }); //y asignamos parte de la tarea del dia a esta jornada
          freeTask[t].duration = initialTaskDuration; //Reasignamos el tiempo que nos falta para completar la tarea.
        }
      }
    });
  
    //Entregamos  calses y valores al objeto;
  
    result.hrs_jornada = laborDay;
    result.dias_termino = round;
    result.jornadas = workDays;
  
    return result;
  
  };

  module.exports = { getSchedule }