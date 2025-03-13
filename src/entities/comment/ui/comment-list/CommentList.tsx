import { FC } from "react";
import { CommentCard } from "../comment-card/CommentCard";
import { Comment } from "../../model/types/comment";
import cls from "./CommentList.module.scss";

type CommentListProps = {
    comments: Comment[]
}

export const CommentList:FC<CommentListProps> = ({ comments }) => {
    let style;

    return (
        <div>
            {comments.map((c) => (
                <CommentCard className={cls.comment} key={c.id} comment={c} />
            ))}

        </div>
    );
};
