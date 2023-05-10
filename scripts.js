/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
(function () {
    'use strict';

    let answer$1 = 42;

    const getTheAnswer = function () {
        return answer$1;
    };

    let answer = getTheAnswer();
    let wizard = 'Radagast';

    alert(`The answer is ${answer}, ${wizard}`);

})();
