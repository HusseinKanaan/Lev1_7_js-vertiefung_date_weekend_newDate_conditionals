



let weekend = (month,date,year) => {
    let date1 = new Date(year,month,date)
    if (date1.getDay === 0 || date1.getDay() === 6){
        return "Weekend"
    } else {
        return "Arebitstag"
    }
} 


console.log(weekend("12, 15, 2019"));
console.log(weekend("2, 16, 2001"));
console.log(weekend("2, 1, 2020"));
console.log(weekend("2, 29, 2020"));
