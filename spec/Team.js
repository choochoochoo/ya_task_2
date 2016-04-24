describe("Team test", function() {

    var team;

    beforeEach(function() {
        team = new school.Team({
            name: "Команда 1"
        });
    });

    it("Создание команды", function() {
        expect(team.getName()).toBe("Команда 1");
    });

    it("Добавление участников в команду", function() {

        var user1 = new school.User({
            name: "Евгений"
        });

        var user2 = new school.User({
            name: "Дмитрий"
        });

        var user3 = new school.User({
            name: "Виктор"
        });

        team.join(user1);
        team.join(user2);
        team.join(user3);

        var users = team.getUsers();

        expect(users.length).toBe(3);

        expect(users[0].getName()).toBe('Евгений');
        expect(users[1].getName()).toBe('Дмитрий');
        expect(users[2].getName()).toBe('Виктор');
    });


    it("Постановка задачи", function() {

        var task1 = new school.Task({
            description: "Задача команде 1"
        });

        var task2 = new school.Task({
            description: "Задача команде 2"
        });

        team.addTask(task1);
        team.addTask(task2);

        var tasks = team.getTasks();

        expect(tasks.length).toBe(2);
        expect(tasks[0].getDescription()).toBe("Задача команде 1");
        expect(tasks[1].getDescription()).toBe("Задача команде 2");
    });
});