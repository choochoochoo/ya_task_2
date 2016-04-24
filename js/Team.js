/**
 * Создает новую команду
 * @class
 */
school.Team = function(team){
    this._id = null;

    this._name = team.name;

    this._users = [];

    this._tasks = [];
};

/**
 * Получить название команды
 * @returns {string} название
 */
school.Team.prototype.getName = function(){
    return this._name;
};

/**
 * Получить людей которые принадлежат данной команде
 * @returns {school.User[]} Массив людей
 */
school.Team.prototype.getUsers = function(){
    return this._users;
};

/**
 * Добавить человека в команду
 * @param {school.User} человек
 */
school.Team.prototype.join = function(user){
    this._users.push(user)
};

/**
 * Добавить человека в команду
 * @param {school.Task} человек
 */
school.Team.prototype.addTask = function(task){
    this._tasks.push(task);
};

/**
 * Метод для получения заданий команды
 * @returns {school.Task[]} Массив задач
 */
school.Team.prototype.getTasks = function(){
    return this._tasks;
};