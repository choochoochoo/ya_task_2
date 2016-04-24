/*
 Мой алогоритм распределения

 У нас ограниченное кол-во мест у ментора,
 кол-во мест у ментора вычисляется в соответсвии
 с общим числом учеников разделенных на
 кол-во менторов

 1. Мы должны распределить поравну людей
 2. Если студент и ментор есть друг у друга,
 ментор получает этого ученика в первую очередь
 3. После заполняются в соответствии с предпочтенями ментора.
 4. После выбираются по желанию ученика
 5. Остатки поровну и тем у кого есть места
 6. Ученика первый получает ментор по порядку
 */

/**
 * Статический метод распределяет студентов
 * @param {school.User[]} Список менторов
 * @param {school.User[]} Список студентов
 * @param {number} Количество свободных мест у ментора
 */
school.spreadStudents = function (mentors, students, freePlaces) {
    var baseAlg = function (func) {
        var i,
            j,
            mentor,
            student;

        for (i = 0; i < mentors.length; i++) {

            mentor = mentors[i];

            for (j = 0; j < students.length; j++) {

                student = students[j];

                if (student.hasMentor() ||
                    mentor.getStudents().length === freePlaces) {
                    continue;
                }

                if(func(mentor, student)){
                    mentor.teach(student);
                }
            }
        }
    };

    // Сначала ищем оба совпадения
    baseAlg(function (mentor, student) {
        return mentor.isAmongPriorities(student.id)
            && student.isAmongPriorities(mentor.id)
    });

    // Теперь по предпочтенями ментора
    baseAlg(function (mentor, student) {
        return mentor.isAmongPriorities(student.id);
    });

    // Теперь по предпочтенями студента
    baseAlg(function (mentor, student) {
        return student.isAmongPriorities(mentor.id);
    });

    // Остатки
    baseAlg(function (mentor, student) {
        return true;
    });
};