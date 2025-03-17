import { FC } from "react";
import { Text } from "shared/components/text";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./ArticleImageBlock.module.scss";
import { ArticleImageBlockType } from "../../model/types/article";

type ArticleImageBlockProps = {
  block: ArticleImageBlockType
    className?: string
}

export const ArticleImageBlock:FC<ArticleImageBlockProps> = (props) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.container, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.image} />
            {block.title && <Text text={block.title} />}
        </div>
    );
};
