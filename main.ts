/**
 * Test for Building Extensions.
 */
//% color=292 weight=100 icon="\uf0c3" block="Test Blocks"
namespace test {
    //% blockId=show_heart
    //% block="show heart | for $duration milliseconds"
    //% duration.min=0 duration.max=100000 duration.defl=100
    export function showHeart(duration: number): void {
        basic.showIcon(IconNames.Heart)
        basic.pause(duration)
        basic.clearScreen()
        basic.pause(duration)
    }
}
