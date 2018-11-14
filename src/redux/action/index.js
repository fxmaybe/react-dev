export const types = {
    TEST_ADD: 'TEST_ADD',
    TEST_MINUS: 'TEST_MINUS'
}

export function testAdd(num) {
    return {
        num: num,
        type: types.TEST_ADD
    }
}

export function testMinus(num) {
    return {
        num: num,
        type: types.TEST_MINUS
    }
}