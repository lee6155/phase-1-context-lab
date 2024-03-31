
/* Your Code Here */

function createEmployeeRecord (array) {
    let object = {
        firstName: '',
        familyName: '',
        title: '',
        payPerHour: '',
        timeInEvents: '',
        timeOutEvents: ''
    }
    object.firstName = array[0]
    object.familyName = array[1]
    object.title = array[2]
    object.payPerHour = array[3]
    object.timeInEvents = []
    object.timeOutEvents = []
    
    return object
}

createEmployeeRecord(["Gray", "Worm", "Security", 1])


function createEmployeeRecords (arrayOfArrays) {
    let newArray = []
    arrayOfArrays.forEach(function(array){
        newArray.push(createEmployeeRecord(array))
    })
    return newArray
}

createEmployeeRecords([
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
    ])


function createTimeInEvent (dateStamp) {
    let hourVar = Number(dateStamp.slice(11,15))
    let dateVar = dateStamp.slice(0,10)
   
    let object = {
        type: 'TimeIn',
        hour: hourVar,
        date: dateVar
    }

    this.timeInEvents[0] = object
    return this
}

let employeeRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])
createTimeInEvent.call(employeeRecord,"2014-02-28 1400")


function createTimeOutEvent (dateStamp) {
    let hourVar = Number(dateStamp.slice(11,15))
    let dateVar = dateStamp.slice(0,10)
   
    let object = {
        type: 'TimeOut',
        hour: hourVar,
        date: dateVar
    }

    this.timeOutEvents[0] = object
    return this
}

createTimeOutEvent.call(employeeRecord,"2015-02-28 1700")


function hoursWorkedOnDate(date) {
    let employeeRecord2 = this
    let timeIn = createTimeInEvent.call(employeeRecord2, "2044-03-15 0900")
    let timeOut = createTimeOutEvent.call(employeeRecord2, "2044-03-15 1100")

    let hoursWorkedMilitary = (timeOut.timeOutEvents[0].hour) - (timeIn.timeInEvents[0].hour)

        if (hoursWorkedMilitary >= 1000) {
            let hoursWorked = hoursWorkedMilitary.toString().slice(0,2)
            return Number(hoursWorked)
        } else {
            let hoursWorked = hoursWorkedMilitary.toString().slice(0,1)
            return Number(hoursWorked)
        }
}

hoursWorkedOnDate.call(createEmployeeRecord(["Julius", "Caesar", "General", 1000]),"2044-03-15")


function wagesEarnedOnDate(date) {
    let employeeRecord3 = this
    let wagesEarned = (employeeRecord3.payPerHour) * (hoursWorkedOnDate.call(employeeRecord3,"2044-03-15"))
    return wagesEarned
}

wagesEarnedOnDate.call(createEmployeeRecord(["Julius", "Caesar", "General", 27]),"2044-03-15")


function allWagesFor() {
    let wagesEarned = wagesEarnedOnDate.call(createEmployeeRecord(["Julius", "Caesar", "General", 27]),"2044-03-15")

    let employeeRecord2 = createEmployeeRecord(["Julius", "Caesar", "General", 27])
    let timeIn = createTimeInEvent.call(employeeRecord2, "2044-03-14 0900")
    let timeOut = createTimeOutEvent.call(employeeRecord2, "2044-03-14 2100")
    
    let hoursWorkedMilitary = (timeOut.timeOutEvents[0].hour) - (timeIn.timeInEvents[0].hour)
    
    if (hoursWorkedMilitary >= 1000) {
        let hoursWorked = hoursWorkedMilitary.toString().slice(0,2)
        Number(hoursWorked)

        let wagesEarned2 = (employeeRecord2.payPerHour) * hoursWorked
        
        return wagesEarned + wagesEarned2

    } else {
        let hoursWorked = hoursWorkedMilitary.toString().slice(0,1)
        Number(hoursWorked)

        let wagesEarned2 = (employeeRecord2.payPerHour) * hoursWorked

        return wagesEarned + wagesEarned2
    }
}

allWagesFor()


// function allWagesFor() {
//     let employeeRecord3 = createEmployeeRecord(["Rafiki", "", "Aide", 10])

//     let rTimeData = [
//         ["2019-01-11 0900", "2019-01-11 1300"],
//         ["2019-01-12 1000", "2019-01-12 1300"]
//       ]

//     let wagesEarnedArray = []

//     rTimeData.forEach(function(array){
//         let timeIn = createTimeInEvent.call(employeeRecord3, array[0])
//         let timeOut = createTimeOutEvent.call(employeeRecord3, array[1])
        
//         let hoursWorkedMilitary = (timeOut.timeOutEvents[0].hour) - (timeIn.timeInEvents[0].hour)
        
//         if (hoursWorkedMilitary >= 1000) {
//             let hoursWorked = hoursWorkedMilitary.toString().slice(0,2)
//             Number(hoursWorked)
//             wagesEarnedArray.push((employeeRecord3.payPerHour) * hoursWorked)
//         } else {
//             let hoursWorked = hoursWorkedMilitary.toString().slice(0,1)
//             Number(hoursWorked)
//             wagesEarnedArray.push((employeeRecord3.payPerHour) * hoursWorked)
//         }
//     })


//     let employeeRecord4 = createEmployeeRecord(["Simba", "", "King", 100])

//     let sTimeData = [
//         ["2019-01-01 0900", "2019-01-01 1300"],
//         ["2019-01-02 1000", "2019-01-02 1300"]
//     ]
    
//     let wagesEarnedArray2 = []

//     sTimeData.forEach(function(array){
//         let timeIn = createTimeInEvent.call(employeeRecord4, array[0])
//         let timeOut = createTimeOutEvent.call(employeeRecord4, array[1])
        
//         let hoursWorkedMilitary = (timeOut.timeOutEvents[0].hour) - (timeIn.timeInEvents[0].hour)
        
//         if (hoursWorkedMilitary >= 1000) {
//             let hoursWorked = hoursWorkedMilitary.toString().slice(0,2)
//             Number(hoursWorked)
//             wagesEarnedArray2.push((employeeRecord4.payPerHour) * hoursWorked)
//         } else {
//             let hoursWorked = hoursWorkedMilitary.toString().slice(0,1)
//             Number(hoursWorked)
//             wagesEarnedArray2.push((employeeRecord4.payPerHour) * hoursWorked)
//         }
//     })

//     let totalWagesEarned = wagesEarnedArray[0] + wagesEarnedArray[1] + wagesEarnedArray2[0] + wagesEarnedArray2[1]

//     return totalWagesEarned
// }

// allWagesFor()


function findEmployeeByFirstName(firstName) {
    this.forEach(function(object){
        if (object.firstName === firstName) {
            console.log(object)
            return object
        } else {
            return undefined
        }
    })
}

findEmployeeByFirstName.call(createEmployeeRecords([["Natalia", "Romanov", "CEO", 150],["Loki", "Laufeysson-Odinsson", "HR Representative", 35]]), "Loki")


function calculatePayroll() {

}

calculatePayroll.call(createEmployeeRecords())


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor2 = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
