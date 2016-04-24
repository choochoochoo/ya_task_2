describe("Task test", function() {

    var task;

    beforeEach(function() {
        task = new school.Task({
            description: "Необходимо разработать библиотеку."
        });
    });

    it("Создание задания", function() {
        expect(task.getDescription()).toBe("Необходимо разработать библиотеку.");
    });

    it("Поставить оценку", function() {
        task.setScore(5);

        task.setS

        expect(task.getScore()).toBe(5);
    });
});
