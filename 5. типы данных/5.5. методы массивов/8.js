usersMapped = (user) => {
    return user.map(item => {
        return item = {
            fullName: `${item.name} ${item.surname}`,
            id: item.id
        }
    })
}