export type SecondaryClass = Record<string, string | boolean>

export const classNames = (cls: string, mods: SecondaryClass = {}, aditional: string[] = []) => {
    // let cn = [mainClass, ...secondaryClass, ...Object.entries(optionalClasses).filter((el)=> Boolean(el[1]))
    // .map(el=> el[0]) ] //вариант похож на тот что Ульби показал

    const cn = [cls, ...aditional, ...Object.keys(mods).filter((key) => mods[key])];

    return cn.join(" ");
};
