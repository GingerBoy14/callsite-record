const createCallsiteRecord = require('..')
const sep = require('path').sep

const sum = (a, b) => a + b

expect(sum(3, 2)).toBe(32)

function expect(val) {
    return {
        toBe: (exp) => {
            if (val === exp) {
                console.log('Success')
            } else {
                console.log(
                    createCallsiteRecord({
                        byFunctionName: 'toBe'
                    }).renderSync({
                        frameSize: 2,
                        stackFilter: (frame) => frame.getFileName().indexOf(sep) > -1
                    })
                )
            }
        }
    }
}
