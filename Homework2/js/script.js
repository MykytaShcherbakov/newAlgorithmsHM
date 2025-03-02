function chooseElevator(elevators, callFloor) {
    let bestElevator = null;
    let minTime = Infinity;
    
    for (const elevator of elevators) {
        const { name, floor, speed } = elevator;
        const time = Math.abs(callFloor - floor) * speed;
        
        if (time < minTime) {
            minTime = time;
            bestElevator = name;
        }
    }
    
    return bestElevator;
}

const elevators = [
    { name: 'A', floor: 4, speed: 3 },
    { name: 'B', floor: 8, speed: 2 },
    { name: 'C', floor: 5, speed: 2 }
];

const callFloor = 1;
console.log(`Отправляем лифт ${chooseElevator(elevators, callFloor)}`);
