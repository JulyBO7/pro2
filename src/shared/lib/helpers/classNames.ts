export type SecondaryClass = Record<string, string | boolean | undefined>

export const classNames = (cls: string, mods: SecondaryClass = {}, aditional: Array<string | undefined> = []) => {
    // let cn = [mainClass, ...secondaryClass, ...Object.entries(optionalClasses).filter((el)=> Boolean(el[1]))
    // .map(el=> el[0]) ] //вариант похож на тот что Ульби показал

    const cn = [cls, ...aditional.filter(Boolean), ...Object.keys(mods).filter((key) => mods[key])];

    return cn.join(" ");
};
