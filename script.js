const submissions = [
    { name: 'Jane', score: 95, date: '2020-01-24', passed: true },
    { name: 'Joe', score: 77, date: '2018-05-14', passed: true },
    { name: 'Jack', score: 59, date: '2019-07-05', passed: false },
    { name: 'Jill', score: 88, date: '2020-04-22', passed: true },
]
function printSubmissions(array) {
    for (let submission of array) {
        console.log(submission);
    }
}

console.log('original array');
printSubmissions(submissions);

function addSubmission(array, newName, newScore, newDate) {
    const passed = newScore >= 60 ? true : false;
    const newSubmission = { name: newName, score: newScore, date: newDate, passed: passed }
    array.push(newSubmission);
}

console.log('adding Sean');
addSubmission(submissions, 'Sean', 90, '2021-10-04');
printSubmissions(submissions);

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1)
}

console.log('removing Jane');
deleteSubmissionByIndex(submissions, 0);
printSubmissions(submissions);

function deleteSubmissionByName(array, name) {
    const index = array.findIndex(submission => submission.name === name);
    if (index > -1) {
        array.splice(index, 1);
    }
}

console.log('deleting Joe');
deleteSubmissionByName(submissions, 'Joe');
printSubmissions(submissions);

function editSubmission(array, index, score) {
    array[index].score = score;
    score >= 60 ? array[index].passed = true : array[index].passed = false;
}

console.log('changing Sean\'s score to 90');
editSubmission(submissions, 2, 90);
printSubmissions(submissions);

function findSubmissionByName(array, name) {
    return array.find(submission => submission.name === name);
}

console.log('finding Sean object');
console.log(findSubmissionByName(submissions, 'Sean'));

function findLowestScore(array) {
    let lowestScore = array[0];
    for (let submission of array) {
        if (submission.score < lowestScore.score) {
            lowestScore = submission;
        }
    }
    return lowestScore;
}

console.log('finding lowest score');
console.log(findLowestScore(submissions));

function findAverageScore(array) {
    let total = 0;
    for (let submission of array) {
        total += submission.score;
    }
    return total / array.length;
}

console.log('average score');
console.log(findAverageScore(submissions));

function filterPassing(array) {
    return array.filter(submission => submission.passed === true);
}

console.log('filter to passing grades only');
console.log(filterPassing(submissions));

function filter90AndAbove(array) {
    return array.filter(submission => submission.score >= 90);
}

console.log('filter to 90 and above');
console.log(filter90AndAbove(submissions));

function createRange(start, end) {
    if (start <= end) {
        const array = [];
        let i = start - 1;
        while (i != end) {
            i++;
            array.push(i);
        }
        return array;
    } else {
        return 'end must be greater than or equal to start';
    }
}

console.log(createRange(5, 10));
console.log(createRange(5, 5));
console.log(createRange(10, 5));

function countElements(array) {
    const newObject = {};
    for (let element of array) {
        console.log(element);
        if (Object.keys(newObject).includes(element)) {     // already in object
            console.log('already in object');
            newObject[element]++;
        } else {                                            // not in object
            console.log('not in object');
            newObject[element] = 1;
        }
    }
    return newObject;
}

console.log(countElements(['a', 'b', 'a', 'c', 'a', 'b']));
// should print { a: 3, b: 2, c: 1 }