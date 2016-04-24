describe("User test", function() {

    var user;

    beforeEach(function() {
        user = new school.User({
            id: 1,
            name: "Дмитрий"
        });
    });

    it("Создание пользователя", function() {
        expect(user.getName()).toBe("Дмитрий");
    });

    it("Создание студента", function() {
        var student = school.createStudent(1, "Василий");

        expect(student.getName()).toBe("Василий");
        expect(student.isStudent()).toBe(true);
    });

    it("Создание ментора", function() {
        var mentor = school.createMentor(2, "Владимир П.");

        expect(mentor.getName()).toBe("Владимир П.");
        expect(mentor.isMentor()).toBe(true);
    });

    it("Постановка задачи", function() {

        var task1 = new school.Task({
            description: "Задача 1"
        });

        var task2 = new school.Task({
            description: "Задача 2"
        });

        user.addTask(task1);
        user.addTask(task2);

        var tasks = user.getTasks();

        expect(tasks.length).toBe(2);
        expect(tasks[0].getDescription()).toBe("Задача 1");
        expect(tasks[1].getDescription()).toBe("Задача 2");
    });

    it("Начать учить студента", function() {

        var mentor = school.createMentor({
            name: "Владимир П."
        });

        mentor.teach(school.createStudent(1, "Дмитрий"));
        mentor.teach(school.createStudent(2, "Света"));

        var students = mentor.getStudents();

        expect(students.length).toBe(2);
        expect(students[0].getName()).toBe("Дмитрий");
        expect(students[1].getName()).toBe("Света");
    });

    it("Добавить в приоритетный список", function() {

        var mentor = school.createMentor(1, "Владимир П.");
        var mentor2 = school.createMentor(2, "Евгений Владимирович");

        user.AddToPriority(mentor);
        user.AddToPriority(mentor2);

        var priorityList = user.getPriorities();

        expect(priorityList.length).toBe(2);
        expect(priorityList[0].getName()).toBe("Владимир П.");
        expect(priorityList[1].getName()).toBe("Евгений Владимирович");
    });
});
