import { FC } from "react";
import { Text } from "shared/components/text";
import { classNames } from "shared/lib/helpers/classNames";
import { TextAlign, TextSize } from "shared/components/text/ui/Text";
import cls from "./ArticleTextBlock.module.scss";
import { ArticleTextBlockType } from "../../model/types/article";

type ArticleTextBlockProps = {
    block: ArticleTextBlockType
    className?: string
}

export const ArticleTextBlock:FC<ArticleTextBlockProps> = (props) => {
    const { className, block } = props;

    return (
        <div className={classNames(cls.container, {}, [className])}>
            {block.title && <Text className={cls.title} title={block.title} size={TextSize.L} />}
            {block.paragraphs.map((p) => <Text key={p} align={TextAlign.CENTER} className={cls.paragraph} text={p} />)}
        </div>
    );
};
