
var personproto = {
  calculate = function()
  {
     console.log( 2016 - yearOfBirth );
  }
 
}


var nari = Object.create(personproto)

nari.name = 'narendra';
nari.yearOfBirth = 1994;
nari.job = 'developer';


