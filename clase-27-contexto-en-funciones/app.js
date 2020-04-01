function Create()
{
    
    var first  = [];
    var number = 5;

    first.push(
        (function (number) {
            return function () {
                console.log(number);
            }
        })(number)
    );

    number = 2;

    first.push(function () {
        console.log(number);
    });

    number = 3;

    first.push(function () {
        console.log(number);
    });

    for (var num = 4; num <= 10; num++) {
        first.push(
            (function (num) {
                return function () {
                    console.log(num);
                }
            })(num)
        );
    }

    return first;

}

var create = new Create();

console.log("First:", create);

create[0]();
create[1]();
create[2]();
create[3]();
create[4]();
create[5]();
create[6]();
create[7]();
create[8]();
create[9]();

/**********************************************************************
    Console:
    -------------------------------------------------------------------
    Value                               Result
    -------------------------------------------------------------------
    First                               (10) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
    create[0]()                         5
    create[1]()                         3
    create[2]()                         3
    create[3]()                         4
    create[4]()                         5
    create[5]()                         6
    create[6]()                         7
    create[7]()                         8
    create[8]()                         9
    create[9]()                         10
***********************************************************************/
