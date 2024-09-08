let col = 0
let row = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function on_forever() {
    
    for (let index = 0; index < 5; index++) {
        if (input.soundLevel() > 128) {
            row = index
            col = randint(0, 4)
        }
        
        if (led.point(col, row)) {
            led.unplot(col, row)
            led.plot(col + 1, row)
        }
        
    }
})
