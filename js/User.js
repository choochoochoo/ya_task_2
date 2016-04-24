/**
 * Метод для создания студента
 * @param {number} Идентификатор
 * @param {string} Имя
 * @returns {school.User} студент
 */
school.createStudent = function(id, name){
    return new school.User({
        id: id,
        name: name,
        type: 1
    });
};

/**
 * Метод для создания студента
 * @param {number} Идентификатор
 * @param {string} Имя
 * @returns {school.User} ментор
 */
school.createMentor = function(id, name){
    return new school.User({
        id: id,
        name: name,
        type: 2
    });
};

/**
 * Создает нового пользователя
 * @class
 */
school.User = function(user){
    this.id = user.id;

    this._tasks = [];

    this._name = user.name;

    this._type = user.type;

    this._mentor;

    this._students = [];

    this._priorityList = [];
};

/**
 * Метод для получения имени
 * @returns {string} имя пользователя
 */
school.User.prototype.getName = function(){
    return this._name;
};

/**
 * Метод для постановки задачи пользователю
 * @param {school.Task} Задача
 */
school.User.prototype.addTask = function(task){
    this._tasks.push(task);
};

/**
 * Метод для получения заданий пользователя
 * @returns {school.Task[]} Массив задач
 */
school.User.prototype.getTasks = function(){
    return this._tasks;
};

/**
 * Метод узнает студент ли данный пользователь
 * @returns {boolean} Это студент если true, иначе ментор
 */
school.User.prototype.isStudent = function(){
    if(this._type === 1){
        return true;
    }

    return false;
};

/**
 * Метод узнает ментор ли данный пользователь
 * @returns {boolean} Это ментор если true
 */
school.User.prototype.isMentor = function(){
    if(this._type === 2){
        return true;
    }

    return false;
};

/**
 * Начать учить студента
 * @param {school.User} студент
 */
school.User.prototype.teach = function(student){

    // Запишем студенту ментора
    student._mentor = this;

    this._students.push(student);
};

/**
 * Метод для получения студентов ментора
 * @returns {school.User[]} Массив студентов
 */
school.User.prototype.getStudents = function(){
    return this._students;
};

/**
 * Добавить пользователя в приоритетный список
 * @param {school.User} пользователь
 */
school.User.prototype.AddToPriority = function(user){
    this._priorityList.push(user);
};

/**
 * Метод для получения приоритетного списка
 * @returns {school.User[]} Массив пользователей
 */
school.User.prototype.getPriorities = function(){
    return this._priorityList;
};

/**
 * Метод для получения студентов ментора
 * @returns {school.User[]} Массив студентов
 */
school.User.prototype.getStudents = function(){
    return this._students;
};

/**
 * Переданный пользователь есть в приоритетных
 * @param {school.User} пользователь
 * @returns {boolean} True значит есть в списке
 */
school.User.prototype.isAmongPriorities = function(userId){
    return this._priorityList.filter(function(item){ return item.id === userId; }).length > 0;
};

/**
 * У данного пользователя есть ментор
 * @returns {boolean} True значит есть
 */
school.User.prototype.hasMentor = function(){
    return !!this._mentor;
};
