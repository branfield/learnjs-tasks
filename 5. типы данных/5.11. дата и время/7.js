function getSecondsToTomorrow()
{
    let date = new Date();
    let hour = date.getHours() * 3600;
    let minute = date.getMinutes() * 60;
    let second = date.getSeconds();
    return (24 * 60 * 60) - (hour + minute + second);
}