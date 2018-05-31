

var nari = {
           
           name = String;
           dateOfBirth = number;
           job = String;
}

var person = function (name,dateOfBirth,job)
{
    this.name = name ;
    this.dateOfBirth = dateOfBirth ;
    this.job = job
}

person.prototype.calculateAge = function()
{
  console.log(2018 - this.dateOfBirth);
}


var nari  = person(nari,1994,developer);

var narendra = person(narendra,1994,developer);

nari.calculateAge();

narendra.calculateAge();

