describe("Spread test", function () {
    var mentor1,
        mentor2,
        mentor3,
        student1,
        student2,
        student3,
        student4,
        student5,
        student6,
        student7,
        student8,
        student9,
        mentors,
        students;

    beforeEach(function () {

        mentor1 = new school.createMentor(1, "Евгений Генадьевич");
        mentor2 = new school.createMentor(2, "Виктор Сергеевич");
        mentor3 = new school.createMentor(3, "Владимир Владимирович");

        student1 = new school.createStudent(4, "Иван");
        student2 = new school.createStudent(5, "Дмитрий");
        student3 = new school.createStudent(6, "Петр");
        student4 = new school.createStudent(7, "Володя");
        student5 = new school.createStudent(8, "Вася");
        student6 = new school.createStudent(9, "Витя");
        student7 = new school.createStudent(10, "Света");
        student8 = new school.createStudent(11, "Маша");
        student9 = new school.createStudent(12, "Лена");

    });

    it("Отдадим ментору студента если они друг другу нравятся", function () {

        mentors = [
            mentor1
        ];

        students = [
            student1,
            student2
        ];

        mentor1.AddToPriority(student1);
        mentor1.AddToPriority(student2);
        mentor1.AddToPriority(student3);

        student1.AddToPriority(mentor1);
        student2.AddToPriority(mentor1);

        school.spreadStudents(mentors, students);

        var mentor1Students = mentor1.getStudents();

        expect(mentor1Students.length).toBe(2);
        expect(mentor1Students[0]).toEqual(student1);
        expect(mentor1Students[1]).toEqual(student2);

    });

    it("Если отдали ученика его нельзя учить другим менторам", function () {

        mentors = [
            mentor1,
            mentor2
        ];

        students = [
            student1
        ];

        mentor1.AddToPriority(student1);
        mentor2.AddToPriority(student1);

        student1.AddToPriority(mentor1);
        student1.AddToPriority(mentor2);

        school.spreadStudents(mentors, students);

        var mentor1Students = mentor1.getStudents();

        expect(mentor1Students.length).toBe(1);
        expect(mentor1Students[0]).toEqual(student1);

        var mentor2Students = mentor2.getStudents();

        expect(mentor2Students.length).toBe(0);
    });

    it("Раздадим студентов по предпочтению ментора", function () {

        mentors = [
            mentor1,
            mentor2
        ];

        students = [
            student1,
            student2,
            student3
        ];

        mentor1.AddToPriority(student1);
        mentor1.AddToPriority(student2);
        mentor1.AddToPriority(student3);

        student1.AddToPriority(mentor1);
        student2.AddToPriority(mentor1);
        student3.AddToPriority(mentor2);

        school.spreadStudents(mentors, students);

        var mentor1Students = mentor1.getStudents();
        expect(mentor1Students.length).toBe(3);
        expect(mentor1Students[0]).toEqual(student1);
        expect(mentor1Students[1]).toEqual(student2);
        expect(mentor1Students[2]).toEqual(student3);

        var mentor2Students = mentor2.getStudents();
        expect(mentor2Students.length).toBe(0);

    });

    it("Раздадим студентов по предпочтению студента", function () {

        mentors = [
            mentor1
        ];

        students = [
            student4
        ];

        student4.AddToPriority(mentor1);

        school.spreadStudents(mentors, students);

        var mentor1Students = mentor1.getStudents();
        expect(mentor1Students.length).toBe(1);
        expect(mentor1Students[0]).toEqual(student4);
    });

    it("Раздадим студентов если не совпали предпочтения", function () {

        mentors = [
            mentor1
        ];

        students = [
            student4
        ];

        mentor1.AddToPriority(student1);
        student4.AddToPriority(mentor2);

        school.spreadStudents(mentors, students);

        var mentor1Students = mentor1.getStudents();
        expect(mentor1Students.length).toBe(1);
        expect(mentor1Students[0]).toEqual(student4);
    });

    it("У преподавателя не может быть больше учеников чем мест", function () {

        mentors = [
            mentor1
        ];

        students = [
            student1,
            student2,
            student3,
            student4,
        ];

        mentor1.AddToPriority(student1);
        mentor1.AddToPriority(student2);
        mentor1.AddToPriority(student3);

        student1.AddToPriority(mentor1);
        student2.AddToPriority(mentor1);
        student3.AddToPriority(mentor1);
        student4.AddToPriority(mentor1);

        school.spreadStudents(mentors, students, 3);

        var mentor1Students = mentor1.getStudents();
        expect(mentor1Students.length).toBe(3);
    });

    /**
     * В данном примере всего 9 студентов,
     * 3 ментора,
     * ментор может выбрать себе трех учеников
     * а студент 2 менторов
     */
    it("Проверим все", function () {

        mentors = [
            mentor1,
            mentor2,
            mentor3
        ];

        students = [
            student1,
            student2,
            student3,
            student4,
            student5,
            student6,
            student7,
            student8,
            student9
        ];

        mentor1.AddToPriority(student1);
        mentor1.AddToPriority(student3);
        mentor1.AddToPriority(student5);

        mentor2.AddToPriority(student5);
        mentor2.AddToPriority(student6);
        mentor2.AddToPriority(student7);

        mentor3.AddToPriority(student2);
        mentor3.AddToPriority(student4);
        mentor3.AddToPriority(student6);


        student1.AddToPriority(mentor1);
        student1.AddToPriority(mentor2);

        student2.AddToPriority(mentor2);
        student2.AddToPriority(mentor3);

        student3.AddToPriority(mentor1);
        student3.AddToPriority(mentor3);

        student4.AddToPriority(mentor1);
        student4.AddToPriority(mentor2);

        student5.AddToPriority(mentor2);
        student5.AddToPriority(mentor3);

        student6.AddToPriority(mentor1);
        student6.AddToPriority(mentor3);

        student7.AddToPriority(mentor1);
        student7.AddToPriority(mentor2);

        student8.AddToPriority(mentor2);
        student8.AddToPriority(mentor3);

        student9.AddToPriority(mentor2);
        student9.AddToPriority(mentor3);

         var freePlaces = students.length / mentors.length;

        school.spreadStudents(mentors, students, freePlaces);

        var mentor1Students = mentor1.getStudents();
        var mentor2Students = mentor2.getStudents();
        var mentor3Students = mentor3.getStudents();

        expect(mentor1Students.length).toBe(3);
        expect(mentor1Students[0]).toEqual(student1); // оба
        expect(mentor1Students[1]).toEqual(student3); // оба
        expect(mentor1Students[2]).toEqual(student9); // ничей

        expect(mentor2Students.length).toBe(3);
        expect(mentor2Students[0]).toEqual(student5); // оба
        expect(mentor2Students[1]).toEqual(student7); // оба
        expect(mentor2Students[2]).toEqual(student8); // студент

        expect(mentor3Students.length).toBe(3);
        expect(mentor3Students[0]).toEqual(student2); //об
        expect(mentor3Students[1]).toEqual(student6); // об
        expect(mentor3Students[2]).toEqual(student4); // ментор
    });
});
