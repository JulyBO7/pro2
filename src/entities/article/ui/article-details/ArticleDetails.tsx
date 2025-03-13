import { FC, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "shared/components/avatar";
import { Skeleton, SkeletonTypes } from "shared/components/skeleton";
import { Text, TextThem } from "shared/components/text";
import { Icon } from "shared/components/icon/ui/Icon";
import Eye from "shared/assets/icons/eye.svg";
import Data from "shared/assets/icons/date.svg";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AsyncReducersLoader } from "shared/lib/components/AsyncReducersLoader";
import { TextAlign, TextSize } from "shared/components/text/ui/Text";
import { selectArticleIsLoading } from "../../model/selectors/aritcle-loading-selector/selectArticleIsLoading";
import { ArticleCodeBlock } from "../article-code-block/ArticleCodeBlock";
import { ArticleImageBlock } from "../article-image-block/ArticleImageBlock";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleTextBlock } from "../article-text-block/ArticleTextBlock";
import cls from "./ArticleDetails.module.scss";
import { selectArticleData } from "../../model/selectors/article-data-selector/selectArticleData";
import { articleReducer } from "../../model/slice/articleSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById";
// import { fetchArticleById } from "../../model/services/fetchArticleById";
import { selectArticleError } from "../../model/selectors/article-error-selector/selectArticleError";

type ArticleDetailsProps = {
    id: string
}
const reducer = {
    article: articleReducer,
};
export const ArticleDetails:FC<ArticleDetailsProps> = ({ id }) => {
    const article = useSelector(selectArticleData);
    const isLoading = useSelector(selectArticleIsLoading);
    const error = useSelector(selectArticleError);
    // const isLoading = true;
    const dispatch = useAppDispatch();
    let content;

    useEffect(() => {
        if (!__STORYBOOK__) {
            dispatch(fetchArticleById(id));
        }
    }, [id, dispatch]);

    const getArticleBlocks = useCallback((block: ArticleBlockType) => {
        switch (block.type) {
        case ArticleBlock.CODE:
            return <ArticleCodeBlock block={block} />;
        case ArticleBlock.IMAGE:
            return <ArticleImageBlock block={block} />;
        case ArticleBlock.TEXT:
            return <ArticleTextBlock block={block} />;
        default: return null;
        }
    }, []);

    const blocks = article?.blocks.map(getArticleBlocks);

    if (isLoading) {
        content = (
            <div className={cls.container}>
                <div className={cls.avatar}>
                    <Skeleton type={SkeletonTypes.CURCLE} width="200" height="200" />
                </div>
                <Skeleton width="500" height="30" />
                <Skeleton width="300" height="16" />
                <Skeleton width="50" height="16" />
                <Skeleton width="50" height="16" />
                <Skeleton height="400" />
                <Skeleton height="400" />
                <Skeleton height="400" />
            </div>
        );
    } else if (error) {
        content = (
            <div className={cls.container}>
                <Text align={TextAlign.CENTER} theme={TextThem.ERROR} title={error} />
            </div>
        );
    } else {
        content = (
            <div className={cls.container}>
                <div className={cls.avatar}>
                    <Avatar src={article?.img} size={200} alt="artilce" />
                </div>
                <Text className={cls.title} title={article?.title} size={TextSize.XL} />
                <Text className={cls.subtitle} title={article?.subtitle} />
                <div className={cls.view}>
                    <Icon Svg={Eye} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.data}>
                    <Icon Svg={Data} />
                    <Text text={String(article?.createdAt)} />
                </div>
                {blocks}
            </div>
        );
    }

    return (
        <AsyncReducersLoader reducers={reducer}>
            {content}
        </AsyncReducersLoader>
    );
};
