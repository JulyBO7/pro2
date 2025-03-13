import { FC } from "react";
import { Code } from "shared/components/code";
import { ArticleCodeBlockType } from "../../model/types/article";
import cls from "./ArticleCodeBlock.module.scss";

type ArticleCodeBlockProps = {
    className?:string
    block: ArticleCodeBlockType
}

export const ArticleCodeBlock:FC<ArticleCodeBlockProps> = (props) => {
    const { className, block } = props;

    return (
        <div className={cls.container}>
            <Code text={block.code} />
        </div>

    );
};
