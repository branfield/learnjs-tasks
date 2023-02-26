getAverageAge = (user) => {
    let averageAge = 0;
    for (let obj of user) { averageAge += obj.age; }
    return averageAge / user.length;
}
