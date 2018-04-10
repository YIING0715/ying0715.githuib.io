

function Person(){
    this.name = '王明明';
    this.birthday = '1996/05/28';
    this.sex = 'man';
    this.email = 'wmm1996528@163.com';
    this.tel = '15227230337';
}
Person.prototype.showName = function () {
    console.log(this.name);
}
Person.prototype.showEmail = function () {
    alert(this.email);
}
Person.prototype.showTel = function () {
    document.title=this.tel;
}
var newPerson = new Person();
newPerson.showName();
newPerson.showEmail();
newPerson.showTel();
