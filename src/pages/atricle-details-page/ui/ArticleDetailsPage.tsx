import { FC, useEffect } from "react";
import { ArticleDetails } from "entities/article";
import { useParams } from "react-router-dom";
import { CommentList } from "entities/comment";
import { Text, TextThem } from "shared/components/text";
import { useDispatch, useSelector } from "react-redux";
import { AsyncReducersLoader } from "shared/lib/components/AsyncReducersLoader";
import { useTranslation } from "react-i18next";
import cls from "./ArticleDetailsPage.module.scss";
import { commentListReducer, commentListSelectors } from "../model/slice/commentListSlice";
import { fetchCommentList } from "../model/services/fetchCommentList";

const reducer = {
    commentList: commentListReducer,
};

const ArticleDetailsPage:FC<{}> = () => {
    const { t } = useTranslation("articleDetailesPage");
    const { id } = useParams();
    const comments = useSelector(commentListSelectors.selectAll);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(fetchCommentList(id));
        }
    }, [id, dispatch]);

    if (!id) {
        return <Text theme={TextThem.ERROR} title={t("pageNotFound")} />;
    }

    return (
        <AsyncReducersLoader reducers={reducer}>
            <ArticleDetails id={id} />
            <Text className={cls.title} title={t("comments")} />
            <CommentList comments={comments} />
        </AsyncReducersLoader>

    );
};
export default ArticleDetailsPage;
