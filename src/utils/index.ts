


export function debounce (func: (...ags:any) => any, time:number) {
    let timeId:any
    return function (...ags:any) {
        // @ts-ignore
        const ctx:any = this
        clearTimeout(timeId)
        timeId = setTimeout(() => {
            func.apply(ctx, ags);
        }, time)
    }
}