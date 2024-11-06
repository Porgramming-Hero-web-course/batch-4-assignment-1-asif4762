{
    //
    function sum (Numbers: number[]) : number {
        let s = 0;
        Numbers.forEach(Number => s += Number)
        return s;
    }

    console.log(sum([1, 2, 3, 4, 5]));


    //
}