{
    //
    function countWordOccurrences(String1 : string, String2 : string) : number {
        let cnt = 0;
        const words = String1.toLowerCase().split(/\W+/);
        words.map(word => {
            if (word === String2.toLowerCase()){
                cnt++;
            }
        }
        )
        return cnt;
    }
    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"))
    //
}