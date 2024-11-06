{
    //
    function dup (number : number[]) : number[]{
        return [... new Set(number)];
    }

    console.log(dup([1, 2, 2, 3, 4, 4, 5]));

    //
}