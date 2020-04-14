first:
for (var i = 1; i <= 5; i++) {
    console.warn('i:', i)
    second:
    for (var j = 1; j <= 5; j++) {
        console.log('j:', j)
        if (j === 3) continue first
    }
}

/**
i: 1
    j: 1
    j: 2
    j: 3

i: 2
    j: 1
    j: 2
    j: 3

i: 3
    j: 1
    j: 2
    j: 3

i: 4
    j: 1
    j: 2
    j: 3

i: 5
    j: 1
    j: 2
    j: 3
 */
