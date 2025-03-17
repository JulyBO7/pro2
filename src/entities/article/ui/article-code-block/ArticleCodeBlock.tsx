import { FC } from "react";
import { Code } from "shared/components/code";
import { classNames } from "shared/lib/helpers/classNames";
import { ArticleCodeBlockType } from "../../model/types/article";
import cls from "./ArticleCodeBlock.module.scss";

type ArticleCodeBlockProps = {
    className?:string
    block: ArticleCodeBlockType
}

export const ArticleCodeBlock:FC<ArticleCodeBlockProps> = (props) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.container, {}, [className])}>
            <Code text={block.code} className={cls.code} />
        </div>

    );
};
