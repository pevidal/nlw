const Database = require('./db')
const createProffy = require('./createProffy.js')
Database.then(async(db) =>
{
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://www.minhaseriefavorita.com/wp-content/uploads/2018/10/curiosidades-sobre-avatar-850x510.jpg",
        whatsapp:"11940047263",
        bio: "Físico, especialista em vento"       
    }
    classValue ={
        subject : 1,
        cost:"20"

    }
    classScheduleValues =[
      {
            weekday:1,
            time_from:720,
            time_to: 1120
        },
        {
            weekday:0,
            time_from:520,
            time_to: 1120
        }
    ] 
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    const classScheduleValuesSelect = await db.all("SELECT * FROM class_schedule")
    console.log(classScheduleValuesSelect)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        where classes.proffy_id = 1
    `)

    console.log(selectClassesAndProffys)

  /*   const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)
    console.log(selectClassesChedules) */
    
})