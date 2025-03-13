import { FC } from "react";
import { ArticleDetails } from "entities/article";
// import { AsyncReducersLoader } from "shared/lib/components/AsyncReducersLoader";
import { useParams } from "react-router-dom";
// import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
// import { fetchArticleById } from "entities/article/model/services/fetchArticleById";

// const reducer = {
//     article: articleReducer,
// };
const ArticleDetailsPage:FC<{}> = () => {
    const { id } = useParams();
    // const dispatch = useAppDispatch();

    // useEffect(() => {
    //     if (id) {
    //         dispatch(fetchArticleById(id));
    //     }
    // }, [id, dispatch]);

    return (
        <div>
            {/* <AsyncReducersLoader reducers={reducer}> */}
            {id ? <ArticleDetails id={id} /> : null}
            {/* </AsyncReducersLoader> */}
        </div>

    );
};
export default ArticleDetailsPage;
