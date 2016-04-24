/**
 * Создает новое задание
 * @class
 */
school.Task = function(task){
    this._id = null;

    this._description = task.description;

    this._score = null;
};

/**
 * Метод для получения описания задания
 * @returns {string} описание
 */
school.Task.prototype.getDescription = function(){
    return this._description;
};

/**
 * Получить оценку
 * @returns {number} описание
 */
school.Task.prototype.getScore = function(){
    return this._score;
};

/**
 * Поставить оценку
 * @param {number} оценка
 */
school.Task.prototype.setScore = function(score){
    this._score = score;
};
