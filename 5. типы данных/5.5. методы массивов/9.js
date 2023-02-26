sortByAge = (user) => {
    return user
        .sort((a, b) => a.age - b.age)
}