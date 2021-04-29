export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration / 3600) //arredonda para baixo
    const minutes = Math.floor((duration % 3600) / 60)
    const seconds = duration % 60

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0')) //acrescentará 0 na frente, ex: 1 ficará 01
        .join(':')

        

    return timeString



}