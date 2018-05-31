
var year = [1990,1995,2000,2005,2010,2015,2020]

function arrtCal(year,fn)
{
    var arrval[];
    for( i=0 ; i < year.length ; i++ )
    {
    arrval.push(fn(year[i]));
    }
    
}

function calculateAge(el)
{
   return 2018 - el;
}

var age = arrtCal(year,calculateAge);

var fullAge = arrtCal(age,calculateAge); 

